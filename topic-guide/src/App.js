import React, { useState, useEffect } from 'react';
import Accordion from 'react-bootstrap/Accordion';
import { templates } from './templates/template';

import './App.css';

function App() {

  const queryParams = new URLSearchParams(window.location.search);
  const [taskData, setTaskData] = useState(null);
  const [activeAccordianKey, setActiveAccordianKey] = useState(null);
  const [introInfo, setIntroInfo] = useState(null);
  let version = queryParams.get('version') || 'latest';
  let task = queryParams.get('task') || 'storyboard';
  let lang = queryParams.get('lang') || 'en';

  const pathMod = `topic-guide/data/${version}/${task}/lang/${lang}`;

  useEffect(() => {
    fetch(pathMod+".json?"+new Date().getMilliseconds()).then((resp)=>{
     return resp.json()

    }).then(res=>{
      console.log(res);
      let { data, accordianActiveKey, info } = res;
      setTaskData(data);
      setActiveAccordianKey(accordianActiveKey);
      setIntroInfo(info);
    })
    // import(pathMod + '.json').then((res) => {
     
    // });
  }, []);

  return (
    <div className="App">
      <h3>{introInfo && introInfo.title}</h3>
      <div>
        <p>{introInfo && introInfo.description}</p>
      </div>
      {activeAccordianKey && <Accordion defaultActiveKey={activeAccordianKey - 1}>
        {taskData && taskData.map((data, index) => {
          return templates[data.type] && templates[data.type](data, index);
        })
        }

      </Accordion>
      }

    </div>
  );
}

export default App;
