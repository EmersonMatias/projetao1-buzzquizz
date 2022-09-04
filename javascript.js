
/* JAVASCRIPT MANUELA*/
let apiQuizzes = [];
let userQuizzes = [];
let id;

function createQuizz(){
    const openWindow = document.querySelector('.open-window');
    const createWindow = document.querySelector('.screen-basic-informations');

    openWindow.classList.add('hidden');
    createWindow.classList.remove('hidden');
}

function openQuizz(element){
    const openWindow = document.querySelector('.open-window');
    const quizzWindow = document.querySelector('.quizz-showpage');

    openWindow.classList.add('hidden');
    quizzWindow.classList.remove('hidden');
    getChosenQuizz(element);
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
        let quizz = `<div class="quizz" data-identifier="quizz-card" onclick="openQuizz(${apiQuizzes[i].id})">
        <img src=${apiQuizzes[i].image}>
        <figcaption>
          ${apiQuizzes[i].title}
        </figcaption>               
      </div>`;

      divApiQuizzes.innerHTML += quizz;
      }
}

function userQuizz () {
  if (userQuizzes.length !==0){
    const noUserQuizz = document.querySelector('.create-quizz');
    const userQuizz = document.querySelector('.created-quizz');

    noUserQuizz.classList.add('hidden');
    userQuizz.classList.remove('hidden');
    const divUserQuizzes = document.querySelector('.container-user-quizz .quizzes');
    divUserQuizzes.innerHTML = '';

      for(let i = 0; i < userQuizzes.length; i++){
        let quizz = `<div class="quizz" data-identifier="quizz-card" onclick="openQuizz(this)">
        <img src="https://http.cat/411.jpg">
        <figcaption>
          Acerte os personagens corretos dos Simpsons e prove seu amor!
        </figcaption>               
      </div>`

      divUserQuizzes.innerHTML += quizz;
       }
  }
}



//** JAVASCRIPT EMERSON**//

const button_1 = document.querySelector('.screen-basic-informations button');
const button_create_levels = document.querySelector('.screen-create-questions .button-next-levels')
const button_finish_quizz = document.querySelector('.screen-create-levels .finish-quizz')
let input1 = document.querySelector('.screen-basic-informations .input1');
let input2 = document.querySelector('.screen-basic-informations .input2');
let input3 = document.querySelector('.screen-basic-informations .input3');
let input4 = document.querySelector('.screen-basic-informations .input4');
let number_questions;
let number_levels;
const next_screen_2 = document.querySelector('.screen-create-questions')
let cont3;
let quizz_object;
let waiting_answer;
let created_quizz;



let check;



