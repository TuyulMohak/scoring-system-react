import { useState } from 'react'

export default function ({ act }) {
	const [isOpen, setIsOpen] = useState(false)
	const [newId, setNewId] = useState('')
	const [newName, setNewName] = useState('')

	const [roundId, setRoundId] = useState('')
	const [roundName, setRoundName] = useState('')
	const [roundType, setRoundType] = useState('text')
	const [newRounds, setNewRounds] = useState([{id:'1', name:'firstR', type:'string'}])
	
	const handleSubmit = (e) => {
		if(newId === '' || newName === ''){
			alert('id and name must not empty')
		}
		else{	
			act(newId, newName, newRounds)
		}
		e.preventDefault()
	}

	const rounds = newRounds.map(round=>(
		<li>{round.id} - {round.name} - {round.type} - <a className="hover:text-red-600 cursor-pointer p-3" onClick={() => deleteRound(round.id)} >x</a> </li>
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
			<button onClick={() => setIsOpen(!isOpen)}>Add an Event</button>
			{isOpen && 
				<div className="border rounded-md my-3 ml-7 p-5">
					<div>
						<input value={newId} onChange={(e) =>setNewId(e.target.value)} placeholder="Event Id"/>
						<input value={newName} onChange={(e) =>setNewName(e.target.value)} placeholder="Event Name"/>
					</div>
					<h6>Rounds</h6>
					<div>
						{rounds}
					</div>
					<div class="flex gap-7">
						<input value={roundId} onChange={(e) =>setRoundId(e.target.value)} placeholder="new roundId"/>
						<input value={roundName} onChange={(e) =>setRoundName(e.target.value)} placeholder="new roundName"/>
						<select name="Round Types" onChange={(e) =>setRoundType(e.target.value)}>
						  <option value="text">text</option>
						  <option value="number">number</option>
						</select>
						<button className="cursor-pointer" onClick={() => handleAddRound()} className="bg-blue-100">Add Round</button>
					</div>
					<button className="bg-green-800 text-white p-3 text-xl" onClick={(e) => handleSubmit(e)} > Add Event </button>
				</div>
			}
		</>
	)
}