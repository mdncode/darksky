const page = require ('../../pageObjects/searchPage')

describe('darksky', () => {
    it('current tempurature should be between low and high',  () => {
        page.open()
        page.search('10001')
        page.submit()
        browser.pause(2000)

        page.printLowTemp()
        page.printCurrentTemp()
        page.printHighTemp()
        expect(page.validateTemp()).toBe(true)
        browser.pause(2000)
    })
})