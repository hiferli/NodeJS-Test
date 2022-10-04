// // Common Script Method

// function Simple(principle , rate , time) {
//     console.log(`Simple interest is ${((principle * rate * time) / 100)}`)
//   }

// module.exports = Simple;


// // ES6 Method

export function Simple(principle , rate , time){
    console.log(`Simple Interest is ${((principle * rate * time) / 100)}`)
}

export function Compound(principle , rate , time , n){
    console.log(`Compound Interest is ${((principle * (1 + (Math.pow(rate / n) , time))) / 100)}`)
}