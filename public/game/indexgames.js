class MiniGames {
    constructor(){
        console.log("Default")
    }

    GetRandom(){
        let rand = Math.floor(Math.random() * Math.floor(3));
        return rand;
        //console.log(rand);
    }
    MatchResult(a,b,c){
        if (a == b){
            console.log("Draw");
            return c = 0;
        } else if ((a == 0) && (b == 1)){
            console.log("You Lose !");
            return c = 1;
        } else if ((a == 0) && (b == 2)){
            console.log("You Win !");
            return c = 2;
        } else if ((a == 1) && (b == 0)){
            console.log("You Win !");
            return c = 2;
        } else if ((a == 1) && (b == 2)){
            console.log("You Lose!");
            return c = 1;
        } else if ((a == 2) && (b == 0)){
            console.log("You Lose!");
            return c = 1;
        } else if ((a == 2) && (b == 1)){
            console.log("You Win !");
            return c = 2;
        }
    }

}

class IconColor extends MiniGames{
    constructor(){
        super();
    };
    ColorIcon(id){
        let element = document.getElementById(id);
        element.style.backgroundColor ="grey";
    }
    ComIcon(id){
        let element = document.getElementById(id);
        element.style.backgroundColor ="grey";
        //document.body.append(element);
    }
    GetRandom(){
        super.GetRandom();
    }
    GetResult(hasil){
        let element = document.getElementById("demo");
        let myobj = document.getElementById("img1");
        myobj.remove();
        if (hasil == 0){
            element.innerText = "Draw";
            //document.body.append(element);
        } else if(hasil == 1){
            element.innerText = "You Lose !";
            //document.body.append(element);
        } else if(hasil == 2){
            element.innerText = "You Win !";
           // document.body.append(element);
        }
        
        
    }


}
function refresh() {
    window .location.reload();
}

function handleClick(id){
    let Hand = new MiniGames();
    let IconPlayer = new IconColor();
    let IconComputer = new IconColor();
    let com = Hand.GetRandom();
    let you = id;
    IconPlayer.ColorIcon(id);
    IconComputer.ComIcon(com+4);
    let final;
    let result = Hand.MatchResult(you,com,final);
    console.log(`you : ${you}`)
    console.log(`com : ${com}`)
    console.log(result);
    IconComputer.GetResult(result);
    window.setInterval('refresh()', 3000);


}