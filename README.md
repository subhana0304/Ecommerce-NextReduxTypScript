Interactive Video Player with Product Offers----------
This project implements an interactive video player where users can watch a video and view product offers that appear at specific timestamps. The video player is built using React and ReactPlayer. When a product offer appears, users can add the product to their cart by clicking the "Add to Cart" button. This is integrated with Redux for managing the shopping cart state.

Features-------------
Video Playback: The project uses the ReactPlayer component to play the video.
Product Offers: Product offers appear as overlays on the video at predefined timestamps.
Add to Cart: Users can add products to their shopping cart directly from the video overlay.
Redux Integration: The cart state is managed using Redux for seamless updates and persistent data.
Installation Instructions
Prerequisites

Ensure you have the following installed:
Node.js (version >= 14)
npm 
Steps to Run the Project
Clone the repository to your local machine:

bash
Copy code
git clone 

Install the dependencies:
bash
Copy code
npm install

Run the project locally:
npm run dev
This will start the development server and you can view the project by navigating to http://localhost:3000 in your browser.

How to Use
Watch the Video: Start playing the video, and at specific timestamps, product offers will appear as overlays.
View Product Details: The product offer overlay will display a title, image, and a button to add the product to your cart.
Add to Cart: Click the "Add to Cart" button to add the product to your shopping cart.
Shopping Cart: You can manage the shopping cart state by accessing the Redux store (if integrated in your application).
Technologies Used
React: For building the user interface.
ReactPlayer: For embedding and controlling the video playback.
Redux: For managing the state of the shopping cart.
TypeScript: For type safety and enhancing development experience.
CSS Modules: For scoped and maintainable styling.





This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/pages/api-reference/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.tsx`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/pages/building-your-application/routing/api-routes) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.ts`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/pages/building-your-application/routing/api-routes) instead of React pages.

This project uses [`next/font`](https://nextjs.org/docs/pages/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn-pages-router) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/pages/building-your-application/deploying) for more details.
