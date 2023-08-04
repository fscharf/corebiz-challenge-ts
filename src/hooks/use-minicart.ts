import { MinicartContext } from 'contexts/minicart'
import { useContext } from 'react'

export const useMinicart = () => useContext(MinicartContext)
