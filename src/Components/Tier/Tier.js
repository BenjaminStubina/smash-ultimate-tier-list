import './Tier.scss';

function Tier({name, ranking, styling1, styling2}) {

    if (name === 'S-TIER') {
        return (
            <div className='tiers__wrapper'>
                <div className='tiers__container'>
                    <div className={styling1}>
                        {ranking}
                    </div>
                    <div className='tiers__subranking-container'>
                        <div className='tiers__subranking-row-container'>
                            <div className={styling2}>
                                +
                            </div>
                            <div className='tiers__row'>
                                ROW 1
                            </div>
                        </div>
                        <div className='tiers__subranking-row-container'>
                            <div className={styling2}>
                                o
                            </div>
                            <div className='tiers__row'>
                                ROW 2
                            </div>
                        </div>
                        <div className='tiers__subranking-row-container'>
                            <div className={styling2}>
                                -
                            </div>
                            <div className='tiers__row'>
                                ROW 3
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

    else {
        return (
            <div className='tiers__wrapper'>
                <div className='tiers__container'>
                    <div className={styling1}>
                        {ranking}
                    </div>
                    <div className='tiers__subranking-container'>
                        <div className='tiers__subranking-row-container'>
                            <div className={styling2}>
                                +
                            </div>
                            <div className='tiers__row'>
                                ROW 1
                            </div>
                        </div>
                        <div className='tiers__subranking-row-container'>
                            <div className={styling2}>
                                -
                            </div>
                            <div className='tiers__row'>
                                ROW 2
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Tier;