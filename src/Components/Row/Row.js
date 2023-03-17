import './Row.scss';
import Fighter from '../Fighter/Fighter';

function Row({fighters, name, setSelectedFighter}) {

    if(!fighters) {
        return (
            <h1>Loading Characters!</h1>
        )
    }

    if (name === 'S+') {
        return (
            <div className='row'>
                {fighters[0].map((fighter) => {
                    return (
                        <Fighter tierName={name} setSelectedFighter={setSelectedFighter} name={fighter.name} icon={fighter.image} ranking='S' />
                    )
                })}
            </div>
        )
    }

    else if (name === 'S') {
        return (
            <div className='row'>
                {fighters[1].map((fighter) => {
                    return (
                        <Fighter tierName={name} setSelectedFighter={setSelectedFighter} name={fighter.name} icon={fighter.image} ranking='S' />
                    )
                })}
            </div>
        )
    }

    else if (name === 'S-') {
        return (
            <div className='row'>
                {fighters[2].map((fighter) => {
                    return (
                        <Fighter tierName={name} setSelectedFighter={setSelectedFighter} name={fighter.name} icon={fighter.image} ranking='S' />
                    )
                })}
            </div>
        )
    }

    else if (name === 'A+') {
        return (
            <div className='row'>
                {fighters[3].map((fighter) => {
                    return (
                        <Fighter tierName={name} setSelectedFighter={setSelectedFighter} name={fighter.name} icon={fighter.image} ranking='A' />
                    )
                })}
            </div>
        )
    }


    else if (name === 'A-') {
        return (
            <div className='row'>
                {fighters[4].map((fighter) => {
                    return (
                        <Fighter tierName={name} setSelectedFighter={setSelectedFighter} name={fighter.name} icon={fighter.image} ranking='A' />
                    )
                })}
            </div>
        )
    }

    else if (name === 'B+') {
        return (
            <div className='row'>
                {fighters[5].map((fighter) => {
                    return (
                        <Fighter tierName={name} setSelectedFighter={setSelectedFighter} name={fighter.name} icon={fighter.image} ranking='B' />
                    )
                })}
            </div>
        )
    }

        else if (name === 'B-') {
        return (
            <div className='row'>
                {fighters[6].map((fighter) => {
                    return (
                        <Fighter tierName={name} setSelectedFighter={setSelectedFighter} name={fighter.name} icon={fighter.image} ranking='B' />
                    )
                })}
            </div>
        )
    }

    else if (name === 'C+') {
        return (
            <div className='row'>
                {fighters[7].map((fighter) => {
                    return (
                        <Fighter tierName={name} setSelectedFighter={setSelectedFighter} name={fighter.name} icon={fighter.image} ranking='C' />
                    )
                })}
            </div>
        )
    }

        else if (name === 'C-') {
        return (
            <div className='row'>
                {fighters[8].map((fighter) => {
                    return (
                        <Fighter tierName={name} setSelectedFighter={setSelectedFighter} name={fighter.name} icon={fighter.image} ranking='C' />
                    )
                })}
            </div>
        )
    }

        else if (name === 'D+') {
        return (
            <div className='row'>
                {fighters[9].map((fighter) => {
                    return (
                        <Fighter tierName={name} setSelectedFighter={setSelectedFighter} name={fighter.name} icon={fighter.image} ranking='D' />
                    )
                })}
            </div>
        )
    }

    else {
        return (
            <div className='row'>
                {fighters[10].map((fighter) => {
                    return (
                        <Fighter tierName={name} setSelectedFighter={setSelectedFighter} name={fighter.name} icon={fighter.image} ranking='D' />
                    )
                })}
            </div>
        )
    }
}

export default Row;