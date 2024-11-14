import { useLoaderData } from "react-router-dom";
import NewsCard from "../components/NewsCard";

const CategoryNews = () => {
    const {data: news} = useLoaderData();
    return (
        <div>
            <h2 className="font-semibold mb-6">Dragon News Home ({news.length})</h2>
            <div>
                {news.map(singleNews => (
                    <NewsCard key={singleNews._id} news = {singleNews} />
                ))}
            </div>
        </div>
    );
};

export default CategoryNews;