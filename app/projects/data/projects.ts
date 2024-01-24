export type Project = {
  title: string;
  description: string;
  url?: string;
  image: string;
};

export const projects: Project[] = [
  {
    title: "K-Goods",
    description: "해외배송대행 시스템 개발",
    url: "https://bazzarproject2.vercel.app/",
    image: "/projects/K-goods.PNG",
  },
  {
    title: "kiyoonJ's Blog",
    description: "My personal website written with Next.js",
    url: "https://github.com/rldbs2002/kiyoonJung_blog",
    image: "/projects/myblog.PNG",
  },
];
