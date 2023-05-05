import useMainStore from '../stores/MainStore'
import { Link } from 'react-router-dom'

import AddEvent from '../components/AddEvent'

export default function () {
	const events = useMainStore((state) => state.events)
	const addEvent = useMainStore((state) => state.addEvent)
	const deleteEvent = useMainStore((state) => state.deleteEvent)
	
	return (
		<>
		<h1>Events</h1>

		<div className="my-3">
			<AddEvent act={addEvent}/>
		</div>

		<ol>
			{events.map(event =>(
				<li key={event.id}>
					<div className="border rounded-md my-5 p-3">
						<div className="text-3xl font-bold hover:underline"><Link to={ "/events/"+event.name } >{event.name}</Link></div>
						<div><span className="font-bold">Id</span> 		: {event.id}</div>
						<span className="font-bold">Rounds</span>  : 
							{event.rounds !== undefined && 
								<ol className="p-5"> 
									{event.rounds.map(round =>(
										<li key={round.id} > {round.id}  - {round.name} - {round.type} </li>
									))}
								</ol> 
							}
						<button onClick={() => deleteEvent(event.id)}>
							delete
						</button>
					</div>
				</li>
			))}
		</ol>
		</>
	)
}