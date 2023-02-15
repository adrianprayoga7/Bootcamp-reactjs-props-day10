import ReactDOM from "react-dom";

//function untuk mengambil componen di index.html 
const renderId = (element,id) => {
    ReactDOM.render(element, document.getElementById(id));
}

export default renderId;
