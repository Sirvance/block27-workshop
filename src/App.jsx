import React, {useState} from 'react';
import Authenticate from "./Authenticate";
import SignUpForm from "./Signupform";



// export default function App() {
//   const [token, setToken] = useState(null);
//   return (
//     <>
//       <Authenticate />
//       <SignUpForm />
//     </>
//   );
// }

export default function App() {
  const [token, setToken] = useState(null);

  return (
    <>
      <SignUpForm token={token} setToken={setToken} />
      <Authenticate token={token} setToken={setToken} />
    </>
  );
}


