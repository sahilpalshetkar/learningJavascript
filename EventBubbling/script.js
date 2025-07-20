let button = document.getElementById("btn")

button.addEventListener("click", ()=>{
    alert("Hey i am clicked here. yeahh!")
    document.querySelector(".container").style.color = "red";
    document.querySelector(".box").innerHTML = "<b>Hey i am got changed</b>";
})

button.addEventListener("contextmenu", ()=>{
    alert("Dont hack us by clicking Right button")
    document.querySelector(".box").innerHTML = "<b>Warnnnning!!!</b>"
    document.querySelector(".container").style.color = "red";
})