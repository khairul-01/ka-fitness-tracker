import { useState } from "react";
import { GrDislike, GrLike } from "react-icons/gr";
import useAuth from './../../hooks/useAuth';
import { useNavigate } from "react-router-dom";


const Vote = ({ post }) => {
    const { user } = useAuth();
    const [upVote, setUpVote] = useState(0);
    const [downVote, setDownVote] = useState(0);
    const navigate = useNavigate();

    const handleUpVote = () => {
        if (user) {
            const newVote = upVote + 1;
            setUpVote(newVote);
        }
        else {
            navigate('/login');
        }

    }
    const handleDownVote = () => {
        if (user) {
            const newVote = downVote + 1;
            setDownVote(newVote);
        }
        else {
            navigate('/login');
        }

    }

    return (
        <div>
            <div className="card w-96 mx-auto bg-base-100 shadow-xl ">

                <div className="card-body space-y-3">
                    <h2 className="card-title">
                        {post.posterName}

                    </h2>
                    <p>{post.content}</p>
                    <div className="card-actions justify-end">
                        <div onClick={handleUpVote} className="btn text-base"><GrLike /> Like {upVote}</div>

                        <div onClick={handleDownVote} className="btn text-base"><GrDislike /> Dislike {downVote}</div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Vote;