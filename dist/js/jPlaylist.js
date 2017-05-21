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
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
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
/******/ 	return __webpack_require__(__webpack_require__.s = 129);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = PropTypes;

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = React;

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var actionNames = exports.actionNames = {
  SET_OPTION: 'SET_JPLAYER_OPTION',
  SET_MEDIA: 'SET_MEDIA',
  CLEAR_MEDIA: 'CLEAR_MEDIA',
  PLAY: 'PLAY',
  PAUSE: 'PAUSE',
  PLAY_HEAD: 'PLAY_HEAD',
  VOLUME: 'VOLUME',
  MUTE: 'MUTE',
  FOCUS: 'FOCUS'
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
  URL_NOT_SET: 'Pass the media through the defaultOptions or use the setMedia()' + 'action that is passed into the component props.',
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
    foundSupported: false,
    formats: []
  },
  paused: true,
  seeking: false,
  src: '',
  currentTimeText: '0:00',
  durationText: '',
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
  guiFadeHoldTime: 3000,
  media: {
    sources: {},
    title: '',
    artist: '',
    poster: '',
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
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.convertTime = exports.canSetVolume = exports.limitValue = exports.getElementOffset = exports.traverseParentsUntilClassName = exports.toRelativePercentage = exports.toPercentage = exports.KeyControl = exports.classes = exports.formatArtistAndTitle = exports.updateObject = exports.initialState = exports.passWithIndex = exports.connectWithIndex = exports.connectWithId = exports.connect = undefined;

var _connect = __webpack_require__(51);

var _connect2 = _interopRequireDefault(_connect);

var _connectWithId = __webpack_require__(19);

var _connectWithId2 = _interopRequireDefault(_connectWithId);

var _connectWithIndex = __webpack_require__(52);

var _connectWithIndex2 = _interopRequireDefault(_connectWithIndex);

var _passWithIndex = __webpack_require__(59);

var _passWithIndex2 = _interopRequireDefault(_passWithIndex);

var _initialState = __webpack_require__(56);

var _initialState2 = _interopRequireDefault(_initialState);

var _updateObject = __webpack_require__(63);

var _updateObject2 = _interopRequireDefault(_updateObject);

var _formatArtistAndTitle = __webpack_require__(54);

var _formatArtistAndTitle2 = _interopRequireDefault(_formatArtistAndTitle);

var _classes = __webpack_require__(49);

var _classes2 = _interopRequireDefault(_classes);

var _keyControl = __webpack_require__(50);

var _keyControl2 = _interopRequireDefault(_keyControl);

var _toPercentage = __webpack_require__(60);

var _toPercentage2 = _interopRequireDefault(_toPercentage);

var _toRelativePercentage = __webpack_require__(61);

var _toRelativePercentage2 = _interopRequireDefault(_toRelativePercentage);

var _traverseParentsUntilClassName = __webpack_require__(62);

var _traverseParentsUntilClassName2 = _interopRequireDefault(_traverseParentsUntilClassName);

var _getElementOffset = __webpack_require__(55);

var _getElementOffset2 = _interopRequireDefault(_getElementOffset);

var _limitValue = __webpack_require__(58);

var _limitValue2 = _interopRequireDefault(_limitValue);

var _canSetVolume = __webpack_require__(48);

var _canSetVolume2 = _interopRequireDefault(_canSetVolume);

var _convertTime = __webpack_require__(53);

var _convertTime2 = _interopRequireDefault(_convertTime);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.connect = _connect2.default;
exports.connectWithId = _connectWithId2.default;
exports.connectWithIndex = _connectWithIndex2.default;
exports.passWithIndex = _passWithIndex2.default;
exports.initialState = _initialState2.default;
exports.updateObject = _updateObject2.default;
exports.formatArtistAndTitle = _formatArtistAndTitle2.default;
exports.classes = _classes2.default;
exports.KeyControl = _keyControl2.default;
exports.toPercentage = _toPercentage2.default;
exports.toRelativePercentage = _toRelativePercentage2.default;
exports.traverseParentsUntilClassName = _traverseParentsUntilClassName2.default;
exports.getElementOffset = _getElementOffset2.default;
exports.limitValue = _limitValue2.default;
exports.canSetVolume = _canSetVolume2.default;
exports.convertTime = _convertTime2.default;

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.convertTime = exports.canSetVolume = exports.limitValue = exports.getElementOffset = exports.traverseParentsUntilClassName = exports.toRelativePercentage = exports.toPercentage = exports.KeyControl = exports.classes = exports.formatArtistAndTitle = exports.updateObject = exports.initialState = exports.passWithIndex = exports.connectWithIndex = exports.connectWithId = exports.connect = undefined;

var _connect = __webpack_require__(135);

var _connect2 = _interopRequireDefault(_connect);

var _connectWithId = __webpack_require__(31);

var _connectWithId2 = _interopRequireDefault(_connectWithId);

var _connectWithIndex = __webpack_require__(136);

var _connectWithIndex2 = _interopRequireDefault(_connectWithIndex);

var _passWithIndex = __webpack_require__(143);

var _passWithIndex2 = _interopRequireDefault(_passWithIndex);

var _initialState = __webpack_require__(140);

var _initialState2 = _interopRequireDefault(_initialState);

var _updateObject = __webpack_require__(147);

var _updateObject2 = _interopRequireDefault(_updateObject);

var _formatArtistAndTitle = __webpack_require__(138);

var _formatArtistAndTitle2 = _interopRequireDefault(_formatArtistAndTitle);

var _classes = __webpack_require__(133);

var _classes2 = _interopRequireDefault(_classes);

var _keyControl = __webpack_require__(134);

var _keyControl2 = _interopRequireDefault(_keyControl);

var _toPercentage = __webpack_require__(144);

var _toPercentage2 = _interopRequireDefault(_toPercentage);

var _toRelativePercentage = __webpack_require__(145);

var _toRelativePercentage2 = _interopRequireDefault(_toRelativePercentage);

var _traverseParentsUntilClassName = __webpack_require__(146);

var _traverseParentsUntilClassName2 = _interopRequireDefault(_traverseParentsUntilClassName);

var _getElementOffset = __webpack_require__(139);

var _getElementOffset2 = _interopRequireDefault(_getElementOffset);

var _limitValue = __webpack_require__(142);

var _limitValue2 = _interopRequireDefault(_limitValue);

var _canSetVolume = __webpack_require__(132);

var _canSetVolume2 = _interopRequireDefault(_canSetVolume);

var _convertTime = __webpack_require__(137);

var _convertTime2 = _interopRequireDefault(_convertTime);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.connect = _connect2.default;
exports.connectWithId = _connectWithId2.default;
exports.connectWithIndex = _connectWithIndex2.default;
exports.passWithIndex = _passWithIndex2.default;
exports.initialState = _initialState2.default;
exports.updateObject = _updateObject2.default;
exports.formatArtistAndTitle = _formatArtistAndTitle2.default;
exports.classes = _classes2.default;
exports.KeyControl = _keyControl2.default;
exports.toPercentage = _toPercentage2.default;
exports.toRelativePercentage = _toRelativePercentage2.default;
exports.traverseParentsUntilClassName = _traverseParentsUntilClassName2.default;
exports.getElementOffset = _getElementOffset2.default;
exports.limitValue = _limitValue2.default;
exports.canSetVolume = _canSetVolume2.default;
exports.convertTime = _convertTime2.default;

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.focus = exports.setMute = exports.setVolume = exports.setPlayHead = exports.pause = exports.play = exports.clearMedia = exports.setMedia = exports.setOption = undefined;

var _constants = __webpack_require__(2);

var setOption = exports.setOption = function setOption(id, key, value) {
  return {
    type: _constants.actionNames.SET_OPTION,
    id: id,
    key: key,
    value: value
  };
};
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

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var actionNames = exports.actionNames = {
  SET_PLAYLIST: 'SET_PLAYLIST',
  SET_OPTION: 'SET_PLAYLIST_OPTION',
  ADD: 'PLAYLIST_ADD',
  REMOVE: 'PLAYLIST_REMOVE',
  CLEAR: 'PLAYLIST_CLEAR',
  SELECT: 'PLAYLIST_SELECT',
  PLAY: 'PLAYLIST_PLAY',
  SHUFFLE: 'PLAYLIST_SHUFFLE',
  NEXT: 'PLAYLIST_NEXT',
  PREVIOUS: 'PLAYLIST_PREVIOUS'
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

var defaultOptions = exports.defaultOptions = {
  loopOnPrevious: true,
  shuffleOnLoop: true,
  loop: 'loop-playlist',
  hidePlaylist: false
};

var defaultStatus = exports.defaultStatus = {
  current: 0,
  shuffled: false
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
    playNow: playNow
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
/***/ (function(module, exports) {

module.exports = ReactRedux;

/***/ }),
/* 9 */
/***/ (function(module, exports) {

module.exports = Recompose;

/***/ }),
/* 10 */
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
/* 11 */
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
/* 12 */
/***/ (function(module, exports) {

module.exports = _.merge;

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(0);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactJplayerUtils = __webpack_require__(3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var mapStateToProps = function mapStateToProps(_ref, _ref2) {
  var jPlayers = _ref.jPlayers;
  var id = _ref2.id;
  return {
    barDrag: jPlayers[id].barDrag
  };
};

var Bar = function (_React$Component) {
  _inherits(Bar, _React$Component);

  function Bar() {
    var _ref3;

    var _temp, _this, _ret;

    _classCallCheck(this, Bar);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref3 = Bar.__proto__ || Object.getPrototypeOf(Bar)).call.apply(_ref3, [this].concat(args))), _this), _this.onClick = function (e) {
      return _this.props.clickMoveBar(_this.bar, e);
    }, _this.onTouchStart = function () {
      _this.dragging = true;
    }, _this.onTouchMove = function (e) {
      return _this.props.barDrag && _this.dragging ? _this.props.touchMoveBar(_this.bar, e) : null;
    }, _this.onTouchEnd = function () {
      _this.dragging = false;
    }, _this.onMouseMove = function (e) {
      return _this.props.barDrag && _this.dragging ? _this.props.clickMoveBar(_this.bar, e) : null;
    }, _this.onMouseDown = function () {
      _this.dragging = true;
    }, _this.onMouseUp = function () {
      _this.dragging = false;
    }, _this.setBar = function (ref) {
      return _this.bar = ref;
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Bar, [{
    key: 'componentWillMount',
    value: function componentWillMount() {
      document.addEventListener('mouseup', this.onMouseUp);
      document.addEventListener('mousemove', this.onMouseMove);
      document.addEventListener('touchmove', this.onTouchMove, { passive: false });
      document.addEventListener('touchend', this.onTouchEnd);
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      document.removeEventListener('mouseup', this.onMouseUp);
      document.removeEventListener('mousemove', this.onMouseMove);
      document.removeEventListener('touchmove', this.onTouchMove);
      document.removeEventListener('touchend', this.onTouchEnd);
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.cloneElement(_react2.default.Children.only(this.props.children), {
        onClick: this.onClick,
        onMouseDown: this.onMouseDown,
        onTouchStart: this.onTouchStart,
        setBar: this.setBar
      });
    }
  }], [{
    key: 'propTypes',
    get: function get() {
      return {
        clickMoveBar: _propTypes2.default.func.isRequired,
        touchMoveBar: _propTypes2.default.func.isRequired,
        barDrag: _propTypes2.default.bool.isRequired,
        children: _propTypes2.default.node.isRequired
      };
    }
  }]);

  return Bar;
}(_react2.default.Component);

exports.default = (0, _reactJplayerUtils.connectWithId)(mapStateToProps)(Bar);

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 */



var React = __webpack_require__(1);
var factory = __webpack_require__(107);

// Hack to grab NoopUpdateQueue from isomorphic React
var ReactNoopUpdateQueue = new React.Component().updater;

module.exports = factory(
  React.Component,
  React.isValidElement,
  ReactNoopUpdateQueue
);


/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

var now = __webpack_require__(10)
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
/* 17 */
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
/* 18 */
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
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _reactRedux = __webpack_require__(8);

var _recompose = __webpack_require__(9);

var _propTypes = __webpack_require__(0);

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function () {
  return (0, _recompose.compose)((0, _recompose.getContext)({ id: _propTypes2.default.string }), _reactRedux.connect.apply(undefined, arguments));
};

/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(0);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactJplayerUtils = __webpack_require__(3);

var _urlNotSupportedError = __webpack_require__(106);

var _urlNotSupportedError2 = _interopRequireDefault(_urlNotSupportedError);

var _actions = __webpack_require__(5);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var mapStateToProps = function mapStateToProps(_ref, _ref2) {
  var jPlayers = _ref.jPlayers;
  var id = _ref2.id,
      children = _ref2.children;
  return {
    loop: jPlayers[id].loop,
    showRemainingDuration: jPlayers[id].showRemainingDuration,
    src: jPlayers[id].src,
    currentTime: jPlayers[id].currentTime,
    playHeadPercent: jPlayers[id].playHeadPercent,
    paused: jPlayers[id].paused,
    defaultPlaybackRate: jPlayers[id].defaultPlaybackRate,
    playbackRate: jPlayers[id].playbackRate,
    preload: jPlayers[id].preload,
    volume: jPlayers[id].volume,
    muted: jPlayers[id].muted,
    autoplay: jPlayers[id].autoplay,
    newTime: jPlayers[id].newTime,
    timeFormats: jPlayers[id].timeFormats,
    mediaId: jPlayers[id].media.id,
    otherJPlayerIds: Object.keys(jPlayers).filter(function (key) {
      return key !== id;
    }),
    pauseOthersOnPlay: jPlayers[id].pauseOthersOnPlay,
    children: children
  };
};

var mapDispatchToProps = {
  setOption: _actions.setOption,
  pause: _actions.pause
};

var MediaContainer = function (_React$Component) {
  _inherits(MediaContainer, _React$Component);

  _createClass(MediaContainer, null, [{
    key: 'propTypes',
    get: function get() {
      return {
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
        onWaiting: _propTypes2.default.func,
        showRemainingDuration: _propTypes2.default.bool.isRequired,
        src: _propTypes2.default.string.isRequired,
        playHeadPercent: _propTypes2.default.number.isRequired,
        setOption: _propTypes2.default.func.isRequired,
        pause: _propTypes2.default.func.isRequired,
        id: _propTypes2.default.string.isRequired,
        mediaId: _propTypes2.default.string,
        pauseOthersOnPlay: _propTypes2.default.bool.isRequired,
        otherJPlayerIds: _propTypes2.default.arrayOf(_propTypes2.default.string).isRequired,
        timeFormats: _propTypes2.default.shape({
          showHour: _propTypes2.default.bool.isRequired,
          showMin: _propTypes2.default.bool.isRequired,
          showSec: _propTypes2.default.bool.isRequired,
          padHour: _propTypes2.default.bool.isRequired,
          padMin: _propTypes2.default.bool.isRequired,
          padSec: _propTypes2.default.bool.isRequired,
          sepHour: _propTypes2.default.string.isRequired,
          sepMin: _propTypes2.default.string.isRequired,
          sepSec: _propTypes2.default.string.isRequired
        }).isRequired,
        /* eslint-disable react/no-unused-prop-types */
        paused: _propTypes2.default.bool.isRequired,
        newTime: _propTypes2.default.number,
        loop: _propTypes2.default.bool.isRequired,
        autoplay: _propTypes2.default.bool.isRequired,
        defaultPlaybackRate: _propTypes2.default.number.isRequired,
        muted: _propTypes2.default.bool.isRequired,
        playbackRate: _propTypes2.default.number.isRequired,
        preload: _propTypes2.default.string.isRequired,
        volume: _propTypes2.default.number.isRequired,
        /* eslint-enable react/no-unused-prop-types */
        children: _propTypes2.default.oneOfType([_propTypes2.default.arrayOf(_propTypes2.default.element), _propTypes2.default.element]).isRequired
      };
    }
  }, {
    key: 'defaultProps',
    get: function get() {
      return {
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
        onWaiting: Function.prototype,
        newTime: null,
        mediaId: null
      };
    }
  }]);

  function MediaContainer(props) {
    _classCallCheck(this, MediaContainer);

    var _this = _possibleConstructorReturn(this, (MediaContainer.__proto__ || Object.getPrototypeOf(MediaContainer)).call(this, props));

    _this.getCurrentPercentRelative = function () {
      var currentPercentRelative = 0;

      if (_this.currentMedia.seekable.length > 0) {
        currentPercentRelative = (0, _reactJplayerUtils.toPercentage)(_this.currentMedia.currentTime, _this.getSeekableEnd());
      }
      return currentPercentRelative;
    };

    _this.setCurrentMedia = function (ref) {
      _this.currentMedia = ref;
    };

    _this.getSeekableEnd = function () {
      return _this.currentMedia.seekable.end(_this.currentMedia.seekable.length - 1);
    };

    _this.setDurationText = function () {
      var durationText = '';

      if (_this.props.showRemainingDuration) {
        var timeRemaining = _this.currentMedia.duration - _this.currentMedia.currentTime;

        durationText = (timeRemaining > 0 ? '-' : '') + (0, _reactJplayerUtils.convertTime)(timeRemaining, _this.props.timeFormats);
      } else {
        durationText = (0, _reactJplayerUtils.convertTime)(_this.currentMedia.duration, _this.props.timeFormats);
      }

      _this.props.setOption(_this.props.id, 'durationText', durationText);
    };

    _this.setCurrentTimeText = function () {
      var currentTimeText = (0, _reactJplayerUtils.convertTime)(_this.currentMedia.currentTime, _this.props.timeFormats);

      _this.props.setOption(_this.props.id, 'currentTimeText', currentTimeText);
    };

    _this.pauseOthers = function () {
      _this.props.otherJPlayerIds.forEach(function (id) {
        return _this.props.pause(id);
      });
    };

    _this.updateMediaStatus = function () {
      var seekPercent = 0;

      var currentPercentAbsolute = (0, _reactJplayerUtils.toPercentage)(_this.currentMedia.currentTime, _this.currentMedia.duration);

      if (_this.currentMedia.seekable.length > 0) {
        seekPercent = (0, _reactJplayerUtils.toPercentage)(_this.getSeekableEnd(), _this.currentMedia.duration);
      }

      _this.setDurationText();
      _this.setCurrentTimeText();

      _this.props.setOption(_this.props.id, 'seekPercent', seekPercent);
      _this.props.setOption(_this.props.id, 'currentPercentRelative', _this.getCurrentPercentRelative());
      _this.props.setOption(_this.props.id, 'currentPercentAbsolute', currentPercentAbsolute);
      _this.props.setOption(_this.props.id, 'currentTime', _this.currentMedia.currentTime);
      _this.props.setOption(_this.props.id, 'duration', _this.currentMedia.duration);
      _this.props.setOption(_this.props.id, 'playbackRate', _this.currentMedia.playbackRate);
    };

    _this.updateCurrentMedia = function (_ref3) {
      var defaultPlaybackRate = _ref3.defaultPlaybackRate,
          playbackRate = _ref3.playbackRate,
          preload = _ref3.preload,
          volume = _ref3.volume,
          muted = _ref3.muted,
          autoplay = _ref3.autoplay,
          loop = _ref3.loop;

      _this.currentMedia.defaultPlaybackRate = defaultPlaybackRate;
      _this.currentMedia.playbackRate = playbackRate;
      _this.currentMedia.preload = preload;
      _this.currentMedia.volume = volume;
      _this.currentMedia.muted = muted;
      _this.currentMedia.autoplay = autoplay;
      _this.currentMedia.loop = loop;
    };

    _this.state = {};

    _this.events = {
      onAbort: _this.props.onAbort,
      onCanPlay: _this.props.onCanPlay,
      onCanPlayThrough: _this.props.onCanPlayThrough,
      onDurationChange: function onDurationChange() {
        _this.updateMediaStatus();
        _this.props.onDurationChange();
      },
      onEmptied: _this.props.onEmptied,
      onEncrypted: _this.props.onEncrypted,
      onEnded: function onEnded() {
        // Pause so that the play/pause button resets and the poster is shown again
        _this.props.pause(_this.props.id, 0);
        _this.updateMediaStatus();
        _this.props.onEnded();
      },
      onError: function onError() {
        _this.props.setOption(_this.props.id, 'error', (0, _urlNotSupportedError2.default)(_this.props.src));
        _this.props.onError();
      },
      onLoadedData: _this.props.onLoadedData,
      onLoadedMetadata: _this.props.onLoadedMetadata,
      onLoadStart: _this.props.onLoadStart,
      onPause: _this.props.onPause,
      onPlay: function onPlay() {
        _this.props.setOption(_this.props.id, 'paused', false);

        if (_this.props.pauseOthersOnPlay) {
          _this.pauseOthers();
        }

        _this.props.onPlay();
      },
      onPlaying: _this.props.onPlaying,
      onProgress: function onProgress() {
        var bufferedTimeRanges = [];

        for (var i = 0; i < _this.currentMedia.buffered.length; i += 1) {
          bufferedTimeRanges.push({
            start: _this.currentMedia.buffered.start(i),
            end: _this.currentMedia.buffered.end(i)
          });
        }
        _this.updateMediaStatus();
        _this.props.setOption(_this.props.id, 'bufferedTimeRanges', bufferedTimeRanges);
        _this.props.onProgress();
      },
      onRateChange: _this.props.onRateChange,
      onSeeked: function onSeeked() {
        _this.props.setOption(_this.props.id, 'seeking', false);
        _this.props.onSeeked();
      },
      onSeeking: function onSeeking() {
        _this.props.setOption(_this.props.id, 'seeking', true);
        _this.props.onSeeking();
      },
      onStalled: _this.props.onStalled,
      onSuspend: _this.props.onSuspend,
      onTimeUpdate: function onTimeUpdate() {
        _this.updateMediaStatus();
        _this.props.onTimeUpdate();
      },
      onVolumeChange: _this.props.onVolumeChange,
      onWaiting: _this.props.onWaiting
    };
    return _this;
  }

  _createClass(MediaContainer, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.currentMedia.src = this.props.src;
      this.props.setOption(this.props.id, 'volumeSupported', (0, _reactJplayerUtils.canSetVolume)());

      this.updateCurrentMedia(this.props);
    }
  }, {
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      this.updateCurrentMedia(nextProps);

      if (nextProps.mediaId !== this.props.mediaId && nextProps.src !== '') {
        this.currentMedia.src = nextProps.src;
      }

      if (nextProps.newTime !== null) {
        this.currentMedia.currentTime = nextProps.newTime;
        this.props.setOption(this.props.id, 'newTime', null);
      }

      if (nextProps.playHeadPercent !== this.props.playHeadPercent) {
        // TODO: Investigate why some .mp3 urls don't fire media events enough (http://www.davidgagne.net/m/song.mp3).
        // Hasn't fully loaded the song????
        if (this.currentMedia.seekable.length > 0) {
          var seekableEnd = this.getSeekableEnd();

          if (isFinite(seekableEnd)) {
            this.currentMedia.currentTime = (0, _reactJplayerUtils.toRelativePercentage)(nextProps.playHeadPercent, seekableEnd);
            /* Media events don't fire fast enough to give a smooth animation
              when dragging so we update it here as well, same problem as above? */
            this.props.setOption(this.props.id, 'currentPercentRelative', this.getCurrentPercentRelative());
          }
        }
      }

      if (nextProps.paused) {
        this.currentMedia.pause();
      } else {
        this.currentMedia.play();
      }
    }
  }, {
    key: 'componentDidUpdate',
    value: function componentDidUpdate(prevProps) {
      if (prevProps.showRemainingDuration !== this.props.showRemainingDuration) {
        this.setDurationText();
      }
      if (prevProps.timeFormats !== this.props.timeFormats) {
        this.setCurrentTimeText();
      }
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.cloneElement(_react2.default.Children.only(this.props.children), _extends({}, this.events, {
        ref: this.setCurrentMedia
      }));
    }
  }]);

  return MediaContainer;
}(_react2.default.Component);

