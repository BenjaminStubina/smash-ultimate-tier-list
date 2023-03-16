import './TiersSection.scss';
import { Link } from 'react-router-dom'

function TiersSection() {
    return (
        <main className='tiers'>

            <div className='tiers__wrapper'>
                <div className='tiers__container'>
                    <div className='tiers__ranking'>
                        S
                    </div>
                    <div className='tiers__subranking-container'>
                        <div className='tiers__subranking-row-container'>
                            <div className='tiers__subranking'>
                                +
                            </div>
                            <div className='tiers__row'>
                                ROW 1
                            </div>
                        </div>
                        <div className='tiers__subranking-row-container'>
                            <div className='tiers__subranking'>
                                o
                            </div>
                            <div className='tiers__row'>
                                ROW 2
                            </div>
                        </div>
                        <div className='tiers__subranking-row-container'>
                            <div className='tiers__subranking'>
                                -
                            </div>
                            <div className='tiers__row'>
                                ROW 3
                            </div>
                        </div>
                    
                    </div>
                </div>
            </div>


            <div className='tiers__a'>
                
            </div>
            <div className='tiers__b'>
                
            </div>
            <div className='tiers__c'>
                
            </div>
            <div className='tiers__d'>
                
            </div>
        </main>
    )
}

export default TiersSection;