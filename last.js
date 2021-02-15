
    let name = sessionStorage.getItem ("user-names");
    let scores = sessionStorage.getItem ("scores");
   

document.querySelector(".name").innerHTML = name;
document.querySelector(".scores").innerHTML = scores;


function restart(){
    location.href = "first.html"
}