exports.default = (0, _reactJplayerUtils.connectWithId)(mapStateToProps, mapDispatchToProps)(MediaContainer);

/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _reactJplayerUtils = __webpack_require__(3);

var _playbackRateBarValue = __webpack_require__(88);

var _playbackRateBarValue2 = _interopRequireDefault(_playbackRateBarValue);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var mapStateToProps = function mapStateToProps(_ref2, _ref) {
  var jPlayers = _ref2.jPlayers;

  var id = _ref.id,
      attributes = _objectWithoutProperties(_ref, ['id']);

  return {
    verticalPlaybackRate: jPlayers[id].verticalPlaybackRate,
    minPlaybackRate: jPlayers[id].minPlaybackRate,
    maxPlaybackRate: jPlayers[id].maxPlaybackRate,
    playbackRate: jPlayers[id].playbackRate,
    attributes: attributes
  };
};

exports.default = (0, _reactJplayerUtils.connectWithId)(mapStateToProps)(_playbackRateBarValue2.default);

/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(0);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _constants = __webpack_require__(2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var Poster = function Poster(_ref) {
  var src = _ref.src,
      alt = _ref.alt,
      attributes = _objectWithoutProperties(_ref, ['src', 'alt']);

  return src !== '' ? _react2.default.createElement('img', _extends({ className: _constants.classes.POSTER, alt: alt, src: src }, attributes)) : null;
};

Poster.defaultProps = {
  alt: null,
  src: null
};

Poster.propTypes = {
  src: _propTypes2.default.string,
  alt: _propTypes2.default.string
};

exports.default = Poster;

/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(0);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _constants = __webpack_require__(2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var Repeat = function Repeat(_ref) {
  var setLoop = _ref.setLoop,
      id = _ref.id,
      loop = _ref.loop,
      children = _ref.children,
      attributes = _objectWithoutProperties(_ref, ['setLoop', 'id', 'loop', 'children']);

  return _react2.default.createElement(
    'button',
    _extends({ className: _constants.classes.REPEAT, onClick: function onClick() {
        return setLoop(id, loop);
      } }, attributes),
    children
  );
};

Repeat.propTypes = {
  loop: _propTypes2.default.oneOfType([_propTypes2.default.bool, _propTypes2.default.string]).isRequired,
  children: _propTypes2.default.node.isRequired,
  id: _propTypes2.default.string.isRequired,
  setLoop: _propTypes2.default.func.isRequired
};

exports.default = Repeat;

/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(0);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _constants = __webpack_require__(2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Title = function Title(_ref) {
  var children = _ref.children,
      attributes = _ref.attributes;
  return children !== '' ? _react2.default.createElement(
    'div',
    _extends({ className: _constants.classes.TITLE }, attributes),
    children
  ) : null;
};

Title.propTypes = {
  attributes: _propTypes2.default.object.isRequired,
  children: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.number]).isRequired
};

exports.default = Title;

/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _reactJplayerUtils = __webpack_require__(3);

var _volumeBarValue = __webpack_require__(98);

var _volumeBarValue2 = _interopRequireDefault(_volumeBarValue);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var mapStateToProps = function mapStateToProps(_ref2, _ref) {
  var jPlayers = _ref2.jPlayers;

  var id = _ref.id,
      children = _ref.children,
      attributes = _objectWithoutProperties(_ref, ['id', 'children']);

  return {
    verticalVolume: jPlayers[id].verticalVolume,
    muted: jPlayers[id].muted,
    volume: jPlayers[id].volume,
    children: children,
    attributes: attributes
  };
};

exports.default = (0, _reactJplayerUtils.connectWithId)(mapStateToProps)(_volumeBarValue2.default);

/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.BrowserUnsupported = exports.CurrentTime = exports.Duration = exports.Download = exports.VolumeBarValue = exports.VolumeBar = exports.PlaybackRateBarValue = exports.PlaybackRateBar = exports.Repeat = exports.Play = exports.Mute = exports.FullScreen = exports.Title = exports.Audio = exports.Video = exports.Poster = exports.BufferBar = exports.PlayBar = exports.SeekBar = exports.Gui = exports.connect = exports.actions = exports.reducer = exports.initialState = exports.constants = undefined;

var _initialState = __webpack_require__(102);

var _initialState2 = _interopRequireDefault(_initialState);

var _reducer = __webpack_require__(103);

var _reducer2 = _interopRequireDefault(_reducer);

var _actions = __webpack_require__(5);

var actions = _interopRequireWildcard(_actions);

var _connect = __webpack_require__(101);

var _connect2 = _interopRequireDefault(_connect);

var _guiContainer = __webpack_require__(79);

var _guiContainer2 = _interopRequireDefault(_guiContainer);

var _videoContainer = __webpack_require__(97);

var _videoContainer2 = _interopRequireDefault(_videoContainer);

var _audioContainer = __webpack_require__(65);

var _audioContainer2 = _interopRequireDefault(_audioContainer);

var _jPlayerContainer = __webpack_require__(81);

var _jPlayerContainer2 = _interopRequireDefault(_jPlayerContainer);

var _playBarContainer = __webpack_require__(85);

var _playBarContainer2 = _interopRequireDefault(_playBarContainer);

var _bufferBarContainer = __webpack_require__(69);

var _bufferBarContainer2 = _interopRequireDefault(_bufferBarContainer);

var _posterContainer = __webpack_require__(91);

var _posterContainer2 = _interopRequireDefault(_posterContainer);

var _titleContainer = __webpack_require__(95);

var _titleContainer2 = _interopRequireDefault(_titleContainer);

var _fullScreenContainer = __webpack_require__(77);

var _fullScreenContainer2 = _interopRequireDefault(_fullScreenContainer);

var _muteContainer = __webpack_require__(83);

var _muteContainer2 = _interopRequireDefault(_muteContainer);

var _playContainer = __webpack_require__(87);

var _playContainer2 = _interopRequireDefault(_playContainer);

var _repeatContainer = __webpack_require__(92);

var _repeatContainer2 = _interopRequireDefault(_repeatContainer);

var _seekBarContainer = __webpack_require__(94);

var _seekBarContainer2 = _interopRequireDefault(_seekBarContainer);

var _playbackRateBarContainer = __webpack_require__(90);

var _playbackRateBarContainer2 = _interopRequireDefault(_playbackRateBarContainer);

var _playbackRateBarValueContainer = __webpack_require__(21);

var _playbackRateBarValueContainer2 = _interopRequireDefault(_playbackRateBarValueContainer);

var _volumeBarContainer = __webpack_require__(100);

var _volumeBarContainer2 = _interopRequireDefault(_volumeBarContainer);

var _volumeBarValueContainer = __webpack_require__(25);

var _volumeBarValueContainer2 = _interopRequireDefault(_volumeBarValueContainer);

var _downloadContainer = __webpack_require__(73);

var _downloadContainer2 = _interopRequireDefault(_downloadContainer);

var _durationContainer = __webpack_require__(75);

var _durationContainer2 = _interopRequireDefault(_durationContainer);

var _currentTimeContainer = __webpack_require__(71);

var _currentTimeContainer2 = _interopRequireDefault(_currentTimeContainer);

var _browserUnsupportedContainer = __webpack_require__(67);

var _browserUnsupportedContainer2 = _interopRequireDefault(_browserUnsupportedContainer);

var _constants = __webpack_require__(2);

var constants = _interopRequireWildcard(_constants);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* eslint-disable max-len */

exports.default = _jPlayerContainer2.default;
exports.constants = constants;
exports.initialState = _initialState2.default;
exports.reducer = _reducer2.default;
exports.actions = actions;
exports.connect = _connect2.default;
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

/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _propTypes = __webpack_require__(0);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _constants = __webpack_require__(2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var formatPropTypes = {};

Object.keys(_constants.formats).forEach(function (key) {
  formatPropTypes[key] = _propTypes2.default.string;
});

exports.default = formatPropTypes;

/***/ }),
/* 28 */
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
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

function _interopRequire(obj) { return obj && obj.__esModule ? obj['default'] : obj; }

var _Motion = __webpack_require__(113);

exports.Motion = _interopRequire(_Motion);

var _StaggeredMotion = __webpack_require__(114);

exports.StaggeredMotion = _interopRequire(_StaggeredMotion);

var _TransitionMotion = __webpack_require__(115);

exports.TransitionMotion = _interopRequire(_TransitionMotion);

var _spring = __webpack_require__(118);

exports.spring = _interopRequire(_spring);

var _presets = __webpack_require__(28);

exports.presets = _interopRequire(_presets);

var _stripStyle = __webpack_require__(11);

exports.stripStyle = _interopRequire(_stripStyle);

// deprecated, dummy warning function

var _reorderKeys = __webpack_require__(117);

exports.reorderKeys = _interopRequire(_reorderKeys);

/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (loop) {
  var newLoop = loop;

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
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _reactRedux = __webpack_require__(8);

var _recompose = __webpack_require__(9);

var _propTypes = __webpack_require__(0);

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function () {
  return (0, _recompose.compose)((0, _recompose.getContext)({ id: _propTypes2.default.string }), _reactRedux.connect.apply(undefined, arguments));
};

/***/ }),
/* 32 */
/***/ (function(module, exports) {

module.exports = classNames;

/***/ }),
/* 33 */
/***/ (function(module, exports) {

module.exports = shortid;

/***/ }),
/* 34 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _lodash = __webpack_require__(12);

var _lodash2 = _interopRequireDefault(_lodash);

var _reactJplayer = __webpack_require__(26);

var _reactJplayer2 = _interopRequireDefault(_reactJplayer);

var _reactJplayerUtils = __webpack_require__(4);

var _propTypes = __webpack_require__(0);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _constants = __webpack_require__(6);

var _getLoopState = __webpack_require__(30);

var _getLoopState2 = _interopRequireDefault(_getLoopState);

var _actions = __webpack_require__(7);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var mapStateToProps = function mapStateToProps(_ref2, _ref) {
  var _extends2;

  var jPlayers = _ref2.jPlayers,
      jPlaylists = _ref2.jPlaylists;

  var id = _ref.id,
      children = _ref.children,
      customStates = _ref.customStates,
      keyBindings = _ref.keyBindings,
      attributes = _objectWithoutProperties(_ref, ['id', 'children', 'customStates', 'keyBindings']);

  var current = jPlaylists[id].current;
  var playlist = jPlaylists[id].playlist;
  var currentMediaId = void 0;

  if (playlist[current] !== undefined) {
    currentMediaId = playlist[current].id;
  }

  return {
    playNow: jPlaylists[id].playNow,
    shuffled: jPlaylists[id].shuffled,
    loop: jPlaylists[id].loop,
    shuffleOnLoop: jPlaylists[id].shuffleOnLoop,
    focused: jPlayers[id].focused,
    keyBindings: keyBindings,
    currentMediaId: currentMediaId,
    playlist: playlist,
    current: current,
    id: id,
    children: children,
    attributes: attributes,
    customStates: _extends((_extends2 = {}, _defineProperty(_extends2, _constants.classes.states.LOOPED_PLAYLIST, jPlaylists[id].loop === 'loop-playlist'), _defineProperty(_extends2, _constants.classes.states.SHUFFLED, jPlaylists[id].shuffled), _extends2), customStates)
  };
};

var mergeProps = function mergeProps(stateProps, _ref3) {
  var dispatch = _ref3.dispatch;
  return _extends({}, stateProps, {
    dispatch: dispatch,
    keyBindings: (0, _lodash2.default)({
      next: {
        key: 221, // ]
        fn: function fn() {
          return dispatch((0, _actions.next)(stateProps.id));
        }
      },
      previous: {
        key: 219, // [
        fn: function fn() {
          return dispatch((0, _actions.previous)(stateProps.id));
        }
      },
      shuffle: {
        key: 83, // s
        fn: function fn() {
          return dispatch((0, _actions.shuffle)(stateProps.id, undefined, true));
        }
      },
      loop: {
        key: 76, // l
        fn: function fn() {
          var loop = (0, _getLoopState2.default)(stateProps.loop);

          dispatch((0, _actions.setOption)(stateProps.id, 'loop', loop));
        }
      }
    }, stateProps.keyBindings)
  });
};

var JPlaylistContainer = function (_React$Component) {
  _inherits(JPlaylistContainer, _React$Component);

  function JPlaylistContainer() {
    var _ref4;

    var _temp, _this, _ret;

    _classCallCheck(this, JPlaylistContainer);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref4 = JPlaylistContainer.__proto__ || Object.getPrototypeOf(JPlaylistContainer)).call.apply(_ref4, [this].concat(args))), _this), _this.setLoop = function () {
      if (_this.props.loop === 'loop') {
        _this.props.dispatch(_reactJplayer.actions.setOption(_this.props.id, 'loop', true));
      } else {
        _this.props.dispatch(_reactJplayer.actions.setOption(_this.props.id, 'loop', false));
      }
    }, _this.handlePlaylistLooped = function (prevProps) {
      if (_this.props.loop === 'loop-playlist') {
        // See if we need to shuffle before looping to start, and only shuffle if more than 1 item.
        if (_this.props.current === 0 && prevProps.current === prevProps.playlist.length - 1 && _this.props.shuffled && _this.props.shuffleOnLoop && _this.props.playlist.length > 1) {
          // Shuffle and play the media now
          _this.props.dispatch((0, _actions.shuffle)(_this.props.id, true, true));
        }
      }
    }, _this.playNext = function () {
      return _this.props.dispatch((0, _actions.next)(_this.props.id));
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(JPlaylistContainer, [{
    key: 'componentWillMount',
    value: function componentWillMount() {
      this.props.dispatch((0, _actions.setPlaylist)(this.props.id, this.props.playlist));
      this.props.dispatch(_reactJplayer.actions.setMedia(this.props.id, this.props.playlist[0]));
    }
  }, {
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.media = document.querySelector('#' + this.props.id + ' audio') || document.querySelector('#' + this.props.id + ' video');

      this.media.addEventListener('ended', this.playNext);
    }
  }, {
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      if (nextProps.playlist.length > 0 && this.props.currentMediaId !== nextProps.currentMediaId) {
        this.props.dispatch(_reactJplayer.actions.setMedia(nextProps.id, nextProps.playlist[nextProps.current]));
      } else if (nextProps.playlist.length === 0 && this.props.playlist.length > nextProps.playlist.length) {
        this.props.dispatch(_reactJplayer.actions.clearMedia(nextProps.id));
      }
    }
  }, {
    key: 'componentDidUpdate',
    value: function componentDidUpdate(prevProps) {
      if (this.props.loop !== prevProps.loop) {
        this.setLoop();
      }

      if (this.props.playNow) {
        this.props.dispatch(_reactJplayer.actions.play(this.props.id));
        this.props.dispatch((0, _actions.setOption)(this.props.id, 'playNow', false));
      }

      if (this.props.currentMediaId !== prevProps.currentMediaId) {
        this.handlePlaylistLooped(prevProps);
      }
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      this.media.removeEventListener('ended', this.playNext);
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        _reactJplayer2.default,
        _extends({
          customStates: this.props.customStates, keyBindings: this.props.keyBindings
        }, this.props.attributes),
        this.props.children
      );
    }
  }], [{
    key: 'defaultProps',
    get: function get() {
      return {
        attributes: null,
        customStates: null,
        playNow: false,
        currentMediaId: null
      };
    }
  }, {
    key: 'propTypes',
    get: function get() {
      return {
        dispatch: _propTypes2.default.func.isRequired,
        id: _propTypes2.default.string.isRequired,
        attributes: _propTypes2.default.object,
        children: _propTypes2.default.node.isRequired,
        shuffled: _propTypes2.default.bool.isRequired,
        currentMediaId: _propTypes2.default.string,
        customStates: _propTypes2.default.object,
        playNow: _propTypes2.default.bool,
        loop: _propTypes2.default.string.isRequired,
        shuffleOnLoop: _propTypes2.default.bool.isRequired,
        current: _propTypes2.default.number.isRequired,
        playlist: _propTypes2.default.arrayOf(_propTypes2.default.shape({
          title: _propTypes2.default.string,
          artist: _propTypes2.default.string,
          mp3: _propTypes2.default.string,
          poster: _propTypes2.default.string,
          free: _propTypes2.default.bool
        })).isRequired,
        keyBindings: _propTypes2.default.object.isRequired
      };
    }
  }]);

  return JPlaylistContainer;
}(_react2.default.Component);

exports.default = (0, _reactJplayerUtils.connectWithId)(mapStateToProps, null, mergeProps)(JPlaylistContainer);

/***/ }),
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _reactJplayerUtils = __webpack_require__(4);

var _actions = __webpack_require__(7);

var _mediaLink = __webpack_require__(120);

var _mediaLink2 = _interopRequireDefault(_mediaLink);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = (0, _reactJplayerUtils.connectWithIndex)(null, {
  play: _actions.play
})(_mediaLink2.default);

/***/ }),
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _reactJplayerUtils = __webpack_require__(4);

var _actions = __webpack_require__(7);

var _next = __webpack_require__(121);

var _next2 = _interopRequireDefault(_next);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = (0, _reactJplayerUtils.connectWithId)(null, {
  next: _actions.next
})(_next2.default);

