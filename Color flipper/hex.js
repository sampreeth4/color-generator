colors= ["#FF5733", "#8E44AD"," #2ECC71", "#3498DB", "#E67E22", "#27AE60", "#F39C12", "#1ABC9C", "#E74C3C", "#9B59B6", "#1B1464"," #C0392B"," #2980B9"," #D35400", "#2C3E50", "#F1C40F", "#7F8C8D", "#D35400", "#CB4335"," #3498DB"];

const btn = document.getElementById('btn');
const clr = document.querySelector('.color');


btn.addEventListener('click',function(){
    const randomnumber = randomcolor();
    document.body.style.backgroundColor = colors[randomnumber];
    clr.textContent = colors[randomnumber];

})
function randomcolor(){
    return Math.floor(Math.random()*colors.length);
}