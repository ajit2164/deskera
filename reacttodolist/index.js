import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import TodoList from './components/TodoList';
//import HelloWorld from './components/HelloWorld';
//import HelloWorld2 from './components/HelloWorld2';
//import Contact from './Contact';
//import ContactForm from './Contactform';

ReactDOM.render(
  <React.StrictMode>
    {/* <ContactForm /> */}
    {/* <Contact /> */}
  {/* <App />   */}
{/* <HelloWorld name="Ajit"/> */}
{/* <HelloWorld2/> */}
  <TodoList/>

  
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
