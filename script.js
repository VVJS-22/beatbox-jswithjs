
let beats = {
    "65": {
        beat: new Beat("./assets/Piano Chord 331.mp3"),
        button: new Button("#00fffe", 65)
    },
    "83": {
        beat: new Beat("./assets/Piano Chord 209.mp3"),
        button: new Button("#00fffe", 83)
    },
    "68": {
        beat: new Beat("./assets/Piano Chord 208.mp3"),
        button: new Button("#00fffe", 68)
    },
    "70": {
        beat: new Beat("./assets/Drum Sticks Hit 3.mp3"),
        button: new Button("#ff00ff", 70)
    },
    "71": {
        beat: new Beat("./assets/Drum Snare Roll.mp3"),
        button: new Button("#ff00ff", 71)
    },
    "72": {
        beat: new Beat("./assets/PREL Musical 57.mp3"),
        button: new Button("#ff00ff", 72)
    },
    "74": {
        beat: new Beat("./assets/Cymbal Suspended 2.mp3"),
        button: new Button("#ffffff", 74)
    },
    "75": {
        beat: new Beat("./assets/Musical Compos 33.mp3"),
        button: new Button("#ffffff", 75)
    },
    "76": {
        beat: new Beat("./assets/Musical Orches 4.mp3"),
        button: new Button("#ffffff", 76)
    }
}

triggerBeat = (event) => {
    let keyCode = event.keyCode;
    if (keyCode in beats){
        let keyPress = beats[keyCode];
        keyPress.beat.play();
        keyPress.button.select();
        setTimeout(()=> {keyPress.button.deselect()},100)
    }

}

const myBeat = document.querySelectorAll(".button");
console.log(myBeat);

myBeat.forEach(beat => {console.log(beat.id)})

myBeat.forEach(beat => beat.addEventListener('click', () => {
    let keyPress = beats[beat.id];
        keyPress.beat.play();
        keyPress.button.select();
        setTimeout(()=> {keyPress.button.deselect()},100)
}));

const end = (event) => {
    let keyCode = event.keyCode;
    if (keyCode in beats){
        let keyPress = beats[keyCode];
        keyPress.button.deselect();
    }

}

// document.addEventListener('keyup', end);

document.addEventListener('keydown', triggerBeat)