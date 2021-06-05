import React from 'react';
import { createStore } from 'redux';
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { connect } from 'react-redux'
import styled from 'styled-components';

import css from './style.scss';

class Note extends React.Component{
	deleteButton(event){
		let noteEx = this.props.testStore.selectedNote;
		this.props.onDeleteNote(noteEx);
	}
	render(){
		if(this.props.testStore.selectedNote != ''){
			return <div className="Note">
				<div className="Note__name">{this.props.testStore.selectedNote.name}</div>
				<div className="Note__text">{this.props.testStore.selectedNote.text}</div>
				<div className="Note__delete-button" onClick = {this.deleteButton.bind(this)}>удалить</div>
			</div>
		} else {
			return <> </>
		}
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
		onDeleteNote: (Note) => {
			dispatch({ type: 'DELETE_NOTE', note: Note})
		},
	})
)(Note);