// Courses
const courses = [
  {
    chapters: 17,
    name: "Solana Development Course",
    desc: "Quickstart your Solana development starting from nothing to complex programs.",
    imgLink: "img/courses/solana-development.png",
  },
  {
    chapters: 14,
    name: "Buildspace",
    imgLink: "img/courses/build-space.png",
  },
  {
    chapters: 12,
    name: "Solana Bytes",
    imgLink: "img/courses/solana-bytes.png",
  },
  {
    chapters: 1,
    name: "Scaffold Series",
    imgLink: "img/courses/scaffold-series.png",
  },
  {
    chapters: 3,
    name: "Freecodecamp Solana Course",
    imgLink: "img/courses/freecodecamp.png",
  },
  {
    chapters: 167,
    name: "Solana Development by Knox",
    imgLink: "img/courses/development-knox.png",
  },
  {
    chapters: 8,
    name: "Solana Bootcamp",
    imgLink: "img/courses/solana-bootcamp.png",
  },
]

function templateForCourse(course) {
  return `
    <a class="course">
      <p>${course.chapters}</p>  
      <h3>${course.name}</h3>
      ${course.desc ? `<p>${course.desc}</p>` : ""}
    </a>
  `
}

const coursesDiv = document.querySelector(".courses")

courses.forEach((course) => {
  coursesDiv.innerHTML += templateForCourse(course)
})

// Resources
const resources = [
  {
    name: "Core Documentation",
    desc: "The official Solana documentation on developing, validators, SPL tokens, wallets and more.",
  },
  {
    name: "Solana Cookbook",
    desc: "The Solana Cookbook is a developer resource that provides the essential concepts and references for building applications on Solana.",
  },
  {
    name: "Solana Stack Exchange",
    desc: "Solana Stack Exchange is a question and answer site for Solana software users and developers.",
  },
  {
    name: "Solana Playground",
    desc: "Easily build, deploy and test Solana programs and smart contracts from a browser IDE.",
  },
  {
    name: "create-solana-dapp",
    desc: "Get up and running fast with Solana dApps, generate a project template in seconds.",
  },
  {
    name: "Anchor Docs",
    desc: "Anchor is a framework for Solana's Sealevel runtime providing several convenient developer tools for writing smart contracts.",
  },
  {
    name: "Solana Program Library",
    desc: "The Solana Program Library (SPL) is a collection of on-chain programs targeting the Sealevel parallel runtime.",
  },
  {
    name: "Program Examples",
    desc: "A list of curated examples for a wide range of use cases implemented using on-chain programs.",
  },
]

function templateForRecources(resource) {
  return `
    <div class="resource">
      <p>tool / library</p>
      <h3>${resource.name}</h3>
      <h4>${resource.desc}</h4>

      <a>
        <p>Learn More</p>
        <img src=""/>
      <a/>
    </div>
  `
}

const resourcesDiv = document.querySelector(".resources")

resources.forEach((resource) => {
  resourcesDiv.innerHTML += templateForRecources(resource)
})

// Docs
const docs = [
  {
    name: "Solana Docs",
    buttonText: "View All",
    desc: "Learn how Solana works and get a high-level understanding of Solana's architecture.",
  },
  {
    name: "Metaplex Docs",
    buttonText: "View All",
    desc: "Learn what you build with Metaplex, make the process of creating and launching NFTs easier.",
  },
]

function templateForDocs(doc) {
  return `
    <div class="doc">
      div>
        <h3>${doc.name}</h3>
        <a href="#">${doc.buttonText}</a>
      </div>
      <p>${doc.desc}</p>
  `
}
