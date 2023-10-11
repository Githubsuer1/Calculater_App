// selecting all buttons using queryselectorall
const buttons = document.querySelectorAll('button');

// declaring an empty string.
let string = "";

// using buttons as array
Array.from(buttons).forEach(function(button){
    
    // adding eventListener on each button
    button.addEventListener('click',(e)=>{


        // wrapping all possible operations in try block
        try {
            // this will calculate when someone press equal button
            if(e.target.innerHTML == '='){
                string = eval(string);
                const inputText = document.querySelector('input');
                inputText.value = string;
            }

            // this will clear area when someone press AC
            else if(e.target.innerHTML == 'AC'){
                string = "";
                const inputText = document.querySelector('input');
                inputText.value = string;
            }

            // this will delete last digit one by one when someone press DEL
            else if(e.target.innerHTML == 'DEL'){
                string = string.slice(0,-1);
                const inputText = document.querySelector('input');
                inputText.value = string;
            }

            // // this will display content on every click 
            else{
                string += e.target.innerHTML;  
                const inputText = document.querySelector('input');
                inputText.value = string;
            }

            // catch block to handle the errors.
        } catch (error) {
            string = "Error!";
            const inputText = document.querySelector('input');
            inputText.value = string;
        }     

    })
})