import React from 'react';

export default function Popup({ selected, closePopup }) {
	return (
		<section className='popup'>
			<div className='content'>
				<h2>
					{selected.Title} <span>({selected.year})</span>
				</h2>
				<p className='rating'>Rating: {selected.imdbRating}</p>
				<div className='plot'>
					<img src={selected.Poster} alt={selected.Title} />
					<p>{selected.Plot}</p>
				</div>
				<button className='close' onClick={closePopup}>
					Close
				</button>
			</div>
		</section>
	);
}
