// import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { ExampleWithRedux } from './ExampleWithRedux.tsx'
import { Provider } from 'react-redux'
import { store } from './store/store.ts'



createRoot(document.getElementById('root')!).render(
(<Provider store={store}>
    <ExampleWithRedux />
</Provider>)
)

// const App2 = () => <div>Hello World</div>