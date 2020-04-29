// import mainPage from './mainPage'
const mainPage = require ('./mainPage')

let low, current, high, actual, str, arr
class page extends mainPage {
    get searchInput() { return $('#searchForm input:nth-child(2)') }
    get searchSubmit() { return $('.searchButton') }
    get currentTemp() { return $('.summary.swap') }
    get lowTemp() { return $('.low-temp-text') }
    get highTemp() { return $('.high-temp-text') }

    open() {
        super.open('https://darksky.net/')
    }

    search(param) {
        this.searchInput.setValue(param)
    }

     submit() {
         this.searchSubmit.click()
    }

    printCurrentTemp() {
        arr = this.currentTemp.getText().split(' ')
        str = arr[0].toString()
        current = str.slice(0, str.length -1) 
        console.log(current)
        return current
    }

    printLowTemp() {
        str = this.lowTemp.getText()
        low = str.slice(0, str.length -1)
        console.log(low)
        return low
    }

    printHighTemp() {
        str = this.highTemp.getText()
        high = str.slice(0, str.length -1)
        console.log(high)
        return high
    }

    validateTemp() {
        if ((current - low >= 0) && (high - current >= 0)){
            actual = true
        }
        return actual
    }
}

module.exports = new page()