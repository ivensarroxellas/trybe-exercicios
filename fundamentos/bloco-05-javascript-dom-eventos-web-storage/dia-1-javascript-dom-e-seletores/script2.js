document.querySelector("#header-container").style.background = "green";
document.querySelector(".emergency-tasks").style.background = "pink";
document.querySelectorAll(".no-emergency-tasks")[0].style.background = "yellow";
let subt = document.getElementsByTagName("h3");
    for (let i = 0; i < subt.length; i++) {
        subt[i].style.backgroundColor = "black";
    }
document.getElementById("footer-container").style.background = "green";