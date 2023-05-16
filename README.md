# Nedyalko Draganov - Web Developer - Portfolio website

I design and code this portfolio website to showcase my projects, skills and the toolkit I'm using.
This project is the first project I developed with Next.js.

The purpose of the website is to get in touch and present myself to employers. I keep the website content to three pages - Home, About and Portfolio for helping the HR team to preview the essential needed information about my coding skills. Contact page with functional contact form is in progress.

## Overview

### Features

#### Layout wrapper

- Fixed Navigation bar with my brand logo
- Sidebar for mobile with my brand logo and social media links
- Footer with my brand logo and social media links

#### Pages and components

- Home page with a short introduction and buttons for Portfolio page and email
- About page with image, about me information, toolkit banner with animated text from right to left
- Portfolio page with my Learning People course projects
  Every project item consist of
  - Image on the left side
  - Intro on the right side
    - Title on the top
    - Build with technologies
    - Description about the current project
    - At the bottom links to the live site and the source code

### Screenshots

### Links

[Source code](https://github.com/NDraganov/nedyalko-draganov)
[Live site](https://nedyalko-draganov.vercel.app)

## Development

### Built with

#### Next.js

My choice for the framework was [Next.js](https://nextjs.org). Based on React.js, Next.js is full of build futures for optimization and production. That is the first case I used the Next.js.

#### Pure CSS

I decided to use pure CSS for the entire layout and styles for the project and improve my experience with Grid and Flexbox for the cases when I need custom styles instead of the predefined ones from frameworks and libraries like Bootstrap and Tailwind CSS.

#### MUI

I used [MUI](https://mui.com) for the project's icons.

### New methods I learned

To render my portfolio page with my project items, I used the built-in Next.js function getStaticProps for prerendering the HTML for SEO. I add async to not block the execution of the code. Inside the function, I used the file system to read the data from the learning-people-projects.json file and pass it to the props.

```js
export async function getStaticProps() {
  const filePathLP = path.join(
    process.cwd(),
    "data/learning-people",
    "learning-people-projects.json"
  );
  const jsonDataLP = await fs.readFile(filePathLP);
  const dataLP = JSON.parse(jsonDataLP);
  return {
    props: {
      projects: dataLP.projects,
    },
  };
}
```

## Deployment

- I create new Next.js project using "create-next-app" in Hyper Terminal
- Then I create new GitHub repository
- Then I connect local to remote repository
  - git init
  - git add.
  - git commit -m "message"
  - git remote add origin "URL"
  - git push -u origin master
- I used the default "npm run build" command to optimize the project for production
- Then I used "npm run start" to expect the production version
- I used the Vercel platform for publishing my project

## Acknowledgments

- My Next.js fundamentals I learn from Maximilian Schwarzmüller Udemy course - [Next.js & React - The Complete Guide (incl. Two Paths!)](https://www.udemy.com/course/nextjs-react-the-complete-guide/)
