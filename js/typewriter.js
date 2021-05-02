// from CSS tricks: https://css-tricks.com/snippets/css/typewriter-effect/


document.addEventListener('DOMContentLoaded',function(event){
  // array with texts to type in typewriter
  
  var dataText = ["hello there, i'm julie!", "your typical cat lady", "crafting something new", "usually in the kitchen", "a serial show binger", "probably drinking coffee"];
  
  // type one text in the typwriter
  // keeps calling itself until the text is finished
  function typeWriter(text, i, fnCallback) {
    // check if text isn't finished yet
    if (i < (text.length)) {
      // add next character to h1
     document.querySelector("h1").innerHTML = text.substring(0, i+1) +'<span aria-hidden="true"></span>';

      // wait for a while and call this function again for next character
      setTimeout(function() {
        typeWriter(text, i + 1, fnCallback)
      }, 50);
    }
    // text finished, call callback if there is a callback function
    else if (typeof fnCallback == 'function') {
      // call callback after timeout
      setTimeout(fnCallback, 3000);
    }
  }
  // start a typewriter animation for a text in the dataText array
   function StartTextAnimation(i) {
     let length = dataText.length;
     if (typeof dataText[i] == 'undefined'){
        setTimeout(function() {
          StartTextAnimation(0);
        }, 20000);
      }
    // check if dataText[i] exists
    if (i < dataText[i].length) {
      // text exists! start typewriter animation
    typeWriter(dataText[i], 0, function(){
      // after callback (and whole text has been animated), start next text, then set counter back to 0 with %length
      StartTextAnimation((i + 1)%length);
    });
    }
  }

  // start the text animation
  StartTextAnimation(0);
});