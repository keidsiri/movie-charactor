// Business logic :
function movieCharactor(result) {
  if (result >= 4 && result < 6 ) {
    return "You're Woody";
  } else if (result >= 7 && result < 8) {
    return "You're Molly";
  } else if  (result >= 8 && result < 10) {
    return "You're Buzz lightyear";
  } else if (result >= 10) {
    return "You're Hamm";
  } else {
    return "Please fill out all the questions."
  }
}

function addResults(a,b,c,d) {
  return a + b + c + d;
}

// UI Logic:
$(document).ready(function() {
  $(".userInput").submit(function(event) {
    event.preventDefault();
    $(".result").show();
    const genderInp = parseInt($("#gender").val());
    const ageInp = parseInt($("#age").val());
    const typeMInp = parseInt($("#typeMovie").val());
    const colorInp = parseInt($("#color").val());
    const totalRes = addResults(genderInp, ageInp, typeMInp, colorInp);
    $(".result").text(movieCharactor(totalRes));

  });
});


// if 4 - 5: Woody 
// else if 6-7: Molly
// else if 8- 9: Buzz lightyear
// else if 10 - 12: Hamm
// else : "Please fill out all the questions"







/*
Characters: 
  Woody
    Men 1
    0-10  1
    Comedy 1 
    Green 1

  Molly
    Woman
    11-20
    Action
    Yellow

  T-Rex
    Non-binary
    21+
    Drama
    Orange

  



*/