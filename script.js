document.addEventListener("DOMContentLoaded", () => {
    // Page load par components ko smooth transition dene ke liye js effect
    const leftContent = document.querySelector('.content-left');
    const rightContent = document.querySelector('.content-right');
    
    // Initial invisible state
    leftContent.style.opacity = 0;
    leftContent.style.transform = "translateX(-20px)";
    leftContent.style.transition = "all 0.8s ease-in-out";
    
    rightContent.style.opacity = 0;
    rightContent.style.transform = "translateX(20px)";
    rightContent.style.transition = "all 0.8s ease-in-out";

    // Triggering entry animation
    setTimeout(() => {
        leftContent.style.opacity = 1;
        leftContent.style.transform = "translateX(0)";
    }, 200);

    setTimeout(() => {
        rightContent.style.opacity = 1;
        rightContent.style.transform = "translateX(0)";
    }, 400);
});
