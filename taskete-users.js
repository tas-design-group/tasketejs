(() => {
    const mo = new MutationObserver((mutations, observer) => {

    });
    const config = {};
    
    alert('aaaa')

    mo.observe(document.getElementsByClassName('hogetakiclass')[0], config)
})();