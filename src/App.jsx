import { useState } from 'react'
import Header from './components/Header';
// import Content from './components/Content';
// import Fire from './components/info';
// import Props from './components/Props';
import TodoInput from './components/TodoInput';
import TextChanger from './components/Counter';
import Clock from './components/clock';
import GetInnerWidth from './components/innerWidth';
import StopWatch from './components/StopWatch';
import UsedRefFunc from './components/UseRefFunc';
import { LanguageContext } from './context';
import RandomQoute from './components/randomCode';
import Memo from './components/Memo';
import Reducer from './components/Reducer';
import FormReducer from './components/FormReducer';
import Form from './components/Form';
import ShowDataApi from './components/ShowDataApi';
import ReduxComp from './components/reduxComp';
import { Provider } from 'react-redux';
import { taskReducer } from '../redux/taskReducer';
import {createStore} from 'redux';
const store = createStore(taskReducer);

function App() {
  let currTime = new Date().toLocaleTimeString();
  const [time, setTime] = useState(currTime);
  const updateTime = () => {
    currTime = new Date().toLocaleTimeString();
    setTime(currTime);
  }
  setInterval(updateTime, 1000);
  function handleClick(link){
    const name = prompt("Enter your name:");
    alert(`Hello ${name}, you clicked on ${link} link!`);
  }
  // const [language, setLanguage] = useState("en");
   
  return (
    // <BrowserRouter>
    <Provider store={store}>
    <div className="min-h-screen bg-[#242424] text-white">  
      <Header time={time} brandname={"Agency"} links={["Home", "About", "Contact", "Services", "Help", "Logout"]} handleClick={handleClick} />
      {/* <Content /> */}
      {/* <Fire /> */}
      <TodoInput />
      {/* <TextChanger/>
      <Clock/>
      <GetInnerWidth />
      <StopWatch /> */}
      {/* <Footer /> */}
      {/* <LanguageContext.Provider value={{setLanguage, language}}>
        <UsedRefFunc />
        <RandomQoute />
      </LanguageContext.Provider>
      <Memo />
      <Reducer />
      <FormReducer />
      <useToggleHook />
      <Form /> */}
      <ReduxComp />
      <ShowDataApi />
      
    </div>
    {/* // </BrowserRouter> */}
    </Provider>
  )
}

export default App
