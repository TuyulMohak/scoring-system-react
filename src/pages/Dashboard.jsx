import useMainStore from '../stores/MainStore'
import { Link } from 'react-router-dom'

export default function () {
	const bears = useMainStore((state) => state.bears)
	const addBear = useMainStore((state) => state.increasePopulation)
	
	const bearList = (rep) => {
		const list = []
		for (let i = 0; i < rep; i++) {
			list.push(<span key={i}> 🐻 </span>);
		}
		return list
	}
	return (
		<main className="h-screen">
			<h1 className="mb-5">Dashboard</h1>
			<div className="border rounded-md grid gap-5 grid-cols-3 p-10">
				<div className="col-span-1">
					<div>
						<Link><h2>🕹Events</h2></Link>
						<p>Here, you can add and delete event where the player will participate</p>
					</div>
				</div>
				<div className="col-span-1">
					<div>
						<Link><h2>🐱‍🚀Players</h2></Link>
						<p>Here, you can add and delete new player</p>
					</div>
				</div>
				<div className="col-span-1">
					<div>
						<Link><h2>📊Scores</h2></Link>
						<p>Here, you can give score on every players during every events</p>
					</div>
				</div>
			</div>

			<div className="border rounded-md p-10 my-10">
				<div>
					<h2>About this App</h2>
					<p>This app is an early version of my scoring system that I believe will be useful for my organization. We can add players, add events, and add rounds for each event, where we can give a score to each round for each player. I made this app to learn React with React Router and Zustand. It starts great until I start making SQL relations on Javascript arrays. In this app, you won't send any data to any backend because every submission is only stored in the zustand store.</p>
				</div>
			</div>

			<div className=" text-gray-600 border fixed bottom-0">
				<p>Don't mind me, I'm just producing bears</p>
				<ul>{bearList(bears)}</ul>
				<button className="border m-3" onClick={addBear}>ADD BEAR 🐻</button>
			</div>
		</main>
	)
}