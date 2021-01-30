
function baris(index1, index2, index3, index4, index5) {
    const dot = `<div class="dot"></div>`
    const dotColor = `<div class="dot blackColor"></div>`
    for(let i = 1 ; i<=5; i++) {
        if(i==index1 ||i==index2||i==index3||i==index4||i==index5) {
            document.querySelector(".boxdot").innerHTML += dotColor;
        } else {
            document.querySelector(".boxdot").innerHTML += dot;
        }
    }
    document.querySelector(".boxdot").innerHTML += '<br>';
}

function alphabet(params) {
    switch (params.toLowerCase()) {
        case "a":
            baris(3);
            baris(2,4);
            baris(2,3,4);
            baris(2,4);
            baris(2,4);
            break;
        
        case "b":
            baris(1,2,3);
            baris(1,4)
            baris(1,2,3,4);
            baris(1,4);
            baris(1,2,3);
            break;
        
        case "c" :
            baris(1,2,3,4);
            baris(1);
            baris(1);
            baris(1);
            baris(1,2,3,4);
            break;

        case "d" :
            baris(1,2,3);
            baris(1,4);
            baris(1,4);
            baris(1,4);
            baris(1,2,3);
            break;

        case "e" :
            baris(1,2,3,4);
            baris(1);
            baris(1,2,3,4);
            baris(1);
            baris(1,2,3,4);
            break;

        case "f" :
            baris(1,2,3,4);
            baris(1);
            baris(1,2,3,4);
            baris(1);
            baris(1);
            break;

        case "g" :
            baris(1,2,3,4);
            baris(1,4);
            baris(1,2,3,4);
            baris(4);
            baris(1,2,3,4);
            break;
        
        case "h" :
            baris(1,4);
            baris(1,4);
            baris(1,2,3,4);
            baris(1,4);
            baris(1,4);
            break;
    
        case "i" :
            for (let index = 0; index < 5; index++) {
                baris(3);
            }
            break;

        case "j" :
            baris(2,3,4);
            baris(4);
            baris(4);
            baris(1,4);
            baris(1,2,3,4);
            break;

        case "k" :
            baris(1,3);
            baris(1,2);
            baris(1);
            baris(1,2);
            baris(1,3);
            break;
    
        case "l" :
            baris(1);
            baris(1);
            baris(1);
            baris(1,4);
            baris(1,2,3,4);
            break;
        
        case "m" :
            baris(1,2,4,5);
            baris(1,3,5);
            baris(1,3,5);
            baris(1,3,5);
            baris(1,3,5);
            break;

        case "n" :
            baris(1,5);
            baris(1,2,5);
            baris(1,3,5);
            baris(1,4,5);
            baris(1,5);
            break;

        case "o" :
            baris(1,2,3,4,5);
            baris(1,5);
            baris(1,5);
            baris(1,5);
            baris(1,2,3,4,5);
            break;
            
        case "p" :
            baris(1,2,3,4);
            baris(1,4);
            baris(1,2,3,4);
            baris(1);
            baris(1);
            break;
        
        case "q" :
            baris(1,2,3,4);
            baris(1,4);
            baris(1,4);
            baris(1,3,4);
            baris(1,2,3,4,5);
            break;

        case "r" :
            baris(1,2,3,4);
            baris(1,4);
            baris(1,2,3,4);
            baris(1,3);
            baris(1,4);
            break;
        
        case "s" :
            baris(1,2,3,4);
            baris(1);
            baris(1,2,3,4);
            baris(4);
            baris(1,2,3,4);
            break;

        case "t" :
            baris(1,2,3,4,5);
            baris(3);
            baris(3);
            baris(3);
            baris(3);
            break;

        case "u" :
            baris(1,5);
            baris(1,5);
            baris(1,5);
            baris(1,5);
            baris(1,2,3,4,5);
            break;

        case "v" :
            baris(1,5);
            baris(1,5);
            baris(2,4);
            baris(3);
            baris()
            break;

        case "w" :
            baris(1,3,5);
            baris(1,3,5);
            baris(1,3,5);
            baris(1,3,5);
            baris(1,2,3,4,5)
            break;

        case "x" :
            baris(1,5);
            baris(2,4);
            baris(3);
            baris(2,4);
            baris(1,5)
            break;

        case "y" :
            baris(1,5);
            baris(2,4);
            baris(3);
            baris(3);
            baris(3)
            break;

        case "z" :
            baris(1,2,3,4,5);
            baris(4);
            baris(3);
            baris(2);
            baris(1,2,3,4,5)
            break;
            
        default:
            break;
    }
}

alphabet("c");
