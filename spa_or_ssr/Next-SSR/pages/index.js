import Link from 'next/link';
const Index = () => (
  <div style={{ fontSize: '20px', color: "maroon" }}>
    <h1>SSR</h1>
    <Link href="/about"><a>About</a></Link>
  </div>
)

export default Index;
