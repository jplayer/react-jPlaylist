[![Build Status](https://travis-ci.org/MartinDawson/react-jPlaylist.svg?branch=master)](https://travis-ci.org/MartinDawson/react-jPlaylist)
[![Coverage Status](https://coveralls.io/repos/github/MartinDawson/react-jPlaylist/badge.svg?branch=master)](https://coveralls.io/github/MartinDawson/react-jPlaylist?branch=master)
[![dependencies Status](https://david-dm.org/martindawson/react-jPlaylist/status.svg)](https://david-dm.org/martindawson/react-jPlaylist)
[![devDependencies Status](https://david-dm.org/martindawson/react-jPlaylist/dev-status.svg)](https://david-dm.org/martindawson/react-jPlaylist?type=dev)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

# react-jPlaylist
react-jPlaylist is an add-on to [react-jPlayer](https://github.com/MartinDawson/react-jPlayer) that provides playlist functionality and components for you to use.

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

#### `reducer` : Required
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
jPlaylist automatically passes the following in to your jPlaylist component:

- `[id]` (string): The current jPlaylist's id that you supplied through [`options.id`](https://github.com/MartinDawson/react-jPlayer#id-string--required).
- [`[...actions]`](https://github.com/MartinDawson/react-jPlaylist#actions) (func): The actions that you can call to modify jPlaylist's properties at runtime.
- [`jPlayers`](https://github.com/MartinDawson/react-jPlaylist#options) (object): All of the jPlayers and their options get passed in here. The names of the jPlayers are what you specified for each one in [`options.id`](https://github.com/MartinDawson/react-jPlayer#id-string--required).
- [`jPlaylists`](https://github.com/MartinDawson/react-jPlaylist#status) (object): All of the jPlaylists and their options get passed in here. The names of the jPlaylists are what you specified for each one in [`options.id`](https://github.com/MartinDawson/react-jPlayer#id-string--required).
