const answer = Math.floor(Math.random() * 10 + 1);
let gusses = 0;

document.getElementById("submitbutton").onclick = function(){
    let guss = document.getElementById("gussfeild").value
    gusses += 1;

    if (guss == gusses) {
        alert(`The ${answer} is the Number, You took ${gusses} Gusses`);
    }
    else if (guss < answer) {
        alert(`Too small`);
    } 
    else {
        alert(`Too large`);
    }
}