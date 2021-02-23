let colour = ['Pink', 'Blue', 'Red', 'Purple']
let living = ['House', 'Apartment', 'Farmhouse', 'Basement']
let numOfKids = ['Two', 'Four', 'Six', 'Eight']

const fortune = () => {
    let trueColour = colour(Math.floor(Math.random() * colour.length))
    let trueLiving = living(Math.floor(Math.random() * living.length))
    let trueNumOfKids = numOfKids(Math.floor(Math.random() * numOfKids.length))

    console.log(`Your fortune it is fair, your favourite colour will be ${trueColour}, you will live in a ${trueLiving}, and you will have ${trueNumOfKids} kids.`)
}
