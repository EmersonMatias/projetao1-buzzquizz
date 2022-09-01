//** JAVASCRIPT MANUELA**//
function createQuizz(){
    const openWindow = document.querySelector('.open-window');
    const createWindow = document.querySelector('.screen-basic-informations');

    openWindow.classList.add('hidden');
    createWindow.classList.remove('hidden');
}

function openQuizz(){
    const openWindow = document.querySelector('.open-window');
    const quizzWindow = document.querySelector('.quizz-showpage');

    openWindow.classList.add('hidden');
    quizzWindow.classList.remove('hidden');
}




//** JAVASCRIPT EMERSON**//
const button_1 = document.querySelector('.screen-basic-informations button');
const button_create_questions = document.querySelector('.screen-create-questions .button-next-levels')
let input1 = document.querySelector('.screen-basic-informations .input1');
let input2 = document.querySelector('.screen-basic-informations .input2');
let input3 = document.querySelector('.screen-basic-informations .input3');
let input4 = document.querySelector('.screen-basic-informations .input4');
let number_questions;
const next_screen_2 = document.querySelector('.screen-create-questions')


let check;


button_1.addEventListener('click', () => 
    {
        try {
            let check_url = new URL(`${input2.value}`)
            check = true;
          } catch {
            check = false;
          }

        
          /*CONDIÇÃO PARA SEGUIR PARA A PRÓXIMA TELA*/ 
        if(input1.value.length >= 20 && input1.value.length <= 65 && check === true && Number(input3.value) >= 3 && Number(input4.value) >= 2 ){
            alert('PRÓXIMA TELA');
            const next_screen_1 = document.querySelector(".screen-basic-informations");
            next_screen_1.classList.add('hidden');
            next_screen_2.classList.remove('hidden');
            
            number_questions = Number(input3.value);
            let cont = 0;

            /*FUNÇÃO QUE COLOCA A QUANTIDADE DE PERGUNTAS QUE FOI SELECIONADA*/ 
            while(cont < number_questions){
                const put_questions = () => {
                    const questions_place = document.querySelector('.screen-create-questions .questions_place')
                    questions_place.innerHTML = questions_place.innerHTML + `
                    <div class="create-questions question_${(cont+1).toString()}">
                  
                    <div class="first-question">
                      <div class="alternate">
                        <h3>Pergunta ${cont+1}</h3> 
                        <button onclick="alternate_question(this)"> <ion-icon name="create-outline"></ion-icon> </button>
                      
                      </div>
                      <div class="first-question-box">
                        <input class="input_txtquestion" type="text" placeholder="Texto da pergunta">
                        <input class="input_bgtxtquestion" type="text" placeholder="Cor de fundo da pergunta">
                      </div>
                    </div>
      
                    <div class="corret-answer">
                      <h3>Resposta Correta</h3>
                      <input class="answer" type="text" placeholder="Resposta correta">
                      <input class="url-corret-anwer" type="text" placeholder="URL da imagem">
                    </div>
      
                    <div class="incorret-answer">
      
                      <h3>Respostas Incorretas</h3>
                      <input class="incorret-1" type="text" placeholder="Resposta incorreta 1">
                      <input class="url-incorret-1" type="text" placeholder="URL da imagem 1">
      
                      
                      <input class="incorret-2" type="text" placeholder="Resposta incorreta 2">
                      <input class="url-incorret-2" type="text" placeholder="URL da imagem 2">
      
                      
                      <input class="incorret-3" type="text" placeholder="Resposta incorreta 3">
                      <input class="url-incorret-3" type="text" placeholder="URL da imagem 3">
                    </div>
                    
                  </div>
                    `
                }
                put_questions();
                cont++
            }


        } else{
            alert('Alguma informação está errada, certifique-se que digitou tudo corretamente');
        }


        
       
    }
)


button_create_questions.addEventListener('click', () => {
    let cont2 = 0;
    let verificador =0;
    
    while(cont2 < number_questions){
        const txtquestion = document.querySelector(`.screen-create-questions .question_${(cont2+1).toString()} .input_txtquestion`)
        const bgtxtquestion = document.querySelector(`.screen-create-questions .question_${(cont2+1).toString()} .input_bgtxtquestion`)
        const corret_anwers = document.querySelector(`.screen-create-questions .question_${(cont2+1).toString()} .answer`)
        const corret_anwers_url = document.querySelector(`.screen-create-questions .question_${(cont2+1).toString()} .url-corret-anwer`)
        const incorret1 = document.querySelector(`.screen-create-questions .question_${(cont2+1).toString()} .incorret-1`)
        const incorret1_url = document.querySelector(`.screen-create-questions .question_${(cont2+1).toString()} .url-incorret-1`)
        const incorret2 = document.querySelector(`.screen-create-questions .question_${(cont2+1).toString()} .incorret-2`)
        const incorret2_url = document.querySelector(`.screen-create-questions .question_${(cont2+1).toString()} .url-incorret-2`)
        const incorret3 = document.querySelector(`.screen-create-questions .question_${(cont2+1).toString()} .incorret-3`)
        const incorret3_url = document.querySelector(`.screen-create-questions .question_${(cont2+1).toString()} .url-incorret-3`)

        let check2;

        try {
            let check_url4 = incorret2_url.value;
            let check_url5 = incorret3_url.value;

            if (check_url4 === "" && check_url5 === ""){
                let check_url2 = new URL(`${corret_anwers_url.value}`)
                let check_url3 = new URL(`${incorret1_url.value}`)
            } else{
                let check_url2 = new URL(`${corret_anwers_url.value}`)
                let check_url3 = new URL(`${incorret1_url.value}`)
                check_url4 = new URL(`${incorret2_url.value}`)
                check_url5 = new URL(`${incorret3_url.value}`)
            }
            check2 = true;
          } catch {
            check2 = false;
          }

        
        /*VERIFICA SE TODOS OS REQUISITOS SÃO SATISFEITOS NA HORA DA CRIAÇÃO DO QUIZZ*/
        if(txtquestion.value.length >= 20 && corret_anwers.value !== "" && check2 === true && incorret1.value !== "" && bgtxtquestion.value[0] === "#" && bgtxtquestion.value.length === 7 ){
            verificador++
        }else {
            alert(`Há algo de errado na sua Pergunta ${cont2+1}. Por favor, verifique as informações digitadas`);
        }
        
        if (verificador === 3){
            alert("PRÓXIMA PÁGINA");
            next_screen_2.classList.add('hidden');
        } else{
            console.log('não verificado')
        }
        console.log(txtquestion.value.length);
        console.log(bgtxtquestion.value.length);
        console.log(corret_anwers.value);
        console.log(corret_anwers_url.value);
        console.log(incorret1.value);
        console.log(incorret1_url.value);
        console.log(incorret2.value);
        console.log(incorret2_url.value);
        console.log(incorret3.value);
        console.log(incorret3_url.value);
        cont2++
    }

   

})


let alternate_question = (button_2) => {
    const button_alternate = button_2.parentNode.parentNode.parentNode;
    const hide_corret_answer = button_alternate.querySelector('.corret-answer').classList.toggle('hidden')
    const hide_incorret_answer = button_alternate.querySelector('.incorret-answer').classList.toggle('hidden')
    const input_hide = button_alternate.querySelector('.first-question-box').classList.toggle('hidden')

    console.log(button_alternate)

    
}

