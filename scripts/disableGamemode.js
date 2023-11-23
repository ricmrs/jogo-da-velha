$gamemodes[0].addEventListener('click', function(){
  if(!($modebot.hasAttribute('disabled'))){
      $gamemodes[0].className = 'gamemode -checked'
      $gamemodes[1].className = 'gamemode'
  }
})

$gamemodes[1].addEventListener('click', function(){
  if(!($modepvp.hasAttribute('disabled'))){
      $gamemodes[1].className = 'gamemode -checked'
      $gamemodes[0].className = 'gamemode'
  }    
})