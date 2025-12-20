import { Blog } from "../types/Blog"

export const useBlogData = (): Blog[] => {
    return [
      {
        title: "How to Build a Marketplace Business",
        slug: "how-to-build-a-marketplace-business",
        excerpt: ".........",
        image: "/images/airbnb_phone.webp",
        emoji: "📈"
      },
      {
        title: "5 Lessons on Succeeding in Business",
        slug: "five-lessons-on-succeeding-in-business",
        excerpt: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        image: "/images/airbnb_phone.webp",
        emoji: "📈"
      },
      
    ]
}