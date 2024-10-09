
// PREMIERE VERSION

window.addEventListener("keyup", function (e) {
    /* Le 'e' est la version courte de 'event' */
    switch (e.keyCode) {
        case 37: // gauche
        case 81:
            /*posX = posX - 50;
    
           Syntaxe alternative plus courte :
           posX -= 50;
                 */

            if (posX > 0) {
                posX -= 50;
            }

            pacman.style.transform = "translate(" + posX + "px, " + posY + "px)";
            break;
        case 39: // droite
        case 68:
            // posX = posX + 50;
            if (posX < widthPlayground - 200) {
                posX += 50;
            }

            pacman.style.transform = "translate(" + posX + "px, " + posY + "px)";
            break;
        case 38: // haut
        case 90:
            // posY = posY - 50;

            if (posY > 0) {
                posY -= 50;
            }

            pacman.style.transform = "translate(" + posX + "px, " + posY + "px)";
            break;
        case 40: // bas
        case 83:
            // posY = posY + 50;
            if (posY < widthPlayground - 200) {
                posY += 50;
            }


            pacman.style.transform = "translate(" + posX + "px, " + posY + "px)";
            break;

        default:
            console.log(e.keyCode);
            break;
    }
})