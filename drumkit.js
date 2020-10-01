const kick = document.querySelector('.drumkick');
const clap = document.querySelector('.drumclap');
const hihat = document.querySelector('.drumhihat');
const openhat = document.querySelector('.drumopenhat');
const tom = document.querySelector('.drumtom');
const snare = document.querySelector('.drumsnare');
const cymbal = document.querySelector('.drumcymbal');

document.addEventListener('keydown',function(e){
    if(e.keyCode==65){
        var audio = new Audio();
        audio.src = 'sounds/kick.wav';
        audio.play();
        kick.className = 'drumActive';
    }else if(e.keyCode==83){
        var audio = new Audio();
        audio.src = 'sounds/clap.wav';
        audio.play();
        clap.className = 'drumActive';
    }else if(e.keyCode==68){
        var audio = new Audio();
        audio.src = 'sounds/hihat.wav';
        audio.play();
        hihat.className = 'drumActive';
    }else if(e.keyCode==70){
        var audio = new Audio();
        audio.src = 'sounds/openhat.wav';
        audio.play();
        openhat.className = 'drumActive';
    }else if(e.keyCode==71){
        var audio = new Audio();
        audio.src = 'sounds/tom.wav';
        audio.play();
        tom.className = 'drumActive';
    }else if(e.keyCode==72){
        var audio = new Audio();
        audio.src = 'sounds/snare.wav';
        audio.play();
        snare.className = 'drumActive';
    }else if(e.keyCode==74){
        var audio = new Audio();
        audio.src = 'sounds/cymbal.wav';
        audio.play();
        cymbal.className = 'drumActive';
    }
})

document.addEventListener('keyup',function(e){
    if(e.keyCode==65){
        kick.className = 'drumbox';
    }else if(e.keyCode==83){
        clap.className = 'drumbox';
    }else if(e.keyCode==68){
        hihat.className = 'drumbox';
    }else if(e.keyCode==70){
        openhat.className = 'drumbox';
    }else if(e.keyCode==71){
        tom.className = 'drumbox';
    }else if(e.keyCode==72){
        snare.className = 'drumbox';
    }else if(e.keyCode==74){
        cymbal.className = 'drumbox';
    }
})

kick.addEventListener('click', function(e){
    var audio = new Audio();
        audio.src = 'sounds/kick.wav';
        audio.play();
        
})

clap.addEventListener('click', function(e){
    var audio = new Audio();
        audio.src = 'sounds/clap.wav';
        audio.play();
        
})

hihat.addEventListener('click', function(e){
    var audio = new Audio();
        audio.src = 'sounds/hihat.wav';
        audio.play();
        
})

openhat.addEventListener('click', function(e){
    var audio = new Audio();
        audio.src = 'sounds/openhat.wav';
        audio.play();
        
})

tom.addEventListener('click', function(e){
    var audio = new Audio();
        audio.src = 'sounds/tom.wav';
        audio.play();
        
})

snare.addEventListener('click', function(e){
    var audio = new Audio();
        audio.src = 'sounds/snare.wav';
        audio.play();
        
})

cymbal.addEventListener('click', function(e){
    var audio = new Audio();
        audio.src = 'sounds/cymbal.wav';
        audio.play();
        
})