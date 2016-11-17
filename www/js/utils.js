function creerArticle(conteneur, titre, teaser, imageUrl = 'images/licorne.bmp')
{
    let article = document.createElement("article");

    let h2 = document.createElement("h2");
    h2.innerHTML = titre;

    let img = document.createElement("img");
    img.setAttribute("src", imageUrl);
    img.setAttribute("alt", "illustration");

    let p = document.createElement("p");
    p.innerHTML = teaser;

    article.appendChild(h2);
    article.appendChild(img);
    article.appendChild(p);

    conteneur.appendChild(article);
}