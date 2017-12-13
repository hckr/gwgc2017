let q = document.querySelector.bind(document),
    $ = document.querySelectorAll.bind(document);

document.body.innerHTML = `#include{main.html}`;

// include_once{overlay.js}
// include_once{background_music.js}
// include_once{canvas_ops.js}

(t=q('b')).onclick = _ => {
    d = 'mute'
    e = 'unmute'
    if (t.innerHTML.indexOf(d) == 0) {
        t.innerHTML = t.innerHTML.replace(d, e);
        muteBackgroundMusic();
    } else {
        t.innerHTML = t.innerHTML.replace(e, d);
        unmuteBackgroundMusic();
    }
}

// for weird trockery of newest Chrome
// uncomment if will be needed
// setTimeout(_ => {
//     if (audioCtx.state == 'suspended') {
//         t.click();
//         onclick = e => {
//             audioCtx.resume();
//             onclick = undefined;
//             if (e.target != t) {
//                 t.click();
//             }
//         }
//     }
// }, 100);

onkeydown = e => {
    switch (e.keyCode) {
        case 27: // ESC
            showOverlay();
            break;
    }
}
