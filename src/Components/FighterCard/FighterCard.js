import './FighterCard.scss';

function FighterCard({fighterInfo, selectedFighter}) {

    // state needs to change depending on the selected fighter
    // when no fighter is selected (on page startup) should display empty card

    if (fighterInfo) {
        return (
            <>
                <article className='fighter-card'>
                    <img className='fighter-card__portrait' src={selectedFighter.icon} alt='Diddy Portrait' />
                    <h2 className='fighter-card__ranking'>
                        {selectedFighter.tierName}
                    </h2>
                    <h3 className='fighter-card__name'>
                        {selectedFighter.name}
                    </h3>
                    <p className='fighter-card__moves'>
                        Availability: {fighterInfo[0].availability}
                    </p>
                    <p className='fighter-card__universe'>
                        Universe: {fighterInfo[0].series.name}
                    </p>
                    <p className='fighter-card__debut-year'>
                        Previous Games: 
                        {fighterInfo[0].alsoAppearsIn.map((game) => {
                            return " "+game
                        })}
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