import { NewsletterContext } from 'contexts/newsletter'
import { useContext } from 'react'

export const useNewsletter = () => useContext(NewsletterContext)
