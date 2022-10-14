import { useEffect, useState } from 'react';
import axios from 'axios';
import './App.css';
import './appCat.css';
import wavingCat from './components/waving-cat.gif'
import nyanCat from "./components/nyan-cat.gif"
import textbubble from './components/textbubble.png'


function App() {
  const [position, setPosition] = useState({
    x: 0,
    y: 0
  });




  // const [catImg, setCatImg] = useState(null)
  // https://api.thecatapi.com/v1/images/search?limit=10&breed_ids=beng&api_key=live_7goksYtcfS58FJaiuBc5wVXcivJEr5ezHHimbAcodUI1UyWxCj8sErSHPQNbEkfJ
  const FACT_BASE_URL = "https://catfact.ninja/fact";
  const IMG_BASE_URL =  'https://api.thecatapi.com/v1/images/search?'

  const API_KEY = '&api_key=live_7goksYtcfS58FJaiuBc5wVXcivJEr5ezHHimbAcodUI1UyWxCj8sErSHPQNbEkfJ'
// 'https://api.thecatapi.com/v1/images/search?limit=1&api_key=live_7goksYtcfS58FJaiuBc5wVXcivJEr5ezHHimbAcodUI1UyWxCj8sErSHPQNbEkfJ';
  
  // 'https://api.thecatapi.com/v1/images/search'
  // breed_id=beng
  // 
  const [catFact, setCatFact] = useState([])
  const [catImg, setCatImg] = useState([])
  const [loading, setLoading] = useState(undefined)
  const [typeCat, setTypeCat] = useState('limit=1')

const BtnHandler = async () =>{

await axios.get(FACT_BASE_URL)
  .then((response)=>{
    setCatFact(response.data.fact)
    // let factApiData = response.data
    // console.log(factApiData)
  })
  }

    const CatImgHandler = async () => {
        await axios.get(`${IMG_BASE_URL}${typeCat}${API_KEY}`)
        .then((response)=>{
            setCatImg(response.data[0])
        
      }
      
      )}
  
    




useEffect(()=>{
  BtnHandler()
   CatImgHandler()
},[])

function changeCatTypeBeng(){
setTypeCat('breed_id=beng')
console.log(typeCat)
}

function changeCatTypeTvan(){
  setTypeCat('breed_id=tvan')
  console.log(typeCat)
  }
  
  function changeCatTypeRandom(){
    setTypeCat('limit=1')
    console.log(typeCat)
    }
    function changeCatTypeNebe(){
      setTypeCat('breed_id=nebe')
      console.log(typeCat)
      }


  return (
    <div className="App" onPointerMove={e => {
      setPosition({
        x: e.clientX,
        y: e.clientY
      });
    }}>
      <div style={{
        position: 'absolute',
        transform: `translate(${position.x}px, ${position.y}px)`,
        zIndex: 2
      }}>

      <img src={nyanCat} className="nyan__cursor"/>


      </div>

    <div id="img2"> <img id="img" 
    src="http://orig11.deviantart.net/dcab/f/2011/158/1/6/nyan_cat_by_valcreon-d3iapfh.gif" 
    alt='nyan cat gif'
    onClick={() => {BtnHandler() ; CatImgHandler()}}
    /> </div>


         
          <div className='cat__info-box'>
        
          
          <h1>cool cats</h1>
          <div>
          <button className='btn' onClick={() => {{changeCatTypeRandom()} ; {CatImgHandler()}}}>Suprise Me!</button>
          <button className='btn' onClick={() => {{changeCatTypeBeng()} ; {CatImgHandler()}}}>Bengal</button>
          <button className='btn' onClick={() => {{changeCatTypeTvan()} ; {CatImgHandler()}}}>Turkish Angora</button>
          <button className='btn' onClick={() => {{changeCatTypeNebe()} ; {CatImgHandler()}}}>Russian Blue</button>
          </div>
          <img src={catImg.url} alt='random cat' className='random__cat'/>
          
         
          <div className='cat__fact'>
          <h2 className='rainbow'>{catFact}</h2>
          </div>
           </div>
           <div>
           <img src={wavingCat} className='waving__cats'/>
           <img src={textbubble} className='text__bubble'  />
           <h4 className='text__bubble-text'>Click on<br/>Nyan cat!<br/>For Cat & Fact</h4>
           </div>

         

          <div id="img1"> <img 
          src="http://orig11.deviantart.net/dcab/f/2011/158/1/6/nyan_cat_by_valcreon-d3iapfh.gif" 
          alt='nyan cat gif'
          onClick={() => {BtnHandler() ; CatImgHandler()}}
          /> </div>
  
    </div>
  );
}


export default App;
