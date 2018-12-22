import Link from  'next/link';
import Image from '../components/image';

const About = () => (
  <div style={{fontSize: '20px', color: "teal"}}>
    <h1>About</h1>
    <Link href="/index"><a>Index</a></Link>
    <Image />
  </div>
);

export default About;
