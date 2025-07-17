import { courses, resources } from "./data.js"

// Courses
const coursesDiv = document.querySelector(".courses")

const CourseTemplate = (course) => `
  <div class="course">
    <p>${course.chapters} Chapters</p>
    <h3>${course.name}</h3>
    ${course.description ? `<p>${course.description}</p>` : ""}
    <a href="/">
      <image src="img/courses/${course.link}" alt=""> 
    </a>
  </div>
`

coursesDiv.innerHTML = courses.map((card) => CourseTemplate(card)).join("")

// Resources
const resourcesDiv = document.querySelector(".resources")

const ResourceTemplate = (resource) => `
  <div class="resource">
    <p>tool / library</p>
    <h3>${resource.name}</h3>
    <p>${resource.description}</p>
    <a href="/">
      <p>Learn more</p>
      <img src="img/arrow.png">
    </a>
  </div>
`

resourcesDiv.innerHTML = resources
  .map((recourse) => ResourceTemplate(recourse))
  .join("")
