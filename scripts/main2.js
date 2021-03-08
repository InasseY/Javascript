let person = prompt("Quel est ton nom?")

if (person == null || person == "") { txt = "nom inscrit"
} else 
{
  txt = "Bonjour" + person + "! Comment vas tu?"
}

alert("Bonjour " + person + "! Comment vas tu?")