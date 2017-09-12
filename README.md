[![Build Status](https://travis-ci.org/jplayer/react-jPlaylist.svg?branch=master)](https://travis-ci.org/jplayer/react-jPlaylist)
[![Coverage Status](https://coveralls.io/repos/github/jplayer/react-jPlaylist/badge.svg?branch=master)](https://coveralls.io/github/jplayer/react-jPlaylist?branch=master)
[![dependencies Status](https://david-dm.org/martindawson/react-jPlaylist/status.svg)](https://david-dm.org/jPlayer/react-jPlaylist)
[![devDependencies Status](https://david-dm.org/martindawson/react-jPlaylist/dev-status.svg)](https://david-dm.org/jPlayer/react-jPlaylist?type=dev)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

# react-jPlaylist
react-jPlaylist is an add-on to [react-jPlayer](https://github.com/jplayer/react-jPlayer) that provides playlist functionality and components for you to use.

<!-- toc -->

  * [Examples](#examples)
  * [Installation](#installation)
  * [Features](#features)
  * [Supported Browsers](#supported-browsers)
- [Documentation](#documentation)
    + [`initializeOptions(jPlayerOptions, jPlaylistOptions)` : Required](#initializeoptionsjplayeroptions-jplaylistoptions--required)
    + [`reducer()` : Required](#reducer--required)
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

### Examples
https://github.com/jplayer/react-jPlayer-examples

### Installation
`npm install --save react-jplaylist`

### Features
* Cross compatible with many legacy different Html5 browsers
* Back, Forward, Shuffle, Playlist Selection, Playlist Looping
* Fully customizable, modular and componentized
* Comes with a fully reponsive css skin for your players

### Supported Browsers
Same as [react-jPlayer](https://github.com/jplayer/react-jPlayer#supported-browsers)

## Documentation
#### `initializeOptions(jPlayerOptions, jPlaylistOptions)` : Required
Used for setting up the default options for your jPlaylist. Deep merges the options that you pass in with react-jPlayer's and react-jPlaylist's default options. The result of this is used as the initial state for your jPlaylist.

**Arguments**
1. `jPlayerOptions` (object): The [jPlayer options](https://github.com/jplayer/react-jPlayer#options) to specify for your jPlaylist.
2. `jPlaylistOptions` (object): The [jPlaylist options](https://github.com/jplayer/react-jPlaylist#options) to specify for your jPlaylist.

#### `reducer()` : Required
The jPlaylist reducer that will be called whenever a jPlaylist function is dispatched. Must be passed to your store with the key named 'jPlaylists'.

#### Actions
All of the actions need to be dispatched using Reduxes `dispatch` function as you normally do with actions.

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
jPlaylist will load the playlist from this option on load automatically. Each object within the array should be the same as react-jPlayer's [media schema](https://github.com/jplayer/react-jPlayer#media-object) but also must include an id that can be a string or a number.

E.g.

media: {
  {
    id: 0,
    // react jPlayer media options here...
  }
}

`id` needs to be a number or a string.

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
#### `JPlaylist` : Required
**props**
1. `children` (element) : Required: Must be the [JPlayer](https://github.com/jplayer/react-jPlayer#jplayer) component.
2. `id` (string) : Required: Must be the same as the one you supplied to the [jPlayer options](https://github.com/jplayer/react-jPlayer#id-string--required).
3. `keyBindings` (object): Specifies the keyBindings to be applied when that key is pressed. Deep merges these props with the jPlaylist's default keyBindings.
See [react-jPlayer's keyBindings](https://github.com/jplayer/react-jPlayer#jplayer) for more information.

Default:
```
keyBindings: {
  next: {
    key: 221, // ]
    fn: () => dispatch(next(id)),
  },
  previous: {
    key: 219, // [
    fn: () => dispatch(previous(id)),
  },
  shuffle: {
    key: 83, // s
    fn: () => dispatch(shuffle(id, undefined, true)),
  },
  loop: {
    key: 76, // l
    fn: () => {
      const loop = getLoopState(stateProps.loop);

      dispatch(setOption(id, 'loop', loop));
    },
  },
}
```

This component needs to wrap the [JPlayer component](https://github.com/jplayer/react-jPlayer#jplayer)

#### `Playlist`
**props**
1. `children` (node) : Required

Any component that is a child of this component will be duplicated x number of times where x is the size of your playlist.

#### `Remove`
**props**
1. `children` (node) : Required

Default: `×`

Should be nested as a child of the [`Playlist`](https://github.com/jplayer/react-jPlaylist#playlist) component. Renders the remove controls for each media in your playlist.

#### `MediaLink`
**props**
1. `children` (node) : Required

Should be nested as a child of the [`Playlist`](https://github.com/jplayer/react-jPlaylist#playlist) component. Renders the media links for the playlist and allows the user to select other media's in your playlist.

#### `Title`
Default: `media.artist` - `media.title`

Should be nested as a child of the [`Playlist`](https://github.com/jplayer/react-jPlaylist#playlist) component. Renders the artist and title of the current media.

#### `Poster`
Should be nested as a child of the [`Playlist`](https://github.com/jplayer/react-jPlaylist#playlist) component. Renders the poster of the current media.

#### `TogglePlaylist`
**props**
1. `children` (node) : Required

Used in conjunction with the [`hidePlaylist`](https://github.com/jplayer/react-jPlaylist#hideplaylist-bool) property. Toggles the visiblity of the playlist `onClick`.

#### `Previous`
**props**
1. `children` (node) : Required

`onClick` calls the [`previous`](https://github.com/jplayer/react-jPlaylist#previousid) action internally and sets the media to the previous item.

#### `Next`
**props**
1. `children` (node) : Required

`onClick` calls the [`next`](https://github.com/jplayer/react-jPlaylist#nextid) action internally and sets the media to the next item.

#### `Shuffle`
**props**
1. `children` (node) : Required

`onClick` calls the [`shuffle`](https://github.com/jplayer/react-jPlaylist#shuffleid-shuffled-playnow) action internally and shuffles the media.

#### `Repeat`
**props**
1. `children` (node) : Required

`onClick` calls the [`setOption`](https://github.com/jplayer/react-jPlaylist#setoptionid-key-value) action internally and sets the loop to the next state, i.e. if loop is currently 'off" then clicking on this component will set the loop state to 'loop'.