/***/ }),
/* 37 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _reactJplayerUtils = __webpack_require__(4);

var _classnames = __webpack_require__(32);

var _classnames2 = _interopRequireDefault(_classnames);

var _constants = __webpack_require__(6);

var _playlist = __webpack_require__(124);

var _playlist2 = _interopRequireDefault(_playlist);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var mapStateToProps = function mapStateToProps(_ref2, _ref) {
  var jPlaylists = _ref2.jPlaylists;

  var id = _ref.id,
      children = _ref.children,
      attributes = _objectWithoutProperties(_ref, ['id', 'children']);

  return {
    playlist: jPlaylists[id].playlist,
    children: children,
    attributes: _extends({}, attributes, {
      className: (0, _classnames2.default)(attributes.className, _constants.classes.PLAYLIST, _defineProperty({}, _reactJplayerUtils.classes.HIDDEN, jPlaylists[id].hidePlaylist))
    })
  };
};

exports.default = (0, _reactJplayerUtils.connectWithId)(mapStateToProps)(_playlist2.default);

/***/ }),
/* 38 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _reactJplayerUtils = __webpack_require__(4);

var _poster = __webpack_require__(22);

var _poster2 = _interopRequireDefault(_poster);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var mapStateToProps = function mapStateToProps(_ref2, _ref) {
  var jPlaylists = _ref2.jPlaylists;

  var id = _ref.id,
      index = _ref.index,
      attributes = _objectWithoutProperties(_ref, ['id', 'index']);

  return {
    src: jPlaylists[id].playlist[index].poster,
    attributes: attributes
  };
};

exports.default = (0, _reactJplayerUtils.connectWithIndex)(mapStateToProps)(_poster2.default);

/***/ }),
/* 39 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _reactJplayerUtils = __webpack_require__(4);

var _actions = __webpack_require__(7);

var _previous = __webpack_require__(125);

var _previous2 = _interopRequireDefault(_previous);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = (0, _reactJplayerUtils.connectWithId)(null, {
  previous: _actions.previous
})(_previous2.default);

/***/ }),
/* 40 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _reactJplayerUtils = __webpack_require__(4);

var _actions = __webpack_require__(7);

var _remove = __webpack_require__(126);

var _remove2 = _interopRequireDefault(_remove);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = (0, _reactJplayerUtils.connectWithIndex)(null, {
  remove: _actions.remove
})(_remove2.default);

/***/ }),
/* 41 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _repeat = __webpack_require__(23);

var _repeat2 = _interopRequireDefault(_repeat);

var _reactJplayerUtils = __webpack_require__(4);

var _actions = __webpack_require__(7);

var _getLoopState = __webpack_require__(30);

var _getLoopState2 = _interopRequireDefault(_getLoopState);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var mapStateToProps = function mapStateToProps(_ref, _ref2) {
  var jPlaylists = _ref.jPlaylists;
  var id = _ref2.id;
  return {
    loop: jPlaylists[id].loop
  };
};

exports.default = (0, _reactJplayerUtils.connectWithId)(mapStateToProps, {
  setLoop: function setLoop(id, loop) {
    return (0, _actions.setOption)(id, 'loop', (0, _getLoopState2.default)(loop));
  }
})(_repeat2.default);

/***/ }),
/* 42 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _reactJplayerUtils = __webpack_require__(4);

var _actions = __webpack_require__(7);

var _shuffle = __webpack_require__(127);

var _shuffle2 = _interopRequireDefault(_shuffle);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = (0, _reactJplayerUtils.connectWithId)(null, {
  shuffle: _actions.shuffle
})(_shuffle2.default);

/***/ }),
/* 43 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _reactJplayerUtils = __webpack_require__(4);

var _title = __webpack_require__(24);

var _title2 = _interopRequireDefault(_title);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var mapStateToProps = function mapStateToProps(_ref2, _ref) {
  var jPlaylists = _ref2.jPlaylists;

  var id = _ref.id,
      index = _ref.index,
      children = _ref.children,
      attributes = _objectWithoutProperties(_ref, ['id', 'index', 'children']);

  return {
    children: children || (0, _reactJplayerUtils.formatArtistAndTitle)(jPlaylists[id].playlist[index].artist, jPlaylists[id].playlist[index].title),
    attributes: attributes
  };
};

exports.default = (0, _reactJplayerUtils.connectWithIndex)(mapStateToProps)(_title2.default);

/***/ }),
/* 44 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _reactJplayerUtils = __webpack_require__(4);

var _actions = __webpack_require__(7);

var _togglePlaylist = __webpack_require__(128);

var _togglePlaylist2 = _interopRequireDefault(_togglePlaylist);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var mapStateToProps = function mapStateToProps(_ref, _ref2) {
  var jPlaylists = _ref.jPlaylists;
  var id = _ref2.id;
  return {
    hidePlaylist: jPlaylists[id].hidePlaylist
  };
};

exports.default = (0, _reactJplayerUtils.connectWithId)(mapStateToProps, {
  togglePlaylist: function togglePlaylist(id, hidePlaylist) {
    return (0, _actions.setOption)(id, 'hidePlaylist', hidePlaylist);
  }
})(_togglePlaylist2.default);

/***/ }),
/* 45 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _reactRedux = __webpack_require__(8);

var _reactJplayer = __webpack_require__(26);

var _reactJplayerUtils = __webpack_require__(4);

var _actions = __webpack_require__(7);

var jPlaylistActions = _interopRequireWildcard(_actions);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

var Connect = function Connect(jPlaylist, options, jPlaylistOptions) {
  var ConnectedPlaylist = (0, _reactRedux.connect)(function (state) {
    return state;
  }, _extends({}, _reactJplayer.actions, jPlaylistActions))(jPlaylist);

  return (0, _reactJplayerUtils.connect)(jPlaylist, { options: options, jPlaylistOptions: jPlaylistOptions }, ConnectedPlaylist);
};

exports.default = Connect;

/***/ }),
/* 46 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _reactJplayerUtils = __webpack_require__(4);

var _constants = __webpack_require__(6);

exports.default = function (connectedJPlaylists) {
  var jPlaylists = (0, _reactJplayerUtils.initialState)(connectedJPlaylists, _extends({}, _constants.defaultStatus, _constants.defaultOptions), 'jPlaylistOptions');

  return jPlaylists;
};

/***/ }),
/* 47 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _reactJplayerUtils = __webpack_require__(4);

var _lodash = __webpack_require__(148);

var _lodash2 = _interopRequireDefault(_lodash);

var _shortid = __webpack_require__(33);

var _shortid2 = _interopRequireDefault(_shortid);

var _constants = __webpack_require__(6);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

var add = function add(jPlaylist, _ref) {
  var media = _ref.media,
      playNow = _ref.playNow;

  var highestMediaShufflePosition = (0, _lodash2.default)(jPlaylist.playlist, 'shufflePosition');
  var newMedia = _extends({}, media, {
    id: _shortid2.default.generate(),
    shufflePosition: highestMediaShufflePosition !== undefined ? highestMediaShufflePosition.shufflePosition + 1 : 0
  });
  var playlist = [].concat(_toConsumableArray(jPlaylist.playlist), [newMedia]);
  var current = void 0;

  if (playNow) {
    current = playlist.length - 1;
  } else if (playlist.length === 1) {
    current = 0;
  }

  return (0, _reactJplayerUtils.updateObject)(jPlaylist, {
    playlist: playlist,
    playNow: playNow,
    current: current
  });
};

var remove = function remove(jPlaylist, _ref2) {
  var index = _ref2.index;

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

  return (0, _reactJplayerUtils.updateObject)(jPlaylist, {
    playlist: playlist,
    current: current,
    shuffled: shuffled
  });
};

var clear = function clear(jPlaylist) {
  return (0, _reactJplayerUtils.updateObject)(jPlaylist, {
    playlist: []
  });
};

// Negative index relates to the end of the array
var select = function select(jPlaylist, _ref3) {
  var index = _ref3.index;
  return (0, _reactJplayerUtils.updateObject)(jPlaylist, {
    current: index < 0 ? jPlaylist.original.length + index : index
  });
};

// Negative index relates to the end of the array
var play = function play(jPlaylist, _ref4) {
  var _ref4$index = _ref4.index,
      index = _ref4$index === undefined ? jPlaylist.current : _ref4$index;
  return (0, _reactJplayerUtils.updateObject)(jPlaylist, {
    current: index < 0 ? jPlaylist.original.length + index : index,
    playNow: true
  });
};

var shuffle = function shuffle(jPlaylist, _ref5) {
  var _ref5$shuffled = _ref5.shuffled,
      shuffled = _ref5$shuffled === undefined ? !jPlaylist.shuffled : _ref5$shuffled,
      playNow = _ref5.playNow;

  var playlist = void 0;

  if (shuffled) {
    playlist = [].concat(_toConsumableArray(jPlaylist.playlist)).sort(function () {
      return 0.5 - Math.random();
    });
  } else {
    playlist = [].concat(_toConsumableArray(jPlaylist.playlist)).sort(function (a, b) {
      return a.shufflePosition - b.shufflePosition;
    });
  }

  return (0, _reactJplayerUtils.updateObject)(jPlaylist, {
    playlist: playlist,
    shuffled: shuffled,
    playNow: playNow
  });
};

var next = function next(jPlaylist) {
  var current = jPlaylist.loop === 'loop-playlist' ? 0 : jPlaylist.current;
  var isWithinPlaylist = jPlaylist.current + 1 < jPlaylist.playlist.length;
  var playNow = true;

  if (!isWithinPlaylist && jPlaylist.loop === 'off') {
    playNow = false;
  }

  return (0, _reactJplayerUtils.updateObject)(jPlaylist, {
    current: isWithinPlaylist ? jPlaylist.current + 1 : current,
    playNow: playNow
  });
};

var previous = function previous(jPlaylist) {
  var current = jPlaylist.loopOnPrevious ? jPlaylist.playlist.length - 1 : jPlaylist.current;

  if (jPlaylist.current - 1 >= 0) {
    current = jPlaylist.current - 1;
  }

  return (0, _reactJplayerUtils.updateObject)(jPlaylist, {
    current: current,
    playNow: true
  });
};

var setPlaylist = function setPlaylist(jPlaylist, _ref6) {
  var playlist = _ref6.playlist;
  return (0, _reactJplayerUtils.updateObject)(jPlaylist, {
    current: 0,
    shuffled: false,
    playlist: playlist.map(function (media, index) {
      return _extends({}, media, {
        id: _shortid2.default.generate(),
        shufflePosition: index
      });
    })
  });
};

var updatePlaylist = function updatePlaylist(jPlaylist, action) {
  switch (action.type) {
    case _constants.actionNames.SET_OPTION:
      return (0, _reactJplayerUtils.updateObject)(jPlaylist, _defineProperty({}, action.key, action.value));
    case _constants.actionNames.SET_PLAYLIST:
      return setPlaylist(jPlaylist, action);
    case _constants.actionNames.ADD:
      return add(jPlaylist, action);
    case _constants.actionNames.REMOVE:
      return remove(jPlaylist, action);
    case _constants.actionNames.CLEAR:
      return clear(jPlaylist, action);
    case _constants.actionNames.SELECT:
      return select(jPlaylist, action);
    case _constants.actionNames.PLAY:
      return play(jPlaylist, action);
    case _constants.actionNames.SHUFFLE:
      return shuffle(jPlaylist, action);
    case _constants.actionNames.NEXT:
      return next(jPlaylist, action);
    case _constants.actionNames.PREVIOUS:
      return previous(jPlaylist, action);
    default:
      return null;
  }
};

var jPlaylistReducer = function jPlaylistReducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var action = arguments[1];

  var jPlaylist = updatePlaylist(state[action.id], action);

  if (jPlaylist !== null) {
    return (0, _reactJplayerUtils.updateObject)(state, _defineProperty({}, action.id, jPlaylist));
  }
  return state;
};

exports.default = jPlaylistReducer;

/***/ }),
/* 48 */
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
/* 49 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {
  HIDDEN: 'jp-hidden'
};

/***/ }),
/* 50 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(0);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _connectWithId = __webpack_require__(19);

var _connectWithId2 = _interopRequireDefault(_connectWithId);

var _keyIgnoredElementNames = __webpack_require__(57);

var _keyIgnoredElementNames2 = _interopRequireDefault(_keyIgnoredElementNames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var onKeyDown = function onKeyDown(keyEnabled, focused, keyBindings, event) {
  if (_keyIgnoredElementNames2.default.some(function (name) {
    return name.toUpperCase() === event.target.nodeName.toUpperCase();
  }) || !focused || !keyEnabled) {
    return;
  }

  Object.keys(keyBindings).forEach(function (key) {
    var keyBinding = keyBindings[key];

    if (keyBinding.key === event.keyCode || keyBinding.key === event.key) {
      event.preventDefault();
      keyBinding.fn();
    }
  });
};

var mapStateToProps = function mapStateToProps(_ref, _ref2) {
  var jPlayers = _ref.jPlayers,
      jPlaylists = _ref.jPlaylists;
  var id = _ref2.id;
  return {
    keyEnabled: jPlayers[id].keyEnabled,
    focused: jPlayers[id].focused
  };
};

var KeyControl = function (_React$Component) {
  _inherits(KeyControl, _React$Component);

  function KeyControl() {
    var _ref3;

    var _temp, _this, _ret;

    _classCallCheck(this, KeyControl);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref3 = KeyControl.__proto__ || Object.getPrototypeOf(KeyControl)).call.apply(_ref3, [this].concat(args))), _this), _this.onKeyDown = function (event) {
      return onKeyDown(_this.props.keyEnabled, _this.props.focused, _this.props.keyBindings, event);
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(KeyControl, [{
    key: 'componentWillMount',
    value: function componentWillMount() {
      document.addEventListener('keydown', this.onKeyDown);
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      document.removeEventListener('keydown', this.onKeyDown);
    }
  }, {
    key: 'render',
    value: function render() {
      return null;
    }
  }]);

  return KeyControl;
}(_react2.default.Component);

KeyControl.propTypes = {
  keyEnabled: _propTypes2.default.bool.isRequired,
  focused: _propTypes2.default.bool.isRequired,
  keyBindings: _propTypes2.default.object.isRequired
};

exports.default = (0, _connectWithId2.default)(mapStateToProps)(KeyControl);

/***/ }),
/* 51 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(0);

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Connect = function Connect(jPlayer, _ref, ConnectedPlayer) {
  var options = _ref.options,
      jPlaylistOptions = _ref.jPlaylistOptions;
  return function (_React$Component) {
    _inherits(_class2, _React$Component);

    function _class2() {
      var _ref2;

      var _temp, _this, _ret;

      _classCallCheck(this, _class2);

      for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref2 = _class2.__proto__ || Object.getPrototypeOf(_class2)).call.apply(_ref2, [this].concat(args))), _this), _this.getChildContext = function () {
        return {
          id: options.id
        };
      }, _temp), _possibleConstructorReturn(_this, _ret);
    }

    _createClass(_class2, [{
      key: 'render',
      value: function render() {
        return _react2.default.createElement(ConnectedPlayer, _extends({ id: options.id }, this.props));
      }
    }], [{
      key: 'jPlayer',
      get: function get() {
        return jPlayer;
      }
    }, {
      key: 'options',
      get: function get() {
        return options;
      }
    }, {
      key: 'jPlaylistOptions',
      get: function get() {
        return jPlaylistOptions;
      }
    }, {
      key: 'childContextTypes',
      get: function get() {
        return {
          id: _propTypes2.default.string
        };
      }
    }]);

    return _class2;
  }(_react2.default.Component);
};

exports.default = Connect;

/***/ }),
/* 52 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _reactRedux = __webpack_require__(8);

var _recompose = __webpack_require__(9);

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
/* 53 */
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
/* 54 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (artist, title) {
  var titleText = '';

  if (artist !== '') {
    titleText += '' + artist;
  }

  if (title !== '') {
    if (artist !== '') {
      titleText += ' - ';
    }
    titleText += '' + title;
  }

  return titleText;
};

/***/ }),
/* 55 */
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
/* 56 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _lodash = __webpack_require__(12);

var _lodash2 = _interopRequireDefault(_lodash);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var initialState = function initialState(connectedJPlayers, defaultValues, optionsName) {
  var jPlayers = {};
  var newConnectedJPlayers = connectedJPlayers;

  if (!Array.isArray(connectedJPlayers)) {
    newConnectedJPlayers = [newConnectedJPlayers];
  }

  newConnectedJPlayers.forEach(function (connectedJPlayer) {
    jPlayers[connectedJPlayer.options.id] = (0, _lodash2.default)({}, _extends({}, defaultValues), connectedJPlayer[optionsName]);
  });

  return jPlayers;
};

exports.default = initialState;

/***/ }),
/* 57 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = ['INPUT', 'TEXTAREA', 'SELECT'];

/***/ }),
/* 58 */
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
/* 59 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _recompose = __webpack_require__(9);

var _propTypes = __webpack_require__(0);

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (component) {
  return (0, _recompose.compose)((0, _recompose.withContext)({
    index: _propTypes2.default.number
  }, function (_ref) {
    var index = _ref.index;
    return { index: index };
  })(component));
};

/***/ }),
/* 60 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (number, max) {
  return 100 * (number / max);
};

/***/ }),
/* 61 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (number, max) {
  return number * (max / 100);
};

/***/ }),
/* 62 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (currentElement, className) {
  var element = currentElement;

  while (element.parentNode) {
    element = element.parentNode;

    if (element.className !== undefined && element.className.includes(className)) {
      return element;
    }
  }
  return false;
};

/***/ }),
/* 63 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = function (existingObject, newValues) {
  return _extends({}, existingObject, newValues);
};

/***/ }),
/* 64 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(0);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _mediaContainer = __webpack_require__(20);

var _mediaContainer2 = _interopRequireDefault(_mediaContainer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var Audio = function Audio(_ref) {
  var require = _ref.require,
      events = _ref.events,
      children = _ref.children,
      attributes = _objectWithoutProperties(_ref, ['require', 'events', 'children']);

  return require ? _react2.default.createElement(
    _mediaContainer2.default,
    events,
    _react2.default.createElement(
      'audio',
      attributes,
      children
    )
  ) : null;
};

Audio.defaultProps = {
  events: null,
  children: null
};

Audio.propTypes = {
  children: _propTypes2.default.node,
  require: _propTypes2.default.bool.isRequired,
  events: _propTypes2.default.shape({
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

exports.default = Audio;

/***/ }),
/* 65 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _reactJplayerUtils = __webpack_require__(3);

var _audio = __webpack_require__(64);

var _audio2 = _interopRequireDefault(_audio);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var mapStateToProps = function mapStateToProps(_ref, _ref2) {
  var jPlayers = _ref.jPlayers;
  var id = _ref2.id;
  return {
    require: !jPlayers[id].mediaSettings.video
  };
};

exports.default = (0, _reactJplayerUtils.connectWithId)(mapStateToProps, {})(_audio2.default);

/***/ }),
/* 66 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(0);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _constants = __webpack_require__(2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var BrowserUnsupported = function BrowserUnsupported(_ref) {
  var foundSupported = _ref.foundSupported,
      children = _ref.children,
      attributes = _objectWithoutProperties(_ref, ['foundSupported', 'children']);

  return foundSupported ? null : _react2.default.createElement(
    'div',
    _extends({ className: _constants.classes.NO_BROWSER_SUPPORT }, attributes),
    children
  );
};

BrowserUnsupported.defaultProps = {
  children: _react2.default.createElement(
    'div',
    null,
    _react2.default.createElement(
      'h4',
      null,
      'Browser Unsupported'
    ),
    'Your browser does not support this media file. To play the media you will need to update your browser to a more recent version.'
  )
};

BrowserUnsupported.propTypes = {
  children: _propTypes2.default.node,
  foundSupported: _propTypes2.default.bool.isRequired
};

exports.default = BrowserUnsupported;

/***/ }),
/* 67 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _reactJplayerUtils = __webpack_require__(3);

var _browserUnsupported = __webpack_require__(66);

var _browserUnsupported2 = _interopRequireDefault(_browserUnsupported);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var mapStateToProps = function mapStateToProps(_ref, _ref2) {
  var jPlayers = _ref.jPlayers;
  var id = _ref2.id;
  return {
    foundSupported: jPlayers[id].mediaSettings.foundSupported
  };
};

exports.default = (0, _reactJplayerUtils.connectWithId)(mapStateToProps, {})(_browserUnsupported2.default);

/***/ }),
/* 68 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(0);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _constants = __webpack_require__(2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var BufferBar = function BufferBar(_ref) {
  var setCanvas = _ref.setCanvas,
      attributes = _ref.attributes;
  return _react2.default.createElement('canvas', _extends({
    ref: setCanvas, className: _constants.classes.BUFFER_BAR
  }, attributes));
};

BufferBar.propTypes = {
  attributes: _propTypes2.default.object.isRequired,
  setCanvas: _propTypes2.default.func.isRequired
};

exports.default = BufferBar;

/***/ }),
/* 69 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(0);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactJplayerUtils = __webpack_require__(3);

var _bufferBar = __webpack_require__(68);

var _bufferBar2 = _interopRequireDefault(_bufferBar);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var mapStateToProps = function mapStateToProps(_ref2, _ref) {
  var jPlayers = _ref2.jPlayers;

  var id = _ref.id,
      attributes = _objectWithoutProperties(_ref, ['id']);

  return {
    bufferedTimeRanges: jPlayers[id].bufferedTimeRanges,
    duration: jPlayers[id].duration,
    bufferColour: jPlayers[id].bufferColour,
    attributes: attributes
  };
};

var BufferBarContainer = function (_React$Component) {
  _inherits(BufferBarContainer, _React$Component);

  function BufferBarContainer() {
    var _ref3;

    var _temp, _this, _ret;

    _classCallCheck(this, BufferBarContainer);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref3 = BufferBarContainer.__proto__ || Object.getPrototypeOf(BufferBarContainer)).call.apply(_ref3, [this].concat(args))), _this), _this.setCanvas = function (ref) {
      _this.canvas = ref;
    }, _this.clearBuffer = function () {
      _this.canvas.getContext('2d').clearRect(0, 0, _this.canvas.width, _this.canvas.height);
    }, _this.fillBufferPartially = function () {
      var modifier = _this.canvas.width / _this.props.duration;
      var context = _this.canvas.getContext('2d');

      _this.props.bufferedTimeRanges.forEach(function (bufferedTimeRange) {
        var startX = bufferedTimeRange.start * modifier;
        var endX = bufferedTimeRange.end * modifier;
        var width = endX - startX;

        context.fillStyle = _this.props.bufferColour;
        context.fillRect(startX, 0, width, _this.canvas.height);
      });
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(BufferBarContainer, [{
    key: 'componentDidUpdate',
    value: function componentDidUpdate(prevProps) {
      if (prevProps.bufferedTimeRanges !== this.props.bufferedTimeRanges) {
        if (this.props.bufferedTimeRanges.length === 0) {
          this.clearBuffer();
        }
        this.fillBufferPartially();
      }
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(_bufferBar2.default, { setCanvas: this.setCanvas, attributes: this.props.attributes });
    }
  }], [{
    key: 'propTypes',
    get: function get() {
      return {
        attributes: _propTypes2.default.object.isRequired,
        bufferedTimeRanges: _propTypes2.default.arrayOf(_propTypes2.default.shape({
          start: _propTypes2.default.number.isRequired,
          end: _propTypes2.default.number.isRequired
        })).isRequired,
        bufferColour: _propTypes2.default.string.isRequired,
        duration: _propTypes2.default.number.isRequired
      };
    }
  }]);

  return BufferBarContainer;
}(_react2.default.Component);

exports.default = (0, _reactJplayerUtils.connectWithId)(mapStateToProps)(BufferBarContainer);

/***/ }),
/* 70 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(0);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _constants = __webpack_require__(2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var CurrentTime = function CurrentTime(_ref) {
  var children = _ref.children,
      attributes = _objectWithoutProperties(_ref, ['children']);

  return _react2.default.createElement(
    'div',
    _extends({ className: _constants.classes.CURRENT_TIME }, attributes),
    children
  );
};

CurrentTime.propTypes = {
  children: _propTypes2.default.string.isRequired
};

exports.default = CurrentTime;

/***/ }),
/* 71 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _reactJplayerUtils = __webpack_require__(3);

var _currentTime = __webpack_require__(70);

var _currentTime2 = _interopRequireDefault(_currentTime);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var mapStateToProps = function mapStateToProps(_ref, _ref2) {
  var jPlayers = _ref.jPlayers;
  var id = _ref2.id,
      children = _ref2.children;
  return {
    children: children || jPlayers[id].currentTimeText
  };
};

exports.default = (0, _reactJplayerUtils.connectWithId)(mapStateToProps, {})(_currentTime2.default);

/***/ }),
/* 72 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(0);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _constants = __webpack_require__(2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var Download = function Download(_ref) {
  var free = _ref.free,
      url = _ref.url,
      children = _ref.children,
      attributes = _objectWithoutProperties(_ref, ['free', 'url', 'children']);

  return free ? _react2.default.createElement(
    'a',
    _extends({
      className: _constants.classes.DOWNLOAD, href: url,
      download: true, target: '_blank', rel: 'noopener noreferrer'
    }, attributes),
    children
  ) : null;
};

Download.propTypes = {
  children: _propTypes2.default.node.isRequired,
  url: _propTypes2.default.string.isRequired,
  free: _propTypes2.default.bool.isRequired
};

exports.default = Download;

/***/ }),
/* 73 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _reactJplayerUtils = __webpack_require__(3);

var _download = __webpack_require__(72);

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

exports.default = (0, _reactJplayerUtils.connectWithId)(mapStateToProps, {})(_download2.default);

/***/ }),
/* 74 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(0);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _constants = __webpack_require__(2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var Duration = function Duration(_ref) {
  var children = _ref.children,
      attributes = _objectWithoutProperties(_ref, ['children']);

  return children !== '' ? _react2.default.createElement(
    'div',
    _extends({ className: _constants.classes.DURATION }, attributes),
    children
  ) : null;
};

Duration.propTypes = {
  children: _propTypes2.default.string.isRequired
};

exports.default = Duration;

/***/ }),
/* 75 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _reactJplayerUtils = __webpack_require__(3);

var _duration = __webpack_require__(74);

var _duration2 = _interopRequireDefault(_duration);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var mapStateToProps = function mapStateToProps(_ref, _ref2) {
  var jPlayers = _ref.jPlayers;
  var id = _ref2.id,
      children = _ref2.children;
  return {
    children: children || jPlayers[id].durationText
  };
};

exports.default = (0, _reactJplayerUtils.connectWithId)(mapStateToProps, {})(_duration2.default);

/***/ }),
/* 76 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(0);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _constants = __webpack_require__(2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var FullScreen = function FullScreen(_ref) {
  var setFullScreen = _ref.setFullScreen,
      id = _ref.id,
      fullScreen = _ref.fullScreen,
      children = _ref.children,
      attributes = _objectWithoutProperties(_ref, ['setFullScreen', 'id', 'fullScreen', 'children']);

  return _react2.default.createElement(
    'button',
    _extends({
      className: _constants.classes.FULL_SCREEN,
      onClick: function onClick() {
        return setFullScreen(id, !fullScreen);
      }
    }, attributes),
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
/* 77 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _reactJplayerUtils = __webpack_require__(3);

var _actions = __webpack_require__(5);

var _fullScreen = __webpack_require__(76);

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
/* 78 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _reactMotion = __webpack_require__(29);

var _propTypes = __webpack_require__(0);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _constants = __webpack_require__(2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var motion = function motion(values, onMouseMove, attributes) {
  return _react2.default.createElement('div', _extends({
    className: _constants.classes.GUI, onMouseMove: onMouseMove,
    style: {
      opacity: values.opacity,
      display: values.opacity === 0 ? 'none' : ''
    }
  }, attributes));
};

var Gui = function Gui(_ref) {
  var fullScreen = _ref.fullScreen,
      guiFadeOut = _ref.guiFadeOut,
      onMouseMove = _ref.onMouseMove,
      attributes = _objectWithoutProperties(_ref, ['fullScreen', 'guiFadeOut', 'onMouseMove']);

  return _react2.default.createElement(
    _reactMotion.Motion,
    {
      defaultStyle: { opacity: 1 },
      style: { opacity: fullScreen ? (0, _reactMotion.spring)(guiFadeOut ? 0 : 1, [250]) : 1 }
    },
    function (values) {
      return motion(values, onMouseMove, attributes);
    }
  );
};

Gui.propTypes = {
  onMouseMove: _propTypes2.default.func.isRequired,
  children: _propTypes2.default.oneOfType([_propTypes2.default.arrayOf(_propTypes2.default.element), _propTypes2.default.element]).isRequired,
  guiFadeOut: _propTypes2.default.bool.isRequired,
  fullScreen: _propTypes2.default.bool.isRequired
};

exports.default = Gui;

/***/ }),
/* 79 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _reactJplayerUtils = __webpack_require__(3);

var _actions = __webpack_require__(5);

var _gui = __webpack_require__(78);

var _gui2 = _interopRequireDefault(_gui);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var mapStateToProps = function mapStateToProps(_ref, _ref2) {
  var jPlayers = _ref.jPlayers;
  var id = _ref2.id;
  return {
    fullScreen: jPlayers[id].fullScreen,
    paused: jPlayers[id].paused,
    guiFadeOut: jPlayers[id].guiFadeOut,
    guiFadeHoldTimeout: jPlayers[id].guiFadeHoldTimeout
  };
};

var mergeProps = function mergeProps(stateProps, _ref4, _ref3) {
  var dispatch = _ref4.dispatch;

  var id = _ref3.id,
      attributes = _objectWithoutProperties(_ref3, ['id']);

  return _extends({
    onMouseMove: function onMouseMove() {
      if (stateProps.fullScreen && !stateProps.paused) {
        dispatch((0, _actions.setOption)(id, 'guiFadeOut', false));
        clearTimeout(stateProps.guiFadeHoldTimeout);
      }
    },
    fullScreen: stateProps.fullScreen,
    guiFadeOut: stateProps.guiFadeOut
  }, attributes);
};

exports.default = (0, _reactJplayerUtils.connectWithId)(mapStateToProps, null, mergeProps)(_gui2.default);

/***/ }),
/* 80 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(0);

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var JPlayer = function JPlayer(_ref) {
  var setJPlayer = _ref.setJPlayer,
      children = _ref.children,
      attributes = _objectWithoutProperties(_ref, ['setJPlayer', 'children']);

  return _react2.default.createElement(
    'div',
    _extends({ ref: setJPlayer, draggable: false }, attributes),
    children
  );
};

JPlayer.defaultProps = {
  setJPlayer: null
};

JPlayer.propTypes = {
  setJPlayer: _propTypes2.default.func,
  children: _propTypes2.default.node.isRequired
};

exports.default = JPlayer;

/***/ }),
/* 81 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _screenfull = __webpack_require__(119);

var _screenfull2 = _interopRequireDefault(_screenfull);

var _classnames = __webpack_require__(32);

var _classnames2 = _interopRequireDefault(_classnames);

var _lodash = __webpack_require__(12);

var _lodash2 = _interopRequireDefault(_lodash);

var _reactJplayerUtils = __webpack_require__(3);

var _propTypes = __webpack_require__(0);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _formatPropTypes = __webpack_require__(27);

var _formatPropTypes2 = _interopRequireDefault(_formatPropTypes);

var _constants = __webpack_require__(2);

var _jPlayer = __webpack_require__(80);

var _jPlayer2 = _interopRequireDefault(_jPlayer);

var _actions = __webpack_require__(5);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var mapStateToProps = function mapStateToProps(_ref2, _ref) {
  var _extends2;

  var jPlayers = _ref2.jPlayers;

  var id = _ref.id,
      customStates = _ref.customStates,
      children = _ref.children,
      keyBindings = _ref.keyBindings,
      attributes = _objectWithoutProperties(_ref, ['id', 'customStates', 'children', 'keyBindings']);

  return {
    media: jPlayers[id].media,
    error: jPlayers[id].error,
    fullScreen: jPlayers[id].fullScreen,
    keyEnabled: jPlayers[id].keyEnabled,
    paused: jPlayers[id].paused,
    guiFadeHoldTimeout: jPlayers[id].guiFadeHoldTimeout,
    guiFadeHoldTime: jPlayers[id].guiFadeHoldTime,
    muted: jPlayers[id].muted,
    volume: jPlayers[id].volume,
    loop: jPlayers[id].loop,
    keyBindings: keyBindings,
    id: id,
    children: children,
    attributes: _extends({}, attributes, {
      className: (0, _classnames2.default)(attributes.className, _constants.classes.JPLAYER, _extends((_extends2 = {}, _defineProperty(_extends2, _constants.classes.states.AUDIO, !jPlayers[id].mediaSettings.video), _defineProperty(_extends2, _constants.classes.states.VIDEO, jPlayers[id].mediaSettings.video), _defineProperty(_extends2, _constants.classes.states.PLAYING, !jPlayers[id].paused), _defineProperty(_extends2, _constants.classes.states.IDLE, jPlayers[id].currentTime === 0), _defineProperty(_extends2, _constants.classes.states.FULL_SCREEN, jPlayers[id].fullScreen), _defineProperty(_extends2, _constants.classes.states.MUTED, jPlayers[id].muted), _defineProperty(_extends2, _constants.classes.states.VOLUME_LOW, !jPlayers[id].muted && jPlayers[id].volume < 0.5), _defineProperty(_extends2, _constants.classes.states.VOLUME_HIGH, !jPlayers[id].muted && jPlayers[id].volume >= 0.5), _defineProperty(_extends2, _constants.classes.states.SEEKING, jPlayers[id].seeking), _defineProperty(_extends2, _constants.classes.states.LOOPED, jPlayers[id].loop), _defineProperty(_extends2, _constants.classes.states.NO_BROWSER_SUPPORT, !jPlayers[id].mediaSettings.foundSupported), _defineProperty(_extends2, _constants.classes.states.NO_VOLUME_SUPPORT, !jPlayers[id].volumeSupported), _extends2), customStates))
    })
  };
};

var mergeProps = function mergeProps(stateProps, _ref3) {
  var dispatch = _ref3.dispatch;
  return _extends({}, stateProps, {
    dispatch: dispatch,
    keyBindings: (0, _lodash2.default)({}, {
      play: {
        key: 80, // p
        fn: function fn() {
          return stateProps.paused ? dispatch((0, _actions.play)(stateProps.id)) : dispatch((0, _actions.pause)(stateProps.id));
        }
      },
      fullScreen: {
        key: 70, // f
        fn: function fn() {
          return dispatch((0, _actions.setOption)(stateProps.id, 'fullScreen', !stateProps.fullScreen));
        }
      },
      mute: {
        key: 77, // m
        fn: function fn() {
          return dispatch((0, _actions.setMute)(stateProps.id, !stateProps.muted));
        }
      },
      volumeUp: {
        key: 190, // .
        fn: function fn() {
          dispatch((0, _actions.setVolume)(stateProps.id, stateProps.volume + 0.1));
        }
      },
      volumeDown: {
        key: 188, // ,
        fn: function fn() {
          return dispatch((0, _actions.setVolume)(stateProps.id, stateProps.volume - 0.1));
        }
      },
      loop: {
        key: 76, // l
        fn: function fn() {
          return dispatch((0, _actions.setOption)(stateProps.id, 'loop', !stateProps.loop));
        }
      }
    }, stateProps.keyBindings)
  });
};

var JPlayerContainer = function (_React$Component) {
  _inherits(JPlayerContainer, _React$Component);

  function JPlayerContainer() {
    var _ref4;

    var _temp, _this, _ret;

    _classCallCheck(this, JPlayerContainer);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref4 = JPlayerContainer.__proto__ || Object.getPrototypeOf(JPlayerContainer)).call.apply(_ref4, [this].concat(args))), _this), _this.onMouseMove = function (e) {
      if (_this.props.fullScreen) {
        if (_this.props.paused) {
          if ((0, _reactJplayerUtils.traverseParentsUntilClassName)(e.target, _constants.classes.GUI)) {
            return;
          }
        }
        _this.startGuiFadeOutTimer();
      }
    }, _this.setJPlayer = function (ref) {
      return _this.jPlayer = ref;
    }, _this.requestFullScreen = function () {
      if (_this.props.fullScreen) {
        if (_screenfull2.default.enabled) {
          _screenfull2.default.request(_this.jPlayer);
        }
        // Legacy browsers don't implement full screen api
        // Safari 5.1 doesn't hide the other elements even with fullscreen api
        document.body.style.visibility = 'hidden';
      }
    }, _this.exitFullScreen = function () {
      if (!_this.props.fullScreen) {
        if (_screenfull2.default.enabled) {
          _screenfull2.default.exit();
        }
        document.body.style.visibility = 'visible';
      }
    }, _this.startGuiFadeOutTimer = function () {
      if (_this.props.fullScreen && !_this.props.paused) {
        clearTimeout(_this.props.guiFadeHoldTimeout);
        _this.props.dispatch((0, _actions.setOption)(_this.props.id, 'guiFadeOut', false));
        _this.props.dispatch((0, _actions.setOption)(_this.props.id, 'guiFadeHoldTimeout', setTimeout(_this.startGuiFadeOut, _this.props.guiFadeHoldTime)));
      }
    }, _this.startGuiFadeOut = function () {
      if (_this.props.fullScreen && !_this.props.paused) {
        _this.props.dispatch((0, _actions.setOption)(_this.props.id, 'guiFadeOut', true));
      }
    }, _this.closeFullScreen = function () {
      if (!_screenfull2.default.isFullscreen) {
        _this.props.dispatch((0, _actions.setOption)(_this.props.id, 'fullScreen', false));
      }
    }, _this.logError = function (_ref5) {
      var error = _ref5.error;
      return console.error(error);
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(JPlayerContainer, [{
    key: 'componentWillMount',
    value: function componentWillMount() {
      if (_screenfull2.default.enabled) {
        document.addEventListener(_screenfull2.default.raw.fullscreenchange, this.closeFullScreen);
      }
      this.props.dispatch((0, _actions.setMedia)(this.props.id, this.props.media));
      this.requestFullScreen();
    }
  }, {
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      if (nextProps.error !== this.props.error) {
        this.logError(nextProps);
      }
    }
  }, {
    key: 'componentDidUpdate',
    value: function componentDidUpdate(prevProps) {
      if (prevProps.paused !== this.props.paused) {
        this.startGuiFadeOutTimer();
      }
      if (prevProps.fullScreen !== this.props.fullScreen) {
        this.requestFullScreen();
        this.exitFullScreen();
      }
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      if (_screenfull2.default.enabled) {
        document.removeEventListener(_screenfull2.default.raw.fullscreenchange, this.closeFullScreen);
      }
    }
    // eslint-disable-next-line no-console

  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        _jPlayer2.default,
        _extends({
          setJPlayer: this.setJPlayer, onMouseMove: this.onMouseMove
        }, _extends({ id: this.props.id }, this.props.attributes)),
        _react2.default.createElement(_reactJplayerUtils.KeyControl, { keyBindings: this.props.keyBindings }),
        this.props.children
      );
    }
  }], [{
    key: 'propTypes',
    get: function get() {
      return {
        attributes: _propTypes2.default.object,
        media: _propTypes2.default.shape({
          title: _propTypes2.default.string,
          artist: _propTypes2.default.string,
          sources: _propTypes2.default.shape(_formatPropTypes2.default).isRequired,
          poster: _propTypes2.default.string,
          free: _propTypes2.default.bool,
          id: _propTypes2.default.string
        }).isRequired,
        keyBindings: _propTypes2.default.object.isRequired,
        id: _propTypes2.default.string.isRequired,
        dispatch: _propTypes2.default.func.isRequired,
        error: _propTypes2.default.shape({
          context: _propTypes2.default.string,
          message: _propTypes2.default.string,
          hint: _propTypes2.default.string
        }),
        fullScreen: _propTypes2.default.bool.isRequired,
        children: _propTypes2.default.oneOfType([_propTypes2.default.arrayOf(_propTypes2.default.element), _propTypes2.default.element]).isRequired,
        paused: _propTypes2.default.bool.isRequired,
        guiFadeHoldTime: _propTypes2.default.number.isRequired,
        guiFadeHoldTimeout: _propTypes2.default.number
      };
    }
  }, {
    key: 'defaultProps',
    get: function get() {
      return {
        attributes: null,
        guiFadeHoldTimeout: null,
        error: null
      };
    }
  }]);

  return JPlayerContainer;
}(_react2.default.Component);

exports.default = (0, _reactJplayerUtils.connectWithId)(mapStateToProps, null, mergeProps)(JPlayerContainer);

/***/ }),
/* 82 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(0);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _constants = __webpack_require__(2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var Mute = function Mute(_ref) {
  var setMute = _ref.setMute,
      id = _ref.id,
      muted = _ref.muted,
      children = _ref.children,
      attributes = _objectWithoutProperties(_ref, ['setMute', 'id', 'muted', 'children']);

  return _react2.default.createElement(
    'button',
    _extends({ className: _constants.classes.MUTE, onClick: function onClick() {
        return setMute(id, !muted);
      } }, attributes),
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
/* 83 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _reactJplayerUtils = __webpack_require__(3);

var _actions = __webpack_require__(5);

var _mute = __webpack_require__(82);

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
/* 84 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _reactMotion = __webpack_require__(29);

var _propTypes = __webpack_require__(0);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _constants = __webpack_require__(2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var PlayBar = function PlayBar(_ref) {
  var currentPercentAbsolute = _ref.currentPercentAbsolute,
      currentPercentRelative = _ref.currentPercentRelative,
      smoothPlayBar = _ref.smoothPlayBar,
      attributes = _objectWithoutProperties(_ref, ['currentPercentAbsolute', 'currentPercentRelative', 'smoothPlayBar']);

  return _react2.default.createElement(
    _reactMotion.Motion,
    { style: { smoothWidth: (0, _reactMotion.spring)(currentPercentAbsolute, [250]) } },
    function (values) {
      return _react2.default.createElement('div', _extends({
        className: _constants.classes.PLAY_BAR,
        style: { width: smoothPlayBar ? values.smoothWidth + '%' : currentPercentRelative + '%' }
      }, attributes));
    }
  );
};

PlayBar.propTypes = {
  currentPercentRelative: _propTypes2.default.number.isRequired,
  currentPercentAbsolute: _propTypes2.default.number.isRequired,
  smoothPlayBar: _propTypes2.default.bool.isRequired
};

exports.default = PlayBar;

/***/ }),
/* 85 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _reactJplayerUtils = __webpack_require__(3);

var _playBar = __webpack_require__(84);

var _playBar2 = _interopRequireDefault(_playBar);

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

exports.default = (0, _reactJplayerUtils.connectWithId)(mapStateToProps, {})(_playBar2.default);

/***/ }),
/* 86 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(0);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _constants = __webpack_require__(2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var Play = function Play(_ref) {
  var play = _ref.play,
      id = _ref.id,
      paused = _ref.paused,
      children = _ref.children,
      attributes = _objectWithoutProperties(_ref, ['play', 'id', 'paused', 'children']);

  return _react2.default.createElement(
    'button',
    _extends({ className: _constants.classes.PLAY, onClick: function onClick() {
        return play(id, paused);
      } }, attributes),
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
/* 87 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _reactJplayerUtils = __webpack_require__(3);

var _actions = __webpack_require__(5);

var _play2 = __webpack_require__(86);

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
      return paused ? dispatch((0, _actions.play)(id)) : dispatch((0, _actions.pause)(id));
    }
  };
};

exports.default = (0, _reactJplayerUtils.connectWithId)(mapStateToProps, mapDispatchToProps)(_play3.default);

/***/ }),
/* 88 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(0);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _constants = __webpack_require__(2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var PlaybackRateBarValue = function PlaybackRateBarValue(_ref) {
  var playbackRate = _ref.playbackRate,
      minPlaybackRate = _ref.minPlaybackRate,
      maxPlaybackRate = _ref.maxPlaybackRate,
      verticalPlaybackRate = _ref.verticalPlaybackRate,
      attributes = _ref.attributes;

  var style = function style() {
    var ratio = (playbackRate - minPlaybackRate) / (maxPlaybackRate - minPlaybackRate);
    var playbackRateBarPercentage = ratio * 100 + '%';

    return {
      width: !verticalPlaybackRate ? playbackRateBarPercentage : null,
      height: verticalPlaybackRate ? playbackRateBarPercentage : null
    };
  };
  return _react2.default.createElement('div', _extends({
    className: _constants.classes.PLAYBACK_RATE_BAR_VALUE, style: style()
  }, attributes));
};

PlaybackRateBarValue.propTypes = {
  attributes: _propTypes2.default.object.isRequired,
  verticalPlaybackRate: _propTypes2.default.bool.isRequired,
  minPlaybackRate: _propTypes2.default.number.isRequired,
  maxPlaybackRate: _propTypes2.default.number.isRequired,
  playbackRate: _propTypes2.default.number.isRequired
};

exports.default = PlaybackRateBarValue;

/***/ }),
/* 89 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(0);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _constants = __webpack_require__(2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var PlaybackRateBar = function PlaybackRateBar(_ref) {
  var onClick = _ref.onClick,
      onMouseDown = _ref.onMouseDown,
      onTouchStart = _ref.onTouchStart,
      setBar = _ref.setBar,
      children = _ref.children,
      attributes = _objectWithoutProperties(_ref, ['onClick', 'onMouseDown', 'onTouchStart', 'setBar', 'children']);

  return _react2.default.createElement(
    'div',
    _extends({
      ref: setBar, className: _constants.classes.PLAYBACK_RATE_BAR,
      onClick: onClick, onMouseDown: onMouseDown,
      onTouchStart: onTouchStart }, attributes),
    children
  );
};

PlaybackRateBar.defaultProps = {
  onClick: null,
  onMouseDown: null,
  onTouchStart: null,
  setBar: null
};

PlaybackRateBar.propTypes = {
  onClick: _propTypes2.default.func,
  onMouseDown: _propTypes2.default.func,
  onTouchStart: _propTypes2.default.func,
  setBar: _propTypes2.default.func,
  children: _propTypes2.default.node.isRequired
};

exports.default = PlaybackRateBar;

/***/ }),
/* 90 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(0);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactJplayerUtils = __webpack_require__(3);

var _actions = __webpack_require__(5);

var _bar = __webpack_require__(13);

var _bar2 = _interopRequireDefault(_bar);

var _playbackRateBar = __webpack_require__(89);

var _playbackRateBar2 = _interopRequireDefault(_playbackRateBar);

var _playbackRateBarValueContainer = __webpack_require__(21);

var _playbackRateBarValueContainer2 = _interopRequireDefault(_playbackRateBarValueContainer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var mapStateToProps = function mapStateToProps(_ref2, _ref) {
  var jPlayers = _ref2.jPlayers;

  var id = _ref.id,
      children = _ref.children,
      attributes = _objectWithoutProperties(_ref, ['id', 'children']);

  return {
    movePlaybackRate: function movePlaybackRate(bar, dispatch, e) {
      var _jPlayers$id = jPlayers[id],
          verticalPlaybackRate = _jPlayers$id.verticalPlaybackRate,
          minPlaybackRate = _jPlayers$id.minPlaybackRate,
          maxPlaybackRate = _jPlayers$id.maxPlaybackRate;

      var offset = (0, _reactJplayerUtils.getElementOffset)(bar);
      var w = bar.getBoundingClientRect().width;
      var h = bar.getBoundingClientRect().height;
      var x = e.pageX - offset.left;
      var y = h - e.pageY + offset.top;
      var ratio = void 0;

      if (verticalPlaybackRate) {
        ratio = y / h;
      } else {
        ratio = x / w;
      }

      var playbackRateValue = ratio * (maxPlaybackRate - minPlaybackRate) + minPlaybackRate;

      dispatch((0, _actions.setOption)(id, 'playbackRate', playbackRateValue));
    },
    children: children,
    attributes: attributes
  };
};

var mergeProps = function mergeProps(_ref3, _ref4) {
  var movePlaybackRate = _ref3.movePlaybackRate,
      children = _ref3.children,
      attributes = _ref3.attributes;
  var dispatch = _ref4.dispatch;
  return {
    onClick: function onClick(bar, e) {
      return movePlaybackRate(bar, dispatch, e);
    },
    onTouchMove: function onTouchMove(bar, e) {
      // Stop page scrolling
      e.preventDefault();

      movePlaybackRate(bar, dispatch, e.touches[0]);
    },
    children: children,
    attributes: attributes
  };
};

var PlaybackRateBarContainer = function PlaybackRateBarContainer(_ref5) {
  var onClick = _ref5.onClick,
      onTouchMove = _ref5.onTouchMove,
      children = _ref5.children,
      attributes = _ref5.attributes;
  return _react2.default.createElement(
    _bar2.default,
    {
      clickMoveBar: onClick,
      touchMoveBar: onTouchMove
    },
    _react2.default.createElement(
      _playbackRateBar2.default,
      attributes,
      children
    )
  );
};

PlaybackRateBarContainer.defaultProps = {
  children: _react2.default.createElement(_playbackRateBarValueContainer2.default, null)
};

PlaybackRateBarContainer.propTypes = {
  attributes: _propTypes2.default.object.isRequired,
  children: _propTypes2.default.node,
  onClick: _propTypes2.default.func.isRequired,
  onTouchMove: _propTypes2.default.func.isRequired
};

exports.default = (0, _reactJplayerUtils.connectWithId)(mapStateToProps, null, mergeProps)(PlaybackRateBarContainer);

/***/ }),
/* 91 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _reactJplayerUtils = __webpack_require__(3);

var _poster = __webpack_require__(22);

var _poster2 = _interopRequireDefault(_poster);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var mapStateToProps = function mapStateToProps(_ref, _ref2) {
  var jPlayers = _ref.jPlayers;
  var id = _ref2.id;
  return {
    src: jPlayers[id].media.poster
  };
};

exports.default = (0, _reactJplayerUtils.connectWithId)(mapStateToProps, {})(_poster2.default);

/***/ }),
/* 92 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _reactJplayerUtils = __webpack_require__(3);

var _actions = __webpack_require__(5);

var _repeat = __webpack_require__(23);

var _repeat2 = _interopRequireDefault(_repeat);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var mapStateToProps = function mapStateToProps(_ref, _ref2) {
  var jPlayers = _ref.jPlayers;
  var id = _ref2.id;
  return {
    loop: jPlayers[id].loop
  };
};

var mapDispatchToProps = {
  setLoop: function setLoop(id, loop) {
    return (0, _actions.setOption)(id, 'loop', !loop);
  }
};

exports.default = (0, _reactJplayerUtils.connectWithId)(mapStateToProps, mapDispatchToProps)(_repeat2.default);

/***/ }),
/* 93 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(0);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _constants = __webpack_require__(2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var SeekBar = function SeekBar(_ref) {
  var setBar = _ref.setBar,
      onClick = _ref.onClick,
      onMouseDown = _ref.onMouseDown,
      onTouchStart = _ref.onTouchStart,
      seekPercent = _ref.seekPercent,
      attributes = _objectWithoutProperties(_ref, ['setBar', 'onClick', 'onMouseDown', 'onTouchStart', 'seekPercent']);

  return _react2.default.createElement('div', _extends({
    ref: setBar, className: _constants.classes.SEEK_BAR,
    style: { width: seekPercent + '%' }, onClick: onClick,
    onTouchStart: onTouchStart, onMouseDown: onMouseDown
  }, attributes));
};

SeekBar.defaultProps = {
  setBar: null,
  onClick: null,
  onMouseDown: null,
  onTouchStart: null
};

SeekBar.propTypes = {
  seekPercent: _propTypes2.default.number.isRequired,
  setBar: _propTypes2.default.func,
  onClick: _propTypes2.default.func,
  onMouseDown: _propTypes2.default.func,
  onTouchStart: _propTypes2.default.func,
  children: _propTypes2.default.oneOfType([_propTypes2.default.arrayOf(_propTypes2.default.element), _propTypes2.default.element]).isRequired
};

exports.default = SeekBar;

/***/ }),
/* 94 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(0);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactJplayerUtils = __webpack_require__(3);

var _actions = __webpack_require__(5);

var _bar = __webpack_require__(13);

var _bar2 = _interopRequireDefault(_bar);

var _seekBar = __webpack_require__(93);

var _seekBar2 = _interopRequireDefault(_seekBar);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var mapStateToProps = function mapStateToProps(_ref2, _ref) {
  var jPlayers = _ref2.jPlayers;

  var id = _ref.id,
      children = _ref.children,
      attributes = _objectWithoutProperties(_ref, ['id', 'children']);

  return {
    seekPercent: jPlayers[id].seekPercent,
    movePlayHead: function movePlayHead(bar, dispatch, e) {
      var offset = (0, _reactJplayerUtils.getElementOffset)(bar);
      var x = e.pageX - offset.left;
      var w = bar.getBoundingClientRect().width;
      var percentage = 100 * (x / w);

      dispatch((0, _actions.setPlayHead)(id, percentage));
    },
    children: children,
    attributes: attributes
  };
};

var mergeProps = function mergeProps(_ref3, _ref4) {
  var movePlayHead = _ref3.movePlayHead,
      seekPercent = _ref3.seekPercent,
      children = _ref3.children,
      attributes = _ref3.attributes;
  var dispatch = _ref4.dispatch;
  return {
    onClick: function onClick(bar, e) {
      return movePlayHead(bar, dispatch, e);
    },
    onTouchMove: function onTouchMove(bar, e) {
      // Stop page scrolling
      e.preventDefault();

      movePlayHead(bar, dispatch, e.touches[0]);
    },
    seekPercent: seekPercent,
    children: children,
    attributes: attributes
  };
};

var SeekBarContainer = function SeekBarContainer(_ref5) {
  var onClick = _ref5.onClick,
      onTouchMove = _ref5.onTouchMove,
      seekPercent = _ref5.seekPercent,
      children = _ref5.children,
      attributes = _ref5.attributes;
  return _react2.default.createElement(
    _bar2.default,
    { clickMoveBar: onClick, touchMoveBar: onTouchMove },
    _react2.default.createElement(
      _seekBar2.default,
      _extends({ seekPercent: seekPercent }, attributes),
      children
    )
  );
};

SeekBarContainer.defaultProps = {
  children: null
};

SeekBarContainer.propTypes = {
  children: _propTypes2.default.node,
  attributes: _propTypes2.default.object.isRequired,
  onClick: _propTypes2.default.func.isRequired,
  onTouchMove: _propTypes2.default.func.isRequired,
  seekPercent: _propTypes2.default.number.isRequired
};

exports.default = (0, _reactJplayerUtils.connectWithId)(mapStateToProps, null, mergeProps)(SeekBarContainer);

/***/ }),
/* 95 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _reactJplayerUtils = __webpack_require__(3);

var _title = __webpack_require__(24);

var _title2 = _interopRequireDefault(_title);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var mapStateToProps = function mapStateToProps(_ref2, _ref) {
  var jPlayers = _ref2.jPlayers;

  var id = _ref.id,
      children = _ref.children,
      attributes = _objectWithoutProperties(_ref, ['id', 'children']);

  return {
    children: children || (0, _reactJplayerUtils.formatArtistAndTitle)(jPlayers[id].media.artist, jPlayers[id].media.title),
    attributes: attributes
  };
};

exports.default = (0, _reactJplayerUtils.connectWithId)(mapStateToProps)(_title2.default);

/***/ }),
/* 96 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(0);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _mediaContainer = __webpack_require__(20);

var _mediaContainer2 = _interopRequireDefault(_mediaContainer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var Video = function Video(_ref) {
  var require = _ref.require,
      events = _ref.events,
      children = _ref.children,
      attributes = _objectWithoutProperties(_ref, ['require', 'events', 'children']);

  return require ? _react2.default.createElement(
    _mediaContainer2.default,
    events,
    _react2.default.createElement(
      'video',
      attributes,
      children
    )
  ) : null;
};

Video.defaultProps = {
  events: null,
  children: null
};

Video.propTypes = {
  children: _propTypes2.default.node,
  require: _propTypes2.default.bool.isRequired,
  events: _propTypes2.default.shape({
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

exports.default = Video;

/***/ }),
/* 97 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _reactJplayerUtils = __webpack_require__(3);

var _video = __webpack_require__(96);

var _video2 = _interopRequireDefault(_video);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var mapStateToProps = function mapStateToProps(_ref, _ref2) {
  var jPlayers = _ref.jPlayers;
  var id = _ref2.id;
  return {
    require: jPlayers[id].mediaSettings.video
  };
};

exports.default = (0, _reactJplayerUtils.connectWithId)(mapStateToProps, {})(_video2.default);

/***/ }),
/* 98 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(0);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _constants = __webpack_require__(2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var VolumeBarValue = function VolumeBarValue(_ref) {
  var muted = _ref.muted,
      volume = _ref.volume,
      verticalVolume = _ref.verticalVolume,
      attributes = _ref.attributes;

  var style = function style() {
    var volumeBarValuePercentage = (muted ? 0 : volume * 100) + '%';

    return {
      width: !verticalVolume ? volumeBarValuePercentage : null,
      height: verticalVolume ? volumeBarValuePercentage : null
    };
  };
  return _react2.default.createElement('div', _extends({ className: _constants.classes.VOLUME_BAR_VALUE, style: style() }, attributes));
};

VolumeBarValue.defaultProps = {
  verticalVolume: _constants.defaultOptions.verticalVolume
};

VolumeBarValue.propTypes = {
  attributes: _propTypes2.default.object.isRequired,
  muted: _propTypes2.default.bool.isRequired,
  volume: _propTypes2.default.number.isRequired,
  verticalVolume: _propTypes2.default.bool
};

exports.default = VolumeBarValue;

/***/ }),
/* 99 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(0);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _constants = __webpack_require__(2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var VolumeBar = function VolumeBar(_ref) {
  var setBar = _ref.setBar,
      onClick = _ref.onClick,
      onMouseDown = _ref.onMouseDown,
      onTouchStart = _ref.onTouchStart,
      attributes = _objectWithoutProperties(_ref, ['setBar', 'onClick', 'onMouseDown', 'onTouchStart']);

  return _react2.default.createElement('div', _extends({
    ref: setBar, className: _constants.classes.VOLUME_BAR,
    onClick: onClick, onMouseDown: onMouseDown, onTouchStart: onTouchStart
  }, attributes));
};

VolumeBar.defaultProps = {
  onClick: null,
  setBar: null,
  onMouseDown: null,
  onTouchStart: null
};

VolumeBar.propTypes = {
  onClick: _propTypes2.default.func,
  onMouseDown: _propTypes2.default.func,
  onTouchStart: _propTypes2.default.func,
  setBar: _propTypes2.default.func,
  children: _propTypes2.default.node.isRequired
};

exports.default = VolumeBar;

/***/ }),
/* 100 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(0);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactJplayerUtils = __webpack_require__(3);

var _actions = __webpack_require__(5);

var _bar = __webpack_require__(13);

var _bar2 = _interopRequireDefault(_bar);

var _volumeBar = __webpack_require__(99);

var _volumeBar2 = _interopRequireDefault(_volumeBar);

var _volumeBarValueContainer = __webpack_require__(25);

var _volumeBarValueContainer2 = _interopRequireDefault(_volumeBarValueContainer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var mapStateToProps = function mapStateToProps(_ref2, _ref) {
  var jPlayers = _ref2.jPlayers;

  var id = _ref.id,
      children = _ref.children,
      attributes = _objectWithoutProperties(_ref, ['id', 'children']);

  return {
    moveVolumeBar: function moveVolumeBar(bar, dispatch, e) {
      var verticalVolume = jPlayers[id].verticalVolume;

      var offset = (0, _reactJplayerUtils.getElementOffset)(bar);
      var w = bar.getBoundingClientRect().width;
      var h = bar.getBoundingClientRect().height;
      var y = h - e.pageY + offset.top;
      var x = e.pageX - offset.left;

      if (verticalVolume) {
        dispatch((0, _actions.setVolume)(id, y / h));
      } else {
        dispatch((0, _actions.setVolume)(id, x / w));
      }
    },
    children: children,
    attributes: attributes
  };
};

var mergeProps = function mergeProps(_ref3, _ref4) {
  var moveVolumeBar = _ref3.moveVolumeBar,
      children = _ref3.children,
      attributes = _ref3.attributes;
  var dispatch = _ref4.dispatch;
  return {
    onClick: function onClick(bar, e) {
      return moveVolumeBar(bar, dispatch, e);
    },
    onTouchMove: function onTouchMove(bar, e) {
      // Stop page scrolling
      e.preventDefault();

      moveVolumeBar(bar, dispatch, e.touches[0]);
    },
    children: children,
    attributes: attributes
  };
};

var VolumeBarContainer = function VolumeBarContainer(_ref5) {
  var onClick = _ref5.onClick,
      onTouchMove = _ref5.onTouchMove,
      children = _ref5.children,
      attributes = _ref5.attributes;
  return _react2.default.createElement(
    _bar2.default,
    { clickMoveBar: onClick, touchMoveBar: onTouchMove },
    _react2.default.createElement(
      _volumeBar2.default,
      attributes,
      children
    )
  );
};

VolumeBarContainer.defaultProps = {
  children: _react2.default.createElement(_volumeBarValueContainer2.default, null)
};

VolumeBarContainer.propTypes = {
  attributes: _propTypes2.default.object.isRequired,
  children: _propTypes2.default.node,
  onClick: _propTypes2.default.func.isRequired,
  onTouchMove: _propTypes2.default.func.isRequired
};

exports.default = (0, _reactJplayerUtils.connectWithId)(mapStateToProps, null, mergeProps)(VolumeBarContainer);

/***/ }),
/* 101 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _reactRedux = __webpack_require__(8);

var _reactJplayerUtils = __webpack_require__(3);

var _actions = __webpack_require__(5);

var actions = _interopRequireWildcard(_actions);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

var Connect = function Connect(jPlayer, options) {
  var ConnectedPlayer = (0, _reactRedux.connect)(function (state) {
    return state;
  }, _extends({}, actions))(jPlayer);

  return (0, _reactJplayerUtils.connect)(jPlayer, { options: options }, ConnectedPlayer);
};

exports.default = Connect;

/***/ }),
/* 102 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _reactJplayerUtils = __webpack_require__(3);

var _constants = __webpack_require__(2);

exports.default = function (connectedJPlayers) {
  var jPlayers = (0, _reactJplayerUtils.initialState)(connectedJPlayers, _extends({}, _constants.defaultStatus, _constants.defaultOptions), 'options');

  return jPlayers;
};

/***/ }),
/* 103 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _shortid = __webpack_require__(33);

var _shortid2 = _interopRequireDefault(_shortid);

var _reactJplayerUtils = __webpack_require__(3);

var _constants = __webpack_require__(2);

var _urlNotSetError = __webpack_require__(105);

var _urlNotSetError2 = _interopRequireDefault(_urlNotSetError);

var _noFormatSupportedError = __webpack_require__(104);

var _noFormatSupportedError2 = _interopRequireDefault(_noFormatSupportedError);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var updateFormats = function updateFormats(jPlayer, media) {
  var newMediaSettings = _extends({}, jPlayer.mediaSettings);
  var newFormats = [];

  Object.keys(media.sources).forEach(function (supplied) {
    var canPlayType = void 0;

    try {
      // Some legacy browsers don't have canPlayType property
      canPlayType = document.createElement(_constants.formats[supplied].MEDIA).canPlayType(_constants.formats[supplied].CODEC);
    } catch (error) {
      canPlayType = '';
    }

    newFormats.push({
      supplied: supplied,
      supported: canPlayType
    });
  });

  newMediaSettings.formats = newFormats;

  return (0, _reactJplayerUtils.updateObject)(jPlayer, {
    mediaSettings: newMediaSettings
  });
};

var clearMedia = function clearMedia(jPlayer) {
  return (0, _reactJplayerUtils.updateObject)(jPlayer, _extends({}, _constants.defaultStatus, {
    media: _constants.defaultOptions.media
  }));
};

var setMedia = function setMedia(jPlayer, _ref) {
  var _ref$media = _ref.media,
      media = _ref$media === undefined ? { sources: [] } : _ref$media;

  var newJPlayer = _extends({}, clearMedia(jPlayer), {
    mediaSettings: _constants.defaultStatus.mediaSettings
  });

  newJPlayer = updateFormats(newJPlayer, media);

  newJPlayer.mediaSettings.formats.forEach(function (format) {
    if (format.supported && !newJPlayer.mediaSettings.foundSupported) {
      newJPlayer.mediaSettings.video = _constants.formats[format.supplied].MEDIA === 'video';
      newJPlayer.src = media.sources[format.supplied];
      newJPlayer.paused = true;
      newJPlayer.mediaSettings.foundSupported = true;
    }
  });

  if (!newJPlayer.mediaSettings.foundSupported) {
    newJPlayer.error = (0, _noFormatSupportedError2.default)('{ media.sources: \'' + Object.keys(media.sources).join(', ') + '\' }');
  }
  newJPlayer.media = (0, _reactJplayerUtils.updateObject)(_constants.defaultOptions.media, _extends({}, media, {
    id: _shortid2.default.generate()
  }));

  return newJPlayer;
};

var play = function play(jPlayer, _ref2) {
  var time = _ref2.time;

  if (jPlayer.src) {
    return (0, _reactJplayerUtils.updateObject)(jPlayer, {
      paused: false,
      newTime: !isNaN(time) ? time : jPlayer.newTime
    });
  }
  return (0, _reactJplayerUtils.updateObject)(jPlayer, {
    error: (0, _urlNotSetError2.default)(play.name)
  });
};

var pause = function pause(jPlayer, _ref3) {
  var time = _ref3.time;

  if (jPlayer.src) {
    return (0, _reactJplayerUtils.updateObject)(jPlayer, {
      paused: true,
      newTime: !isNaN(time) ? time : jPlayer.newTime
    });
  }
  return (0, _reactJplayerUtils.updateObject)(jPlayer, {
    error: (0, _urlNotSetError2.default)(pause.name)
  });
};

var setPlayHead = function setPlayHead(jPlayer, _ref4) {
  var percent = _ref4.percent;

  var limitedPercent = (0, _reactJplayerUtils.limitValue)(percent, 0, 100);

  if (jPlayer.src) {
    return (0, _reactJplayerUtils.updateObject)(jPlayer, {
      playHeadPercent: limitedPercent
    });
  }
  return (0, _reactJplayerUtils.updateObject)(jPlayer, {
    error: (0, _urlNotSetError2.default)(setPlayHead.name)
  });
};

var setVolume = function setVolume(jPlayer, _ref5) {
  var volume = _ref5.volume;
  return (0, _reactJplayerUtils.updateObject)(jPlayer, {
    volume: (0, _reactJplayerUtils.limitValue)(volume, 0, 1),
    muted: volume <= 0
  });
};

var setMute = function setMute(jPlayer, _ref6) {
  var mute = _ref6.mute;
  return (0, _reactJplayerUtils.updateObject)(jPlayer, {
    muted: mute
  });
};

var focus = function focus(jPlayer, _ref7) {
  var id = _ref7.id;

  var newJPlayer = _extends({}, jPlayer);
  var firstKeyEnabledPlayer = Object.keys(newJPlayer).filter(function (key) {
    return newJPlayer[key].keyEnabled;
  }).shift();

  if (newJPlayer[id].keyEnabled) {
    Object.keys(newJPlayer).forEach(function (key) {
      if (key === id) {
        newJPlayer[key] = (0, _reactJplayerUtils.updateObject)(newJPlayer[key], { focused: true });
      } else {
        newJPlayer[key] = (0, _reactJplayerUtils.updateObject)(newJPlayer[key], { focused: false });
      }
    });
  } else if (newJPlayer[firstKeyEnabledPlayer] !== undefined) {
    var focusedPlayer = (0, _reactJplayerUtils.updateObject)(newJPlayer[firstKeyEnabledPlayer], { focused: true });
    return (0, _reactJplayerUtils.updateObject)(newJPlayer, _defineProperty({}, firstKeyEnabledPlayer, focusedPlayer));
  }
  return newJPlayer;
};

var updatePlayer = function updatePlayer(jPlayer, action) {
  switch (action.type) {
    case _constants.actionNames.SET_OPTION:
      switch (action.key) {
        case 'media':
          {
            var media = action.value;
            if (Object.keys(media).some(function (v) {
              return v;
            })) {
              return setMedia(jPlayer, { media: media });
            }
            return clearMedia(jPlayer);
          }
        case 'playHeadPercent':
          return setPlayHead(jPlayer, { percent: action.value });
        case 'volume':
          return setVolume(jPlayer, { volume: action.value });
        case 'muted':
          return setMute(jPlayer, { mute: action.value });
        default:
          return (0, _reactJplayerUtils.updateObject)(jPlayer, _defineProperty({}, action.key, action.value));
      }
    case _constants.actionNames.SET_MEDIA:
      return setMedia(jPlayer, action);
    case _constants.actionNames.CLEAR_MEDIA:
      return clearMedia(jPlayer);
    case _constants.actionNames.PLAY:
      return play(jPlayer, action);
    case _constants.actionNames.PAUSE:
      return pause(jPlayer, action);
    case _constants.actionNames.PLAY_HEAD:
      return setPlayHead(jPlayer, action);
    case _constants.actionNames.VOLUME:
      return setVolume(jPlayer, action);
    case _constants.actionNames.MUTE:
      return setMute(jPlayer, action);
    default:
      return null;
  }
};

var jPlayerReducer = function jPlayerReducer(state, action) {
  var newState = _extends({}, state);
  var jPlayer = updatePlayer(newState[action.id], action);

  if (jPlayer !== null) {
    newState = (0, _reactJplayerUtils.updateObject)(newState, _defineProperty({}, action.id, jPlayer));

    return jPlayerReducer(newState, {
      type: _constants.actionNames.FOCUS,
      id: action.id
    });
  }

  if (action.type === _constants.actionNames.FOCUS) {
    return (0, _reactJplayerUtils.updateObject)(newState, focus(newState, action));
  }
  return newState;
};

exports.default = jPlayerReducer;

/***/ }),
/* 104 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _constants = __webpack_require__(2);

exports.default = function (context) {
  return {
    context: context,
    message: _constants.errors.FORMAT_NO_SUPPORT,
    hint: _constants.hints.FORMAT_NO_SUPPORT
  };
};

/***/ }),
/* 105 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _constants = __webpack_require__(2);

exports.default = function (context) {
  return {
    context: context,
    message: _constants.errors.URL_NOT_SET,
    hint: _constants.hints.URL_NOT_SET
  };
};

/***/ }),
/* 106 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _constants = __webpack_require__(2);

exports.default = function (context) {
  return {
    context: context,
    message: _constants.errors.URL_NO_SUPPORT,
    hint: _constants.hints.URL_NO_SUPPORT
  };
};

/***/ }),
/* 107 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 */



