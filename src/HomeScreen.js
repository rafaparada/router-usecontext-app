import React,{useContext} from 'react'
import UserContext from './UserContext'
const HomeScreen = () => {
    const userContext = useContext(UserContext);
    return (
        <div>
            <h1>HomeScreen</h1>
            <pre>
                {JSON.stringify(userContext)}
            </pre>
        </div>
    )
}

export default HomeScreen
