
let GLOBAL_URL = "";

if(process.env.NODE_ENV === 'development') {
    GLOBAL_URL = 'http://localhost:3001/'
  }
  
  if(process.env.NODE_ENV === 'production') {
    GLOBAL_URL = 'https://justcookapi.herokuapp.com/api'
  }

export {GLOBAL_URL}