button_1.addEventListener('click', () => 
    {
      console.log('clicou')
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
            number_levels = Number(input4.value);
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


button_create_levels.addEventListener('click', () => {
    let cont2 = 0;
    let verificador =0;
    
    while(cont2 < number_questions){
        let txtquestion = document.querySelector(`.screen-create-questions .question_${(cont2+1).toString()} .input_txtquestion`)
        let bgtxtquestion = document.querySelector(`.screen-create-questions .question_${(cont2+1).toString()} .input_bgtxtquestion`)
        let corret_anwers = document.querySelector(`.screen-create-questions .question_${(cont2+1).toString()} .answer`)
        let corret_anwers_url = document.querySelector(`.screen-create-questions .question_${(cont2+1).toString()} .url-corret-anwer`)
        let incorret1 = document.querySelector(`.screen-create-questions .question_${(cont2+1).toString()} .incorret-1`)
        let incorret1_url = document.querySelector(`.screen-create-questions .question_${(cont2+1).toString()} .url-incorret-1`)
        let incorret2 = document.querySelector(`.screen-create-questions .question_${(cont2+1).toString()} .incorret-2`)
        let incorret2_url = document.querySelector(`.screen-create-questions .question_${(cont2+1).toString()} .url-incorret-2`)
        let incorret3 = document.querySelector(`.screen-create-questions .question_${(cont2+1).toString()} .incorret-3`)
        let incorret3_url = document.querySelector(`.screen-create-questions .question_${(cont2+1).toString()} .url-incorret-3`)

        let check2;

        try {
            let check_url4 = incorret2_url.value;
            let check_url5 = incorret3_url.value;

            if (check_url4 === "" && check_url5 === ""){
                let check_url2 = new URL(`${corret_anwers_url.value}`)
                let check_url3 = new URL(`${incorret1_url.value}`)
            }else if(check_url5 === ""){
                let check_url2 = new URL(`${corret_anwers_url.value}`)
                let check_url3 = new URL(`${incorret1_url.value}`)
                check_url4 = new URL(`${incorret2_url.value}`)
            } 
            else if(check_url4 === ""){
              let check_url2 = new URL(`${corret_anwers_url.value}`)
              let check_url3 = new URL(`${incorret1_url.value}`)
              check_url5 = new URL(`${incorret3_url.value}`)
            } 
            else{
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
        }else if (txtquestion.value.length >= 20 && corret_anwers.value !== "" && check2 === true && incorret1.value !== "" && bgtxtquestion.value[0] === "#" && bgtxtquestion.value.length === 7 &&
        incorret2.value !== ""
        ){
            verificador++
        } else if (txtquestion.value.length >= 20 && corret_anwers.value !== "" && check2 === true && incorret1.value !== "" && bgtxtquestion.value[0] === "#" && bgtxtquestion.value.length === 7 &&
        incorret2.value !== "" && incorret3.value !== ""){
            verificador++
        }
        else {
            alert(`Há algo de errado na sua Pergunta ${cont2+1}. Por favor, verifique as informações digitadas`);
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

    if (verificador === number_questions){
      const create_levels = () => {
        alert("PRÓXIMA PÁGINA");
        next_screen_2.classList.add('hidden');
        const screen_create_levels = document.querySelector('.screen-create-levels');
        const put_levels = document.querySelector('.screen-create-levels .create-levels');
        screen_create_levels.classList.remove('hidden');
        cont3 = 0;

        while(cont3 < number_levels){
          put_levels.innerHTML = put_levels.innerHTML + `
            <div class="levels1 level${(cont3+1).toString()}">
              <div class="header-levels">
                <h3>Nível ${cont3+1}</h3>
                <button onclick="alternate_level(this)"> <ion-icon name="create-outline"></ion-icon> </button>
              </div>
            
              <div class="hide-level">
                <input class="title_level" type="text" placeholder="Título do nível">
                <input class="pcrtmin" type="text" placeholder="% de acerto mínima">
                <input class="url_img_level" type="text" placeholder="URL da imagem do nível">
                <input class="dcpn_level" type="text" placeholder="Descrição do Nível">
              </div>
          
            </div>
          `
          cont3++;
        }
        

      }  
      
      create_levels();

    } else{
        console.log('não verificado')
    }
   

})

button_finish_quizz.addEventListener('click', () => {
  let cont4 = 0;
  let verifica_zero;
  let verificador2 = 0;
  while(cont4 < number_levels){
    const input_level_title = document.querySelector(`.screen-create-levels .level${(cont4+1).toString()} .title_level`)
    const input_pcrtmin = document.querySelector(`.screen-create-levels .level${(cont4+1).toString()} .pcrtmin`)
    const input_url_img_level = document.querySelector(`.screen-create-levels .level${(cont4+1).toString()} .url_img_level`)
    const input_dcpn_level = document.querySelector(`.screen-create-levels .level${(cont4+1).toString()} .dcpn_level`)
    console.log(input_level_title.value)
    console.log(input_pcrtmin.value)
    console.log(input_url_img_level.value)
    console.log(input_dcpn_level.value)

    if (Number(input_pcrtmin.value) === 0 && verifica_zero === undefined ){
        verifica_zero = true;
    } 

    let check3;

    try {
      let check_url_level = new URL(`${input_url_img_level.value}`)
      check3 = true;
    } catch {
      check3 = false;
    }


    if(input_level_title.value.length >= 10 && verifica_zero === true && Number(input_pcrtmin.value) >= 0 && Number(input_pcrtmin.value) <= 100 && input_pcrtmin.value !== "" &&
    input_dcpn_level.value.length >= 30 && check3 == true)
    {
      alert('PASSOU +1')
      verificador2++
    } else {
      alert(`Existe algum erro no Nível ${cont4+1}`)
    }

    console.log(verificador2);
    cont4++
  }


  //OBJETO QUIZZ QUE SERÁ ENVIADO
  let cont5 =0;

  quizz_object = {
    title: input1.value,
    image: input2.value,
    questions: [],
    levels: []
  }

  while(cont5 < number_questions){
    let txtquestion = document.querySelector(`.screen-create-questions .question_${(cont5+1).toString()} .input_txtquestion`)
    let bgtxtquestion = document.querySelector(`.screen-create-questions .question_${(cont5+1).toString()} .input_bgtxtquestion`)
    let corret_anwers = document.querySelector(`.screen-create-questions .question_${(cont5+1).toString()} .answer`)
    let corret_anwers_url = document.querySelector(`.screen-create-questions .question_${(cont5+1).toString()} .url-corret-anwer`)
    let incorret1 = document.querySelector(`.screen-create-questions .question_${(cont5+1).toString()} .incorret-1`)
    let incorret1_url = document.querySelector(`.screen-create-questions .question_${(cont5+1).toString()} .url-incorret-1`)
    let incorret2 = document.querySelector(`.screen-create-questions .question_${(cont5+1).toString()} .incorret-2`)
    let incorret2_url = document.querySelector(`.screen-create-questions .question_${(cont5+1).toString()} .url-incorret-2`)
    let incorret3 = document.querySelector(`.screen-create-questions .question_${(cont5+1).toString()} .incorret-3`)
    let incorret3_url = document.querySelector(`.screen-create-questions .question_${(cont5+1).toString()} .url-incorret-3`)

    if (corret_anwers.value !== "" && corret_anwers_url.value !== "" && incorret1.value !== "" && incorret1_url.value !== ""  ) {
      quizz_object.questions.push({
        title: txtquestion.value,
        color: bgtxtquestion.value,
        answers: [
          {
            text: corret_anwers.value,
            image: corret_anwers_url.value,
            isCorrectAnswer: true
          },
          {
            text: incorret1.value,
            image: incorret1_url.value,
            isCorrectAnswer: false
          }
        ]
      })
    } else if (corret_anwers.value !== "" && corret_anwers_url.value !== "" && incorret1.value !== "" && incorret1_url.value !== "" && incorret2.value !== "" && incorret2_url.value) {
      quizz_object.questions.push({
        title: txtquestion.value,
        color: bgtxtquestion.value,
        answers: [
          {
            text: corret_anwers.value,
            image: corret_anwers_url.value,
            isCorrectAnswer: true
          },
          {
            text: incorret1.value,
            image: incorret1_url.value,
            isCorrectAnswer: false
          },
          {
            text: incorret2.value,
            image: incorret2_url.value,
            isCorrectAnswer: false
          }]
        })
    } else if (corret_anwers.value !== "" && corret_anwers_url.value !== "" && incorret1.value !== "" && incorret1_url.value !== "" && incorret2.value !== "" && incorret2_url.value
    && incorret3.value !== "" && incorret3_url.value !== ""){
      quizz_object.questions.push({
        title: txtquestion.value,
        color: bgtxtquestion.value,
        answers: [
          {
            text: corret_anwers.value,
            image: corret_anwers_url.value,
            isCorrectAnswer: true
          },
          {
            text: incorret1.value,
            image: incorret1_url.value,
            isCorrectAnswer: false
          },
          {
            text: incorret2.value,
            image: incorret2_url.value,
            isCorrectAnswer: false
          },
          {
            text: incorret3.value,
            image: incorret3_url.value,
            isCorrectAnswer: false
          }
        ]
      })
    }

    cont5++;
  }

  let cont6 = 0;

  while(cont6 < number_levels) {
    let inpit_title_level = document.querySelector(`.screen-create-levels .create-levels .level${cont6+1} .title_level`)
    let inpit_pcrtmin= document.querySelector(`.screen-create-levels .create-levels .level${cont6+1} .pcrtmin`)
    let inpit_url_img_level= document.querySelector(`.screen-create-levels .create-levels .level${cont6+1} .url_img_level`)
    let inpit_dcpn_level= document.querySelector(`.screen-create-levels .create-levels .level${cont6+1} .dcpn_level`)

      
    quizz_object.levels.push({
        title: inpit_title_level.value,
        image: inpit_url_img_level.value,
        text: inpit_dcpn_level.value,
        minValue: Number(inpit_pcrtmin.value)
    })

    cont6++;

  }

  console.log(quizz_object)


  if (verificador2 === number_levels){
    const hidden_levels = document.querySelector('.screen-create-levels')
    hidden_levels.classList.add('hidden')

    const send_quizz = () => {
      axios.post('https://mock-api.driven.com.br/api/v4/buzzquizz/quizzes', quizz_object)
        .then((response) => {
          console.log('Enviou')
          console.log(response.data.image)
          console.log(response.data.title)
          console.log(response.data.id)
          idcreated_quizz = response.data.id
          let screen_sucess_create = document.querySelector('.screen-success-create')
          screen_sucess_create.classList.remove('hidden')
          let screen_sucess_img =  document.querySelector('.screen-success-create .imgquizz')
          screen_sucess_img.innerHTML = `
          <img src="${response.data.image}">
          <figcaption>${response.data.title}</figcaption>
          `
        })
        .catch (() =>{
          console.log('algo deu errado')
        })  
    }

    send_quizz();

  }

  


})


let alternate_question = (button_2) => {
    const button_alternate = button_2.parentNode.parentNode.parentNode;
    const hide_corret_answer = button_alternate.querySelector('.corret-answer').classList.toggle('hidden')
    const hide_incorret_answer = button_alternate.querySelector('.incorret-answer').classList.toggle('hidden')
    const input_hide = button_alternate.querySelector('.first-question-box').classList.toggle('hidden')

    console.log(button_alternate)

    
}

let alternate_level = (button_3) => {
  const button_alternate2 = button_3.parentNode.parentNode;
  const hide_level = button_alternate2.querySelector('.hide-level');
  hide_level.classList.toggle('hidden')

  console.log(button_alternate2)

  
}


// JAVASCRIPT VICTOR LEONE DE OLIVEIRA
let chosenQuizz;
let quizzHeader = document.querySelector(".showpage-second-header")
let questionBox = document.querySelector(".question-container-outline")
let rightAnswers=0
let allQuestions;
let contador=0;
let clickCounts=0;

//Função auxiliar ;
function comparador() { 
	return Math.random() - 0.5; 
}

function renderChosenQuizz(object) {

  let arrayOfQuestions = object.questions;
  quizzHeader.innerHTML = 
  `<img src="${object.image}">
  <h3>${object.title}</h3>`

  for (let index = 0; index < arrayOfQuestions.length; index++) {
    let questionItem= arrayOfQuestions[index]
    
    questionBox.innerHTML +=
    `<div class="question-container">
      <div class="question ${index}" data-identifier="question" style="background-Color:${questionItem.color};">${questionItem.title}</div>
       <div class="answer-container ${index}"></div>
    </div>`
  }

  let answerContainer = document.querySelectorAll(".answer-container");
  
    for (let index = 0; index < arrayOfQuestions.length; index++) {
      let arrayOfAnswers= arrayOfQuestions[index].answers;
      arrayOfAnswers.sort(comparador);
      for (let jdex = 0; jdex < arrayOfAnswers.length; jdex++) {
        let answerItem = arrayOfAnswers[jdex];
        answerContainer[index].innerHTML += 
        `<figure class="quizz-answer ${jdex} ${answerItem.isCorrectAnswer}" data-identifier="answer" onclick ="rightOrWrong(this)">
     
        <div class="image">
          <img src="${answerItem.image}">
        </div>
  
        <figcaption><p>${answerItem.text}</p></figcaption>
  
      </figure>`
  
      }
    

    }
  allQuestions = document.querySelectorAll(".question-container")
}

function chosenQuizzArrived(quizz) {
  chosenQuizz =quizz.data;
  renderChosenQuizz(chosenQuizz)
}

function failToLoadQuizz(quizz) {
  console.log (quizz)
}

function getChosenQuizz (id){
  //Utilizando quizz modelo para trabalhar
  const promessa = axios.get(`https://mock-api.driven.com.br/api/v4/buzzquizz/quizzes/${id}`);
  promessa.then(chosenQuizzArrived);
  promessa.catch(failToLoadQuizz)
}




// Funções com lógica do jogo após clique na resposta

function rightOrWrong(element) {
 
  container = element.parentElement.children;

  if(element.classList.contains("true")) {
    rightAnswers++
  }

  for (let index = 0; index < container.length; index++) {
    container[index].setAttribute("onclick","")
    container[index].classList.add("clicked")
    
    if (container[index].classList !== element.classList) {
      container[index].classList.add("afterClickingStyle")}
       
    if(container[index].classList.contains("true")) {
      container[index].classList.add("trueAnswer")
    } else {container[index].classList.add("falseAnswer")}  
  
  }
  console.log("antes do if")
  if(contador<allQuestions.length-1) {
    contador++;
    console.log("é "+ contador)
    setTimeout(() => {
      let questions = document.querySelectorAll(".question")
      questions[contador].scrollIntoView(true);
    },2000)
  }

 checkNumberToFinish()
}

function checkNumberToFinish() {
  clickCounts++
  let questions = document.querySelectorAll(".question")
  if (clickCounts===questions.length) {
    let levelResult = Math.round(((rightAnswers/questions.length)*100).toFixed(0));
    displayResult(levelResult);
  }
}

function displayResult(level) {
  let finalLevel =0;
  for (let index = chosenQuizz.levels.length-1 ; index >=0; index--) {
    if (level>=chosenQuizz.levels[index].minValue) {
      return renderFinalBox(index, level);
    };
  }
}

function renderFinalBox(index, level) {
  let correctLevel = chosenQuizz.levels[index];
  questionBox.innerHTML += 
  
  `<div class="final-container" >
    <div class="question result">
    <p>${level}% de acerto: ${correctLevel.title} </p>
    </div>
    <div class="result-container">

      <figure class="quizz-result">
     
        <div class="image">
          <img src="${correctLevel.image}">
        </div>
  
      <figcaption class ="result-text"><p>${correctLevel.text}</p></figcaption>
  
      </figure>
   
    </div>
  </div>
  
  <button class="Reiniciar-Button" onclick ="reinitiateGame()">Reiniciar Quizz</button>
    <p class = "home-link" onclick = "returnHome()">Voltar para home</p>
  `
  let homeLink = document.querySelector(".home-link")
  setTimeout(() => {
    homeLink.scrollIntoView(false);
  }, 2000);

}

function reinitiateGame() {
  let clickedContainer = document.querySelectorAll(".clicked");
  let allAnswers = document.querySelectorAll(".quizz-answer")

  for (let index = 0; index < clickedContainer.length; index++) {
    clickedContainer[index].setAttribute("onclick","rightOrWrong(this)")  
    clickedContainer[index].classList.remove("afterClickingStyle")  
    if(clickedContainer[index].classList.contains("true")) {
      clickedContainer[index].classList.remove("trueAnswer")
    } else {clickedContainer[index].classList.remove("falseAnswer")}  
  }
  
  rightAnswers=0
  contador=0;
  clickCounts=0;

  let resultCOntainerTobeErased = document.querySelector(".final-container")
  let button = document.querySelector(".Reiniciar-Button");
  let homeLink = document.querySelector(".home-link")
  
  resultCOntainerTobeErased.parentNode.removeChild(resultCOntainerTobeErased);
  button.parentNode.removeChild(button);
  homeLink.parentNode.removeChild(homeLink);

  let header =document.querySelector(".showpage-second-header")
  
  header.scrollIntoView(true);

}

function returnHome () {
  const openWindow = document.querySelector('.open-window');
  const quizzWindow = document.querySelector('.quizz-showpage');
  quizzHeader.innerHTML =""
  questionBox.innerHTML=""
  rightAnswers=0
  allQuestions;
  contador=0;
  clickCounts=0;
    openWindow.classList.remove('hidden');
    quizzWindow.classList.add('hidden');
}
