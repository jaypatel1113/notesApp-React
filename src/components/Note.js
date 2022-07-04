// import { MdDeleteForever } from 'react-icons/md';

const Note = ({ id, text, date, handleDeleteNote }) => {
	return (
		<div className='note'>
			<span>{text}</span>
			<div className='note-footer'>
				<small>{date}</small>
				<span
					onClick={() => handleDeleteNote(id)}
					className='delete-icon'
					title="Delete"
				><i className="fa-solid fa-xmark"></i></span>
			</div>
		</div>
	);
};

export default Note;
