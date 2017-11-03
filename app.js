
var toggle = function(id){
    var expression = document.getElementById(id);
    // switch(expression) {
    //     case n:
    //         code block
    //         break;
    //     case n:
    //         code block
    //         break;
    //     default:
    //         code block
    // }
}
var transitColor = function(e){
    //console.log('e', e);
    //e.target.style.backgroundColor = "#26a69a";
    //e.target.style.background = "linear-gradient(to right, red 50%, blue 50%)";
    e.target.style.backgroundPosition = "right bottom";
    //e.target.style.marginLeft = "10px";
    //e.target.style.transition = "all 2s ease";
    // e.target.style.setProperty("-webkit-transition", "all ease 0.25s;");
    // e.target.style.setProperty("-moz-transition", "width 0.25s linear;");
    // e.target.style.setProperty("transition", "all ease 0.25s;");
    
    setTimeout(function(){
        //e.target.style.backgroundColor = "#FFF";        
        e.target.style.backgroundPosition = "left bottom";        
    },1000);
}

var toggleSidenav = function(state){
    //console.log(document.getElementsByClassName('sidenav')[0]);
    if(state === 'open'){
        document.getElementsByClassName('closeMenu')[0].style.display = "block";
        document.getElementsByClassName('closeMenu')[0].style.float = "right";
        document.getElementsByClassName('closeMenu')[0].style.fontSize = "1rem";
        document.getElementsByClassName('sidenav')[0].style.marginLeft = "0";        
        document.getElementsByClassName('sidenav')[0].style.width = "75%";                
        document.getElementsByClassName('sidenav')[0].style.setProperty("-webkit-transition", "all ease 0.5s");
        document.getElementsByClassName('sidenav')[0].style.setProperty("-moz-transition", "all ease 0.5s");
        document.getElementsByClassName('sidenav')[0].style.setProperty("transition", "all ease 0.5s");
    } else {
        document.getElementsByClassName('closeMenu')[0].style.display = "none";   
        document.getElementsByClassName('sidenav')[0].style.marginLeft = "-2000px";        
        document.getElementsByClassName('sidenav')[0].style.setProperty("-webkit-transition", "all ease 0.5s");
        document.getElementsByClassName('sidenav')[0].style.setProperty("-moz-transition", "all ease 0.5s");
        document.getElementsByClassName('sidenav')[0].style.setProperty("transition", "all ease 0.5s");
    }
}


