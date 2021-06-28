class Human {
    constructor(name, address){
        this.name = name;
        this.address = address;
    }

    introduce(){
        console.log(`Hi, my name is ${this.name}`)
    }

    work(){
        console.log("Work!")
    }
}

class Programmer extends Human {
    constructor(name,address,programmingLanguage){
        super(name,address)
        this.programmingLanguage = programmingLanguage;
    }
    introduce(){
        super.introduce();
        console.log(`I can write `, this.programmingLanguages);
    }
    code(){
        console.log(
            "code some",
            this.programmingLanguages[
                Math.floor(Math.random() * this.programmingLanguages.length)
            ]
        )
    }
}


let sasa = new Human("Cirebon");
//console.log(sasa)
sasa.introduce();