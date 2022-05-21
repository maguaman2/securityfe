export function UserList(props){
    return(
        <table>
        <thead >
          <tr>
            <th >Id</th>
            <th>Usuario</th>
            <th>Password</th>
            <th>Nombre</th>
            <th>Apellido</th>           
          </tr>
        </thead>
        <tbody>        
            {props.children}        
            </tbody>
      </table>
    );
    }