import React from 'react'
import { useRoutes } from 'react-router'
import Index from '../Layouts'
import { Home } from '../../PAGES/Home/Home'

const MyRouter = () => {

    let myRoute = useRoutes([
        {
            path: '/',
            element : <Index/>, //Layout
            children: [
                {
                    element:<Home/>,
                    index : true,
                }
            ]     
           }
    ])

    return myRoute;

}

export default MyRouter