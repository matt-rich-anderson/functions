// const calculateAgeInDogYears = (ageOfPerson) => {
//     const ageInDogYears = ageOfPerson / 7
//     return ageInDogYears
// }

// const dogAge = calculateAgeInDogYears(45)
// console.log(dogAge)

const petStringGenerator = (breed) => {
    if(breed != "meow") {
        const dogString = `My favorite dog breed is ${breed}.`
        return dogString
    }
    else {
        return "I like cats."
    }
}

const petString = petStringGenerator("meow")
console.log(petString)

// 1. Write a function named add that returns the sum of two numbers.
// 2. Log the result of the add function.
// 3. Modify the function to return the sum of three numbers.
// 4. If the values of 17, 4, and 11 are provided as arguments, then the function must evaluate to 32.

const add = (num1, num2, num3) => {
    const addOperation = num1 + num2 + num3
    return addOperation
}

const sum = add(4, 17, 11)
console.log(sum)

// 1. Create a function named go that takes 2 arguments:
//      i. direction (forwards, backwards, etc.)
//      ii. speed (mph).
// 2. The function, when invoked, will log out the following message format in the console:
//      i. The car is moving forwards at 45 mph.
//      ii. The car is moving backwards at 8 mph.
//      iii. The car is moving in circles at 12 mph.
// 3. Add a condition inside the function to check if the speed is greater than 75 mph. If it is, add an additional message of SLOW DOWN!
//      Example: The car is moving forward at 82 mph. SLOW DOWN!

const go = (direction, speed) => {
    let carString = `The car is moving ${direction} at ${speed} mph.`
    if (speed > 75) {
        carString += " Slow down!"
    }
    return carString
}
const carInfo = go("backwards", 98)
console.log(carInfo)