import { PageWrapper } from 'components/general'
import Home from 'pages/home'
import 'react-loading-skeleton/dist/skeleton.css'
import 'styles/index.scss'

export default function App() {
  return (
    <PageWrapper>
      <Home />
    </PageWrapper>
  )
}
