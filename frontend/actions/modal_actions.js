export const OPEN_MODAL = "OPEN_MODAL";
export const CLOSE_MODAL = "CLOSE_MODAL";

const openModal = (modal) => ({
  type: openModal,
  modal: modal,
})

const closeModal = () => ({
  type: closeModal,
}) 