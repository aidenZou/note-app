/**
 * Created by aidenZou on 16/7/9.
 */

// export const notes = state => state.notes.list
export const notes = (state) => {
  console.log('notes:')
  return state.notes.list
}
// export const activeNote = state => state.notes.activeNote
export const activeNote = (state) => {
  console.log(state.notes.activeNote)
  return state.notes.activeNote
}
export const countNote = state => state.notes.count
