let audioCtx = new AudioContext(),
    source = audioCtx.createBufferSource(),
    byteString = atob('#base64{assets/sounds/background.ogg}'),
    ia = new Uint8Array(byteString.length);

for (let i = 0; i < byteString.length; ++i) {
    ia[i] = byteString.charCodeAt(i);
}

audioCtx.decodeAudioData(ia.buffer, function(buffer) {
   source.buffer = buffer;
   source.connect(audioCtx.destination);
   source.loop = true
   source.start(0);
});

document.body.innerHTML = ''
