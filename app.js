


var question_list = [
    {
        question: "Who is the inventor of JavaScript ?",
        answer: "Brendan Eich",
        option: [
            "James Gosling",
            "Marks",
            "Brendan Eich",
            "Guido van Rossum"
        ]

    },
    {
        question: "What is the full form of RAM ?",
        answer: "Random Access Memory",
        option: [
            "Randomely Access Memory",
            "Random Access Memory",
            "Brendan Eich",
            "None of these"
        ]

    },
    {
        question: "Full Form of E-MAIL is ?",
        answer: "Electronic Mail",
        option: [
            "Electronic Mail",
            "Easy Mail",
            "Electric Mail",
            "None of these"
        ]

    },
]
function startPage(e){
    e.preventDefault();
    var name = document.forms["form-ar"]["user-name"].value;


    sessionStorage.setItem("user-names",name)
    location.href = "index.html"

}


// count other question
var questionCount = 0;
// scores count
let scores = 0;


function mainButton() {

    let checks = document.querySelector("li.select.active").innerHTML;

    if(checks == question_list[questionCount].answer){
        scores += 10;
    sessionStorage.setItem("scores", scores)
       // console.log(scores)
    }
    //end.html

    //  if(questionCount == question_list -1){
    //     location.href = "end.html";
    //     return
    
    // }
   
    questionCount++
    firstQuestion(questionCount)
    result()
    removeActive()
    
}
function firstQuestion(e){
    // question
    var firstq = document.getElementById("oneQuestion")
    firstq.innerHTML = question_list[e].question;

    //Answer
    var selector = document.getElementsByClassName("select")
    for(var i = 0 ; i < selector.length ; i++){
        select[i].innerHTML = question_list[e].option[i]        
    }
}

function activeClass(e) {
    removeActive()
    e.classList.add("active")

}

function removeActive() {
    var active = document.getElementsByClassName("active")
    for(var i = 0 ; i < active.length ; i++){
        active[i].classList.remove("active")
    }
}

function result(){
    // var result = document.getElementById("final-result")
    location.href = "end.html"

}
  // mainButton()
//     let name = sessionStorage.getItem ("user-names");
//     let scores = sessionStorage.getItem ("scores");
   

// document.querySelector(".name").innerHTML = name;
// document.querySelector(".scores").innerHTML = scores;
