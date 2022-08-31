const button_1 = document.querySelector('.screen-basic-informations button');
let input1 = document.querySelector('.screen-basic-informations .input1');
let input2 = document.querySelector('.screen-basic-informations .input2');
let input3 = document.querySelector('.screen-basic-informations .input3');
let input4 = document.querySelector('.screen-basic-informations .input4');

let check;


button_1.addEventListener('click', () => 
    {
        try {
            let check_url = new URL(`${input2.value}`)
            check = true;
          } catch {
            check = false;
          }

        

        if(input1.value.length >= 20 && input1.value.length <= 65 && check === true && Number(input3.value) >= 3 && Number(input4.value) >= 2 ){
            alert('PRÓXIMA TELA');
            let next_screen_1 = document.querySelector(".screen-basic-informations");
            next_screen_1.classList.add('hidden');

        } else{
            alert('Alguma informação está errada, certifique-se que digitou tudo corretamente');
        }

        
       
    }
)