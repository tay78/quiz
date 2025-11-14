let q1 = document.querySelector('.q1');
    q1.style.display ="block";
let q2 = document.querySelector('.q2');
    q2.style.display ="none";
let q3 = document.querySelector('.q3');
    q3.style.display ="none";
let q4 = document.querySelector('.q4');
    q4.style.display ="none";
let q5 = document.querySelector('.q5');
    q5.style.display ="none";
let q6 = document.querySelector('.q6');
    q6.style.display ="none";
let q7 = document.querySelector('.q7');
    q7.style.display ="none";
let q8 = document.querySelector('.q8');
    q8.style.display ="none";
let correctAnswer = 0;
let wrongAnswer = 0;
let next1 = document.querySelector('.next1');
let next2 = document.querySelector('.next2');
let next3 = document.querySelector('.next3');
let next4 = document.querySelector('.next4');
let next5 = document.querySelector('.next5');
let next6 = document.querySelector('.next6');
let next7 = document.querySelector('.next7'); 
let next8 = document.querySelector('.next8');
let next9 = document.querySelector('next9');
let restart = document.querySelector('.restart');
let results = document.querySelector('.results');
restart.style.display ="none";
results.style.display ="none";

q1.addEventListener('click', function() {
if (document.getElementById('q1One').checked) {  
    console.log("correct");
    correctAnswer = 1+correctAnswer;
} else if (document.getElementById('q1Two').checked) {
    console.log("wrong");
    wrongAnswer = 1+wrongAnswer;
} else if (document.getElementById('q1Three').checked) {
    console.log("wrong");
wrongAnswer=1+wrongAnswer;
} else if (document.getElementById('q1Four').checked) {
    console.log("wrong");
wrongAnswer=1+wrongAnswer;

} else if (document.getElementById('q1Five').checked) {
    console.log("wrong");
wrongAnswer=1+wrongAnswer;

} else {
    console.log("No selection made");
}
});
next1.addEventListener('click', function() { 
    q1.style.display ="none";
    q2.style.display ="block";
    if (document.getElementById('q2One').checked) {  
    console.log("correct");
    correctAnswer = 1+correctAnswer;
} else if (document.getElementById('q2Two').checked) {
    console.log("wrong");
wrongAnswer=1+wrongAnswer;
} else {
    console.log("No selection made");
}
});
next2.addEventListener('click', function() {  
    q2.style.display ="none";
    q3.style.display ="block";
    if (document.getElementById('q3One').checked) {  
    console.log("wrong");
    wrongAnswer = 1+wrongAnswer;
} else if (document.getElementById('q3Two').checked) {
    console.log("wrong");
    wrongAnswer = 1+wrongAnswer;
} else if (document.getElementById('q3Three').checked) {
    console.log("correct");
    correctAnswer = 1+correctAnswer;
} else if (document.getElementById('q3Four').checked) {
    console.log("wrong");
wrongAnswer=1+wrongAnswer;

} else if (document.getElementById('q3Five').checked) {
    console.log("wrong");
wrongAnswer=1+wrongAnswer;

} else {
    console.log("No selection made");
}
});
next3.addEventListener('click', function() {  
    q3.style.display ="none";
    q4.style.display ="block";
let  q4One2= document.getElementById("q4One");
let q4OneInput = q4One2.value;
    if (q4OneInput=="Rad") {  
    console.log("correct");
    correctAnswer = 1+correctAnswer;
} else{
    console.log("wrong");
    wrongAnswer = 1+wrongAnswer;

}
});
next4.addEventListener('click', function() {  
    q4.style.display ="none";
    q5.style.display ="block";
        if (document.getElementById('q5One').checked) {  
    console.log("wrong");
    wrongAnswer = 1+wrongAnswer;
} else if (document.getElementById('q5Two').checked) {
    console.log("correct");
    correctAnswer = 1+correctAnswer;
} else if (document.getElementById('q5Three').checked) {
    console.log("wrong");
wrongAnswer=1+wrongAnswer;
} else if (document.getElementById('q5Four').checked) {
    console.log("wrong");
wrongAnswer=1+wrongAnswer;

} else if (document.getElementById('q5Five').checked) {
    console.log("wrong");
wrongAnswer=1+wrongAnswer;

} else {
    console.log("No selection made");
}
});
next5.addEventListener('click', function() {  
    q5.style.display ="none";
    q6.style.display ="block";
            if (document.getElementById('q6Two').checked) {  
    console.log("wrong");
    wrongAnswer = 1+wrongAnswer;
} else if (document.getElementById('q6One').checked) {
    console.log("correct");
    correctAnswer = 1+correctAnswer;
} else if (document.getElementById('q6Three').checked) {
    console.log("wrong");
wrongAnswer=1+wrongAnswer;
} else if (document.getElementById('q6Four').checked) {
    console.log("wrong");
wrongAnswer=1+wrongAnswer;

} else {
    console.log("No selection made");
}
});
next6.addEventListener('click', function() {  
    q6.style.display ="none";
    q7.style.display ="block";
            if (document.getElementById('q7One').checked) {  
    console.log("wrong");
    wrongAnswer = 1+wrongAnswer;
} else if (document.getElementById('q7Two').checked) {
    console.log("correct");
    correctAnswer = 1+correctAnswer;
} else {
    console.log("No selection made");
}
});
next7.addEventListener('click', function() {  
    q7.style.display ="none";
    q8.style.display ="block";
            if (document.getElementById('q8Two').checked) {  
    console.log("wrong");
    wrongAnswer = 1+wrongAnswer;
} else if (document.getElementById('q8One').checked) {
    console.log("correct");
    correctAnswer = 1+correctAnswer;
} else if (document.getElementById('q8Three').checked) {
    console.log("wrong");
wrongAnswer=1+wrongAnswer;
} else {
    console.log("No selection made");
}
});
next8.addEventListener('click', function() {  
    q8.style.display ="none";
    q9.style.display ="block";
let  q9One2= document.getElementById("q9One");
let q9OneInput = q9One2.value;
    if (q9OneInput==7) {  
    console.log("correct");
    correctAnswer = 1+correctAnswer;
} else{
    console.log("wrong");
    wrongAnswer = 1+wrongAnswer;

}
});
next9.addEventListener('click', function() {  
    q9.style.display ="none";
    results.style.display ="block";
    restart.style.display ="block";
    document.querySelector('.correctAnswers').innerText = "Correct Answers: " + correctAnswer;
    document.querySelector('.wrongAnswers').innerText = "Wrong Answers: " + wrongAnswer;
});
restart.addEventListener('click', function() {  
    results.style.display ="none";
    restart.style.display ="none";
    q1.style.display ="block";
    correctAnswer = 0;
    wrongAnswer = 0;
    let radios = document.querySelectorAll('input[type="radio"]');
    radios.forEach(radio => radio.checked = false); 
});
