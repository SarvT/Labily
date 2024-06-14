import './App.css';
import Home from './components/Home';
import { SpeedInsights } from "@vercel/speed-insights/react"

function App() {
  return (
    <div className="App">
      <Home/>
      <SpeedInsights/>
    </div>
  );
}

export default App;
