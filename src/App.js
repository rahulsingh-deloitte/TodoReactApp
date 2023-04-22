import logo from './logo.svg';
import './App.css';
import Header from "./Mycomponent/Header"
import { Footer } from "./Mycomponent/Footer";
import Todos from './Mycomponent/Todos';
import { useState } from 'react';
import { AddTodo } from './AddTodo';
import { About } from './Mycomponent/About';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

function App() {
  let onDelete=(todo)=>{

    console.log("delete function works",todo)
    setTodos(todos.filter((e)=>{
      return e!==todo;
    }))
  }

  const add=(title,desc)=>{
    console.log("adding todos",title,desc)
    let sn;
    sn=todos.length+1
    let tdo={
      title:title,
      disc:desc,
      siNo:sn
    }
    setTodos([...todos,tdo]);
    
    console.log(tdo)
  }
  const [todos, setTodos] = useState([
    {
      siNo:1,
      title:'rahul',
      disc:'Market'
    },
    {
      siNo:2,
      title:'Saurabh',
      disc:'Mall'
    },
    {
      siNo:3,
      title:'Arvind',
      disc:'Ghat'
    }
  ]);
  return (
    <>
    <Router>
    <Header m1='rajrooppur' search={true}/>
    <div className='container'>
    <Routes>
          <Route exact path="/" element={
            <>
            <AddTodo add={add}/>
            <Todos td={todos} onDelete={onDelete}/></>
          }/>
          <Route exact path='/about' element={<About/>}/>
        </Routes>
    </div>
    <Footer/>
    </Router></>
  );
}

export default App;
