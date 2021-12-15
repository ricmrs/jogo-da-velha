const $pos = window.document.querySelectorAll('.pos');
const $mode = window.document.querySelector('#bot');
const $modepvp = window.document.querySelector('#pvp');
const $label = window.document.querySelectorAll('.gamemode');
const $result = window.document.querySelector('.result');
const $btnReset = window.document.querySelector('.reset');
let winner = null
let round = 0;

function play(event) {
    if(winner){
        return
    }
    const $origin = event.target
    if($mode.checked){
        $modepvp.setAttribute("disabled", "");
        if($origin.innerText == ""){
            $origin.insertAdjacentText('beforeend', 'X');
            round++; 
            winner = checkEnd();
            setTimeout(bot, 100);     
        }
    } else {
        $mode.setAttribute("disabled", "");
        if($origin.innerText == ""){
            if(round % 2 == 0){
                $origin.insertAdjacentText('beforeend', 'X');
            } else {
                $origin.insertAdjacentText('beforeend', 'O');
            }
            round++;
            winner = checkEnd();       
        }
    }           
};

function bot() {
    if(winner){
        return
    }
    var rand = parseInt(Math.random() * 9);
    if($pos[rand].innerText == ""){            
        $pos[rand].insertAdjacentText('beforeend', 'O');
        round++;
        winner = checkEnd();          
    } else {
        bot();
    }
}

function checkEnd() {
    const line = [
        [0, 1, 2, 'r'],
        [3, 4, 5, 'r'],
        [6, 7, 8, 'r'],
        [0, 3, 6, 'c'],
        [1, 4, 7, 'c'],
        [2, 5, 8, 'c'],
        [0, 4, 8, 'xN'],
        [2, 4, 6, 'xP'],
    ];
    for(i = 0; i < line.length; i++){
        const [a, b, c, d] = line[i];
        let $color;
        if ($pos[a].innerText && $pos[a].innerText === $pos[b].innerText && $pos[a].innerText === $pos[c].innerText) {
            if ($pos[a].innerText === 'X') {
                $color = 'green';
                if($mode.checked){
                    $result.textContent = 'Você ganhou!';
                } else {
                    $result.textContent = 'Jogador 1 ganhou!';
                }
            } else {
                $color = 'red';
                if($mode.checked){
                    $result.textContent = 'Você perdeu!';
                } else {
                    $result.textContent = 'Jogador 2 ganhou!';
                }
            }
            switch (d) {
                case 'r':
                    $pos[b].setAttribute("id",`bar-row_${$color}`);
                    break;
                case 'c':
                    $pos[b].setAttribute("id", `bar-col_${$color}`);
                    break;
                case 'xN':
                    $pos[b].setAttribute("id",`bar-cross_${$color}N`);
                    break;
                case 'xP':
                    $pos[b].setAttribute("id", `bar-cross_${$color}P`);
                    break;
            }
            $pos[a].style.color = $pos[b].style.color = $pos[c].style.color = $result.style.color =  $color;
            endsGame();
            return $pos[a].innerText;
        }
    }
    if (round == 9 && !winner) {
        $result.textContent = 'Empate!';
        endsGame();
        return 'Empate';
    }
    return null;
}

function endsGame(){
    $btnReset.style.visibility = "visible";
    $result.style.visibility = "visible";
    $mode.removeAttribute("disabled", "");
    $modepvp.removeAttribute("disabled", "");
}

$btnReset.addEventListener('click', function(){
    for(var i = 0; i < 9; i++){
        $pos[i].textContent = "";
        $pos[i].style.color = '#000';
        $pos[i].removeAttribute("id");
    }
    winner = null;
    round = 0;
    $btnReset.style.visibility = "hidden";
    $result.style.visibility = "hidden";
    $result.style.color = "#000";
})

$label[0].addEventListener('click', function(){
    if(!($mode.hasAttribute('disabled'))){
        $label[0].className = 'gamemode -checked'
        $label[1].className = 'gamemode'
    }
})

$label[1].addEventListener('click', function(){
    if(!($modepvp.hasAttribute('disabled'))){
        $label[1].className = 'gamemode -checked'
        $label[0].className = 'gamemode'
    }    
})