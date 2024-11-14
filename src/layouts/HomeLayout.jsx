import { Outlet } from 'react-router-dom';
import Header from '../components/Header';
import LatestNews from '../components/LatestNews';
import LeftNavbar from '../components/layout-component/LeftNavbar';
import RightNavbar from '../components/layout-component/RightNavbar';
import Navbar from '../components/Navbar';

const HomeLayout = () => {
    return (
        <div className="font-poppins">
            <header>
                <Header />
                <section className="w-11/12 mx-auto py-2">
                    <LatestNews />
                </section>
            </header>

            <nav className="w-11/12 mx-auto py-4">
                <Navbar />
            </nav>

            <main className="w-11/12 mx-auto pt-5 grid md:grid-cols-12 gap-3">
                {/* left aside */}
                <aside className="col-span-3">
                    <LeftNavbar />
                </aside>

                <section className="col-span-6">
                    <Outlet />
                </section>

                {/* right aside */}
                <aside className="col-span-3">
                    <RightNavbar />
                </aside>
            </main>
        </div>
    );
};

export default HomeLayout;