var _assign = __webpack_require__(112);

var emptyObject = __webpack_require__(109);
var _invariant = __webpack_require__(110);

if (process.env.NODE_ENV !== 'production') {
  var warning = __webpack_require__(111);
}

var MIXINS_KEY = 'mixins';

// Helper function to allow the creation of anonymous functions which do not
// have .name set to the name of the variable being assigned to.
function identity(fn) {
  return fn;
}

var ReactPropTypeLocationNames;
if (process.env.NODE_ENV !== 'production') {
  ReactPropTypeLocationNames = {
    prop: 'prop',
    context: 'context',
    childContext: 'child context',
  };
} else {
  ReactPropTypeLocationNames = {};
}

function factory(ReactComponent, isValidElement, ReactNoopUpdateQueue) {
  /**
   * Policies that describe methods in `ReactClassInterface`.
   */


  var injectedMixins = [];

  /**
   * Composite components are higher-level components that compose other composite
   * or host components.
   *
   * To create a new type of `ReactClass`, pass a specification of
   * your new class to `React.createClass`. The only requirement of your class
   * specification is that you implement a `render` method.
   *
   *   var MyComponent = React.createClass({
   *     render: function() {
   *       return <div>Hello World</div>;
   *     }
   *   });
   *
   * The class specification supports a specific protocol of methods that have
   * special meaning (e.g. `render`). See `ReactClassInterface` for
   * more the comprehensive protocol. Any other properties and methods in the
   * class specification will be available on the prototype.
   *
   * @interface ReactClassInterface
   * @internal
   */
  var ReactClassInterface = {

    /**
     * An array of Mixin objects to include when defining your component.
     *
     * @type {array}
     * @optional
     */
    mixins: 'DEFINE_MANY',

    /**
     * An object containing properties and methods that should be defined on
     * the component's constructor instead of its prototype (static methods).
     *
     * @type {object}
     * @optional
     */
    statics: 'DEFINE_MANY',

    /**
     * Definition of prop types for this component.
     *
     * @type {object}
     * @optional
     */
    propTypes: 'DEFINE_MANY',

    /**
     * Definition of context types for this component.
     *
     * @type {object}
     * @optional
     */
    contextTypes: 'DEFINE_MANY',

    /**
     * Definition of context types this component sets for its children.
     *
     * @type {object}
     * @optional
     */
    childContextTypes: 'DEFINE_MANY',

    // ==== Definition methods ====

    /**
     * Invoked when the component is mounted. Values in the mapping will be set on
     * `this.props` if that prop is not specified (i.e. using an `in` check).
     *
     * This method is invoked before `getInitialState` and therefore cannot rely
     * on `this.state` or use `this.setState`.
     *
     * @return {object}
     * @optional
     */
    getDefaultProps: 'DEFINE_MANY_MERGED',

    /**
     * Invoked once before the component is mounted. The return value will be used
     * as the initial value of `this.state`.
     *
     *   getInitialState: function() {
     *     return {
     *       isOn: false,
     *       fooBaz: new BazFoo()
     *     }
     *   }
     *
     * @return {object}
     * @optional
     */
    getInitialState: 'DEFINE_MANY_MERGED',

    /**
     * @return {object}
     * @optional
     */
    getChildContext: 'DEFINE_MANY_MERGED',

    /**
     * Uses props from `this.props` and state from `this.state` to render the
     * structure of the component.
     *
     * No guarantees are made about when or how often this method is invoked, so
     * it must not have side effects.
     *
     *   render: function() {
     *     var name = this.props.name;
     *     return <div>Hello, {name}!</div>;
     *   }
     *
     * @return {ReactComponent}
     * @nosideeffects
     * @required
     */
    render: 'DEFINE_ONCE',

    // ==== Delegate methods ====

    /**
     * Invoked when the component is initially created and about to be mounted.
     * This may have side effects, but any external subscriptions or data created
     * by this method must be cleaned up in `componentWillUnmount`.
     *
     * @optional
     */
    componentWillMount: 'DEFINE_MANY',

    /**
     * Invoked when the component has been mounted and has a DOM representation.
     * However, there is no guarantee that the DOM node is in the document.
     *
     * Use this as an opportunity to operate on the DOM when the component has
     * been mounted (initialized and rendered) for the first time.
     *
     * @param {DOMElement} rootNode DOM element representing the component.
     * @optional
     */
    componentDidMount: 'DEFINE_MANY',

    /**
     * Invoked before the component receives new props.
     *
     * Use this as an opportunity to react to a prop transition by updating the
     * state using `this.setState`. Current props are accessed via `this.props`.
     *
     *   componentWillReceiveProps: function(nextProps, nextContext) {
     *     this.setState({
     *       likesIncreasing: nextProps.likeCount > this.props.likeCount
     *     });
     *   }
     *
     * NOTE: There is no equivalent `componentWillReceiveState`. An incoming prop
     * transition may cause a state change, but the opposite is not true. If you
     * need it, you are probably looking for `componentWillUpdate`.
     *
     * @param {object} nextProps
     * @optional
     */
    componentWillReceiveProps: 'DEFINE_MANY',

    /**
     * Invoked while deciding if the component should be updated as a result of
     * receiving new props, state and/or context.
     *
     * Use this as an opportunity to `return false` when you're certain that the
     * transition to the new props/state/context will not require a component
     * update.
     *
     *   shouldComponentUpdate: function(nextProps, nextState, nextContext) {
     *     return !equal(nextProps, this.props) ||
     *       !equal(nextState, this.state) ||
     *       !equal(nextContext, this.context);
     *   }
     *
     * @param {object} nextProps
     * @param {?object} nextState
     * @param {?object} nextContext
     * @return {boolean} True if the component should update.
     * @optional
     */
    shouldComponentUpdate: 'DEFINE_ONCE',

    /**
     * Invoked when the component is about to update due to a transition from
     * `this.props`, `this.state` and `this.context` to `nextProps`, `nextState`
     * and `nextContext`.
     *
     * Use this as an opportunity to perform preparation before an update occurs.
     *
     * NOTE: You **cannot** use `this.setState()` in this method.
     *
     * @param {object} nextProps
     * @param {?object} nextState
     * @param {?object} nextContext
     * @param {ReactReconcileTransaction} transaction
     * @optional
     */
    componentWillUpdate: 'DEFINE_MANY',

    /**
     * Invoked when the component's DOM representation has been updated.
     *
     * Use this as an opportunity to operate on the DOM when the component has
     * been updated.
     *
     * @param {object} prevProps
     * @param {?object} prevState
     * @param {?object} prevContext
     * @param {DOMElement} rootNode DOM element representing the component.
     * @optional
     */
    componentDidUpdate: 'DEFINE_MANY',

    /**
     * Invoked when the component is about to be removed from its parent and have
     * its DOM representation destroyed.
     *
     * Use this as an opportunity to deallocate any external resources.
     *
     * NOTE: There is no `componentDidUnmount` since your component will have been
     * destroyed by that point.
     *
     * @optional
     */
    componentWillUnmount: 'DEFINE_MANY',

    // ==== Advanced methods ====

    /**
     * Updates the component's currently mounted DOM representation.
     *
     * By default, this implements React's rendering and reconciliation algorithm.
     * Sophisticated clients may wish to override this.
     *
     * @param {ReactReconcileTransaction} transaction
     * @internal
     * @overridable
     */
    updateComponent: 'OVERRIDE_BASE'

  };

  /**
   * Mapping from class specification keys to special processing functions.
   *
   * Although these are declared like instance properties in the specification
   * when defining classes using `React.createClass`, they are actually static
   * and are accessible on the constructor instead of the prototype. Despite
   * being static, they must be defined outside of the "statics" key under
   * which all other static methods are defined.
   */
  var RESERVED_SPEC_KEYS = {
    displayName: function (Constructor, displayName) {
      Constructor.displayName = displayName;
    },
    mixins: function (Constructor, mixins) {
      if (mixins) {
        for (var i = 0; i < mixins.length; i++) {
          mixSpecIntoComponent(Constructor, mixins[i]);
        }
      }
    },
    childContextTypes: function (Constructor, childContextTypes) {
      if (process.env.NODE_ENV !== 'production') {
        validateTypeDef(Constructor, childContextTypes, 'childContext');
      }
      Constructor.childContextTypes = _assign({}, Constructor.childContextTypes, childContextTypes);
    },
    contextTypes: function (Constructor, contextTypes) {
      if (process.env.NODE_ENV !== 'production') {
        validateTypeDef(Constructor, contextTypes, 'context');
      }
      Constructor.contextTypes = _assign({}, Constructor.contextTypes, contextTypes);
    },
    /**
     * Special case getDefaultProps which should move into statics but requires
     * automatic merging.
     */
    getDefaultProps: function (Constructor, getDefaultProps) {
      if (Constructor.getDefaultProps) {
        Constructor.getDefaultProps = createMergedResultFunction(Constructor.getDefaultProps, getDefaultProps);
      } else {
        Constructor.getDefaultProps = getDefaultProps;
      }
    },
    propTypes: function (Constructor, propTypes) {
      if (process.env.NODE_ENV !== 'production') {
        validateTypeDef(Constructor, propTypes, 'prop');
      }
      Constructor.propTypes = _assign({}, Constructor.propTypes, propTypes);
    },
    statics: function (Constructor, statics) {
      mixStaticSpecIntoComponent(Constructor, statics);
    },
    autobind: function () {} };

  function validateTypeDef(Constructor, typeDef, location) {
    for (var propName in typeDef) {
      if (typeDef.hasOwnProperty(propName)) {
        // use a warning instead of an _invariant so components
        // don't show up in prod but only in __DEV__
        process.env.NODE_ENV !== 'production' ? warning(typeof typeDef[propName] === 'function', '%s: %s type `%s` is invalid; it must be a function, usually from ' + 'React.PropTypes.', Constructor.displayName || 'ReactClass', ReactPropTypeLocationNames[location], propName) : void 0;
      }
    }
  }

  function validateMethodOverride(isAlreadyDefined, name) {
    var specPolicy = ReactClassInterface.hasOwnProperty(name) ? ReactClassInterface[name] : null;

    // Disallow overriding of base class methods unless explicitly allowed.
    if (ReactClassMixin.hasOwnProperty(name)) {
      _invariant(specPolicy === 'OVERRIDE_BASE', 'ReactClassInterface: You are attempting to override ' + '`%s` from your class specification. Ensure that your method names ' + 'do not overlap with React methods.', name);
    }

    // Disallow defining methods more than once unless explicitly allowed.
    if (isAlreadyDefined) {
      _invariant(specPolicy === 'DEFINE_MANY' || specPolicy === 'DEFINE_MANY_MERGED', 'ReactClassInterface: You are attempting to define ' + '`%s` on your component more than once. This conflict may be due ' + 'to a mixin.', name);
    }
  }

  /**
   * Mixin helper which handles policy validation and reserved
   * specification keys when building React classes.
   */
  function mixSpecIntoComponent(Constructor, spec) {
    if (!spec) {
      if (process.env.NODE_ENV !== 'production') {
        var typeofSpec = typeof spec;
        var isMixinValid = typeofSpec === 'object' && spec !== null;

        process.env.NODE_ENV !== 'production' ? warning(isMixinValid, '%s: You\'re attempting to include a mixin that is either null ' + 'or not an object. Check the mixins included by the component, ' + 'as well as any mixins they include themselves. ' + 'Expected object but got %s.', Constructor.displayName || 'ReactClass', spec === null ? null : typeofSpec) : void 0;
      }

      return;
    }

    _invariant(typeof spec !== 'function', 'ReactClass: You\'re attempting to ' + 'use a component class or function as a mixin. Instead, just use a ' + 'regular object.');
    _invariant(!isValidElement(spec), 'ReactClass: You\'re attempting to ' + 'use a component as a mixin. Instead, just use a regular object.');

    var proto = Constructor.prototype;
    var autoBindPairs = proto.__reactAutoBindPairs;

    // By handling mixins before any other properties, we ensure the same
    // chaining order is applied to methods with DEFINE_MANY policy, whether
    // mixins are listed before or after these methods in the spec.
    if (spec.hasOwnProperty(MIXINS_KEY)) {
      RESERVED_SPEC_KEYS.mixins(Constructor, spec.mixins);
    }

    for (var name in spec) {
      if (!spec.hasOwnProperty(name)) {
        continue;
      }

      if (name === MIXINS_KEY) {
        // We have already handled mixins in a special case above.
        continue;
      }

      var property = spec[name];
      var isAlreadyDefined = proto.hasOwnProperty(name);
      validateMethodOverride(isAlreadyDefined, name);

      if (RESERVED_SPEC_KEYS.hasOwnProperty(name)) {
        RESERVED_SPEC_KEYS[name](Constructor, property);
      } else {
        // Setup methods on prototype:
        // The following member methods should not be automatically bound:
        // 1. Expected ReactClass methods (in the "interface").
        // 2. Overridden methods (that were mixed in).
        var isReactClassMethod = ReactClassInterface.hasOwnProperty(name);
        var isFunction = typeof property === 'function';
        var shouldAutoBind = isFunction && !isReactClassMethod && !isAlreadyDefined && spec.autobind !== false;

        if (shouldAutoBind) {
          autoBindPairs.push(name, property);
          proto[name] = property;
        } else {
          if (isAlreadyDefined) {
            var specPolicy = ReactClassInterface[name];

            // These cases should already be caught by validateMethodOverride.
            _invariant(isReactClassMethod && (specPolicy === 'DEFINE_MANY_MERGED' || specPolicy === 'DEFINE_MANY'), 'ReactClass: Unexpected spec policy %s for key %s ' + 'when mixing in component specs.', specPolicy, name);

            // For methods which are defined more than once, call the existing
            // methods before calling the new property, merging if appropriate.
            if (specPolicy === 'DEFINE_MANY_MERGED') {
              proto[name] = createMergedResultFunction(proto[name], property);
            } else if (specPolicy === 'DEFINE_MANY') {
              proto[name] = createChainedFunction(proto[name], property);
            }
          } else {
            proto[name] = property;
            if (process.env.NODE_ENV !== 'production') {
              // Add verbose displayName to the function, which helps when looking
              // at profiling tools.
              if (typeof property === 'function' && spec.displayName) {
                proto[name].displayName = spec.displayName + '_' + name;
              }
            }
          }
        }
      }
    }
  }

  function mixStaticSpecIntoComponent(Constructor, statics) {
    if (!statics) {
      return;
    }
    for (var name in statics) {
      var property = statics[name];
      if (!statics.hasOwnProperty(name)) {
        continue;
      }

      var isReserved = name in RESERVED_SPEC_KEYS;
      _invariant(!isReserved, 'ReactClass: You are attempting to define a reserved ' + 'property, `%s`, that shouldn\'t be on the "statics" key. Define it ' + 'as an instance property instead; it will still be accessible on the ' + 'constructor.', name);

      var isInherited = name in Constructor;
      _invariant(!isInherited, 'ReactClass: You are attempting to define ' + '`%s` on your component more than once. This conflict may be ' + 'due to a mixin.', name);
      Constructor[name] = property;
    }
  }

  /**
   * Merge two objects, but throw if both contain the same key.
   *
   * @param {object} one The first object, which is mutated.
   * @param {object} two The second object
   * @return {object} one after it has been mutated to contain everything in two.
   */
  function mergeIntoWithNoDuplicateKeys(one, two) {
    _invariant(one && two && typeof one === 'object' && typeof two === 'object', 'mergeIntoWithNoDuplicateKeys(): Cannot merge non-objects.');

    for (var key in two) {
      if (two.hasOwnProperty(key)) {
        _invariant(one[key] === undefined, 'mergeIntoWithNoDuplicateKeys(): ' + 'Tried to merge two objects with the same key: `%s`. This conflict ' + 'may be due to a mixin; in particular, this may be caused by two ' + 'getInitialState() or getDefaultProps() methods returning objects ' + 'with clashing keys.', key);
        one[key] = two[key];
      }
    }
    return one;
  }

  /**
   * Creates a function that invokes two functions and merges their return values.
   *
   * @param {function} one Function to invoke first.
   * @param {function} two Function to invoke second.
   * @return {function} Function that invokes the two argument functions.
   * @private
   */
  function createMergedResultFunction(one, two) {
    return function mergedResult() {
      var a = one.apply(this, arguments);
      var b = two.apply(this, arguments);
      if (a == null) {
        return b;
      } else if (b == null) {
        return a;
      }
      var c = {};
      mergeIntoWithNoDuplicateKeys(c, a);
      mergeIntoWithNoDuplicateKeys(c, b);
      return c;
    };
  }

  /**
   * Creates a function that invokes two functions and ignores their return vales.
   *
   * @param {function} one Function to invoke first.
   * @param {function} two Function to invoke second.
   * @return {function} Function that invokes the two argument functions.
   * @private
   */
  function createChainedFunction(one, two) {
    return function chainedFunction() {
      one.apply(this, arguments);
      two.apply(this, arguments);
    };
  }

  /**
   * Binds a method to the component.
   *
   * @param {object} component Component whose method is going to be bound.
   * @param {function} method Method to be bound.
   * @return {function} The bound method.
   */
  function bindAutoBindMethod(component, method) {
    var boundMethod = method.bind(component);
    if (process.env.NODE_ENV !== 'production') {
      boundMethod.__reactBoundContext = component;
      boundMethod.__reactBoundMethod = method;
      boundMethod.__reactBoundArguments = null;
      var componentName = component.constructor.displayName;
      var _bind = boundMethod.bind;
      boundMethod.bind = function (newThis) {
        for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
          args[_key - 1] = arguments[_key];
        }

        // User is trying to bind() an autobound method; we effectively will
        // ignore the value of "this" that the user is trying to use, so
        // let's warn.
        if (newThis !== component && newThis !== null) {
          process.env.NODE_ENV !== 'production' ? warning(false, 'bind(): React component methods may only be bound to the ' + 'component instance. See %s', componentName) : void 0;
        } else if (!args.length) {
          process.env.NODE_ENV !== 'production' ? warning(false, 'bind(): You are binding a component method to the component. ' + 'React does this for you automatically in a high-performance ' + 'way, so you can safely remove this call. See %s', componentName) : void 0;
          return boundMethod;
        }
        var reboundMethod = _bind.apply(boundMethod, arguments);
        reboundMethod.__reactBoundContext = component;
        reboundMethod.__reactBoundMethod = method;
        reboundMethod.__reactBoundArguments = args;
        return reboundMethod;
      };
    }
    return boundMethod;
  }

  /**
   * Binds all auto-bound methods in a component.
   *
   * @param {object} component Component whose method is going to be bound.
   */
  function bindAutoBindMethods(component) {
    var pairs = component.__reactAutoBindPairs;
    for (var i = 0; i < pairs.length; i += 2) {
      var autoBindKey = pairs[i];
      var method = pairs[i + 1];
      component[autoBindKey] = bindAutoBindMethod(component, method);
    }
  }

  var IsMountedMixin = {
    componentDidMount: function () {
      this.__isMounted = true;
    },
    componentWillUnmount: function () {
      this.__isMounted = false;
    }
  };

  /**
   * Add more to the ReactClass base class. These are all legacy features and
   * therefore not already part of the modern ReactComponent.
   */
  var ReactClassMixin = {

    /**
     * TODO: This will be deprecated because state should always keep a consistent
     * type signature and the only use case for this, is to avoid that.
     */
    replaceState: function (newState, callback) {
      this.updater.enqueueReplaceState(this, newState, callback);
    },

    /**
     * Checks whether or not this composite component is mounted.
     * @return {boolean} True if mounted, false otherwise.
     * @protected
     * @final
     */
    isMounted: function () {
      if (process.env.NODE_ENV !== 'production') {
        process.env.NODE_ENV !== 'production' ? warning(this.__didWarnIsMounted, '%s: isMounted is deprecated. Instead, make sure to clean up ' + 'subscriptions and pending requests in componentWillUnmount to ' + 'prevent memory leaks.', this.constructor && this.constructor.displayName || this.name || 'Component') : void 0;
        this.__didWarnIsMounted = true;
      }
      return !!this.__isMounted;
    }
  };

  var ReactClassComponent = function () {};
  _assign(ReactClassComponent.prototype, ReactComponent.prototype, ReactClassMixin);

  /**
   * Creates a composite component class given a class specification.
   * See https://facebook.github.io/react/docs/top-level-api.html#react.createclass
   *
   * @param {object} spec Class specification (which must define `render`).
   * @return {function} Component constructor function.
   * @public
   */
  function createClass(spec) {
    // To keep our warnings more understandable, we'll use a little hack here to
    // ensure that Constructor.name !== 'Constructor'. This makes sure we don't
    // unnecessarily identify a class without displayName as 'Constructor'.
    var Constructor = identity(function (props, context, updater) {
      // This constructor gets overridden by mocks. The argument is used
      // by mocks to assert on what gets mounted.

      if (process.env.NODE_ENV !== 'production') {
        process.env.NODE_ENV !== 'production' ? warning(this instanceof Constructor, 'Something is calling a React component directly. Use a factory or ' + 'JSX instead. See: https://fb.me/react-legacyfactory') : void 0;
      }

      // Wire up auto-binding
      if (this.__reactAutoBindPairs.length) {
        bindAutoBindMethods(this);
      }

      this.props = props;
      this.context = context;
      this.refs = emptyObject;
      this.updater = updater || ReactNoopUpdateQueue;

      this.state = null;

      // ReactClasses doesn't have constructors. Instead, they use the
      // getInitialState and componentWillMount methods for initialization.

      var initialState = this.getInitialState ? this.getInitialState() : null;
      if (process.env.NODE_ENV !== 'production') {
        // We allow auto-mocks to proceed as if they're returning null.
        if (initialState === undefined && this.getInitialState._isMockFunction) {
          // This is probably bad practice. Consider warning here and
          // deprecating this convenience.
          initialState = null;
        }
      }
      _invariant(typeof initialState === 'object' && !Array.isArray(initialState), '%s.getInitialState(): must return an object or null', Constructor.displayName || 'ReactCompositeComponent');

      this.state = initialState;
    });
    Constructor.prototype = new ReactClassComponent();
    Constructor.prototype.constructor = Constructor;
    Constructor.prototype.__reactAutoBindPairs = [];

    injectedMixins.forEach(mixSpecIntoComponent.bind(null, Constructor));

    mixSpecIntoComponent(Constructor, IsMountedMixin);
    mixSpecIntoComponent(Constructor, spec);

    // Initialize the defaultProps property after all mixins have been merged.
    if (Constructor.getDefaultProps) {
      Constructor.defaultProps = Constructor.getDefaultProps();
    }

    if (process.env.NODE_ENV !== 'production') {
      // This is a tag to indicate that the use of these method names is ok,
      // since it's used with createClass. If it's not, then it's likely a
      // mistake so we'll warn you to use the static property, property
      // initializer or constructor respectively.
      if (Constructor.getDefaultProps) {
        Constructor.getDefaultProps.isReactClassApproved = {};
      }
      if (Constructor.prototype.getInitialState) {
        Constructor.prototype.getInitialState.isReactClassApproved = {};
      }
    }

    _invariant(Constructor.prototype.render, 'createClass(...): Class specification must implement a `render` method.');

    if (process.env.NODE_ENV !== 'production') {
      process.env.NODE_ENV !== 'production' ? warning(!Constructor.prototype.componentShouldUpdate, '%s has a method called ' + 'componentShouldUpdate(). Did you mean shouldComponentUpdate()? ' + 'The name is phrased as a question because the function is ' + 'expected to return a value.', spec.displayName || 'A component') : void 0;
      process.env.NODE_ENV !== 'production' ? warning(!Constructor.prototype.componentWillRecieveProps, '%s has a method called ' + 'componentWillRecieveProps(). Did you mean componentWillReceiveProps()?', spec.displayName || 'A component') : void 0;
    }

    // Reduce time spent doing lookups by setting these on the prototype.
    for (var methodName in ReactClassInterface) {
      if (!Constructor.prototype[methodName]) {
        Constructor.prototype[methodName] = null;
      }
    }

    return Constructor;
  }

  return createClass;
}

