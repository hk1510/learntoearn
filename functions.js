window.onload = function(){
  document.querySelector('#mainButton').addEventListener('click', function(e) {
          e.preventDefault();
          document.querySelector('#secondbackground').scrollIntoView({ behavior: 'smooth' });
        });
}

function imghover() {
  document.getElementById('buttonImg').setAttribute('src', 'Images/arrowDown.png');
  console.log('hover');
}
function imgunhover() {
  document.getElementById('buttonImg').setAttribute('src', 'Images/arrowDownWhite.png');
  console.log('unhover');
}
