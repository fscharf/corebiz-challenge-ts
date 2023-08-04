import { NewsletterController } from 'controllers/newsletter'
import { INewsletter } from 'models/newsletter'
import { createContext, useState } from 'react'

type Props = {
  newsletterController: NewsletterController
} & React.PropsWithChildren

type State = {
  errors: INewsletterError
  requestData: INewsletter
  subscribe: () => void
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void
  isSubscribed: boolean
  reset: () => void
}

interface INewsletterError extends INewsletter {}

export const NewsletterContext = createContext({} as State)

export const NewsletterProvider = ({
  children,
  newsletterController
}: Props) => {
  const [isSubscribed, setIsSubscribed] = useState<boolean>(false)
  const [requestData, setRequestData] = useState<INewsletter>({} as INewsletter)
  const [errors, setErrors] = useState<INewsletterError>({} as INewsletterError)

  const isValidEmail = (email: string): boolean => {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
    return emailRegex.test(email)
  }

  const isValidName = (name: string): boolean => {
    const nameRegex = /^[A-Za-z\s]+$/
    return nameRegex.test(name)
  }

  const subscribe = () => {
    const errors = validateFields()
    setErrors(errors)

    if (Object.values(errors).every(error => error === '')) {
      newsletterController
        .subscribe({ name: requestData.name, email: requestData.email })
        .then(setIsSubscribed)
    }
  }

  const reset = () => {
    setRequestData({ email: '', name: '' })
    setIsSubscribed(false)
  }

  const validateFields = (): INewsletterError => {
    const { name, email } = requestData
    const errors: INewsletterError = { email: '', name: '' }

    if (!name || !isValidName(name)) {
      errors.name = 'Preencha com seu nome completo'
    }
    if (!email || !isValidEmail(email)) {
      errors.email = 'Preencha com um e-mail válido'
    }
    return errors
  }

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target
    setRequestData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  return (
    <NewsletterContext.Provider
      value={{
        isSubscribed,
        subscribe,
        handleChange,
        errors,
        requestData,
        reset
      }}
    >
      {children}
    </NewsletterContext.Provider>
  )
}
