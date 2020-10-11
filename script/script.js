var start = document.querySelector(".start")
var quiz = document.querySelector(".quiz")
var button = document.querySelector(".button")
var result = document.querySelector("#result")
var highscore = document.querySelector("#highscore-buttons")
var highscor = document.querySelector("#highscore")
var answer = document.querySelector("#answers")
var value = document.querySelector("#value")
var back = document.querySelector("#back")
var s = document.querySelector("#s")
var clear = document.querySelector("#clear")
//var a = document.querySelector("#link")
 
var question1 = document.querySelector("#question1")
var question2 = document.querySelector("#question2")
var question3 = document.querySelector("#question3")
var question4 = document.querySelector("#question4")
var question5 = document.querySelector("#question5")

var button1 = document.querySelectorAll(".button1")
var right1 = document.querySelector(".right1")
var button2 = document.querySelectorAll(".button2")
var right2 = document.querySelector(".right2")
var button3 = document.querySelectorAll(".button3")
var right3 = document.querySelector(".right3")
var button4 = document.querySelectorAll(".button4")
var right4 = document.querySelector(".right4")
var button5 = document.querySelectorAll(".button5")
var right5 = document.querySelector(".right5")
var button6 = document.querySelectorAll(".button6")
var res =  document.querySelector("#res")
var time = document.querySelector("#time")


var timeLeft = 75
var stop = false;

var score = 0

button.addEventListener("click",function(){
    start.style.display = "none";
    quiz.style.display = "block"
    question1.style.display = "block"

x = setInterval(myTimer,1000);

function myTimer(){    
        time.textContent = timeLeft
        if(timeLeft > 0 && stop == false){
            timeLeft -= 1
         }
        if(timeLeft == 0){
            question1.style.display = "none"
            question2.style.display = "none"
            question3.style.display = "none"
            question4.style.display = "none"
            question5.style.display = "none"
            answer.style.display = "none"
            result.style.display = "block" 
            time.textContent = timeLeft
            stop = true
        }
    }
})



for(var i = 0; i < button1.length; i++){
    button1[i].addEventListener("click",function(){
        question1.style.display = "none"
        answer.style.display = "block"
        question2.style.display = "block"
        value.textContent = "Wrong!"
        timeLeft -= 10
        setInterval(function(){
            value.textContent = ""
        },800)
    })
}

right1.addEventListener("click",function(){
    question1.style.display = "none"
    answer.style.display = "block"
    question2.style.display = "block"
    value.textContent = "Correct!"
    score++;
    setInterval(function(){
        answer.style.display = "none"
    },800)

})


for(var i = 0; i < button2.length; i++){
    button2[i].addEventListener("click",function(){
    question2.style.display = "none"
    question3.style.display = "block"
    answer.style.display = "block"
    value.textContent = "Wrong!"
    timeLeft -= 10
    setInterval(function(){
        answer.style.display = "none"
    },1000)
    })
}

right2.addEventListener("click",function(){
    question2.style.display = "none"
    question3.style.display = "block"
    answer.style.display = "block"
    value.textContent = "Correct!"
    score++
    setInterval(function(){
        answer.style.display = "none"
    },1000)
})

for(var i = 0; i < button3.length; i++){
    button3[i].addEventListener("click",function(){
    question3.style.display = "none"
    question4.style.display = "block" 
    answer.style.display = "block"  
    value.textContent = "Wrong!"
    timeLeft -= 10
    setInterval(function(){
        answer.style.display = "none"
    },1500)

    })
}
right3.addEventListener("click",function(){
    question3.style.display = "none"
    question4.style.display = "block" 
    answer.style.display = "block"  
    value.textContent = "Correct!"
    score++
    setInterval(function(){
        answer.style.display = "none"
    },1500)
    
})

for(var i = 0; i < button4.length; i++){
    button4[i].addEventListener("click",function(){
    question4.style.display = "none"
    question5.style.display = "block"
    answer.style.display = "block"
    value.textContent = "Wrong!"
    timeLeft -= 10
    setInterval(function(){
        answer.style.display = "none"
    },1500)

    })
}

right4.addEventListener("click",function(){
    question4.style.display = "none"
    question5.style.display = "block"
    answer.style.display = "block"
    value.textContent = "Correct!"
    score++
    setInterval(function(){
        answer.style.display = "none"
    },1500)
    stop = true 
})

for(var i = 0; i < button5.length; i++){
button5[i].addEventListener("click",function(){
    question5.style.display = "none"
    result.style.display = "block"
    s.textContent = score
    answer.style.display = "none"
    timeLeft -= 10
    setInterval(function(){
        answer.style.display = "none"
    },1500)
    stop = true 

})
}

right5.addEventListener("click",function(){
    question5.style.display = "none"
    result.style.display = "block"
    s.textContent = score
    answer.style.display = "none"
    value.textContent = "Correct!"
    setInterval(function(){
        answer.style.display = "none"
    },1500)
  
    
})
var p = document.createElement("p")
var div= document.querySelector('#highscore')
//var d = document.createElement("p")

res.addEventListener("click",function(){
    var initials = document.querySelector("#initials")
    var div= document.querySelector('#highscore')
    result.style.display = "none"
    highscore.style.display = "block"
    var p;
    localStorage.setItem(initials.value,score) 
    var Ob = Object.fromEntries(Object.entries(localStorage).sort(([,a],[,b]) => b - a))
    var keys = Object.keys(Ob)
    var values = Object.values(Ob)
    for(var i = 0; i < keys.length; i++){
        p = document.createElement("p")
        p.textContent = (i+1) + "." + keys[i] + " - " + values[i]
        div.append(p)
    }
})

back.addEventListener("click",function(){
    quiz.style.display = "none"
    highscor.style.display = "none"
    highscore.style.display = "none"
    start.style.display = "block"
    score = 0 
    alert("Refresh if you want to play again")
})

clear.addEventListener("click",function(){
    div.remove(p)
    localStorage.clear()
})

/*a.addEventListener("click",function(){
    var inI = localStorage.getItem("Initals: ")
    var inS = localStorage.getItem("Score: ")

    result.style.display = "none"
    highscore.style.display = "block"
})*/