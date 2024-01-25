import { useEffect, useState } from "react";
import PageTitle from "./PageTiltle/PageTitle";
import { Helmet } from "react-helmet-async";


const Gallery = () => {
    const [images, setImages] = useState([]);
    const [hasMore, setHasMore] = useState(true);
    const [loading, setLoading] = useState(false);
    const [page, setPage] = useState(1); // Initial page

    // const response = await fetch(`http://localhost:5000/images?page=${page + 1}`);
    const fetchMoreImages = async () => {
        try {
            setLoading(true);
            const response = await fetch(`http://localhost:5000/images?page=${page + 1}`);
            const newImages = await response.json();
            console.log(newImages);
            if (newImages.length === 0) {
                setHasMore(false);
            } else {
                setImages([...images, ...newImages]);
                setPage(page + 1);
            }
        } catch (error) {
            console.error("Error fetching more images:", error);
        } finally {
            setLoading(false);
        }
    };


    useEffect(() => {
        const handleScroll = () => {

            if (
                window.innerHeight + document.documentElement.scrollTop ===
                document.documentElement.offsetHeight
            ) {
                if (!loading && hasMore) {
                    fetchMoreImages();
                }
            }
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, [loading, hasMore]);


    return (
        <div>
            <Helmet>
                <title>KA Fitness Tracker | Gallery</title>
            </Helmet>
            <div className=" bg-fixed" style={{ backgroundImage: 'url(https://i.ibb.co/Bjvp2xD/7821-jpg-wh1200.jpg)' }}>
                <PageTitle></PageTitle>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-11 mt-11">
                    {images.map((image) => (
                        <div key={image._id} >
                            <img src={image.image} className="w-[400px] h-[300px]" alt={image.description} />
                        </div>
                    ))}
                    {loading && <p>Loading...</p>}
                </div>

            </div>
        </div>
    );
};

export default Gallery;