const circle = document.getElementById("circle");
const upBtn = document.getElementById("upBtn");
const downBtn = document.getElementById("downBtn");

upBtn.addEventListener('click', ()=>{
    let rotateValue = circle.style.transform;
    let rotateSum = rotateValue + 'rotate(-90deg)';
    circle.style.transform = rotateSum;
    rotateValue = rotateSum;
})

downBtn.addEventListener('click', ()=>{
    let rotateValue = circle.style.transform;
    let rotateSum = rotateValue + 'rotate(90deg)';
    circle.style.transform = rotateSum;
    rotateValue = rotateSum;
})