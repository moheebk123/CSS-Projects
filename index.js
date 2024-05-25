const container = document.getElementById("container");
const data = [
  {
    title: "Contact-Form",
    description: "Simple contact form for user details.",
  },
  {
    title: "Form",
    description: "Form which takes all types of details.",
  },
  {
    title: "Contact-Page",
    description: "Clone of MOZ contact page",
  },
  {
    title: "Icon-Hover",
    description: "Three types of hover effects on social icons.",
  },
  {
    title: "3D-Button",
    description: "3D button hover  hover effect.",
  },
  {
    title: "Grid-Gallery",
    description: "Gallery with light effect when hover on image.",
  },
  {
    title: "Expanding-Image",
    description: "Image expand's when hover.",
  },
  {
    title: "Video-in-Text",
    description: "Background video in text.",
  },
  {
    title: "3D-List",
    description: "3D list with hover effect.",
  },
  {
    title: "Timeline",
    description: "Timeline with cool animation for experience section.",
  },
  {
    title: "Background-Change",
    description: "A modern menu, when hover on menu item background changes.",
  },
  {
    title: "Couch-Animation",
    description:
      "Cool Couch animation on couch products, inspired from Couch design.",
  },
  {
    title: "UseabilityHub",
    description: "Clone of UseabilityHub homepage.",
  },
  {
    title: "Netflix",
    description: "Clone of Netflix homepage. Build using TailwindCSS.",
  },
  {
    title: "Dashboard",
    description: "User Dashboard panel for business to manage accounts. Build using Bootstrap.",
  },
];

const cardHTML = (title, description, imgUrl, codeLink, liveLink) => {
  return `<div class="card">
    <div class="top" style="background-image: url(${imgUrl});"></div>
    <div class="bottom">
    <h2>${title}</h2>
    <p>${description}</p>
    <div class="link-box">
      <a href=${codeLink} target="_blank">
        <button type="button">Code</button>
      </a>
      <a href=${liveLink} target="_blank">
        <button type="button">Live</button>
      </a>
    </div>
    </div>
  </div>
`;
};

data.forEach((cardData) => {
  const title = cardData.title;
  const description = cardData.description;
  const imgUrl = `./assets/${cardData.title}.png`;
  const codeLink = `https://github.com/moheebk123/HTML-CSS-Projects/tree/main/${cardData.title}`;
  const liveLink = `./${cardData.title}/index.html`;
  const card = cardHTML(title, description, imgUrl, codeLink, liveLink);
  container.insertAdjacentHTML("beforeend", card);
});
