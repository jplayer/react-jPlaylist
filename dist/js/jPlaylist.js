var ReactJPlaylist =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 56);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = PropTypes;

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.convertTime = exports.canSetVolume = exports.limitValue = exports.getElementOffset = exports.toRelativePercentage = exports.toPercentage = exports.classes = exports.formatArtistAndTitle = exports.connectWithIndex = exports.connectWithId = undefined;

var _connectWithId = __webpack_require__(58);

var _connectWithId2 = _interopRequireDefault(_connectWithId);

var _connectWithIndex = __webpack_require__(59);

var _connectWithIndex2 = _interopRequireDefault(_connectWithIndex);

var _formatArtistAndTitle = __webpack_require__(60);

var _formatArtistAndTitle2 = _interopRequireDefault(_formatArtistAndTitle);

var _classes = __webpack_require__(61);

var _classes2 = _interopRequireDefault(_classes);

var _toPercentage = __webpack_require__(62);

var _toPercentage2 = _interopRequireDefault(_toPercentage);

var _toRelativePercentage = __webpack_require__(63);

var _toRelativePercentage2 = _interopRequireDefault(_toRelativePercentage);

var _getElementOffset = __webpack_require__(64);

var _getElementOffset2 = _interopRequireDefault(_getElementOffset);

var _limitValue = __webpack_require__(65);

var _limitValue2 = _interopRequireDefault(_limitValue);

var _canSetVolume = __webpack_require__(66);

var _canSetVolume2 = _interopRequireDefault(_canSetVolume);

var _convertTime = __webpack_require__(67);

var _convertTime2 = _interopRequireDefault(_convertTime);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.connectWithId = _connectWithId2.default;
exports.connectWithIndex = _connectWithIndex2.default;
exports.formatArtistAndTitle = _formatArtistAndTitle2.default;
exports.classes = _classes2.default;
exports.toPercentage = _toPercentage2.default;
exports.toRelativePercentage = _toRelativePercentage2.default;
exports.getElementOffset = _getElementOffset2.default;
exports.limitValue = _limitValue2.default;
exports.canSetVolume = _canSetVolume2.default;
exports.convertTime = _convertTime2.default;

/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = React;

/***/ }),
/* 3 */
/***/ (function(module, exports) {

module.exports = Recompose;

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var actionNames = exports.actionNames = {
  SET_MEDIA: 'JPLAYER_SET_MEDIA',
  CLEAR_MEDIA: 'JPLAYER_CLEAR_MEDIA',
  PLAY: 'JPLAYER_PLAY',
  PAUSE: 'JPLAYER_PAUSE',
  PLAY_HEAD: 'JPLAYER_PLAY_HEAD',
  VOLUME: 'JPLAYER_VOLUME',
  MUTE: 'JPLAYER_MUTE',
  FOCUS: 'JPLAYER_FOCUS',
  SET_OPTION: 'JPLAYER_SET_JPLAYER_OPTION'
};

var errors = exports.errors = {
  FORMAT_NO_SUPPORT: 'It is not possible to play any media format ' + 'provided on this browser using your current defaultOptions.',
  URL_NO_SUPPORT: 'The media URL could not be loaded.',
  URL_NOT_SET: 'Attempted to issue media playback commands while no media url is set.',
  INVALID_GLOBAL_METHOD: 'You passed an invalid jPlayer method to the global array'
};

var hints = exports.hints = {
  FORMAT_NO_SUPPORT: 'The browser may not support these file types.',
  URL_NO_SUPPORT: 'Check the media URL is valid.',
  URL_NOT_SET: 'Pass the media through the defaultOptions or use the setMedia() ' + 'action that is passed into the component props.',
  INVALID_GLOBAL_METHOD: 'Remove the invalid method from the "global" option'
};

var classes = exports.classes = {
  MEDIA: 'jp-media',
  JPLAYER: 'jp-jplayer',
  MUTE: 'jp-mute',
  DOWNLOAD: 'jp-download',
  VOLUME_BAR: 'jp-volume-bar',
  VOLUME_BAR_VALUE: 'jp-volume-bar-value',
  PLAYBACK_RATE_BAR: 'jp-playback-rate-bar',
  PLAYBACK_RATE_BAR_VALUE: 'jp-playback-rate-bar-value',
  BUFFER_BAR: 'jp-buffer-bar',
  PROGRESS: 'jp-progress',
  SEEK_BAR: 'jp-seek-bar',
  PLAY_BAR: 'jp-play-bar',
  SEEKING: 'jp-seeking-bg',
  GUI: 'jp-gui',
  NO_BROWSER_SUPPORT: 'jp-no-browser-support',
  PLAY: 'jp-play',
  PAUSE: 'jp-pause',
  STOP: 'jp-stop',
  REPEAT: 'jp-repeat',
  FULL_SCREEN: 'jp-full-screen',
  CURRENT_TIME: 'jp-current-time',
  DURATION: 'jp-duration',
  DETAILS: 'jp-details',
  TITLE: 'jp-title',
  SHUFFLE: 'jp-shuffle',
  PREVIOUS: 'jp-previous',
  NEXT: 'jp-next',
  POSTER: 'jp-poster',
  states: {
    AUDIO: 'jp-state-audio',
    VIDEO: 'jp-state-video',
    PLAYING: 'jp-state-playing',
    IDLE: 'jp-state-idle',
    SEEKING: 'jp-state-seeking',
    MUTED: 'jp-state-muted',
    VOLUME_LOW: 'jp-state-volume-low',
    VOLUME_HIGH: 'jp-state-volume-high',
    LOOPED: 'jp-state-looped',
    FULL_SCREEN: 'jp-state-full-screen',
    SHUFFLED: 'jp-state-shuffled',
    NO_BROWSER_SUPPORT: 'jp-state-no-browser-support',
    NO_VOLUME_SUPPORT: 'jp-state-no-volume-support'
  }
};

var keyIgnoredElementNames = exports.keyIgnoredElementNames = ['INPUT', 'TEXTAREA', 'SELECT'];

var formats = exports.formats = {
  mp3: {
    CODEC: 'audio/mpeg',
    MEDIA: 'audio'
  },
  m4a: { // AAC / MP4
    CODEC: 'audio/mp4; codecs="mp4a.40.2"',
    MEDIA: 'audio'
  },
  m3u8a: { // AAC / MP4 / Apple HLS
    CODEC: 'application/vnd.apple.mpegurl; codecs="mp4a.40.2"',
    MEDIA: 'audio'
  },
  m3ua: { // M3U
    CODEC: 'audio/mpegurl',
    MEDIA: 'audio'
  },
  oga: { // OGG
    CODEC: 'audio/ogg; codecs="vorbis, opus"',
    MEDIA: 'audio'
  },
  flac: { // FLAC
    CODEC: 'audio/x-flac',
    MEDIA: 'audio'
  },
  wav: { // PCM
    CODEC: 'audio/wav; codecs="1"',
    MEDIA: 'audio'
  },
  webma: { // WEBM
    CODEC: 'audio/webm; codecs="vorbis"',
    MEDIA: 'audio'
  },
  fla: { // FLV / F4A
    CODEC: 'audio/x-flv',
    MEDIA: 'audio'
  },
  rtmpa: { // RTMP AUDIO
    CODEC: 'audio/rtmp; codecs="rtmp"',
    MEDIA: 'audio'
  },
  m4v: { // H.264 / MP4
    CODEC: 'video/mp4; codecs="avc1.42E01E, mp4a.40.2"',
    MEDIA: 'video'
  },
  m3u8v: { // H.264 / AAC / MP4 / Apple HLS
    CODEC: 'application/vnd.apple.mpegurl; codecs="avc1.42E01E, mp4a.40.2"',
    MEDIA: 'video'
  },
  m3uv: { // M3U
    CODEC: 'audio/mpegurl',
    MEDIA: 'video'
  },
  ogv: { // OGG
    CODEC: 'video/ogg; codecs="theora, vorbis"',
    MEDIA: 'video'
  },
  webmv: { // WEBM
    CODEC: 'video/webm; codecs="vorbis, vp8"',
    MEDIA: 'video'
  },
  flv: { // FLV / F4V
    CODEC: 'video/x-flv',
    MEDIA: 'video'
  },
  rtmpv: { // RTMP VIDEO
    CODEC: 'video/rtmp; codecs="rtmp"',
    MEDIA: 'video'
  }
};

var defaultStatus = exports.defaultStatus = {
  newTime: null, // Needed to set a newTime as currentTime is auto updated by the audio
  guiFadeOut: false,
  playHeadPercent: 0,
  mediaSettings: {
    video: false,
    nonSupported: false,
    formats: []
  },
  paused: true,
  seeking: false,
  src: null,
  currentTimeText: '0:00',
  durationText: null,
  seekPercent: 0,
  currentPercentRelative: 0,
  currentPercentAbsolute: 0,
  currentTime: 0,
  duration: 0,
  bufferedTimeRanges: [],
  focused: false
};

var defaultOptions = exports.defaultOptions = {
  preload: 'metadata',
  minPlaybackRate: 0.5,
  maxPlaybackRate: 4,
  playbackRate: 1.0,
  defaultPlaybackRate: 1.0,
  bufferColour: '#ddd',
  volume: 0.8,
  barDrag: true,
  pauseOthersOnPlay: true,
  startGuiFadeOut: false,
  guiFadeHoldTime: 2000,
  media: {
    sources: {},
    tracks: [],
    title: null,
    artist: null,
    poster: null,
    free: false
  },
  keyBindings: {},
  showRemainingDuration: false,
  muted: false,
  loop: false,
  autoplay: false,
  smoothPlayBar: false,
  fullScreen: false,
  verticalPlaybackRate: false,
  verticalVolume: false,
  keyEnabled: true,
  timeFormats: {
    showHour: false,
    showMin: true,
    showSec: true,
    padHour: false,
    padMin: true,
    padSec: true,
    sepHour: ':',
    sepMin: ':',
    sepSec: ''
  }
};

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.setOption = exports.focus = exports.setMute = exports.setVolume = exports.setPlayHead = exports.pause = exports.play = exports.clearMedia = exports.setMedia = undefined;

var _constants = __webpack_require__(4);

var setMedia = exports.setMedia = function setMedia(id, media) {
  return {
    type: _constants.actionNames.SET_MEDIA,
    id: id,
    media: media
  };
};
var clearMedia = exports.clearMedia = function clearMedia(id) {
  return {
    type: _constants.actionNames.CLEAR_MEDIA,
    id: id
  };
};
var play = exports.play = function play(id, time) {
  return {
    type: _constants.actionNames.PLAY,
    id: id,
    time: time
  };
};
var pause = exports.pause = function pause(id, time) {
  return {
    type: _constants.actionNames.PAUSE,
    id: id,
    time: time
  };
};
var setPlayHead = exports.setPlayHead = function setPlayHead(id, percent) {
  return {
    type: _constants.actionNames.PLAY_HEAD,
    id: id,
    percent: percent
  };
};
var setVolume = exports.setVolume = function setVolume(id, volume) {
  return {
    type: _constants.actionNames.VOLUME,
    id: id,
    volume: volume
  };
};
var setMute = exports.setMute = function setMute(id, mute) {
  return {
    type: _constants.actionNames.MUTE,
    id: id,
    mute: mute
  };
};
var focus = exports.focus = function focus(id) {
  return {
    type: _constants.actionNames.FOCUS,
    id: id
  };
};
var setOption = exports.setOption = function setOption(id, key, value) {
  return {
    type: _constants.actionNames.SET_OPTION,
    id: id,
    key: key,
    value: value
  };
};

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var actionNames = exports.actionNames = {
  SET_PLAYLIST: 'JPLAYLIST_SET_PLAYLIST',
  SET_OPTION: 'JPLAYLIST_SET_PLAYLIST_OPTION',
  ADD: 'JPLAYLIST_ADD',
  REMOVE: 'JPLAYLIST_REMOVE',
  CLEAR: 'JPLAYLIST_CLEAR',
  SELECT: 'JPLAYLIST_SELECT',
  PLAY: 'JPLAYLIST_PLAY',
  SHUFFLE: 'JPLAYLIST_SHUFFLE',
  NEXT: 'JPLAYLIST_NEXT',
  PREVIOUS: 'JPLAYLIST_PREVIOUS'
};

var classes = exports.classes = {
  SHUFFLE: 'jp-shuffle',
  PREVIOUS: 'jp-previous',
  NEXT: 'jp-next',
  TOGGLE_PLAYLIST: 'jp-toggle-playlist',
  PLAYLIST: 'jp-playlist',
  REMOVE: 'jp-remove',
  MEDIA_LINK: 'jp-media-link',
  CURRENT: 'jp-current',
  states: {
    LOOPED_PLAYLIST: 'jp-state-looped-playlist',
    SHUFFLED: 'jp-state-shuffled'
  }
};

var defaultStatus = exports.defaultStatus = {
  current: 0,
  shuffled: false
};

var defaultOptions = exports.defaultOptions = {
  loopOnPrevious: true,
  shuffleOnLoop: true,
  loop: 'loop-playlist',
  hidePlaylist: false,
  playlist: []
};

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.previous = exports.next = exports.shuffle = exports.play = exports.select = exports.clear = exports.remove = exports.add = exports.setPlaylist = exports.setOption = undefined;

var _constants = __webpack_require__(6);

var setOption = exports.setOption = function setOption(id, key, value) {
  return {
    type: _constants.actionNames.SET_OPTION,
    id: id,
    key: key,
    value: value
  };
};

var setPlaylist = exports.setPlaylist = function setPlaylist(id, playlist) {
  return {
    type: _constants.actionNames.SET_PLAYLIST,
    id: id,
    playlist: playlist
  };
};

var add = exports.add = function add(id, media, playNow) {
  return {
    type: _constants.actionNames.ADD,
    id: id,
    media: media,
    playNow: playNow
  };
};

var remove = exports.remove = function remove(id, index) {
  return {
    type: _constants.actionNames.REMOVE,
    id: id,
    index: index
  };
};

var clear = exports.clear = function clear(id) {
  return {
    type: _constants.actionNames.CLEAR,
    id: id
  };
};

var select = exports.select = function select(id, index) {
  return {
    type: _constants.actionNames.SELECT,
    id: id,
    index: index
  };
};

var play = exports.play = function play(id, index) {
  return {
    type: _constants.actionNames.PLAY,
    id: id,
    index: index
  };
};

var shuffle = exports.shuffle = function shuffle(id, shuffled, playNow) {
  return {
    type: _constants.actionNames.SHUFFLE,
    id: id,
    shuffled: shuffled,
    playNow: playNow,
    shuffleSort: 0.5 - Math.random()
  };
};

var next = exports.next = function next(id) {
  return {
    type: _constants.actionNames.NEXT,
    id: id
  };
};

var previous = exports.previous = function previous(id) {
  return {
    type: _constants.actionNames.PREVIOUS,
    id: id
  };
};

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.BrowserUnsupportedComponent = exports.CurrentTimeComponent = exports.DurationComponent = exports.DownloadComponent = exports.VolumeBarValueComponent = exports.VolumeBarComponent = exports.PlaybackRateBarValueComponent = exports.PlaybackRateBarComponent = exports.SeekBarComponent = exports.RepeatComponent = exports.PlayComponent = exports.MuteComponent = exports.FullScreenComponent = exports.TitleComponent = exports.PosterComponent = exports.BufferBarComponent = exports.PlayBarComponent = exports.JPlayerComponent = exports.AudioComponent = exports.VideoComponent = exports.GuiComponent = exports.BrowserUnsupported = exports.CurrentTime = exports.Duration = exports.Download = exports.VolumeBarValue = exports.VolumeBar = exports.PlaybackRateBarValue = exports.PlaybackRateBar = exports.Repeat = exports.Play = exports.Mute = exports.FullScreen = exports.Title = exports.Audio = exports.Video = exports.Poster = exports.BufferBar = exports.PlayBar = exports.SeekBar = exports.Gui = exports.actions = exports.reducer = exports.constants = exports.initializeOptions = undefined;

var _initializeOptions = __webpack_require__(20);

var _initializeOptions2 = _interopRequireDefault(_initializeOptions);

var _reducer = __webpack_require__(57);

var _reducer2 = _interopRequireDefault(_reducer);

var _actions = __webpack_require__(5);

var actions = _interopRequireWildcard(_actions);

var _constants = __webpack_require__(4);

var constants = _interopRequireWildcard(_constants);

var _guiContainer = __webpack_require__(70);

var _guiContainer2 = _interopRequireDefault(_guiContainer);

var _videoContainer = __webpack_require__(79);

var _videoContainer2 = _interopRequireDefault(_videoContainer);

var _audioContainer = __webpack_require__(85);

var _audioContainer2 = _interopRequireDefault(_audioContainer);

var _jPlayerContainer = __webpack_require__(86);

var _jPlayerContainer2 = _interopRequireDefault(_jPlayerContainer);

var _playBarContainer = __webpack_require__(93);

var _playBarContainer2 = _interopRequireDefault(_playBarContainer);

var _bufferBarContainer = __webpack_require__(95);

var _bufferBarContainer2 = _interopRequireDefault(_bufferBarContainer);

var _posterContainer = __webpack_require__(96);

var _posterContainer2 = _interopRequireDefault(_posterContainer);

var _titleContainer = __webpack_require__(97);

var _titleContainer2 = _interopRequireDefault(_titleContainer);

var _fullScreenContainer = __webpack_require__(98);

var _fullScreenContainer2 = _interopRequireDefault(_fullScreenContainer);

var _muteContainer = __webpack_require__(99);

var _muteContainer2 = _interopRequireDefault(_muteContainer);

var _playContainer = __webpack_require__(100);

var _playContainer2 = _interopRequireDefault(_playContainer);

var _repeatContainer = __webpack_require__(101);

var _repeatContainer2 = _interopRequireDefault(_repeatContainer);

var _seekBarContainer = __webpack_require__(102);

var _seekBarContainer2 = _interopRequireDefault(_seekBarContainer);

var _playbackRateBarContainer = __webpack_require__(104);

var _playbackRateBarContainer2 = _interopRequireDefault(_playbackRateBarContainer);

var _playbackRateBarValueContainer = __webpack_require__(38);

var _playbackRateBarValueContainer2 = _interopRequireDefault(_playbackRateBarValueContainer);

var _volumeBarContainer = __webpack_require__(105);

var _volumeBarContainer2 = _interopRequireDefault(_volumeBarContainer);

var _volumeBarValueContainer = __webpack_require__(41);

var _volumeBarValueContainer2 = _interopRequireDefault(_volumeBarValueContainer);

var _downloadContainer = __webpack_require__(106);

var _downloadContainer2 = _interopRequireDefault(_downloadContainer);

var _durationContainer = __webpack_require__(107);

var _durationContainer2 = _interopRequireDefault(_durationContainer);

var _currentTimeContainer = __webpack_require__(108);

var _currentTimeContainer2 = _interopRequireDefault(_currentTimeContainer);

var _browserUnsupportedContainer = __webpack_require__(109);

var _browserUnsupportedContainer2 = _interopRequireDefault(_browserUnsupportedContainer);

var _gui = __webpack_require__(23);

var _gui2 = _interopRequireDefault(_gui);

var _video = __webpack_require__(24);

var _video2 = _interopRequireDefault(_video);

var _audio = __webpack_require__(26);

var _audio2 = _interopRequireDefault(_audio);

var _jPlayer = __webpack_require__(27);

var _jPlayer2 = _interopRequireDefault(_jPlayer);

var _playBar = __webpack_require__(28);

var _playBar2 = _interopRequireDefault(_playBar);

var _bufferBar = __webpack_require__(29);

var _bufferBar2 = _interopRequireDefault(_bufferBar);

var _poster = __webpack_require__(30);

var _poster2 = _interopRequireDefault(_poster);

var _title = __webpack_require__(31);

var _title2 = _interopRequireDefault(_title);

var _fullScreen = __webpack_require__(32);

var _fullScreen2 = _interopRequireDefault(_fullScreen);

var _mute = __webpack_require__(33);

var _mute2 = _interopRequireDefault(_mute);

var _play = __webpack_require__(34);

var _play2 = _interopRequireDefault(_play);

var _repeat = __webpack_require__(35);

var _repeat2 = _interopRequireDefault(_repeat);

var _seekBar = __webpack_require__(36);

var _seekBar2 = _interopRequireDefault(_seekBar);

var _playbackRateBar = __webpack_require__(37);

var _playbackRateBar2 = _interopRequireDefault(_playbackRateBar);

var _playbackRateBarValue = __webpack_require__(39);

var _playbackRateBarValue2 = _interopRequireDefault(_playbackRateBarValue);

var _volumeBar = __webpack_require__(40);

var _volumeBar2 = _interopRequireDefault(_volumeBar);

var _volumeBarValue = __webpack_require__(42);

var _volumeBarValue2 = _interopRequireDefault(_volumeBarValue);

var _download = __webpack_require__(43);

var _download2 = _interopRequireDefault(_download);

var _duration = __webpack_require__(44);

var _duration2 = _interopRequireDefault(_duration);

var _currentTime = __webpack_require__(45);

var _currentTime2 = _interopRequireDefault(_currentTime);

var _browserUnsupported = __webpack_require__(46);

var _browserUnsupported2 = _interopRequireDefault(_browserUnsupported);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Containers
/* eslint-disable max-len */

exports.default = _jPlayerContainer2.default;

// Components

exports.initializeOptions = _initializeOptions2.default;
exports.constants = constants;
exports.reducer = _reducer2.default;
exports.actions = actions;
exports.Gui = _guiContainer2.default;
exports.SeekBar = _seekBarContainer2.default;
exports.PlayBar = _playBarContainer2.default;
exports.BufferBar = _bufferBarContainer2.default;
exports.Poster = _posterContainer2.default;
exports.Video = _videoContainer2.default;
exports.Audio = _audioContainer2.default;
exports.Title = _titleContainer2.default;
exports.FullScreen = _fullScreenContainer2.default;
exports.Mute = _muteContainer2.default;
exports.Play = _playContainer2.default;
exports.Repeat = _repeatContainer2.default;
exports.PlaybackRateBar = _playbackRateBarContainer2.default;
exports.PlaybackRateBarValue = _playbackRateBarValueContainer2.default;
exports.VolumeBar = _volumeBarContainer2.default;
exports.VolumeBarValue = _volumeBarValueContainer2.default;
exports.Download = _downloadContainer2.default;
exports.Duration = _durationContainer2.default;
exports.CurrentTime = _currentTimeContainer2.default;
exports.BrowserUnsupported = _browserUnsupportedContainer2.default;
exports.GuiComponent = _gui2.default;
exports.VideoComponent = _video2.default;
exports.AudioComponent = _audio2.default;
exports.JPlayerComponent = _jPlayer2.default;
exports.PlayBarComponent = _playBar2.default;
exports.BufferBarComponent = _bufferBar2.default;
exports.PosterComponent = _poster2.default;
exports.TitleComponent = _title2.default;
exports.FullScreenComponent = _fullScreen2.default;
exports.MuteComponent = _mute2.default;
exports.PlayComponent = _play2.default;
exports.RepeatComponent = _repeat2.default;
exports.SeekBarComponent = _seekBar2.default;
exports.PlaybackRateBarComponent = _playbackRateBar2.default;
exports.PlaybackRateBarValueComponent = _playbackRateBarValue2.default;
exports.VolumeBarComponent = _volumeBar2.default;
exports.VolumeBarValueComponent = _volumeBarValue2.default;
exports.DownloadComponent = _download2.default;
exports.DurationComponent = _duration2.default;
exports.CurrentTimeComponent = _currentTime2.default;
exports.BrowserUnsupportedComponent = _browserUnsupported2.default;

/***/ }),
/* 9 */
/***/ (function(module, exports) {

module.exports = _.merge;

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// turn {x: {val: 1, stiffness: 1, damping: 2}, y: 2} generated by
// `{x: spring(1, {stiffness: 1, damping: 2}), y: 2}` into {x: 1, y: 2}



exports.__esModule = true;
exports['default'] = stripStyle;

function stripStyle(style) {
  var ret = {};
  for (var key in style) {
    if (!Object.prototype.hasOwnProperty.call(style, key)) {
      continue;
    }
    ret[key] = typeof style[key] === 'number' ? style[key] : style[key].val;
  }
  return ret;
}

module.exports = exports['default'];

/***/ }),
/* 11 */
/***/ (function(module, exports) {

module.exports = ReactRedux;

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// currently used to initiate the velocity style object to 0


exports.__esModule = true;
exports['default'] = mapToZero;

function mapToZero(obj) {
  var ret = {};
  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      ret[key] = 0;
    }
  }
  return ret;
}

