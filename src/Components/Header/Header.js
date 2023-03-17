import { useState } from 'react'
import '../Header/Header.scss';
import headerLogo from '../../assets/images/ultimateLogo.png';
import buttonIcon from '../../assets/images/search.png';
import { Link } from 'react-router-dom'

function Header({setSearch}) {

    const [searchInput, setSearchInput] = useState("");

    function handleChange(event) {
        setSearchInput(event.target.value);
    }

    function handleSubmit(event) {
        event.preventDefault();
        setSearch(searchInput);
        setSearchInput("");
    }

    return (
        <section className='header'>
                <img className='header__logo' src={headerLogo} alt='Smash Ultimate Logo' />
            <h1 className='header__title'>
                SMASH ULTIMATE TIER LIST
            </h1>
            <form onSubmit={handleSubmit} className='header__form-field'>
                <input onChange={handleChange} className='header__search' type='text' placeholder='Search' value={searchInput} />
                <button className='header__button'>
                    <img className='header__button-icon' src={buttonIcon} alt='search icon' />
                </button>
            </form>
        </section>
    )
}

export default Header;