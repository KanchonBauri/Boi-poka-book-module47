import React from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import { addToStoredReadList } from '../../Utility/addToDB';

const BookDetails = () => {

    // const param = useParams();
    // console.log(param)
    const { bookId } = useParams();
    const data = useLoaderData();
    const id = parseInt(bookId);

    const book = data.find(book => book.bookId === id);
    console.log(data, id, book)

    const { bookName, image, author, review, category, } = book;


    const handleMarkAsList = (id) => {



        addToStoredReadList (id)
    }

    return (
        <div>
            <div className="hero bg-base-200 min-h-screen">
                <div className="hero-content  flex-col lg:flex-row">
                    <div className='w-6/12 flex justify-center '>
                        <img
                            src={image}
                            className="max-w-sm rounded-lg shadow-2xl" />
                    </div>
                    <div className='w-6/12'>
                        <h1 className="text-5xl font-bold">{bookName}</h1>
                        <p className='text-2xl py-5' >By : {author}</p>
                        <p className='text-[20px]'>{category}</p>
                        <p className="py-6">
                            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
                            quasi. In deleniti eaque aut repudiandae et a id nisi.
                        </p>
                        <button onClick={ () => handleMarkAsList (bookId) } className="btn btn-outline mr-4 btn-accent ">Mark as Read</button>
                        <button className="btn btn-accent">Add to Wish List</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BookDetails;