let mario = document.querySelector(".mario");
let pipe = document.querySelector(".pipe");
let clouds = document.querySelector(".clouds")
let record = document.querySelector('.record');

document.addEventListener('keypress', (event) => {
  if(event.key === "z" || event.key === "Z"){
    mario.classList.add('jump');
    
    setTimeout(() => {
      mario.classList.remove('jump');
    }, 700)
  }
})

let value = 0

const loop = setInterval(() => {
  let pipePosition = pipe.offsetLeft;
  let marioPosition = mario.offsetTop;
  let cloudsPosition = clouds.offsetLeft
  
  if(pipePosition <= 120 && marioPosition > 350 && pipePosition > 0){
    pipe.style.animation = 'none';
    pipe.style.left = `${pipePosition}px`;
    
    clouds.style.animation = 'none';
    clouds.style.left = `${cloudsPosition}px`

    mario.style.top = `${marioPosition}px`;
    mario.src = './images/game-over.png';
    mario.style.width = '85px';
    mario.style.marginLeft = '30px'
    
    clearInterval(loop);
  }
}, 10)


const runRecord = setInterval(()=>{  
  
  let pipePosition = pipe.offsetLeft;
  let marioPosition = mario.offsetTop;
    
  if(pipePosition <= 120 && marioPosition > 350 && pipePosition > 0){
    record.innerHTML = "Recorde: " + value + " (aperte Z para Pular)"
    clearInterval(runRecord);
  }else{
    value += 1
    record.innerHTML = "Recorde: " + value + " (aperte Z para Pular)"
  }
     
}, 1500)