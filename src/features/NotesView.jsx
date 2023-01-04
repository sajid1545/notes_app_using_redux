import React from 'react';
import { useSelector } from 'react-redux';

const NotesView = () => {

    const notes = useSelector(state => state.notesReducer.notes)

    return (
        <div>
            <h1 className="text-7xl text-center font-extrabold">All Notes</h1>
        </div>
    );
};

export default NotesView;