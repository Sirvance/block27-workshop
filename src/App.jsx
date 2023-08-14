import React, {useState} from 'react';
import Authenticate from './authenticate';
import SignUpForm from "./signupform";



export function App() {
  const [token, setToken] = useState(null);
  return (
  <>
    <SignUpForm token={token} setToken={setToken} />   
     <Authenticate token={token} setToken={setToken} />
    </>
  );
}

// export function() {
//   const [token, setToken] = useState(null);

//   return (
//     <>
//       <SignUpForm token={token} setToken={setToken} />
//       <Authenticate token={token} setToken={setToken} />
//     </>
//   );
// }


