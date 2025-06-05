// import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
// import { ExampleWithRedux } from './ExampleWithRedux.tsx'
// import { Provider } from 'react-redux'
// import { store } from './store/store.ts'
import { createBrowserRouter, Outlet, RouterProvider } from 'react-router-dom'
import { Users } from './Users'
import { Navbar } from './Navbar'
import { SingleUser } from './SingleUser'

const router = createBrowserRouter([
    {
        path: '/',
        element: <><Navbar />
            <div style={{backgroundColor: 'yellow', margin: '20px'}}>
                <Outlet />
            </div></>,
        children: [{
            path: 'users/:id',
            element: <SingleUser />
        },{
            path: 'users',
            element: <Users />
        }, 
        {
            path: 'characters',
            element: <p>Characters</p>
        }]

    }
])



createRoot(document.getElementById('root')!).render(
// (<Provider store={store}>
//     <ExampleWithRedux />
// </Provider>)
<RouterProvider router={router} />
)

// const App2 = () => <div>Hello World</div>