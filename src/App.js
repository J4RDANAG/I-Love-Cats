import { useEffect, useState } from 'react';
import axios from 'axios';
import './App.css';
import grumpyCat from './grumpycat.jpg'



// const IMG_BASE_URL = 

function App() {
  
  // const [catImg, setCatImg] = useState(null)

  const FACT_BASE_URL = "https://catfact.ninja/fact"
  const [catFact, setCatFact] = useState([])

const BtnHandler = () =>{

  axios.get(FACT_BASE_URL)
  .then((response)=>{
    setCatFact(response.data.fact)
    let factApiData = response.data
    console.log(factApiData)
  })
}


useEffect(()=>{
   BtnHandler()
},[])
  return (
    <div className="App">
          <h1>cool cats</h1>
          <p>{catFact}</p>
          {/* <image src={grumpyCat} className="cat__image"></image> */}
          <button onClick={() => BtnHandler()}>Click me for Cats</button>
  
    </div>
  );
}

export default App;
