import './App.scss';
import Header from './components/Header';
import Banner from './components/Banner';
import Form from './components/Contact-form';
import Promotion from './components/Promotion';



function App() {
  return (
    <div className="App">
      <Header/>
      <div className='section'>
        <Banner/>
      </div>
      <div className='section'>
        <Form />
      </div>
      <div className='section'>
        <Promotion />
      </div>
    </div>
  );
}

export default App;
