export const MODAL_TOGGLE = "MODAL_ISSHOW"

export function modalToggle(isModalShow) {
  return { type: MODAL_TOGGLE, isModalShow }
}
