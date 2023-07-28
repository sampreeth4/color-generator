colors = ["green","red","black","blue","rgba(133,122,200)","orange","yellow","pink","green","violet","purple","aqua","gray","tomato", "rebeccapurple", "cyan", "palegreen", "gold", "darkorange", "indigo", "teal", "crimson", "darkslategray", "mediumaquamarine", "rosybrown", "coral", "slateblue", "darkkhaki", "mediumvioletred", "chocolate", "darkorchid", "seagreen", "cornflowerblue"];

const btn = document.getElementById('btn');
const clr = document.querySelector('.color');

btn.addEventListener('click',function(){
    const randomnumber = randomNumber();
    document.body.style.backgroundColor = colors[randomnumber];
    clr.textContent = colors[randomnumber];

})

function randomNumber(){
    return Math.floor(Math.random()*colors.length)
}