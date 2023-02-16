import React, { useRef, useState } from "react";
import ReactDOM from "react-dom/client";

//render function dari render.js
// import renderId from "./render";

// component html nav
// const nav = 
// <nav class="navbar navbar-expand-lg navbar-white bg-white">
// <h2>BOOTCAMP Batch 1 : Experiment with REACTJS</h2>
// <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
//   <span class="navbar-toggler-icon"></span>
// </button>
// <div class="collapse navbar-collapse  justify-content-end d-flex" id="navbarNav">
//   <ul class="navbar-nav">
//     <li class="nav-item active">
//       <a class="nav-link" href="#top">home</a>
//     </li>
//     <li class="nav-item">
//       <a class="nav-link" href="#top">about</a>
//     </li>
//     <li class="nav-item">
//       <a class="nav-link" href="#top">contacts</a>
//     </li>
//   </ul>
// </div>
// </nav>




const el = document.getElementById("root");
const root = ReactDOM.createRoot(el);






function App () {

  // const [nama, setNama] = useState("");
  // const [job, setJob] = useState("");

  // return (
  //       <form>
  //         <input
  //           value={nama}
  //           onChange={(e) => setNama(e.target.value)}
  //           label="Nama"
  //         />
  //         <input
  //           value={job}
  //           onChange={(e) => setJob(e.target.value)}
  //           label="Job"
  //         />
  //         <button onClick={}> Submit </button>
  //         <h2>Nama Saya : {nama}</h2>
  //         <h2>Pekerjaan Saya : {job}</h2>
  //       </form>
        
  // );

  //inisialisasi variable nama dan setName
  //useState untuk menyimpan di state lokal
  //untuk dipanggil difungsi event handler
  const [nama, setNama] = useState('');
  const [job, setJob] = useState('');

  const [updated, setUpdated] = useState(nama);
  const [updated2, setUpdated2] = useState(job);


  //fungsi untuk set handler button
  const handleChange = (event) => {
    setNama(event.target.value);
  };

  const handleChange2 = (event) => {
    setJob(event.target.value);
  };

  //fungsi handle click button
  const handleClick = () => {
    // 👇 "message" stores input field value
    setUpdated(nama);
    setUpdated2(job);
  };

  //untuk mengembalikan kode html 
  return (
    <div style={{marginLeft : 30, marginTop : 30}}>
      <p>Masukan Nama : </p>
      <input
        type="text"
        id="message"
        name="message"
        onChange={handleChange}
        value={nama}
      />
      <p>Masukan Job :</p>
      <input
        type="text"
        id="message"
        name="message"
        onChange={handleChange2}
        value={job}
      />
      <br></br>
      <br></br>
      <br></br>
      <h3>Nama: {updated}</h3>
      <h3>Pekerjaan: {updated2}</h3>

      <br></br>
      <button onClick={handleClick}>Simpan</button>
    </div>
  );
  
}







//   // untuk memanggil objek di react 
//   const data = {
//     color: "red",
//   }
//   //memanggil nama objek di dalam value objek
  // return <h1>{data.color}</h1>

  //unruk render fungsi App
root.render(<App />);

//component html element
// const element = <h1>This is React</h1>

// //mengambil function dari render.js
// //mengambil component dari html 
// renderId(nav,("nav"));  
// renderId(element,("root"));  

