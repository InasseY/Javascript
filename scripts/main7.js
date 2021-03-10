let input = document.getElementById("lastname")
function output() {
    alert ("Merci de votre participation")
}

//event on html with ('type', function)
input.addEventListener("focusout", output)