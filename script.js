function toast({
    title = '',
    message = '',
    type = '',
    duration = 3000
})  {
    const main = document.getElementById("toast");
    if(main){
        const toast = document.createElement("div")
        toast.classList.add("toast", `toast-${type}`)
        toast.innerHTML = `
            <div class="toast__icon">
                <i class="fas fa-check"></i>
            </div>
            <div class="toast__body">
                <h3 class="toast__title">Thành công</h3>
                <p class="toast__msg">Bạn đã đăng ký tài khoản thành công.</p>
            </div>
            <div class="toast__close">
                <i class="fas fa-times"></i>
            </div>
        `;
        main.appendChild(toast);
    }
}