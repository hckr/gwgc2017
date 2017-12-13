q('m[n]').onclick = _ => hideOverlay();

function showOverlay() {
    o.style.display = 'block';
    W.classList.add('o');
}

function hideOverlay() {
    W.classList.remove('o');
}

o.addEventListener('transitionend', _ => {
    console.log('aaa');
    if (!W.classList.contains('o')) {
        o.style.display = 'none';
    }
});
