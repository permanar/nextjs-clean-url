
import fetch from 'isomorphic-unfetch';

const Post = props => (
  <>
    <h1>{props.show.name}</h1>
    <p>{props.show.summary.replace(/<[/]?[pb]>/g, '')}</p>
    <img src={props.show.image.medium} />
  </>
);

Post.getInitialProps = async function(context) {
  const { id_show } = context.query;
  const res = await fetch(`https://api.tvmaze.com/shows/${id_show}`);
  const show = await res.json();

  console.log(`Fetched show: ${show.name}`);

  return { show };
};

export default Post;