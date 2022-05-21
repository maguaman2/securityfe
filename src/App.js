import Navbar from "./components/Navbar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { UsersPage } from "./users/UserPage";
function App() {
  return (
    <BrowserRouter>
    <Navbar />
      <Routes>
        <Route path="/users" element={<UsersPage />} />
       
      </Routes>

    </BrowserRouter> 
  );
}

export default App;
