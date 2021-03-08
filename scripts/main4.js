    let nombre1 = prompt("premier nombre à virgule")
    let nombre2 = prompt("deuxieme nombre à virgule")
    nombre1 = parseInt(nombre1);
    function CheckNumber(nombre1,nombre2){
       if (typeof nombre1, nombre2 == "number" && !isNaN(nombre1, nombre2)){
           if (Number.isInteger(nombre1, nombre2))
           {
             alert("Mettez un nombre à virgule")  
           }
           else {
               alert("c'est un chiffre à virgule")
           }
       }
          else {
              alert("Ce n'est pas un chiffre")
          }  
        }
    let resultat = nombre1 * nombre2 ;

    alert("Le produit de ces deux nombres est" + resultat)