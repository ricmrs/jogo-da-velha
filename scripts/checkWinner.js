function checkWinner() {
  if(round < 5) return;

  const lines = [
      [0, 1, 2, 'r'],
      [3, 4, 5, 'r'],
      [6, 7, 8, 'r'],
      [0, 3, 6, 'c'],
      [1, 4, 7, 'c'],
      [2, 5, 8, 'c'],
      [0, 4, 8, 'xN'],
      [2, 4, 6, 'xP'],
  ];

  for(i = 0; i < lines.length; i++) {
      const [a, b, c, d] = lines[i];
      let $color = '';
      if ($pos[a].innerText && $pos[a].innerText === $pos[b].innerText && $pos[a].innerText === $pos[c].innerText) {
          if ($pos[a].innerText === 'X') {
              $color = 'green';
              $result.textContent = $modebot.checked ? 'Você ganhou!' : 'Jogador 1 ganhou!';
          } else {
              $color = 'red';
              $result.textContent = $modebot.checked ? 'Você perdeu!' : 'Jogador 2 ganhou!';
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