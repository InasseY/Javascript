let numberguess = 10
let myguess = undefined

while ( myguess != numberguess)
{
    myguess = prompt("Devine un chiffre entre 1 et 56")

if (myguess > numberguess)
{
    alert("Ton chiffre est " + myguess + " c'est trop grand")

}
else if (myguess < numberguess)
{
alert("Ton chiffre est " + myguess + " c'est trop petit")
}
}
alert ("Bonne réponse !")