let computerMove = '';


function randomOpinion(){
    const opinie = ["Giga koks", "Najlepszy z najelpszych", "Jan Kowalski to mój idol", "To profesjonalista z pasją",
     "Jest inteligentny i kreatywny", "Zawsze można na niego liczyć", "Bardzo miły", 
     'Bardzo przyjazny', 'Jest zawsze uśmiechnięty', 'Jest wzorem do naśladowania',
      'Totalny kocur','Chciałbym być kieyś taki jak on', 'Marze o tym, żeby kiedyś wycisnąć tyle co on na rozgrzewkę'];

const random = Math.floor(Math.random() * opinie.length);
console.log(random, opinie[random]);
const opinie1 = opinie

const random1 = Math.floor(Math.random() * opinie1.length);
const opinie2 = opinie

const random2 = Math.floor(Math.random() * opinie2.length);
const opinie3 = opinie

const random3 = Math.floor(Math.random() * opinie3.length);
const opinie4 = opinie

const random4 = Math.floor(Math.random() * opinie4.length);

const wpisanaCyfra = document.querySelector('.search-bar').value;
  if (wpisanaCyfra === '1'){{document.querySelector('.p1').innerHTML = opinie[random]}
}else if (wpisanaCyfra === '2'){{document.querySelector('.p1').innerHTML = opinie[random], document.querySelector('.p2').innerHTML = opinie1[random1]}

}else if (wpisanaCyfra === '3'){{document.querySelector('.p1').innerHTML = opinie[random], document.querySelector('.p2').innerHTML = opinie1[random1],
document.querySelector('.p3').innerHTML = opinie2[random2]}


}else if (wpisanaCyfra === '4'){{document.querySelector('.p1').innerHTML = opinie[random], document.querySelector('.p2').innerHTML = opinie1[random1],
document.querySelector('.p3').innerHTML = opinie2[random2], document.querySelector('.p4').innerHTML = opinie3[random3]}}

else if (wpisanaCyfra === '5'){{document.querySelector('.p1').innerHTML = opinie[random], document.querySelector('.p2').innerHTML = opinie1[random1],
document.querySelector('.p3').innerHTML = opinie2[random2], document.querySelector('.p4').innerHTML = opinie3[random3], 
document.querySelector('.p5').innerHTML = opinie4[random4]}}
else {document.querySelector('.p').innerHTML = 'Wybierz liczbę od 1 do 5'}

}
  

        
function zoomin(){
        let myImg = document.getElementById("sky");
        var currHeight = myImg.clientHeight;
        var currWidth = myImg.clientWidth;
        if(currWidth === 400){
            alert("Maximum zoom-in level reached.");
        } else{
            myImg.style.width = (currWidth + 10) + "px";
        } 
        if(currHeight === 200 || currWidth === 200){
            alert("Maximum zoom-in level reached.");
        } else{
            myImg.style.height = (currHeight + 10) + "px";
        } 
    }
    function zoomout(){
        var myImg = document.getElementById("sky");
        var currWidth = myImg.clientWidth;
        var currHeight = myImg.clientHeight;
        if(currWidth === 50){
            alert("Maximum zoom-out level reached.");
        } else{
            myImg.style.width = (currWidth - 10) + "px";
        }
        if(currHeight === 500){
            alert("Maximum zoom-in level reached.");
        } else{
            myImg.style.height = (currHeight - 10) + "px";
        } 
    }

    const hello = document.querySelector('.hello');
const color1 = document.querySelector('.color1');


color1.addEventListener('click', () => {
    //color1.className='';
    hello.classList.add('bg1');
    hello.classList.remove('bg3');
    hello.classList.remove('bg4');
    hello.classList.remove('bg2');
    hello.classList.remove('bg5');
    
})

const color2 = document.querySelector('.color2');

color2.addEventListener('click', () => {
    hello.classList.add('bg2');
    hello.classList.remove('bg3');
    hello.classList.remove('bg4');
    hello.classList.remove('bg1');
    hello.classList.remove('bg5');
})

const color3 = document.querySelector('.color3');

color3.addEventListener('click', () => {
    hello.classList.add('bg3');
    hello.classList.remove('bg2');
    hello.classList.remove('bg4');
    hello.classList.remove('bg1');
    hello.classList.remove('bg5');
})

const color4 = document.querySelector('.color4');

color4.addEventListener('click', () => {
    hello.classList.add('bg4');
    hello.classList.remove('bg3');
    hello.classList.remove('bg2');
    hello.classList.remove('bg1');
    hello.classList.remove('bg5');
})

const color5 = document.querySelector('.color5');

color5.addEventListener('click', () => {
    hello.classList.add('bg5');
    hello.classList.remove('bg3');
    hello.classList.remove('bg4');
    hello.classList.remove('bg1');
    hello.classList.remove('bg2');
});
        