import { Link, useLoaderData } from 'react-router-dom';
import Header from '../components/Header';
import RightNavbar from '../components/layout-component/RightNavbar';
import { FaArrowLeftLong } from 'react-icons/fa6';

const NewsDetails = () => {
    const data = useLoaderData();
    const news = data.data[0];

    return (
        <div>
            <header className="mb-6">
                <Header />
            </header>
            <min className="w-11/12 mx-auto grid grid-cols-12 gap-5">
                <section className="col-span-9">
                    <h2 className="font-semibold mb-3">Dragon News</h2>

                    <div className="card bg-base-100 shadow-xl">
                        <figure className="px-8 pt-8">
                            <img src={news?.image_url} alt="Shoes" className="rounded-xl" />
                        </figure>
                        <div className="card-body">
                            <h2 className="card-title">{news?.title}</h2>
                            <p className="text-justify pb-2">{news?.details}</p>
                            <div className="card-actions">
                                <Link to={`/category/${news?.category_id}`} className="btn bg-red-600 text-white text-base hover:bg-black">
                                    <span>
                                        <FaArrowLeftLong />
                                    </span>
                                    All news in this category
                                </Link>
                            </div>
                        </div>
                    </div>
                </section>
                <aside className="col-span-3">
                    <RightNavbar />
                </aside>
            </min>
        </div>
    );
};

export default NewsDetails;
