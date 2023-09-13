import '../node_modules/bootstrap/dist/css/bootstrap.css'
import './App.css';
import Hero from './component/Hero';
import NavBar from './component/Navbar';
import Body from './component/body';
import Footer from './component/footer';

function App() {
  return (
    <div className="App">
     <NavBar/>
     <Hero/>
     <Body/>
     <Footer/>
    </div>
  );
}

export default App;
