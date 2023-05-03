import { Link } from 'react-router-dom'

export default function () {
	return (
		<nav className="p-5 text-2xl border border-green-5 h-screen fixed">
	        <ul className="grid gap-5">
	          <li className="font-bold">
	            Scoring System
	          </li>
	          <li>
	            <Link to="/">🏠Dashboard</Link>
	          </li>
	          <li>
	            <Link to="/events">🕹Events</Link>
	          </li>
	          <li>
	            <Link to="/players">🐱‍🚀Players</Link>
	          </li>
	          <li>
	            <Link to="/scores">📊Scores</Link>
	          </li>
	        </ul>
	    </nav>
	)
}