document.addEventListener('DOMContentLoaded', () =>{
    let description = document.getElementById("description");
    description.innerHTML = "Il a pour objectif générale de former des spécialistes en informatique. Plus spécifiquement, il s'agit de dévelloper des applications innovantes; de consevoir des systemes d'informations addaptés aux besoins des clients ";
});

function onglet(x){
    let btn = document.querySelectorAll('button');
    let contain = document.querySelectorAll('.myOnglet');

    for(let i = 0 ; i < contain.length ; i++){
        contain[i].style.display = 'none';
        btn[i].classList.remove('activate');
    }

    contain[x].style.display = 'block';
    btn[x].classList.add('activate');
}





// function affectation(){
//     let i , a ;

//     var choix = [
//         '1. a1 <-- 3' ,
//         '2. b <-- 3 * 5', 
//         '3. c <-- a1' , 
//         '4. a + 1 <-- b + 1', 
//         '5. c <-- (b + 5) * 4', 
//         '6. b <-- b + c', 
//         '7. a <-- b x c' , 
//         '8. a <-- 3c' 
//     ];

        
//         let n_trouver = 0;
//         let point = 0;

//         for(i = 0 ; i < choix.length ; i++){

//             do{
//                 a = Number(prompt(`Dite si les instructions sont correctes :\n\n${choix[i]} : est elle corecte \n\n1. Correcte\n2. Incorrect\n3. Je ne sais pas`));

//             }while((a <  1 || a > 3 ) || a === " ");

//             if(i === 0 || i === 1 || i === 2 || i === 4 || i === 5){
//                 choix[i] = true;
//             }else{
//                 choix[i] = false;
//             }

//             switch(a){

//                case 1: 
//                     if(choix[i] == true){
//                         console.log("Bonne reponse")
//                         n_trouver ++;
//                         point += 2.5;

//                     }else if(choix[i] == false){
//                         console.log("Mauvaise reponse")
//                         point -= 0.5;

//                     }
//                     break;
//                 case 2:
//                     if(choix[i] == true){
//                         console.log("Mauvaise reponse")
//                         point -= 0.5;


//                     }else if(choix[i] == false){
//                         console.log("Bonne reponse")
//                         n_trouver ++;
//                         point += 2.5;

//                     }
//                     break;
//                 case 3: console.log("Vous avez 0 point la bas")
//                     break;

//             }
            
//             // console.log(choix[i]);
//         }
//         console.log(`Vous avez trouvé ${n_trouver} bonne reponse alors vous avez ${point} points`)

//     }

// affectation();




