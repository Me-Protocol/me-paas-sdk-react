import { Props } from './types'

export const payWithMePaas = ({
  apiKey,
  amount,
  email,
  onClose,
  onSuccess,
  onError
}: Props) => {
  const link = 'http://localhost:3000/'

  // Validate parameters
  if (!apiKey || !amount || !email) {
    if (onError) onError('Missing required parameters.')
    return
  }

  // Create the modal
  const createModal = () => {
    const modal = document.createElement('div')
    const modalContent = document.createElement('div')
    const iframe = document.createElement('iframe')

    // Apply base styles for modal overlay
    Object.assign(modal.style, {
      position: 'fixed',
      top: '0',
      left: '0',
      width: '100vw',
      height: '100vh',
      backgroundColor: 'rgba(0, 0, 0, 0.5)',
      zIndex: '9999',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      opacity: '0',
      visibility: 'hidden'
      //   transition: 'opacity 0.5s ease'
    })

    // Apply content styles
    Object.assign(modalContent.style, {
      position: 'relative',
      width: '400px',
      height: '550px',
      backgroundColor: '#fff',
      borderRadius: '32px',
      overflow: 'hidden',
      boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)',
      transition: 'width 0.3s ease, height 0.3s ease'
    })

    // Apply styles for mobile view (full screen modal)
    if (window.innerWidth <= 768) {
      Object.assign(modalContent.style, {
        width: '100vw',
        height: '100vh',
        borderRadius: '0'
      })
    }

    // Create iframe
    iframe.src = `${link}?apiKey=${encodeURIComponent(
      apiKey
    )}&amount=${encodeURIComponent(amount)}&email=${encodeURIComponent(email)}`
    Object.assign(iframe.style, {
      width: '100%',
      height: '100%',
      border: 'none'
    })
    iframe.allow = 'payment'
    modalContent.appendChild(iframe)

    // Append modal content to modal overlay
    modal.appendChild(modalContent)
    document.body.appendChild(modal)

    // Display the modal
    setTimeout(() => {
      modal.style.opacity = '1'
      modal.style.visibility = 'visible'
    }, 10)

    // Handle iframe postMessage for success and error events
    window.addEventListener('message', (event) => {
      if (event.origin !== new URL(link).origin) return
      if (event.data.status === 'success' && onSuccess) {
        onSuccess(event.data.hash)
        closeModal(modal)
      } else if (
        event.data.status === 'error' &&
        event.data.message &&
        onError
      ) {
        onError(event.data.message)
      } else if (event.data.status === 'close') {
        closeModal(modal)
      }
    })
  }

  // Close modal logic
  const closeModal = (modal: HTMLElement) => {
    modal.style.opacity = '0'
    setTimeout(() => {
      document.body.removeChild(modal)
      if (onClose) onClose()
    }, 500)
  }

  // Open the modal
  createModal()
}
