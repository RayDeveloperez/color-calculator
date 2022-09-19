const prompt = require('prompt-sync')({sigint: true});
console.log("Color Calculator")

console.log("Do you wish to Combine or Deconstruct a Color? ")
let decision = prompt("-->")


if (decision === "combine"){
    console.log("You have chose to combine 2 colors!")
    let color1 = prompt("Enter your first color: ")
    let color2 = prompt("Enter your second color: ")
    if (color1 === "blue" && color2 === "red" || color1 === "red" && color2 === "blue"){
        console.log(" The color combination is  ~PURPLE~")
    }else if  (color1 === "red" && color2 === "yellow" || color1 === "yellow" && color2 === "red" ){
            console.log(" The color combination is  ~ORANGE~")
    }else if  (color1 === "blue" && color2 === "yellow" || color1 === "yellow" && color2 === "blue" ){
            console.log(" The color combination is  ~GREEN~")       
    }else if  (color1 !== "red" || "blue"|| "yellow" || color2 !== "red" || "blue"|| "yellow"){
            console.log("~~~~~ERROR~~~~~") 

}
}

 if (decision  === "deconstruct"){
    console.log("You have chose to deconstruct a color!")
    let color3 = prompt("Enter the color you wish to deconstruct: ")
    if (color3 === "purple"){
        console.log("Your two primary colors are ~RED~ & ~BLUE~")
    } else if(color3 === "orange"){
        console.log("Your two primary colors are ~RED~ & ~YELLOW~")
    } else if(color3 === "green"){
        console.log("Your two primary colors are ~BLUE~ & ~YELLOW~")
    }else if(color3 !== "orange" || "green" || "purple"){
        console.log("~~~~ERROR~~~~")    
    }


 }
