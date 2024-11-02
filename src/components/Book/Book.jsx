import React from 'react';

const Book = ({ book }) => {
    const { bookName, image,  } = book;
    return (
        <div className='flex justify-center ' >
            <div className="card bg-base-100 w-96 shadow-xl">
                <figure>
                    <img className='h-80 w-72 '
                        src={image}
                        alt="Shoes" />
                </figure>
                <div className="card-body">
                    <h2 className="card-title">
                        {bookName}
                        <div className="badge badge-secondary">NEW</div>
                    </h2>
                    <p>If a dog chews shoes whose shoes does he choose?</p>
                    <div className="card-actions justify-end">
                        <div className="badge badge-outline">Fashion</div>
                        <div className="badge badge-outline">Products</div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Book;