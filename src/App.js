import { useEffect, useState } from 'react';
import axios from 'axios';
import './App.css';


function App() {
  
  // const [catImg, setCatImg] = useState(null)
  // https://api.thecatapi.com/v1/images/search?limit=10&breed_ids=beng&api_key=live_7goksYtcfS58FJaiuBc5wVXcivJEr5ezHHimbAcodUI1UyWxCj8sErSHPQNbEkfJ
  const FACT_BASE_URL = "https://catfact.ninja/fact";
  const IMG_BASE_URL = 'https://api.thecatapi.com/v1/images/search?limit=1&api_key=live_7goksYtcfS58FJaiuBc5wVXcivJEr5ezHHimbAcodUI1UyWxCj8sErSHPQNbEkfJ';
  
  // 'https://api.thecatapi.com/v1/images/search'
  
  // 
  const [catFact, setCatFact] = useState([])
  const [catImg, setCatImg] = useState([])

const BtnHandler = () =>{

axios.get(FACT_BASE_URL)
  .then((response)=>{
    setCatFact(response.data.fact)
    // let factApiData = response.data
    // console.log(factApiData)
  })
  }

    const CatImgHandler = () => {
     
        axios.get(IMG_BASE_URL)
        .then((response)=>{

          setCatImg(response.data[0])
          console.log(response.data[0])
        })
      }
    




useEffect(()=>{
   BtnHandler()
   CatImgHandler()

},[])

  return (
    <div className="App">
          <h1>cool cats</h1>
          <div className='cat__info-box'>
          <img src={catImg.url} alt='random cat' className='random__cat'/>
          <p>{catFact}</p>
          <button onClick={() => {BtnHandler() ; CatImgHandler()}}>Click me for Cats</button>
          </div>
  
    </div>
  );
}


export default App;
