import { courses, resources } from "./data.js"

// Courses
const coursesDiv = document.querySelector(".courses")

const CourseTemplate = (course) => `
  <div class="course group flex items-end justify-between px-[20px] py-[40px]
    h-[340px] rounded-[18px] first:col-span-3
    bg-[url(img/courses/${course.link})] bg-cover bg-center"
  >
    <div>
      <span class="inline-block text-[11px] px-[10px] py-[2px] bg-[#9945FF] rounded-[16px] mb-[12px]">
        ${course.chapters} Chapters
      </span>
      <h3 class="text-[18px] group-first:text-[40px] max-w-[190px]">${
        course.name
      }</h3>
      ${
        course.description
          ? `<p class="text-[18px]">${course.description}</p>`
          : ""
      }
    </div>
    <a href="/">
      <img src="img/courses/arrow-right.png" alt="">
    </a>
  </div>
`

coursesDiv.innerHTML = courses.map((card) => CourseTemplate(card)).join("")

// Resources
const resourcesDiv = document.querySelector(".resources")

const ResourceTemplate = (resource) => `
  <div class="resource bg-[#19161C] rounded-[12px] p-[32px] ">
    <p class="text-[#9945FF] text-[12px] uppercase mb-[12px]">tool / library</p>
    <h3 class="text-[20px] mb-[15px]">${resource.name}</h3>
    <p class="text-[16px] mb-[48px]">${resource.description}</p>
    <a class="flex gap-x-[8px]" href="/">
      <p class="uppercase text-[11px]">Learn more</p>
      <img class="max-w-[10px] max-h-[10px]" src="img/arrow.png">
    </a>
  </div>
`

resourcesDiv.innerHTML = resources
  .map((recourse) => ResourceTemplate(recourse))
  .join("")
