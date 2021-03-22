import React, {useState} from 'react'
import './TinderCards.css'
import TinderCard from 'react-tinder-card';

function TinderCards() {
	const [people, setPeople] = useState([
		{
			name: 'Elon Musk',
			url: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fupload.wikimedia.org%2Fwikipedia%2Fcommons%2F4%2F49%2FElon_Musk_2015.jpg&f=1&nofb=1"
		},
		{
			name: 'Jeff Bezos',
			url: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fcdn.britannica.com%2F56%2F199056-050-CCC44482%2FJeff-Bezos-2017.jpg&f=1&nofb=1"
		},
	]);
    
		const swiped = (direction, nameToDelete) =>{
			console.log("removing: " + nameToDelete);
			// setLastDirection(direction)
		}

		const outOfFrame = (name) => {
			console.log(name + "left the screen!");
		}

    return (
        <div className="tinderCards">
					<div className="tinderCards__cardContainer">
							{people.map((person) => (
								<TinderCard
									className="swipe"
									key={person.name}
									preventSwipe= {["up", "down"]}
									onSwipe={(dir) => swiped(dir, person.name)}
									onCardLeftScreen = {() => outOfFrame(person.name)}
								>
									<div
										style={{backgroundImage: `url(${person.url})`}}
										className="card"
									>
										<h3>{person.name}</h3> 
									</div>
								</TinderCard>
							))}
						</div>
        </div>
    )
}

export default TinderCards
