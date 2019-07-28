/* eslint-disable no-undef */
import { add, multiply } from '../src/utils'

describe('工具函数测试', function() {
    it('求和函数测试', function() {
        let res = add(1, 1)
        expect(res).to.be.equal(2)
    })
    it('乘法函数测试', function() {
        let res = multiply(1, 1)
        expect(res).to.be.equal(1)
    })
})
