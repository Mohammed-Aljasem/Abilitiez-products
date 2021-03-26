import logo from './logo.svg';
import './App.css';
import SearchAppBar from './component/navbar'
import NestedGrid from './component/cardgrid'

function App() {
  return (
    <div className="App">
      <SearchAppBar/>
      <NestedGrid />
    </div>
  );
}

export default App;
