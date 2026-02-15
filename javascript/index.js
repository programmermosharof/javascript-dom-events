//  option 2 click event handler
 function makeYellow (){
            document.body.style.backgroundColor = 'yellow'
        }

function makeGreen (){
    document.body.style.backgroundColor = 'green'
}

const makBlue = document.getElementById('btn-blue');
makBlue.onclick = function makBlue(){
    document.body.style.backgroundColor = 'blue';
}
// option 3 get onclick event handler
const btn = document.getElementById('color');
btn.onclick= btnMake;
function btnMake (){
    document.body.style.backgroundColor = '	#ff00ff';
}