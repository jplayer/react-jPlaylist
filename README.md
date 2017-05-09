[![Build Status](https://travis-ci.org/MartinDawson/react-jPlaylist.svg?branch=master)](https://travis-ci.org/MartinDawson/react-jPlaylist)
[![Coverage Status](https://coveralls.io/repos/github/MartinDawson/react-jPlaylist/badge.svg?branch=master)](https://coveralls.io/github/MartinDawson/react-jPlaylist?branch=master)
[![dependencies Status](https://david-dm.org/martindawson/react-jPlaylist/status.svg)](https://david-dm.org/martindawson/react-jPlaylist)
[![devDependencies Status](https://david-dm.org/martindawson/react-jPlaylist/dev-status.svg)](https://david-dm.org/martindawson/react-jPlaylist?type=dev)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

# react-jPlaylist
react-jPlaylist is an add-on to [react-jPlayer](https://github.com/MartinDawson/react-jPlayer) that provides playlist functionality and components for you to use.

<!-- toc -->

  * [Live Demo](#live-demo)
  * [Installation](#installation)
    + [NPM](#npm)
    + [UMD](#umd)
  * [Features](#features)
  * [Supported Browsers](#supported-browsers)
- [Documentation](#documentation)
    + [`initialState([jPlaylists])` : Required](#initialstatejplaylists--required)
    + [`reducer` : Required](#reducer--required)
    + [`connect(jPlaylist, options, jPlaylistOptions)` : Required](#connectjplaylist-options-jplaylistoptions--required)
  * [Props](#props)

<!-- tocstop -->

### Live Demo
http://react-jplayer.azurewebsites.net/

### Installation
#### NPM
`npm install --save react-jplaylist`

#### UMD
The recommended way to use this package is through npm and webpack. However if you insist on including the .js and .css files manually then it is available from the `/dist/` folder.
For example, if you copied the `/dist/` folder to the root of your project then the src tags would look like this:

`<script src="./dist/js/jPlaylist.js"></script>`

`<script src="./dist/css/sleek.css"></script>`

Module is exported to a global variable called `ReactJPlaylist`.

### Features
* Cross compatible with many legacy different Html5 browsers
* Back, Forward, Shuffle, Playlist Selection, Playlist Looping
* Fully customizable, modular and componentized
* Comes with a fully reponsive css skin for your players

### Supported Browsers
Same as [react-jPlayer](https://github.com/MartinDawson/react-jPlayer#supported-browsers)

## Documentation
#### `initialState([jPlaylists])` : Required
Deep merges the options that you passed into the [`connect`](#) function with react-jPlayer's defaults. The result of this must be passed to your stores initial state.

**Arguments**
1. `jPlaylist(s)` (array or single react element): Accepts either an array of jPlaylists or a single jPlaylist. 

**Returns**

(object): The initial state for the jPlaylists(s) that needs to be passed to the Redux store.

#### `reducer()` : Required
The jPlaylist reducer that will be called whenever a jPlaylist function is dispatched. Must be passed to your store named 'jPlaylists'.

#### `connect(jPlaylist, options, jPlaylistOptions)` : Required
Connects your jPlaylist to the jPlayer store by wrapping Redux's original connect.

**Arguments**
1. `jPlaylist` (function): Your jPlaylist with which to connect to the store.
2. `options` (object): The [jPlayer options](#) that you want the jPlaylist to be initialized with.
2. `jPlaylistOptions` (object): The [jPlaylist options](#) that you want the jPlaylist to be initialized with.

**Returns**

(function): A component that wraps your jPlaylist. This means that you can use Redux original connect to wrap this connect with as well if you wanted to pass aditional Redux data from the store to your jPlaylist.

**Static Properties**
1. `jPlayer`: The original jPlaylist component that you passed in.
2. `options`: The jPlayer options that you passed into the `connect()`.
2. `jPlaylistOptions`: The jPlaylist options that you passed into the `connect()`.

### Props
jPlaylist automatically passes the following properties in to your jPlaylist component:

- `[id]` (string): The current jPlaylist's id that you supplied through [`options.id`](https://github.com/MartinDawson/react-jPlayer#id-string--required).
- [`[...actions]`](https://github.com/MartinDawson/react-jPlaylist#actions) (func): The actions that you can call to modify jPlaylist's properties at runtime.
- [`jPlayers`](https://github.com/MartinDawson/react-jPlaylist#options) (object): All of the jPlayers and their options get passed in here. The names of the jPlayers are what you specified for each one in [`options.id`](https://github.com/MartinDawson/react-jPlayer#id-string--required).
- [`jPlaylists`](https://github.com/MartinDawson/react-jPlaylist#status) (object): All of the jPlaylists and their options get passed in here. The names of the jPlaylists are what you specified for each one in [`options.id`](https://github.com/MartinDawson/react-jPlayer#id-string--required).

#### Actions
All of the actions automatically get passed into your jPlaylists for ease of use so you can just call them directly.

##### `setOption(id, key, value)`
Sets any jPlaylist [option](#).

**Arguments**
1. `id` (string): Id of the jPlaylist to apply this to.
2. `key` (string): The name of the option that you want to set. Specifying nested keys is not supported.
3. `value` (any): The value to set the option to.

##### `setPlaylist(id, playlist)`
Sets the playlist of the jPlaylist. You don't need to use this on jPlaylist load because this method is automatically called internally on `componentDidMount` with the playlist you supplied in [options.playlist](#).

**Arguments**
1. `id` (string): Id of the jPlaylist to apply this to.
2. `playlist` (array of objects): The new playlist which will be set to your jPlaylist.

Example:
```
[
  {
    title: 'Big Buck Bunny Trailer',
    artist: 'peach.blender',
    sources: {
      m4v: 'http://www.jplayer.org/video/m4v/Big_Buck_Bunny_Trailer.m4v',
      ogv: 'http://www.jplayer.org/video/ogv/Big_Buck_Bunny_Trailer.ogv',
      webmv: 'http://www.jplayer.org/video/webm/Big_Buck_Bunny_Trailer.webm',
    },
    free: true,
    poster: 'http://www.jplayer.org/video/poster/Big_Buck_Bunny_Trailer_480x270.png',
  }
]
```

##### `add(id, media, playNow?)`
Adds the media to the end of the playlist.

**Arguments**
1. `id` (string): Id of the jPlaylist to apply this to.
2. `media` (object): The media to be added to your playlist.

Example:
```
{
  title: 'Big Buck Bunny Trailer',
  artist: 'peach.blender',
  sources: {
    m4v: 'http://www.jplayer.org/video/m4v/Big_Buck_Bunny_Trailer.m4v',
    ogv: 'http://www.jplayer.org/video/ogv/Big_Buck_Bunny_Trailer.ogv',
    webmv: 'http://www.jplayer.org/video/webm/Big_Buck_Bunny_Trailer.webm',
  },
  free: true,
  poster: 'http://www.jplayer.org/video/poster/Big_Buck_Bunny_Trailer_480x270.png',
}
```
3. `playNow` (bool): Optionally play the media as soon as it's added.

##### `remove(id, index)`
Removes the media from the playlist at the specified index.

**Arguments**
1. `id` (string): Id of the jPlaylist to apply this to.
2. `index` (number): The index of the playlist array with which to remove.

##### `clear(id)`
Clears the playlist array and resets some jPlaylist values back to default.

**Arguments**
1. `id` (string): Id of the jPlaylist to apply this to.

##### `play(id, index?)`
Plays the jPlaylist. If no index is supplied then it plays the current media.

**Arguments**
1. `id` (string): Id of the jPlaylist to apply this to.
2. `index` (number): Optionally play the media at the supplied index.

##### `shuffle(id, shuffled?, playNow?)`
Shuffles the playlist. 

**Arguments**
1. `id` (string): Id of the jPlaylist to apply this to.
2. `shuffled` (bool): Toggles shuffled setting if no param is given. True always shuffles the playlist. False will un-shuffle if it was shuffled.
3. `playNow` (bool): Optionally play the media as soon as it's shuffled.

##### `next(id)`
Plays the next media item in the playlist.

**Arguments**
1. `id` (string): Id of the jPlaylist to apply this to.

##### `previous(id)`
Plays the previous media item in the playlist.

**Arguments**
1. `id` (string): Id of the jPlaylist to apply this to.

#### Options
You specify these values on a functions static property that must be called `options` as shown in the [example](https://github.com/MartinDawson/react-jPlayer#most-basic-setup). Properties in this object are used to initialize the jPlayer. They are deep merged with the default values.

##### `loopOnPrevious` (bool)
Default: true

The playlist will loop back to the end when calling [`previous()`](#).

##### `shuffleOnLoop` (bool)
Default: true

If loop is 'loop-playlist' and shuffled is true, the playlist will shuffle when calling [`next()`](#) on the last item.

##### `loop` (string)
Default: "loop-playlist"

There are three settings which jPlaylist recognizes for loop:
1. 'off': Doesn't loop the playlist or the current media, stops on the last item when [`next()`](#) is called.
2. 'loop': Loops the current media in the playlist.
3. 'loop-playlist': Loops the entire playlist when calling [`next()`](#) on the last item.

##### `hidePlaylist` (bool)
Default: false

Hides or shows the playlist. Used internally with the [`<TogglePlaylist />`](#) component.
