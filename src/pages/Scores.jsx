import useMainStore from '../stores/MainStore'
import { Link } from 'react-router-dom'

export default function () {
	const events = useMainStore((state) => state.events)
	return (
		<>
			<h1 className="mb-5">Score Page</h1>
			{events.map(event=><h2 className="my-5"><Link to={ "/events/"+event.name }>{event.name}</Link></h2>)}
		</>
	)
}

