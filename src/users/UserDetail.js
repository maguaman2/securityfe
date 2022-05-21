import { Link } from "react-router-dom";


export function UserDetail({user}){
   
return(
    <tr > 
        <td>{user.id}</td>        
        <td> {user.username} </td>
        <td> {user.password} </td>
        <td>{user.firstname}</td>        
        <td> {user.lastname} </td>
        <td><Link to={`/updateteacher/${user.id}`}>Edit</Link></td>        
    </tr>
);

}