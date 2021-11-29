window.addEventListener("load", ()=>{
    let title = document.querySelector(".titleName");
    let rating = document.querySelector(".rating");
    let awards = document.querySelector(".awards");
    let release = document.querySelector(".release");
    let duracion = document.querySelector(".length");
    let form = document.querySelector("form");
    let menor10 = /^([0-9]|[1-9]|10)$/;

    form.addEventListener("submit", (e)=> {
        e.preventDefault()
        console.log("enviado")
        switch (true) {
            case title.value === "":
                title.classList.add("is-invalid");
                e.preventDefault()
                
            case rating.value === "":
                rating.classList.add("is-invalid");
                e.preventDefault()
            case awards.value === "":
                awards.classList.add("is-invalid")
                e.preventDefault()
            case release.value === "":
                release.classList.add("is-invalid")
                e.preventDefault()
            case duracion.value === "":
                duracion.classList.add("is-invalid")
                e.preventDefault()
                break;
            default:
                alert("Guardado correctamente")
                form.submit()
                break;
        }
    })
    title.addEventListener("blur", ()=>{
        switch (true) {
            case title.value === "":
            document.querySelector(".smallTitle").innerHTML = "Debes completar el campo"
            document.querySelector(".smallTitle").style.marginBottom = "5px"
            document.querySelector(".smallTitle").style.color = "red"
                break;
        
            default:
                document.querySelector(".smallTitle").innerHTML = null
                break;
        }
    })
    rating.addEventListener("blur", ()=>{
        switch (true) {
            case rating.value === "":
            document.querySelector(".smallRating").innerHTML = "Debes completar el campo"
            document.querySelector(".smallRating").style.marginBottom = "5px"
            document.querySelector(".smallRating").style.color = "red"
                break;
            case !menor10.test(rating.value):
            document.querySelector(".smallRating").innerHTML = "Debes ser un numero entre 0 y 10"
            document.querySelector(".smallRating").style.marginBottom = "5px"
            document.querySelector(".smallRating").style.color = "red"

            break;
            default:
                document.querySelector(".smallRating").innerHTML = null
                break;
        }
    })
    awards.addEventListener("blur", ()=>{
        switch (true) {
            case awards.value === "":
                document.querySelector(".smallAwards").innerHTML = "Debes completar el campo"
                document.querySelector(".smallAwards").style.marginBottom = "5px"
                document.querySelector(".smallAwards").style.color = "red"
                break;
        
            default:
                document.querySelector(".smallAwards").innerHTML = null
                break;
        }
        
    })
    release.addEventListener("blur", ()=>{
        switch (true) {
            case release.value === "":
            document.querySelector(".smallRelease").innerHTML = "Debes poner una fecha"
            document.querySelector(".smallRelease").style.marginBottom = "5px"
            document.querySelector(".smallRelease").style.color = "red"
                break;
        
            default:
                document.querySelector(".smallRelease").innerHTML = null
                break;
        }
        
    })
    duracion.addEventListener("blur", ()=>{
        switch (true) {
            case duracion.value === "":
            document.querySelector(".smallDuracion").innerHTML = "Debes completar el campo"
            document.querySelector(".smallDuracion").style.marginBottom = "5px"
            document.querySelector(".smallDuracion").style.color = "red"
                break;
        
            default:
                document.querySelector(".smallDuracion").innerHTML = null
                break;
        }
    })
    

    title.focus();
})