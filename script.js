let change = document.getElementById('hd');
change.style.color = "green";
change.style.fontFamily = 'Arial'

class Car {
     constructor(brand, model, year){
        this.brand = brand;
        this.model = model;
        this.year =year;
     }
}

const Experience = new Car('Toyota',"Camry", 2020);
console.log(Experience.year)

const golap = {
    firstName:"Liton",
    lastName:"Mamun",
  
    // prof:   /// defoult valu hisebe kaj dorbe PROF
}

let {vad , vdf} = golap; // Destructuring ata k bole
console.log(v)