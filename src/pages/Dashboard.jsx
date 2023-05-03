import useMainStore from '../stores/MainStore'

export default function () {
	const bears = useMainStore((state) => state.bears)
	const addBear = useMainStore((state) => state.increasePopulation)
	
	const bearList = (rep) => {
		const list = []
		for (let i = 0; i < rep; i++) {
			list.push(<span> 🐻 </span>);
		}
		return list
	}
	return (
		<main className="h-screen bg-red-300">
			<h1>Dashboard</h1>
			<pre>{bears}</pre>
			<ul>{bearList(bears)}</ul>
			<button className="border m-3" onClick={addBear}>ADD BEAR 🐻</button>
		</main>
	)
}