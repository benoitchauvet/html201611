//var cg = document.getElementById("colonneGauche");

var nvItem = document.createElement("li");

var lien = document.createElement("a");
lien.innerHTML = "Nouveau !";
lien.href="#";
lien.className = "lienMenu";

nvItem.appendChild(lien);

var menu = document.querySelector("nav ul");

menu.appendChild(nvItem);


var la = document.getElementsByTagName("article");

var titresAModifier = document.querySelectorAll("#colonneGauche article:nth-child(odd) h2");

for (var t of titresAModifier)
  {
    t.style.backgroundImage = "url('/images/licorne.bmp')";
    t.style.opacity = "0.5";
  }

/*
if (cg.classList.contains("rouge"))
  {
    cg.classList.remove("rouge");
  }
else
  {
     cg.classList.add("rouge");
  }
*/

for(var art of la)
{
   //var titre = art.getElementsByTagName("h2")[0];
   var titre = art.querySelectorAll("h2")[0]; 
  
  titre.innerHTML = "Youpi";
   art.style.backgroundColor = "olive"; 
   //art.innerHTML = "<a href='#'>jsqhkfjsqfjhkq</a>";
   art.classList.toggle("rouge");
}