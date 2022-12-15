import React, { useState } from 'react';

type InputProps = {
    value: string,
    handleChange: (event: React.Chan)
}

const Input = () => {
    // use the useState hook to initialize the notes array
    const [notes, setNotes] = useState([]);
  
    return (
      <div>
        {/* render a form to add new notes */}
        <form>
          <input type="text" placeholder="Add a new note" />
          <button type="submit">Add</button>
        </form>
  
        {/* render a list of notes */}
        <ul>
          {notes.map((note) => (
            <li key={note}>{note}</li>
          ))}
        </ul>
      </div>
    );
  };