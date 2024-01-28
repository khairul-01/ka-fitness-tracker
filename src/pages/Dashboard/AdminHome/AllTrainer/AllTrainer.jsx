import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../../hooks/useAxiosSecure";


const AllTrainer = () => {
    const axiosSecure = useAxiosSecure();
    const { data: trainers = [] } = useQuery({
        queryKey: ['trainers'],
        queryFn: async () => {
            const res = await axiosSecure.get('/trainers');
            return res.data
        }
    })
    return (
        <div>
            <h1 className="text-3xl text-center py-3">All trainers</h1>
            <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Expertise</th>
                            <th>Role</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            trainers.map((subs, ind) => <tr key={subs._id}>
                                <th> {ind+1} </th>
                                <td> {subs.trainer} </td>
                                <td> {subs.expertise} </td>
                                <td>Trainer</td>
                                <td></td>
                            </tr>)
                        }
                        
                        
                    </tbody>
                </table>
        </div>
    );
};

export default AllTrainer;