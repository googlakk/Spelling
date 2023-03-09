const importAllAudio = (r) => {
  return r.keys().map(r);
}

const sounds = importAllAudio(require.context('../assets/audio/', false, /.mp3/));

export default sounds;
