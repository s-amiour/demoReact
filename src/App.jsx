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


import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import HomeCard from './components/HomeCard.jsx'
import JobListings from "./components/JobListings.jsx";
import ViewAllJobs from "./components/ViewAllJobs.jsx";

const App = () => {
    return (
        <>
            <Navbar />
            {/* You can pass in props (properties) by, as in HTML, specifying them in the tag.
             Then, importing them in the respective component file */}
            <Hero />
            {/*It is still possible to have content inside a component elem.
            However, I prefer to keep the App.jsx clear from any html tags. */}
            {/* <Card/> */
            /*      content */
            /*  </Card> */}
            <HomeCard />
            <JobListings />
            <ViewAllJobs />
        </>
    )
}
export default App
