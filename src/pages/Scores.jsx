import useMainStore from '../stores/MainStore'
import { Link } from 'react-router-dom'

export default function () {
	const events = useMainStore((state) => state.events)
	return (
		<>
			<h1>Score Page</h1>
			{events.map(event=><li><Link to={ "/events/"+event.name }>{event.name}</Link></li>)}
		</>
	)
}