module.exports = exports['default'];

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// stepper is used a lot. Saves allocation to return the same array wrapper.
// This is fine and danger-free against mutations because the callsite
// immediately destructures it and gets the numbers inside without passing the


exports.__esModule = true;
exports["default"] = stepper;

var reusedTuple = [0, 0];

function stepper(secondPerFrame, x, v, destX, k, b, precision) {
  // Spring stiffness, in kg / s^2

  // for animations, destX is really spring length (spring at rest). initial
  // position is considered as the stretched/compressed position of a spring
  var Fspring = -k * (x - destX);

  // Damping, in kg / s
  var Fdamper = -b * v;

  // usually we put mass here, but for animation purposes, specifying mass is a
  // bit redundant. you could simply adjust k and b accordingly
  // let a = (Fspring + Fdamper) / mass;
  var a = Fspring + Fdamper;

  var newV = v + a * secondPerFrame;
  var newX = x + newV * secondPerFrame;

  if (Math.abs(newV) < precision && Math.abs(newX - destX) < precision) {
    reusedTuple[0] = destX;
    reusedTuple[1] = 0;
    return reusedTuple;
  }

  reusedTuple[0] = newX;
  reusedTuple[1] = newV;
  return reusedTuple;
}

module.exports = exports["default"];
// array reference around.

/***/ }),
/* 14 */
/***/ (function(module, exports) {

// Generated by CoffeeScript 1.7.1
(function() {
  var getNanoSeconds, hrtime, loadTime;

  if ((typeof performance !== "undefined" && performance !== null) && performance.now) {
    module.exports = function() {
      return performance.now();
    };
  } else if ((typeof process !== "undefined" && process !== null) && process.hrtime) {
    module.exports = function() {
      return (getNanoSeconds() - loadTime) / 1e6;
    };
    hrtime = process.hrtime;
    getNanoSeconds = function() {
      var hr;
      hr = hrtime();
      return hr[0] * 1e9 + hr[1];
    };
    loadTime = getNanoSeconds();
  } else if (Date.now) {
    module.exports = function() {
      return Date.now() - loadTime;
    };
    loadTime = Date.now();
  } else {
    module.exports = function() {
      return new Date().getTime() - loadTime;
    };
    loadTime = new Date().getTime();
  }

}).call(this);


/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

var now = __webpack_require__(73)
  , root = typeof window === 'undefined' ? global : window
  , vendors = ['moz', 'webkit']
  , suffix = 'AnimationFrame'
  , raf = root['request' + suffix]
  , caf = root['cancel' + suffix] || root['cancelRequest' + suffix]

for(var i = 0; !raf && i < vendors.length; i++) {
  raf = root[vendors[i] + 'Request' + suffix]
  caf = root[vendors[i] + 'Cancel' + suffix]
      || root[vendors[i] + 'CancelRequest' + suffix]
}

// Some versions of FF have rAF but not cAF
if(!raf || !caf) {
  var last = 0
    , id = 0
    , queue = []
    , frameDuration = 1000 / 60

  raf = function(callback) {
    if(queue.length === 0) {
      var _now = now()
        , next = Math.max(0, frameDuration - (_now - last))
      last = next + _now
      setTimeout(function() {
        var cp = queue.slice(0)
        // Clear queue here to prevent
        // callbacks from appending listeners
        // to the current frame's queue
        queue.length = 0
        for(var i = 0; i < cp.length; i++) {
          if(!cp[i].cancelled) {
            try{
              cp[i].callback(last)
            } catch(e) {
              setTimeout(function() { throw e }, 0)
            }
          }
        }
      }, Math.round(next))
    }
    queue.push({
      handle: ++id,
      callback: callback,
      cancelled: false
    })
    return id
  }

  caf = function(handle) {
    for(var i = 0; i < queue.length; i++) {
      if(queue[i].handle === handle) {
        queue[i].cancelled = true
      }
    }
  }
}

module.exports = function(fn) {
  // Wrap in a new function to prevent
  // `cancel` potentially being assigned
  // to the native rAF function
  return raf.call(root, fn)
}
module.exports.cancel = function() {
  caf.apply(root, arguments)
}
module.exports.polyfill = function() {
  root.requestAnimationFrame = raf
  root.cancelAnimationFrame = caf
}


/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// usage assumption: currentStyle values have already been rendered but it says
// nothing of whether currentStyle is stale (see unreadPropStyle)


exports.__esModule = true;
exports['default'] = shouldStopAnimation;

function shouldStopAnimation(currentStyle, style, currentVelocity) {
  for (var key in style) {
    if (!Object.prototype.hasOwnProperty.call(style, key)) {
      continue;
    }

    if (currentVelocity[key] !== 0) {
      return false;
    }

    var styleValue = typeof style[key] === 'number' ? style[key] : style[key].val;
    // stepper will have already taken care of rounding precision errors, so
    // won't have such thing as 0.9999 !=== 1
    if (currentStyle[key] !== styleValue) {
      return false;
    }
  }

  return true;
}

module.exports = exports['default'];

/***/ }),
/* 17 */
/***/ (function(module, exports) {

module.exports = classNames;

/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _reactJplayerUtils = __webpack_require__(1);

var _recompose = __webpack_require__(3);

var _bar = __webpack_require__(103);

var _bar2 = _interopRequireDefault(_bar);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var mapStateToProps = function mapStateToProps(_ref, _ref2) {
  var jPlayers = _ref.jPlayers;
  var id = _ref2.id;
  return {
    barDrag: jPlayers[id].barDrag
  };
};

var handlers = function handlers() {
  var bar = void 0;
  var dragging = void 0;

  return {
    setBar: function setBar() {
      return function (ref) {
        bar = ref;
      };
    },
    onClick: function onClick(props) {
      return function (e) {
        return props.clickMoveBar(bar, e);
      };
    },
    onTouchStart: function onTouchStart() {
      return function () {
        dragging = true;
      };
    },
    onTouchMove: function onTouchMove(props) {
      return function (e) {
        if (props.barDrag && dragging) {
          props.touchMoveBar(bar, e);
        }
      };
    },
    onTouchEnd: function onTouchEnd() {
      return function () {
        dragging = false;
      };
    },
    onMouseMove: function onMouseMove(props) {
      return function (e) {
        if (props.barDrag && dragging) {
          props.clickMoveBar(bar, e);
        }
      };
    },
    onMouseDown: function onMouseDown() {
      return function () {
        dragging = true;
      };
    },
    onMouseUp: function onMouseUp() {
      return function () {
        dragging = false;
      };
    }
  };
};

var lifecycle = {
  componentWillMount: function componentWillMount() {
    document.addEventListener('mouseup', this.props.onMouseUp);
    document.addEventListener('mousemove', this.props.onMouseMove);
    document.addEventListener('touchmove', this.props.onTouchMove, { passive: false });
    document.addEventListener('touchend', this.props.onTouchEnd);
  },
  componentWillUnmount: function componentWillUnmount() {
    document.removeEventListener('mouseup', this.props.onMouseUp);
    document.removeEventListener('mousemove', this.props.onMouseMove);
    document.removeEventListener('touchmove', this.props.onTouchMove);
    document.removeEventListener('touchend', this.props.onTouchEnd);
  }
};

exports.default = (0, _recompose.compose)((0, _reactJplayerUtils.connectWithId)(mapStateToProps), (0, _recompose.withHandlers)(handlers), (0, _recompose.lifecycle)(lifecycle))(_bar2.default);

/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.initialState = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _lodash = __webpack_require__(9);

var _lodash2 = _interopRequireDefault(_lodash);

var _reactJplayer = __webpack_require__(8);

var _constants = __webpack_require__(6);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var initialState = exports.initialState = {};

var options = function options(jPlayerOptions, jPlaylistOptions) {
  initialState[jPlayerOptions.id] = (0, _lodash2.default)({}, _constants.defaultStatus, _constants.defaultOptions, jPlaylistOptions);

  if (Array.isArray(jPlaylistOptions.playlist)) {
    var media = jPlaylistOptions.playlist[0];

    return (0, _reactJplayer.initializeOptions)(_extends({}, jPlayerOptions, {
      media: media
    }));
  }

  return (0, _reactJplayer.initializeOptions)(jPlayerOptions);
};

exports.default = options;

/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.initialState = undefined;

var _lodash = __webpack_require__(9);

var _lodash2 = _interopRequireDefault(_lodash);

var _constants = __webpack_require__(4);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var initialState = exports.initialState = {};

var options = function options(jPlayerOptions) {
  initialState[jPlayerOptions.id] = (0, _lodash2.default)({}, _constants.defaultStatus, _constants.defaultOptions, jPlayerOptions);
};

exports.default = options;

/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

function _interopRequire(obj) { return obj && obj.__esModule ? obj['default'] : obj; }

var _Motion = __webpack_require__(72);

exports.Motion = _interopRequire(_Motion);

var _StaggeredMotion = __webpack_require__(74);

exports.StaggeredMotion = _interopRequire(_StaggeredMotion);

var _TransitionMotion = __webpack_require__(75);

exports.TransitionMotion = _interopRequire(_TransitionMotion);

var _spring = __webpack_require__(77);

exports.spring = _interopRequire(_spring);

var _presets = __webpack_require__(22);

exports.presets = _interopRequire(_presets);

var _stripStyle = __webpack_require__(10);

exports.stripStyle = _interopRequire(_stripStyle);

// deprecated, dummy warning function

var _reorderKeys = __webpack_require__(78);

exports.reorderKeys = _interopRequire(_reorderKeys);

/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports["default"] = {
  noWobble: { stiffness: 170, damping: 26 }, // the default, if nothing provided
  gentle: { stiffness: 120, damping: 14 },
  wobbly: { stiffness: 180, damping: 12 },
  stiff: { stiffness: 210, damping: 20 }
};
module.exports = exports["default"];

/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(2);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(0);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _constants = __webpack_require__(4);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Gui = function Gui(_ref) {
  var opacity = _ref.opacity,
      children = _ref.children,
      onMouseMove = _ref.onMouseMove;
  return _react2.default.createElement(
    'div',
    {
      className: _constants.classes.GUI,
      onMouseMove: onMouseMove,
      style: { opacity: opacity }
    },
    children
  );
};

Gui.propTypes = {
  opacity: _propTypes2.default.number.isRequired,
  onMouseMove: _propTypes2.default.func.isRequired,
  children: _propTypes2.default.oneOfType([_propTypes2.default.arrayOf(_propTypes2.default.element), _propTypes2.default.element]).isRequired
};

exports.default = Gui;

/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(2);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(0);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _recompose = __webpack_require__(3);

var _mediaContainer = __webpack_require__(25);

var _mediaContainer2 = _interopRequireDefault(_mediaContainer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* eslint-disable jsx-a11y/media-has-caption */

var Video = function Video(props) {
  return _react2.default.createElement(
    _mediaContainer2.default,
    {
      onAbort: props.onAbort,
      onCanPlay: props.onCanPlay,
      onCanPlayThrough: props.onCanPlayThrough,
      onDurationChange: props.onDurationChange,
      onEmptied: props.onEmptied,
      onEncrypted: props.onEncrypted,
      onEnded: props.onEnded,
      onError: props.onError,
      onLoadedData: props.onLoadedData,
      onLoadedMetadata: props.onLoadedMetadata,
      onLoadStart: props.onLoadStart,
      onPause: props.onPause,
      onPlay: props.onPlay,
      onPlaying: props.onPlaying,
      onProgress: props.onProgress,
      onRateChange: props.onRateChange,
      onSeeked: props.onSeeked,
      onSeeking: props.onSeeking,
      onStalled: props.onStalled,
      onSuspend: props.onSuspend,
      onTimeUpdate: props.onTimeUpdate,
      onVolumeChange: props.onVolumeChange,
      onWaiting: props.onWaiting
    },
    _react2.default.createElement('video', null)
  );
};

Video.defaultProps = {
  onAbort: Function.prototype,
  onCanPlay: Function.prototype,
  onCanPlayThrough: Function.prototype,
  onDurationChange: Function.prototype,
  onEmptied: Function.prototype,
  onEncrypted: Function.prototype,
  onEnded: Function.prototype,
  onError: Function.prototype,
  onLoadedData: Function.prototype,
  onLoadedMetadata: Function.prototype,
  onLoadStart: Function.prototype,
  onPause: Function.prototype,
  onPlay: Function.prototype,
  onPlaying: Function.prototype,
  onProgress: Function.prototype,
  onRateChange: Function.prototype,
  onSeeked: Function.prototype,
  onSeeking: Function.prototype,
  onStalled: Function.prototype,
  onSuspend: Function.prototype,
  onTimeUpdate: Function.prototype,
  onVolumeChange: Function.prototype,
  onWaiting: Function.prototype
};

Video.propTypes = {
  onAbort: _propTypes2.default.func,
  onCanPlay: _propTypes2.default.func,
  onCanPlayThrough: _propTypes2.default.func,
  onDurationChange: _propTypes2.default.func,
  onEmptied: _propTypes2.default.func,
  onEncrypted: _propTypes2.default.func,
  onEnded: _propTypes2.default.func,
  onError: _propTypes2.default.func,
  onLoadedData: _propTypes2.default.func,
  onLoadedMetadata: _propTypes2.default.func,
  onLoadStart: _propTypes2.default.func,
  onPause: _propTypes2.default.func,
  onPlay: _propTypes2.default.func,
  onPlaying: _propTypes2.default.func,
  onProgress: _propTypes2.default.func,
  onRateChange: _propTypes2.default.func,
  onSeeked: _propTypes2.default.func,
  onSeeking: _propTypes2.default.func,
  onStalled: _propTypes2.default.func,
  onSuspend: _propTypes2.default.func,
  onTimeUpdate: _propTypes2.default.func,
  onVolumeChange: _propTypes2.default.func,
  onWaiting: _propTypes2.default.func
};

exports.default = (0, _recompose.compose)((0, _recompose.branch)(function (props) {
  return props.require;
}, (0, _recompose.renderComponent)(Video)))((0, _recompose.renderNothing)(null));

/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _reactJplayerUtils = __webpack_require__(1);

var _recompose = __webpack_require__(3);

var _media = __webpack_require__(80);

var _media2 = _interopRequireDefault(_media);

var _actions = __webpack_require__(5);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var mapStateToProps = function mapStateToProps(_ref, _ref2) {
  var jPlayers = _ref.jPlayers;
  var id = _ref2.id;
  return {
    loop: jPlayers[id].loop,
    src: jPlayers[id].src,
    playHeadPercent: jPlayers[id].playHeadPercent,
    paused: jPlayers[id].paused,
    defaultPlaybackRate: jPlayers[id].defaultPlaybackRate,
    playbackRate: jPlayers[id].playbackRate,
    preload: jPlayers[id].preload,
    volume: jPlayers[id].volume,
    muted: jPlayers[id].muted,
    autoplay: jPlayers[id].autoplay,
    newTime: jPlayers[id].newTime,
    tracks: jPlayers[id].media.tracks
  };
};

var handlers = function handlers() {
  var currentMedia = void 0;

  var getSeekableEnd = function getSeekableEnd() {
    if (currentMedia.seekable.length > 0) {
      return currentMedia.seekable.end(currentMedia.seekable.length - 1);
    }

    return NaN;
  };
  var getCurrentPercentRelative = function getCurrentPercentRelative() {
    return (0, _reactJplayerUtils.toPercentage)(currentMedia.currentTime, getSeekableEnd());
  };
  var getSeekPercent = function getSeekPercent() {
    return (0, _reactJplayerUtils.toPercentage)(getSeekableEnd(), currentMedia.duration);
  };

  return {
    setCurrentMedia: function setCurrentMedia() {
      return function (ref) {
        currentMedia = ref;
      };
    },
    updateMediaStatus: function updateMediaStatus(props) {
      return function () {
        var currentPercentAbsolute = (0, _reactJplayerUtils.toPercentage)(currentMedia.currentTime, currentMedia.duration);

        // Is infinite when live streaming
        if (isFinite(currentMedia.duration)) {
          props.setOption(props.id, 'duration', currentMedia.duration);
        }

        props.setOption(props.id, 'currentPercentRelative', getCurrentPercentRelative());
        props.setOption(props.id, 'seekPercent', getSeekPercent());
        props.setOption(props.id, 'currentPercentAbsolute', currentPercentAbsolute);
        props.setOption(props.id, 'currentTime', currentMedia.currentTime);
        props.setOption(props.id, 'playbackRate', currentMedia.playbackRate);
      };
    },
    updateMediaSrc: function updateMediaSrc(props) {
      return function () {
        if (props.src !== null) {
          currentMedia.src = props.src;
        }
      };
    },
    updateMediaTime: function updateMediaTime(props) {
      return function () {
        currentMedia.currentTime = props.newTime;
        props.setOption(props.id, 'newTime', null);
      };
    },
    updateMediaTimeAfterSeeking: function updateMediaTimeAfterSeeking(props) {
      return function () {
        var seekableEnd = getSeekableEnd();

        // TODO: Investigate why some .mp3 urls don't fire media events enough (http://www.davidgagne.net/m/song.mp3).
        // Hasn't fully loaded the song????
        if (isFinite(seekableEnd)) {
          currentMedia.currentTime = (0, _reactJplayerUtils.toRelativePercentage)(props.playHeadPercent, seekableEnd);

          /* Media events don't fire fast enough to give a smooth animation
            when dragging so we update it here as well, same problem as above? */
          props.setOption(props.id, 'currentPercentRelative', getCurrentPercentRelative());
        }
      };
    },
    updateMediaPlayState: function updateMediaPlayState(props) {
      return function () {
        if (props.paused) {
          currentMedia.pause();
        } else {
          currentMedia.play();
        }
      };
    },
    updateOtherMediaValues: function updateOtherMediaValues(props) {
      return function () {
        currentMedia.defaultPlaybackRate = props.defaultPlaybackRate;
        currentMedia.playbackRate = props.playbackRate;
        currentMedia.preload = props.preload;
        currentMedia.volume = props.volume;
        currentMedia.muted = props.muted;
        currentMedia.autoplay = props.autoplay;
        currentMedia.loop = props.loop;
      };
    }
  };
};

var lifecycle = {
  componentDidMount: function componentDidMount() {
    if (this.props.src !== null) {
      this.props.updateMediaSrc();
    }

    this.props.updateOtherMediaValues();
  },
  componentDidUpdate: function componentDidUpdate(prevProps) {
    if (prevProps.src !== this.props.src) {
      this.props.updateMediaSrc();
    }

    if (this.props.newTime !== null) {
      this.props.updateMediaTime();
    }

    if (prevProps.playHeadPercent !== this.props.playHeadPercent) {
      this.props.updateMediaTimeAfterSeeking();
    }

    this.props.updateMediaPlayState();
    this.props.updateOtherMediaValues();
  }
};

exports.default = (0, _recompose.compose)((0, _reactJplayerUtils.connectWithId)(mapStateToProps, {
  setOption: _actions.setOption
}), (0, _recompose.withHandlers)(handlers), (0, _recompose.lifecycle)(lifecycle))(_media2.default);

/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(2);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(0);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _recompose = __webpack_require__(3);

var _mediaContainer = __webpack_require__(25);

var _mediaContainer2 = _interopRequireDefault(_mediaContainer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* eslint-disable jsx-a11y/media-has-caption */

var Audio = function Audio(props) {
  return _react2.default.createElement(
    _mediaContainer2.default,
    {
      onAbort: props.onAbort,
      onCanPlay: props.onCanPlay,
      onCanPlayThrough: props.onCanPlayThrough,
      onDurationChange: props.onDurationChange,
      onEmptied: props.onEmptied,
      onEncrypted: props.onEncrypted,
      onEnded: props.onEnded,
      onError: props.onError,
      onLoadedData: props.onLoadedData,
      onLoadedMetadata: props.onLoadedMetadata,
      onLoadStart: props.onLoadStart,
      onPause: props.onPause,
      onPlay: props.onPlay,
      onPlaying: props.onPlaying,
      onProgress: props.onProgress,
      onRateChange: props.onRateChange,
      onSeeked: props.onSeeked,
      onSeeking: props.onSeeking,
      onStalled: props.onStalled,
      onSuspend: props.onSuspend,
      onTimeUpdate: props.onTimeUpdate,
      onVolumeChange: props.onVolumeChange,
      onWaiting: props.onWaiting
    },
    _react2.default.createElement('audio', null)
  );
};

Audio.defaultProps = {
  onAbort: Function.prototype,
  onCanPlay: Function.prototype,
  onCanPlayThrough: Function.prototype,
  onDurationChange: Function.prototype,
  onEmptied: Function.prototype,
  onEncrypted: Function.prototype,
  onEnded: Function.prototype,
  onError: Function.prototype,
  onLoadedData: Function.prototype,
  onLoadedMetadata: Function.prototype,
  onLoadStart: Function.prototype,
  onPause: Function.prototype,
  onPlay: Function.prototype,
  onPlaying: Function.prototype,
  onProgress: Function.prototype,
  onRateChange: Function.prototype,
  onSeeked: Function.prototype,
  onSeeking: Function.prototype,
  onStalled: Function.prototype,
  onSuspend: Function.prototype,
  onTimeUpdate: Function.prototype,
  onVolumeChange: Function.prototype,
  onWaiting: Function.prototype
};

Audio.propTypes = {
  onAbort: _propTypes2.default.func,
  onCanPlay: _propTypes2.default.func,
  onCanPlayThrough: _propTypes2.default.func,
  onDurationChange: _propTypes2.default.func,
  onEmptied: _propTypes2.default.func,
  onEncrypted: _propTypes2.default.func,
  onEnded: _propTypes2.default.func,
  onError: _propTypes2.default.func,
  onLoadedData: _propTypes2.default.func,
  onLoadedMetadata: _propTypes2.default.func,
  onLoadStart: _propTypes2.default.func,
  onPause: _propTypes2.default.func,
  onPlay: _propTypes2.default.func,
  onPlaying: _propTypes2.default.func,
  onProgress: _propTypes2.default.func,
  onRateChange: _propTypes2.default.func,
  onSeeked: _propTypes2.default.func,
  onSeeking: _propTypes2.default.func,
  onStalled: _propTypes2.default.func,
  onSuspend: _propTypes2.default.func,
  onTimeUpdate: _propTypes2.default.func,
  onVolumeChange: _propTypes2.default.func,
  onWaiting: _propTypes2.default.func
};

exports.default = (0, _recompose.compose)((0, _recompose.branch)(function (props) {
  return props.require;
}, (0, _recompose.renderComponent)(Audio)))((0, _recompose.renderNothing)(null));

/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(2);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(0);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _keyControlContainer = __webpack_require__(88);

var _keyControlContainer2 = _interopRequireDefault(_keyControlContainer);

var _screenFullContainer = __webpack_require__(89);

var _screenFullContainer2 = _interopRequireDefault(_screenFullContainer);

var _errorLoggerContainer = __webpack_require__(91);

var _errorLoggerContainer2 = _interopRequireDefault(_errorLoggerContainer);

var _timeDisplayContainer = __webpack_require__(92);

var _timeDisplayContainer2 = _interopRequireDefault(_timeDisplayContainer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var JPlayer = function JPlayer(props) {
  var className = props.className,
      keyBindings = props.keyBindings,
      children = props.children,
      onMouseMoveCapture = props.onMouseMoveCapture,
      id = props.id;


  return _react2.default.createElement(
    'div',
    {
      id: id,
      className: className,
      draggable: false,
      onMouseMoveCapture: onMouseMoveCapture
    },
    _react2.default.createElement(_keyControlContainer2.default, { keyBindings: keyBindings }),
    _react2.default.createElement(_timeDisplayContainer2.default, null),
    _react2.default.createElement(_screenFullContainer2.default, null),
    _react2.default.createElement(_errorLoggerContainer2.default, null),
    children
  );
};

JPlayer.defaultProps = {
  keyBindings: null
};

JPlayer.propTypes = {
  keyBindings: _propTypes2.default.object,
  onMouseMoveCapture: _propTypes2.default.func.isRequired,
  className: _propTypes2.default.string.isRequired,
  id: _propTypes2.default.string.isRequired,
  children: _propTypes2.default.oneOfType([_propTypes2.default.arrayOf(_propTypes2.default.element), _propTypes2.default.element]).isRequired
};

exports.default = JPlayer;

/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(2);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(0);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _constants = __webpack_require__(4);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var PlayBar = function PlayBar(props) {
  var width = props.smoothPlayBar ? props.smoothWidth + '%' : props.currentPercentRelative + '%';

  return _react2.default.createElement('div', {
    className: _constants.classes.PLAY_BAR,
    style: { width: width }
  });
};

PlayBar.propTypes = {
  smoothPlayBar: _propTypes2.default.bool.isRequired,
  smoothWidth: _propTypes2.default.number.isRequired,
  currentPercentRelative: _propTypes2.default.number.isRequired
};

exports.default = PlayBar;

/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(2);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(0);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _constants = __webpack_require__(4);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var BufferBar = function BufferBar(_ref) {
  var setCanvas = _ref.setCanvas;
  return _react2.default.createElement('canvas', {
    ref: setCanvas,
    className: _constants.classes.BUFFER_BAR
  });
};

BufferBar.propTypes = {
  setCanvas: _propTypes2.default.func.isRequired
};

exports.default = BufferBar;

/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(2);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(0);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _recompose = __webpack_require__(3);

var _constants = __webpack_require__(4);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Poster = function Poster(_ref) {
  var src = _ref.src;
  return _react2.default.createElement('img', { className: _constants.classes.POSTER, alt: '', src: src });
};

Poster.defaultProps = {
  src: null
};

Poster.propTypes = {
  src: _propTypes2.default.string
};

exports.default = (0, _recompose.compose)((0, _recompose.branch)(function (props) {
  return props.src;
}, (0, _recompose.renderComponent)(Poster)))((0, _recompose.renderNothing)(null));

/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(2);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(0);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _recompose = __webpack_require__(3);

var _constants = __webpack_require__(4);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Title = function Title(_ref) {
  var title = _ref.title;
  return _react2.default.createElement(
    'div',
    { className: _constants.classes.TITLE },
    title
  );
};

Title.propTypes = {
  title: _propTypes2.default.string.isRequired
};

exports.default = (0, _recompose.compose)((0, _recompose.branch)(function (props) {
  return props.title;
}, (0, _recompose.renderComponent)(Title)))((0, _recompose.renderNothing)(null));

/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(2);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(0);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _constants = __webpack_require__(4);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var FullScreen = function FullScreen(_ref) {
  var setFullScreen = _ref.setFullScreen,
      id = _ref.id,
      fullScreen = _ref.fullScreen,
      children = _ref.children;
  return _react2.default.createElement(
    'button',
    {
      className: _constants.classes.FULL_SCREEN,
      onClick: function onClick() {
        return setFullScreen(id, !fullScreen);
      }
    },
    children
  );
};

FullScreen.propTypes = {
  children: _propTypes2.default.node.isRequired,
  setFullScreen: _propTypes2.default.func.isRequired,
  id: _propTypes2.default.string.isRequired,
  fullScreen: _propTypes2.default.bool.isRequired
};

exports.default = FullScreen;

/***/ }),
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(2);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(0);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _constants = __webpack_require__(4);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Mute = function Mute(_ref) {
  var setMute = _ref.setMute,
      id = _ref.id,
      muted = _ref.muted,
      children = _ref.children;
  return _react2.default.createElement(
    'button',
    { className: _constants.classes.MUTE, onClick: function onClick() {
        return setMute(id, !muted);
      } },
    children
  );
};

Mute.propTypes = {
  id: _propTypes2.default.string.isRequired,
  children: _propTypes2.default.node.isRequired,
  setMute: _propTypes2.default.func.isRequired,
  muted: _propTypes2.default.bool.isRequired
};

exports.default = Mute;

/***/ }),
/* 34 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(2);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(0);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _constants = __webpack_require__(4);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Play = function Play(_ref) {
  var play = _ref.play,
      id = _ref.id,
      paused = _ref.paused,
      children = _ref.children;
  return _react2.default.createElement(
    'button',
    { className: _constants.classes.PLAY, onClick: function onClick() {
        return play(id, paused);
      } },
    children
  );
};

Play.propTypes = {
  children: _propTypes2.default.node.isRequired,
  play: _propTypes2.default.func.isRequired,
  id: _propTypes2.default.string.isRequired,
  paused: _propTypes2.default.bool.isRequired
};

exports.default = Play;

/***/ }),
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(2);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(0);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _constants = __webpack_require__(4);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Repeat = function Repeat(_ref) {
  var loop = _ref.loop,
      children = _ref.children;
  return _react2.default.createElement(
    'button',
    { className: _constants.classes.REPEAT, onClick: loop },
    children
  );
};

