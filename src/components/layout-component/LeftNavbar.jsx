import { useEffect, useState } from "react";

const LeftNavbar = () => {
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        fetch('https://openapi.programming-hero.com/api/news/categories')
            .then(res => res.json())
            .then(data => setCategories(data.data.news_category));
    }, [])


    // {
    //     "category_id": "01",
    //     "category_name": "Breaking News"
    //   },

    return (
        <div>
            <h2 className="font-semibold">All Caterogy ({categories.length})</h2>
            <div className="flex flex-col gap-2 mt-6">
                {categories.map(category => (
                    <button className="btn" key={category.ategory_id}>{category.category_name}</button>
                ))}
            </div>
        </div>
    );
};

export default LeftNavbar;