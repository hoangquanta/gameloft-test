import './App.scss';
import Header from './components/Header';
import SocialBtns from './components/SocialBtns';
import Banner from './components/Banner';
import Form from './components/Contact-form';
import Promotion from './components/Promotion';
import GameContent from './components/Game-content';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Header/>
      <SocialBtns/>
      <div className='section'>
        <Banner/>
      </div>
      <div className='section'>
        <Form />
      </div>
      <div className='section'>
        <Promotion />
      </div>
      <div className='section'>
        <GameContent />
      </div>
      <div className='section'>
        <Footer/>
      </div>
    </div>
  );
}

export default App;
