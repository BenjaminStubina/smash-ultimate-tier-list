import './Tier.scss';
import Row from '../Row/Row';

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
                            <Row name='S+' />
                        </div>
                        <div className='tiers__subranking-row-container'>
                            <div className={styling2}>
                                o
                            </div>
                            <Row name='S' />
                        </div>
                        <div className='tiers__subranking-row-container'>
                            <div className={styling2}>
                                -
                            </div>
                            <Row name='S-' />
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
                            <Row name={`${ranking}+`} />
                        </div>
                        <div className='tiers__subranking-row-container'>
                            <div className={styling2}>
                                -
                            </div>
                            <Row name={`${ranking}-`} />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Tier;