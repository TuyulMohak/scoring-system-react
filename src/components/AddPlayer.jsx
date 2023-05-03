import {useState} from 'react'

export default function ({ act }) {
	const [newId, setNewId] = useState('')
	const [newName, setNewName] = useState('')

	const handleSubmit = (e) => {
		if(newId === '' || newName === ''){
			alert('id and name must not empty')
		}
		else{	
			act(newId, newName)
		}
		e.preventDefault()
	}

	const handleIdChange = (e) => {
		setNewId(e.target.value)
	}
	
	const handleNameChange = (e) => {
		setNewName(e.target.value)
	}

	return (
		<>
			<h2>Add a Player</h2>
			<form onSubmit={(e) => handleSubmit(e)} >
				<input value={newId} onChange={handleIdChange} placeholder="new Id"/>
				<input value={newName} onChange={handleNameChange} placeholder="new Name"/>
				<button className="bg-gray-200" type="submit" > Add Player </button>
			</form>
		</>
	)
}