import React from 'react';
import { createStore } from 'redux';
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { connect } from 'react-redux'
import styled from 'styled-components';

import NoteList from './NoteList.js'
import Note from './Note.js'
import AddNote from './AddNote.js'

import css from './style.scss';

export class App extends React.Component{
	selectNote(event){
		let aabb = event.target.parentNode;
		console.log("*",aabb.lastChild.innerHTML,"*");
		console.log('событие selectNote');
	}
	render(){
		return <div className = "AppContainer">
			<AddNote className = "AppContainer__add"/>
			<NoteList className = "AppContainer__list"/>
			<Note className = "AppContainer__note"/>
		</div>
	}
}

