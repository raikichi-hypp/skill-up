document.addEventListener("DOMContentLoaded", function() {
    // 目次クリックでスムーズスクロール
    document.querySelectorAll("nav ul li a").forEach(anchor => {
        anchor.addEventListener("click", function(e) {
            e.preventDefault();
            const targetId = this.getAttribute("href").substring(1);
            document.getElementById(targetId).scrollIntoView({ behavior: "smooth" });
        });
    });

    // RPG風の演出（経験値ゲージの表示）
    let exp = 0;
    const expBar = document.createElement("div");
    expBar.style.position = "fixed";
    expBar.style.bottom = "10px";
    expBar.style.left = "10px";
    expBar.style.width = "200px";
    expBar.style.height = "20px";
    expBar.style.background = "#222";
    expBar.style.border = "2px solid #ffd700";
    expBar.style.overflow = "hidden";
    
    const expFill = document.createElement("div");
    expFill.style.height = "100%";
    expFill.style.width = "0%";
    expFill.style.background = "#f4d03f";
    expBar.appendChild(expFill);
    document.body.appendChild(expBar);

    function gainExp() {
        exp += 10;
        if (exp > 100) exp = 100;
        expFill.style.width = exp + "%";
    }

    // スクロールするたびに経験値が溜まる
    window.addEventListener("scroll", gainExp);

    // ランダムなクエストメッセージの表示
    setInterval(() => {
        const messages = [
            "⚔️ 勇者よ、運動の呪いを解く準備はできたか？",
            "💎 黄金の知識を手に入れろ！",
            "📜 秘密のスクロールを読んで力を得よ！"
        ];
        const quest = document.createElement("div");
        quest.innerHTML = messages[Math.floor(Math.random() * messages.length)];
        quest.style.position = "fixed";
        quest.style.top = `${Math.random() * window.innerHeight}px`;
        quest.style.left = `${Math.random() * window.innerWidth}px`;
        quest.style.color = "#ffd700";
        quest.style.fontSize = "16px";
        quest.style.zIndex = "9999";
        quest.style.pointerEvents = "none";
        document.body.appendChild(quest);

        setTimeout(() => {
            document.body.removeChild(quest);
        }, 5000);
    }, 12000);
});

