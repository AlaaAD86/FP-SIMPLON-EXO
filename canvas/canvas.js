// window.addEventListener("load", function(){
//     console.log('Bonjour les ami(e)s');
    
// });


window.addEventListener("load", ()=>{
    console.log('Bonjour les ami(e)s');
    const canvas = document.querySelector(".canvas");
    const ctx = canvas.getContext('2d');
    // sur context on va rajouter ce q on veut-
    // méthode getContext() retourne un contexte de dessin sur le canevas,
    // ou null si l'identificateur de contexte n'est pas supporté.

    // pour définir le context de dessin associé au canvas; il y a pusierurs valeurs possible: nous on va utiliser 
    // la valeur '2d' qui conduit à la création d'un objet représentant un contexte de représentation bi-dimensionnel.


    // le Document Object Model (DOM) est une interface de programmation normalisée par le W3C,
    //  qui permet à des scripts d'examiner et de modifier le contenu du navigateur web1. 

    
    
    // ------------- Modifier la taill du canvas------------------------------------


    canvas.height = window.innerHeight;
    canvas.width = window.innerWidth;

    // mais le problem si on change la taille de navigateur ca va changer la taille du canvas
    // pour ca on rajoute une function de modifer la taille pour mettre a jour la taille chque fois on le change

    //dessiner un rectangle
   
    ctx.fillRect(200, 100, 400, 200);
    //  ctx.fillRect(x , y , height, width)
    // change couleur ------------ ca va pas marcher car il faut le declarer avant
    ctx.fillStyle = 'red';
   


//dessiner des bordors
    ctx.strokeStyle = 'green';
    ctx.lineWidth = 10;
    ctx.strokeRect(800, 600, 400, 200);
     
     
//dessiner des lignes
    ctx.strokeStyle = 'red';
    ctx.lineWidth = 5;
    ctx.beginPath();
    ctx.moveTo(100, 100); //moveTo (X , Y)
    ctx.lineTo(600, 800);
    ctx.lineTo(150, 320);
    ctx.lineTo(860, 150);
    ctx.lineTo(100, 800);
    ctx.closePath();    //..........pour feremr/cloturer
    ctx.stroke();

//dessiner des cercle
    ctx.fillStyle ='green';
    ctx.beginPath();
    ctx.arc(300, 500, 30, 0, Math.PI*2); // ctx.arc(x, y, rayon, so angle de depart et d arrivé X 2)
                                        // - si je ne mets pas *2 il va dessiner demi cercle
    ctx.fill();






// -----------------------------------------------------------------HERE IS THE PROJECT---------------------------




    // Déclarer des variable pou commencer notre projet

    let dessiner = false;
    // savoir quand on va dessiner 
    


    // avant ajouter les Eventlistener, on doit creer des fontions pour dire 
    // a la machine quand on va dessiner et quand on finit
    
    function demarrerD(){
        dessiner = true;
    }

    function finirD(){
        dessiner = false;
        ctx.beginPath();
    }

   

    // ajouter EventListeners
    canvas.addEventListener("mousedown", demarrerD);
    canvas.addEventListener("mouseup", finirD);

    // autre fonction pour bouger la souris et dessiner a partir de son nouvel positionnement
    canvas.addEventListener("mousemove", draw);


    function draw(e){    //  e =  pour rajouter des trucs plus tard

        // ici on fair if 
        if (!dessiner) return; // pour verfier si on dessine ou pas --- 
                                // cela veut dire que si on click pas la souris, rien se passera, 
                                // comme default

        ctx.lineWidth = 5;   //--- a ajouter plus tard--------------
        ctx.lineCap = 'round';   //--- a ajouter plus tard--------------
        ctx.strokeStyle = 'green';

        // donc comment dessiner a partir du positionnement de la souris--- Alors on lui precise le suivant
        ctx.lineTo(e.clientX, e.clientY); //  clientX proprieté de MouseEvent qui fourni les coordination horizontales et verticale 
                                         // au sein d'une zone d'application's  ou levenment a ete déclanché

        ctx.stroke();

        // mais il y a un probleme, c'est chaque fois je bouge la souris, pour redesiner, il connect au deriner point aue j ai fait
        // pour l empecher de le fair on ecrit le code suivant



        // pour les ligns soit plus douces....removables
        ctx.beginPath();                                      
        ctx.moveTo(e.clientX, e.clientY);                  

        // et on doit rajouer un beginPath function a la function de finirD() pour lui dire de commencer dessiner un nouvelle ligne quand on fini dessiner
        // function finirD(){
        //dessiner = false; ============> on rajoute ... ctx.beginPath();
        //}



        // autre probleme c'est auqnd on click .. seulement un clic .. il dessin pas
        // don on ajout la fonction draw(e); a la function demarrerD(e);

    }


});


// function resize(){
//     canvas.height.ctx = window.innerHeight;
//     canvas.width.ctx = window.innerWidth;
// }
// window.onresize = resize;