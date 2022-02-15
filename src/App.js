import './App.css';
import BrandPower from './components/BrandPower';
import DevelopmentServices from './components/DevelopmentServices';
import FAQ from './components/FAQ';
import Footer from './components/Footer';
import Header from './components/Header'
import HomePage from './components/HomePage';
import ManagementPage from './components/ManagementPage';
import OurTeam from './components/OurTeam';
import BoardMembers from './components/BoardMembers'
function App() {
  return (
    <div>
      <Header/>
      <HomePage/>
      <ManagementPage/>
      <DevelopmentServices/>
      <BrandPower/>
      <OurTeam/>
      <FAQ/>
      <BoardMembers/>
      <Footer/>
    </div>
  );
}

export default App;
