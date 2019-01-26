import React  from "react";
import BookCard from './bookcard';

const Main = (props) => { 

  const { UserByBook, peeps, books } = props;

    const bookCard = Object.keys(books).map((item) => { 
      return ( 
        <BookCard
        key={item}
        peeps = {peeps}
        usersWhoLikedBook={UserByBook[item]}
        BookInfo={books[item]}
      />
        
    )
  });



  return ( 
    <ul>{bookCard}</ul>
  )
}

export default Main;
