$btnReset.addEventListener('click', function(){
  for(var i = 0; i < 9; i++){
      $pos[i].textContent = "";
      $pos[i].style.color = '#000';
      $pos[i].removeAttribute("id");
  }
  winner = null;
  round = 0;
  $resultWrapper.style.visibility = "hidden";
  $result.style.color = "#000";
})