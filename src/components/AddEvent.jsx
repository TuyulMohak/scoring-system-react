import { useState } from 'react'

export default function ({ act }) {
	const [isOpen, setIsOpen] = useState(false)
	const [newId, setNewId] = useState('')
	const [newName, setNewName] = useState('')

	const [roundId, setRoundId] = useState('')
	const [roundName, setRoundName] = useState('')
	const [roundType, setRoundType] = useState('text')
	const [newRounds, setNewRounds] = useState([{id:'1', name:'firstRound', type:'text'}])
	
	const handleSubmit = (e) => {
		if(newId === '' || newName === ''){
			alert('id and name must not empty')
		}
		else{	
			act(newId, newName, newRounds)
			setIsOpen(false)
			setNewId('')
			setNewName('')
			setNewRounds([])
			alert('Successfully created event')
		}
		e.preventDefault()
	}

	const rounds = newRounds.map(round=>(
		<tr key={round.id}> <td>{round.id}</td> <td>{round.name}</td> <td>{round.type}</td> <td><a className="text-red-500 hover:text-red-300 cursor-pointer p-3" onClick={() => deleteRound(round.id)} >Delete</a></td></tr>
	))

	const handleAddRound = () => {
		if(roundId === '' || roundName === '' || roundType === ''){
			alert('must not empty')
		}
		else if(newRounds.find(round=>round.id === roundId)){
			alert('id is already exist')
		}
		else{	
			setNewRounds(
				[
					...newRounds,
					{
						id:roundId, 
						name:roundName, 
						type:roundType
					}
				]
			)
		}
		
		setRoundId('')
		setRoundName('')
		setRoundType('text')
	}

	const deleteRound = (id) => {
		setNewRounds(newRounds.filter(round=> round.id !== id))
	}

	return (
		<>
			<button className="flat-btn" onClick={() => setIsOpen(!isOpen)}>Add an Event</button>
			{isOpen && 
				<div className="border border-gray-500 rounded-md my-3 ml-7 p-5">
					<div>
						<label className="block"><b className="block">Event ID &emsp;&nbsp;</b>		<input value={newId} onChange={(e) =>setNewId(e.target.value)} placeholder="ex: ev_1"/></label>
						<label className="block"><b className="block">Event Name</b> 	<input value={newName} onChange={(e) =>setNewName(e.target.value)} placeholder="ex: Final Exam"/></label>
						
					</div>
					<label className="font-bold">Rounds</label>
					<table className="w-3/4 text-center text-gray-700">
						<thead>
							<tr>
								<th>ID</th>
								<th>Name</th>
								<th>Type</th>
							</tr>
						</thead>

						<tbody>
							{rounds}
							<tr>
								<td><input value={roundId} onChange={(e) =>setRoundId(e.target.value)} placeholder="new roundId"/></td>
								<td><input value={roundName} onChange={(e) =>setRoundName(e.target.value)} placeholder="new roundName"/></td>
								<td>
									<select name="Round Types" onChange={(e) =>setRoundType(e.target.value)}>
									  <option value="text">text</option>
									  <option value="number">number</option>
									</select>
								</td>
								<td>
									<button className="cursor-pointer" onClick={() => handleAddRound()} className="bg-green-300">Add Round</button>
								</td>								
							</tr>
						</tbody>
					</table>
					<button className="mt-5 bg-green-800 text-white p-3 text-xl" onClick={(e) => handleSubmit(e)} > Add Event </button>
				</div>
			}
		</>
	)
}