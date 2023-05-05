import {useState} from 'react'

export default function ({ act }) {
	const [newId, setNewId] = useState('')
	const [newName, setNewName] = useState('')
	const [isOpen, setIsOpen] = useState('')

	const handleSubmit = (e) => {
		if(newId === '' || newName === ''){
			alert('id and name must not empty')
		}
		else{	
			act(newId, newName)
		}
		e.preventDefault()
	}


	return (
		<>
			<button onClick={() => setIsOpen(!isOpen)} className="my-3">Add a Player</button>
			{isOpen && 
				<form onSubmit={(e) => handleSubmit(e)} className="border rounded-md my-3" >
					<input value={newId} onChange={(e) => setNewId(e.target.value)} placeholder="new Id"/>
					<input value={newName} onChange={(e) => setNewName(e.target.value)} placeholder="new Name"/>
					<button className="bg-gray-200" type="submit" > Add Player </button>
				</form>
			}
		</>
	)
}