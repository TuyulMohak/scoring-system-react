import { useParams } from 'react-router-dom'

export default function () {
	const { id } = useParams()
	return (
		<h1>This is Event { id }</h1>
	)
}