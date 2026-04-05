function openLetter() {
    document.getElementById('envelope-wrapper').classList.add('open-anim');
    
    setTimeout(() => {
        document.getElementById('letter-overlay').classList.add('visible');
        document.body.classList.add('bg-active');
        generateLeaves();
    }, 800);
}

function generateLeaves() {
    const container = document.getElementById('leaf-container');
    for(let i=0; i<15; i++) {
        let leaf = document.createElement('div');
        leaf.className = 'leaf';
        leaf.innerHTML = `<img src="leaf1.png" style="width: 30px; height: auto;">`;
        leaf.style.left = Math.random() * 100 + 'vw';
        leaf.style.animationDelay = Math.random() * 5 + 's';
        container.appendChild(leaf);
    }
}
