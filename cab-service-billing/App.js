let prompt = require("prompt-sync")()

class CabService{
    constructor(){
        this.car_type = ""
        this.bill = this.km = 0.0
    }

    accept(){
        this.car_type = prompt("Enter car type Ac/Non-ac")
        this.km = Number(prompt("enter km travelled"))
    }

    calculate(){
        if(this.car_type==="Ac"){
            if(this.km<=5) this.bill = 150;
            else this.bill=150 + ((this.km-5) *10)
        }else if(this.car_type==="Non-ac"){
            if(this.km<=5) this.bill = 120;
            else this.bill=120 + ((this.km-5) *8)
        }
    }

    display(){
        console.log("car type:"+ this.car_type)
        console.log("km travelled:" + this.km)
        console.log("total bill" +this.bill)
    }
}

let obj = new CabService()

obj.accept()
obj.calculate()
obj.display()


