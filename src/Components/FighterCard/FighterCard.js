import './FighterCard.scss';
import Diddy from '../../assets/images/DiddyKongHeadSSBUWebsite.webp';

function FighterCard() {

    let selectedFighter = "";

    // state needs to change depending on the selected fighter
    // when no fighter is selected (on page startup) should display empty card

    if (!selectedFighter) {
        return (
            <>
                {/* NOTHING (SHOULD BE EMPTY) */}
                {/* USING PLACE HOLDER FOR STYLING */}
                <article className='fighter-card'>
                    <img className='fighter-card__portrait' src={Diddy} alt='Diddy Portrait' />
                    <h2 className='fighter-card__ranking'>
                        S+
                    </h2>
                    <h3 className='fighter-card__name'>
                        Diddy Kong
                    </h3>
                    <p className='fighter-card__moves'>
                        Move Set: Move 1, Move 2, Move 3, etc...
                    </p>
                    <p className='fighter-card__universe'>
                        Universe: Donkey Kong
                    </p>
                    <p className='fighter-card__debut-year'>
                        Debut Year: 2023
                    </p>
                </article>
            </>
        )
    }

    else {
        return (
            <>
                {/* FIGHTER CARD */}
            </>
        )
    }
}

export default FighterCard;