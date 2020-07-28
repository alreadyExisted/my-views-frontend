import { BrowserRouter } from 'react-router-dom'
import { Pages } from '@app/pages'

function AppComponent() {
  return (
    <BrowserRouter>
      <Pages />
    </BrowserRouter>
  )
}

// eslint-disable-next-line @typescript-eslint/no-var-requires
export const App = IS_DEV ? require('react-hot-loader/root').hot(AppComponent) : AppComponent
