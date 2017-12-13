let q = document.querySelector.bind(document),
    $ = document.querySelectorAll.bind(document);

document.body.innerHTML = `#include{main.html}`

// include_once{overlay.js}
// include_once{background_music.js}
// include_once{canvas_ops.js}

onkeydown = e => {
    switch (e.keyCode) {
        case 27: // ESC
            showOverlay();
            break;
    }
}
