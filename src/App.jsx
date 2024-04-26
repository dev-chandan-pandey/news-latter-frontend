// // import React, { useState } from 'react';
// // import axios from 'axios';

// // function App() {
// //   const [email, setEmail] = useState('');
// //   const [message, setMessage] = useState('');

// //   const handleSubmit = async (event) => {
// //     event.preventDefault();
// //     try {
// //       const response = await axios.post('https://news-latter-backend-1.onrender.com/send-newsletter', { email });
// //       setMessage(response.data.message);
// //     } catch (error) {
// //       setMessage(error.response ? error.response.data.message : 'Server error');
// //     }
// //   };

// //   return (
// //     <div className="App">
// //       <h1>Subscribe to Our Newsletter</h1>
// //       <form onSubmit={handleSubmit}>
// //         <input
// //           type="email"
// //           placeholder="Enter your email"
// //           value={email}
// //           onChange={(e) => setEmail(e.target.value)}
// //           required
// //         />
// //         <button type="submit">Send Newsletter</button>
// //       </form>
// //       {message && <p>{message}</p>}
// //     </div>
// //   );
// // }

// // export default App;
// import React, { useState } from 'react';
// import axios from 'axios';

// function App() {
//   const [email, setEmail] = useState('');
//   const [message, setMessage] = useState('');

//   const handleSubmit = async (event) => {
//     event.preventDefault();
//     try {
//       const response = await axios.post('https://news-latter-backend-1.onrender.com/send-newsletter', { email });
//       setMessage(response.data.message);
//     } catch (error) {
//       setMessage(error.response ? error.response.data.message : 'Server error');
//     }
//   };

//   return (
//     <div className="bg-gray-100 min-h-screen flex justify-center items-center">
//       <div className="bg-white p-8 rounded-lg shadow-md">
//         <h1 className="text-3xl font-bold mb-4">Subscribe to Our Newsletter</h1>
//         <form onSubmit={handleSubmit} className="flex">
//           <input
//             type="email"
//             placeholder="Enter your email"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//             required
//             className="border border-gray-300 rounded-l px-4 py-2 outline-none"
//           />
//           <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded-r">
//             Send Newsletter
//           </button>
//         </form>
//         {message && <p className="mt-4">{message}</p>}
//       </div>
//     </div>
//   );
// }

// export default App;
import React, { useState } from 'react';
import axios from 'axios';

function App() {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post('https://news-latter-backend-1.onrender.com/send-newsletter', { email });
      setMessage(response.data.message);
    } catch (error) {
      setMessage(error.response ? error.response.data.message : 'Server error');
    }
  };

  return (
    <div className="bg-gray-100 min-h-screen flex justify-center items-center w-full h-full m-0 p-0 font-sans text-4xl">
      <div className="bg-white p-8 rounded-lg shadow-md text-center w-4/5 mx-auto">
        <h1 className="text-3xl font-bold mb-4">Subscribe to Our Newsletter</h1>
        <form onSubmit={handleSubmit} className="flex">
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="border border-gray-300 rounded-l px-4 py-2 outline-none flex-1"
          />
          <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded-r">
            Send Newsletter
          </button>
        </form>
        {message && <p className="mt-4 text-gray-800">{message}</p>}
      </div>
    </div>
  );
}

export default App;
