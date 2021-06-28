const HANDS = ["batu","kertas","gunting"];

function handleClick(id){
    console.log(id);
    let playerHand = HANDS[id];
    console.log(`Player Klik ${playerHand}` )
    document.getElementById("message").innerHTML = `Player Click ${playerHand}`
}

console.log("File JS Loaded");
document.getElementById("batu");