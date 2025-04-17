const input = document.getElementById("inputText");
const buttons = document.querySelectorAll("button");

let expression = "";
buttons.forEach(button =>{
    button.addEventListener("click",()=>{
        const value = button.textContent;

        switch (value){
            case"AC":
            expression ="";
            input.value ="";
            break;

            case"DEL":
            expression = expression.slice(0, -1);
            input.value = expression;
            break;

            case"=":
            try{
            expression = eval(expression).toString();
            input.value =expression;
            }catch{
                input.value = "Error";
                expression = "";
            }
            break;
            
            default:
                expression += value;
                input.value = expression;     
            
            }
    });
});