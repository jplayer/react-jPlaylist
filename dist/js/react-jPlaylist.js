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
/******/ 	return __webpack_require__(__webpack_require__.s = 20);
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
/* 2 */
/***/ (function(module, exports) {

module.exports = Recompose;

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.convertTime = exports.canSetVolume = exports.limitValue = exports.getElementOffset = exports.toRelativePercentage = exports.toPercentage = exports.classes = exports.formatArtistAndTitle = exports.connectWithIndex = exports.connectWithId = undefined;

var _connectWithId = __webpack_require__(25);

var _connectWithId2 = _interopRequireDefault(_connectWithId);

var _connectWithIndex = __webpack_require__(26);

var _connectWithIndex2 = _interopRequireDefault(_connectWithIndex);

var _formatArtistAndTitle = __webpack_require__(27);

var _formatArtistAndTitle2 = _interopRequireDefault(_formatArtistAndTitle);

var _classes = __webpack_require__(28);

var _classes2 = _interopRequireDefault(_classes);

var _toPercentage = __webpack_require__(29);

var _toPercentage2 = _interopRequireDefault(_toPercentage);

var _toRelativePercentage = __webpack_require__(30);

var _toRelativePercentage2 = _interopRequireDefault(_toRelativePercentage);

var _getElementOffset = __webpack_require__(31);

var _getElementOffset2 = _interopRequireDefault(_getElementOffset);

var _limitValue = __webpack_require__(32);

var _limitValue2 = _interopRequireDefault(_limitValue);

var _canSetVolume = __webpack_require__(33);

var _canSetVolume2 = _interopRequireDefault(_canSetVolume);

var _convertTime = __webpack_require__(34);

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
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.previous = exports.next = exports.shuffle = exports.play = exports.select = exports.clear = exports.remove = exports.add = exports.setPlaylist = exports.setOption = undefined;

var _constants = __webpack_require__(1);

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
/* 5 */
/***/ (function(module, exports) {

module.exports = React;

/***/ }),
/* 6 */
/***/ (function(module, exports) {

module.exports = ReactJPlayer;

/***/ }),
/* 7 */
/***/ (function(module, exports) {

module.exports = ReactRedux;

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.initialState = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _lodash = __webpack_require__(9);

var _lodash2 = _interopRequireDefault(_lodash);

var _reactJplayer = __webpack_require__(6);

var _constants = __webpack_require__(1);

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
/* 9 */
/***/ (function(module, exports) {

module.exports = _.merge;

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(5);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(0);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _keyControlContainer = __webpack_require__(24);

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
}; /* eslint-disable react/forbid-prop-types */

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
/* 11 */
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
/* 12 */
/***/ (function(module, exports) {

module.exports = classNames;

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(5);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(0);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _recompose = __webpack_require__(2);

var _playlistItemContainer = __webpack_require__(37);

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
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(5);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(0);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _constants = __webpack_require__(1);

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
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(5);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(0);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _constants = __webpack_require__(1);

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
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(5);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(0);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _constants = __webpack_require__(1);

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
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(5);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(0);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _constants = __webpack_require__(1);

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
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(5);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(0);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _constants = __webpack_require__(1);

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
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(5);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(0);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _constants = __webpack_require__(1);

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
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Title = exports.Poster = exports.MediaLink = exports.Remove = exports.TogglePlaylist = exports.Repeat = exports.Next = exports.Previous = exports.Shuffle = exports.Playlist = exports.constants = exports.actions = exports.reducer = exports.initializeOptions = exports.MediaLinkComponent = exports.RemoveComponent = exports.TogglePlaylistComponent = exports.NextComponent = exports.PreviousComponent = exports.ShuffleComponent = exports.PlaylistComponent = exports.JPlaylistComponent = undefined;

var _initializeOptions = __webpack_require__(8);

var _initializeOptions2 = _interopRequireDefault(_initializeOptions);

var _reducer = __webpack_require__(21);

var _reducer2 = _interopRequireDefault(_reducer);

var _actions = __webpack_require__(4);

var actions = _interopRequireWildcard(_actions);

var _constants = __webpack_require__(1);

var constants = _interopRequireWildcard(_constants);

var _jPlaylistContainer = __webpack_require__(23);

var _jPlaylistContainer2 = _interopRequireDefault(_jPlaylistContainer);

var _playlistContainer = __webpack_require__(36);

var _playlistContainer2 = _interopRequireDefault(_playlistContainer);

var _shuffleContainer = __webpack_require__(39);

var _shuffleContainer2 = _interopRequireDefault(_shuffleContainer);

var _previousContainer = __webpack_require__(40);

var _previousContainer2 = _interopRequireDefault(_previousContainer);

var _nextContainer = __webpack_require__(41);

var _nextContainer2 = _interopRequireDefault(_nextContainer);

var _repeatContainer = __webpack_require__(42);

var _repeatContainer2 = _interopRequireDefault(_repeatContainer);

var _togglePlaylistContainer = __webpack_require__(43);

var _togglePlaylistContainer2 = _interopRequireDefault(_togglePlaylistContainer);

var _removeContainer = __webpack_require__(44);

var _removeContainer2 = _interopRequireDefault(_removeContainer);

var _mediaLinkContainer = __webpack_require__(45);

var _mediaLinkContainer2 = _interopRequireDefault(_mediaLinkContainer);

var _posterContainer = __webpack_require__(46);

var _posterContainer2 = _interopRequireDefault(_posterContainer);

var _titleContainer = __webpack_require__(47);

var _titleContainer2 = _interopRequireDefault(_titleContainer);

var _jPlaylist = __webpack_require__(10);

var _jPlaylist2 = _interopRequireDefault(_jPlaylist);

var _playlist = __webpack_require__(13);

var _playlist2 = _interopRequireDefault(_playlist);

var _shuffle = __webpack_require__(14);

var _shuffle2 = _interopRequireDefault(_shuffle);

var _previous = __webpack_require__(15);

var _previous2 = _interopRequireDefault(_previous);

var _next = __webpack_require__(16);

var _next2 = _interopRequireDefault(_next);

var _togglePlaylist = __webpack_require__(17);

var _togglePlaylist2 = _interopRequireDefault(_togglePlaylist);

var _remove = __webpack_require__(18);

var _remove2 = _interopRequireDefault(_remove);

var _mediaLink = __webpack_require__(19);

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
exports.constants = constants;
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
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _lodash = __webpack_require__(22);

var _lodash2 = _interopRequireDefault(_lodash);

var _initializeOptions = __webpack_require__(8);

var _constants = __webpack_require__(1);

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
  var current = jPlaylist.current;

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
    current: index < 0 ? jPlaylist.playlist.length + index : index
  };
};

// Negative index relates to the end of the array
var play = function play(jPlaylist, _ref7) {
  var _ref7$index = _ref7.index,
      index = _ref7$index === undefined ? jPlaylist.current : _ref7$index;
  return {
    current: index < 0 ? jPlaylist.playlist.length + index : index,
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
/* 22 */
/***/ (function(module, exports) {

module.exports = _.maxBy;

/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _propTypes = __webpack_require__(0);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactJplayer = __webpack_require__(6);

var _reactRedux = __webpack_require__(7);

var _recompose = __webpack_require__(2);

var _jPlaylist = __webpack_require__(10);

var _jPlaylist2 = _interopRequireDefault(_jPlaylist);

var _constants = __webpack_require__(1);

var _actions = __webpack_require__(4);

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
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _reactJplayerUtils = __webpack_require__(3);

var _lodash = __webpack_require__(9);

var _lodash2 = _interopRequireDefault(_lodash);

var _keyControl = __webpack_require__(35);

var _keyControl2 = _interopRequireDefault(_keyControl);

var _actions = __webpack_require__(4);

var _getLoopState = __webpack_require__(11);

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
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _reactRedux = __webpack_require__(7);

var _recompose = __webpack_require__(2);

var _propTypes = __webpack_require__(0);

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function () {
  return (0, _recompose.compose)((0, _recompose.getContext)({ id: _propTypes2.default.string }), _reactRedux.connect.apply(undefined, arguments));
};

/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _reactRedux = __webpack_require__(7);

var _recompose = __webpack_require__(2);

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
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (artist, title) {
  var titleText = '';

  if (artist) {
    titleText += '' + artist;
  }

  if (title) {
    if (artist) {
      titleText += ' - ';
    }
    titleText += '' + title;
  }

  return titleText;
};

/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {
  HIDDEN: 'jp-hidden'
};

/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (number, max) {
  return 100 * (number / max);
};

/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (number, max) {
  return number * (max / 100);
};

/***/ }),
/* 31 */
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
/* 32 */
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
/* 33 */
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
/* 34 */
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
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(5);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(0);

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* eslint-disable react/forbid-prop-types */

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
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _reactJplayerUtils = __webpack_require__(3);

var _classnames = __webpack_require__(12);

var _classnames2 = _interopRequireDefault(_classnames);

var _constants = __webpack_require__(1);

var _playlist = __webpack_require__(13);

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
/* 37 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _propTypes = __webpack_require__(0);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactJplayerUtils = __webpack_require__(3);

var _recompose = __webpack_require__(2);

var _classnames = __webpack_require__(12);

var _classnames2 = _interopRequireDefault(_classnames);

var _playlistItem = __webpack_require__(38);

var _playlistItem2 = _interopRequireDefault(_playlistItem);

var _constants = __webpack_require__(1);

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
/* 38 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(5);

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
/* 39 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _reactJplayerUtils = __webpack_require__(3);

var _recompose = __webpack_require__(2);

var _actions = __webpack_require__(4);

var _shuffle = __webpack_require__(14);

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
/* 40 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _reactJplayerUtils = __webpack_require__(3);

var _recompose = __webpack_require__(2);

var _actions = __webpack_require__(4);

var _previous = __webpack_require__(15);

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
/* 41 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _reactJplayerUtils = __webpack_require__(3);

var _recompose = __webpack_require__(2);

var _actions = __webpack_require__(4);

var _next = __webpack_require__(16);

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
/* 42 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _reactJplayer = __webpack_require__(6);

var _reactJplayerUtils = __webpack_require__(3);

var _recompose = __webpack_require__(2);

var _actions = __webpack_require__(4);

var _getLoopState = __webpack_require__(11);

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
/* 43 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _reactJplayerUtils = __webpack_require__(3);

var _recompose = __webpack_require__(2);

var _togglePlaylist = __webpack_require__(17);

var _togglePlaylist2 = _interopRequireDefault(_togglePlaylist);

var _actions = __webpack_require__(4);

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
/* 44 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _reactJplayerUtils = __webpack_require__(3);

var _recompose = __webpack_require__(2);

var _actions = __webpack_require__(4);

var _remove = __webpack_require__(18);

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
/* 45 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _reactJplayerUtils = __webpack_require__(3);

var _recompose = __webpack_require__(2);

var _actions = __webpack_require__(4);

var _mediaLink = __webpack_require__(19);

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
/* 46 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _reactJplayer = __webpack_require__(6);

var _reactJplayerUtils = __webpack_require__(3);

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
/* 47 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _reactJplayer = __webpack_require__(6);

var _reactJplayerUtils = __webpack_require__(3);

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