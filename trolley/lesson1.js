const bu_button = document.getElementsByClassName('bu')[0];
bu_button.addEventListener('click', function(){
    bu_button.innerHTML = `I've been clicked!`;
});

let button_clicked = 0;

const b3 = document.getElementsByClassName('bu')[1];
b3.addEventListener('click', function(){
    button_clicked += 1;
    b3.innerHTML = `I've been clicked ` + (button_clicked) +  ' times';
    if (button_clicked == 10){
        b3.style.backgroundColor = '#FF6500';
        //r1vaCase8623
        
        
    };

});

let button_state = false;
const bu1 = document.getElementsByClassName('bu1')[0];
bu1.addEventListener('click', function(){
    if (button_state == false){
        bu1.innerHTML = 'It is on';
        bu1.style.backgroundColor = 'yellow';
        button_state = true;
        console.log('stop')
    } else{
        bu1.innerHTML = 'It is off';
        bu1.style.backgroundColor = 'blue';
        button_state = false;
    }
});


const heading = document.getElementsByClassName('head')[0];
const p = document.getElementsByClassName('p_test')[0];
bu_button.addEventListener('click',function(){
    heading.innerText = 'Value has changed';
    p.innerText = 654+32;
});