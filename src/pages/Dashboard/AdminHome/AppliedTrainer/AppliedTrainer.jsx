import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../../../../hooks/useAxiosPublic";


const AppliedTrainer = () => {
    const axiosPublice = useAxiosPublic();
    const {data: trainers=[]} = useQuery({
        queryKey: ['appliedTrainers'],
        queryFn: async () => {
            const res = await axiosPublice.get("/appliedTrainers");
            return res.data
        }
    })
    console.log(trainers.length);
    return (
        <div>
            <h1 className="text-5xl">This is applied trainer page.</h1>
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
                                <td> {subs.name} </td>
                                <td> {subs.skills[0]} </td>
                                <td>Trainer</td>
                                <td></td>
                            </tr>)
                        }
                        
                        
                    </tbody>
                </table>
        </div>
    );
};

export default AppliedTrainer;