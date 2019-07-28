/* eslint-disable no-console */
/* eslint-disable no-undef */
import Vue from 'vue/dist/vue.common.js'
import Demo from '../src/demo.vue'

Vue.config.productionTip = false
Vue.config.devtools = false

describe('Demo 组件测试', () => {
    it('存在', () => {
        expect(Demo).to.exist
    })

    describe('Demo 组件的基础功能测试', () => {
        it('.text 的文本为哈哈哈', () => {
            const Constructor = Vue.extend(Demo)
            const vm = new Constructor().$mount()
            expect(vm.$el.querySelector('.text').textContent).to.equal('哈哈哈')
        })
    })

    describe('Demo 组件的 props 测试', () => {
        it('.text 的属性值为呵呵呵', () => {
            const Constructor = Vue.extend(Demo)
            const vm = new Constructor({
                propsData: {
                    msg: '呵呵呵'
                }
            }).$mount()
            expect(vm.$el.querySelector('.text').getAttribute('data-msg')).to.equal('呵呵呵')
        })
        it('.demo 是否有 demo--error 的样式名', () => {
            const Constructor = Vue.extend(Demo)
            const vm = new Constructor({
                propsData: {
                    isError: true
                }
            }).$mount()
            expect(vm.$el.classList.contains('demo--error')).to.equal(true)
        })
        it('.text 的 opacity 样式', () => {
            // 放到页面中才会有样式
            const div = document.createElement('div')
            document.body.appendChild(div)
            const Constructor = Vue.extend(Demo)
            const vm = new Constructor({
                propsData: {
                    opacity: 0.5
                }
            }).$mount(div)
            const ele = vm.$el.querySelector('.text')
            expect(getComputedStyle(ele).opacity).to.equal('0.5')
        })
    })

    describe('Demo 组件的 slot 测试', () => {
        it('slot 测试', (done) => {
            Vue.component('xr-demo', Demo)

            let div = document.createElement('div')
            document.body.appendChild(div)
            div.innerHTML = `
                <xr-demo>
                    <p id="xr"></p>
                </xr-demo>
            `
            const vm = new Vue({
                el: div
            })
            setTimeout(() => { // 这是个异步的过程，如果眼睛和所见的内容不一样，那大部分是异步的锅
                let p = vm.$el.querySelector('#xr')
                expect(p).to.exist
                done()
            })
        })
    })

    describe('Demo 组件的 event 测试', () => {
        it('Demo 上的 click 事件', () => {
            const Constructor = Vue.extend(Demo)
            const vm = new Constructor().$mount()
        
            const callback = sinon.fake(); // 如何知道函数被调用
            vm.$on('click', callback)
            vm.$el.click()
            expect(callback).to.have.been.called
          })
    })
})