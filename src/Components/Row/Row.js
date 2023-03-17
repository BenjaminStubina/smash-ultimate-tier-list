import './Row.scss';
import Fighter from '../Fighter/Fighter';

function Row({name}) {

    if (name === 'S+') {
        return (
            <div className='row'>
                <Fighter name='Diddy' ranking='S' />
                <Fighter name='Fox' ranking='S' />
                <Fighter name='GW' ranking='S' />
            </div>
        )
    }

    else if (name === 'S') {
        return (
            <div className='row'>
                <Fighter name='Diddy' ranking='S' />
                <Fighter name='Fox' ranking='S' />
                <Fighter name='GW' ranking='S' />
                <Fighter name='Diddy' ranking='S' />
                <Fighter name='Fox' ranking='S' />
                <Fighter name='GW' ranking='S' />
            </div> 
        )
    }

    else if (name === 'S-') {
        return (
            <div className='row'>
                <Fighter name='Diddy' ranking='S' />
                <Fighter name='Fox' ranking='S' />
                <Fighter name='GW' ranking='S' />
                <Fighter name='Diddy' ranking='S' />
                <Fighter name='Fox' ranking='S' />
                <Fighter name='GW' ranking='S' />
                <Fighter name='GW' ranking='S' />
                <Fighter name='Diddy' ranking='S' />
                <Fighter name='Fox' ranking='S' />
                <Fighter name='GW' ranking='S' />
            </div> 
        )
    }

    else if (name === 'A+') {
        return (
            <div className='row'>
                <Fighter name='Diddy' ranking='A' />
                <Fighter name='Fox' ranking='A' />
                <Fighter name='GW' ranking='A' />
                <Fighter name='Diddy' ranking='A' />
                <Fighter name='Fox' ranking='A' />
                <Fighter name='GW' ranking='A' />
                <Fighter name='GW' ranking='A' />
                <Fighter name='Diddy' ranking='A' />
            </div> 
        )
    }


    else if (name === 'A-') {
        return (
            <div className='row'>
                <Fighter name='Diddy' ranking='A' />
                <Fighter name='Fox' ranking='A' />
                <Fighter name='GW' ranking='A' />
                <Fighter name='Diddy' ranking='A' />
                <Fighter name='Fox' ranking='A' />
                <Fighter name='GW' ranking='A' />
                <Fighter name='GW' ranking='A' />
                <Fighter name='Diddy' ranking='A' />
                <Fighter name='GW' ranking='A' />
                <Fighter name='GW' ranking='A' />
                <Fighter name='Diddy' ranking='A' />
            </div> 
        )
    }

    else if (name === 'B+') {
        return (
            <div className='row'>
                <Fighter name='Diddy' ranking='B' />
                <Fighter name='Fox' ranking='B' />
                <Fighter name='GW' ranking='B' />
                <Fighter name='Diddy' ranking='B' />
                <Fighter name='Fox' ranking='B' />
                <Fighter name='GW' ranking='B' />
                <Fighter name='GW' ranking='B' />
                <Fighter name='Diddy' ranking='B' />
                <Fighter name='GW' ranking='B' />
            </div> 
        )
    }

        else if (name === 'B-') {
        return (
            <div className='row'>
                <Fighter name='Diddy' ranking='B' />
                <Fighter name='Fox' ranking='B' />
                <Fighter name='GW' ranking='B' />
                <Fighter name='Diddy' ranking='B' />
                <Fighter name='Fox' ranking='B' />
                <Fighter name='GW' ranking='B' />
                <Fighter name='GW' ranking='B' />
                <Fighter name='Diddy' ranking='B' />
                <Fighter name='GW' ranking='B' />
                <Fighter name='GW' ranking='B' />
                <Fighter name='Diddy' ranking='B' />
            </div> 
        )
    }

    else if (name === 'C+') {
        return (
            <div className='row'>
                <Fighter name='Diddy' ranking='C' />
                <Fighter name='Fox' ranking='C' />
                <Fighter name='GW' ranking='C' />
                <Fighter name='Diddy' ranking='C' />
                <Fighter name='Fox' ranking='C' />
                <Fighter name='GW' ranking='C' />
                <Fighter name='GW' ranking='C' />
                <Fighter name='Diddy' ranking='C' />
                <Fighter name='GW' ranking='C' />
                <Fighter name='GW' ranking='C' />
            </div> 
        )
    }

        else if (name === 'C-') {
        return (
            <div className='row'>
                <Fighter name='Diddy' ranking='C' />
                <Fighter name='Fox' ranking='C' />
                <Fighter name='GW' ranking='C' />
                <Fighter name='Diddy' ranking='C' />
                <Fighter name='Fox' ranking='C' />
                <Fighter name='GW' ranking='C' />
                <Fighter name='GW' ranking='C' />
                <Fighter name='Diddy' ranking='C' />
                <Fighter name='GW' ranking='C' />
                <Fighter name='GW' ranking='C' />
            </div> 
        )
    }

        else if (name === 'D+') {
        return (
            <div className='row'>
                <Fighter name='Diddy' ranking='D' />
                <Fighter name='Fox' ranking='D' />
                <Fighter name='GW' ranking='D' />
                <Fighter name='Diddy' ranking='D' />
                <Fighter name='Fox' ranking='D' />
                <Fighter name='GW' ranking='D' />
                <Fighter name='GW' ranking='D' />
                <Fighter name='Diddy' ranking='D' />
                <Fighter name='GW' ranking='D' />
                <Fighter name='GW' ranking='D' />
            </div> 
        )
    }

    else {
        return (
            <div className='row'>
                <Fighter name='Diddy' ranking='D' />
                <Fighter name='Fox' ranking='D' />
                <Fighter name='GW' ranking='D' />
                <Fighter name='Diddy' ranking='D' />
                <Fighter name='Fox' ranking='D' />
                <Fighter name='GW' ranking='D' />
                <Fighter name='GW' ranking='D' />
                <Fighter name='Diddy' ranking='D' />
            </div> 
        )
    }
}

export default Row;