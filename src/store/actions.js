/**
 * Created by aidenZou on 16/7/9.
 */

import * as types from './mutation-types'

const makeAction = (type) => {
  return ({dispatch}, ...args) => dispatch(type, ...args)
}

let index = 0
const initNote = () => {
  index++
  return {
    // id: +new Date(),
    id: index,
    title: 'title' + index,
    favorite: false,
    content: '内容' + index
  }
}

const initData = {
  list: [initNote(), initNote(), initNote()]
}
export const initStore = ({dispatch}) => dispatch(types.INIT_STORE, initData)

export const activeNoteHandler = makeAction(types.ACTIVE_NOTE)
export const editNoteHandler = makeAction(types.EDIT_NOTE)
