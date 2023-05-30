import React, { useState } from 'react';

import Dialog from '@mui/material/Dialog';
import HelpIcon from '@mui/icons-material/Help';


import Btn from '../../modules/Buttons'
import styles from './AnswerModal.module.scss';
import BtnCheck from '../../modules/CheckButtons';
import firework from '../../../assets/img/2eSd.gif'

const AnswerModal = ({ open, correct, word, setOpen, nextWord }) => {

  const [help, setHelp] = useState(false)
  const onClick = () => {
    setHelp(!help)
  }
  const onClose = () => {
    setOpen(!open)
    if (correct) {
      setHelp(false)
      nextWord(true)
    }
  }

  return (
    <Dialog
      className={styles.modal}
      open={open}
    >
      <div className={correct ? styles.modalBody : styles.modalBodyError}>
        {
          correct ? <img className={styles.firework} src={firework} alt="" /> : ''
        }
        <div className={styles.modalMsg}>
          {
            !correct ? help ? word : (
              <div onClick={onClick} className={styles.helpBtn}>
                {/* Show word */}
                <HelpIcon className={styles.helpIcon} />
              </div>
            ) : null
          }
        </div>
        <div className={styles.modalMsg}>
          {correct ? 'Correct answer!' : `Incorrect answer!`}
        </div>
        <div className={styles.nextBtn}>
          <BtnCheck onClick={onClose} title={correct ? 'next' : `repeat`} />
        </div>
      </div>
    </Dialog>
  );
};

export default AnswerModal;
