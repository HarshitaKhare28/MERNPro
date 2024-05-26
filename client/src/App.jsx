import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home";
import { About } from "./pages/About";
import { Contact } from "./pages/Contact";
import { Services } from "./pages/Services";
import { Register } from "./pages/Register";
import { Login } from "./pages/Login";
import {Navbar} from "./Components/Navbar";
import {Error} from "./pages/Error";
import Footer from "./Components/Footer";
import {Logout} from "./pages/Logout";
import {AdminLayout } from "./Components/layouts/Admin-Layout";
import {AdminContacts} from "./pages/AdminContacts";
import {AdminUsers} from "./pages/AdminUsers";
const App = () => {
  return (
    <Router>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/services" element={<Services />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/logout" element={<Logout/>}/>
        <Route path="*" element={<Error/>}/>
        <Route path="/admin" element={<AdminLayout/>}>
          <Route path="users" element={<AdminUsers/>}/>
          <Route path="contacts" element={<AdminContacts/>}/>
        </Route>
      </Routes>
      <Footer/>
    </Router>
  );
};

export default App;