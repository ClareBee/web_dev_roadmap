import React from 'react';

const Card = ({ name, email, index }) => {
  return (
    <div className="tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5">
      <img src={`https://robohash.org/${index}?size=200x200`} alt="robot" />
      <div>
        <h2 className="f3">{name}</h2>
        <p>{email}</p>
      </div>
    </div>
  );
}

export default Card;
