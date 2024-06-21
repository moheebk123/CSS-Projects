import propTypes from "prop-types";

function Link({ data }) {
  return (
    <a className="social-link" href={data.link} target="_blank">
      <img
        src={data.imgUrl}
        className={data.title === "LinkedIn" ? "linkedin-logo" : ""}
        alt={data.alt}
      />
      <span>{data.title}</span>
    </a>
  );
}

Link.propTypes = {
  data: propTypes.shape({
    title: propTypes.string.isRequired,
    link: propTypes.string.isRequired,
    imgUrl: propTypes.string.isRequired,
    alt: propTypes.string.isRequired,
  }).isRequired,
};

export default Link;
