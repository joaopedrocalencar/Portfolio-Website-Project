// function to toggle between themes

function toggleTheme() {
    const body = document.getElementById("body");
    body.classList.toggle("dark-theme");
}
//  function to alert a message
function Home() {
    alert("STOP, CONSTRUCTION!!!! 🚧🛑🚜🛠️👷");
}



const jsonData = '{"name": "Joao", "lastname": "Alencar", "age": 25, "yearborn": 1998, "city": "Toronto", "province": "Ontario"}';


// using "JSON.parse()" to convert json data to javascript object

const jsObject = JSON.parse(jsonData);


// printing js object to the console log

console.log (jsObject);


