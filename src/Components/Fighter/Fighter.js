import './Fighter.scss';
import Diddy from '../../assets/images/DiddyKongHeadSSBUWebsite.webp';
import Fox from '../../assets/images/FoxHeadSSBUWebsite.webp';
import GW from '../../assets/images/MrGame&WatchHeadSSBUWebsite.webp';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';

function Fighter({name, ranking}) {

    const [fighters, setFighters] = useState();
    
    function fetchFighters() {
        axios
            .get('URL')
            .then((res) => {
                console.log(res.data);
                setFighters(res.data);
            })
            .catch((error) => {
                console.log(error);
                console.log('error fetching fighter information');
            })
    }

    useEffect(() => {
        fetchFighters();
    },[])

    // if (!fighters) {
    //     return (
    //         <h1>Currently Fetching Fighter Information!</h1>
    //     )
    // }
    
    function fighterIcon() {
        if (name === 'Diddy') {
            return Diddy;
        }

        else if (name === 'Fox') {
            return Fox;
        }

        else if (name === 'GW') {
            return GW;
        }
    }

    return (
        // <Link to={`/${name}`}
            <div className={`fighter-${ranking}`}>
                <img className={`fighter-${ranking}__icon`} src={fighterIcon(name)} alt='fighter icon' />
            </div>
        // </Link>


    )
}

export default Fighter;