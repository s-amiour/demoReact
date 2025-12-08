// // Components are functions (classes deprecated) that perform functionality before
// // returning the xml to be rendered
// import React from 'react'
// // rafce: react arrow function component export
//
// // returns JSX SYNTAX
// // You can only return one element per function; that element (root / parent element)
// // can have many elements
//
// const App = () => {
//     const name = 'John Doe';
//     const names = ['John', 'Jane', 'Feb', 'Mar', 'April'];
//
//     return (
//         <>
//             <div className='text-red-500'>App</div>
//             <p>Hello {name}</p>
//             <ul>
//                 {
//                     names.map((name, index) => {
//                         <li key={index}>{name}</li>
//                     })
//                 }
//             </ul>
 //         </>
//     )
// }
// export default App

import {
    Route,  // to define route
    createBrowserRouter,  // create router in browser
    createRoutesFromElements,
    RouterProvider,  // provides router for routing; needed for <Route /> to work
} from 'react-router-dom'

import HomePage from './pages/HomePage'
import MainLayout from "./layouts/MainLayout";
import JobsPage from "./pages/JobsPage";
import NotFoundPage from "./pages/NotFoundPage.jsx";


let router = createBrowserRouter(
    createRoutesFromElements(
        // MainLayout is being applied
        <Route path='/' element={ <MainLayout /> }>  {/*index path*/}
            <Route index element={ <HomePage /> } />
            <Route path='/jobs' element={ <JobsPage /> } />
            <Route path='*' element={ <NotFoundPage /> } />  {/* The asterisk catches all pages */}
            {/*<Route path='/about'   element={ <HomePage /> } />*/}

        </Route>
    )
)

const App = () => {
//     return (
//         <>
//             <Navbar />
//             {/* You can pass in props (properties) by, as in HTML, specifying them in the tag.
//              Then, importing them in the respective component file */}
//             <Hero />
//             {/*It is still possible to have content inside a component elem.
//             However, I prefer to keep the App.jsx clear from any html tags. */}
//             {/* <Card/> */
//             /*      content */
//             /*  </Card> */}
//             <HomeCard />
//             <JobListings />
//             <ViewAllJobs />
//         </>
//     )
// }
    return <RouterProvider router={router}/>
}
export default App
