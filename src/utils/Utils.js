const currencyArray = ["USD", "EUR", "KZT", "GBP", "JPY"]

export const randomNumberInRange = (min, max) => {
    return Math.floor(Math.random() * (max - min)) + min
}

export const randomCurrency = () => {
    const currency = []
    const firstIndex = randomNumberInRange(0, 4)
    currency.push(currencyArray[firstIndex])
    let done = true
    while (done) {
        const secondIndex = randomNumberInRange(0, 4)
        if (secondIndex != firstIndex) {
            currency.push(currencyArray[secondIndex])
            done = false
        }
    }

    return currency
}