/**
 * Created by aidenZou on 16/7/9.
 * State（状态）
 * Mutations（变更）
 * Actions（动作）
 * middlewares（中间件）
 *
 * 切记：
 *     组件永远都不应该直接改变 Vuex store 的状态
 *     mutation 必须是同步函数
 *     在 Vuex 中，我们将全部的改变都用同步方式实现。我们将全部的异步操作都放在Actions中。
 *
 *     Actions 除了分发 mutations 应当尽量避免其他副作用
 *
 *     一个中间件默认会接受到原本的 state 对象，但中间件通常用于 debugging 或是数据持久化, 它们是 不允许改变 state 的。
 */

import Vue from 'vue'
import Vuex from 'vuex'
import middlewares from './middlewares'

// 导入各个模块的初始状态和 mutations
import notes from './modules/notes'

Vue.use(Vuex)

const debug = process.env.NODE_ENV !== 'production'
Vue.config.debug = debug

/**
 * 创建 store 实例
 * 严格模式（在生产环境中关闭严格模式）
 * strict: true, // 开启严格模式（每当 Vuex state 在 mutation handlers 外部被改变时都会抛出错误。）
 * strict: process.env.NODE_ENV !== 'production', // 通过配置构建工具来将其自动化
 */
export default new Vuex.Store({
  strict: debug,
  middlewares,  // 中间件
  modules: {
    notes
  }
})
