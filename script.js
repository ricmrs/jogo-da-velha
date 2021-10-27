let pos = window.document.querySelectorAll('.pos');
let round = 0;
let occupied = []

for(var i = 0; i < 9; i++){
    occupied.push(0);
}

for(let i = 0; i < pos.length; i++) {
    pos[i].addEventListener('click', a => {
        if(occupied[i] == 0){
            if(round % 2 == 0){
            pos[i].insertAdjacentText('beforeend', 'X');
            occupied[i] = 1;
            } else {
            pos[i].insertAdjacentText('beforeend', 'O');
            occupied[i] = 2;
            }
            round++;
            if(round >= 5){
                checkEnd();
            }            
        }
        if(round == 9) {
            console.log("empate");
            btnReset.style.visibility = "visible";
        }
    });
}

function checkEnd() {
    for(i = 0; i <= 6; i += 3){ //rows
        if(occupied[i] == 1 && occupied[i+1] == 1 && occupied[i+2] == 1){
            console.log("X ganha");
            pos[i].style.color = 'red';
            pos[i+1].style.color = 'red';
            pos[i+2].style.color = 'red';
            ocp();
        }
        if(occupied[i] == 2 && occupied[i+1] == 2 && occupied[i+2] == 2){
            console.log("O ganha");
            pos[i].style.color = 'red';
            pos[i+1].style.color = 'red';
            pos[i+2].style.color = 'red';
            ocp();
        }
    }
    for(i = 0; i <= 2; i++){ //columns
        if(occupied[i] == 1 && occupied[i+3] == 1 && occupied[i+6] == 1){
            console.log("X ganha");
            pos[i].style.color = 'red';
            pos[i+3].style.color = 'red';
            pos[i+6].style.color = 'red';
            ocp();
        }
        if(occupied[i] == 2 && occupied[i+3] == 2 && occupied[i+6] == 2){
            console.log("O ganha");
            pos[i].style.color = 'red';
            pos[i+3].style.color = 'red';
            pos[i+6].style.color = 'red';
            ocp();
        }
    }
    for(i=2; i <= 4; i += 2){ //cross
        if(occupied[4-i] == 1 && occupied[4] == 1 && occupied[4+i] == 1){
            console.log("X ganha");
            pos[4-i].style.color = 'red';
            pos[4].style.color = 'red';
            pos[4+i].style.color = 'red';
            ocp();
        }
        if(occupied[4-i] == 2 && occupied[4] == 2 && occupied[4+i] == 2){
            console.log("O ganha");
            pos[4-i].style.color = 'red';
            pos[4].style.color = 'red';
            pos[4+i].style.color = 'red';
            ocp();
        }
    }
}

function ocp(){
    for(var i = 0; i < 9; i++){
        occupied[i] = 3;
    }
    btnReset.style.visibility = "visible";
}

let btnReset = window.document.querySelector('.reset')

btnReset.addEventListener('click', function(){
    for(var i = 0; i < 9; i++){
        pos[i].textContent = "";
        pos[i].style.color = '#000';
        occupied[i] = 0;
        round = 0;
    }
    btnReset.style.visibility = "hidden";
})
