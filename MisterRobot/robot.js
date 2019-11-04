function myMove(){
    let el = document.querySelectorAll("bouge");
    for (let i=0; i<el.legnth; i++ ){
        el[i];
        console.log(el[i]);
        
    }
    let pos = 0;
    let id = setInterval (frame, 5);
    function frame(){
        if (pos === 500){
            clearInterval(id);
        }else{
            pos++
            el[i].style.left = pos +"px";
            
        }
    }
}