Repeat.propTypes = {
  children: _propTypes2.default.node.isRequired,
  loop: _propTypes2.default.func.isRequired
};

exports.default = Repeat;

/***/ }),
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(2);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(0);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _barContainer = __webpack_require__(18);

var _barContainer2 = _interopRequireDefault(_barContainer);

var _constants = __webpack_require__(4);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var SeekBar = function SeekBar(props) {
  return _react2.default.createElement(
    _barContainer2.default,
    {
      clickMoveBar: props.clickMoveBar,
      touchMoveBar: props.touchMoveBar
    },
    _react2.default.createElement(
      'div',
      {
        className: _constants.classes.SEEK_BAR,
        style: { width: props.seekPercent + '%' }
      },
      props.children
    )
  );
};

SeekBar.propTypes = {
  seekPercent: _propTypes2.default.number.isRequired,
  clickMoveBar: _propTypes2.default.func.isRequired,
  touchMoveBar: _propTypes2.default.func.isRequired,
  children: _propTypes2.default.oneOfType([_propTypes2.default.arrayOf(_propTypes2.default.element), _propTypes2.default.element]).isRequired
};

exports.default = SeekBar;

/***/ }),
/* 37 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(2);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(0);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _barContainer = __webpack_require__(18);

var _barContainer2 = _interopRequireDefault(_barContainer);

var _playbackRateBarValueContainer = __webpack_require__(38);

var _playbackRateBarValueContainer2 = _interopRequireDefault(_playbackRateBarValueContainer);

var _constants = __webpack_require__(4);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var PlaybackRateBar = function PlaybackRateBar(props) {
  return _react2.default.createElement(
    _barContainer2.default,
    {
      clickMoveBar: props.clickMoveBar,
      touchMoveBar: props.touchMoveBar
    },
    _react2.default.createElement(
      'div',
      { className: _constants.classes.PLAYBACK_RATE_BAR },
      props.children
    )
  );
};

PlaybackRateBar.defaultProps = {
  children: _react2.default.createElement(_playbackRateBarValueContainer2.default, null)
};

PlaybackRateBar.propTypes = {
  clickMoveBar: _propTypes2.default.func.isRequired,
  touchMoveBar: _propTypes2.default.func.isRequired,
  children: _propTypes2.default.node
};

exports.default = PlaybackRateBar;

/***/ }),
/* 38 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _reactJplayerUtils = __webpack_require__(1);

var _playbackRateBarValue = __webpack_require__(39);

var _playbackRateBarValue2 = _interopRequireDefault(_playbackRateBarValue);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var mapStateToProps = function mapStateToProps(_ref, _ref2) {
  var jPlayers = _ref.jPlayers;
  var id = _ref2.id;
  return {
    verticalPlaybackRate: jPlayers[id].verticalPlaybackRate,
    minPlaybackRate: jPlayers[id].minPlaybackRate,
    maxPlaybackRate: jPlayers[id].maxPlaybackRate,
    playbackRate: jPlayers[id].playbackRate
  };
};

exports.default = (0, _reactJplayerUtils.connectWithId)(mapStateToProps)(_playbackRateBarValue2.default);

/***/ }),
/* 39 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(2);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(0);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _constants = __webpack_require__(4);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var PlaybackRateBarValue = function PlaybackRateBarValue(props) {
  var ratio = (props.playbackRate - props.minPlaybackRate) / (props.maxPlaybackRate - props.minPlaybackRate);
  var playbackRateBarPercentage = ratio * 100 + '%';
  var style = {
    width: !props.verticalPlaybackRate ? playbackRateBarPercentage : null,
    height: props.verticalPlaybackRate ? playbackRateBarPercentage : null
  };

  return _react2.default.createElement('div', {
    className: _constants.classes.PLAYBACK_RATE_BAR_VALUE,
    style: style
  });
};

PlaybackRateBarValue.propTypes = {
  verticalPlaybackRate: _propTypes2.default.bool.isRequired,
  minPlaybackRate: _propTypes2.default.number.isRequired,
  maxPlaybackRate: _propTypes2.default.number.isRequired,
  playbackRate: _propTypes2.default.number.isRequired
};

exports.default = PlaybackRateBarValue;

/***/ }),
/* 40 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(2);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(0);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _barContainer = __webpack_require__(18);

var _barContainer2 = _interopRequireDefault(_barContainer);

var _volumeBarValueContainer = __webpack_require__(41);

var _volumeBarValueContainer2 = _interopRequireDefault(_volumeBarValueContainer);

var _constants = __webpack_require__(4);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var VolumeBar = function VolumeBar(props) {
  return _react2.default.createElement(
    _barContainer2.default,
    {
      clickMoveBar: props.clickMoveBar,
      touchMoveBar: props.touchMoveBar
    },
    _react2.default.createElement(
      'div',
      { className: _constants.classes.VOLUME_BAR },
      props.children
    )
  );
};

VolumeBar.defaultProps = {
  children: _react2.default.createElement(_volumeBarValueContainer2.default, null)
};

VolumeBar.propTypes = {
  clickMoveBar: _propTypes2.default.func.isRequired,
  touchMoveBar: _propTypes2.default.func.isRequired,
  children: _propTypes2.default.node
};

exports.default = VolumeBar;

/***/ }),
/* 41 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _reactJplayerUtils = __webpack_require__(1);

var _volumeBarValue = __webpack_require__(42);

var _volumeBarValue2 = _interopRequireDefault(_volumeBarValue);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var mapStateToProps = function mapStateToProps(_ref, _ref2) {
  var jPlayers = _ref.jPlayers;
  var id = _ref2.id;
  return {
    verticalVolume: jPlayers[id].verticalVolume,
    muted: jPlayers[id].muted,
    volume: jPlayers[id].volume
  };
};

exports.default = (0, _reactJplayerUtils.connectWithId)(mapStateToProps)(_volumeBarValue2.default);

/***/ }),
/* 42 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(2);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(0);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _constants = __webpack_require__(4);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var VolumeBarValue = function VolumeBarValue(_ref) {
  var muted = _ref.muted,
      volume = _ref.volume,
      verticalVolume = _ref.verticalVolume;

  var volumeBarValuePercentage = (muted ? 0 : volume * 100) + '%';
  var style = {
    width: !verticalVolume ? volumeBarValuePercentage : null,
    height: verticalVolume ? volumeBarValuePercentage : null
  };

  return _react2.default.createElement('div', { className: _constants.classes.VOLUME_BAR_VALUE, style: style });
};

VolumeBarValue.propTypes = {
  muted: _propTypes2.default.bool.isRequired,
  volume: _propTypes2.default.number.isRequired,
  verticalVolume: _propTypes2.default.bool.isRequired
};

exports.default = VolumeBarValue;

/***/ }),
/* 43 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(2);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(0);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _recompose = __webpack_require__(3);

var _constants = __webpack_require__(4);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Download = function Download(_ref) {
  var url = _ref.url,
      children = _ref.children;
  return _react2.default.createElement(
    'a',
    {
      className: _constants.classes.DOWNLOAD,
      href: url,
      download: true,
      target: '_blank',
      rel: 'noopener noreferrer'
    },
    children
  );
};

Download.defaultProps = {
  url: null
};

Download.propTypes = {
  children: _propTypes2.default.node.isRequired,
  url: _propTypes2.default.string
};

exports.default = (0, _recompose.compose)((0, _recompose.branch)(function (props) {
  return props.free;
}, (0, _recompose.renderComponent)(Download)))((0, _recompose.renderNothing)(null));

/***/ }),
/* 44 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(2);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(0);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _recompose = __webpack_require__(3);

var _constants = __webpack_require__(4);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Duration = function Duration(_ref) {
  var durationText = _ref.durationText;
  return _react2.default.createElement(
    'div',
    { className: _constants.classes.DURATION },
    durationText
  );
};

Duration.propTypes = {
  durationText: _propTypes2.default.string.isRequired
};

exports.default = (0, _recompose.compose)((0, _recompose.branch)(function (props) {
  return props.durationText;
}, (0, _recompose.renderComponent)(Duration)))((0, _recompose.renderNothing)(null));

/***/ }),
/* 45 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(2);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(0);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _constants = __webpack_require__(4);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var CurrentTime = function CurrentTime(_ref) {
  var currentTimeText = _ref.currentTimeText;
  return _react2.default.createElement(
    'div',
    { className: _constants.classes.CURRENT_TIME },
    currentTimeText
  );
};

CurrentTime.propTypes = {
  currentTimeText: _propTypes2.default.string.isRequired
};

exports.default = CurrentTime;

/***/ }),
/* 46 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(2);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(0);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _recompose = __webpack_require__(3);

var _constants = __webpack_require__(4);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var BrowserUnsupported = function BrowserUnsupported(_ref) {
  var children = _ref.children;
  return _react2.default.createElement(
    'div',
    { className: _constants.classes.NO_BROWSER_SUPPORT },
    children
  );
};

var defaultChildren = _react2.default.createElement(
  'div',
  null,
  _react2.default.createElement(
    'h4',
    null,
    'Browser Unsupported'
  ),
  'Your browser does not support this media file. To play the media you will need to update your browser to a more recent version.'
);

BrowserUnsupported.defaultProps = {
  children: defaultChildren
};

BrowserUnsupported.propTypes = {
  children: _propTypes2.default.node
};

exports.default = (0, _recompose.compose)((0, _recompose.branch)(function (props) {
  return props.nonSupported;
}, (0, _recompose.renderComponent)(BrowserUnsupported)))((0, _recompose.renderNothing)(null));

/***/ }),
/* 47 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(2);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(0);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _keyControlContainer = __webpack_require__(113);

var _keyControlContainer2 = _interopRequireDefault(_keyControlContainer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var JPlaylist = function JPlaylist(_ref) {
  var states = _ref.states,
      keyBindings = _ref.keyBindings,
      children = _ref.children,
      id = _ref.id;
  return _react2.default.createElement(
    _keyControlContainer2.default,
    { keyBindings: keyBindings },
    _react2.default.cloneElement(_react2.default.Children.only(children), {
      states: states,
      id: id
    })
  );
};

JPlaylist.defaultProps = {
  keyBindings: null
};

JPlaylist.propTypes = {
  id: _propTypes2.default.string.isRequired,
  states: _propTypes2.default.object.isRequired,
  keyBindings: _propTypes2.default.object,
  children: _propTypes2.default.element.isRequired
};

exports.default = JPlaylist;

/***/ }),
/* 48 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (loop) {
  var newLoop = void 0;

  if (loop === 'off') {
    newLoop = 'loop';
  } else if (loop === 'loop') {
    newLoop = 'loop-playlist';
  } else {
    newLoop = 'off';
  }
  return newLoop;
};

/***/ }),
/* 49 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(2);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(0);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _recompose = __webpack_require__(3);

var _playlistItemContainer = __webpack_require__(116);

var _playlistItemContainer2 = _interopRequireDefault(_playlistItemContainer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Playlist = function Playlist(_ref) {
  var playlist = _ref.playlist,
      children = _ref.children,
      className = _ref.className;
  return _react2.default.createElement(
    'ul',
    { className: className },
    playlist.map(function (media, index) {
      return _react2.default.createElement(
        _playlistItemContainer2.default,
        { key: media.id, index: index },
        children
      );
    })
  );
};

Playlist.propTypes = {
  className: _propTypes2.default.string.isRequired,
  playlist: _propTypes2.default.arrayOf(_propTypes2.default.shape({
    title: _propTypes2.default.string,
    artist: _propTypes2.default.string,
    sources: _propTypes2.default.object.isRequired,
    poster: _propTypes2.default.string,
    id: _propTypes2.default.oneOfType([_propTypes2.default.string.isRequired, _propTypes2.default.number.isRequired]).isRequired,
    free: _propTypes2.default.bool
  })).isRequired,
  children: _propTypes2.default.node.isRequired
};

exports.default = (0, _recompose.compose)((0, _recompose.branch)(function (props) {
  return props.playlist.length > 0;
}, (0, _recompose.renderComponent)(Playlist)))((0, _recompose.renderNothing)(null));

/***/ }),
/* 50 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(2);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(0);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _constants = __webpack_require__(6);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Shuffle = function Shuffle(_ref) {
  var shuffle = _ref.shuffle,
      children = _ref.children;
  return _react2.default.createElement(
    'button',
    { className: _constants.classes.SHUFFLE, onClick: shuffle },
    children
  );
};

Shuffle.propTypes = {
  children: _propTypes2.default.node.isRequired,
  shuffle: _propTypes2.default.func.isRequired
};

exports.default = Shuffle;

/***/ }),
/* 51 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(2);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(0);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _constants = __webpack_require__(6);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Previous = function Previous(_ref) {
  var previous = _ref.previous,
      children = _ref.children;
  return _react2.default.createElement(
    'button',
    { className: _constants.classes.PREVIOUS, onClick: previous },
    children
  );
};

Previous.propTypes = {
  children: _propTypes2.default.node.isRequired,
  previous: _propTypes2.default.func.isRequired
};

exports.default = Previous;

/***/ }),
/* 52 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(2);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(0);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _constants = __webpack_require__(6);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Next = function Next(_ref) {
  var next = _ref.next,
      children = _ref.children;
  return _react2.default.createElement(
    'button',
    { className: _constants.classes.NEXT, onClick: next },
    children
  );
};

Next.propTypes = {
  children: _propTypes2.default.node.isRequired,
  next: _propTypes2.default.func.isRequired
};

exports.default = Next;

/***/ }),
/* 53 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(2);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(0);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _constants = __webpack_require__(6);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var TogglePlaylist = function TogglePlaylist(_ref) {
  var togglePlaylist = _ref.togglePlaylist,
      children = _ref.children;
  return _react2.default.createElement(
    'button',
    {
      className: _constants.classes.TOGGLE_PLAYLIST,
      onClick: togglePlaylist
    },
    children
  );
};

TogglePlaylist.propTypes = {
  children: _propTypes2.default.node.isRequired,
  togglePlaylist: _propTypes2.default.func.isRequired
};

exports.default = TogglePlaylist;

/***/ }),
/* 54 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(2);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(0);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _constants = __webpack_require__(6);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Remove = function Remove(_ref) {
  var remove = _ref.remove,
      children = _ref.children;
  return _react2.default.createElement(
    'button',
    { className: _constants.classes.REMOVE, onClick: remove },
    children
  );
};

Remove.defaultProps = {
  children: '×'
};

Remove.propTypes = {
  children: _propTypes2.default.node,
  remove: _propTypes2.default.func.isRequired
};

exports.default = Remove;

/***/ }),
/* 55 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(2);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(0);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _constants = __webpack_require__(6);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var MediaLink = function MediaLink(_ref) {
  var play = _ref.play,
      children = _ref.children;
  return _react2.default.createElement(
    'button',
    { className: _constants.classes.MEDIA_LINK, onClick: play },
    children
  );
};

MediaLink.propTypes = {
  children: _propTypes2.default.node.isRequired,
  play: _propTypes2.default.func.isRequired
};

exports.default = MediaLink;

/***/ }),
/* 56 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Title = exports.Poster = exports.MediaLink = exports.Remove = exports.TogglePlaylist = exports.Repeat = exports.Next = exports.Previous = exports.Shuffle = exports.Playlist = exports.actions = exports.reducer = exports.initializeOptions = exports.MediaLinkComponent = exports.RemoveComponent = exports.TogglePlaylistComponent = exports.NextComponent = exports.PreviousComponent = exports.ShuffleComponent = exports.PlaylistComponent = exports.JPlaylistComponent = undefined;

var _initializeOptions = __webpack_require__(19);

var _initializeOptions2 = _interopRequireDefault(_initializeOptions);

var _reducer = __webpack_require__(110);

var _reducer2 = _interopRequireDefault(_reducer);

var _actions = __webpack_require__(7);

var actions = _interopRequireWildcard(_actions);

var _jPlaylistContainer = __webpack_require__(112);

var _jPlaylistContainer2 = _interopRequireDefault(_jPlaylistContainer);

var _playlistContainer = __webpack_require__(115);

var _playlistContainer2 = _interopRequireDefault(_playlistContainer);

var _shuffleContainer = __webpack_require__(118);

var _shuffleContainer2 = _interopRequireDefault(_shuffleContainer);

var _previousContainer = __webpack_require__(119);

var _previousContainer2 = _interopRequireDefault(_previousContainer);

var _nextContainer = __webpack_require__(120);

var _nextContainer2 = _interopRequireDefault(_nextContainer);

var _repeatContainer = __webpack_require__(121);

var _repeatContainer2 = _interopRequireDefault(_repeatContainer);

var _togglePlaylistContainer = __webpack_require__(122);

var _togglePlaylistContainer2 = _interopRequireDefault(_togglePlaylistContainer);

var _removeContainer = __webpack_require__(123);

var _removeContainer2 = _interopRequireDefault(_removeContainer);

var _mediaLinkContainer = __webpack_require__(124);

var _mediaLinkContainer2 = _interopRequireDefault(_mediaLinkContainer);

var _posterContainer = __webpack_require__(125);

var _posterContainer2 = _interopRequireDefault(_posterContainer);

var _titleContainer = __webpack_require__(126);

var _titleContainer2 = _interopRequireDefault(_titleContainer);

var _jPlaylist = __webpack_require__(47);

var _jPlaylist2 = _interopRequireDefault(_jPlaylist);

var _playlist = __webpack_require__(49);

var _playlist2 = _interopRequireDefault(_playlist);

var _shuffle = __webpack_require__(50);

var _shuffle2 = _interopRequireDefault(_shuffle);

var _previous = __webpack_require__(51);

var _previous2 = _interopRequireDefault(_previous);

var _next = __webpack_require__(52);

var _next2 = _interopRequireDefault(_next);

var _togglePlaylist = __webpack_require__(53);

var _togglePlaylist2 = _interopRequireDefault(_togglePlaylist);

var _remove = __webpack_require__(54);

var _remove2 = _interopRequireDefault(_remove);

var _mediaLink = __webpack_require__(55);

var _mediaLink2 = _interopRequireDefault(_mediaLink);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Components
exports.default = _jPlaylistContainer2.default;

// Containers

exports.JPlaylistComponent = _jPlaylist2.default;
exports.PlaylistComponent = _playlist2.default;
exports.ShuffleComponent = _shuffle2.default;
exports.PreviousComponent = _previous2.default;
exports.NextComponent = _next2.default;
exports.TogglePlaylistComponent = _togglePlaylist2.default;
exports.RemoveComponent = _remove2.default;
exports.MediaLinkComponent = _mediaLink2.default;
exports.initializeOptions = _initializeOptions2.default;
exports.reducer = _reducer2.default;
exports.actions = actions;
exports.Playlist = _playlistContainer2.default;
exports.Shuffle = _shuffleContainer2.default;
exports.Previous = _previousContainer2.default;
exports.Next = _nextContainer2.default;
exports.Repeat = _repeatContainer2.default;
exports.TogglePlaylist = _togglePlaylistContainer2.default;
exports.Remove = _removeContainer2.default;
exports.MediaLink = _mediaLinkContainer2.default;
exports.Poster = _posterContainer2.default;
exports.Title = _titleContainer2.default;

/***/ }),
/* 57 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _reactJplayerUtils = __webpack_require__(1);

var _initializeOptions = __webpack_require__(20);

var _constants = __webpack_require__(4);

var _urlNotSetError = __webpack_require__(68);

var _urlNotSetError2 = _interopRequireDefault(_urlNotSetError);

var _noFormatSupportedError = __webpack_require__(69);

var _noFormatSupportedError2 = _interopRequireDefault(_noFormatSupportedError);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var updateFormats = function updateFormats(sources) {
  var formats = [];

  Object.keys(sources).forEach(function (supplied) {
    var canPlayType = void 0;

    try {
      // Some legacy browsers don't have canPlayType property
      canPlayType = document.createElement(_constants.formats[supplied].MEDIA).canPlayType(_constants.formats[supplied].CODEC);
    } catch (error) {
      canPlayType = '';
    }

    formats.push({
      supplied: supplied,
      supported: canPlayType
    });
  });

  return formats;
};

var clearMedia = function clearMedia() {
  return _extends({}, _constants.defaultStatus, {
    media: _constants.defaultOptions.media
  });
};

var setMedia = function setMedia(_, _ref) {
  var media = _ref.media;

  var video = void 0;
  var src = void 0;
  var nonSupported = true;
  var error = void 0;

  var formats = updateFormats(media.sources);

  formats.forEach(function (format) {
    if (format.supported && nonSupported) {
      video = _constants.formats[format.supplied].MEDIA === 'video';
      src = media.sources[format.supplied];
      nonSupported = false;
    }
  });

  if (nonSupported) {
    error = (0, _noFormatSupportedError2.default)('media.sources: \'' + Object.keys(media.sources).join(', ') + '\'');
  }

  return _extends({}, clearMedia(), {
    mediaSettings: {
      formats: formats,
      video: video,
      nonSupported: nonSupported
    },
    media: media,
    video: video,
    src: src,
    paused: true,
    error: error
  });
};

var play = function play(jPlayer, _ref2) {
  var time = _ref2.time;

  if (jPlayer.src) {
    return {
      paused: false,
      newTime: !isNaN(time) ? time : null
    };
  }

  return {
    error: (0, _urlNotSetError2.default)(play.name)
  };
};

var pause = function pause(jPlayer, _ref3) {
  var time = _ref3.time;

  if (jPlayer.src) {
    return {
      paused: true,
      newTime: !isNaN(time) ? time : null
    };
  }

  return {
    error: (0, _urlNotSetError2.default)(pause.name)
  };
};

var setPlayHead = function setPlayHead(jPlayer, _ref4) {
  var percent = _ref4.percent;

  var limitedPercent = (0, _reactJplayerUtils.limitValue)(percent, 0, 100);

  if (jPlayer.src) {
    return {
      playHeadPercent: limitedPercent
    };
  }

  return {
    error: (0, _urlNotSetError2.default)(setPlayHead.name)
  };
};

var setVolume = function setVolume(_, _ref5) {
  var volume = _ref5.volume;
  return {
    volume: (0, _reactJplayerUtils.limitValue)(volume, 0, 1),
    muted: volume <= 0
  };
};

var setMute = function setMute(_, _ref6) {
  var mute = _ref6.mute;
  return {
    muted: mute
  };
};

var setOption = function setOption(jPlayer, _ref7) {
  var key = _ref7.key,
      value = _ref7.value;

  switch (key) {
    case 'media':
      {
        if (Object.keys(value).some(function (v) {
          return v;
        })) {
          return setMedia(jPlayer, { media: value });
        }
        return clearMedia();
      }
    case 'playHeadPercent':
      return setPlayHead(jPlayer, { percent: value });
    case 'volume':
      return setVolume(jPlayer, { volume: value });
    case 'muted':
      return setMute(jPlayer, { mute: value });
    default:
      return _defineProperty({}, key, value);
  }
};

var focus = function focus(state, id) {
  var newState = _extends({}, state);

  if (newState[id].keyEnabled) {
    Object.keys(newState).forEach(function (key) {
      if (key === id) {
        newState[key].focused = true;
      } else {
        newState[key].focused = false;
      }
    });
  }

  return newState;
};

var focusOnFirstKeyEnabledPlayer = function focusOnFirstKeyEnabledPlayer(state) {
  var firstKeyEnabledPlayer = Object.keys(state).filter(function (key) {
    return state[key].keyEnabled;
  }).shift();

  if (state[firstKeyEnabledPlayer] !== undefined) {
    var focusedPlayer = _extends({}, state[firstKeyEnabledPlayer], {
      focused: true
    });

    return _extends({}, state, _defineProperty({}, firstKeyEnabledPlayer, focusedPlayer));
  }

  return state;
};

var updateJPlayer = function updateJPlayer(state, action, fn) {
  var value = fn(state[action.id], action);
  var newState = state[action.id].keyEnabled ? focus(state, action.id) : focusOnFirstKeyEnabledPlayer(state);
  var jPlayer = newState[action.id];

  return _extends({}, newState, _defineProperty({}, action.id, _extends({}, jPlayer, value)));
};

var reducer = function reducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : _initializeOptions.initialState;
  var action = arguments[1];

  var updateValue = function updateValue(fn) {
    return updateJPlayer(state, action, fn);
  };

  switch (action.type) {
    case _constants.actionNames.SET_MEDIA:
      return updateValue(setMedia);
    case _constants.actionNames.CLEAR_MEDIA:
      return updateValue(clearMedia);
    case _constants.actionNames.PLAY:
      return updateValue(play);
    case _constants.actionNames.PAUSE:
      return updateValue(pause);
    case _constants.actionNames.PLAY_HEAD:
      return updateValue(setPlayHead);
    case _constants.actionNames.VOLUME:
      return updateValue(setVolume);
    case _constants.actionNames.MUTE:
      return updateValue(setMute);
    case _constants.actionNames.SET_OPTION:
      return updateValue(setOption);
    case _constants.actionNames.FOCUS:
      return focus(state, action.id);
    default:
      return state;
  }
};

exports.default = reducer;

/***/ }),
/* 58 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _reactRedux = __webpack_require__(11);

var _recompose = __webpack_require__(3);

var _propTypes = __webpack_require__(0);

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function () {
  return (0, _recompose.compose)((0, _recompose.getContext)({ id: _propTypes2.default.string }), _reactRedux.connect.apply(undefined, arguments));
};

/***/ }),
/* 59 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _reactRedux = __webpack_require__(11);

var _recompose = __webpack_require__(3);

var _propTypes = __webpack_require__(0);

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function () {
  return (0, _recompose.compose)((0, _recompose.getContext)({
    id: _propTypes2.default.string,
    index: _propTypes2.default.number
  }), _reactRedux.connect.apply(undefined, arguments));
};

/***/ }),
/* 60 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (artist, title) {
  var titleText = '';

  if (artist !== null) {
    titleText += '' + artist;
  }

  if (title !== null) {
    if (artist !== null) {
      titleText += ' - ';
    }
    titleText += '' + title;
  }

  return titleText;
};

/***/ }),
/* 61 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {
  HIDDEN: 'jp-hidden'
};

/***/ }),
/* 62 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (number, max) {
  return 100 * (number / max);
};

/***/ }),
/* 63 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (number, max) {
  return number * (max / 100);
};

/***/ }),
/* 64 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (el) {
  return {
    top: el.getBoundingClientRect().top + document.body.scrollTop,
    left: el.getBoundingClientRect().left + document.body.scrollLeft
  };
};

/***/ }),
/* 65 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (value, min, max) {
  if (value < min) {
    return min;
  }

  if (value > max) {
    return max;
  }
  return value;
};

/***/ }),
/* 66 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

// Some IOS versions don't allow manually changing volume or mute
exports.default = function () {
  var audio = new window.Audio();
  audio.volume = 0.5;

  return audio.volume === 0.5;
};

/***/ }),
/* 67 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (seconds, timeFormats) {
  if (isNaN(seconds)) {
    return '';
  }
  var myTime = new Date(seconds * 1000);

  var hour = myTime.getUTCHours();
  var min = timeFormats.showHour ? myTime.getUTCMinutes() : myTime.getUTCMinutes() + hour * 60;
  var sec = timeFormats.showMin ? myTime.getUTCSeconds() : myTime.getUTCSeconds() + min * 60;
  var strHour = timeFormats.padHour && hour < 10 ? '0' + hour : hour;
  var strMin = timeFormats.padMin && min < 10 ? '0' + min : min;
  var strSec = timeFormats.padSec && sec < 10 ? '0' + sec : sec;

  var strTime = '';
  strTime += timeFormats.showHour ? strHour + timeFormats.sepHour : '';
  strTime += timeFormats.showMin ? strMin + timeFormats.sepMin : '';
  strTime += timeFormats.showSec ? strSec + timeFormats.sepSec : '';

  return strTime;
};

/***/ }),
/* 68 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _constants = __webpack_require__(4);

exports.default = function (context) {
  return {
    context: context,
    message: _constants.errors.URL_NOT_SET,
    hint: _constants.hints.URL_NOT_SET
  };
};

/***/ }),
/* 69 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _constants = __webpack_require__(4);

exports.default = function (context) {
  return {
    context: context,
    message: _constants.errors.FORMAT_NO_SUPPORT,
    hint: _constants.hints.FORMAT_NO_SUPPORT
  };
};

/***/ }),
/* 70 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _recompose = __webpack_require__(3);

var _reactJplayerUtils = __webpack_require__(1);

var _actions = __webpack_require__(5);

var _animation = __webpack_require__(71);

var _animation2 = _interopRequireDefault(_animation);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var timeoutIds = [];

var mapStateToProps = function mapStateToProps(_ref, _ref2) {
  var jPlayers = _ref.jPlayers;
  var id = _ref2.id;
  return {
    fullScreen: jPlayers[id].fullScreen,
    paused: jPlayers[id].paused,
    startGuiFadeOut: jPlayers[id].startGuiFadeOut,
    guiFadeOut: jPlayers[id].guiFadeOut,
    guiFadeHoldTime: jPlayers[id].guiFadeHoldTime
  };
};

var handlers = {
  onMouseMove: function onMouseMove(props) {
    return function () {
      if (props.fullScreen) {
        props.setOption(props.id, 'startGuiFadeOut', false);

        timeoutIds.forEach(function (timeoutId) {
          return clearTimeout(timeoutId);
        });
      }
    };
  },
  fadeOutHandler: function fadeOutHandler(props) {
    return function () {
      props.setOption(props.id, 'guiFadeOut', true);
    };
  }
};

var lifecycle = {
  startFade: function startFade() {
    if (this.props.fullScreen && !this.props.paused && this.props.startGuiFadeOut) {
      timeoutIds.push(setTimeout(this.props.fadeOutHandler, this.props.guiFadeHoldTime));
    } else if (!this.props.startGuiFadeOut) {
      this.props.setOption(this.props.id, 'guiFadeOut', false);
    }
  },
  componentDidUpdate: function componentDidUpdate(prevProps) {
    if (prevProps.startGuiFadeOut !== this.props.startGuiFadeOut) {
      this.startFade();
    }
  }
};

exports.default = (0, _recompose.compose)((0, _reactJplayerUtils.connectWithId)(mapStateToProps, {
  setOption: _actions.setOption
}), (0, _recompose.withHandlers)(handlers), (0, _recompose.lifecycle)(lifecycle))(_animation2.default);

/***/ }),
/* 71 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(2);

var _react2 = _interopRequireDefault(_react);

var _reactMotion = __webpack_require__(21);

var _propTypes = __webpack_require__(0);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _gui = __webpack_require__(23);

var _gui2 = _interopRequireDefault(_gui);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Animation = function Animation(_ref) {
  var fullScreen = _ref.fullScreen,
      guiFadeOut = _ref.guiFadeOut,
      onMouseMove = _ref.onMouseMove,
      children = _ref.children;
  return _react2.default.createElement(
    _reactMotion.Motion,
    {
      defaultStyle: { opacity: 1 },
      style: { opacity: fullScreen ? (0, _reactMotion.spring)(guiFadeOut ? 0 : 1, [250]) : 1 }
    },
    function (values) {
      return _react2.default.createElement(
        _gui2.default,
        { opacity: values.opacity, onMouseMove: onMouseMove },
        children
      );
    }
  );
};

Animation.propTypes = {
  onMouseMove: _propTypes2.default.func.isRequired,
  children: _propTypes2.default.oneOfType([_propTypes2.default.arrayOf(_propTypes2.default.element), _propTypes2.default.element]).isRequired,
  guiFadeOut: _propTypes2.default.bool.isRequired,
  fullScreen: _propTypes2.default.bool.isRequired
};

exports.default = Animation;

/***/ }),
/* 72 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _mapToZero = __webpack_require__(12);

var _mapToZero2 = _interopRequireDefault(_mapToZero);

var _stripStyle = __webpack_require__(10);

var _stripStyle2 = _interopRequireDefault(_stripStyle);

var _stepper3 = __webpack_require__(13);

var _stepper4 = _interopRequireDefault(_stepper3);

var _performanceNow = __webpack_require__(14);

var _performanceNow2 = _interopRequireDefault(_performanceNow);

var _raf = __webpack_require__(15);

var _raf2 = _interopRequireDefault(_raf);

var _shouldStopAnimation = __webpack_require__(16);

var _shouldStopAnimation2 = _interopRequireDefault(_shouldStopAnimation);

var _react = __webpack_require__(2);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(0);

var _propTypes2 = _interopRequireDefault(_propTypes);

var msPerFrame = 1000 / 60;

var Motion = (function (_React$Component) {
  _inherits(Motion, _React$Component);

  _createClass(Motion, null, [{
    key: 'propTypes',
    value: {
      // TOOD: warn against putting a config in here
      defaultStyle: _propTypes2['default'].objectOf(_propTypes2['default'].number),
      style: _propTypes2['default'].objectOf(_propTypes2['default'].oneOfType([_propTypes2['default'].number, _propTypes2['default'].object])).isRequired,
      children: _propTypes2['default'].func.isRequired,
      onRest: _propTypes2['default'].func
    },
    enumerable: true
  }]);

  function Motion(props) {
    var _this = this;

    _classCallCheck(this, Motion);

    _React$Component.call(this, props);
    this.wasAnimating = false;
    this.animationID = null;
    this.prevTime = 0;
    this.accumulatedTime = 0;
    this.unreadPropStyle = null;

    this.clearUnreadPropStyle = function (destStyle) {
      var dirty = false;
      var _state = _this.state;
      var currentStyle = _state.currentStyle;
      var currentVelocity = _state.currentVelocity;
      var lastIdealStyle = _state.lastIdealStyle;
      var lastIdealVelocity = _state.lastIdealVelocity;

      for (var key in destStyle) {
        if (!Object.prototype.hasOwnProperty.call(destStyle, key)) {
          continue;
        }

        var styleValue = destStyle[key];
        if (typeof styleValue === 'number') {
          if (!dirty) {
            dirty = true;
            currentStyle = _extends({}, currentStyle);
            currentVelocity = _extends({}, currentVelocity);
            lastIdealStyle = _extends({}, lastIdealStyle);
            lastIdealVelocity = _extends({}, lastIdealVelocity);
          }

          currentStyle[key] = styleValue;
          currentVelocity[key] = 0;
          lastIdealStyle[key] = styleValue;
          lastIdealVelocity[key] = 0;
        }
      }

      if (dirty) {
        _this.setState({ currentStyle: currentStyle, currentVelocity: currentVelocity, lastIdealStyle: lastIdealStyle, lastIdealVelocity: lastIdealVelocity });
      }
    };

    this.startAnimationIfNecessary = function () {
      // TODO: when config is {a: 10} and dest is {a: 10} do we raf once and
      // call cb? No, otherwise accidental parent rerender causes cb trigger
      _this.animationID = _raf2['default'](function (timestamp) {
        // check if we need to animate in the first place
        var propsStyle = _this.props.style;
        if (_shouldStopAnimation2['default'](_this.state.currentStyle, propsStyle, _this.state.currentVelocity)) {
          if (_this.wasAnimating && _this.props.onRest) {
            _this.props.onRest();
          }

          // no need to cancel animationID here; shouldn't have any in flight
          _this.animationID = null;
          _this.wasAnimating = false;
          _this.accumulatedTime = 0;
          return;
        }

        _this.wasAnimating = true;

        var currentTime = timestamp || _performanceNow2['default']();
        var timeDelta = currentTime - _this.prevTime;
        _this.prevTime = currentTime;
        _this.accumulatedTime = _this.accumulatedTime + timeDelta;
        // more than 10 frames? prolly switched browser tab. Restart
        if (_this.accumulatedTime > msPerFrame * 10) {
          _this.accumulatedTime = 0;
        }

        if (_this.accumulatedTime === 0) {
          // no need to cancel animationID here; shouldn't have any in flight
          _this.animationID = null;
          _this.startAnimationIfNecessary();
          return;
        }

        var currentFrameCompletion = (_this.accumulatedTime - Math.floor(_this.accumulatedTime / msPerFrame) * msPerFrame) / msPerFrame;
        var framesToCatchUp = Math.floor(_this.accumulatedTime / msPerFrame);

        var newLastIdealStyle = {};
        var newLastIdealVelocity = {};
        var newCurrentStyle = {};
        var newCurrentVelocity = {};

        for (var key in propsStyle) {
          if (!Object.prototype.hasOwnProperty.call(propsStyle, key)) {
            continue;
          }

          var styleValue = propsStyle[key];
          if (typeof styleValue === 'number') {
            newCurrentStyle[key] = styleValue;
            newCurrentVelocity[key] = 0;
            newLastIdealStyle[key] = styleValue;
            newLastIdealVelocity[key] = 0;
          } else {
            var newLastIdealStyleValue = _this.state.lastIdealStyle[key];
            var newLastIdealVelocityValue = _this.state.lastIdealVelocity[key];
            for (var i = 0; i < framesToCatchUp; i++) {
              var _stepper = _stepper4['default'](msPerFrame / 1000, newLastIdealStyleValue, newLastIdealVelocityValue, styleValue.val, styleValue.stiffness, styleValue.damping, styleValue.precision);

              newLastIdealStyleValue = _stepper[0];
              newLastIdealVelocityValue = _stepper[1];
            }

            var _stepper2 = _stepper4['default'](msPerFrame / 1000, newLastIdealStyleValue, newLastIdealVelocityValue, styleValue.val, styleValue.stiffness, styleValue.damping, styleValue.precision);

            var nextIdealX = _stepper2[0];
            var nextIdealV = _stepper2[1];

            newCurrentStyle[key] = newLastIdealStyleValue + (nextIdealX - newLastIdealStyleValue) * currentFrameCompletion;
            newCurrentVelocity[key] = newLastIdealVelocityValue + (nextIdealV - newLastIdealVelocityValue) * currentFrameCompletion;
            newLastIdealStyle[key] = newLastIdealStyleValue;
            newLastIdealVelocity[key] = newLastIdealVelocityValue;
          }
        }

        _this.animationID = null;
        // the amount we're looped over above
        _this.accumulatedTime -= framesToCatchUp * msPerFrame;

        _this.setState({
          currentStyle: newCurrentStyle,
          currentVelocity: newCurrentVelocity,
          lastIdealStyle: newLastIdealStyle,
          lastIdealVelocity: newLastIdealVelocity
        });

        _this.unreadPropStyle = null;

        _this.startAnimationIfNecessary();
      });
    };

    this.state = this.defaultState();
  }

  Motion.prototype.defaultState = function defaultState() {
    var _props = this.props;
    var defaultStyle = _props.defaultStyle;
    var style = _props.style;

    var currentStyle = defaultStyle || _stripStyle2['default'](style);
    var currentVelocity = _mapToZero2['default'](currentStyle);
    return {
      currentStyle: currentStyle,
      currentVelocity: currentVelocity,
      lastIdealStyle: currentStyle,
      lastIdealVelocity: currentVelocity
    };
  };

  // it's possible that currentStyle's value is stale: if props is immediately
  // changed from 0 to 400 to spring(0) again, the async currentStyle is still
  // at 0 (didn't have time to tick and interpolate even once). If we naively
  // compare currentStyle with destVal it'll be 0 === 0 (no animation, stop).
  // In reality currentStyle should be 400

  Motion.prototype.componentDidMount = function componentDidMount() {
    this.prevTime = _performanceNow2['default']();
    this.startAnimationIfNecessary();
  };

  Motion.prototype.componentWillReceiveProps = function componentWillReceiveProps(props) {
    if (this.unreadPropStyle != null) {
      // previous props haven't had the chance to be set yet; set them here
      this.clearUnreadPropStyle(this.unreadPropStyle);
    }

    this.unreadPropStyle = props.style;
    if (this.animationID == null) {
      this.prevTime = _performanceNow2['default']();
      this.startAnimationIfNecessary();
    }
  };

  Motion.prototype.componentWillUnmount = function componentWillUnmount() {
    if (this.animationID != null) {
      _raf2['default'].cancel(this.animationID);
      this.animationID = null;
    }
  };

  Motion.prototype.render = function render() {
    var renderedChildren = this.props.children(this.state.currentStyle);
    return renderedChildren && _react2['default'].Children.only(renderedChildren);
  };

  return Motion;
})(_react2['default'].Component);

exports['default'] = Motion;
module.exports = exports['default'];

// after checking for unreadPropStyle != null, we manually go set the
// non-interpolating values (those that are a number, without a spring
// config)

/***/ }),
/* 73 */
/***/ (function(module, exports) {

// Generated by CoffeeScript 1.12.2
(function() {
  var getNanoSeconds, hrtime, loadTime, moduleLoadTime, nodeLoadTime, upTime;

  if ((typeof performance !== "undefined" && performance !== null) && performance.now) {
    module.exports = function() {
      return performance.now();
    };
  } else if ((typeof process !== "undefined" && process !== null) && process.hrtime) {
    module.exports = function() {
      return (getNanoSeconds() - nodeLoadTime) / 1e6;
    };
    hrtime = process.hrtime;
    getNanoSeconds = function() {
      var hr;
      hr = hrtime();
      return hr[0] * 1e9 + hr[1];
    };
    moduleLoadTime = getNanoSeconds();
    upTime = process.uptime() * 1e9;
    nodeLoadTime = moduleLoadTime - upTime;
  } else if (Date.now) {
    module.exports = function() {
      return Date.now() - loadTime;
    };
    loadTime = Date.now();
  } else {
    module.exports = function() {
      return new Date().getTime() - loadTime;
    };
    loadTime = new Date().getTime();
  }

}).call(this);

//# sourceMappingURL=performance-now.js.map


/***/ }),
/* 74 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _mapToZero = __webpack_require__(12);

var _mapToZero2 = _interopRequireDefault(_mapToZero);

var _stripStyle = __webpack_require__(10);

var _stripStyle2 = _interopRequireDefault(_stripStyle);

var _stepper3 = __webpack_require__(13);

var _stepper4 = _interopRequireDefault(_stepper3);

var _performanceNow = __webpack_require__(14);

var _performanceNow2 = _interopRequireDefault(_performanceNow);

var _raf = __webpack_require__(15);

var _raf2 = _interopRequireDefault(_raf);

var _shouldStopAnimation = __webpack_require__(16);

var _shouldStopAnimation2 = _interopRequireDefault(_shouldStopAnimation);

var _react = __webpack_require__(2);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(0);

var _propTypes2 = _interopRequireDefault(_propTypes);

var msPerFrame = 1000 / 60;

function shouldStopAnimationAll(currentStyles, styles, currentVelocities) {
  for (var i = 0; i < currentStyles.length; i++) {
    if (!_shouldStopAnimation2['default'](currentStyles[i], styles[i], currentVelocities[i])) {
      return false;
    }
  }
  return true;
}

var StaggeredMotion = (function (_React$Component) {
  _inherits(StaggeredMotion, _React$Component);

  _createClass(StaggeredMotion, null, [{
    key: 'propTypes',
    value: {
      // TOOD: warn against putting a config in here
      defaultStyles: _propTypes2['default'].arrayOf(_propTypes2['default'].objectOf(_propTypes2['default'].number)),
      styles: _propTypes2['default'].func.isRequired,
      children: _propTypes2['default'].func.isRequired
    },
    enumerable: true
  }]);

  function StaggeredMotion(props) {
    var _this = this;

    _classCallCheck(this, StaggeredMotion);

    _React$Component.call(this, props);
    this.animationID = null;
    this.prevTime = 0;
    this.accumulatedTime = 0;
    this.unreadPropStyles = null;

    this.clearUnreadPropStyle = function (unreadPropStyles) {
      var _state = _this.state;
      var currentStyles = _state.currentStyles;
      var currentVelocities = _state.currentVelocities;
      var lastIdealStyles = _state.lastIdealStyles;
      var lastIdealVelocities = _state.lastIdealVelocities;

      var someDirty = false;
      for (var i = 0; i < unreadPropStyles.length; i++) {
        var unreadPropStyle = unreadPropStyles[i];
        var dirty = false;

        for (var key in unreadPropStyle) {
          if (!Object.prototype.hasOwnProperty.call(unreadPropStyle, key)) {
            continue;
          }

          var styleValue = unreadPropStyle[key];
          if (typeof styleValue === 'number') {
            if (!dirty) {
              dirty = true;
              someDirty = true;
              currentStyles[i] = _extends({}, currentStyles[i]);
              currentVelocities[i] = _extends({}, currentVelocities[i]);
              lastIdealStyles[i] = _extends({}, lastIdealStyles[i]);
              lastIdealVelocities[i] = _extends({}, lastIdealVelocities[i]);
            }
            currentStyles[i][key] = styleValue;
            currentVelocities[i][key] = 0;
            lastIdealStyles[i][key] = styleValue;
            lastIdealVelocities[i][key] = 0;
          }
        }
      }

      if (someDirty) {
        _this.setState({ currentStyles: currentStyles, currentVelocities: currentVelocities, lastIdealStyles: lastIdealStyles, lastIdealVelocities: lastIdealVelocities });
      }
    };

    this.startAnimationIfNecessary = function () {
      // TODO: when config is {a: 10} and dest is {a: 10} do we raf once and
      // call cb? No, otherwise accidental parent rerender causes cb trigger
      _this.animationID = _raf2['default'](function (timestamp) {
        var destStyles = _this.props.styles(_this.state.lastIdealStyles);

        // check if we need to animate in the first place
        if (shouldStopAnimationAll(_this.state.currentStyles, destStyles, _this.state.currentVelocities)) {
          // no need to cancel animationID here; shouldn't have any in flight
          _this.animationID = null;
          _this.accumulatedTime = 0;
          return;
        }

        var currentTime = timestamp || _performanceNow2['default']();
        var timeDelta = currentTime - _this.prevTime;
        _this.prevTime = currentTime;
        _this.accumulatedTime = _this.accumulatedTime + timeDelta;
        // more than 10 frames? prolly switched browser tab. Restart
        if (_this.accumulatedTime > msPerFrame * 10) {
          _this.accumulatedTime = 0;
        }

        if (_this.accumulatedTime === 0) {
          // no need to cancel animationID here; shouldn't have any in flight
          _this.animationID = null;
          _this.startAnimationIfNecessary();
          return;
        }

        var currentFrameCompletion = (_this.accumulatedTime - Math.floor(_this.accumulatedTime / msPerFrame) * msPerFrame) / msPerFrame;
        var framesToCatchUp = Math.floor(_this.accumulatedTime / msPerFrame);

        var newLastIdealStyles = [];
        var newLastIdealVelocities = [];
        var newCurrentStyles = [];
        var newCurrentVelocities = [];

        for (var i = 0; i < destStyles.length; i++) {
          var destStyle = destStyles[i];
          var newCurrentStyle = {};
          var newCurrentVelocity = {};
          var newLastIdealStyle = {};
          var newLastIdealVelocity = {};

          for (var key in destStyle) {
            if (!Object.prototype.hasOwnProperty.call(destStyle, key)) {
              continue;
            }

            var styleValue = destStyle[key];
            if (typeof styleValue === 'number') {
              newCurrentStyle[key] = styleValue;
              newCurrentVelocity[key] = 0;
              newLastIdealStyle[key] = styleValue;
              newLastIdealVelocity[key] = 0;
            } else {
              var newLastIdealStyleValue = _this.state.lastIdealStyles[i][key];
              var newLastIdealVelocityValue = _this.state.lastIdealVelocities[i][key];
              for (var j = 0; j < framesToCatchUp; j++) {
                var _stepper = _stepper4['default'](msPerFrame / 1000, newLastIdealStyleValue, newLastIdealVelocityValue, styleValue.val, styleValue.stiffness, styleValue.damping, styleValue.precision);

                newLastIdealStyleValue = _stepper[0];
                newLastIdealVelocityValue = _stepper[1];
              }

              var _stepper2 = _stepper4['default'](msPerFrame / 1000, newLastIdealStyleValue, newLastIdealVelocityValue, styleValue.val, styleValue.stiffness, styleValue.damping, styleValue.precision);

              var nextIdealX = _stepper2[0];
              var nextIdealV = _stepper2[1];

              newCurrentStyle[key] = newLastIdealStyleValue + (nextIdealX - newLastIdealStyleValue) * currentFrameCompletion;
              newCurrentVelocity[key] = newLastIdealVelocityValue + (nextIdealV - newLastIdealVelocityValue) * currentFrameCompletion;
              newLastIdealStyle[key] = newLastIdealStyleValue;
              newLastIdealVelocity[key] = newLastIdealVelocityValue;
            }
          }

          newCurrentStyles[i] = newCurrentStyle;
          newCurrentVelocities[i] = newCurrentVelocity;
          newLastIdealStyles[i] = newLastIdealStyle;
          newLastIdealVelocities[i] = newLastIdealVelocity;
        }

        _this.animationID = null;
        // the amount we're looped over above
        _this.accumulatedTime -= framesToCatchUp * msPerFrame;

        _this.setState({
          currentStyles: newCurrentStyles,
          currentVelocities: newCurrentVelocities,
          lastIdealStyles: newLastIdealStyles,
          lastIdealVelocities: newLastIdealVelocities
        });

        _this.unreadPropStyles = null;

        _this.startAnimationIfNecessary();
      });
    };

    this.state = this.defaultState();
  }

  StaggeredMotion.prototype.defaultState = function defaultState() {
    var _props = this.props;
    var defaultStyles = _props.defaultStyles;
    var styles = _props.styles;

    var currentStyles = defaultStyles || styles().map(_stripStyle2['default']);
    var currentVelocities = currentStyles.map(function (currentStyle) {
      return _mapToZero2['default'](currentStyle);
    });
    return {
      currentStyles: currentStyles,
      currentVelocities: currentVelocities,
      lastIdealStyles: currentStyles,
      lastIdealVelocities: currentVelocities
    };
  };

  StaggeredMotion.prototype.componentDidMount = function componentDidMount() {
    this.prevTime = _performanceNow2['default']();
    this.startAnimationIfNecessary();
  };

  StaggeredMotion.prototype.componentWillReceiveProps = function componentWillReceiveProps(props) {
    if (this.unreadPropStyles != null) {
      // previous props haven't had the chance to be set yet; set them here
      this.clearUnreadPropStyle(this.unreadPropStyles);
    }

    this.unreadPropStyles = props.styles(this.state.lastIdealStyles);
    if (this.animationID == null) {
      this.prevTime = _performanceNow2['default']();
      this.startAnimationIfNecessary();
    }
  };

  StaggeredMotion.prototype.componentWillUnmount = function componentWillUnmount() {
    if (this.animationID != null) {
      _raf2['default'].cancel(this.animationID);
      this.animationID = null;
    }
  };

  StaggeredMotion.prototype.render = function render() {
    var renderedChildren = this.props.children(this.state.currentStyles);
    return renderedChildren && _react2['default'].Children.only(renderedChildren);
  };

  return StaggeredMotion;
})(_react2['default'].Component);

exports['default'] = StaggeredMotion;
module.exports = exports['default'];

// it's possible that currentStyle's value is stale: if props is immediately
// changed from 0 to 400 to spring(0) again, the async currentStyle is still
// at 0 (didn't have time to tick and interpolate even once). If we naively
// compare currentStyle with destVal it'll be 0 === 0 (no animation, stop).
// In reality currentStyle should be 400

// after checking for unreadPropStyles != null, we manually go set the
// non-interpolating values (those that are a number, without a spring
// config)

/***/ }),
/* 75 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _mapToZero = __webpack_require__(12);

var _mapToZero2 = _interopRequireDefault(_mapToZero);

var _stripStyle = __webpack_require__(10);

var _stripStyle2 = _interopRequireDefault(_stripStyle);

var _stepper3 = __webpack_require__(13);

var _stepper4 = _interopRequireDefault(_stepper3);

var _mergeDiff = __webpack_require__(76);

var _mergeDiff2 = _interopRequireDefault(_mergeDiff);

var _performanceNow = __webpack_require__(14);

var _performanceNow2 = _interopRequireDefault(_performanceNow);

var _raf = __webpack_require__(15);

var _raf2 = _interopRequireDefault(_raf);

var _shouldStopAnimation = __webpack_require__(16);

var _shouldStopAnimation2 = _interopRequireDefault(_shouldStopAnimation);

var _react = __webpack_require__(2);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(0);

var _propTypes2 = _interopRequireDefault(_propTypes);

var msPerFrame = 1000 / 60;

// the children function & (potential) styles function asks as param an
// Array<TransitionPlainStyle>, where each TransitionPlainStyle is of the format
// {key: string, data?: any, style: PlainStyle}. However, the way we keep
// internal states doesn't contain such a data structure (check the state and
// TransitionMotionState). So when children function and others ask for such
// data we need to generate them on the fly by combining mergedPropsStyles and
// currentStyles/lastIdealStyles
function rehydrateStyles(mergedPropsStyles, unreadPropStyles, plainStyles) {
  // Copy the value to a `const` so that Flow understands that the const won't
  // change and will be non-nullable in the callback below.
  var cUnreadPropStyles = unreadPropStyles;
  if (cUnreadPropStyles == null) {
    return mergedPropsStyles.map(function (mergedPropsStyle, i) {
      return {
        key: mergedPropsStyle.key,
        data: mergedPropsStyle.data,
        style: plainStyles[i]
      };
    });
  }
  return mergedPropsStyles.map(function (mergedPropsStyle, i) {
    for (var j = 0; j < cUnreadPropStyles.length; j++) {
      if (cUnreadPropStyles[j].key === mergedPropsStyle.key) {
        return {
          key: cUnreadPropStyles[j].key,
          data: cUnreadPropStyles[j].data,
          style: plainStyles[i]
        };
      }
    }
    return { key: mergedPropsStyle.key, data: mergedPropsStyle.data, style: plainStyles[i] };
  });
}

function shouldStopAnimationAll(currentStyles, destStyles, currentVelocities, mergedPropsStyles) {
  if (mergedPropsStyles.length !== destStyles.length) {
    return false;
  }

  for (var i = 0; i < mergedPropsStyles.length; i++) {
    if (mergedPropsStyles[i].key !== destStyles[i].key) {
      return false;
    }
  }

  // we have the invariant that mergedPropsStyles and
  // currentStyles/currentVelocities/last* are synced in terms of cells, see
  // mergeAndSync comment for more info
  for (var i = 0; i < mergedPropsStyles.length; i++) {
    if (!_shouldStopAnimation2['default'](currentStyles[i], destStyles[i].style, currentVelocities[i])) {
      return false;
    }
  }

  return true;
}

// core key merging logic

// things to do: say previously merged style is {a, b}, dest style (prop) is {b,
// c}, previous current (interpolating) style is {a, b}
// **invariant**: current[i] corresponds to merged[i] in terms of key

// steps:
// turn merged style into {a?, b, c}
//    add c, value of c is destStyles.c
//    maybe remove a, aka call willLeave(a), then merged is either {b, c} or {a, b, c}
// turn current (interpolating) style from {a, b} into {a?, b, c}
//    maybe remove a
//    certainly add c, value of c is willEnter(c)
// loop over merged and construct new current
// dest doesn't change, that's owner's
function mergeAndSync(willEnter, willLeave, didLeave, oldMergedPropsStyles, destStyles, oldCurrentStyles, oldCurrentVelocities, oldLastIdealStyles, oldLastIdealVelocities) {
  var newMergedPropsStyles = _mergeDiff2['default'](oldMergedPropsStyles, destStyles, function (oldIndex, oldMergedPropsStyle) {
    var leavingStyle = willLeave(oldMergedPropsStyle);
    if (leavingStyle == null) {
      didLeave({ key: oldMergedPropsStyle.key, data: oldMergedPropsStyle.data });
      return null;
    }
    if (_shouldStopAnimation2['default'](oldCurrentStyles[oldIndex], leavingStyle, oldCurrentVelocities[oldIndex])) {
      didLeave({ key: oldMergedPropsStyle.key, data: oldMergedPropsStyle.data });
      return null;
    }
    return { key: oldMergedPropsStyle.key, data: oldMergedPropsStyle.data, style: leavingStyle };
  });

  var newCurrentStyles = [];
  var newCurrentVelocities = [];
  var newLastIdealStyles = [];
  var newLastIdealVelocities = [];
  for (var i = 0; i < newMergedPropsStyles.length; i++) {
    var newMergedPropsStyleCell = newMergedPropsStyles[i];
    var foundOldIndex = null;
    for (var j = 0; j < oldMergedPropsStyles.length; j++) {
      if (oldMergedPropsStyles[j].key === newMergedPropsStyleCell.key) {
        foundOldIndex = j;
        break;
      }
    }
    // TODO: key search code
    if (foundOldIndex == null) {
      var plainStyle = willEnter(newMergedPropsStyleCell);
      newCurrentStyles[i] = plainStyle;
      newLastIdealStyles[i] = plainStyle;

      var velocity = _mapToZero2['default'](newMergedPropsStyleCell.style);
      newCurrentVelocities[i] = velocity;
      newLastIdealVelocities[i] = velocity;
    } else {
      newCurrentStyles[i] = oldCurrentStyles[foundOldIndex];
      newLastIdealStyles[i] = oldLastIdealStyles[foundOldIndex];
      newCurrentVelocities[i] = oldCurrentVelocities[foundOldIndex];
      newLastIdealVelocities[i] = oldLastIdealVelocities[foundOldIndex];
    }
  }

  return [newMergedPropsStyles, newCurrentStyles, newCurrentVelocities, newLastIdealStyles, newLastIdealVelocities];
}

var TransitionMotion = (function (_React$Component) {
  _inherits(TransitionMotion, _React$Component);

  _createClass(TransitionMotion, null, [{
    key: 'propTypes',
    value: {
      defaultStyles: _propTypes2['default'].arrayOf(_propTypes2['default'].shape({
        key: _propTypes2['default'].string.isRequired,
        data: _propTypes2['default'].any,
        style: _propTypes2['default'].objectOf(_propTypes2['default'].number).isRequired
      })),
      styles: _propTypes2['default'].oneOfType([_propTypes2['default'].func, _propTypes2['default'].arrayOf(_propTypes2['default'].shape({
        key: _propTypes2['default'].string.isRequired,
        data: _propTypes2['default'].any,
        style: _propTypes2['default'].objectOf(_propTypes2['default'].oneOfType([_propTypes2['default'].number, _propTypes2['default'].object])).isRequired
      }))]).isRequired,
      children: _propTypes2['default'].func.isRequired,
      willEnter: _propTypes2['default'].func,
      willLeave: _propTypes2['default'].func,
      didLeave: _propTypes2['default'].func
    },
    enumerable: true
  }, {
    key: 'defaultProps',
    value: {
      willEnter: function willEnter(styleThatEntered) {
        return _stripStyle2['default'](styleThatEntered.style);
      },
      // recall: returning null makes the current unmounting TransitionStyle
      // disappear immediately
      willLeave: function willLeave() {
        return null;
      },
      didLeave: function didLeave() {}
    },
    enumerable: true
  }]);

  function TransitionMotion(props) {
    var _this = this;

    _classCallCheck(this, TransitionMotion);

    _React$Component.call(this, props);
    this.unmounting = false;
    this.animationID = null;
    this.prevTime = 0;
    this.accumulatedTime = 0;
    this.unreadPropStyles = null;

    this.clearUnreadPropStyle = function (unreadPropStyles) {
      var _mergeAndSync = mergeAndSync(_this.props.willEnter, _this.props.willLeave, _this.props.didLeave, _this.state.mergedPropsStyles, unreadPropStyles, _this.state.currentStyles, _this.state.currentVelocities, _this.state.lastIdealStyles, _this.state.lastIdealVelocities);

      var mergedPropsStyles = _mergeAndSync[0];
      var currentStyles = _mergeAndSync[1];
      var currentVelocities = _mergeAndSync[2];
      var lastIdealStyles = _mergeAndSync[3];
      var lastIdealVelocities = _mergeAndSync[4];

      for (var i = 0; i < unreadPropStyles.length; i++) {
        var unreadPropStyle = unreadPropStyles[i].style;
        var dirty = false;

        for (var key in unreadPropStyle) {
          if (!Object.prototype.hasOwnProperty.call(unreadPropStyle, key)) {
            continue;
          }

          var styleValue = unreadPropStyle[key];
          if (typeof styleValue === 'number') {
            if (!dirty) {
              dirty = true;
              currentStyles[i] = _extends({}, currentStyles[i]);
              currentVelocities[i] = _extends({}, currentVelocities[i]);
              lastIdealStyles[i] = _extends({}, lastIdealStyles[i]);
              lastIdealVelocities[i] = _extends({}, lastIdealVelocities[i]);
              mergedPropsStyles[i] = {
                key: mergedPropsStyles[i].key,
                data: mergedPropsStyles[i].data,
                style: _extends({}, mergedPropsStyles[i].style)
              };
            }
            currentStyles[i][key] = styleValue;
            currentVelocities[i][key] = 0;
            lastIdealStyles[i][key] = styleValue;
            lastIdealVelocities[i][key] = 0;
            mergedPropsStyles[i].style[key] = styleValue;
          }
        }
      }

      // unlike the other 2 components, we can't detect staleness and optionally
      // opt out of setState here. each style object's data might contain new
      // stuff we're not/cannot compare
      _this.setState({
        currentStyles: currentStyles,
        currentVelocities: currentVelocities,
        mergedPropsStyles: mergedPropsStyles,
        lastIdealStyles: lastIdealStyles,
        lastIdealVelocities: lastIdealVelocities
      });
    };

    this.startAnimationIfNecessary = function () {
      if (_this.unmounting) {
        return;
      }

      // TODO: when config is {a: 10} and dest is {a: 10} do we raf once and
      // call cb? No, otherwise accidental parent rerender causes cb trigger
      _this.animationID = _raf2['default'](function (timestamp) {
        // https://github.com/chenglou/react-motion/pull/420
        // > if execution passes the conditional if (this.unmounting), then
        // executes async defaultRaf and after that component unmounts and after
        // that the callback of defaultRaf is called, then setState will be called
        // on unmounted component.
        if (_this.unmounting) {
          return;
        }

        var propStyles = _this.props.styles;
        var destStyles = typeof propStyles === 'function' ? propStyles(rehydrateStyles(_this.state.mergedPropsStyles, _this.unreadPropStyles, _this.state.lastIdealStyles)) : propStyles;

        // check if we need to animate in the first place
        if (shouldStopAnimationAll(_this.state.currentStyles, destStyles, _this.state.currentVelocities, _this.state.mergedPropsStyles)) {
          // no need to cancel animationID here; shouldn't have any in flight
          _this.animationID = null;
          _this.accumulatedTime = 0;
          return;
        }

        var currentTime = timestamp || _performanceNow2['default']();
        var timeDelta = currentTime - _this.prevTime;
        _this.prevTime = currentTime;
        _this.accumulatedTime = _this.accumulatedTime + timeDelta;
        // more than 10 frames? prolly switched browser tab. Restart
        if (_this.accumulatedTime > msPerFrame * 10) {
          _this.accumulatedTime = 0;
        }

        if (_this.accumulatedTime === 0) {
          // no need to cancel animationID here; shouldn't have any in flight
          _this.animationID = null;
          _this.startAnimationIfNecessary();
          return;
        }

        var currentFrameCompletion = (_this.accumulatedTime - Math.floor(_this.accumulatedTime / msPerFrame) * msPerFrame) / msPerFrame;
        var framesToCatchUp = Math.floor(_this.accumulatedTime / msPerFrame);

        var _mergeAndSync2 = mergeAndSync(_this.props.willEnter, _this.props.willLeave, _this.props.didLeave, _this.state.mergedPropsStyles, destStyles, _this.state.currentStyles, _this.state.currentVelocities, _this.state.lastIdealStyles, _this.state.lastIdealVelocities);

        var newMergedPropsStyles = _mergeAndSync2[0];
        var newCurrentStyles = _mergeAndSync2[1];
        var newCurrentVelocities = _mergeAndSync2[2];
        var newLastIdealStyles = _mergeAndSync2[3];
        var newLastIdealVelocities = _mergeAndSync2[4];

        for (var i = 0; i < newMergedPropsStyles.length; i++) {
          var newMergedPropsStyle = newMergedPropsStyles[i].style;
          var newCurrentStyle = {};
          var newCurrentVelocity = {};
          var newLastIdealStyle = {};
          var newLastIdealVelocity = {};

          for (var key in newMergedPropsStyle) {
            if (!Object.prototype.hasOwnProperty.call(newMergedPropsStyle, key)) {
              continue;
            }

            var styleValue = newMergedPropsStyle[key];
            if (typeof styleValue === 'number') {
              newCurrentStyle[key] = styleValue;
              newCurrentVelocity[key] = 0;
              newLastIdealStyle[key] = styleValue;
              newLastIdealVelocity[key] = 0;
            } else {
              var newLastIdealStyleValue = newLastIdealStyles[i][key];
              var newLastIdealVelocityValue = newLastIdealVelocities[i][key];
              for (var j = 0; j < framesToCatchUp; j++) {
                var _stepper = _stepper4['default'](msPerFrame / 1000, newLastIdealStyleValue, newLastIdealVelocityValue, styleValue.val, styleValue.stiffness, styleValue.damping, styleValue.precision);

                newLastIdealStyleValue = _stepper[0];
                newLastIdealVelocityValue = _stepper[1];
              }

              var _stepper2 = _stepper4['default'](msPerFrame / 1000, newLastIdealStyleValue, newLastIdealVelocityValue, styleValue.val, styleValue.stiffness, styleValue.damping, styleValue.precision);

              var nextIdealX = _stepper2[0];
              var nextIdealV = _stepper2[1];

              newCurrentStyle[key] = newLastIdealStyleValue + (nextIdealX - newLastIdealStyleValue) * currentFrameCompletion;
              newCurrentVelocity[key] = newLastIdealVelocityValue + (nextIdealV - newLastIdealVelocityValue) * currentFrameCompletion;
              newLastIdealStyle[key] = newLastIdealStyleValue;
              newLastIdealVelocity[key] = newLastIdealVelocityValue;
            }
          }

          newLastIdealStyles[i] = newLastIdealStyle;
          newLastIdealVelocities[i] = newLastIdealVelocity;
          newCurrentStyles[i] = newCurrentStyle;
          newCurrentVelocities[i] = newCurrentVelocity;
        }

        _this.animationID = null;
        // the amount we're looped over above
        _this.accumulatedTime -= framesToCatchUp * msPerFrame;

        _this.setState({
          currentStyles: newCurrentStyles,
          currentVelocities: newCurrentVelocities,
          lastIdealStyles: newLastIdealStyles,
          lastIdealVelocities: newLastIdealVelocities,
          mergedPropsStyles: newMergedPropsStyles
        });

        _this.unreadPropStyles = null;

        _this.startAnimationIfNecessary();
      });
    };

    this.state = this.defaultState();
  }

  TransitionMotion.prototype.defaultState = function defaultState() {
    var _props = this.props;
    var defaultStyles = _props.defaultStyles;
    var styles = _props.styles;
    var willEnter = _props.willEnter;
    var willLeave = _props.willLeave;
    var didLeave = _props.didLeave;

    var destStyles = typeof styles === 'function' ? styles(defaultStyles) : styles;

    // this is special. for the first time around, we don't have a comparison
    // between last (no last) and current merged props. we'll compute last so:
    // say default is {a, b} and styles (dest style) is {b, c}, we'll
    // fabricate last as {a, b}
    var oldMergedPropsStyles = undefined;
    if (defaultStyles == null) {
      oldMergedPropsStyles = destStyles;
    } else {
      oldMergedPropsStyles = defaultStyles.map(function (defaultStyleCell) {
        // TODO: key search code
        for (var i = 0; i < destStyles.length; i++) {
          if (destStyles[i].key === defaultStyleCell.key) {
            return destStyles[i];
          }
        }
        return defaultStyleCell;
      });
    }
    var oldCurrentStyles = defaultStyles == null ? destStyles.map(function (s) {
      return _stripStyle2['default'](s.style);
    }) : defaultStyles.map(function (s) {
      return _stripStyle2['default'](s.style);
    });
    var oldCurrentVelocities = defaultStyles == null ? destStyles.map(function (s) {
      return _mapToZero2['default'](s.style);
    }) : defaultStyles.map(function (s) {
      return _mapToZero2['default'](s.style);
    });

    var _mergeAndSync3 = mergeAndSync(
    // Because this is an old-style createReactClass component, Flow doesn't
    // understand that the willEnter and willLeave props have default values
    // and will always be present.
    willEnter, willLeave, didLeave, oldMergedPropsStyles, destStyles, oldCurrentStyles, oldCurrentVelocities, oldCurrentStyles, // oldLastIdealStyles really
    oldCurrentVelocities);

    var mergedPropsStyles = _mergeAndSync3[0];
    var currentStyles = _mergeAndSync3[1];
    var currentVelocities = _mergeAndSync3[2];
    var lastIdealStyles = _mergeAndSync3[3];
    var lastIdealVelocities = _mergeAndSync3[4];
    // oldLastIdealVelocities really

    return {
      currentStyles: currentStyles,
      currentVelocities: currentVelocities,
      lastIdealStyles: lastIdealStyles,
      lastIdealVelocities: lastIdealVelocities,
      mergedPropsStyles: mergedPropsStyles
    };
  };

  // after checking for unreadPropStyles != null, we manually go set the
  // non-interpolating values (those that are a number, without a spring
  // config)

  TransitionMotion.prototype.componentDidMount = function componentDidMount() {
    this.prevTime = _performanceNow2['default']();
    this.startAnimationIfNecessary();
  };

  TransitionMotion.prototype.componentWillReceiveProps = function componentWillReceiveProps(props) {
    if (this.unreadPropStyles) {
      // previous props haven't had the chance to be set yet; set them here
      this.clearUnreadPropStyle(this.unreadPropStyles);
    }

    var styles = props.styles;
    if (typeof styles === 'function') {
      this.unreadPropStyles = styles(rehydrateStyles(this.state.mergedPropsStyles, this.unreadPropStyles, this.state.lastIdealStyles));
    } else {
      this.unreadPropStyles = styles;
    }

    if (this.animationID == null) {
      this.prevTime = _performanceNow2['default']();
      this.startAnimationIfNecessary();
    }
  };

  TransitionMotion.prototype.componentWillUnmount = function componentWillUnmount() {
    this.unmounting = true;
    if (this.animationID != null) {
      _raf2['default'].cancel(this.animationID);
      this.animationID = null;
    }
  };

  TransitionMotion.prototype.render = function render() {
    var hydratedStyles = rehydrateStyles(this.state.mergedPropsStyles, this.unreadPropStyles, this.state.currentStyles);
    var renderedChildren = this.props.children(hydratedStyles);
    return renderedChildren && _react2['default'].Children.only(renderedChildren);
  };

  return TransitionMotion;
})(_react2['default'].Component);

exports['default'] = TransitionMotion;
module.exports = exports['default'];

// list of styles, each containing interpolating values. Part of what's passed
// to children function. Notice that this is
// Array<ActualInterpolatingStyleObject>, without the wrapper that is {key: ...,
// data: ... style: ActualInterpolatingStyleObject}. Only mergedPropsStyles
// contains the key & data info (so that we only have a single source of truth
// for these, and to save space). Check the comment for `rehydrateStyles` to
// see how we regenerate the entirety of what's passed to children function

// the array that keeps track of currently rendered stuff! Including stuff
// that you've unmounted but that's still animating. This is where it lives

// it's possible that currentStyle's value is stale: if props is immediately
// changed from 0 to 400 to spring(0) again, the async currentStyle is still
// at 0 (didn't have time to tick and interpolate even once). If we naively
// compare currentStyle with destVal it'll be 0 === 0 (no animation, stop).
// In reality currentStyle should be 400

/***/ }),
/* 76 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// core keys merging algorithm. If previous render's keys are [a, b], and the
// next render's [c, b, d], what's the final merged keys and ordering?

// - c and a must both be before b
// - b before d
// - ordering between a and c ambiguous

// this reduces to merging two partially ordered lists (e.g. lists where not
// every item has a definite ordering, like comparing a and c above). For the
// ambiguous ordering we deterministically choose to place the next render's
// item after the previous'; so c after a

// this is called a topological sorting. Except the existing algorithms don't
// work well with js bc of the amount of allocation, and isn't optimized for our
// current use-case bc the runtime is linear in terms of edges (see wiki for
// meaning), which is huge when two lists have many common elements


exports.__esModule = true;
exports['default'] = mergeDiff;

function mergeDiff(prev, next, onRemove) {
  // bookkeeping for easier access of a key's index below. This is 2 allocations +
  // potentially triggering chrome hash map mode for objs (so it might be faster

  var prevKeyIndex = {};
  for (var i = 0; i < prev.length; i++) {
    prevKeyIndex[prev[i].key] = i;
  }
  var nextKeyIndex = {};
  for (var i = 0; i < next.length; i++) {
    nextKeyIndex[next[i].key] = i;
  }

  // first, an overly elaborate way of merging prev and next, eliminating
  // duplicates (in terms of keys). If there's dupe, keep the item in next).
  // This way of writing it saves allocations
  var ret = [];
  for (var i = 0; i < next.length; i++) {
    ret[i] = next[i];
  }
  for (var i = 0; i < prev.length; i++) {
    if (!Object.prototype.hasOwnProperty.call(nextKeyIndex, prev[i].key)) {
      // this is called my TM's `mergeAndSync`, which calls willLeave. We don't
      // merge in keys that the user desires to kill
      var fill = onRemove(i, prev[i]);
      if (fill != null) {
        ret.push(fill);
      }
    }
  }

  // now all the items all present. Core sorting logic to have the right order
  return ret.sort(function (a, b) {
    var nextOrderA = nextKeyIndex[a.key];
    var nextOrderB = nextKeyIndex[b.key];
    var prevOrderA = prevKeyIndex[a.key];
    var prevOrderB = prevKeyIndex[b.key];

    if (nextOrderA != null && nextOrderB != null) {
      // both keys in next
      return nextKeyIndex[a.key] - nextKeyIndex[b.key];
    } else if (prevOrderA != null && prevOrderB != null) {
      // both keys in prev
      return prevKeyIndex[a.key] - prevKeyIndex[b.key];
    } else if (nextOrderA != null) {
      // key a in next, key b in prev

      // how to determine the order between a and b? We find a "pivot" (term
      // abuse), a key present in both prev and next, that is sandwiched between
      // a and b. In the context of our above example, if we're comparing a and
      // d, b's (the only) pivot
      for (var i = 0; i < next.length; i++) {
        var pivot = next[i].key;
        if (!Object.prototype.hasOwnProperty.call(prevKeyIndex, pivot)) {
          continue;
        }

        if (nextOrderA < nextKeyIndex[pivot] && prevOrderB > prevKeyIndex[pivot]) {
          return -1;
        } else if (nextOrderA > nextKeyIndex[pivot] && prevOrderB < prevKeyIndex[pivot]) {
          return 1;
        }
      }
      // pluggable. default to: next bigger than prev
      return 1;
    }
    // prevOrderA, nextOrderB
    for (var i = 0; i < next.length; i++) {
      var pivot = next[i].key;
      if (!Object.prototype.hasOwnProperty.call(prevKeyIndex, pivot)) {
        continue;
      }
      if (nextOrderB < nextKeyIndex[pivot] && prevOrderA > prevKeyIndex[pivot]) {
        return 1;
      } else if (nextOrderB > nextKeyIndex[pivot] && prevOrderA < prevKeyIndex[pivot]) {
        return -1;
      }
    }
    // pluggable. default to: next bigger than prev
    return -1;
  });
}

module.exports = exports['default'];
// to loop through and find a key's index each time), but I no longer care

/***/ }),
/* 77 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports['default'] = spring;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _presets = __webpack_require__(22);

var _presets2 = _interopRequireDefault(_presets);

var defaultConfig = _extends({}, _presets2['default'].noWobble, {
  precision: 0.01
});

function spring(val, config) {
  return _extends({}, defaultConfig, config, { val: val });
}

module.exports = exports['default'];

/***/ }),
/* 78 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports['default'] = reorderKeys;

var hasWarned = false;

function reorderKeys() {
  if (process.env.NODE_ENV === 'development') {
    if (!hasWarned) {
      hasWarned = true;
      console.error('`reorderKeys` has been removed, since it is no longer needed for TransitionMotion\'s new styles array API.');
    }
  }
}

module.exports = exports['default'];

/***/ }),
/* 79 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _reactJplayerUtils = __webpack_require__(1);

var _video = __webpack_require__(24);

var _video2 = _interopRequireDefault(_video);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var mapStateToProps = function mapStateToProps(_ref, _ref2) {
  var jPlayers = _ref.jPlayers;
  var id = _ref2.id;
  return {
    require: jPlayers[id].mediaSettings.video
  };
};

exports.default = (0, _reactJplayerUtils.connectWithId)(mapStateToProps)(_video2.default);

/***/ }),
/* 80 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = __webpack_require__(2);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(0);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _eventsContainer = __webpack_require__(81);

var _eventsContainer2 = _interopRequireDefault(_eventsContainer);

var _track = __webpack_require__(84);

var _track2 = _interopRequireDefault(_track);

var _constants = __webpack_require__(4);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Media = function Media(props) {
  return _react2.default.createElement(
    _eventsContainer2.default,
    {
      updateMediaStatus: props.updateMediaStatus,
      onAbort: props.onAbort,
      onCanPlay: props.onCanPlay,
      onCanPlayThrough: props.onCanPlayThrough,
      onDurationChange: props.onDurationChange,
      onEmptied: props.onEmptied,
      onEncrypted: props.onEncrypted,
      onEnded: props.onEnded,
      onError: props.onError,
      onLoadedData: props.onLoadedData,
      onLoadedMetadata: props.onLoadedMetadata,
      onLoadStart: props.onLoadStart,
      onPause: props.onPause,
      onPlay: props.onPlay,
      onPlaying: props.onPlaying,
      onProgress: props.onProgress,
      onRateChange: props.onRateChange,
      onSeeked: props.onSeeked,
      onSeeking: props.onSeeking,
      onStalled: props.onStalled,
      onSuspend: props.onSuspend,
      onTimeUpdate: props.onTimeUpdate,
      onVolumeChange: props.onVolumeChange,
      onWaiting: props.onWaiting
    },
    _react2.default.cloneElement(_react2.default.Children.only(props.children), {
      ref: props.setCurrentMedia,
      className: _constants.classes.MEDIA
    }, props.tracks.map(function (track) {
      return _react2.default.createElement(_track2.default, _extends({ key: track.src }, track));
    }))
  );
};

Media.defaultProps = {
  tracks: []
};

Media.propTypes = {
  children: _propTypes2.default.node.isRequired,
  setCurrentMedia: _propTypes2.default.func.isRequired,
  updateMediaStatus: _propTypes2.default.func.isRequired,
  tracks: _propTypes2.default.arrayOf(_propTypes2.default.shape({
    default: _propTypes2.default.bool,
    kind: _propTypes2.default.string,
    src: _propTypes2.default.string.isRequired,
    label: _propTypes2.default.string,
    srclang: _propTypes2.default.string
  })),
  onAbort: _propTypes2.default.func.isRequired,
  onCanPlay: _propTypes2.default.func.isRequired,
  onCanPlayThrough: _propTypes2.default.func.isRequired,
  onDurationChange: _propTypes2.default.func.isRequired,
  onEmptied: _propTypes2.default.func.isRequired,
  onEncrypted: _propTypes2.default.func.isRequired,
  onEnded: _propTypes2.default.func.isRequired,
  onError: _propTypes2.default.func.isRequired,
  onLoadedData: _propTypes2.default.func.isRequired,
  onLoadedMetadata: _propTypes2.default.func.isRequired,
  onLoadStart: _propTypes2.default.func.isRequired,
  onPause: _propTypes2.default.func.isRequired,
  onPlay: _propTypes2.default.func.isRequired,
  onPlaying: _propTypes2.default.func.isRequired,
  onProgress: _propTypes2.default.func.isRequired,
  onRateChange: _propTypes2.default.func.isRequired,
  onSeeked: _propTypes2.default.func.isRequired,
  onSeeking: _propTypes2.default.func.isRequired,
  onStalled: _propTypes2.default.func.isRequired,
  onSuspend: _propTypes2.default.func.isRequired,
  onTimeUpdate: _propTypes2.default.func.isRequired,
  onVolumeChange: _propTypes2.default.func.isRequired,
  onWaiting: _propTypes2.default.func.isRequired
};

exports.default = Media;

/***/ }),
/* 81 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _propTypes = __webpack_require__(0);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _recompose = __webpack_require__(3);

var _reactJplayerUtils = __webpack_require__(1);

var _events = __webpack_require__(82);

var _events2 = _interopRequireDefault(_events);

var _urlNotSupportedError = __webpack_require__(83);

var _urlNotSupportedError2 = _interopRequireDefault(_urlNotSupportedError);

var _actions = __webpack_require__(5);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var mapStateToProps = function mapStateToProps(_ref, _ref2) {
  var jPlayers = _ref.jPlayers;
  var id = _ref2.id;
  return {
    src: jPlayers[id].src,
    pauseOthersOnPlay: jPlayers[id].pauseOthersOnPlay,
    otherJPlayerIds: Object.keys(jPlayers).filter(function (key) {
      return key !== id;
    })
  };
};

var contextTypes = {
  internalEvents: _propTypes2.default.shape({
    onAbort: _propTypes2.default.func,
    onCanPlay: _propTypes2.default.func,
    onCanPlayThrough: _propTypes2.default.func,
    onDurationChange: _propTypes2.default.func,
    onEmptied: _propTypes2.default.func,
    onEncrypted: _propTypes2.default.func,
    onEnded: _propTypes2.default.func,
    onError: _propTypes2.default.func,
    onLoadedData: _propTypes2.default.func,
    onLoadedMetadata: _propTypes2.default.func,
    onLoadStart: _propTypes2.default.func,
    onPause: _propTypes2.default.func,
    onPlay: _propTypes2.default.func,
    onPlaying: _propTypes2.default.func,
    onProgress: _propTypes2.default.func,
    onRateChange: _propTypes2.default.func,
    onSeeked: _propTypes2.default.func,
    onSeeking: _propTypes2.default.func,
    onStalled: _propTypes2.default.func,
    onSuspend: _propTypes2.default.func,
    onTimeUpdate: _propTypes2.default.func,
    onVolumeChange: _propTypes2.default.func,
    onWaiting: _propTypes2.default.func
  })
};

var defaultProps = {
  internalEvents: {}
};

var mapEvents = function mapEvents(ownerProps) {
  var events = {};

  Object.keys(ownerProps.internalEvents).forEach(function (key) {
    events[key] = function (e) {
      ownerProps.internalEvents[key](e);
      ownerProps[key](e);
    };
  });

  return _extends({}, ownerProps, events);
};

var firstHandlers = {
  pauseOthers: function pauseOthers(props) {
    return function () {
      props.otherJPlayerIds.forEach(function (id) {
        return props.pause(id);
      });
    };
  }
};

var secondHandlers = {
  onDurationChange: function onDurationChange(props) {
    return function (e) {
      props.updateMediaStatus();
      props.onDurationChange(e);
    };
  },
  onEnded: function onEnded(props) {
    return function (e) {
      props.pause(props.id, 0);
      props.updateMediaStatus();
      props.onEnded(e);
    };
  },
  onError: function onError(props) {
    return function (e) {
      props.setOption(props.id, 'error', (0, _urlNotSupportedError2.default)(props.src));
      props.onError(e);
    };
  },
  onPlay: function onPlay(props) {
    return function (e) {
      if (props.pauseOthersOnPlay) {
        props.pauseOthers();
      }
      props.play(props.id);
      props.onPlay(e);
    };
  },
  onProgress: function onProgress(props) {
    return function (e) {
      var bufferedTimeRanges = [];

      for (var i = 0; i < e.currentTarget.buffered.length; i += 1) {
        bufferedTimeRanges.push({
          start: e.currentTarget.buffered.start(i),
          end: e.currentTarget.buffered.end(i)
        });
      }
      props.updateMediaStatus();
      props.setOption(props.id, 'bufferedTimeRanges', bufferedTimeRanges);
      props.onProgress(e);
    };
  },
  onSeeked: function onSeeked(props) {
    return function (e) {
      props.setOption(props.id, 'seeking', false);
      props.onSeeked(e);
    };
  },
  onSeeking: function onSeeking(props) {
    return function (e) {
      props.setOption(props.id, 'seeking', true);
      props.onSeeking(e);
    };
  },
  onTimeUpdate: function onTimeUpdate(props) {
    return function (e) {
      props.updateMediaStatus();
      props.onTimeUpdate(e);
    };
  }
};

exports.default = (0, _recompose.compose)((0, _reactJplayerUtils.connectWithId)(mapStateToProps, {
  setOption: _actions.setOption,
  pause: _actions.pause,
  play: _actions.play
}), (0, _recompose.getContext)(contextTypes), (0, _recompose.defaultProps)(defaultProps), (0, _recompose.mapProps)(mapEvents), (0, _recompose.withHandlers)(firstHandlers), (0, _recompose.withHandlers)(secondHandlers))(_events2.default);

/***/ }),
/* 82 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(2);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(0);

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Events = function Events(props) {
  return _react2.default.cloneElement(_react2.default.Children.only(props.children), {
    onAbort: props.onAbort,
    onCanPlay: props.onCanPlay,
    onCanPlayThrough: props.onCanPlayThrough,
    onDurationChange: props.onDurationChange,
    onEmptied: props.onEmptied,
    onEncrypted: props.onEncrypted,
    onEnded: props.onEnded,
    onError: props.onError,
    onLoadedData: props.onLoadedData,
    onLoadedMetadata: props.onLoadedMetadata,
    onLoadStart: props.onLoadStart,
    onPause: props.onPause,
    onPlay: props.onPlay,
    onPlaying: props.onPlaying,
    onProgress: props.onProgress,
    onRateChange: props.onRateChange,
    onSeeked: props.onSeeked,
    onSeeking: props.onSeeking,
    onStalled: props.onStalled,
    onSuspend: props.onSuspend,
    onTimeUpdate: props.onTimeUpdate,
    onVolumeChange: props.onVolumeChange,
    onWaiting: props.onWaiting
  });
};

Events.propTypes = {
  children: _propTypes2.default.element.isRequired,
  onAbort: _propTypes2.default.func.isRequired,
  onCanPlay: _propTypes2.default.func.isRequired,
  onCanPlayThrough: _propTypes2.default.func.isRequired,
  onDurationChange: _propTypes2.default.func.isRequired,
  onEmptied: _propTypes2.default.func.isRequired,
  onEncrypted: _propTypes2.default.func.isRequired,
  onEnded: _propTypes2.default.func.isRequired,
  onError: _propTypes2.default.func.isRequired,
  onLoadedData: _propTypes2.default.func.isRequired,
  onLoadedMetadata: _propTypes2.default.func.isRequired,
  onLoadStart: _propTypes2.default.func.isRequired,
  onPause: _propTypes2.default.func.isRequired,
  onPlay: _propTypes2.default.func.isRequired,
  onPlaying: _propTypes2.default.func.isRequired,
  onProgress: _propTypes2.default.func.isRequired,
  onRateChange: _propTypes2.default.func.isRequired,
  onSeeked: _propTypes2.default.func.isRequired,
  onSeeking: _propTypes2.default.func.isRequired,
  onStalled: _propTypes2.default.func.isRequired,
  onSuspend: _propTypes2.default.func.isRequired,
  onTimeUpdate: _propTypes2.default.func.isRequired,
  onVolumeChange: _propTypes2.default.func.isRequired,
  onWaiting: _propTypes2.default.func.isRequired
};

exports.default = Events;

/***/ }),
/* 83 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _constants = __webpack_require__(4);

exports.default = function (context) {
  return {
    context: context,
    message: _constants.errors.URL_NO_SUPPORT,
    hint: _constants.hints.URL_NO_SUPPORT
  };
};

/***/ }),
/* 84 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(2);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(0);

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Track = function Track(props) {
  return _react2.default.createElement('track', {
    'default': props.default,
    kind: props.kind,
    src: props.src,
    label: props.label,
    srcLang: props.srclang
  });
};

Track.defaultProps = {
  default: null,
  kind: null,
  label: null,
  srclang: null
};

Track.propTypes = {
  default: _propTypes2.default.bool,
  kind: _propTypes2.default.string,
  src: _propTypes2.default.string.isRequired,
  label: _propTypes2.default.string,
  srclang: _propTypes2.default.string
};

exports.default = Track;

/***/ }),
/* 85 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _reactJplayerUtils = __webpack_require__(1);

var _audio = __webpack_require__(26);

var _audio2 = _interopRequireDefault(_audio);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var mapStateToProps = function mapStateToProps(_ref, _ref2) {
  var jPlayers = _ref.jPlayers;
  var id = _ref2.id;
  return {
    require: !jPlayers[id].mediaSettings.video
  };
};

exports.default = (0, _reactJplayerUtils.connectWithId)(mapStateToProps)(_audio2.default);

/***/ }),
/* 86 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _propTypes = __webpack_require__(0);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _recompose = __webpack_require__(3);

var _reactJplayerUtils = __webpack_require__(1);

var _states = __webpack_require__(87);

var _states2 = _interopRequireDefault(_states);

var _jPlayer = __webpack_require__(27);

var _jPlayer2 = _interopRequireDefault(_jPlayer);

var _actions = __webpack_require__(5);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var mapStateToProps = function mapStateToProps(_ref, ownProps) {
  var jPlayers = _ref.jPlayers;
  var id = ownProps.id,
      keyBindings = ownProps.keyBindings,
      children = ownProps.children,
      className = ownProps.className;


  return {
    media: jPlayers[id].media,
    fullScreen: jPlayers[id].fullScreen,
    paused: jPlayers[id].paused,
    startGuiFadeOut: jPlayers[id].startGuiFadeOut,
    keyBindings: keyBindings,
    id: id,
    children: children,
    className: (0, _states2.default)(jPlayers[id], ownProps.states, className)
  };
};

var handlers = {
  onMouseMoveCapture: function onMouseMoveCapture(props) {
    return function () {
      if (props.fullScreen) {
        if (props.paused || props.startGuiFadeOut) {
          props.setOption(props.id, 'startGuiFadeOut', false);
        } else {
          props.setOption(props.id, 'startGuiFadeOut', true);
        }
      }
    };
  }
};

var lifecycle = {
  componentDidMount: function componentDidMount() {
    if (Object.keys(this.props.media.sources).length > 0) {
      this.props.setMedia(this.props.id, this.props.media);
    }

    this.props.setOption(this.props.id, 'volumeSupported', (0, _reactJplayerUtils.canSetVolume)());
  }
};

exports.default = (0, _recompose.compose)((0, _recompose.withContext)({ id: _propTypes2.default.string }, function (_ref2) {
  var id = _ref2.id;
  return { id: id };
}), (0, _reactJplayerUtils.connectWithId)(mapStateToProps, {
  setMedia: _actions.setMedia,
  setOption: _actions.setOption
}), (0, _recompose.withHandlers)(handlers), (0, _recompose.lifecycle)(lifecycle))(_jPlayer2.default);

/***/ }),
/* 87 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _classnames = __webpack_require__(17);

var _classnames2 = _interopRequireDefault(_classnames);

var _constants = __webpack_require__(4);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

exports.default = function (jPlayer, additionalStates) {
  for (var _len = arguments.length, additionalClasses = Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
    additionalClasses[_key - 2] = arguments[_key];
  }

  var _extends2;

  return _classnames2.default.apply(undefined, [_constants.classes.JPLAYER].concat(additionalClasses, [_extends((_extends2 = {}, _defineProperty(_extends2, _constants.classes.states.AUDIO, !jPlayer.mediaSettings.video), _defineProperty(_extends2, _constants.classes.states.VIDEO, jPlayer.mediaSettings.video), _defineProperty(_extends2, _constants.classes.states.PLAYING, !jPlayer.paused), _defineProperty(_extends2, _constants.classes.states.IDLE, jPlayer.currentTime === 0), _defineProperty(_extends2, _constants.classes.states.FULL_SCREEN, jPlayer.fullScreen), _defineProperty(_extends2, _constants.classes.states.MUTED, jPlayer.muted), _defineProperty(_extends2, _constants.classes.states.VOLUME_LOW, !jPlayer.muted && jPlayer.volume < 0.5), _defineProperty(_extends2, _constants.classes.states.VOLUME_HIGH, !jPlayer.muted && jPlayer.volume >= 0.5), _defineProperty(_extends2, _constants.classes.states.SEEKING, jPlayer.seeking), _defineProperty(_extends2, _constants.classes.states.LOOPED, jPlayer.loop), _defineProperty(_extends2, _constants.classes.states.NO_BROWSER_SUPPORT, jPlayer.mediaSettings.nonSupported), _defineProperty(_extends2, _constants.classes.states.NO_VOLUME_SUPPORT, !jPlayer.volumeSupported), _extends2), additionalStates)]));
};

/***/ }),
/* 88 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _reactJplayerUtils = __webpack_require__(1);

var _recompose = __webpack_require__(3);

var _lodash = __webpack_require__(9);

var _lodash2 = _interopRequireDefault(_lodash);

var _actions = __webpack_require__(5);

var _constants = __webpack_require__(4);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var mapStateToProps = function mapStateToProps(_ref, _ref2) {
  var jPlayers = _ref.jPlayers;
  var id = _ref2.id;
  return {
    paused: jPlayers[id].paused,
    fullScreen: jPlayers[id].fullScreen,
    muted: jPlayers[id].muted,
    volume: jPlayers[id].volume,
    keyEnabled: jPlayers[id].keyEnabled,
    focused: jPlayers[id].focused,
    id: id
  };
};

var mergeProps = function mergeProps(stateProps, _ref3, _ref4) {
  var dispatch = _ref3.dispatch;
  var keyBindings = _ref4.keyBindings,
      id = _ref4.id;
  return {
    keyBindings: (0, _lodash2.default)({}, {
      play: {
        key: 80, // p
        fn: function fn() {
          return stateProps.paused ? dispatch((0, _actions.play)(id)) : dispatch((0, _actions.pause)(id));
        }
      },
      fullScreen: {
        key: 70, // f
        fn: function fn() {
          return dispatch((0, _actions.setOption)(id, 'fullScreen', !stateProps.fullScreen));
        }
      },
      mute: {
        key: 77, // m
        fn: function fn() {
          return dispatch((0, _actions.setMute)(id, !stateProps.muted));
        }
      },
      volumeUp: {
        key: 190, // .
        fn: function fn() {
          dispatch((0, _actions.setVolume)(id, stateProps.volume + 0.1));
        }
      },
      volumeDown: {
        key: 188, // ,
        fn: function fn() {
          return dispatch((0, _actions.setVolume)(id, stateProps.volume - 0.1));
        }
      },
      loop: {
        key: 76, // l
        fn: function fn() {
          return dispatch((0, _actions.setOption)(id, 'loop', !stateProps.loop));
        }
      }
    }, keyBindings),
    focused: stateProps.focused,
    keyEnabled: stateProps.keyEnabled
  };
};

var handlers = {
  onKeyDown: function onKeyDown(props) {
    return function (event) {
      if (_constants.keyIgnoredElementNames.some(function (name) {
        return name.toUpperCase() === event.target.nodeName.toUpperCase();
      }) || !props.focused || !props.keyEnabled) {
        return;
      }

      Object.keys(props.keyBindings).forEach(function (key) {
        var keyBinding = props.keyBindings[key];

        if (keyBinding.key === event.keyCode || keyBinding.key === event.key) {
          event.preventDefault();
          keyBinding.fn();
        }
      });
    };
  }
};

var lifecycle = {
  componentDidMount: function componentDidMount() {
    document.addEventListener('keydown', this.props.onKeyDown);
  },
  componentWillUnmount: function componentWillUnmount() {
    document.removeEventListener('keydown', this.props.onKeyDown);
  }
};

exports.default = (0, _recompose.compose)((0, _reactJplayerUtils.connectWithId)(mapStateToProps, null, mergeProps), (0, _recompose.withHandlers)(handlers), (0, _recompose.lifecycle)(lifecycle))((0, _recompose.renderNothing)(null));

/***/ }),
/* 89 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _screenfull = __webpack_require__(90);

var _screenfull2 = _interopRequireDefault(_screenfull);

var _reactJplayerUtils = __webpack_require__(1);

var _recompose = __webpack_require__(3);

var _actions = __webpack_require__(5);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var mapStateToProps = function mapStateToProps(_ref, _ref2) {
  var jPlayers = _ref.jPlayers;
  var id = _ref2.id;
  return {
    fullScreen: jPlayers[id].fullScreen
  };
};

var handlers = {
  closeFullScreenListener: function closeFullScreenListener(props) {
    return function () {
      if (!_screenfull2.default.isFullscreen && props.fullScreen) {
        props.setOption(props.id, 'fullScreen', false);
      }
    };
  }
};

var lifecycleFunctions = {
  requestFullScreen: function requestFullScreen() {
    if (this.props.fullScreen) {
      if (_screenfull2.default.enabled) {
        _screenfull2.default.request(this.props.jPlayer);
      }
      // Legacy browsers don't implement full screen api
      // Safari 5.1 doesn't hide the other elements even with fullscreen api
      document.body.style.visibility = 'hidden';
    }
  },
  exitFullScreen: function exitFullScreen() {
    if (!this.props.fullScreen) {
      if (_screenfull2.default.enabled) {
        _screenfull2.default.exit();
      }
      document.body.style.visibility = 'visible';
    }
  },
  componentDidMount: function componentDidMount() {
    if (_screenfull2.default.enabled) {
      document.addEventListener(_screenfull2.default.raw.fullscreenchange, this.props.closeFullScreenListener);
    }
    this.requestFullScreen();
  },
  componentDidUpdate: function componentDidUpdate(prevProps) {
    this.requestFullScreen();
    if (prevProps.fullScreen !== this.props.fullScreen) {
      this.exitFullScreen();
    }
  },
  componentWillUnmount: function componentWillUnmount() {
    if (_screenfull2.default.enabled) {
      document.removeEventListener(_screenfull2.default.raw.fullscreenchange, this.props.closeFullScreenListener);
    }
  }
};

exports.default = (0, _recompose.compose)((0, _reactJplayerUtils.connectWithId)(mapStateToProps, {
  setOption: _actions.setOption
}), (0, _recompose.withHandlers)(handlers), (0, _recompose.lifecycle)(lifecycleFunctions))((0, _recompose.renderNothing)(null));

/***/ }),
/* 90 */
/***/ (function(module, exports) {

/*!
* screenfull
* v3.3.1 - 2017-07-07
* (c) Sindre Sorhus; MIT License
*/
(function () {
	'use strict';

	var document = typeof window !== 'undefined' && typeof window.document !== 'undefined' ? window.document : {};
	var isCommonjs = typeof module !== 'undefined' && module.exports;
	var keyboardAllowed = typeof Element !== 'undefined' && 'ALLOW_KEYBOARD_INPUT' in Element;

	var fn = (function () {
		var val;

		var fnMap = [
			[
				'requestFullscreen',
				'exitFullscreen',
				'fullscreenElement',
				'fullscreenEnabled',
				'fullscreenchange',
				'fullscreenerror'
			],
			// New WebKit
			[
				'webkitRequestFullscreen',
				'webkitExitFullscreen',
				'webkitFullscreenElement',
				'webkitFullscreenEnabled',
				'webkitfullscreenchange',
				'webkitfullscreenerror'

			],
			// Old WebKit (Safari 5.1)
			[
				'webkitRequestFullScreen',
				'webkitCancelFullScreen',
				'webkitCurrentFullScreenElement',
				'webkitCancelFullScreen',
				'webkitfullscreenchange',
				'webkitfullscreenerror'

			],
			[
				'mozRequestFullScreen',
				'mozCancelFullScreen',
				'mozFullScreenElement',
				'mozFullScreenEnabled',
				'mozfullscreenchange',
				'mozfullscreenerror'
			],
			[
				'msRequestFullscreen',
				'msExitFullscreen',
				'msFullscreenElement',
				'msFullscreenEnabled',
				'MSFullscreenChange',
				'MSFullscreenError'
			]
		];

		var i = 0;
		var l = fnMap.length;
		var ret = {};

		for (; i < l; i++) {
			val = fnMap[i];
			if (val && val[1] in document) {
				for (i = 0; i < val.length; i++) {
					ret[fnMap[0][i]] = val[i];
				}
				return ret;
			}
		}

		return false;
	})();

	var eventNameMap = {
		change: fn.fullscreenchange,
		error: fn.fullscreenerror
	};

	var screenfull = {
		request: function (elem) {
			var request = fn.requestFullscreen;

			elem = elem || document.documentElement;

			// Work around Safari 5.1 bug: reports support for
			// keyboard in fullscreen even though it doesn't.
			// Browser sniffing, since the alternative with
			// setTimeout is even worse.
			if (/5\.1[.\d]* Safari/.test(navigator.userAgent)) {
				elem[request]();
			} else {
				elem[request](keyboardAllowed && Element.ALLOW_KEYBOARD_INPUT);
			}
		},
		exit: function () {
			document[fn.exitFullscreen]();
		},
		toggle: function (elem) {
			if (this.isFullscreen) {
				this.exit();
			} else {
				this.request(elem);
			}
		},
		onchange: function (callback) {
			this.on('change', callback);
		},
		onerror: function (callback) {
			this.on('error', callback);
		},
		on: function (event, callback) {
			var eventName = eventNameMap[event];
			if (eventName) {
				document.addEventListener(eventName, callback, false);
			}
		},
		off: function (event, callback) {
			var eventName = eventNameMap[event];
			if (eventName) {
				document.removeEventListener(eventName, callback, false);
			}
		},
		raw: fn
	};

	if (!fn) {
		if (isCommonjs) {
			module.exports = false;
		} else {
			window.screenfull = false;
		}

		return;
	}

	Object.defineProperties(screenfull, {
		isFullscreen: {
			get: function () {
				return Boolean(document[fn.fullscreenElement]);
			}
		},
		element: {
			enumerable: true,
			get: function () {
				return document[fn.fullscreenElement];
			}
		},
		enabled: {
			enumerable: true,
			get: function () {
				// Coerce to boolean in case of old WebKit
				return Boolean(document[fn.fullscreenEnabled]);
			}
		}
	});

	if (isCommonjs) {
		module.exports = screenfull;
	} else {
		window.screenfull = screenfull;
	}
})();


/***/ }),
/* 91 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _reactJplayerUtils = __webpack_require__(1);

var _recompose = __webpack_require__(3);

/* eslint-disable no-console */
var mapStateToProps = function mapStateToProps(_ref, _ref2) {
  var jPlayers = _ref.jPlayers;
  var id = _ref2.id;
  return {
    error: jPlayers[id].error
  };
};

