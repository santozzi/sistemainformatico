const URL_GABINETE='http://localhost:3000/gabinete/primerPiso22';
const URL_SIGNUP='http://localhost:3000/signup';

export async function gabinete() {
    // Default options are marked with *
    const response = await fetch(URL_GABINETE)
    return await response.json(); 
  }