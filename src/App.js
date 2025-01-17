import React, { useState, useEffect, useContext} from 'react';
import { Row, Col, Container } from 'react-bootstrap';

import './App.css';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import HeadingApp from './RetreatSelection/Heading';
import RetreatSizeApp from './RetreatSelection/RetreatSize';
import RetreatTypeApp from './RetreatSelection/RetreatType';
import GeneralActivitiesApp from './Activities/GeneralRecreation';
import WildlifeCenterApp from './Activities/WildlifeCenter';
import HighAdventureApp from './Activities/HighAdventure';
import HorseProgramsApp from './Activities/HorsePrograms';
import TeambuildingApp from './Activities/Teambuilding';
import PoolPartiesApp from './Activities/PoolParties';
import LargeGroupsApp from './Activities/LargeGroups';

import FormApp from './Form/Form';
import FooterApp from './Footer/Footer';
import { isOvernight, groupType } from './RetreatSelection/RetreatType';
import {AppContext} from './AppContext';



function App() {
    const context = useContext(AppContext)

    const [groupSize, setGroupSize] = useState(0);
    const [groupType, setGroupType] = useState("");

    const [constHours,  setConstHours] = useState("");
    const [constSize,   setConstSize] = useState("");
    const [medianSize,  setMedianSize] = useState("");

    const [highAdventuretotalSum,       setHighAdventuretotalSum] = useState("");
    const [generalRecreationtotalSum,   setGeneralRecreationtotalSum] = useState("");
    const [wildLifetotalSum,            setWildLifetotalSum] = useState("");
    const [teamBuildingtotalSum,        setTeamBuildingtotalSum] = useState("");
    const [horseProgramstotalSum,       setHorseProgramstotalSum] = useState("");
    const [poolPartytotalSum,           setPoolPartytotalSum] = useState("");


    const initialValue = {
        groupSize,
        setGroupSize,
        groupType,
        setGroupType,
        constHours,     setConstHours,
        constSize,      setConstSize,
        medianSize,     setMedianSize,

        highAdventuretotalSum,      setHighAdventuretotalSum,
        generalRecreationtotalSum,  setGeneralRecreationtotalSum,
        wildLifetotalSum,           setWildLifetotalSum,
        teamBuildingtotalSum,       setTeamBuildingtotalSum,
        horseProgramstotalSum,      setHorseProgramstotalSum,
        poolPartytotalSum,          setPoolPartytotalSum,

        highAdventuretotalGroupSum,      setHighAdventuretotalGroupSum,
        generalRecreationtotalGroupSum,  setGeneralRecreationtotalGroupSum,
        wildLifetotalGroupSum,           setWildLifetotalGroupSum,
        teamBuildingtotalGroupSum,       setTeamBuildingtotalGroupSum,
        horseProgramstotalGroupSum,      setHorseProgramstotalGroupSum,
        poolPartytotalGroupSum,          setPoolPartytotalGroupSum


    }

    return (
        <AppContext.Provider value={initialValue}>
            <div className="App">
                <Container>
                    <Row className="filter-bar">
                        <Col className="heading-intro" sm="12" lg="4">
                            <HeadingApp />
                        </Col>
                        <Col className="retreat-size" sm="12" lg="4">
                            <RetreatSizeApp />
                        </Col>
                        <Col className="retreat-type" sm="12" lg="4">
                            <RetreatTypeApp />
                        </Col>
                    </Row>
                    <div className="activity-detail">
                        <p>Activities can generally accommodate 20 people per hour. Example, with a group size of 20-39 you would need 2 activities to keep everyone occupied over 2 hrs. The pricing automatically recognizes number of hours needed based on your group size.</p>
                    </div>
                    <Row>
                        <Col sm="12" lg="8">
                            <HighAdventureApp />
                            <TeambuildingApp />
                            <WildlifeCenterApp />
                            <HorseProgramsApp />
                            <GeneralActivitiesApp />     
                            <PoolPartiesApp />
                            <LargeGroupsApp />
                        </Col>
                        <Col className="sidebar" sm="12" lg="4">
                            <FooterApp />
                        </Col>
                    </Row>
                </Container>
            </div>
        </AppContext.Provider>
    );
}

export default App;