module.exports = factory;


/***/ }),
/* 108 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Copyright (c) 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * 
 */

function makeEmptyFunction(arg) {
  return function () {
    return arg;
  };
}

/**
 * This function accepts and discards inputs; it has no side effects. This is
 * primarily useful idiomatically for overridable function endpoints which
 * always need to be callable, since JS lacks a null-call idiom ala Cocoa.
 */
var emptyFunction = function emptyFunction() {};

emptyFunction.thatReturns = makeEmptyFunction;
emptyFunction.thatReturnsFalse = makeEmptyFunction(false);
emptyFunction.thatReturnsTrue = makeEmptyFunction(true);
emptyFunction.thatReturnsNull = makeEmptyFunction(null);
emptyFunction.thatReturnsThis = function () {
  return this;
};
emptyFunction.thatReturnsArgument = function (arg) {
  return arg;
};

module.exports = emptyFunction;

/***/ }),
/* 109 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 */



var emptyObject = {};

if (process.env.NODE_ENV !== 'production') {
  Object.freeze(emptyObject);
}

module.exports = emptyObject;

/***/ }),
/* 110 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 */



/**
 * Use invariant() to assert state which your program assumes to be true.
 *
 * Provide sprintf-style format (only %s is supported) and arguments
 * to provide information about what broke and what you were
 * expecting.
 *
 * The invariant message will be stripped in production, but the invariant
 * will remain to ensure logic does not differ in production.
 */

