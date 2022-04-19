import React , { useState, useEffect } from 'react';
import './App.css';

function App() {

  const queryParams = new URLSearchParams(window.location.search);
  const [taskData, setTaskData ] = useState(null);
  const pathMod = `./data/${queryParams.get('version')}/${queryParams.get('task')}/lang/${queryParams.get('lang')}`;
 
  useEffect(()=>{
    import(pathMod+'.json').then((res)=>{
     let { data } = res;
     setTaskData(data);
    });
  }, []);


function prepareQuestions(){
    if(!taskData){
      return "";
    }
 return taskData.faq.map((faq)=>{
    return (<a target="_blank" href={faq.link} ><li> {faq.question}</li></a>)
  })
}


  return (
    <div className="App">
        <ul>
          {taskData && prepareQuestions()}
        </ul>
    </div>
  );
}

export default App;
