function toast({
    title = '',
    message = '',
    type = '',
    duration = 3000
})  {


    const main = document.getElementById("toast");
    if(main){
        const toast = document.createElement("div");

        const autoRemove =  setTimeout(() => {
            main.removeChild(toast);
        }, duration + 1000);

        toast.onclick = function(e){
           if(e.target.closest(".toast__close")){
               main.removeChild(toast);
               clearTimeout(autoRemove);
           }
        }

        const icons ={
            success: "fas fa-check-circle",
            info: "fas fa-info-circle",
            danger: "fas fa-exclamation-circle"
        }

        

        const icon = icons[type];
        const delay = (duration / 1000).toFixed(2);
        toast.classList.add("toast", `toast-${type}`);
        toast.style.animation = `fadeIn ease .3s, fadeOut linear 1s ${delay}s forwards`;
        toast.innerHTML = `
            <div class="toast__icon">
                <i class="${icon}"></i>
            </div>
            <div class="toast__body">
                <h3 class="toast__title">${title}</h3>
                <p class="toast__msg">${message}.</p>
            </div>
            <div class="toast__close">
                <i class="fas fa-times"></i>
            </div>
        `;
        main.appendChild(toast);


    }
}