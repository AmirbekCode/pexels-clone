import axios from "axios";

let headersList = {
 "Accept": "*/*",
 "User-Agent": "Thunder Client (https://www.thunderclient.com)",
 "Authorization": "Bearer j5wwGBjcN6auIrTTbWO7pQSPJ4ltgLVIEKkPyGlaCzHLLN7MEWrTTaPt" 
}

let reqOptions = {
  url: "https://api.pexels.com/v1/curated",
  method: "GET",
  headers: headersList,
}

let response = await axios.request(reqOptions);
console.log(response.data);