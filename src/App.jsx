import React, { useState } from 'react';
import Axios from 'axios';

import Search from './components/Search';
import Results from './components/Results';
import Popup from './components/Popup';

export default function App() {
	const [search, setSearch] = useState('');
	const [results, setResults] = useState([]);
	const [selected, setSelected] = useState({});

	const apikey = 'http://www.omdbapi.com/?apikey=(INSERT YOUR API KEY HERE)';

	const searchEvent = async event => {
		if (event.key === 'Enter') {
			try {
				const { data } = await Axios(apikey + '&s=' + search);
				const result = data.Search;
				setResults(result || []);
			} catch (error) {
				setResults(error);
			}
		}
	};

	const handleInput = event => {
		let inputValue = event.target.value;
		setSearch(inputValue);
	};

	const openPopup = async (id, results) => {
		const { data } = await Axios(apikey + '&i=' + id);
		const result = data;
		setSelected(result);
	};

	const closePopup = () => {
		setSelected({});
	};

	return (
		<div>
			<header>
				<h1>Movie Database</h1>
			</header>
			<main>
				<Search handleInput={handleInput} search={searchEvent} />
				<Results results={results} openPopup={openPopup} />
				{typeof selected.Title != 'undefined' ? (
					<Popup selected={selected} closePopup={closePopup} />
				) : (
					false
				)}
			</main>
		</div>
	);
}
