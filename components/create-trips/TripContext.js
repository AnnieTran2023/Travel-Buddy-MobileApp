import { createContext } from "react";

const TripContext = createContext(null);
export default TripContext;

//This enables state sharing across children components 
//without passing props down manually at every level