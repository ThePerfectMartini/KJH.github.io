
let main = document.getElementById("aaa")
let freeMusic = document.getElementById("kkk")

main.style.color = "white"
main.style.backgroundColor = "rgba(0,110,0,0.8)"

main.style.textAlign = "center"


function windowResize(){
    let windowWidth = String(window.innerWidth / 2)
    let windowHeight = String(window.innerHeight)

    main.style.width = windowWidth + "px"
    main.style.height = windowHeight + "px"

    console.log(main.style.width)
}

windowResize()

window.addEventListener('resize',windowResize)