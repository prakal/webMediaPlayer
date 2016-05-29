import React from 'react'
import ReactDOM from 'react-dom'
import './app.css'
import styles from './styles.module.css'

const App = React.createClass({
	render: function(){
		return (<h1 className={styles.wrapper}> Some text here </h1>)

	}
});

const mountNode = document.querySelector('#root');
ReactDOM.render(<App />, mountNode);
