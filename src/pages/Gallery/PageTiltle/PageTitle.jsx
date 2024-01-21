
import { useEffect, useState } from "react";
import useAxiosSecure from "../../../hooks/useAxiosSecure";

const PageTitle = () => {
    const axiosSecure = useAxiosSecure();
    const [gallery, setGallery] = useState([]);

    useEffect(()=>{
        axiosSecure.get("/gallery")
        .then((res) => {
            setGallery(res.data)
        })
    },[])
    console.log(gallery);

    return (
        <div>
            <div className="hero min-h-screen" style={{backgroundImage: 'url(https://i.ibb.co/Bjvp2xD/7821-jpg-wh1200.jpg)'}}>
                <div className="hero-content text-center">
                    <div className="max-w-md">

                        <h1 className="text-5xl text-accent font-bold">Welcome to</h1>
                        <h1 className="text-9xl text-secondary font-bold">Gallery Page</h1>
                        
                    </div>
                </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-11 mt-11">
                {gallery.map((image) => (
                    <div key={image._id} >
                        <img src={image.image} className="w-[400px] h-[300px]" alt={image.description} />
                    </div>
                ))}
                
            </div>
        </div>
    );
};

export default PageTitle;