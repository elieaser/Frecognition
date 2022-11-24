import Aboutus from '../components/Aboutus.jsx';
import Login from '../components/Login.jsx';
import Navbar from '../components/Navbar.jsx';
import Newa from '../components/Newa.jsx';
import Start from '../components/Start.jsx';
import Title from '../components/Title.jsx';
import Title2 from '../components/Title2.jsx';

export default function index() {
  return (
    <div>
      <Navbar />
      <Title />
      <Title2 />
      <Start />
      <Newa />
      <Aboutus />
      <Login />
      
      
    </div>
  );
}