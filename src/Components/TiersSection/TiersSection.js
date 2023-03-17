import './TiersSection.scss';
import Tier from '../Tier/Tier';
import FighterCard from '../FighterCard/FighterCard';
import { useState, useEffect } from 'react';
import axios from 'axios';

function TiersSection(search) {

    const [selectedFighter, setSelectedFighter] = useState("")
    const [fighterInfo, setFighterInfo] = useState("")
    const [fighters, setFighters] = useState();

    useEffect(() => {
        if (!selectedFighter) {
            return; 
        }
        axios
        .get(`http://localhost:8080/characters/${selectedFighter.name}`)
        .then((res) => {
            setFighterInfo(res.data);
        })
        .catch((error) => {
            console.log(error);
            console.log('error fetching fighter information');
        })
    },[selectedFighter])

    useEffect(() => {
        if (!search.search) {
            return; 
        }
        axios
        .get(`http://localhost:8080/characters/${search.search}`)
        .then((res) => {
            if (res.data.length === 0) {
                console.log('Please enter proper Fighter name!')
                setFighterInfo('')
            }
            else {
                setFighterInfo(res.data);
            }

        })
        .catch((error) => {
            console.log(error);
            console.log('error fetching fighter information');
        })
    },[search])

    function fetchFighters() {
        axios
            .get('http://localhost:8080/icons')
            .then((res) => {
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

    return (
        <main className='main'>
            <section className='tier-list'>
                <Tier fighters={fighters} setSelectedFighter={setSelectedFighter} name='S-TIER' ranking='S' styling1='tiers__ranking-S' styling2='tiers__subranking-S' />
                <Tier fighters={fighters} setSelectedFighter={setSelectedFighter} name='A-TIER' ranking='A' styling1='tiers__ranking-A' styling2='tiers__subranking-A' />
                <Tier fighters={fighters} setSelectedFighter={setSelectedFighter} name='B-TIER' ranking='B' styling1='tiers__ranking-B' styling2='tiers__subranking-B' />
                <Tier fighters={fighters} setSelectedFighter={setSelectedFighter} name='C-TIER' ranking='C' styling1='tiers__ranking-C' styling2='tiers__subranking-C' />
                <Tier fighters={fighters} setSelectedFighter={setSelectedFighter} name='D-TIER' ranking='D' styling1='tiers__ranking-D' styling2='tiers__subranking-D' />
            </section>
            <FighterCard selectedFighter={selectedFighter} fighterInfo={fighterInfo}/>
        </main>
    )
}

export default TiersSection;