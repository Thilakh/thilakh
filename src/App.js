/*import logo from "./logo.svg";
import "./App.css";
import { Message } from "./Message";
import { List } from "./List";
import Main from "./components/Main";
import Footex from "./components/Footex";
import Navbar from "./components/Navbar";*/
import Hello from './day2/Hello';
import Style from './day2/Style';
import Button from './day3/Button';
import {Goku} from './day3/Goku';

function App() {
  return (
   /* <div>
     
      <Navbar></Navbar>
      <Main></Main>
      <Footex></Footex>
    </div>*/
    <div className='flex space-x-4 my-4'>
      <Hello></Hello>
      <Button>Green</Button>
      <Button>Red</Button>
      <Button>Blue</Button>
      <Button>Yellow</Button>
      <Goku></Goku>
      <Style></Style>
    </div>
  );
}

export default App;
