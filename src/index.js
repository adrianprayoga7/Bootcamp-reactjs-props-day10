import React from "react";

//render function dari render.js
import renderId from "./render";

//component html nav
const nav = 
<nav class="navbar navbar-expand-lg navbar-white bg-white">
<h2>BOOTCAMP Batch 1 : Experiment with REACTJS</h2>
<button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
  <span class="navbar-toggler-icon"></span>
</button>
<div class="collapse navbar-collapse  justify-content-end d-flex" id="navbarNav">
  <ul class="navbar-nav">
    <li class="nav-item active">
      <a class="nav-link" href="#top">home</a>
    </li>
    <li class="nav-item">
      <a class="nav-link" href="#top">about</a>
    </li>
    <li class="nav-item">
      <a class="nav-link" href="#top">contacts</a>
    </li>
  </ul>
</div>
</nav>

//component html element
const element = <h1>This is React</h1>

//mengambil function dari render.js
//mengambil component dari html 
renderId(nav,("nav"));  
renderId(element,("root"));  

