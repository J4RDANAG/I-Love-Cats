import { useState } from 'react';
import axios from 'axios';
import './App.css';


function App() {
  const [catFact, setCatFact] = useState([])
  // const [catImg, setCatImg] = useState(null)


  const FACT_BASE_URL = "https://catfact.ninja/fact"
  // const IMG_BASE_URL = 
  
  // put get request in event handeler for button click

  

  
  function displayCatFact(facts){
    const catFact = facts.fact
  
  }
    function getCatFact(){
  
      axios.get(FACT_BASE_URL)
      .then((response)=>{
        setCatFact(response.data)
        let factApiData = response.data
        console.log(factApiData)
      })
    }
  

   getCatFact()
  // useEffect(()=>{
  //   function getCatFact(){
  
  //     axios.get(FACT_BASE_URL)
  //     .then((response)=>{
  //       setCatFact(response.data)
  //       let factApiData = response.data
  //       console.log(factApiData)
  //     })
  //   }

  // },[catFact])

  return (
    <div className="App">
          <h1>cool cats</h1>
          <p catFact={catFact} key={factApiData.length}>
            {catFact}</p>
    </div>
  );
}

export default App;
