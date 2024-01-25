import { useQuery } from '@tanstack/react-query';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import useAxiosSecure from './../../hooks/useAxiosSecure';
import { Link } from 'react-router-dom';

const TrainerBooked = () => {
    const axiosSecure = useAxiosSecure();
    const { data: classes = [] } = useQuery({
        queryKey: ['classes'],
        queryFn: async () => {
            const res = await axiosSecure.get('/classes');
            return res.data
        }
    })

    const silverClasses = classes.filter(pack => pack.package_name === "Silver");
    const goldClasses = classes.filter(pack => pack.package_name === "Gold");
    const diamondClasses = classes.filter(pack => pack.package_name === "Diamond");

    return (
        <div>
            <h1 className="text-5xl text-center py-3">Trainer Booked Page</h1>

            <Tabs>
                <TabList >
                    <Tab>Silver</Tab>
                    <Tab>Gold</Tab>
                    <Tab>Diamond</Tab>
                </TabList>

                <TabPanel>
                    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3'>
                        {
                            silverClasses.map(silver => <div key={silver._id} className="card bg-base-100 shadow-xl">
                                <figure className="px-10 pt-10">
                                    <img src={silver.image} alt="Shoes" className="rounded-xl h-80" />
                                </figure>
                                <div className="card-body items-center text-center">
                                    <h2 className="card-title"> {silver.class_name} </h2>
                                    <p> {silver.description} </p>

                                </div>
                            </div>)
                        }
                    </div>
                    <div className='p-5'>
                        <Link to='/payment'><button className="btn btn-primary w-full">Join Now</button></Link>
                    </div>
                </TabPanel>
                <TabPanel>
                    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3'>
                        {
                            goldClasses.map(silver => <div key={silver._id} className="card bg-base-100 shadow-xl ">
                            <figure className="px-10 pt-10">
                                <img src={silver.image} alt="Shoes" className="rounded-xl h-80" />
                            </figure>
                            <div className="card-body items-center text-center">
                                <h2 className="card-title"> {silver.class_name} </h2>
                                <p> {silver.description} </p>

                            </div>
                        </div>)
                        }
                    </div>
                    <div className='p-5'>
                        <button className="btn btn-primary w-full">Join Now</button>
                    </div>
                </TabPanel>
                <TabPanel>
                    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3'>
                        {
                            diamondClasses.map(silver => <div key={silver._id} className="card bg-base-100 shadow-xl">
                            <figure className="px-10 pt-10">
                                <img src={silver.image} alt="Shoes" className="rounded-xl h-80" />
                            </figure>
                            <div className="card-body items-center text-center">
                                <h2 className="card-title"> {silver.class_name} </h2>
                                <p> {silver.description} </p>

                            </div>
                        </div>)
                        }

                    </div>
                    <div className='p-5'>
                        <button className="btn btn-primary w-full">Join Now</button>
                    </div>
                </TabPanel>
            </Tabs>
        </div>
    );
};

export default TrainerBooked;