//программа для создания заметок, слева список заметок, справа отдельная заметка

import React from 'react';
import { createStore } from 'redux';
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { connect } from 'react-redux'
import styled from 'styled-components';

import {App} from './component/App.js'


//создаем хранилище для состояния
let store = createStore(reducer);

ReactDOM.render(
	<Provider store={store}>
		<App />
	</Provider>
	,document.getElementById('root')
)

/*функция которая создается в одном месте и следит за изменениями
состояния*/
function reducer(state = {notes:[],selectedNote:""}, action) {
	console.log(action.type);
	let localState = {...state};
	
	if(action.type == 'ADD_NOTE'){
		let note = {
			name: action.name,
			text: action.text,
		}
		localState.notes.push(note);
		return localState;
	};
	if(action.type == 'SELECT_NOTE'){
		console.log(action.note);
		for(let i of localState.notes){
			if(i.name == action.note){
				localState.selectedNote = i;
				break;
			};
		};
		console.log(localState.selectedNote.text);
		return localState;
	};
	if(action.type == 'DELETE_NOTE'){
		console.log(action.note);
		for(let i = 0;i< localState.notes.length;i++){
			if(localState.notes[i].name == action.note.name){
				localState.notes.splice(i,1);
				localState.selectedNote = '';
			}
		}
		return localState;
	};
	return localState;
}

//функция которая запускается каждый раз когда меняется состояние
store.subscribe(() => {
	console.log('состояние поменялось');
})

