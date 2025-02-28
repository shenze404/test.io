document.getElementById("start-btn").addEventListener("click", function() {
    let homeScreen = document.getElementById("home-screen");
    let menuScreen = document.getElementById("menu-screen");

    // 让第一屏幕淡出
    homeScreen.classList.add("fade-out");

    // 等待 1 秒（与 CSS 过渡时间匹配），再切换到第二屏幕
    setTimeout(() => {
        homeScreen.classList.add("hidden");
        menuScreen.classList.remove("hidden");
        menuScreen.classList.add("fade-in");
    }, 1000);
});
