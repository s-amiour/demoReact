// For the Browse Jobs section
// Usually data will be fetched using JSON Server; but for now, we'll use hardcoded data from ../jobs.json
import jobs from "../jobs.json";
import React from 'react'
import Job from "./Job.jsx";

const JobListings = () => {
    const recentJobs = jobs.slice(0, 3);

    return (
        <section className="bg-blue-50 px-4 py-10">
            <div className="container-xl lg:container m-auto">
                <h2 className="text-3xl font-bold text-indigo-500 mb-6 text-center">
                    Browse Jobs
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {/* <!-- Job Listings --> */}
                    {
                        // jobs.map((job) => {
                        //     return (<Job title={job.title}
                        //                  type={job.type}
                        //                  description={job.description}
                        //                  location={job.location}
                        //                  salary={job.salary}
                        //                  company={job.company} />
                        //     )
                        // }
                    // key is used to distinguish each Job component by job.id
                    recentJobs.map((job) => {
                        return <Job key={job.id} job={job} />
                    })
                    }
                </div>
            </div>
        </section>
    )
}
export default JobListings
