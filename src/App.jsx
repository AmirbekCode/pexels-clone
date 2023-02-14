import './App.css';
import Layout from './Layout/Layout';

import axios from "axios";
import { Await } from 'react-router-dom';


function App() {
  // let headersList = {
  //   "Accept": "*/*",
  //   "User-Agent": "Thunder Client (https://www.thunderclient.com)",
  //   "Authorization": "Bearer j5wwGBjcN6auIrTTbWO7pQSPJ4ltgLVIEKkPyGlaCzHLLN7MEWrTTaPt" 
  //  }
   
  //  let reqOptions = {
  //    url: "https://api.pexels.com/v1/photos/4345",
  //    method: "GET",
  //    headers: headersList,
  //  }
   
  //  let response = Await(axios.request(reqOptions));
  //  console.log(response.data);
  return <Layout/>

  
}

export default App;


// import { useState, useEffect} from 'react';

//     export default function MapPhoto(params) {



//         return(
//             <>
//              {
//                  data.map((index) => {
                     
//                      return (<img src={data.data.url} alt="" />)
//                 })
//              }
//             </>
//         )
//     }