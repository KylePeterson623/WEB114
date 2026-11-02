//Shelbie Peterson
//November 2nd, 2026
//WEB114
//Week 5 Homework: "Loops"

"use strict";

let crates = Number(prompt("How many crates would you like to scan?"));

if (crates == ""){
    alert("Cancelling Process.");
    console.log("Process Cancelled.");
}

else if (crates > 0){
    let fragileCrates = 0;
    let regCrates = 0;
    let susCrates = 0;

    for (let crate = 1; crate <= crates; crate++){
        if (crate % 5 == 0){
            console.log(`Crate #${crate}: Handle with care`);
            fragileCrates++;
        }

        else if (crate % 2 == 0){
            console.log(`Crate #${crate}: Load crate`);
            regCrates++;
        }

        else{
            console.log(`Crate #${crate}: Inspect crate`)
            susCrates++;
        }
    };

    console.log(`Crates scanned: ${crates}
    Fragile crates: ${fragileCrates}
    Regular crates: ${regCrates}
    Suspicious crates: ${susCrates}`);

    alert(`Crates scanned: ${crates}
    Fragile crates: ${fragileCrates}
    Regular crates: ${regCrates}
    Suspicious crates: ${susCrates}`);
}

else{
    alert("Invalid input. Please try again and enter a positive integer number.");
    console.log("Input error.");
}