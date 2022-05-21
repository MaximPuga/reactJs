import logo from './logo.svg';
import './App.css';

function App() {
function Hui() {
  console.log('hello world') 
}
function Show(){

let example=document.getElementById('H')
if(example.style.display === 'block'){
const block2= example.style.display = "none"
}else{ 
  const block1 = example.style.display = "block"
}
}

function cube(){
  let a1=document.getElementById('1')
  let a2=document.getElementById('2')
  let a3=document.getElementById('3')
  let a4=document.getElementById('4')
  let a5=document.getElementById('5')
  let a6=document.getElementById('6')
  let a7=document.getElementById('7')
  let a8=document.getElementById('8')
  let a9=document.getElementById('9')
  let vegetables = [a1, a2, a3, a4, a5, a6, a7, a8, a9];
  console.log(vegetables)

 

  let randnub1=getRandomInRange(0, 8)
  console.log(randnub1)

  function Check(){
    for(let i=0;i< vegetables.length;i++){
      let c=vegetables[randnub1]
      console.log(c)
      c.style.background = '#ffffff'
    }

  }
  console.log(Check())
}

function getRandomInRange(min, max) {
   return Math.floor(Math.random() * (max - min + 1)) + min;
 }
   getRandomInRange(1, 9) 
  console.log( getRandomInRange(1, 9))


  return (
    <div className="App">
      <header className="App-header">
        <div>
          <button  onClick={cube}>Press</button>
        </div>
        <div className='Show1' id='H'>

        </div>
        <button onClick={Show}>Show</button>

        <div className='genDiv'>
          <div className='bigDiv'>
          <div className="lilDiv" id='1'></div>
          <div className="lilDiv" id='2'></div>
          <div className="lilDiv" id='3'></div>
          </div>
          <div className='bigDiv'>
          <div className="lilDiv" id='4'></div>
          <div className="lilDiv" id='5'></div>
          <div className="lilDiv" id='6'></div>
          </div>
          <div className='bigDiv'>
          <div className="lilDiv" id='7'></div>
          <div className="lilDiv" id='8'></div>
          <div className="lilDiv" id='9'></div>
          </div>
        </div>

      </header>
    </div>
  );
}

export default App;
