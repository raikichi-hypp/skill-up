 
document.addEventListener("DOMContentLoaded", function() {
    // 目次クリックでスムーズスクロール
    document.querySelectorAll("nav ul li a").forEach(anchor => {
        anchor.addEventListener("click", function(e) {
            e.preventDefault();
            const targetId = this.getAttribute("href").substring(1);
            document.getElementById(targetId).scrollIntoView({ behavior: "smooth" });
        });
    });

    // 怪談風の演出（ランダムに影を出現させる）
    const body = document.body;
    setInterval(() => {
        const shadow = document.createElement("div");
        shadow.innerHTML = "影...";
        shadow.style.position = "fixed";
        shadow.style.top = `${Math.random() * window.innerHeight}px`;
        shadow.style.left = `${Math.random() * window.innerWidth}px`;
        shadow.style.color = "rgba(255, 0, 0, 0.3)";
        shadow.style.fontSize = "18px";
        shadow.style.zIndex = "9999";
        shadow.style.pointerEvents = "none";
        body.appendChild(shadow);

        setTimeout(() => {
            body.removeChild(shadow);
        }, 3000);
    }, 10000);
});
