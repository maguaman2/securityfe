const urlCrud = 'http://localhost:8081';

const getListUsers = async () => {
    const response = await fetch(`${urlCrud}/users`);  
    const data = await response.json();     
    return  data;
}
    
export {
    getListUsers
}