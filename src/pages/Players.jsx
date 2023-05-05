import AddPlayer from '../components/AddPlayer'
import useMainStore from '../stores/MainStore'

export default function () {
	const players = useMainStore((state) => state.players)
	const addPlayer = useMainStore((state) => state.addPlayer)
	const deletePlayer = useMainStore((state) => state.deletePlayer)
	return (
		<>
			<h1>Player Page</h1>

			<AddPlayer act={addPlayer} />
			<ol>
				{players.map(student =>(
					<li key={student.id}>
						{student.id} - <b>{student.name}</b> - 
						<button onClick={() => deletePlayer(student.id)}>
							delete
						</button>
					</li>
				))}
			</ol>
		</>
	)
} 