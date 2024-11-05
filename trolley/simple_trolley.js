function updateCart(){

    let total_items = 0;

    const buttons = document.getElementsByTagName('button');
    const cart_text = document.getElementsByClassName('cart-info')[0];
    const cart_quantity = document.getElementsByClassName('item_amount')[0];

    //For loop that iterates all the 'button' tag in the html doc.
    for (let i = 0; i < buttons.length; i++){
        // Need to set the index value of buttons as 'i' and define what each button tag does
        buttons[i].addEventListener('click', function(){
            {  
                if (i == 0){
                    if (total_items == 0){
                        cart_text.textContent = 'There are no items';
                        cart_quantity.textContent = '0';
                    } else{
                        cart_text.textContent ='Current item amount -->';
                        cart_quantity.textContent = total_items; //backtick and ${variable} is the JS f-string 
                    };

                } else if (i == 1){
                    cart_text.textContent = 'Adding one item';
                    total_items ++;
                    cart_quantity.textContent = total_items;
                } else if(i == 2){
                    cart_text.textContent = 'Adding two items';
                    total_items += 2;
                    cart_quantity.textContent = total_items;
                } else if(i == 3){
                    cart_text.textContent = 'adding three items';
                    total_items +=3;
                    cart_quantity.textContent = total_items;

                } else{
                    cart_text.textContent = 'removing all items';
                    total_items -= total_items;
                    cart_quantity.textContent = total_items;
                }
            }       
        })
    }
};

updateCart()

console.log(5 == 5.00)
console.log(5 === 5.00)


