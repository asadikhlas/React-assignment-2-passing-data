import React from "react";

const PeepList = (props) => { 
  const { peeps, usersWhoLikedBook } = props;

    if (!usersWhoLikedBook || usersWhoLikedBook.length === 0) {
      return <p>None of the current users liked this movie.</p>;
    }

    const listofItems = usersWhoLikedBook.map(id => (
      <li key={id}>
        <p>{peeps[id].name}</p>
      </li>
    ));

    return <ul>{listofItems}</ul>;

}

export default PeepList;
