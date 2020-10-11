
    var initials = document.querySelector("#initials")
    var div= document.querySelector('#highscore')
    result.style.display = "none"
    highscore.style.display = "block"
    var p; 
    var Ob = Object.fromEntries(Object.entries(localStorage).sort(([,a],[,b]) => b - a))
    var keys = Object.keys(Ob)
    var values = Object.values(Ob)
    for(var i = 0; i < keys.length; i++){
        p = document.createElement("p")
        p.textContent = (i+1) + "." + keys[i] + " - " + values[i]
        div.append(p)
    }
