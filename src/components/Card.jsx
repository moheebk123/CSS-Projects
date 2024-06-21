import propTypes from "prop-types";

function Card({ data, imgUrl }) {
  const { title, description } = data;
  const codeLink = `https://github.com/moheebk123/HTML-CSS-Projects/tree/main/${data.title}`;
  const liveLink = `./projects/${title}/`;

  return (
    <div className="card">
      <div
        className="top"
        style={{ backgroundImage: `url(${imgUrl})` }}
      ></div>
      <div className="bottom">
        <h2>{title}</h2>
        <p>{description}</p>
        <div className="link-box">
          <a href={codeLink} target="_blank">
            <button type="button">Code</button>
          </a>
          <a href={liveLink} target="_blank">
            <button type="button">Live</button>
          </a>
        </div>
      </div>
    </div>
  );
}

Card.propTypes = {
  data: propTypes.shape({
    title: propTypes.string.isRequired,
    description: propTypes.string.isRequired,
  }).isRequired,
  imgUrl: propTypes.string.isRequired,
};

export default Card;
