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
			setNewId('')
			setNewName('')
		}
		e.preventDefault()
	}


	return (
		<tr>
			<td><input value={newId} onChange={(e) => setNewId(e.target.value)} placeholder="new Id"/></td>
			<td><input value={newName} onChange={(e) => setNewName(e.target.value)} placeholder="new Name"/></td>
			<td><button className="flat-btn" onClick={(e) => handleSubmit(e)} > Add Player </button></td>
		</tr>
	)
}