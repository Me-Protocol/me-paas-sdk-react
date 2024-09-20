export interface EventResponse {
  status: 'success' | 'error' | 'close'
  data: any
}

export interface Props {
  apiKey: string
  amount: string
  email: string
  onClose?: () => void
  onSuccess?: (hash: string) => void
  onError?: (message: string) => void
}
