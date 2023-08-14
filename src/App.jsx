import Authenticate from "./authenticate";
import SignUpForm from "./signupform";
import React, {useState} from 'react';
console.log


export default function App() {
  const [token, setToken] = useState(null);
  return (
  <>
    <SignUpForm token={token} setToken={setToken} />   
     <Authenticate token={token} setToken={setToken} />
     console.log()
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


