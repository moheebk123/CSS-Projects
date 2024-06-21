import Link from "../../components/Link";
import links from "../../data/links";
import "./style.css";

function LinkBox() {
  return (
    <div className="social-link-box">
      {links.map((link, index) => (
        <Link key={index} data={link} />
      ))}
    </div>
  );
}

export default LinkBox;
