import {React} from 'react'
import Counter from './components/Counter'
import UserInput from './components/UserInput'

const Routes = [
    {
        path:"/counter",
        element: <Counter/>,
    },
    {
        path: "/userInput",
        element: <UserInput/>
    }
]

export default Routes