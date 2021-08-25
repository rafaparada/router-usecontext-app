import {useContext} from 'react'
import CardAbout from './CardAbout'
import UserContext from './UserContext'
const AboutScreen = () => {
    const {setUser} = useContext(UserContext);
    const handleLogOut = ()=>{
       setUser({});
    } 
    return (
        <div>
            <h1>About</h1>
            <hr />
            <CardAbout />
            <button className="btn btn-warning" onClick={()=>handleLogOut()}>Logout</button>
        </div>
    )
}

export default AboutScreen
