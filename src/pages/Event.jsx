import { useParams } from 'react-router-dom'
import useMainStore from '../stores/MainStore'
import PlayerScore from '../components/PlayerScore'

export default function () {
	const { name } = useParams()
	const event = useMainStore((state) => state.events.filter(event => event.name === name))[0]
	const players = useMainStore((state) => state.players)
	console.log(event)
	const addEvent = useMainStore((state) => state.addEvent)
	players.map(player=>{
		const eventPlayerData = event.players.find(eventPlayer => eventPlayer.id === player.id)
		if(eventPlayerData){
			const scores = eventPlayerData.scores
			console.log(scores, event.rounds)

			scores.map(score=>{
				event.rounds.map(round=>{
					if(score.roundId === round.id){
						score.roundType = round.type
					}
				})
				return score
			})
			player.scores = scores
		}else{
			player.scores = event.rounds.map(round=>{ 
				return {
					roundId: round.id,
					roundType: round.type,
					score: null
				}
			})
		}
	})
	console.log(players)
	return (
		<>
			<h1 className="mb-3">{ name } Event</h1>
			<table className="table-auto border w-full text-center">
				<thead>
					<tr>
						<th>id</th>
						<th>name</th>
						{ event.rounds.map(round=><th key={round.id}>{round.name}</th>) }
					</tr>
				</thead>
				
				<tbody>
					{players.map(player=>(
						<PlayerScore player={player} eventId={event.id} />
					))}
				</tbody>
			</table>
		</>
	)
}