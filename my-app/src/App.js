import logo from './logo.svg';
import './App.css';

function App() {
function Hui() {
  console.log('hello world') 
}
function Show(){


if(document.getElementById('H').style.display === 'block'){
console.log(1)
const block2 = document.getElementById('H').style.display = "none"
}else{ 
  const block1 = document.getElementById('H').style.display = "block"
}
}

  return (
    <div className="App">
      <header className="App-header">
        <div>
          <button onClick={Hui}>Press</button>
        </div>
        <div className='Show1' id='H'>

        </div>
        <button onClick={Show}>Show</button>
      </header>
    </div>
  );
}

export default App;
