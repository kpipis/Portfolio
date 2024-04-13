let darkModeSwitch = document.getElementById('darkModeToggle');
let switchValue = 0;

let changeMode = function() {
    switch (switchValue) {
        case 0:
            document.body.style.backgroundColor = 'black';
            document.body.style.color = 'white';
            document.getElementsByTagName('hr')[0].style.background = 'white';
            document.getElementsByTagName('hr')[1].style.background = 'white';
            document.getElementById('linkedin').style.color = 'lightblue';
            // document.body.style.transition = '5s';
            switchValue = 1;
            break;
        case 1: 
            document.body.style.backgroundColor = 'lightgrey';
            document.body.style.color = 'black';
            document.getElementsByTagName('hr')[0].style.background = 'black';
            document.getElementsByTagName('hr')[1].style.background = 'black';
            document.getElementById('linkedin').style.color = 'blue';
            // document.body.style.transition = '.4s';
            switchValue = 0;
            break;
    }
    // console.log(switchValue);
 } 


darkModeSwitch.addEventListener('mousedown', changeMode);