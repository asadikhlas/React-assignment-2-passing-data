import React from "react";
import PeepList from './peeplist';

const BookCard = (props) => { 
    const { peeps, usersWhoLikedBook, BookInfo } = props;

        return ( 
            <div key={BookInfo.id}>
                <h2>{BookInfo.name}</h2>
                <h3>Liked By:</h3>
                    <PeepList
                    usersWhoLikedBook={usersWhoLikedBook}
                    peeps={peeps} />
            </div>
        )    
}

export default BookCard;
