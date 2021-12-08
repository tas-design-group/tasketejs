(() => {
    const mo = new MutationObserver((mutations, observer) => {

    });
    const config = {};

    mo.observe(document.getElementsByClassName('hogetakiclass')[0], config)
})();