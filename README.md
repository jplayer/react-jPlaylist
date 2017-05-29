[![Build Status](https://travis-ci.org/jplayer/react-jPlaylist.svg?branch=master)](https://travis-ci.org/jplayer/react-jPlaylist)
[![Coverage Status](https://coveralls.io/repos/github/jplayer/react-jPlaylist/badge.svg?branch=master)](https://coveralls.io/github/jplayer/react-jPlaylist?branch=master)
[![dependencies Status](https://david-dm.org/martindawson/react-jPlaylist/status.svg)](https://david-dm.org/martindawson/react-jPlaylist)
[![devDependencies Status](https://david-dm.org/martindawson/react-jPlaylist/dev-status.svg)](https://david-dm.org/martindawson/react-jPlaylist?type=dev)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

# react-jPlaylist
react-jPlaylist is an add-on to [react-jPlayer](https://github.com/jplayer/react-jPlayer) that provides playlist functionality and components for you to use.

<!-- toc -->

  * [Live Demo](#live-demo)
  * [Examples](#examples)
  * [Installation](#installation)
    + [NPM](#npm)
    + [UMD](#umd)
  * [Features](#features)
  * [Supported Browsers](#supported-browsers)
- [Documentation](#documentation)
    + [`initialState([jPlaylists])` : Required](#initialstatejplaylists--required)
    + [`reducer()` : Required](#reducer--required)
    + [`connect(jPlaylist, options, jPlaylistOptions)` : Required](#connectjplaylist-options-jplaylistoptions--required)
  * [Props](#props)
    + [Actions](#actions)
      - [`setOption(id, key, value)`](#setoptionid-key-value)
      - [`setPlaylist(id, playlist)`](#setplaylistid-playlist)
      - [`add(id, media, playNow?)`](#addid-media-playnow)
      - [`remove(id, index)`](#removeid-index)
      - [`clear(id)`](#clearid)
      - [`play(id, index?)`](#playid-index)
      - [`shuffle(id, shuffled?, playNow?)`](#shuffleid-shuffled-playnow)
      - [`next(id)`](#nextid)
      - [`previous(id)`](#previousid)
    + [Options](#options)
      - [`playlist` (array: objects) : Required](#playlist-array-objects--required)
      - [`loopOnPrevious` (bool)](#looponprevious-bool)
      - [`shuffleOnLoop` (bool)](#shuffleonloop-bool)
      - [`loop` (string)](#loop-string)
      - [`hidePlaylist` (bool)](#hideplaylist-bool)
  * [Components](#components)
    + [`JPlaylist` : Required](#jplaylist--required)
    + [`Playlist`](#playlist)
    + [`Remove`](#remove)
    + [`MediaLink`](#medialink)
    + [`Title`](#title)
    + [`Poster`](#poster)
    + [`TogglePlaylist`](#toggleplaylist)
    + [`Previous`](#previous)
    + [`Next`](#next)
    + [`Shuffle`](#shuffle)
    + [`Repeat`](#repeat)

<!-- tocstop -->

### Live Demo
http://react-jplayer.azurewebsites.net/

### Examples
https://github.com/jplayer/react-jPlayer-examples

### Installation
#### NPM
`npm install --save react-jplaylist`

#### UMD
The recommended way to use this package is through npm and webpack. However if you insist on including the .js and .css files manually then it is available from the `/dist/` folder.
For example, if you copied the `/dist/` folder to the root of your project then the src tags would look like this:

```
<link rel="stylesheet" type="text/css" href="./dist/css/controls/iconControls.css">
<link rel="stylesheet" type="text/css" href="./dist/css/sleek.css">

<script src="./dist/js/jPlaylist.js"></script>
```

Module is exported to a global variable called `ReactJPlaylist`.

### Features
* Cross compatible with many legacy different Html5 browsers
* Back, Forward, Shuffle, Playlist Selection, Playlist Looping
* Fully customizable, modular and componentized
* Comes with a fully reponsive css skin for your players

### Supported Browsers
Same as [react-jPlayer](https://github.com/jplayer/react-jPlayer#supported-browsers)

## Documentation
#### `initialState([jPlaylists])` : Required
Deep merges the options that you passed into the [`connect`](https://github.com/jplayer/react-jPlaylist#connectjplaylist-options-jplaylistoptions--required) function with react-jPlaylist's default options. The result of this must be passed to your stores initial state.

**Arguments**
1. `jPlaylist(s)` (array or single react element): Accepts either an array of jPlaylists or a single jPlaylist. 

**Returns**

(object): The initial state for the jPlaylist(s) that needs to be passed to the Redux store.

#### `reducer()` : Required
The jPlaylist reducer that will be called whenever a jPlaylist function is dispatched. Must be passed to your store with the key named 'jPlaylists'.

#### `connect(jPlaylist, options, jPlaylistOptions)` : Required
Connects your jPlaylist to the jPlayer store by wrapping Redux's original connect.

**Arguments**
1. `jPlaylist` (function): Your jPlaylist with which to connect to the store.
2. `options` (object): The [jPlayer options](https://github.com/jplayer/react-jPlayer#options) that you want the jPlaylist to be initialized with.
2. `jPlaylistOptions` (object): The [jPlaylist options](https://github.com/jplayer/react-jPlaylist#options) that you want the jPlaylist to be initialized with.

**Returns**

(function): A component that wraps your jPlaylist. This means that you can use Redux original connect to wrap this connect with as well if you wanted to pass aditional Redux data from the store to your jPlaylist.

**Static Properties**
1. `jPlayer`: The original jPlaylist component that you passed in.
2. `options`: The jPlayer options that you passed into the `connect()`.
2. `jPlaylistOptions`: The jPlaylist options that you passed into the `connect()`.

**Renders**

The connected jPlaylist. Any additional props that you passed in are passed through to your jPlaylist so you can use them as usual.

### Props
jPlaylist automatically passes the following properties in to your jPlaylist component:

- `id` (string): The current jPlaylist's id that you supplied through [`options.id`](https://github.com/jplayer/react-jPlayer#id-string--required).
- [`[...actions]`](https://github.com/jplayer/react-jPlaylist#actions) (func): The actions that you can call to modify jPlaylist's properties at runtime.
- `jPlayers` (object): All of the jPlayers options get passed in here. The names of the jPlayers are what you specified for each one in [`options.id`].
- `jPlaylists` (object): All of the jPlaylists options get passed in here. The names of the jPlaylists are what you specified for each one in [`options.id`].

#### Actions
All of the actions automatically get passed into your jPlaylists for ease of use so you can just call them directly.

##### `setOption(id, key, value)`
Sets any jPlaylist [option](https://github.com/jplayer/react-jPlaylist#options).

**Arguments**
1. `id` (string): Id of the jPlaylist to apply this to.
2. `key` (string): The name of the option that you want to set. Specifying nested keys is not supported.
3. `value` (any): The value to set the option to.

##### `setPlaylist(id, playlist)`
Sets the playlist of the jPlaylist. You don't need to use this on jPlaylist load because this method is automatically called internally on `componentDidMount` with the playlist you supplied in [options.playlist](https://github.com/jplayer/react-jPlaylist#options).

**Arguments**
1. `id` (string): Id of the jPlaylist to apply this to.
2. `playlist` (array: objects): The new playlist which will be set to your jPlaylist.

##### `add(id, media, playNow?)`
Adds the media to the end of the playlist.

**Arguments**
1. `id` (string): Id of the jPlaylist to apply this to.
2. [`media` (object):](https://github.com/jplayer/react-jPlayer#media-object) The media to be added to your playlist.
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
Properties in this object are used to initialize the jPlaylist. They are deep merged with the default jPlaylist options.

##### `playlist` (array: objects) : Required
jPlaylist will load the playlist from this option in `componentWillMount()` automatically. Each object within the array needs to the same as react-jPlayer's [media schema](https://github.com/jplayer/react-jPlayer#media-object).

##### `loopOnPrevious` (bool)
Default: true

The playlist will loop back to the end when calling [`previous()`](https://github.com/jplayer/react-jPlaylist#previousid).

##### `shuffleOnLoop` (bool)
Default: true

If loop is 'loop-playlist' and shuffled is true, the playlist will shuffle when calling [`next()`](https://github.com/jplayer/react-jPlaylist#nextid) on the last item.

##### `loop` (string)
Default: "loop-playlist"

There are three settings which jPlaylist recognizes for loop:
1. 'off': Doesn't loop the playlist or the current media, stops on the last item when [`next()`](https://github.com/jplayer/react-jPlaylist#nextid) is called.
2. 'loop': Loops the current media in the playlist.
3. 'loop-playlist': Loops the entire playlist when calling [`next()`](https://github.com/jplayer/react-jPlaylist#nextid) on the last item.

##### `hidePlaylist` (bool)
Default: false

Hides or shows the playlist. Used internally with the [`TogglePlaylist`](https://github.com/jplayer/react-jPlaylist#toggleplaylist) component.

### Components
All components accept custom props that will be applied as attributes to the component if the names don't conflict with existing properties.

**WARNING**: If the names do conflict then the custom props will overwrite any existing props that are used on that component internally, including event handlers. The exception to this is the property `className` for the [`JPlaylist`](https://github.com/jplayer/react-jPlaylist#jplaylist--required) component which is merged with the internal classes.

E.g. `<Shuffle data-test="test" />` will render `<div className="jp-shuffle" data-test="test"></div>`

#### `JPlaylist` : Required
**props**
1. `className` (string): Merged with the internally used classNames that jPlaylist uses. Useful for specifying the jPlaylist skin type that you want to use, e.g. `<JPlaylist className="jp-sleek">`.

Needs to be at the root of any other jPlayer and jPlaylist components. You don't specify the [`JPlayer`](https://github.com/jplayer/react-jPlayer#jplayer) component when using jPlaylist as this component replaces that and wraps the [`JPlayer`](https://github.com/jplayer/react-jPlayer#jplayer) component internally.

#### `Playlist`
Any component that is a child of this component will be duplicated x number of times where x is the size of your playlist.

#### `Remove`
Default: `×`

Should be nested as a child of the [`Playlist`](https://github.com/jplayer/react-jPlaylist#playlist) component. Renders the remove controls for each media in your playlist.

#### `MediaLink`
Should be nested as a child of the [`Playlist`](https://github.com/jplayer/react-jPlaylist#playlist) component. Renders the media links for the playlist and allows the user to select other media's in your playlist.

#### `Title`
Default: `media.artist` - `media.title`

Should be nested as a child of the [`Playlist`](https://github.com/jplayer/react-jPlaylist#playlist) component. Renders the artist and title of the current media.

#### `Poster`
Should be nested as a child of the [`Playlist`](https://github.com/jplayer/react-jPlaylist#playlist) component. Renders the poster of the current media.

#### `TogglePlaylist`
Used in conjunction with the [`hidePlaylist`](https://github.com/jplayer/react-jPlaylist#hideplaylist-bool) property. Toggles the visiblity of the playlist `onClick`.

#### `Previous`
`onClick` calls the [`previous`](https://github.com/jplayer/react-jPlaylist#previousid) action internally and sets the media to the previous item.

#### `Next`
`onClick` calls the [`next`](https://github.com/jplayer/react-jPlaylist#nextid) action internally and sets the media to the next item.

#### `Shuffle`
`onClick` calls the [`shuffle`](https://github.com/jplayer/react-jPlaylist#shuffleid-shuffled-playnow) action internally and shuffles the media.

#### `Repeat`
`onClick` calls the [`setOption`](https://github.com/jplayer/react-jPlaylist#setoptionid-key-value) action internally and sets the loop to the next state, i.e. if loop is currently 'off" then clicking on this component will set the loop state to 'loop'.
