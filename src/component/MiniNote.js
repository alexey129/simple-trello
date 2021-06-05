import React from 'react';
import { createStore } from 'redux';
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { connect } from 'react-redux'
import styled from 'styled-components';

class MiniNote extends React.Component{
	selectNote(event){
		let aabb = event.currentTarget;
		this.props.onSelectNote(aabb.firstChild.textContent);
	}

	shortText(arg){
		//обрезает текст по длине и вставляет многоточие
		const MAX_TEXT_LENGTH = 15;
		let text = arg;
		if(text.length > MAX_TEXT_LENGTH){
			text = text.slice(0,MAX_TEXT_LENGTH);
			text = text + '...';
		};
		return text;
	}

	render(){
		return <div onClick = {this.selectNote.bind(this)}>
			<div>{this.props.noteO.name}</div>
			<div className='mtext'>{this.shortText(this.props.noteO.text)}</div>
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
)(MiniNote);