import React from 'react';
import { useParams } from 'react-router-dom';

const BookDetails = () => {

const param = useParams();
console.log(param)
const {bookId} = useParams();
console.log(bookId)

    return (
        <div>
            <h2>book details</h2>
        </div>
    );
};

export default BookDetails;