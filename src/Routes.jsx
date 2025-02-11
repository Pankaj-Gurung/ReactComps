import {React} from 'react'
import Counter from './components/Counter'
import UserInput from './components/UserInput'
import Button from './components/Button'

const Routes = [
    {
        path:"/counter",
        element: <Counter/>,
    },
    {
        path: "/userInput",
        element: <UserInput/>
    },
    {
        path: '/button',
        element: <Button/>
    }
    
]

export default Routes