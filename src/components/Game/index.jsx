import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
// import { useSpeechSynthesis } from 'react-speech-kit'
import axios from 'axios'
import useSound from 'use-sound';

import sounds from '../../utils/sounds';
import stages from '../../utils/stages'
import levels from '../../utils/levels'
import LevelHeader from '../modules/LevelHeader/LevelHeader'
import styles from './Game.module.scss'
import Btn from '../modules/Buttons'
import AnswerModal from './AnswerModal'
import BtnCheck from '../modules/CheckButtons'
import unCorrectAudio from '../../assets/audio/572936__bloodpixelhero__error.mp3'
import CorrectAudio from '../../assets/audio/277021__sandermotions__applause-2.mp3'


const Game = () => {
  // const { speak, voices } = useSpeechSynthesis();
  const [playOff] = useSound(unCorrectAudio);
  const [playOn, {stop}] = useSound(CorrectAudio);
  const [play] = useSound(sounds)
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);

  const stageId = searchParams.get('stage');
  const stage = stages[stageId - 1];
  const levelId = searchParams.get('level');
  const levelImg = levels[levelId - 1].img;

  const [sound, setSound] = useState('');
  const [words, setWords] = useState([]);
  const [currentWord, setCurrentWord] = useState('');
  const [prevWords] = useState([]);
  const [inputValue, setInputValue] = useState('');

  const [open, setOpen] = useState(false);
  const [correct, setCorrect] = useState(false);

  const getWordsList = () => {
    axios.get(
      `https://spellint.herokuapp.com/api/${stage.title.toLowerCase()}/${levelId}`
    ).then((res) => {
      setWords(res.data.words)
    })
  }

  useEffect(() => {
    getWordsList()
  }, [])

  const onChange = (e) => {
    setInputValue(e.target.value)
  }
  // const playSound = (sound) => {
  //   if (sound) {
  //     speak({ text: sound, voice: voices[3], rate: 0.8, pitch: 0.75 })
  //   }
  // }
  const playSound = (sound) => {
    if (sound) {
      sound.play()
    }
  }
  const nextWord = (correct) => {
    if (currentWord && correct) {
      prevWords.push(currentWord)
    }
    if (prevWords.length === words.length && words.length) {
      return alert('Thats all')
    }
    const newWord = words[Math.round(Math.random() * words.length - 1)]
    if (prevWords.includes(newWord)) {
      return nextWord()
    }

    stop()
    setCurrentWord(newWord)
    const newSound = sounds.find((sound) => sound.includes(`/${newWord}.`))
    const audio = new Audio(newSound)
    setSound(audio)
    playSound(audio)
  }

  const checkWord = () => {
    if (inputValue.toLowerCase().trim() !== currentWord.toLowerCase().trim()) {
      setCorrect(false)
      playOff()
    } else {
      playOn()
      setCorrect(true)
      setInputValue('')
    }
    setOpen(true)
  }

  return (
    <div className={styles.container}>
      <LevelHeader stage={stage} levelImg={levelImg} playSound={() => playSound(sound)} />
      <div className={styles.playground}>
        {
          !currentWord
            ? <Btn title={'START'} onClick={nextWord} className={styles.startBtn} />
            : (
              <div className={styles.playForm}>
                <input
                  autoFocus={true}
                  name='word'
                  type='text'
                  onChange={onChange}
                  value={inputValue}
                  className={styles.playInput}
                  autoComplete={false}
                />
                <BtnCheck title={'Check'} onClick={checkWord} className={styles.startBtn} />
              </div>
            )
        }
      </div>
      <AnswerModal
        correct={correct}
        word={currentWord}
        open={open}
        setOpen={setOpen}
        nextWord={nextWord}
      />
    </div>
  )
}

export default Game
