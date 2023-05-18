import './App.css';
import Axios from 'axios';
import { useState } from 'react';

function App() {
	const [fortune, setFortune] = useState('');
	async function fortuneHandler() {
		const API = 'http://localhost:2021/random';

		const response = await Axios.get(API);
		setFortune(response.data);
	}
	return (
		<div className="App">
			<h1>Cookies</h1>
			<button onClick={fortuneHandler}>Get a Random Fortune</button>
			<p>{fortune}</p>
		</div>
	);
}

export default App;