var validateFormat = function validateFormat(format) {};

if (process.env.NODE_ENV !== 'production') {
  validateFormat = function validateFormat(format) {
    if (format === undefined) {
      throw new Error('invariant requires an error message argument');
    }
  };
}

function invariant(condition, format, a, b, c, d, e, f) {
  validateFormat(format);

  if (!condition) {
    var error;
    if (format === undefined) {
      error = new Error('Minified exception occurred; use the non-minified dev environment ' + 'for the full error message and additional helpful warnings.');
    } else {
      var args = [a, b, c, d, e, f];
      var argIndex = 0;
      error = new Error(format.replace(/%s/g, function () {
        return args[argIndex++];
      }));
      error.name = 'Invariant Violation';
    }

    error.framesToPop = 1; // we don't care about invariant's own frame
    throw error;
  }
}

module.exports = invariant;

/***/ }),
/* 111 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright 2014-2015, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 */



var emptyFunction = __webpack_require__(108);

/**
 * Similar to invariant but only logs a warning if the condition is not met.
 * This can be used to log issues in development environments in critical
 * paths. Removing the logging code for production environments will keep the
 * same logic and follow the same code paths.
 */

var warning = emptyFunction;

if (process.env.NODE_ENV !== 'production') {
  (function () {
    var printWarning = function printWarning(format) {
      for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
        args[_key - 1] = arguments[_key];
      }

      var argIndex = 0;
      var message = 'Warning: ' + format.replace(/%s/g, function () {
        return args[argIndex++];
      });
      if (typeof console !== 'undefined') {
        console.error(message);
      }
      try {
        // --- Welcome to debugging React ---
        // This error was thrown as a convenience so that you can use this stack
        // to find the callsite that caused this warning to fire.
        throw new Error(message);
      } catch (x) {}
    };

    warning = function warning(condition, format) {
      if (format === undefined) {
        throw new Error('`warning(condition, format, ...args)` requires a warning ' + 'message argument');
      }

      if (format.indexOf('Failed Composite propType: ') === 0) {
        return; // Ignore CompositeComponent proptype check.
      }

      if (!condition) {
        for (var _len2 = arguments.length, args = Array(_len2 > 2 ? _len2 - 2 : 0), _key2 = 2; _key2 < _len2; _key2++) {
          args[_key2 - 2] = arguments[_key2];
        }

        printWarning.apply(undefined, [format].concat(args));
      }
    };
  })();
}

