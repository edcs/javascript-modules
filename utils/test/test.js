import chai from 'chai'
import * as utils from '../src/utils'

const expect = chai.expect

describe('each() ', () => {
    const testObject = {
        one: 1,
        two: 2,
        three: 3
    }

    it('should iterate over every item in an object', () => {
        let total = 0

        utils.each(testObject, (val) => {
            total += val
        })

        expect(total).to.equal(6)
    })

    it('should break on `return: false`', () => {
        let total = 0

        utils.each(testObject, (val) => {
            total += val
            return false
        })

        expect(total).to.equal(testObject.one)
    })
})

describe('throttle() ', () => {
    it('should not fire callback more than once every x milliseconds', (done) => {
        let total = 0
        const limit = 60
        const callback = () => total++
        const throttled = utils.throttle(callback, limit)
        let keepFiring = setInterval(throttled, 10)

        setTimeout(() => {
            clearInterval(keepFiring)
            expect(total).to.be.below(17)
            done()
        }, 1000)
    })
})

describe('whenCalm() ', () => {
    it(`should not fire callback until it hasn't been called in x milliseconds`, (done) => {
        let total = 0
        const timeout = 200
        const callback = () => total++
        const calmCallback = utils.whenCalm(callback, timeout)

        calmCallback()
        expect(total).to.be.equal(0)

        setTimeout(() => {
            expect(total).to.be.equal(1)
            done()
        }, timeout)
    })
})