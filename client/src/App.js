import './App.css';
import Axios from 'axios';
import { useState } from 'react';

function App() {
	const [fortune, setFortune] = useState({});
	async function fortuneHandler() {
		const API = 'http://localhost:2021/random';

		const response = await Axios.get(API);
		setFortune(response.data);
	}

	async function luckHandler() {
		const API = 'http://localhost:2021/random/luck';
		const response = await Axios.get(API);
		setFortune(response.data);
	}

	async function quoteHandler() {
		const API = 'http://localhost:2021/random/quotes';
		const response = await Axios.get(API);
		setFortune(response.data);
	}

	async function futureHandler() {
		const API = 'http://localhost:2021/random/future';
		const response = await Axios.get(API);
		setFortune(response.data);
	}

	async function loveHandler() {
		const API = 'http://localhost:2021/random/love';
		const response = await Axios.get(API);
		setFortune(response.data);
	}

	async function comedyHandler() {
		const API = 'http://localhost:2021/random/comedy';
		const response = await Axios.get(API);
		setFortune(response.data);
	}

	async function techHandler() {
		const API = 'http://localhost:2021/random/tech';
		const response = await Axios.get(API);
		setFortune(response.data);
	}
	return (
		<div className="App">
			<h1>Cookies</h1>
			<button onClick={fortuneHandler}>Get a Random Fortune</button>
			<button onClick={luckHandler}>Get a Random Luck Fortune</button>
			<button onClick={quoteHandler}>Get a Random Quote Fortune</button>
			<button onClick={futureHandler}>Get a Random Future Fortune</button>
			<button onClick={loveHandler}>Get a Random Love Fortune</button>
			<button onClick={comedyHandler}>Get a Random Comedy Fortune</button>
			<button onClick={techHandler}>Get a Random Tech Fortune</button>
			<p>{fortune.fortune}</p>
		</div>
	);
}

export default App;
