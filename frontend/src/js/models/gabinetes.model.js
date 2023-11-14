const URL_GABINETE='http://192.168.1.117:3000/gabinete/gabinete1';
const URL_SIGNUP='http://localhost:3000/signup';

export async function gabinete() { 
    // Default options are marked with *
    const response = await fetch(URL_GABINETE) 
    return await response.json(); 
  }