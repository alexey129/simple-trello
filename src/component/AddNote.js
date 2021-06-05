import React from 'react';
import { createStore } from 'redux';
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { connect } from 'react-redux'
import styled from 'styled-components';
import css from './style.scss';

class AddNote extends React.Component{

	addButton(event){
		let formAdd = document.querySelector('.AddNoteContainer__form');
		let a = formAdd.nameN.value;
		let b = formAdd.textN.value;
		this.props.onAddNote(a, b);
	}

	render(){
		return <div className = "AddNoteContainer">
			<div className = "AddNoteContainer__create" onClick = {this.addButton.bind(this)}>создать заметку</div>
			<form className='AddNoteContainer__form'>
				<input type='text' name='nameN' placeholder='название заметки' />
				<textarea name='textN' placeholder='текст заметки' />
			</form>
		</div>
	}
}

export default connect(
	state => ({
		testStore: state
	}),
	dispatch => ({
		onAddNote: (NoteName, NoteText) => {
			dispatch({ type: 'ADD_NOTE', name: NoteName, text: NoteText})
		},
		onSelectNote: (Note) => {
			dispatch({ type: 'SELECT_NOTE', note: Note})
		},
	})
)(AddNote);