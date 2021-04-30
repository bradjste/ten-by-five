import MainPage from './components/MainPage';
import './App.css';

function App() {
  const url = 'https://your-identity-instance.netlify.com/'; // supply the url of your Netlify site instance. VERY IMPORTANT. no point putting in env var since this is public anyway

  return (
    <div className="App">
      <MainPage />
    </div>
  );
}

export default App;
