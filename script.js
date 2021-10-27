let pos = window.document.querySelectorAll('.pos');
let round = 0;
let occupied = []
let res = window.document.querySelector('.result');
let mode = window.document.querySelector('#bot');
let modepvp = window.document.querySelector('#pvp');

for(var i = 0; i < 9; i++){
    occupied.push(0);
}

for(let i = 0; i < pos.length; i++) {
        pos[i].addEventListener('click', a => {
            if(mode.checked){
                modepvp.setAttribute("disabled", "");
                if(occupied[i] == 0){
                    pos[i].insertAdjacentText('beforeend', 'X');
                    occupied[i] = 1; 
                    round++; 
                    checkEnd();
                    setTimeout(() => {bot()}, 100);  //VER EMPATE !      
                }
            } else {
                mode.setAttribute("disabled", "");
                if(occupied[i] == 0){
                    if(round % 2 == 0){
                    pos[i].insertAdjacentText('beforeend', 'X');
                    occupied[i] = 1;
                    } else {
                    pos[i].insertAdjacentText('beforeend', 'O');
                    occupied[i] = 2;
                    }
                    round++;
                    checkEnd();       
                }
            }           
        });
}


function bot() {
    if(occupied[i] != 3){
        var x = parseInt(Math.random() * 9);
        if(occupied[x] == 0){            
            pos[x].insertAdjacentText('beforeend', 'O');
            occupied[x] = 2;
            checkEnd();          
        } else {
            bot();
        }
    }
}

function checkEnd() {
    for(i = 0; i <= 6; i += 3){ //rows
        if(occupied[i] == 1 && occupied[i+1] == 1 && occupied[i+2] == 1){
            if(mode.checked){ res.textContent = 'Você ganhou!';
            } else { res.textContent = 'Jogador 1 ganhou!' }
            res.style.color = 'green';
            pos[i].style.color = 'green';
            pos[i+1].style.color = 'green';
            pos[i+2].style.color = 'green';
            endsGame();
        }
        if(occupied[i] == 2 && occupied[i+1] == 2 && occupied[i+2] == 2){
            if(mode.checked){ res.textContent = 'Você perdeu!';
            } else { res.textContent = 'Jogador 2 ganhou!' }
            res.style.color = 'red';
            pos[i].style.color = 'red';
            pos[i+1].style.color = 'red';
            pos[i+2].style.color = 'red';
            endsGame();
        }
    }
    for(i = 0; i <= 2; i++){ //columns
        if(occupied[i] == 1 && occupied[i+3] == 1 && occupied[i+6] == 1){
            if(mode.checked){ res.textContent = 'Você ganhou!';
            } else { res.textContent = 'Jogador 1 ganhou!' }
            res.style.color = 'green';
            pos[i].style.color = 'green';
            pos[i+3].style.color = 'green';
            pos[i+6].style.color = 'green';
            endsGame();
        }
        if(occupied[i] == 2 && occupied[i+3] == 2 && occupied[i+6] == 2){
            if(mode.checked){ res.textContent = 'Você perdeu!';
            } else { res.textContent = 'Jogador 2 ganhou!' }
            res.style.color = 'red';
            pos[i].style.color = 'red';
            pos[i+3].style.color = 'red';
            pos[i+6].style.color = 'red';
            endsGame();
        }
    }
    for(i=2; i <= 4; i += 2){ //cross
        if(occupied[4-i] == 1 && occupied[4] == 1 && occupied[4+i] == 1){
            if(mode.checked){ res.textContent = 'Você ganhou!';
            } else { res.textContent = 'Jogador 1 ganhou!' }
            res.style.color = 'green';
            pos[4-i].style.color = 'green';
            pos[4].style.color = 'green';
            pos[4+i].style.color = 'green';
            endsGame();
        }
        if(occupied[4-i] == 2 && occupied[4] == 2 && occupied[4+i] == 2){
            if(mode.checked){ res.textContent = 'Você perdeu!';
            } else { res.textContent = 'Jogador 2 ganhou!' }
            res.style.color = 'red';
            pos[4-i].style.color = 'red';
            pos[4].style.color = 'red';
            pos[4+i].style.color = 'red';
            endsGame();
        }
    }
    if(mode.checked){
        if(round == 5 && res.style.visibility == "hidden"){
            res.textContent = 'Empate!';
            endsGame();
        }
    } else {
        if (round == 9 && res.style.visibility == "hidden"){
            res.textContent = 'Empate!';
            endsGame();
        }
    }    
}

function endsGame(){
    for(var i = 0; i < 9; i++){
        occupied[i] = 3;
    }
    btnReset.style.visibility = "visible";
    res.style.visibility = "visible";
    mode.removeAttribute("disabled", "");
    modepvp.removeAttribute("disabled", "");
}

let btnReset = window.document.querySelector('.reset');

btnReset.addEventListener('click', function(){
    for(var i = 0; i < 9; i++){
        pos[i].textContent = "";
        pos[i].style.color = '#000';
        occupied[i] = 0;
    }
    round = 0;
    btnReset.style.visibility = "hidden";
    res.style.visibility = "hidden";
    res.style.color = "#000";
})
