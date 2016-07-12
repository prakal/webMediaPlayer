import React from 'react'
import ReactDOM from 'react-dom'
import 'font-awesome/css/font-awesome.css'
import './app.css'
import {browserHistory, Router, Route} from 'react-router'
import makeRoutes from './routes'

import CLAudioPlayer from 'react-cl-audio-player';

import styles2 from 'styles/musicPlayer.css'
import styles from 'styles.module.css'
const routes = makeRoutes()

const App = React.createClass({
	getInitialState(){
		return {
			activeItem: null
		}
	},
	getDefaultProps(){
		return {
			active: false,
		}
	},
	onItemActive(item){
		this.setState({activeItem: item})
	},
	setActive(){
		this.onItemActive(this.props.item);
	},

  selectSong(x){
  	this.setActive();
  	this.refs.foo.selectSong(x);

  },
  render() {
    this.number = 4;

    var songs = [
		  {
		    url: 'http://claymore.france.free.fr/momo/summer love.mp3',
		    cover: 'http://myuvn.com/wp-content/uploads/2015/07/justin-timberlake-pusher-love-girl.jpg',
	        artist: {
		      name: 'Justin Timberlake',
		      song: 'Summer Love'
		    }
		  },
		  {
		    url: 'http://dl1.mp3party.net/download/107701',
		    cover: 'https://upload.wikimedia.org/wikipedia/en/2/23/Pharrell_Williams_-_Happy.jpg',
		    artist: {
		      name: 'Pharrell Williams',
		      song: 'Happy'
		    }
		  },
		  {
		  	url: 'http://a.tumblr.com/tumblr_m819vt8p4s1r364xqo1.mp3',
		  	cover: '',
		  	artist: {
		  		name: 'Childish Gambino',
		  		song: 'Firefly'
		  	}
		  },
		  {
		    url: 'http://mymp3singer.net/files/download/id/110',
		    cover: 'http://mp3mad.net/image/28489/Fakira%20Sational-Dj%20Vabs.jpg',
		    artist: {
		      name: 'Hindi',
		      song: 'Fakeera'
		    }
		  },
		  {
		    url: 'http://a.tumblr.com/tumblr_mlyactVSyX1qejx3lo1.mp3',
		    cover: 'http://www.tenhomaisdiscosqueamigos.com/wp-content/uploads/2015/06/daft-punk.jpg',
		    artist: {
		      name: 'Daft Punk',
		      song: 'Get Lucky'
		    }
		  },
		  {
		    url: 'http://a.tumblr.com/tumblr_lxe7hpIUPA1r3ne4ro1.mp3',
		    artist: {
		      name: 'Michael Buble',
		      song: 'Feeling Good'
		    }
		  },
		  {
		    url: 'http://dl.tak3da.com/download/1394/03/The Weeknd - Can t Feel My Face [320].mp3',
		    cover: 'http://www.clickgratis.com.br/fotos-imagens/the-weekend/aHR0cDovL3d3dy5iaWxsYm9hcmQuY29tL2ZpbGVzL3N0eWxlcy9wcm9tb182NTAvcHVibGljL21lZGlhL3RoZS13ZWVrZW5kLXRoZS1oaWxscy12aWRlby1iaWxsYm9hcmQtNjUwLmpwZw==.jpg',
		    artist: {
		      name: 'The Weekend',
		      song: 'Can\'t Feel My Face'
		    }
		  },
		  {
		    url: 'http://midnightoilco.net/sitebuildercontent/sitebuilderfiles/metallicafuel.mp3',
		    cover: 'http://imagens.ailhadometal.com/2015/03/Metallica3.png',
		    artist: {
		      name: 'Metallica',
		      song: 'Fuel'
		    }
		  }
		];
	var songMarkup = [];
	var self = this;
	songs.forEach(function(item,index){
		songMarkup.push(<div 
			className={self.props.active ? 'active' : ''} 
			key={index}
			onClick={self.selectSong.bind(self, index)}
			active={item === self.state.activeItem}
			> {item.artist.song} - {item.artist.name} </div>)
	});
	// var muteClasses = classNames(styles2.fa, styles2.fa-volume-up);

		return (<h1 className={styles.both}> 
					<div className={styles.banner}> Web Music Player in {__NODE_ENV__}</div> 
					<div className={styles.table}> 
						{songMarkup}
					</div>
					<div className={styles.player}>
						<CLAudioPlayer
			          		songs={songs}
			          		number={this.number}
			          		ref='foo'
			        	/>
		        	</div>

				</h1>)
  }

});

const mountNode = document.querySelector('#root');
ReactDOM.render(<App history={browserHistory} routes={routes}/>, mountNode);
