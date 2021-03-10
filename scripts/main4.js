    let nombre1 = prompt("premier nombre décimal")
    let nombre2 = prompt("deuxieme nombre décimal")
    let regex = /^(-)?[0-9]+\.[0-9]+$/

    if ( regex.test(nombre1)&& regex.test(nombre2))
    

    {
        nombre1 = parseInt(nombre1)
        let resultat = nombre1 * nombre2 
        alert("Le résultat  de ces deux nombres est" + resultat)
    }
    else 
    {
        alert("Les nombres renseignés ne sont pas des nombres décimaux")
    }

    