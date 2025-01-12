This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

- Add a .env.local file to the root of the project with the following variables:

(Note: This is not a working key, it is just a placeholder. You will need to replace it with your own key)

AUTHORIZATION_KEY=394589038459089

- next run npm install to get all the dependencies.

- after dependancies are installed you can run npm run build if you want to run a production build, once finished simply run npm run start.

- development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Deployed on Vercel

If you would like to view a deployed version of this app, you can find it [here](https://image-gallery-chi-lovat.vercel.app/).

Retrospective:

- This project was bootstrapped with [`create-rk-base`](https://www.npmjs.com/package/create-rk-base). its basically create-next-app but with my the usual setup for my personal projects.

- I would have added tests to ensure the app functions as expected, but I ran out of time. Most network requests are made on the server side, and intercepting them with tools like Cypress or Playwright is still a new challenge for SSR. Given more time, adding tests would definitely be a priority

- I chose Next.js for a few key reasons. First, I am already very familiar with it. Second, it comes with many useful features out of the box. For example, all state related to fetching data is persisted in URL parameters, and Next.js makes it easy to manage dynamic routes and query search parameters. The app directory structure is also great for organizing routes. Aside from some layout CSS in the pages themselves, most of the heavy lifting is done in the components directory, keeping everything modular and easier to manage and test. I also abstracted the data-fetching layer into an api directory, which is a good practice for ensuring that the API layer can be swapped out without affecting the rest of the app. For example, you could replace REST endpoints with a GraphQL implementation. Additionally, the API layer handles all error management, and Next.js’s catch-all error.tsx page allows centralized error handling both globally and on a per-page basis.

- I implemented loading indicators using skeleton-style components. I typically replicate the layout of the page grid or flex containers and apply this structure to the loading components, which helps give the app a more polished feel.

- Images play a central role in this app. I loosely based my layouts on YouTube, though I couldn’t follow it exactly, as a gallery typically contains multiple images instead of just one video. A Pinterest or Imgur-style layout would have been more suitable, especially because of the varying sizes of images and videos. Ultimately, I opted to use object-cover for most images, with the exception of when an image is expanded to full screen. Since users tend to browse quickly, I felt this was a good compromise. However, a hover-to-zoom feature could be a useful addition for quicker previews.

- I had to switch on link strings to check for them being an image or a video. This is why the AlbumCover component came to be.

- Mobile considerations should also be further made. For example auto play is cool on desktop but it causes a bug on mobile where random video will play or take your full screen. I would detect device type use te user agent and make the video auto play only on desktop. Also there is no image field from the api when the image is a mp4. This is poor since I cannot load a poster attribute on the video. I would have extract an image from the video link or something like that.
