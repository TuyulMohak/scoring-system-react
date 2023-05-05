import { useState } from 'react'
import useMainStore from '../stores/MainStore'

export default function ({ player, eventId }) {
	const [id, setId] = useState(player.id)
	const [name, setName] = useState(player.name)
	const [scores, setScores] = useState(player.scores)
	const updateScore = useMainStore((state) => state.updateScore)

	const handleInputChange = (e, id) => {
		const data = scores.map(score=>{
			if(score.roundId === id){
				score.score = e.target.value
				return score
			}else{
				return score
			}
		})
		setScores(data)
		// console.log(data)
	}

	const handleUpdateScore = () => {
		updateScore(eventId, player.id, scores)
	}
	return (
		<tr key={player.id}>
			<td>{id}</td>
			<td>{name}</td>
			{scores.map(score=>(				
				<td> <input type={score.roundType} onChange={(e) => handleInputChange(e, score.roundId)} value={score.score !== null ? score.score : ''} /> </td>
			))}
			<td><a className="flat-btn" onClick={() => handleUpdateScore()}>✏Update Score</a></td>
		</tr>
	)
}