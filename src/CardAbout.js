import { useContext } from "react";
import UserContext from "./UserContext";
const CardAbout = () =>{
    const {user:{id,name,email}}=useContext(UserContext);
    return(
        <table className="table table-dark table-striped">
            <thead></thead>
            <tbody>
                <tr>
                    <td><h2>ID</h2></td>
                    <td><h2>{id}</h2></td>
                </tr>
                <tr>
                    <td><h2>NOMBRE</h2></td>
                    <td><h2>{name}</h2></td>
                </tr>
                <tr>
                    <td><h2>EMAIL</h2></td>
                    <td><h2>{email}</h2></td>
                </tr>
            </tbody>
        </table>
    )

}

export default CardAbout;