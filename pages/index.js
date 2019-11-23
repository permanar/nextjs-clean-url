
import Link from 'next/link';
import fetch from 'isomorphic-unfetch';

const Index = props => (
  
  <>
    <h1>Batman TV Shows</h1>
    <ul>
      {props.shows.map(show => (
        <li key={show.id}>
          <Link href="/p/[id]" as={`/p/${slugify(show.name, {lower: true,remove: /[*+~.()'"!:@]/g} )}`}>
            <a>{show.name}</a>
          </Link>
        </li>
      ))}
    </ul>
  </>
);

Index.getInitialProps = async function() {
  const res = await fetch('https://api.tvmaze.com/search/shows?q=batman');
  const data = await res.json();

  console.log(`Show data fetched. Count: ${data.length}`);

  return {
    shows: data.map(entry => entry.show)
  };
};
var slugify = require('slugify')
export default Index;