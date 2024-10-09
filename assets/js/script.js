

/* Pour un Pacman animé :
Cf. https://css-tricks.com/pac-man-in-css/ */






/* Déclaration de variables  *************************************************************/

let pacman = document.getElementById("pacman");
/* Le nom de la variable correspond à l'id de la div concernée. */

let playground = document.getElementById("playground");




let hammertime = new Hammer(playground);
/* hammertime.on('pan', function(ev) {
    console.log(ev);
});
 */






let posX = 0, posY = 0;
/* Deux variables peuvent être déclarées à la suite l'une de l'autre.

Dans cet exemple, les coordonnées X et Y sont remises à 0. */
console.log(posX, posY);



console.dir(playground);
/* Cette instruction affiche dans la console les propriétés de l'objet 'playground'. */

let widthPlayground = playground.clientWidth;

let heightPlayground = playground.clientHeight;


console.dir(pacman);













/* Déclaration de fonctions *************************************************************/

function movePacman(direction) {
    /* condition qui définit les limites de déplacement de mon pacman. Les 'ifs' sont récupérer dans la fonction 'window.addEventListener'. */

    // (posX > 0) => déplacement gauche
    // (posX < widthPlayground - 200) => déplacement droite
    // (posY > 0) => déplacement haut
    // (posY < widthPlayground - 200) => déplacement bas

    switch (direction) {
        case "gauche":
            if (posX > 0) {
                posX -= 50;
            }
            break;
        case "droite":
            if (posX < widthPlayground - 100) {
                posX += 50;
            }
            break;
        case "haut":
            if (posY > 0) {
                posY -= 50;
            }
            break;
        case "bas":
            if (posY < widthPlayground - 100) {
                posY += 50;
            }
            break;
        default:
            break;
    }

    pacman.style.transform = "translate(" + posX + "px, " + posY + "px)";
}



// DEUXIEME VERSION DE 'window.addEventListener'. La première version se trouve dans le fichier 'V01.js'.

window.addEventListener("keyup", function (e) {
    /* Le 'e' est la version courte de 'event' */
    switch (e.keyCode) {
        case 37: // gauche
        case 81:
            movePacman("gauche");
            break;
        case 39: // droite
        case 68:
            movePacman("droite");
            break;
        case 38: // haut
        case 90:
            movePacman("haut");
            break;
        case 40: // bas
        case 83:
            movePacman("bas");
            break;
        default:
            console.log(e.keyCode);
            break;
    }
})


/* window > document en terme de hiérachie entre les éléments.

'window' coïncide plus ou moins à la surface du navigateur. 

'document'  coïncide plus ou moins à la surface d'une page html */



/* Avoir des 'case' qui se suivent avant un 'break' permet d'utiliser des touches alternatives pour lancer une même action. */


// GESTION TACTILE
hammertime.get('swipe').set({ direction: Hammer.DIRECTION_ALL });


hammertime.on("swipeleft swiperight swipeup swipedown", function (ev) {
    /*  myElement.textContent = ev.type +" gesture detected."; */
    console.dir(ev.type);
    switch (ev.type) {
        case "swipeleft": // gauche
            movePacman("gauche");
            break;
        case "swiperight": // droite
            movePacman("droite");
            break;
        case "swipeup": // haut
            movePacman("haut");
            break;
        case "swipedown": // bas
            movePacman("bas");
            break;

        default:
            break;
    }
});


/* Source pour le code : adaptation d'un code pour 'pan' remplacé ici par 'swipe'.

https://codepen.io/jtangelder/pen/bGLmMw

https://hammerjs.github.io/recognizer-swipe/ 
https://hammerjs.github.io/api/ chercher 'direction' dans la page

*/