import React from 'react';
import { createStore } from 'redux';
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { connect } from 'react-redux'
import styled from 'styled-components';
import MiniNote from './MiniNote.js'
import css from './style.scss';

class NoteList extends React.Component{

	render(){
		if(this.props.testStore.notes.length > 0){
			return <div className='nodeList'>
				<ul className="nodeList__list" >
					{this.props.testStore.notes.map((track, index) =>
						<li className="nodeList__item" key="uniqueId1"><MiniNote noteO={track} /></li>
					)}
				</ul>
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
	})
)(NoteList);