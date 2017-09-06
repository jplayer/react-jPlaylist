export default (loop) => {
  let newLoop;

  if (loop === 'off') {
    newLoop = 'loop';
  } else if (loop === 'loop') {
    newLoop = 'loop-playlist';
  } else {
    newLoop = 'off';
  }
  return newLoop;
};
