function initAudio() {
    console.log("Start of initAudio");
    navigator.getMedia = ( navigator.getUserMedia ||
			   navigator.webkitGetUserMedia ||
			   navigator.mozGetUserMedia ||
			   navigator.msGetUserMedia);

    navigator.getMedia({audio:true}, function(){console.log("getUserMedia success"); return(0);}, function(e) {
        alert('Error getting audio');
        console.log(e);
    });
    console.log("End of initAudio");
}

document.getElementById("but").onclick=initAudio;
