

document.getElementById("firstName").onmouseenter = function() {mouseEnter()};
document.getElementById("firstName").onmouseleave = function() {mouseLeave()};

document.getElementById("title").onmouseenter = function() {mouseEnter()};
document.getElementById("title").onmouseleave = function() {mouseLeave()};

function mouseEnter() {
    document.getElementById("firstName").style.fontSize = "50px";
    document.getElementById("title").style.fontSize = "70px";
  }

  function mouseLeave() {
    document.getElementById("firstName").style.fontSize = "32px";
    document.getElementById("title").style.fontSize = "30px";
  }

  $.ajax('https://api.adviceslip.com/advice',
    {
       success: function (APIResponse) {
           random =JSON.parse(APIResponse);
            aj = document.getElementById('ajax')
           aj.innerHTML = random.slip.advice
       }
    })