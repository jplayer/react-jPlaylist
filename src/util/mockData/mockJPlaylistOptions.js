import shortid from 'shortid';
import { defaultStatus, defaultOptions } from '../constants';

export default {
  ...defaultStatus,
  ...defaultOptions,
  playlist: [
    {
      title: 'Bubble',
      artist: 'Miaow',
      sources: {
        m4a: 'http://jplayer.org/audio/m4a/Miaow-07-Bubble.m4a',
        oga: 'http://jplayer.org/audio/ogg/Miaow-07-Bubble.ogg',
      },
      free: true,
      id: shortid.generate(),
      poster: 'downinthevalley-poster.jpg',
    },
    {
      title: 'Tempered Song',
      artist: 'Miaow',
      sources: {
        mp3: 'http://www.jplayer.org/audio/mp3/Miaow-01-Tempered-song.mp3',
        oga: 'http://www.jplayer.org/audio/ogg/Miaow-01-Tempered-song.ogg',
      },
      id: shortid.generate(),
    },
    {
      title: 'Cro Magnon Man',
      artist: 'The Stark Palace',
      sources: {
        mp3: 'http://www.jplayer.org/audio/mp3/TSP-01-Cro_magnon_man.mp3',
        oga: 'http://www.jplayer.org/audio/ogg/TSP-01-Cro_magnon_man.ogg',
      },
      id: shortid.generate(),
    },
  ],
};
