/**
 * 中间件
 * Created by aidenZou on 16/7/9.
 */

import createLogger from 'vuex/logger'

export default process.env.NODE_ENV !== 'production'
  ? [createLogger()]
  : []
