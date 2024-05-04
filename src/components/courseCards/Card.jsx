import React from 'react';

const Card = ({ price, currency,videoId,title ,strikePrice,percentage}) => {
  return (
    <div className="-mt-2 p-2">
      <div className="rounded-2xl bg-amber-500 pt-10 text-center ring-1 ring-inset ring-gray-900/5 lg:flex lg:flex-col lg:justify-center lg:pt-16">
        <div className="max-w-xl px-8">
          <div>
            <iframe width="100%" height="300px" src={`https://www.youtube.com/embed/${videoId}`} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
          </div>
          <p className=" text-2xl lg:text-4xl mt-3 font-semibold text-black">{title}</p>
          <p className="mt-6 flex items-baseline justify-center gap-x-2">
            <span className="text-3xl lg:text-5xl font-bold tracking-tight text-white line-through decoration-black">{strikePrice}</span>
            <span className="text-3xl lg:text-5xl font-bold tracking-tight text-gray-900">{price}</span>
            <span className="text-sm lg:text-md font-semibold leading-6 tracking-wide text-gray-900">{percentage}% OFF</span>
          </p>

          <div className="my-6 flex pb-3 lg:pb-0 items-center justify-center gap-x-6 lg:justify-between">
          <a
                href="#what-we-do"
                className="w-56 border-2 text-center rounded-md bg-transparent px-1 py-2 lg:px-3.5 lg:py-2.5 text-md lg:text-lg font-semibold text-gray-900 shadow-sm border-black hover:text-white hover:border-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
              >
                READ MORE
              </a>
              <a
                href="#what-we-do"
                className="w-56 border-2 border-transparent text-center rounded-md hover:bg-white px-1 py-2 lg:px-3.5 lg:py-2.5  text-md lg:text-lg  font-semibold hover:text-gray-900 shadow-sm bg-black text-amber-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
              >
                ADD TO CART
              </a>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
