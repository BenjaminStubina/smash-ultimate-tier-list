import './Fighter.scss';
import { Link } from 'react-router-dom';

function Fighter({tierName, name, icon, ranking, setSelectedFighter}) {

    function clickHandler(event) {
        setSelectedFighter({name, icon, 'tierName': tierName});
    }
    
    return (
        // <Link to={`/${name}`}
            <div onClick={clickHandler} className={`fighter-${ranking}`}>
                <img className={`fighter-${ranking}__icon`} src={icon} alt='fighter icon' />
            </div>
        // </Link>


    )
}

export default Fighter;