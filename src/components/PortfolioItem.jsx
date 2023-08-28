import React from "react";

const PortfolioItem = ({ title, imgUrl, stack, link, theme }) => {
    return (
        <div className="border-2 border-stone-600 rounded-lg overflow-hidden">
            <a href={link} target="_blank">
                <img
                    src={imgUrl}
                    alt="Portfolio item"
                    className="w-full h-36 md:h-48 object-cover cursor-pointer"
                />
            </a>
            <div className="w-full p-4">
                <h3 className="text-lg md:text-xl mb-2 md:mb-3 font-semibold">{title}</h3>
                <p className="flex flex-wrap gap-2 flex-row items-center justify-start text-xs md:text-sm">
                    {stack.map(item => (
                        <a href={`https://www.google.com/search?q=${item}`} target="_blank" className={`inline-block px-2 py-1 font-semibold border-2 border-stone-900 rounded-md ${theme == "light" ? "hover:bg-stone-900 hover:text-white" : "hover:bg-white hover:text-stone-900"}`}>
                            {item}
                        </a>
                    ))}
                </p>
            </div>
        </div >
    );
};

export default PortfolioItem;
