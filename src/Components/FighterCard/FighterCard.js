import { useEffect, useState } from 'react';
import './FighterCard.scss';
import axios from 'axios'

function FighterCard({fighterInfo, selectedFighter}) {

    console.log(selectedFighter)

    // const [fighterIcon, setFighterIcon] = useState('')

    // useEffect(() => {
    //     console.log(fighterInfo)
    //     if (!selectedFighter) {
    //         return;
    //     }
    //     else {
    //         fetchFighterIcon();
    //     }
    // },[selectedFighter])

    // function fetchFighterIcon() {
    //     console.log(fighterInfo)
    //     axios
    //         .get(`http://localhost:8080/icons/${fighterInfo[0].name && fighterInfo[0].name}`)
    //         .then((res) => {
    //             console.log(res.data)
    //             setFighterIcon(res)
    //         })
    // }

    function checkGames() {
        if (fighterInfo[0].alsoAppearsIn.length === 0) {
            return (
                'Debut in Ultimate'
            )
        }
        else {
            return (
                fighterInfo[0].alsoAppearsIn.map((game) => { 
                    return " "+game
            }))
        }
    }

    if (fighterInfo) {
        return (
            <>
                <article className='fighter-card'>
                    <img className='fighter-card__portrait' src={selectedFighter.icon} alt='Fighter Portrait' />
                    <h2 className='fighter-card__ranking'>
                        {selectedFighter.tierName}
                    </h2>
                    <h3 className='fighter-card__name'>
                        {selectedFighter.name}
                    </h3>
                    <p className='fighter-card__availability'>
                        Availability: {fighterInfo[0].availability}
                    </p>
                    <p className='fighter-card__universe'>
                        Universe: {fighterInfo[0].series.name && fighterInfo[0].series.name}
                    </p>
                    <p className='fighter-card__previous-games'>
                        Previous Games: {checkGames(fighterInfo)}
                    </p>
                </article>
            </>
        )
    }

    else {
        return (
            <>
                {/* NOTHING (SHOULD BE EMPTY) */}
            </>
        )
    }
}

export default FighterCard;