import './TiersSection.scss';
import Tier from '../Tier/Tier';
import FighterCard from '../FighterCard/FighterCard';

function TiersSection() {
    return (
        <main className='main'>
            <section className='tier-list'>
                <Tier name='S-TIER' ranking='S' styling1='tiers__ranking-S' styling2='tiers__subranking-S' />
                <Tier name='A-TIER' ranking='A' styling1='tiers__ranking-A' styling2='tiers__subranking-A' />
                <Tier name='B-TIER' ranking='B' styling1='tiers__ranking-B' styling2='tiers__subranking-B' />
                <Tier name='C-TIER' ranking='C' styling1='tiers__ranking-C' styling2='tiers__subranking-C' />
                <Tier name='D-TIER' ranking='D' styling1='tiers__ranking-D' styling2='tiers__subranking-D' />
            </section>
            <FighterCard />
        </main>
    )
}

export default TiersSection;