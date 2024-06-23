const container = document.getElementById("container");
const socialLinkBox = document.getElementById("social-link-box");

const projects = [
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
    title: "Splash-Image",
    description: "Splash Image.",
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
    description:
      "User Dashboard panel for business to manage accounts. Build using Bootstrap.",
  },
];
const links = [
  {
    title: "Code",
    link: "https://github.com/moheebk123/CSS-Projects",
    alt: "Code Logo",
  },
  {
    title: "GitHub",
    link: "https://github.com/moheebk123",
    alt: "GitHub Logo",
  },
  {
    title: "LinkedIn",
    link: "https://www.linkedin.com/in/moheebkhan/",
    alt: "LinkedIn Logo",
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

const linkHTML = (title, link, imgUrl, alt) => {
  return `<a
      class="social-link"
      href=${link}
      target="_blank"
      rel="noopener noreferrer"
    >
      <img
        src=${imgUrl}
        class=${title === "LinkedIn" ? "linkedin-logo" : ""}
        alt=${alt}
      />
      <span>${title}</span>
    </a>
`;
}

links.forEach((linkData) => {
  const { title, link, alt } = linkData;
  const imgUrl = `./assets/${title}.webp`;
  const linkElement = linkHTML(title, link, imgUrl, alt);
  socialLinkBox.insertAdjacentHTML("beforeend", linkElement);
});

projects.forEach((project) => {
  const { title, description } = project
  const imgUrl = `./assets/${title}.webp`;
  const codeLink = `https://github.com/moheebk123/CSS-Projects/tree/main/projects/${title}`;
  const liveLink = `./projects/${title}/`;
  const card = cardHTML(title, description, imgUrl, codeLink, liveLink);
  container.insertAdjacentHTML("beforeend", card);
});