module.exports = warning;

/***/ }),
/* 112 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/


/* eslint-disable no-unused-vars */
var getOwnPropertySymbols = Object.getOwnPropertySymbols;
var hasOwnProperty = Object.prototype.hasOwnProperty;
var propIsEnumerable = Object.prototype.propertyIsEnumerable;

function toObject(val) {
	if (val === null || val === undefined) {
		throw new TypeError('Object.assign cannot be called with null or undefined');
	}

	return Object(val);
}

function shouldUseNative() {
	try {
		if (!Object.assign) {
			return false;
		}

		// Detect buggy property enumeration order in older V8 versions.

		// https://bugs.chromium.org/p/v8/issues/detail?id=4118
		var test1 = new String('abc');  // eslint-disable-line no-new-wrappers
		test1[5] = 'de';
		if (Object.getOwnPropertyNames(test1)[0] === '5') {
			return false;
		}

		// https://bugs.chromium.org/p/v8/issues/detail?id=3056
		var test2 = {};
		for (var i = 0; i < 10; i++) {
			test2['_' + String.fromCharCode(i)] = i;
		}
		var order2 = Object.getOwnPropertyNames(test2).map(function (n) {
			return test2[n];
		});
		if (order2.join('') !== '0123456789') {
			return false;
		}

		// https://bugs.chromium.org/p/v8/issues/detail?id=3056
		var test3 = {};
		'abcdefghijklmnopqrst'.split('').forEach(function (letter) {
			test3[letter] = letter;
		});
		if (Object.keys(Object.assign({}, test3)).join('') !==
				'abcdefghijklmnopqrst') {
			return false;
		}

		return true;
	} catch (err) {
		// We don't expect any of the above to throw, but better to be safe.
		return false;
	}
}

module.exports = shouldUseNative() ? Object.assign : function (target, source) {
	var from;
	var to = toObject(target);
	var symbols;

	for (var s = 1; s < arguments.length; s++) {
		from = Object(arguments[s]);

		for (var key in from) {
			if (hasOwnProperty.call(from, key)) {
				to[key] = from[key];
			}
		}

		if (getOwnPropertySymbols) {
			symbols = getOwnPropertySymbols(from);
			for (var i = 0; i < symbols.length; i++) {
				if (propIsEnumerable.call(from, symbols[i])) {
					to[symbols[i]] = from[symbols[i]];
				}
			}
		}
	}

	return to;
};


