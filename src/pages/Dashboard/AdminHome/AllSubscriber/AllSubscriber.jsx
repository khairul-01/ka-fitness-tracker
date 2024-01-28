
import { useQuery } from '@tanstack/react-query';
import useAxiosPublic from './../../../../hooks/useAxiosPublic';

const AllSubscriber = () => {
    const axiosPublic = useAxiosPublic();
    const { data: subscribers = [] } = useQuery({
        queryKey: ['subscriber'],
        queryFn: async () => {
            const res = await axiosPublic.get('/subscriber');
            return res.data
        }
    })
    const { data: users = [] } = useQuery({
        queryKey: ['users'],
        queryFn: async () => {
            const res = await axiosPublic.get('/users');
            return res.data;
        }
    })
    return (
        <div>
            <div className="overflow-x-auto">
                <h3 className="text-3xl font-bold text-center py-3">All Subscribers</h3>
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Role</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            subscribers.map((subs, ind) => <tr key={subs._id}>
                                <th> {ind+1} </th>
                                <td> {subs.name} </td>
                                <td> {subs.email} </td>
                                <td>Subscriber</td>
                            </tr>)
                        }
                        
                        
                    </tbody>
                </table>
                <br />
                <h3 className="text-3xl font-bold text-center py-3">All Users</h3>
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Role</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            users.map((subs, ind) => <tr key={subs._id}>
                                <th> {ind+1} </th>
                                <td> {subs.name} </td>
                                <td> {subs.email} </td>
                                <td>User</td>
                                <td></td>
                            </tr>)
                        }
                        
                        
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AllSubscriber;