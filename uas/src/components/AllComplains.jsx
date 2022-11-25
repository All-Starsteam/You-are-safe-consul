import React from "react";
import ComplainDetails from "./ComplainDetails"

const AllComplains = ({data}) => {
  
    console.log({data})
    
   return ( 
     <> 
   {data.map((e,i)=>(
     
     <ComplainDetails data={e} key={i} />
    
   ))}
    </>
 
  )};


export default AllComplains ;