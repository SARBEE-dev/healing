var submit = document.getElementById("btn-info");
button.onclick = changeGreeting;
function changeGreeting(){
    var greeting = document.getElementsByTagName("display-2")[0];
    var input = document.getElementById("name").value;
    greeting.innerHTML = "Hello, " + input;
}