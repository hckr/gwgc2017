let audioCtx = new AudioContext(),
    source = audioCtx.createBufferSource(),
    byteString = atob('#base64{assets/sounds/background.ogg}'),
    ia = new Uint8Array(byteString.length),
    gainNode = audioCtx.createGain();

for (let i = 0; i < byteString.length; ++i) {
    ia[i] = byteString.charCodeAt(i);
}

gainNode.connect(audioCtx.destination);
gainNode.gain.value = 0.2;

audioCtx.decodeAudioData(ia.buffer, function(buffer) {
   source.buffer = buffer;
   source.connect(gainNode);
   source.loop = true
   source.start(0);
});

(t=q('b')).onclick = _ => {
    d = 'mute'
    e = 'unmute'
    if ((f=t.firstChild).innerHTML == d) {
        f.innerHTML = e;
        gainNode.gain.value = 0;
    } else {
        f.innerHTML = d;
        gainNode.gain.value = 0.2;
    }
}
