import React from 'react';
import { useRouteError } from "react-router-dom";


export default function ErrorPage() {
  const error = useRouteError();

 return (
     <div>
       <div>
         오류
       </div>
         <div>
           <input type='button' value='🏠 홈으로 🏠' />
         </div> 
       </div>
 );
}