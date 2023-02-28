// const send = document.querySelector("#submit");

// send.onclick = function(){
//     console.log("clicked");
// }

const error = document.getElementById("error");
const email = document.getElementById("valid-email");
const text = document.getElementById("input");

const input = document.querySelector("input");

input.addEventListener("input", () => {

    if(input.value.length < 1){
        error.style.display = "inline-block";
        text.style.outline = "1px solid red";
        email.style.display = "block";
    } else{
        error.style.display = "none";
        text.style.outline = "none";
        text.style.outline = "1px solid gray";
        email.style.display = "none";
    }
});