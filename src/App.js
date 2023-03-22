import './App.scss';
import Header from './components/Header';
import Banner from './components/Banner';
import Form from './components/Contact-form';



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
    </div>
  );
}

export default App;
