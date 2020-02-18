import React from 'react';

export default function Result({ result, openPopup }) {
	return (
		<div className='result' onClick={() => openPopup(result.imdbID, result)}>
			<img src={result.Poster} alt={result.Title} />
			<h3>{result.Title}</h3>
		</div>
	);
}
