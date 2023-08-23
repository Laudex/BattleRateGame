import euroIcon from '../assets/icons/european-union.png'
import usdIcon from '../assets/icons/united-states.png'
import kztIcon from '../assets/icons/kazakhstan.png'
import gbpIcon from '../assets/icons/united-kingdom.png'
import jpyIcon from '../assets/icons/japan.png'

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

export const getCurrencyIcon = (currencyName) => {
    switch (currencyName) {
        case 'EUR':
            return euroIcon
        case 'USD':
            return usdIcon
        case 'KZT':
            return kztIcon
        case 'GBP':
            return gbpIcon
        case 'JPY':
            return jpyIcon
    }
}