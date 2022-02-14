import './App.css';
import BrandPower from './components/BrandPower';
import DevelopmentServices from './components/DevelopmentServices';
import Footer from './components/Footer';
import Header from './components/Header'
import HomePage from './components/HomePage';
import ManagementPage from './components/ManagementPage';
function App() {
  return (
    <div>
      <Header/>
      <HomePage/>
      <ManagementPage/>
      <DevelopmentServices/>
      <BrandPower/>
      <Footer/>
    </div>
  );
}

export default App;
