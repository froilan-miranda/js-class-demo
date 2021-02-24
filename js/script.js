console.log('connected...')

class Pet{
    constructor(name, age, type){
        console.log(age)

        this.name = name
        this.setAge(+age)
        this.type = type

        console.log(this.age)
    }
    getDetails(){
        return `My name is ${this.name}, 
        I am a ${this.type} and I am ${this.age} years old`
    }
    setAge(age){
        if(typeof age === 'number' && age >= 0){
            this.age = age
        }else{
            this.age = 0
        }
    }
}

function processForm(event){
    event.preventDefault()
    
    // creating a new Pet object instance, and assigning the value captured from the form inputs
    const newPet = new Pet(inputName.value, inputAge.value, inputType.value)
    addToInventory(newPet)
   
    clearFormData()
    updateOutput()
}

function addToInventory(pet){
    console.log(pet)
    petInventory.push(pet)
}

function updateOutput(){

    // Using a for/of loop
    // let newPetData = ''
    
    // for(let pet of petInventory){
    //     newPetData += pet.getDetails()
    //     newPetData += '<br>'
    // }

    // Using an Array Iteration method
    let newPetData = petInventory.reduce((output, pet)=>pet.getDetails() + '<br>', '');

    petsOutput.innerHTML = newPetData
}

function clearFormData(){
    inputName.value = ''
    inputAge.value = ''
    inputType.value = ''
}

// this will hold all pets
var petInventory = []

// this is where we will display the current inventory of pets
var petsOutput = document.getElementById('pets')

// add the event listener for when the for is submitted
document.getElementById('myForm').addEventListener('submit', processForm)

// grab a reference to the input elements
let inputName = document.getElementById('name')
let inputAge = document.getElementById('age')
let inputType = document.getElementById('type')