var lifecycleFunctions = {
  logError: function logError() {
    console.error(this.props.error);
  },
  componentDidUpdate: function componentDidUpdate(prevProps) {
    if (prevProps.error !== this.props.error) {
      this.logError();
    }
  }
};

exports.default = (0, _recompose.compose)((0, _reactJplayerUtils.connectWithId)(mapStateToProps), (0, _recompose.lifecycle)(lifecycleFunctions))((0, _recompose.renderNothing)(null));

/***/ }),
/* 92 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _reactJplayerUtils = __webpack_require__(1);

var _recompose = __webpack_require__(3);

var _actions = __webpack_require__(5);

var mapStateToProps = function mapStateToProps(_ref, _ref2) {
  var jPlayers = _ref.jPlayers;
  var id = _ref2.id;
  return {
    timeFormats: jPlayers[id].timeFormats,
    currentTime: jPlayers[id].currentTime,
    duration: jPlayers[id].duration,
    showRemainingDuration: jPlayers[id].showRemainingDuration
  };
};

var handlers = {
  setDurationText: function setDurationText(props) {
    return function () {
      var durationText = '';

      if (props.showRemainingDuration) {
        var timeRemaining = props.duration - props.currentTime;

        durationText = (timeRemaining > 0 ? '-' : '') + (0, _reactJplayerUtils.convertTime)(timeRemaining, props.timeFormats);
      } else {
        durationText = (0, _reactJplayerUtils.convertTime)(props.duration, props.timeFormats);
      }

      props.setOption(props.id, 'durationText', durationText);
    };
  },
  setCurrentTimeText: function setCurrentTimeText(props) {
    return function () {
      var currentTimeText = (0, _reactJplayerUtils.convertTime)(props.currentTime, props.timeFormats);

      props.setOption(props.id, 'currentTimeText', currentTimeText);
    };
  }
};

var lifecycle = {
  componentDidUpdate: function componentDidUpdate(prevProps) {
    if (prevProps.timeFormats !== this.props.timeFormats || prevProps.currentTime !== this.props.currentTime) {
      this.props.setCurrentTimeText();
    }

    if (prevProps.timeFormats !== this.props.timeFormats || prevProps.currentTime !== this.props.currentTime || prevProps.duration !== this.props.duration || prevProps.showRemainingDuration !== this.props.showRemainingDuration) {
      this.props.setDurationText();
    }
  }
};

exports.default = (0, _recompose.compose)((0, _reactJplayerUtils.connectWithId)(mapStateToProps, {
  setOption: _actions.setOption
}), (0, _recompose.withHandlers)(handlers), (0, _recompose.lifecycle)(lifecycle))((0, _recompose.renderNothing)(null));

/***/ }),
/* 93 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _reactJplayerUtils = __webpack_require__(1);

var _animation = __webpack_require__(94);

var _animation2 = _interopRequireDefault(_animation);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var mapStateToProps = function mapStateToProps(_ref, _ref2) {
  var jPlayers = _ref.jPlayers;
  var id = _ref2.id;
  return {
    smoothPlayBar: jPlayers[id].smoothPlayBar,
    currentPercentAbsolute: jPlayers[id].currentPercentAbsolute,
    currentPercentRelative: jPlayers[id].currentPercentRelative
  };
};

exports.default = (0, _reactJplayerUtils.connectWithId)(mapStateToProps)(_animation2.default);

/***/ }),
/* 94 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(2);

var _react2 = _interopRequireDefault(_react);

var _reactMotion = __webpack_require__(21);

var _propTypes = __webpack_require__(0);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _playBar = __webpack_require__(28);

var _playBar2 = _interopRequireDefault(_playBar);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Animation = function Animation(props) {
  return _react2.default.createElement(
    _reactMotion.Motion,
    { style: { smoothWidth: (0, _reactMotion.spring)(props.currentPercentAbsolute, [250]) } },
    function (values) {
      return _react2.default.createElement(_playBar2.default, {
        smoothWidth: values.smoothWidth,
        smoothPlayBar: props.smoothPlayBar,
        currentPercentRelative: props.currentPercentRelative
      });
    }
  );
};

Animation.propTypes = {
  currentPercentRelative: _propTypes2.default.number.isRequired,
  currentPercentAbsolute: _propTypes2.default.number.isRequired,
  smoothPlayBar: _propTypes2.default.bool.isRequired
};

exports.default = Animation;

/***/ }),
/* 95 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _recompose = __webpack_require__(3);

var _reactJplayerUtils = __webpack_require__(1);

var _bufferBar = __webpack_require__(29);

var _bufferBar2 = _interopRequireDefault(_bufferBar);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var mapStateToProps = function mapStateToProps(_ref, _ref2) {
  var jPlayers = _ref.jPlayers;
  var id = _ref2.id;
  return {
    bufferedTimeRanges: jPlayers[id].bufferedTimeRanges,
    duration: jPlayers[id].duration,
    bufferColour: jPlayers[id].bufferColour
  };
};

var handlers = function handlers() {
  var canvas = void 0;

  return {
    setCanvas: function setCanvas() {
      return function (ref) {
        canvas = ref;
      };
    },
    clearBuffer: function clearBuffer() {
      return function () {
        canvas.getContext('2d').clearRect(0, 0, canvas.width, canvas.height);
      };
    },
    fillBufferPartially: function fillBufferPartially(props) {
      return function () {
        var modifier = canvas.width / props.duration;
        var context = canvas.getContext('2d');

        props.bufferedTimeRanges.forEach(function (bufferedTimeRange) {
          var startX = bufferedTimeRange.start * modifier;
          var endX = bufferedTimeRange.end * modifier;
          var width = endX - startX;

          context.fillStyle = props.bufferColour;
          context.fillRect(startX, 0, width, canvas.height);
        });
      };
    }
  };
};

var lifecycle = {
  componentDidUpdate: function componentDidUpdate(prevProps) {
    if (prevProps.bufferedTimeRanges !== this.props.bufferedTimeRanges) {
      if (this.props.bufferedTimeRanges.length === 0) {
        this.props.clearBuffer();
      }
      this.props.fillBufferPartially();
    }
  }
};

exports.default = (0, _recompose.compose)((0, _reactJplayerUtils.connectWithId)(mapStateToProps), (0, _recompose.withHandlers)(handlers), (0, _recompose.lifecycle)(lifecycle))(_bufferBar2.default);

/***/ }),
/* 96 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _reactJplayerUtils = __webpack_require__(1);

var _poster = __webpack_require__(30);

var _poster2 = _interopRequireDefault(_poster);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var mapStateToProps = function mapStateToProps(_ref, _ref2) {
  var jPlayers = _ref.jPlayers;
  var id = _ref2.id;
  return {
    src: jPlayers[id].media.poster
  };
};

exports.default = (0, _reactJplayerUtils.connectWithId)(mapStateToProps)(_poster2.default);

/***/ }),
/* 97 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _reactJplayerUtils = __webpack_require__(1);

var _title = __webpack_require__(31);

var _title2 = _interopRequireDefault(_title);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var mapStateToProps = function mapStateToProps(_ref, _ref2) {
  var jPlayers = _ref.jPlayers;
  var id = _ref2.id;
  return {
    title: (0, _reactJplayerUtils.formatArtistAndTitle)(jPlayers[id].media.artist, jPlayers[id].media.title)
  };
};

exports.default = (0, _reactJplayerUtils.connectWithId)(mapStateToProps)(_title2.default);

/***/ }),
/* 98 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _reactJplayerUtils = __webpack_require__(1);

var _actions = __webpack_require__(5);

var _fullScreen = __webpack_require__(32);

var _fullScreen2 = _interopRequireDefault(_fullScreen);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var mapStateToProps = function mapStateToProps(_ref, _ref2) {
  var jPlayers = _ref.jPlayers;
  var id = _ref2.id;
  return {
    fullScreen: jPlayers[id].fullScreen
  };
};

var mapDispatchToProps = {
  setFullScreen: function setFullScreen(id, fullScreen) {
    return (0, _actions.setOption)(id, 'fullScreen', fullScreen);
  }
};

exports.default = (0, _reactJplayerUtils.connectWithId)(mapStateToProps, mapDispatchToProps)(_fullScreen2.default);

/***/ }),
/* 99 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _reactJplayerUtils = __webpack_require__(1);

var _actions = __webpack_require__(5);

var _mute = __webpack_require__(33);

var _mute2 = _interopRequireDefault(_mute);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var mapStateToProps = function mapStateToProps(_ref, _ref2) {
  var jPlayers = _ref.jPlayers;
  var id = _ref2.id;
  return {
    muted: jPlayers[id].muted
  };
};

var mapDispatchToProps = {
  setMute: _actions.setMute
};

exports.default = (0, _reactJplayerUtils.connectWithId)(mapStateToProps, mapDispatchToProps)(_mute2.default);

/***/ }),
/* 100 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _reactJplayerUtils = __webpack_require__(1);

var _actions = __webpack_require__(5);

var _play2 = __webpack_require__(34);

var _play3 = _interopRequireDefault(_play2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var mapStateToProps = function mapStateToProps(_ref, _ref2) {
  var jPlayers = _ref.jPlayers;
  var id = _ref2.id;
  return {
    paused: jPlayers[id].paused
  };
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    play: function play(id, paused) {
      if (paused) {
        dispatch((0, _actions.play)(id));
      } else {
        dispatch((0, _actions.pause)(id));
      }
    }
  };
};

exports.default = (0, _reactJplayerUtils.connectWithId)(mapStateToProps, mapDispatchToProps)(_play3.default);

/***/ }),
/* 101 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _reactJplayerUtils = __webpack_require__(1);

var _recompose = __webpack_require__(3);

var _actions = __webpack_require__(5);

var _repeat = __webpack_require__(35);

var _repeat2 = _interopRequireDefault(_repeat);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var mapStateToProps = function mapStateToProps(_ref, _ref2) {
  var jPlayers = _ref.jPlayers;
  var id = _ref2.id;
  return {
    loop: jPlayers[id].loop
  };
};

var handlers = {
  loop: function loop(props) {
    return function () {
      return props.setOption(props.id, 'loop', !props.loop);
    };
  }
};

exports.default = (0, _recompose.compose)((0, _reactJplayerUtils.connectWithId)(mapStateToProps, {
  setOption: _actions.setOption
}), (0, _recompose.withHandlers)(handlers))(_repeat2.default);

/***/ }),
/* 102 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _recompose = __webpack_require__(3);

var _reactJplayerUtils = __webpack_require__(1);

var _actions = __webpack_require__(5);

var _seekBar = __webpack_require__(36);

var _seekBar2 = _interopRequireDefault(_seekBar);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var mapStateToProps = function mapStateToProps(_ref, _ref2) {
  var jPlayers = _ref.jPlayers;
  var id = _ref2.id;
  return {
    seekPercent: jPlayers[id].seekPercent
  };
};

var handlers = {
  movePlayHead: function movePlayHead(props) {
    return function (bar, e) {
      var offset = (0, _reactJplayerUtils.getElementOffset)(bar);
      var x = e.pageX - offset.left;
      var w = bar.getBoundingClientRect().width;
      var percentage = 100 * (x / w);

      props.setPlayHead(props.id, percentage);
    };
  }
};

var secondHandlers = {
  clickMoveBar: function clickMoveBar(props) {
    return function (bar, e) {
      return props.movePlayHead(bar, e);
    };
  },
  touchMoveBar: function touchMoveBar(props) {
    return function (bar, e) {
      // Stop page scrolling
      e.preventDefault();

      props.movePlayHead(bar, e.touches[0]);
    };
  }
};

exports.default = (0, _recompose.compose)((0, _reactJplayerUtils.connectWithId)(mapStateToProps, {
  setPlayHead: _actions.setPlayHead
}), (0, _recompose.withHandlers)(handlers), (0, _recompose.withHandlers)(secondHandlers))(_seekBar2.default);

/***/ }),
/* 103 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(2);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(0);

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Bar = function Bar(props) {
  return _react2.default.cloneElement(_react2.default.Children.only(props.children), {
    onClick: props.onClick,
    onMouseDown: props.onMouseDown,
    onTouchStart: props.onTouchStart,
    ref: props.setBar
  });
};

Bar.propTypes = {
  children: _propTypes2.default.element.isRequired,
  onClick: _propTypes2.default.func.isRequired,
  onMouseDown: _propTypes2.default.func.isRequired,
  onTouchStart: _propTypes2.default.func.isRequired,
  setBar: _propTypes2.default.func.isRequired
};

exports.default = Bar;

/***/ }),
/* 104 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _reactJplayerUtils = __webpack_require__(1);

var _recompose = __webpack_require__(3);

var _actions = __webpack_require__(5);

var _playbackRateBar = __webpack_require__(37);

var _playbackRateBar2 = _interopRequireDefault(_playbackRateBar);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var mapStateToProps = function mapStateToProps(_ref, _ref2) {
  var jPlayers = _ref.jPlayers;
  var id = _ref2.id;
  return {
    verticalPlaybackRate: jPlayers[id].verticalPlaybackRate,
    minPlaybackRate: jPlayers[id].minPlaybackRate,
    maxPlaybackRate: jPlayers[id].maxPlaybackRate
  };
};

var handlers = {
  movePlaybackRate: function movePlaybackRate(props) {
    return function (bar, e) {
      var offset = (0, _reactJplayerUtils.getElementOffset)(bar);
      var w = bar.getBoundingClientRect().width;
      var h = bar.getBoundingClientRect().height;
      var x = e.pageX - offset.left;
      var y = h - e.pageY + offset.top;
      var ratio = void 0;

      if (props.verticalPlaybackRate) {
        ratio = y / h;
      } else {
        ratio = x / w;
      }

      var playbackRate = ratio * (props.maxPlaybackRate - props.minPlaybackRate) + props.minPlaybackRate;

      props.setOption(props.id, 'playbackRate', playbackRate);
    };
  }
};

var secondHandlers = {
  clickMoveBar: function clickMoveBar(props) {
    return function (bar, e) {
      return props.movePlaybackRate(bar, e);
    };
  },
  touchMoveBar: function touchMoveBar(props) {
    return function (bar, e) {
      // Stop page scrolling
      e.preventDefault();

      props.movePlaybackRate(bar, e.touches[0]);
    };
  }
};

exports.default = (0, _recompose.compose)((0, _reactJplayerUtils.connectWithId)(mapStateToProps, {
  setOption: _actions.setOption
}), (0, _recompose.withHandlers)(handlers), (0, _recompose.withHandlers)(secondHandlers))(_playbackRateBar2.default);

/***/ }),
/* 105 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _reactJplayerUtils = __webpack_require__(1);

var _recompose = __webpack_require__(3);

var _actions = __webpack_require__(5);

var _volumeBar = __webpack_require__(40);

var _volumeBar2 = _interopRequireDefault(_volumeBar);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var mapStateToProps = function mapStateToProps(_ref, _ref2) {
  var jPlayers = _ref.jPlayers;
  var id = _ref2.id;
  return {
    verticalVolume: jPlayers[id].verticalVolume
  };
};

var handlers = {
  moveVolumeBar: function moveVolumeBar(props) {
    return function (bar, e) {
      var offset = (0, _reactJplayerUtils.getElementOffset)(bar);
      var w = bar.getBoundingClientRect().width;
      var h = bar.getBoundingClientRect().height;
      var y = h - e.pageY + offset.top;
      var x = e.pageX - offset.left;

      if (props.verticalVolume) {
        props.setVolume(props.id, y / h);
      } else {
        props.setVolume(props.id, x / w);
      }
    };
  }
};

var secondHandlers = {
  clickMoveBar: function clickMoveBar(props) {
    return function (bar, e) {
      return props.moveVolumeBar(bar, e);
    };
  },
  touchMoveBar: function touchMoveBar(props) {
    return function (bar, e) {
      // Stop page scrolling
      e.preventDefault();

      props.moveVolumeBar(bar, e.touches[0]);
    };
  }
};

exports.default = (0, _recompose.compose)((0, _reactJplayerUtils.connectWithId)(mapStateToProps, {
  setVolume: _actions.setVolume
}), (0, _recompose.withHandlers)(handlers), (0, _recompose.withHandlers)(secondHandlers))(_volumeBar2.default);

/***/ }),
/* 106 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _reactJplayerUtils = __webpack_require__(1);

var _download = __webpack_require__(43);

var _download2 = _interopRequireDefault(_download);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var mapStateToProps = function mapStateToProps(_ref, _ref2) {
  var jPlayers = _ref.jPlayers;
  var id = _ref2.id;
  return {
    free: jPlayers[id].media.free,
    url: jPlayers[id].src
  };
};

exports.default = (0, _reactJplayerUtils.connectWithId)(mapStateToProps)(_download2.default);

/***/ }),
/* 107 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _reactJplayerUtils = __webpack_require__(1);

var _duration = __webpack_require__(44);

var _duration2 = _interopRequireDefault(_duration);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var mapStateToProps = function mapStateToProps(_ref, _ref2) {
  var jPlayers = _ref.jPlayers;
  var id = _ref2.id;
  return {
    durationText: jPlayers[id].durationText
  };
};

exports.default = (0, _reactJplayerUtils.connectWithId)(mapStateToProps)(_duration2.default);

/***/ }),
/* 108 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _reactJplayerUtils = __webpack_require__(1);

var _currentTime = __webpack_require__(45);

var _currentTime2 = _interopRequireDefault(_currentTime);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var mapStateToProps = function mapStateToProps(_ref, _ref2) {
  var jPlayers = _ref.jPlayers;
  var id = _ref2.id;
  return {
    currentTimeText: jPlayers[id].currentTimeText
  };
};

exports.default = (0, _reactJplayerUtils.connectWithId)(mapStateToProps)(_currentTime2.default);

/***/ }),
/* 109 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _reactJplayerUtils = __webpack_require__(1);

var _browserUnsupported = __webpack_require__(46);

var _browserUnsupported2 = _interopRequireDefault(_browserUnsupported);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var mapStateToProps = function mapStateToProps(_ref, _ref2) {
  var jPlayers = _ref.jPlayers;
  var id = _ref2.id;
  return {
    nonSupported: jPlayers[id].mediaSettings.nonSupported
  };
};

exports.default = (0, _reactJplayerUtils.connectWithId)(mapStateToProps)(_browserUnsupported2.default);

/***/ }),
/* 110 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _lodash = __webpack_require__(111);

var _lodash2 = _interopRequireDefault(_lodash);

var _initializeOptions = __webpack_require__(19);

var _constants = __webpack_require__(6);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var setOption = function setOption(_, _ref) {
  var key = _ref.key,
      value = _ref.value;
  return _defineProperty({}, key, value);
};

var setPlaylist = function setPlaylist(_, _ref3) {
  var playlist = _ref3.playlist;
  return {
    current: 0,
    shuffled: false,
    playlist: playlist.map(function (media, index) {
      return _extends({}, media, {
        shufflePosition: index
      });
    })
  };
};

var add = function add(jPlaylist, _ref4) {
  var media = _ref4.media,
      playNow = _ref4.playNow;

  var highestMediaShufflePosition = (0, _lodash2.default)(jPlaylist.playlist, 'shufflePosition');
  var newMedia = _extends({}, media, {
    shufflePosition: highestMediaShufflePosition !== undefined ? highestMediaShufflePosition.shufflePosition + 1 : 0
  });
  var playlist = [].concat(_toConsumableArray(jPlaylist.playlist), [newMedia]);
  var current = void 0;

  if (playNow) {
    current = playlist.length - 1;
  } else if (playlist.length === 1) {
    current = 0;
  }

  return {
    playlist: playlist,
    playNow: playNow,
    current: current
  };
};

var remove = function remove(jPlaylist, _ref5) {
  var index = _ref5.index;

  var playlist = [].concat(_toConsumableArray(jPlaylist.playlist));
  var current = jPlaylist.current;
  var shuffled = jPlaylist.shuffled;

  playlist.splice(index, 1);

  if (playlist.length) {
    if (index === jPlaylist.current) {
      // To cope when last element being selected when it was removed
      current = index < playlist.length ? jPlaylist.current : playlist.length - 1;
    } else if (index < jPlaylist.current) {
      current -= 1;
    }
  } else {
    shuffled = false;
  }

  return {
    playlist: playlist,
    current: current,
    shuffled: shuffled
  };
};

var clear = function clear() {
  return {
    playlist: []
  };
};

// Negative index relates to the end of the array
var select = function select(jPlaylist, _ref6) {
  var index = _ref6.index;
  return {
    current: index < 0 ? jPlaylist.original.length + index : index
  };
};

// Negative index relates to the end of the array
var play = function play(jPlaylist, _ref7) {
  var _ref7$index = _ref7.index,
      index = _ref7$index === undefined ? jPlaylist.current : _ref7$index;
  return {
    current: index < 0 ? jPlaylist.original.length + index : index,
    playNow: true
  };
};

var shuffle = function shuffle(jPlaylist, _ref8) {
  var _ref8$shuffled = _ref8.shuffled,
      shuffled = _ref8$shuffled === undefined ? !jPlaylist.shuffled : _ref8$shuffled,
      playNow = _ref8.playNow,
      shuffleSort = _ref8.shuffleSort;

  var playlist = void 0;

  if (shuffled) {
    playlist = [].concat(_toConsumableArray(jPlaylist.playlist)).sort(function () {
      return shuffleSort;
    });
  } else {
    playlist = [].concat(_toConsumableArray(jPlaylist.playlist)).sort(function (a, b) {
      return a.shufflePosition - b.shufflePosition;
    });
  }

  return {
    playlist: playlist,
    shuffled: shuffled,
    playNow: playNow
  };
};

var next = function next(jPlaylist) {
  var current = jPlaylist.loop === 'loop-playlist' ? 0 : jPlaylist.current;
  var isWithinPlaylist = jPlaylist.current + 1 < jPlaylist.playlist.length;
  var playNow = true;

  if (!isWithinPlaylist && jPlaylist.loop === 'off') {
    playNow = false;
  }

  return {
    current: isWithinPlaylist ? jPlaylist.current + 1 : current,
    playNow: playNow
  };
};

var previous = function previous(jPlaylist) {
  var current = jPlaylist.loopOnPrevious ? jPlaylist.playlist.length - 1 : jPlaylist.current;

  if (jPlaylist.current - 1 >= 0) {
    current = jPlaylist.current - 1;
  }

  return {
    current: current,
    playNow: true
  };
};

var updateJPlaylist = function updateJPlaylist(state, action, fn) {
  var value = fn(state[action.id], action);
  var jPlaylist = state[action.id];

  return _extends({}, state, _defineProperty({}, action.id, _extends({}, jPlaylist, value)));
};

var reducer = function reducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : _initializeOptions.initialState;
  var action = arguments[1];

  var updateValue = function updateValue(fn) {
    return updateJPlaylist(state, action, fn);
  };

  switch (action.type) {
    case _constants.actionNames.SET_OPTION:
      return updateValue(setOption);
    case _constants.actionNames.SET_PLAYLIST:
      return updateValue(setPlaylist);
    case _constants.actionNames.ADD:
      return updateValue(add);
    case _constants.actionNames.REMOVE:
      return updateValue(remove);
    case _constants.actionNames.CLEAR:
      return updateValue(clear);
    case _constants.actionNames.SELECT:
      return updateValue(select);
    case _constants.actionNames.PLAY:
      return updateValue(play);
    case _constants.actionNames.SHUFFLE:
      return updateValue(shuffle);
    case _constants.actionNames.NEXT:
      return updateValue(next);
    case _constants.actionNames.PREVIOUS:
      return updateValue(previous);
    default:
      return state;
  }
};

exports.default = reducer;

/***/ }),
/* 111 */
/***/ (function(module, exports) {

module.exports = _.maxBy;

/***/ }),
/* 112 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _propTypes = __webpack_require__(0);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactJplayer = __webpack_require__(8);

var _reactRedux = __webpack_require__(11);

var _recompose = __webpack_require__(3);

var _jPlaylist = __webpack_require__(47);

var _jPlaylist2 = _interopRequireDefault(_jPlaylist);

var _constants = __webpack_require__(6);

var _actions = __webpack_require__(7);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var mapStateToProps = function mapStateToProps(_ref, _ref2) {
  var _states;

  var jPlayers = _ref.jPlayers,
      jPlaylists = _ref.jPlaylists;
  var id = _ref2.id;
  return {
    playNow: jPlaylists[id].playNow,
    shuffled: jPlaylists[id].shuffled,
    loop: jPlaylists[id].loop,
    shuffleOnLoop: jPlaylists[id].shuffleOnLoop,
    focused: jPlayers[id].focused,
    playlist: jPlaylists[id].playlist,
    current: jPlaylists[id].current,
    id: id,
    states: (_states = {}, _defineProperty(_states, _constants.classes.states.LOOPED_PLAYLIST, jPlaylists[id].loop === 'loop-playlist'), _defineProperty(_states, _constants.classes.states.SHUFFLED, jPlaylists[id].shuffled), _states)
  };
};

var createProps = function createProps(_ref3) {
  var playlist = _ref3.playlist,
      current = _ref3.current;
  return {
    currentMediaId: playlist.length > 0 ? playlist[current].id : null
  };
};

var handlers = {
  setLoop: function setLoop(props) {
    return function () {
      if (props.loop === 'loop') {
        props.dispatch(_reactJplayer.actions.setOption(props.id, 'loop', true));
      } else {
        props.dispatch(_reactJplayer.actions.setOption(props.id, 'loop', false));
      }
    };
  },
  playNext: function playNext(props) {
    return function () {
      return props.dispatch((0, _actions.next)(props.id));
    };
  },
  playMediaNow: function playMediaNow(props) {
    return function () {
      props.dispatch(_reactJplayer.actions.play(props.id));
      props.dispatch((0, _actions.setOption)(props.id, 'playNow', false));
    };
  },
  changeMedia: function changeMedia(props) {
    return function () {
      if (props.playlist.length > 0) {
        props.dispatch(_reactJplayer.actions.setMedia(props.id, props.playlist[props.current]));
      }
    };
  },
  shufflePlaylistOnLoopPlaylist: function shufflePlaylistOnLoopPlaylist(props) {
    return function () {
      if (props.loop === 'loop-playlist' && props.current === 0 && props.shuffled && props.shuffleOnLoop) {
        props.dispatch((0, _actions.shuffle)(props.id, true, true));
      }
    };
  },
  clearMediaWhenPlaylistEmpty: function clearMediaWhenPlaylistEmpty(props) {
    return function () {
      if (props.playlist.length === 0) {
        props.dispatch(_reactJplayer.actions.clearMedia(props.id));
      }
    };
  }
};

var contextTypes = {
  id: _propTypes2.default.string,
  internalEvents: _propTypes2.default.shape({
    onEnded: _propTypes2.default.func
  })
};

var childContext = function childContext(_ref4) {
  var id = _ref4.id,
      playNext = _ref4.playNext;
  return {
    id: id,
    internalEvents: {
      onEnded: playNext
    }
  };
};

var lifecycle = {
  componentDidMount: function componentDidMount() {
    if (this.props.playlist.length > 0) {
      this.props.dispatch((0, _actions.setPlaylist)(this.props.id, this.props.playlist));
    }
  },
  componentDidUpdate: function componentDidUpdate(prevProps) {
    if (this.props.currentMediaId !== prevProps.currentMediaId) {
      this.props.changeMedia();
    }

    if (this.props.playlist.length !== prevProps.playlist.length) {
      this.props.clearMediaWhenPlaylistEmpty();
    }

    if (this.props.loop !== prevProps.loop) {
      this.props.setLoop();
    }

    if (this.props.playNow) {
      this.props.playMediaNow();
    }

    if (this.props.currentMediaId !== prevProps.currentMediaId && prevProps.current === prevProps.playlist.length - 1) {
      this.props.shufflePlaylistOnLoopPlaylist();
    }
  }
};

exports.default = (0, _recompose.compose)((0, _reactRedux.connect)(mapStateToProps), (0, _recompose.withProps)(createProps), (0, _recompose.withHandlers)(handlers), (0, _recompose.withContext)(contextTypes, childContext), (0, _recompose.lifecycle)(lifecycle))(_jPlaylist2.default);

/***/ }),
/* 113 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _reactJplayerUtils = __webpack_require__(1);

var _lodash = __webpack_require__(9);

var _lodash2 = _interopRequireDefault(_lodash);

var _keyControl = __webpack_require__(114);

var _keyControl2 = _interopRequireDefault(_keyControl);

var _actions = __webpack_require__(7);

var _getLoopState = __webpack_require__(48);

var _getLoopState2 = _interopRequireDefault(_getLoopState);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var mapStateToProps = function mapStateToProps(_ref, _ref2) {
  var jPlaylists = _ref.jPlaylists;
  var id = _ref2.id;
  return {
    loop: jPlaylists[id].loop
  };
};

var mergeProps = function mergeProps(stateProps, _ref3, _ref4) {
  var dispatch = _ref3.dispatch;
  var keyBindings = _ref4.keyBindings,
      children = _ref4.children,
      id = _ref4.id;
  return {
    keyBindings: (0, _lodash2.default)({
      next: {
        key: 221, // ]
        fn: function fn() {
          return dispatch((0, _actions.next)(id));
        }
      },
      previous: {
        key: 219, // [
        fn: function fn() {
          return dispatch((0, _actions.previous)(id));
        }
      },
      shuffle: {
        key: 83, // s
        fn: function fn() {
          return dispatch((0, _actions.shuffle)(id, undefined, true));
        }
      },
      loop: {
        key: 76, // l
        fn: function fn() {
          var loop = (0, _getLoopState2.default)(stateProps.loop);

          dispatch((0, _actions.setOption)(id, 'loop', loop));
        }
      }
    }, keyBindings),
    children: children
  };
};

exports.default = (0, _reactJplayerUtils.connectWithId)(mapStateToProps, null, mergeProps)(_keyControl2.default);

/***/ }),
/* 114 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(2);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(0);

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var KeyControl = function KeyControl(_ref) {
  var keyBindings = _ref.keyBindings,
      children = _ref.children;
  return _react2.default.cloneElement(_react2.default.Children.only(children), {
    keyBindings: keyBindings
  });
};

KeyControl.propTypes = {
  children: _propTypes2.default.element.isRequired,
  keyBindings: _propTypes2.default.object.isRequired
};

exports.default = KeyControl;

/***/ }),
/* 115 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _reactJplayerUtils = __webpack_require__(1);

var _classnames = __webpack_require__(17);

var _classnames2 = _interopRequireDefault(_classnames);

var _constants = __webpack_require__(6);

var _playlist = __webpack_require__(49);

var _playlist2 = _interopRequireDefault(_playlist);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var mapStateToProps = function mapStateToProps(_ref, _ref2) {
  var jPlaylists = _ref.jPlaylists;
  var id = _ref2.id,
      className = _ref2.className;
  return {
    playlist: jPlaylists[id].playlist,
    className: (0, _classnames2.default)(className, _constants.classes.PLAYLIST, _defineProperty({}, _reactJplayerUtils.classes.HIDDEN, jPlaylists[id].hidePlaylist))
  };
};

exports.default = (0, _reactJplayerUtils.connectWithId)(mapStateToProps)(_playlist2.default);

/***/ }),
/* 116 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _propTypes = __webpack_require__(0);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactJplayerUtils = __webpack_require__(1);

var _recompose = __webpack_require__(3);

var _classnames = __webpack_require__(17);

var _classnames2 = _interopRequireDefault(_classnames);

var _playlistItem = __webpack_require__(117);

var _playlistItem2 = _interopRequireDefault(_playlistItem);

var _constants = __webpack_require__(6);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var mapStateToProps = function mapStateToProps(_ref, _ref2) {
  var jPlaylists = _ref.jPlaylists;
  var id = _ref2.id,
      index = _ref2.index;
  return {
    className: (0, _classnames2.default)(_defineProperty({}, _constants.classes.CURRENT, jPlaylists[id].current === index))
  };
};

exports.default = (0, _recompose.compose)((0, _recompose.withContext)({ index: _propTypes2.default.number }, function (_ref3) {
  var index = _ref3.index;
  return { index: index };
}), (0, _reactJplayerUtils.connectWithId)(mapStateToProps))(_playlistItem2.default);

/***/ }),
/* 117 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(2);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(0);

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var PlaylistItem = function PlaylistItem(_ref) {
  var className = _ref.className,
      children = _ref.children;
  return _react2.default.createElement(
    'li',
    { className: className },
    children
  );
};

PlaylistItem.propTypes = {
  className: _propTypes2.default.string.isRequired,
  children: _propTypes2.default.node.isRequired
};

exports.default = PlaylistItem;

/***/ }),
/* 118 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _reactJplayerUtils = __webpack_require__(1);

var _recompose = __webpack_require__(3);

var _actions = __webpack_require__(7);

var _shuffle = __webpack_require__(50);

var _shuffle2 = _interopRequireDefault(_shuffle);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var handlers = {
  shuffle: function shuffle(props) {
    return function () {
      return props.shuffle(props.id, undefined, true);
    };
  }
};

exports.default = (0, _recompose.compose)((0, _reactJplayerUtils.connectWithId)(null, {
  shuffle: _actions.shuffle
}), (0, _recompose.withHandlers)(handlers))(_shuffle2.default);

/***/ }),
/* 119 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _reactJplayerUtils = __webpack_require__(1);

var _recompose = __webpack_require__(3);

var _actions = __webpack_require__(7);

var _previous = __webpack_require__(51);

var _previous2 = _interopRequireDefault(_previous);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var handlers = {
  previous: function previous(props) {
    return function () {
      return props.previous(props.id);
    };
  }
};

exports.default = (0, _recompose.compose)((0, _reactJplayerUtils.connectWithId)(null, {
  previous: _actions.previous
}), (0, _recompose.withHandlers)(handlers))(_previous2.default);

/***/ }),
/* 120 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _reactJplayerUtils = __webpack_require__(1);

var _recompose = __webpack_require__(3);

var _actions = __webpack_require__(7);

var _next = __webpack_require__(52);

var _next2 = _interopRequireDefault(_next);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var handlers = {
  next: function next(props) {
    return function () {
      return props.next(props.id);
    };
  }
};

exports.default = (0, _recompose.compose)((0, _reactJplayerUtils.connectWithId)(null, {
  next: _actions.next
}), (0, _recompose.withHandlers)(handlers))(_next2.default);

/***/ }),
/* 121 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _reactJplayer = __webpack_require__(8);

var _reactJplayerUtils = __webpack_require__(1);

var _recompose = __webpack_require__(3);

var _actions = __webpack_require__(7);

var _getLoopState = __webpack_require__(48);

var _getLoopState2 = _interopRequireDefault(_getLoopState);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var mapStateToProps = function mapStateToProps(_ref, _ref2) {
  var jPlaylists = _ref.jPlaylists;
  var id = _ref2.id;
  return {
    loop: jPlaylists[id].loop
  };
};

var handlers = {
  loop: function loop(props) {
    return function () {
      return props.setOption(props.id, 'loop', (0, _getLoopState2.default)(props.loop));
    };
  }
};

exports.default = (0, _recompose.compose)((0, _reactJplayerUtils.connectWithId)(mapStateToProps, {
  setOption: _actions.setOption
}), (0, _recompose.withHandlers)(handlers))(_reactJplayer.RepeatComponent);

/***/ }),
/* 122 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _reactJplayerUtils = __webpack_require__(1);

var _recompose = __webpack_require__(3);

var _togglePlaylist = __webpack_require__(53);

var _togglePlaylist2 = _interopRequireDefault(_togglePlaylist);

var _actions = __webpack_require__(7);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var mapStateToProps = function mapStateToProps(_ref, _ref2) {
  var jPlaylists = _ref.jPlaylists;
  var id = _ref2.id;
  return {
    hidePlaylist: jPlaylists[id].hidePlaylist
  };
};

var handlers = {
  togglePlaylist: function togglePlaylist(props) {
    return function () {
      return props.setOption(props.id, 'hidePlaylist', !props.hidePlaylist);
    };
  }
};

exports.default = (0, _recompose.compose)((0, _reactJplayerUtils.connectWithId)(mapStateToProps, {
  setOption: _actions.setOption
}), (0, _recompose.withHandlers)(handlers))(_togglePlaylist2.default);

/***/ }),
/* 123 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _reactJplayerUtils = __webpack_require__(1);

var _recompose = __webpack_require__(3);

var _actions = __webpack_require__(7);

var _remove = __webpack_require__(54);

var _remove2 = _interopRequireDefault(_remove);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var handlers = {
  remove: function remove(props) {
    return function () {
      return props.remove(props.id, props.index);
    };
  }
};

exports.default = (0, _recompose.compose)((0, _reactJplayerUtils.connectWithIndex)(null, {
  remove: _actions.remove
}), (0, _recompose.withHandlers)(handlers))(_remove2.default);

/***/ }),
/* 124 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _reactJplayerUtils = __webpack_require__(1);

var _recompose = __webpack_require__(3);

var _actions = __webpack_require__(7);

var _mediaLink = __webpack_require__(55);

var _mediaLink2 = _interopRequireDefault(_mediaLink);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var handlers = {
  play: function play(props) {
    return function () {
      props.play(props.id, props.index);
    };
  }
};

exports.default = (0, _recompose.compose)((0, _reactJplayerUtils.connectWithIndex)(null, {
  play: _actions.play
}), (0, _recompose.withHandlers)(handlers))(_mediaLink2.default);

/***/ }),
/* 125 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _reactJplayer = __webpack_require__(8);

var _reactJplayerUtils = __webpack_require__(1);

var mapStateToProps = function mapStateToProps(_ref, _ref2) {
  var jPlaylists = _ref.jPlaylists;
  var id = _ref2.id,
      index = _ref2.index;
  return {
    src: jPlaylists[id].playlist[index].poster
  };
};

exports.default = (0, _reactJplayerUtils.connectWithIndex)(mapStateToProps)(_reactJplayer.PosterComponent);

/***/ }),
/* 126 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _reactJplayer = __webpack_require__(8);

var _reactJplayerUtils = __webpack_require__(1);

var mapStateToProps = function mapStateToProps(_ref, _ref2) {
  var jPlaylists = _ref.jPlaylists;
  var id = _ref2.id,
      index = _ref2.index;
  return {
    title: (0, _reactJplayerUtils.formatArtistAndTitle)(jPlaylists[id].playlist[index].artist, jPlaylists[id].playlist[index].title)
  };
};

exports.default = (0, _reactJplayerUtils.connectWithIndex)(mapStateToProps)(_reactJplayer.TitleComponent);

/***/ })
/******/ ]);