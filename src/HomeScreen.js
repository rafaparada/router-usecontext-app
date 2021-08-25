import React,{useContext} from 'react'
import CardAbout from './CardAbout';
import UserContext from './UserContext'
const HomeScreen = () => {
    const {user} = useContext(UserContext);
    return (
        <div>
            <h1>HomeScreen</h1>
            <hr />
            <CardAbout />
        </div>
    )
}

export default HomeScreen
