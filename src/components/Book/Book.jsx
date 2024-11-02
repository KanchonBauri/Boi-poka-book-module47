import React from 'react';
import { Link } from 'react-router-dom';

const Book = ({ book }) => {
    const { bookId, bookName, image, tags, category } = book;
    return (
        <Link to={`/books/${bookId}`} >
            <div className='flex justify-center ' >
                <div className="card bg-base-100 w-96 shadow-xl">
                    <figure>
                        <img className='h-80 w-72 '
                            src={image}
                            alt="Shoes" />
                    </figure>
                    <div className="card-body">
                        <div className='flex justify-center  gap-10' >
                            {
                                tags.map((tag,index )=> <button className='btn btn-xs bg-green-200 px-4 text-green-800' key={index} >{tag}</button>)
                            }
                        </div>
                        <h2 className="card-title">
                            {bookName}
                            <div className="badge badge-secondary">NEW</div>
                        </h2>
                        <p>If a dog chews shoes whose shoes does he choose?</p>
                        {/* <div className='divider' ></div> */}
                        <div className=' border-t-2 my-2 border-dashed ' ></div>
                        <div className="card-actions justify-between">
                            <div className="badge badge-outline">{category}</div>
                            <div className="rating flex items-center gap-2 "><p className='text-2xl font-semibold ' >5.0</p>
                                <input type="radio" name="rating-1" className="mask mask-star" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Link>
    );
};

export default Book;