import './Tier.scss';
import Row from '../Row/Row';
import plusIcon from '../../assets/images/plus.png';
import minusIcon from '../../assets/images/minus.png';
import neutralIcon from '../../assets/images/full-stop.png';

function Tier({fighters, name, ranking, styling1, styling2, setSelectedFighter}) {

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
                                <img className='tiers__subranking-icon' src={plusIcon} alt='plus icon' />
                            </div>
                            <Row fighters={fighters} setSelectedFighter={setSelectedFighter} name='S+' />
                        </div>
                        <div className='tiers__subranking-row-container'>
                            <div className={styling2}>
                                <img className='tiers__subranking-icon--neutral' src={neutralIcon} alt='neutral icon' />
                            </div>
                            <Row fighters={fighters} setSelectedFighter={setSelectedFighter} name='S' />
                        </div>
                        <div className='tiers__subranking-row-container'>
                            <div className={styling2}>
                                <img className='tiers__subranking-icon' src={minusIcon} alt='minus icon' />
                            </div>
                            <Row fighters={fighters} setSelectedFighter={setSelectedFighter} name='S-' />
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
                                <img className='tiers__subranking-icon' src={plusIcon} alt='plus icon' />
                            </div>
                            <Row fighters={fighters} setSelectedFighter={setSelectedFighter} name={`${ranking}+`} />
                        </div>
                        <div className='tiers__subranking-row-container'>
                            <div className={styling2}>
                                <img className='tiers__subranking-icon' src={minusIcon} alt='minus icon' />
                            </div>
                            <Row fighters={fighters} setSelectedFighter={setSelectedFighter} name={`${ranking}-`} />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Tier;