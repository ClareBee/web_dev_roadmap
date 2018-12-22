import Link from 'next/link';
import fetch from 'isomorphic-unfetch';

const Robots = (props) => {
  return (
    <div>
      <h1>Robots</h1>
      <Link href="/">
        <button>Home</button>
      </Link>
      <div>
        <ul>
          {
            props.robots.map(robot => (
              <li key={robot.id}>
                {robot.name}
              </li>
            )
            )
          }
        </ul>
      </div>
    </div>
  )
};

Robots.getInitialProps = async function(){
  const response = await fetch('https://jsonplaceholder.typicode.com/users');
  const data = await response.json();
  return {
    robots: data
  }
}
export default Robots;
