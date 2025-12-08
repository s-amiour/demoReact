// For the Browse Jobs section
// Usually data will be fetched using JSON Server; but for now, we'll use hardcoded data from ../jobs.json
import { useState, useEffect } from "react";
import React from 'react'
import Job from "./Job.jsx";
import Spinner from "./Spinner.jsx";

const JobListings = ({ isHome = false }) => {
    // const jobListings = isHome ? jobs.slice(0, 3) : jobs;
    // useEffect will fetch from the json-server and will populate the state with the response from the API
    const [jobs, setJobs] = useState([]);
    const [loading, setLoading] = useState(true);

    // Whatever dep in the depList, whenever it changes, the useEffect is run.
    useEffect(() => {
        const fetchJobs = async () => {
            const apiUrl = isHome
                ? "/api/jobs?_limit=3"
                : "/api/jobs";
            try {
                const res = await fetch(apiUrl);
                const data = await res.json();
                setJobs(data)
            } catch (err) {
                console.log('Error fetching data', err);
            } finally {  // this block will always run, whether error or not.
                setLoading(false);
            }
        }

        fetchJobs()
    }, [])

    return (
        <section className="bg-blue-50 px-4 py-10">
            <div className="container-xl lg:container m-auto">
                <h2 className="text-3xl font-bold text-indigo-500 mb-6 text-center">
                    { isHome ? 'Browse Jobs' : 'Find the job that suits you' }
                </h2>

                {/* <!-- Job Listings --> */}
                {
                //     jobs.map((job) => {
                //         return (<Job title={job.title}
                //                      type={job.type}
                //                      description= {job.description}
                //                      location={job.location}
                //                      salary={job.salary}
                //                      company={job.company} />
                //         )
                //     }
                // key is used to distinguish each Job component by job.id
                }
                {/*Spinner*/}
                { loading ? (
                    <Spinner loading={loading}>Loading...</Spinner>
                    ) : (
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            {jobs.map((job) => (
                            <Job key={job.id} job={job} />
                            ))}
                        </div>
                    )
                }
            </div>
        </section>
    )
}
export default JobListings
