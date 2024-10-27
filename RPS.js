// A random whole number between 1 and 10 (inclusive):

// let x = Math.floor((Math.random() * 10) + 1);
function rockPaperScissor(){

    const rps_list_cpu = [
        `\n\n\t  _______\n
        (____    '--- \n
       (_____)\n
       (_____)\n
        (____)\n
         (___)__.---`,

         `\n\n  \t\t_______\n
         ____(____     '---\n 
      (_______\n
   (_______\n
    (_______\n
     \t(____________.---`,

     `\n\n
             _______\n
    _______(____    '--- \n
  (___________\n
  (___________\n
      \t  (____)\n
       \t    (___)__.---\n
     `



    ]

    const rps_list_player = [
       `\n\n                _______\n
            ---'    ____)\n
                   (_____)\n
                   (_____)\n
                   (____)\n
            ---.__(___). `,
        
        `\n\n
          _______\n
    ---'       ____)____\n
                  ________)\n
                   _________)\n
                 ________)\n
    ---.__________)`,

        `\n\n
         _______\n
    ---'       ____)______\n
                   ________)\n
                ____________)\n
            (____)\n
    ---.__(___)`
    ]

    const game_button = document.getElementsByTagName('button');
    const player_box = document.getElementsByClassName('player')[0];
    const cpu_box = document.getElementsByClassName('CPU')[0];
    const text_info = document.getElementsByClassName('screen_bottom_text')[0];

    function playerOption(){
        let buttonPressed = new Promise((ifPlayerChosen) => { //(promise - resolve)
            for (let i = 0; i < game_button.length; i++){
                game_button[i].addEventListener('click', function playerC(){
                    let player_choice;
                    if (i === 0){
                        player_box.textContent = rps_list_player[0];
                        player_choice = 0;
                    } else if (i === 1){
                        player_box.textContent = rps_list_player[1];
                        player_choice = 1;
        
                    } else if (i === 2){
                        player_box.textContent = rps_list_player[2];
                        player_choice = 2;
                    }
        
                    text_info.textContent="Opponent is Thinking";
        
                    setTimeout(function(){
                        let dots = ""
                        let dot_count = 0;
        
                        let loop = setInterval(function(){
                                    dots += '.'; 
                                    text_info.textContent = 'Still thinking' + dots;
                                    dot_count ++;
        
                            if (dot_count ==3){
                                clearInterval(loop);
                            }
                            },400);
                    },1200);
                    ifPlayerChosen(player_choice); // 'return's player_choice promise
                    });
                }
        })

        return buttonPressed;
    }

    playerOption().then((player_choice) => {
        setTimeout(function(){
            let cpu_choice = Math.floor(Math.random() * 3)
            cpu_box.textContent = rps_list_cpu[cpu_choice];

            const rps_state = ['Rock', 'Paper', 'Scissors']

            text_info.textContent = `Opponent has chosen ${rps_state[cpu_choice]}!`;
            console.log(cpu_choice);
   
        setTimeout(function(){
            if( cpu_choice === player_choice){
                text_info.textContent = 'Tie!';
            }
            else if ((player_choice - cpu_choice + 3) % 3 === 1) {
                text_info.textContent = "Player wins!";
            } else {
                text_info.textContent =  "Computer wins!";
            }

        },2000)

        setTimeout(function(){
            text_info.textContent =  "Play Again?";
            player_box.textContent = '';
            cpu_box.textContent = '';
            for (let i = 0; i < game_button.length; i++){
                game_button[i].removeEventListener('click', rockPaperScissor); // when player clicks the button again, it clears the function's
                                                                            //old listeners
                rockPaperScissor(); //Reinitalise the game
            }
        },2900)

        }, 3000)
    })

}

rockPaperScissor()
