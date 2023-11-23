let winner = null;
let round = 0;

function play(event) {
    if(winner) return;
    const $origin = event.target;
    if($modebot.checked){
        $modepvp.setAttribute("disabled", "");
        if($origin.innerText == ""){
            $origin.insertAdjacentText('beforeend', 'X');
            round++; 
            winner = checkWinner();
            setTimeout(bot, 100);     
        }
    } else {
        $modebot.setAttribute("disabled", "");
        if($origin.innerText == ""){
            if(round % 2 == 0){
                $origin.insertAdjacentText('beforeend', 'X');
            } else {
                $origin.insertAdjacentText('beforeend', 'O');
            }
            round++;
            winner = checkWinner();       
        }
    }           
};

function bot() {
    if(winner) return;
    var rand = parseInt(Math.random() * 9);
    if($pos[rand].innerText == ""){            
        $pos[rand].insertAdjacentText('beforeend', 'O');
        round++;
        winner = checkWinner();          
    } else {
        bot();
    }
}

// function checkWinner() {
//     if(round < 5) return;

//     const lines = [
//         [0, 1, 2, 'r'],
//         [3, 4, 5, 'r'],
//         [6, 7, 8, 'r'],
//         [0, 3, 6, 'c'],
//         [1, 4, 7, 'c'],
//         [2, 5, 8, 'c'],
//         [0, 4, 8, 'xN'],
//         [2, 4, 6, 'xP'],
//     ];

//     for(i = 0; i < lines.length; i++) {
//         const [a, b, c, d] = lines[i];
//         let $color = '';
//         if ($pos[a].innerText && $pos[a].innerText === $pos[b].innerText && $pos[a].innerText === $pos[c].innerText) {
//             if ($pos[a].innerText === 'X') {
//                 $color = 'green';
//                 $result.textContent = $modebot.checked ? 'Você ganhou!' : 'Jogador 1 ganhou!';
//             } else {
//                 $color = 'red';
//                 $result.textContent = $modebot.checked ? 'Você perdeu!' : 'Jogador 2 ganhou!';
//             }
//             switch (d) {
//                 case 'r':
//                     $pos[b].setAttribute("id",`bar-row_${$color}`);
//                     break;
//                 case 'c':
//                     $pos[b].setAttribute("id", `bar-col_${$color}`);
//                     break;
//                 case 'xN':
//                     $pos[b].setAttribute("id",`bar-cross_${$color}N`);
//                     break;
//                 case 'xP':
//                     $pos[b].setAttribute("id", `bar-cross_${$color}P`);
//                     break;
//             }
//             $pos[a].style.color = $pos[b].style.color = $pos[c].style.color = $result.style.color =  $color;
//             endsGame();
//             return $pos[a].innerText;
//         }
//     }

//     if (round == 9 && !winner) {
//         $result.textContent = 'Empate!';
//         endsGame();
//         return 'Empate';
//     }

//     return null;
// }

// function endsGame(){
//     $btnReset.style.visibility = "visible";
//     $result.style.visibility = "visible";
//     $modebot.removeAttribute("disabled", "");
//     $modepvp.removeAttribute("disabled", "");
// }

// $btnReset.addEventListener('click', function(){
//     for(var i = 0; i < 9; i++){
//         $pos[i].textContent = "";
//         $pos[i].style.color = '#000';
//         $pos[i].removeAttribute("id");
//     }
//     winner = null;
//     round = 0;
//     $btnReset.style.visibility = "hidden";
//     $result.style.visibility = "hidden";
//     $result.style.color = "#000";
// })

// $gamemodes[0].addEventListener('click', function(){
//     if(!($modebot.hasAttribute('disabled'))){
//         $gamemodes[0].className = 'gamemode -checked'
//         $gamemodes[1].className = 'gamemode'
//     }
// })

// $gamemodes[1].addEventListener('click', function(){
//     if(!($modepvp.hasAttribute('disabled'))){
//         $gamemodes[1].className = 'gamemode -checked'
//         $gamemodes[0].className = 'gamemode'
//     }    
// })