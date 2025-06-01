const urlCrud = import.meta.env.VITE_API_URL;

const getListUsers = async () => {
    console.log("Fetching users from:", `${urlCrud}/users`);
    const response = await fetch(`${urlCrud}/users`,{
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
            'Access-Control-Allow-Origin':'*',            
            'Host': 'http://localhost:5173',            
        }        
    });  
    const data = await response.json();     
    return  data;
}
    
export {
    getListUsers
}