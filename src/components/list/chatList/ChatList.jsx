import { useState } from "react"
import "./chatList.css"

export default function ChatList() {
	const [addMode, setAddMode] = useState(false)

	return (
		<div className='chatList'>
			<div className='search'>
				<div className='searchBar'>
					<img src='./search.png' alt='magnifying glass' />
					<input type='text' placeholder='search' />
				</div>
				<img
					onClick={() => setAddMode(!addMode)}
					src={addMode ? "./minus.png" : "./plus.png"}
					alt='add button'
					className='add'
				/>
			</div>
		</div>
	)
}
