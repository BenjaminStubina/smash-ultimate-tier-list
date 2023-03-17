import './Homepage.scss';
import Header from '../../Components/Header/Header';
import TiersSection from '../../Components/TiersSection/TiersSection';
import Footer from '../../Components/Footer/Footer'
import { useState } from 'react';

function Homepage() {
    const [search, setSearch] = useState("");
    console.log(search);

    return (
        <>
            <Header setSearch={setSearch}/>
            <TiersSection search={search}/>
            <Footer />
        </>
    )
}

export default Homepage;