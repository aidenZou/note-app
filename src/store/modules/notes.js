/**
 * 笔记
 */

import { set } from 'vue'

import {
  INIT_STORE,
  ACTIVE_NOTE,
  EDIT_NOTE
} from '../mutation-types'

const state = {
  count: 10,
  activeNote: null,
  list: []
}

const mutations = {
  // 初始化
  [INIT_STORE] (state, data) {
    // state.list = data.list
    // state.activeNote = data.list[0] || null

    set(state, 'list', data.list)
    state.activeNote = data.list[0] || null
  },
  // [ACTIVE_NOTE] (state, note) {
  [ACTIVE_NOTE] (state, note) {
    state.activeNote = note
  },
  // 修改笔记
  [EDIT_NOTE] (state, note) {
    state.activeNote = note
    // state.list.find(_note => _note.id === note.id).title = note.title
    // let upNote = state.list.find(_note => _note.id === note.id)
    // upNote = Object.assign({}, note)
    // upNote = note

    for (var i = 0; i < state.list.length; i++) {
      if (state.list[i].id === note.id) {
        state.list[i].title = note.title
        state.list[i].content = note.content
        // state.list[i] = note
        // set(state.list[i], note)
        // state.list[i] = { ...state.list[i], note }
        // state.list[i] = Object.assign({}, note)
        break
      }
    }
  }
}

export default {
  state,
  mutations
}
