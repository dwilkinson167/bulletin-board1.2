import React, { Component } from 'react'
import FaPencil from 'react-icons/lib/fa/pencil'
import FaTrash from 'react-icons/lib/fa/trash'

class Note extends Component {
    constructor(props) {
        super(props);
        Note.edit = Note.edit.bind(this);
        Note.remove = Note.remove.bind(this)
    }
    static edit() {
        alert('editing note')
    }
    static remove() {
        alert('removing note')
    }
    render() {
        return (
            <div className="note">
                <p>Learn React</p>
                <span>
                    <button onClick={Note.edit} id="edit"><FaPencil/></button>
                    <button onClick={Note.remove} id="remove"><FaTrash/></button>
                </span>
            </div>

        )
    }
}

export default Note