import React, { useState } from 'react';


export default function SignUpForm({ setToken }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);

  async function handleSubmit(event) {
    event.preventDefault();
    
    try {
      const response = await fetch('https://fsa-jwt-practice.herokuapp.com/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password }),
      });

      const result = await response.json();
      setToken(result.token);
    } catch (error) {
      console.log(result);
      console.error('Error signing up:', error.message);
    }
  }

  return (
    <>
      <h2>Sign Up</h2>
      {error && <p>{error}</p>}
      <form onSubmit={handleSubmit}>
        <label>
          Username:{" "}
          <input
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </label>
        <label>
          Password:{" "}
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          
        </label>
        <button>Submit</button>
      </form>
    </>
  );
}























//   return (
//     <div>
//       <h2>Sign Up</h2>
//       <form onSubmit={handleSubmit}>
//         {/* Form fields for email and password */}
//         <button type="submit">Sign Up</button>
//       </form>
//       <form>
//   <label>
//     Username: <input />
//   </label>
//   <label>
//     Password: <input />
//   </label>
//   <button>Submit</button>
//   <input value={username} onChange={(e) => setUsername(e.target.value)} />
// </form>
//     </div>
//   );
// }




































// export default function SignUpForm() {
//     const [username, setUsername] = useState("");
//     const [password, setPassword] = useState("");
//     const [error, setError] = useState(null);
    
    
    
    
//     async function handleSubmit(event) {
//         event.preventDefault();


//         try {
//             const response = await fetch("https://fsa-jwt-practice.herokuapp.com/signup", {
//               method: "POST",
//               headers: {
//                 "Content-Type": "application/json",
//               },
//               body: JSON.stringify({ username, password }), // Send username and password in the request body
//             });
      
//             const result = await response.json();
//             if (result.token) {
//                 setToken(result.token)
//             }  
           
//         } catch (error) {
//             setError(error.message);
//           }
//         }
//       return (
//         <>
//       <h2>Sign Up</h2>
//       {error && <p>{error}</p>}
//       <form onSubmit={handleSubmit}>
//         {/* ... */}
//       </form>
//     </>
//   );
// }
    //     <div>
    //       <h2>Sign Up!</h2>
    //       <form onSubmit={handleSubmit}>
    //         <label>
    //           Username:{" "}
    //           <input
    //             type="text"
    //             value={username}
    //             onChange={(e) => setUsername(e.target.value)}
    //           />
    //         </label>
    //         <label>
    //           Password:{" "}
    //           <input
    //             type="password"
    //             value={password}
    //             onChange={(e) => setPassword(e.target.value)}
    //           />
    //         </label>
    //         <button type="submit">Submit</button>
    //       </form>
    //     </div>
    //   );
    // }
    
    
    
    
    
    