/***/ }),
/* 113 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _mapToZero = __webpack_require__(16);

var _mapToZero2 = _interopRequireDefault(_mapToZero);

var _stripStyle = __webpack_require__(11);

var _stripStyle2 = _interopRequireDefault(_stripStyle);

var _stepper3 = __webpack_require__(18);

var _stepper4 = _interopRequireDefault(_stepper3);

var _performanceNow = __webpack_require__(10);

var _performanceNow2 = _interopRequireDefault(_performanceNow);

var _raf = __webpack_require__(15);

var _raf2 = _interopRequireDefault(_raf);

var _shouldStopAnimation = __webpack_require__(17);

var _shouldStopAnimation2 = _interopRequireDefault(_shouldStopAnimation);

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(0);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _createReactClass = __webpack_require__(14);

var _createReactClass2 = _interopRequireDefault(_createReactClass);

var msPerFrame = 1000 / 60;

var Motion = _createReactClass2['default']({
  propTypes: {
    // TOOD: warn against putting a config in here
    defaultStyle: _propTypes2['default'].objectOf(_propTypes2['default'].number),
    style: _propTypes2['default'].objectOf(_propTypes2['default'].oneOfType([_propTypes2['default'].number, _propTypes2['default'].object])).isRequired,
    children: _propTypes2['default'].func.isRequired,
    onRest: _propTypes2['default'].func
  },

  getInitialState: function getInitialState() {
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
  },

  wasAnimating: false,
  animationID: null,
  prevTime: 0,
  accumulatedTime: 0,
  // it's possible that currentStyle's value is stale: if props is immediately
  // changed from 0 to 400 to spring(0) again, the async currentStyle is still
  // at 0 (didn't have time to tick and interpolate even once). If we naively
  // compare currentStyle with destVal it'll be 0 === 0 (no animation, stop).
  // In reality currentStyle should be 400
  unreadPropStyle: null,
  // after checking for unreadPropStyle != null, we manually go set the
  // non-interpolating values (those that are a number, without a spring
  // config)
  clearUnreadPropStyle: function clearUnreadPropStyle(destStyle) {
    var dirty = false;
    var _state = this.state;
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
      this.setState({ currentStyle: currentStyle, currentVelocity: currentVelocity, lastIdealStyle: lastIdealStyle, lastIdealVelocity: lastIdealVelocity });
    }
  },

  startAnimationIfNecessary: function startAnimationIfNecessary() {
    var _this = this;

    // TODO: when config is {a: 10} and dest is {a: 10} do we raf once and
    // call cb? No, otherwise accidental parent rerender causes cb trigger
    this.animationID = _raf2['default'](function (timestamp) {
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
  },

  componentDidMount: function componentDidMount() {
    this.prevTime = _performanceNow2['default']();
    this.startAnimationIfNecessary();
  },

  componentWillReceiveProps: function componentWillReceiveProps(props) {
    if (this.unreadPropStyle != null) {
      // previous props haven't had the chance to be set yet; set them here
      this.clearUnreadPropStyle(this.unreadPropStyle);
    }

    this.unreadPropStyle = props.style;
    if (this.animationID == null) {
      this.prevTime = _performanceNow2['default']();
      this.startAnimationIfNecessary();
    }
  },

  componentWillUnmount: function componentWillUnmount() {
    if (this.animationID != null) {
      _raf2['default'].cancel(this.animationID);
      this.animationID = null;
    }
  },

  render: function render() {
    var renderedChildren = this.props.children(this.state.currentStyle);
    return renderedChildren && _react2['default'].Children.only(renderedChildren);
  }
});

exports['default'] = Motion;
module.exports = exports['default'];

/***/ }),
/* 114 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _mapToZero = __webpack_require__(16);

var _mapToZero2 = _interopRequireDefault(_mapToZero);

var _stripStyle = __webpack_require__(11);

var _stripStyle2 = _interopRequireDefault(_stripStyle);

var _stepper3 = __webpack_require__(18);

var _stepper4 = _interopRequireDefault(_stepper3);

var _performanceNow = __webpack_require__(10);

var _performanceNow2 = _interopRequireDefault(_performanceNow);

var _raf = __webpack_require__(15);

var _raf2 = _interopRequireDefault(_raf);

var _shouldStopAnimation = __webpack_require__(17);

var _shouldStopAnimation2 = _interopRequireDefault(_shouldStopAnimation);

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(0);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _createReactClass = __webpack_require__(14);

var _createReactClass2 = _interopRequireDefault(_createReactClass);

var msPerFrame = 1000 / 60;

function shouldStopAnimationAll(currentStyles, styles, currentVelocities) {
  for (var i = 0; i < currentStyles.length; i++) {
    if (!_shouldStopAnimation2['default'](currentStyles[i], styles[i], currentVelocities[i])) {
      return false;
    }
  }
  return true;
}

var StaggeredMotion = _createReactClass2['default']({
  propTypes: {
    // TOOD: warn against putting a config in here
    defaultStyles: _propTypes2['default'].arrayOf(_propTypes2['default'].objectOf(_propTypes2['default'].number)),
    styles: _propTypes2['default'].func.isRequired,
    children: _propTypes2['default'].func.isRequired
  },

  getInitialState: function getInitialState() {
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
  },

  animationID: null,
  prevTime: 0,
  accumulatedTime: 0,
  // it's possible that currentStyle's value is stale: if props is immediately
  // changed from 0 to 400 to spring(0) again, the async currentStyle is still
  // at 0 (didn't have time to tick and interpolate even once). If we naively
  // compare currentStyle with destVal it'll be 0 === 0 (no animation, stop).
  // In reality currentStyle should be 400
  unreadPropStyles: null,
  // after checking for unreadPropStyles != null, we manually go set the
  // non-interpolating values (those that are a number, without a spring
  // config)
  clearUnreadPropStyle: function clearUnreadPropStyle(unreadPropStyles) {
    var _state = this.state;
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
      this.setState({ currentStyles: currentStyles, currentVelocities: currentVelocities, lastIdealStyles: lastIdealStyles, lastIdealVelocities: lastIdealVelocities });
    }
  },

  startAnimationIfNecessary: function startAnimationIfNecessary() {
    var _this = this;

    // TODO: when config is {a: 10} and dest is {a: 10} do we raf once and
    // call cb? No, otherwise accidental parent rerender causes cb trigger
    this.animationID = _raf2['default'](function (timestamp) {
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
  },

  componentDidMount: function componentDidMount() {
    this.prevTime = _performanceNow2['default']();
    this.startAnimationIfNecessary();
  },

  componentWillReceiveProps: function componentWillReceiveProps(props) {
    if (this.unreadPropStyles != null) {
      // previous props haven't had the chance to be set yet; set them here
      this.clearUnreadPropStyle(this.unreadPropStyles);
    }

    this.unreadPropStyles = props.styles(this.state.lastIdealStyles);
    if (this.animationID == null) {
      this.prevTime = _performanceNow2['default']();
      this.startAnimationIfNecessary();
    }
  },

  componentWillUnmount: function componentWillUnmount() {
    if (this.animationID != null) {
      _raf2['default'].cancel(this.animationID);
      this.animationID = null;
    }
  },

  render: function render() {
    var renderedChildren = this.props.children(this.state.currentStyles);
    return renderedChildren && _react2['default'].Children.only(renderedChildren);
  }
});

exports['default'] = StaggeredMotion;
module.exports = exports['default'];

/***/ }),
/* 115 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _mapToZero = __webpack_require__(16);

var _mapToZero2 = _interopRequireDefault(_mapToZero);

var _stripStyle = __webpack_require__(11);

var _stripStyle2 = _interopRequireDefault(_stripStyle);

var _stepper3 = __webpack_require__(18);

var _stepper4 = _interopRequireDefault(_stepper3);

var _mergeDiff = __webpack_require__(116);

var _mergeDiff2 = _interopRequireDefault(_mergeDiff);

var _performanceNow = __webpack_require__(10);

var _performanceNow2 = _interopRequireDefault(_performanceNow);

var _raf = __webpack_require__(15);

var _raf2 = _interopRequireDefault(_raf);

var _shouldStopAnimation = __webpack_require__(17);

var _shouldStopAnimation2 = _interopRequireDefault(_shouldStopAnimation);

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(0);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _createReactClass = __webpack_require__(14);

var _createReactClass2 = _interopRequireDefault(_createReactClass);

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

var TransitionMotion = _createReactClass2['default']({
  propTypes: {
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

  getDefaultProps: function getDefaultProps() {
    return {
      willEnter: function willEnter(styleThatEntered) {
        return _stripStyle2['default'](styleThatEntered.style);
      },
      // recall: returning null makes the current unmounting TransitionStyle
      // disappear immediately
      willLeave: function willLeave() {
        return null;
      },
      didLeave: function didLeave() {}
    };
  },

  getInitialState: function getInitialState() {
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

    var _mergeAndSync = mergeAndSync(
    // Because this is an old-style createReactClass component, Flow doesn't
    // understand that the willEnter and willLeave props have default values
    // and will always be present.
    willEnter, willLeave, didLeave, oldMergedPropsStyles, destStyles, oldCurrentStyles, oldCurrentVelocities, oldCurrentStyles, // oldLastIdealStyles really
    oldCurrentVelocities);

    var mergedPropsStyles = _mergeAndSync[0];
    var currentStyles = _mergeAndSync[1];
    var currentVelocities = _mergeAndSync[2];
    var lastIdealStyles = _mergeAndSync[3];
    var lastIdealVelocities = _mergeAndSync[4];
    // oldLastIdealVelocities really

    return {
      currentStyles: currentStyles,
      currentVelocities: currentVelocities,
      lastIdealStyles: lastIdealStyles,
      lastIdealVelocities: lastIdealVelocities,
      mergedPropsStyles: mergedPropsStyles
    };
  },

  unmounting: false,
  animationID: null,
  prevTime: 0,
  accumulatedTime: 0,
  // it's possible that currentStyle's value is stale: if props is immediately
  // changed from 0 to 400 to spring(0) again, the async currentStyle is still
  // at 0 (didn't have time to tick and interpolate even once). If we naively
  // compare currentStyle with destVal it'll be 0 === 0 (no animation, stop).
  // In reality currentStyle should be 400
  unreadPropStyles: null,
  // after checking for unreadPropStyles != null, we manually go set the
  // non-interpolating values (those that are a number, without a spring
  // config)
  clearUnreadPropStyle: function clearUnreadPropStyle(unreadPropStyles) {
    var _mergeAndSync2 = mergeAndSync(this.props.willEnter, this.props.willLeave, this.props.didLeave, this.state.mergedPropsStyles, unreadPropStyles, this.state.currentStyles, this.state.currentVelocities, this.state.lastIdealStyles, this.state.lastIdealVelocities);

    var mergedPropsStyles = _mergeAndSync2[0];
    var currentStyles = _mergeAndSync2[1];
    var currentVelocities = _mergeAndSync2[2];
    var lastIdealStyles = _mergeAndSync2[3];
    var lastIdealVelocities = _mergeAndSync2[4];

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
    this.setState({
      currentStyles: currentStyles,
      currentVelocities: currentVelocities,
      mergedPropsStyles: mergedPropsStyles,
      lastIdealStyles: lastIdealStyles,
      lastIdealVelocities: lastIdealVelocities
    });
  },

  startAnimationIfNecessary: function startAnimationIfNecessary() {
    var _this = this;

    if (this.unmounting) {
      return;
    }

    // TODO: when config is {a: 10} and dest is {a: 10} do we raf once and
    // call cb? No, otherwise accidental parent rerender causes cb trigger
    this.animationID = _raf2['default'](function (timestamp) {
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

      var _mergeAndSync3 = mergeAndSync(_this.props.willEnter, _this.props.willLeave, _this.props.didLeave, _this.state.mergedPropsStyles, destStyles, _this.state.currentStyles, _this.state.currentVelocities, _this.state.lastIdealStyles, _this.state.lastIdealVelocities);

      var newMergedPropsStyles = _mergeAndSync3[0];
      var newCurrentStyles = _mergeAndSync3[1];
      var newCurrentVelocities = _mergeAndSync3[2];
      var newLastIdealStyles = _mergeAndSync3[3];
      var newLastIdealVelocities = _mergeAndSync3[4];

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
  },

  componentDidMount: function componentDidMount() {
    this.prevTime = _performanceNow2['default']();
    this.startAnimationIfNecessary();
  },

  componentWillReceiveProps: function componentWillReceiveProps(props) {
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
  },

  componentWillUnmount: function componentWillUnmount() {
    this.unmounting = true;
    if (this.animationID != null) {
      _raf2['default'].cancel(this.animationID);
      this.animationID = null;
    }
  },

  render: function render() {
    var hydratedStyles = rehydrateStyles(this.state.mergedPropsStyles, this.unreadPropStyles, this.state.currentStyles);
    var renderedChildren = this.props.children(hydratedStyles);
    return renderedChildren && _react2['default'].Children.only(renderedChildren);
  }
});

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

/***/ }),
/* 116 */
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
/* 117 */
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
/* 118 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports['default'] = spring;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _presets = __webpack_require__(28);

var _presets2 = _interopRequireDefault(_presets);

var defaultConfig = _extends({}, _presets2['default'].noWobble, {
  precision: 0.01
});

function spring(val, config) {
  return _extends({}, defaultConfig, config, { val: val });
}

module.exports = exports['default'];

/***/ }),
/* 119 */
/***/ (function(module, exports) {

/*!
* screenfull
* v3.2.0 - 2017-04-16
* (c) Sindre Sorhus; MIT License
*/
(function () {
	'use strict';

	var document = typeof window === 'undefined' ? {} : window.document;
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
			document.addEventListener(fn.fullscreenchange, callback, false);
		},
		onerror: function (callback) {
			document.addEventListener(fn.fullscreenerror, callback, false);
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
/* 120 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(0);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _constants = __webpack_require__(6);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var MediaLink = function MediaLink(_ref) {
  var play = _ref.play,
      id = _ref.id,
      index = _ref.index,
      children = _ref.children,
      attributes = _objectWithoutProperties(_ref, ['play', 'id', 'index', 'children']);

  return _react2.default.createElement(
    'button',
    _extends({
      className: _constants.classes.MEDIA_LINK, onClick: function onClick() {
        return play(id, index);
      }
    }, attributes),
    children
  );
};

MediaLink.propTypes = {
  id: _propTypes2.default.string.isRequired,
  index: _propTypes2.default.number.isRequired,
  children: _propTypes2.default.node.isRequired,
  play: _propTypes2.default.func.isRequired
};

exports.default = MediaLink;

/***/ }),
/* 121 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(0);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _constants = __webpack_require__(6);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var Next = function Next(_ref) {
  var next = _ref.next,
      id = _ref.id,
      children = _ref.children,
      attributes = _objectWithoutProperties(_ref, ['next', 'id', 'children']);

  return _react2.default.createElement(
    'button',
    _extends({ className: _constants.classes.NEXT, onClick: function onClick() {
        return next(id);
      } }, attributes),
    children
  );
};

Next.propTypes = {
  children: _propTypes2.default.node.isRequired,
  next: _propTypes2.default.func.isRequired,
  id: _propTypes2.default.string.isRequired
};

exports.default = Next;

/***/ }),
/* 122 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(0);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _constants = __webpack_require__(6);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var PlaylistItem = function PlaylistItem(_ref) {
  var isCurrent = _ref.isCurrent,
      children = _ref.children,
      attributes = _ref.attributes;
  return _react2.default.createElement(
    'li',
    _extends({ className: isCurrent ? _constants.classes.CURRENT : null }, attributes),
    children
  );
};

PlaylistItem.propTypes = {
  attributes: _propTypes2.default.object.isRequired,
  isCurrent: _propTypes2.default.bool.isRequired,
  children: _propTypes2.default.node.isRequired
};

exports.default = PlaylistItem;

/***/ }),
/* 123 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _reactJplayerUtils = __webpack_require__(4);

var _playlistItem = __webpack_require__(122);

var _playlistItem2 = _interopRequireDefault(_playlistItem);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var mapStateToProps = function mapStateToProps(_ref2, _ref) {
  var jPlaylists = _ref2.jPlaylists;

  var id = _ref.id,
      index = _ref.index,
      attributes = _objectWithoutProperties(_ref, ['id', 'index']);

  return {
    isCurrent: jPlaylists[id].current === index,
    attributes: attributes
  };
};

exports.default = (0, _reactJplayerUtils.connectWithId)(mapStateToProps)((0, _reactJplayerUtils.passWithIndex)(_playlistItem2.default));

/***/ }),
/* 124 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(0);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _formatPropTypes = __webpack_require__(27);

var _formatPropTypes2 = _interopRequireDefault(_formatPropTypes);

var _playlistItemContainer = __webpack_require__(123);

var _playlistItemContainer2 = _interopRequireDefault(_playlistItemContainer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Playlist = function Playlist(_ref) {
  var playlist = _ref.playlist,
      children = _ref.children,
      attributes = _ref.attributes;
  return _react2.default.createElement(
    'ul',
    attributes,
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
  attributes: _propTypes2.default.object.isRequired,
  playlist: _propTypes2.default.arrayOf(_propTypes2.default.shape({
    title: _propTypes2.default.string,
    artist: _propTypes2.default.string,
    sources: _propTypes2.default.shape(_formatPropTypes2.default).isRequired,
    poster: _propTypes2.default.string,
    id: _propTypes2.default.string.isRequired,
    free: _propTypes2.default.bool
  })).isRequired,
  children: _propTypes2.default.node.isRequired
};

exports.default = Playlist;

/***/ }),
/* 125 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(0);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _constants = __webpack_require__(6);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var Previous = function Previous(_ref) {
  var previous = _ref.previous,
      id = _ref.id,
      children = _ref.children,
      attributes = _objectWithoutProperties(_ref, ['previous', 'id', 'children']);

  return _react2.default.createElement(
    'button',
    _extends({ className: _constants.classes.PREVIOUS, onClick: function onClick() {
        return previous(id);
      } }, attributes),
    children
  );
};

Previous.propTypes = {
  children: _propTypes2.default.node.isRequired,
  previous: _propTypes2.default.func.isRequired,
  id: _propTypes2.default.string.isRequired
};

exports.default = Previous;

/***/ }),
/* 126 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(0);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _constants = __webpack_require__(6);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var Remove = function Remove(_ref) {
  var remove = _ref.remove,
      id = _ref.id,
      index = _ref.index,
      children = _ref.children,
      attributes = _objectWithoutProperties(_ref, ['remove', 'id', 'index', 'children']);

  return _react2.default.createElement(
    'button',
    _extends({
      className: _constants.classes.REMOVE, onClick: function onClick() {
        return remove(id, index);
      }
    }, attributes),
    children
  );
};

Remove.defaultProps = {
  children: '×'
};

Remove.propTypes = {
  children: _propTypes2.default.node,
  id: _propTypes2.default.string.isRequired,
  index: _propTypes2.default.number.isRequired,
  remove: _propTypes2.default.func.isRequired
};

exports.default = Remove;

/***/ }),
/* 127 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(0);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _constants = __webpack_require__(6);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var Shuffle = function Shuffle(_ref) {
  var shuffle = _ref.shuffle,
      id = _ref.id,
      children = _ref.children,
      attributes = _objectWithoutProperties(_ref, ['shuffle', 'id', 'children']);

  return _react2.default.createElement(
    'button',
    _extends({
      className: _constants.classes.SHUFFLE, onClick: function onClick() {
        return shuffle(id, undefined, true);
      }
    }, attributes),
    children
  );
};

Shuffle.propTypes = {
  children: _propTypes2.default.node.isRequired,
  shuffle: _propTypes2.default.func.isRequired,
  id: _propTypes2.default.string.isRequired
};

exports.default = Shuffle;

/***/ }),
/* 128 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(0);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _constants = __webpack_require__(6);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var TogglePlaylist = function TogglePlaylist(_ref) {
  var togglePlaylist = _ref.togglePlaylist,
      hidePlaylist = _ref.hidePlaylist,
      id = _ref.id,
      children = _ref.children,
      attributes = _objectWithoutProperties(_ref, ['togglePlaylist', 'hidePlaylist', 'id', 'children']);

  return _react2.default.createElement(
    'button',
    _extends({
      className: _constants.classes.TOGGLE_PLAYLIST,
      onClick: function onClick() {
        return togglePlaylist(id, !hidePlaylist);
      }
    }, attributes),
    children
  );
};

TogglePlaylist.propTypes = {
  hidePlaylist: _propTypes2.default.bool.isRequired,
  children: _propTypes2.default.node.isRequired,
  togglePlaylist: _propTypes2.default.func.isRequired,
  id: _propTypes2.default.string.isRequired
};

exports.default = TogglePlaylist;

/***/ }),
/* 129 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Title = exports.Poster = exports.MediaLink = exports.Remove = exports.TogglePlaylist = exports.Repeat = exports.Next = exports.Previous = exports.Shuffle = exports.Playlist = exports.connect = exports.actions = exports.reducer = exports.initialState = undefined;

var _initialState = __webpack_require__(46);

var _initialState2 = _interopRequireDefault(_initialState);

var _reducer = __webpack_require__(47);

var _reducer2 = _interopRequireDefault(_reducer);

var _actions = __webpack_require__(7);

var actions = _interopRequireWildcard(_actions);

var _connect = __webpack_require__(45);

var _connect2 = _interopRequireDefault(_connect);

var _jPlaylistContainer = __webpack_require__(34);

var _jPlaylistContainer2 = _interopRequireDefault(_jPlaylistContainer);

var _playlistContainer = __webpack_require__(37);

var _playlistContainer2 = _interopRequireDefault(_playlistContainer);

var _shuffleContainer = __webpack_require__(42);

var _shuffleContainer2 = _interopRequireDefault(_shuffleContainer);

var _previousContainer = __webpack_require__(39);

var _previousContainer2 = _interopRequireDefault(_previousContainer);

var _nextContainer = __webpack_require__(36);

var _nextContainer2 = _interopRequireDefault(_nextContainer);

var _repeatContainer = __webpack_require__(41);

var _repeatContainer2 = _interopRequireDefault(_repeatContainer);

var _togglePlaylistContainer = __webpack_require__(44);

var _togglePlaylistContainer2 = _interopRequireDefault(_togglePlaylistContainer);

var _removeContainer = __webpack_require__(40);

var _removeContainer2 = _interopRequireDefault(_removeContainer);

var _mediaLinkContainer = __webpack_require__(35);

var _mediaLinkContainer2 = _interopRequireDefault(_mediaLinkContainer);

var _posterContainer = __webpack_require__(38);

var _posterContainer2 = _interopRequireDefault(_posterContainer);

var _titleContainer = __webpack_require__(43);

var _titleContainer2 = _interopRequireDefault(_titleContainer);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _jPlaylistContainer2.default;
exports.initialState = _initialState2.default;
exports.reducer = _reducer2.default;
exports.actions = actions;
exports.connect = _connect2.default;
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
/* 130 */,
/* 131 */,
/* 132 */
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
/* 133 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {
  HIDDEN: 'jp-hidden'
};

/***/ }),
/* 134 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(0);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _connectWithId = __webpack_require__(31);

var _connectWithId2 = _interopRequireDefault(_connectWithId);

var _keyIgnoredElementNames = __webpack_require__(141);

var _keyIgnoredElementNames2 = _interopRequireDefault(_keyIgnoredElementNames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var onKeyDown = function onKeyDown(keyEnabled, focused, keyBindings, event) {
  if (_keyIgnoredElementNames2.default.some(function (name) {
    return name.toUpperCase() === event.target.nodeName.toUpperCase();
  }) || !focused || !keyEnabled) {
    return;
  }

  Object.keys(keyBindings).forEach(function (key) {
    var keyBinding = keyBindings[key];

    if (keyBinding.key === event.keyCode || keyBinding.key === event.key) {
      event.preventDefault();
      keyBinding.fn();
    }
  });
};

var mapStateToProps = function mapStateToProps(_ref, _ref2) {
  var jPlayers = _ref.jPlayers,
      jPlaylists = _ref.jPlaylists;
  var id = _ref2.id;
  return {
    keyEnabled: jPlayers[id].keyEnabled,
    focused: jPlayers[id].focused
  };
};

var KeyControl = function (_React$Component) {
  _inherits(KeyControl, _React$Component);

  function KeyControl() {
    var _ref3;

    var _temp, _this, _ret;

    _classCallCheck(this, KeyControl);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref3 = KeyControl.__proto__ || Object.getPrototypeOf(KeyControl)).call.apply(_ref3, [this].concat(args))), _this), _this.onKeyDown = function (event) {
      return onKeyDown(_this.props.keyEnabled, _this.props.focused, _this.props.keyBindings, event);
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(KeyControl, [{
    key: 'componentWillMount',
    value: function componentWillMount() {
      document.addEventListener('keydown', this.onKeyDown);
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      document.removeEventListener('keydown', this.onKeyDown);
    }
  }, {
    key: 'render',
    value: function render() {
      return null;
    }
  }]);

  return KeyControl;
}(_react2.default.Component);

KeyControl.propTypes = {
  keyEnabled: _propTypes2.default.bool.isRequired,
  focused: _propTypes2.default.bool.isRequired,
  keyBindings: _propTypes2.default.object.isRequired
};

exports.default = (0, _connectWithId2.default)(mapStateToProps)(KeyControl);

/***/ }),
/* 135 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(0);

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Connect = function Connect(jPlayer, _ref, ConnectedPlayer) {
  var options = _ref.options,
      jPlaylistOptions = _ref.jPlaylistOptions;
  return function (_React$Component) {
    _inherits(_class2, _React$Component);

    function _class2() {
      var _ref2;

      var _temp, _this, _ret;

      _classCallCheck(this, _class2);

      for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref2 = _class2.__proto__ || Object.getPrototypeOf(_class2)).call.apply(_ref2, [this].concat(args))), _this), _this.getChildContext = function () {
        return {
          id: options.id
        };
      }, _temp), _possibleConstructorReturn(_this, _ret);
    }

    _createClass(_class2, [{
      key: 'render',
      value: function render() {
        return _react2.default.createElement(ConnectedPlayer, _extends({ id: options.id }, this.props));
      }
    }], [{
      key: 'jPlayer',
      get: function get() {
        return jPlayer;
      }
    }, {
      key: 'options',
      get: function get() {
        return options;
      }
    }, {
      key: 'jPlaylistOptions',
      get: function get() {
        return jPlaylistOptions;
      }
    }, {
      key: 'childContextTypes',
      get: function get() {
        return {
          id: _propTypes2.default.string
        };
      }
    }]);

    return _class2;
  }(_react2.default.Component);
};

exports.default = Connect;

/***/ }),
/* 136 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _reactRedux = __webpack_require__(8);

var _recompose = __webpack_require__(9);

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
/* 137 */
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
/* 138 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (artist, title) {
  var titleText = '';

  if (artist !== '') {
    titleText += '' + artist;
  }

  if (title !== '') {
    if (artist !== '') {
      titleText += ' - ';
    }
    titleText += '' + title;
  }

  return titleText;
};

/***/ }),
/* 139 */
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
/* 140 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _lodash = __webpack_require__(12);

var _lodash2 = _interopRequireDefault(_lodash);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var initialState = function initialState(connectedJPlayers, defaultValues, optionsName) {
  var jPlayers = {};
  var newConnectedJPlayers = connectedJPlayers;

  if (!Array.isArray(connectedJPlayers)) {
    newConnectedJPlayers = [newConnectedJPlayers];
  }

  newConnectedJPlayers.forEach(function (connectedJPlayer) {
    jPlayers[connectedJPlayer.options.id] = (0, _lodash2.default)({}, _extends({}, defaultValues), connectedJPlayer[optionsName]);
  });

  return jPlayers;
};

exports.default = initialState;

/***/ }),
/* 141 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = ['INPUT', 'TEXTAREA', 'SELECT'];

/***/ }),
/* 142 */
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
/* 143 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _recompose = __webpack_require__(9);

var _propTypes = __webpack_require__(0);

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (component) {
  return (0, _recompose.compose)((0, _recompose.withContext)({
    index: _propTypes2.default.number
  }, function (_ref) {
    var index = _ref.index;
    return { index: index };
  })(component));
};

/***/ }),
/* 144 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (number, max) {
  return 100 * (number / max);
};

/***/ }),
/* 145 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (number, max) {
  return number * (max / 100);
};

/***/ }),
/* 146 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (currentElement, className) {
  var element = currentElement;

  while (element.parentNode) {
    element = element.parentNode;

    if (element.className !== undefined && element.className.includes(className)) {
      return element;
    }
  }
  return false;
};

/***/ }),
/* 147 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = function (existingObject, newValues) {
  return _extends({}, existingObject, newValues);
};

/***/ }),
/* 148 */
/***/ (function(module, exports) {

module.exports = _.maxBy;

/***/ })
/******/ ]);