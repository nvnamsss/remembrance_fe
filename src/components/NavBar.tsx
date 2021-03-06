import { FC } from "react";
import { Link } from "react-router-dom";

const NavBar: FC = () => {
    return (
        <div className="flex justify-between items-center my-7">
            <Link to="/" className="flex items-center gap-2">
                <img className="w-8 h-8" src="/icon.png" alt="" />
                <span className="text-xl font-medium">FilmHot</span>
            </Link>

            <Link className="block md:hidden" to="/search">
                <i className="fas fa-search text-2xl"></i>
            </Link>

        </div>
    );
};

export default NavBar;