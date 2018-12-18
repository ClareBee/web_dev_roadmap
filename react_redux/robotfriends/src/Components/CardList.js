import React from 'react';
import Card from './Card';

const CardList = (props) => {
  return (
    props.robots.map(robot => <Card key={robot.name}
      index={robot.id}
      name={robot.name}
      username={robot.username}
      email={robot.email} />
    )
  );
}

export default CardList;
