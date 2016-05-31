import React from 'react'
import ReactDOM from 'react-dom'
import 'font-awesome/css/font-awesome.css'
import './app.css'
import {browserHistory, Router, Route} from 'react-router'
import makeRoutes from './routes'
import App from 'containers/App'

import { PlayButton, Progress, Icons } from 'react-soundplayer/components';
import { SoundPlayerContainer } from 'react-soundplayer/addons';

var WebTorrent = require('webtorrent')
const routes = makeRoutes()

import styles from './styles.module.css'


// const App = React.createClass({
// 	clientAdd: function(){
// 		var client = new WebTorrent();
// 		var magnetURI = 'magnet:?xt=urn:btih:6a9759bffd5c0af65319979fb7832189f4f3c35d';

// 		client.add(magnetURI, function (torrent) {
// 		  // Got torrent metadata!
// 		  console.log('Client is downloading:', torrent.infoHash)

// 		  torrent.files.forEach(function (file) {
// 		    // Display the file by appending it to the DOM. Supports video, audio, images, and
// 		    // more. Specify a container element (CSS selector or reference to DOM node).
// 		    file.appendTo('body')
// 		  })
// 		});
// 	},
// 	render: function(){

// 	}
// });

const mountNode = document.querySelector('#root');
ReactDOM.render(<App history={browserHistory} routes={routes}/>, mountNode);
