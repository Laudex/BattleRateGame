import euroIcon from '../assets/icons/EUR.svg'
import usdIcon from '../assets/icons/USD.svg'
import rubIcon from '../assets/icons/RUB.svg'
import gbpIcon from '../assets/icons/Funt.svg'
import jpyIcon from '../assets/icons/YEN.svg'

const currencyArray = ["USD", "EUR", "RUB", "GBP", "JPY"]
const signs = ["<", ">", "<", ">"]

export const randomNumberInRange = (min, max) => {
    return Math.floor(Math.random() * (max - min)) + min
}

export const randomCurrency = () => {
    const currency = []
    const firstIndex = randomNumberInRange(0, 5)
    currency.push(currencyArray[firstIndex])
    let done = true
    while (done) {
        const secondIndex = randomNumberInRange(0, 5)
        if (secondIndex != firstIndex) {
            currency.push(currencyArray[secondIndex])
            done = false
        }
    }

    return currency
}

export const randomSign = () => {
    const signIndex = randomNumberInRange(0, 4)
    console.log(signIndex)
    return signs[signIndex]
}

export const getCurrencyIcon = (currencyName) => {
    switch (currencyName) {
        case 'EUR':
            return euroIcon
        case 'USD':
            return usdIcon
        case 'RUB':
            return rubIcon
        case 'GBP':
            return gbpIcon
        case 'JPY':
            return jpyIcon
    }
}

export const calculateBucketFinalValue = (number, rate) => {
    return number * ((1/rate).toFixed(2))
}

export const getCurrentDate = () => {
    const date = new Date()
    const currentYear = date.getFullYear()
    const currentMonth = new String(date.getMonth() + 1).padStart(2, "0")
    const currentDay= String(date.getDate()).padStart(2, '0');
    return `${currentYear}-${currentMonth}-${currentDay}`
}