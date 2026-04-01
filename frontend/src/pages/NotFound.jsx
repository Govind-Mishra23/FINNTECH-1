import React from "react";
import { Link } from "react-router-dom";
import { FaHome, FaExclamationTriangle } from "react-icons/fa";

const NotFound = () => {
    return (
        <div className="min-h-[80vh] flex flex-col items-center justify-center text-center px-4">
            <div className="bg-gradient-to-br from-gray-50 to-gray-100 p-8 sm:p-12 rounded-3xl shadow-xl border border-gray-100 max-w-lg w-full transform hover:scale-105 transition-transform duration-300">
                <div className="mb-6 animate-bounce">
                    <FaExclamationTriangle className="text-6xl sm:text-7xl text-yellow-500 mx-auto" />
                </div>

                <h1 className="text-6xl sm:text-8xl font-black text-gray-900 mb-2 drop-shadow-sm">
                    404
                </h1>

                <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-4">
                    Page Not Found
                </h2>

                <p className="text-gray-600 mb-8 max-w-md mx-auto leading-relaxed">
                    Oops! The page you are looking for doesn't exist or has been moved.
                    Let's get you back on track.
                </p>

                <Link
                    to="/"
                    className="inline-flex items-center gap-2 bg-gradient-to-r from-gray-800 to-gray-900 text-white px-8 py-4 rounded-xl font-bold text-lg hover:from-gray-900 hover:to-black transition-all duration-300 shadow-lg hover:shadow-xl group"
                >
                    <FaHome className="group-hover:-translate-y-1 transition-transform duration-300" />
                    Go Back Home
                </Link>
            </div>
        </div>
    );
};

export default NotFound;
