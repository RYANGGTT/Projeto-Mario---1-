console.log(document);

const modal = document.querySelector(".modal");
console.log("mostrar o objeto da modal");

const botaoTrailerMario = document.querySelector('.botao-trailer')       

const fehcarModal = document.querySelector('.fechar-modal')
console.log("fechcar modal")

const video = document.getElementById("video")

document.querySelector(
    '.botao-trailer'
)

botaoTrailerMario.addEventListener("click" , ()=>{
    modal.classList.add("aberto")
    video.setAttribute("src" , "https://www.youtube.com/embed/Cb4WV4aXBpk")
    })

    fehcarModal.addEventListener("click" , ()=>{
        modal.classList.remove("aberto")
        video.setAttribute("src" , "")
    })





