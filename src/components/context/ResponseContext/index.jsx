import {createContext} from 'react';

const ResponseContext = createContext({
  responseStatus: null,
  message: 'Invalid Request'
}) 

export default ResponseContext;