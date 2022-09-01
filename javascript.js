//** JAVASCRIPT MANUELA**//

let apiQuizzes = [];

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

function getQuizzes (){
    const promessa = axios.get('https://mock-api.driven.com.br/api/v4/buzzquizz/quizzes');
    promessa.then(quizzesArrived);
}

getQuizzes();

function quizzesArrived(resposta) {
    console.log('Deu tudo certo');

    apiQuizzes = resposta.data;
    
    console.log(apiQuizzes);
    renderizarQuizzes();
}

function renderizarQuizzes(){
    const divApiQuizzes = document.querySelector('.api-quizzes .quizzes');
    divApiQuizzes.innerHTML = '';

    for(let i = 0; i < apiQuizzes.length; i++){
        let quizz = `<div class="quizz" onclick="openQuizz(this)">
        <img src=${apiQuizzes[i].image}>
        <figcaption>
          ${apiQuizzes[i].title}
        </figcaption>               
      </div>`;

      divApiQuizzes.innerHTML += quizz;
    }
}
renderizarQuizzes();


//** JAVASCRIPT EMERSON**//
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

let alternate_question = (button_2) => {
    const button_alternate = button_2.parentNode.parentNode.parentNode;
    const hide_corret_answer = button_alternate.querySelector('.corret-answer').classList.toggle('hidden')
    const hide_incorret_answer = button_alternate.querySelector('.incorret-answer').classList.toggle('hidden')
    const input_hide = button_alternate.querySelector('.first-question-box').classList.toggle('hidden')

    console.log(button_alternate)

    
}
