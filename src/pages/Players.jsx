import AddPlayer from '../components/AddPlayer'
import useMainStore from '../stores/MainStore'

export default function () {
	const players = useMainStore((state) => state.players)
	const addPlayer = useMainStore((state) => state.addPlayer)
	const deletePlayer = useMainStore((state) => state.deletePlayer)
	return (
		<>
			<h1 className="pb-5">Player Page</h1>
			
			<table className="w-3/4 text-center text-gray-700">
				<thead>
					<tr>
						<th>ID</th>
						<th>Name</th>
					</tr>
				</thead>

				<tbody>
					{players.map(student =>(
						<tr key={student.id}>
							<td>{student.id}</td>
							<td>{student.name}</td>
							<td>
								<a className="delete-btn" onClick={() => deletePlayer(student.id)}>
									delete
								</a>
							</td>
						</tr>
					))}
					<AddPlayer act={addPlayer} />
				</tbody>
			</table>
			<ol>
				
			</ol>
		</>
	)
} 