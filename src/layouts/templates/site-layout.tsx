import { fetchCategoryList } from "@modules/category/store/api/category-api";
import { Category } from "@modules/category/libraries/category-types";
import Footer from "@layouts/general/footer";
import { useEffect, useState } from "react";
import Header from "../general/header";

const categories: Category[] = [
  {
    id: 0,
    priority: 1,
    title: "lampshade",
    description:
      "Beautiful lampshades in different designs for different tastes",
    link: "/product/category/lampshade",
    media: {
      title: "lampshade",
      path: "/images/categories/lampshade.jpg",
      link: "#",
      width: 640,
      height: 640,
      description: "Beautiful lampshades",
    },
  },
  {
    id: 1,
    priority: 2,
    title: "table",
    description: "Functional tables and chairs for everything!",
    link: "/product/category/table",
    media: {
      title: "table",
      path: "/images/categories/table.jpg",
      link: "#",
      width: 640,
      height: 640,
      description: "Functional tables",
    },
  },
  {
    id: 2,
    priority: 3,
    title: "chandelier",
    description: "Modern Bedroom Chandelier",
    link: "/product/category/chandelier",
    media: {
      title: "chandelier",
      path: "/images/categories/chandelier.jpg",
      link: "#",
      width: 640,
      height: 640,
      description: "Modern Bedroom Chandelier",
    },
  },
  {
    id: 3,
    priority: 4,
    title: "bed",
    description: "Find The Bed For A Perfect Night's Sleep",
    link: "/product/category/bed",
    media: {
      title: "bed",
      path: "/images/categories/bed.jpg",
      link: "#",
      width: 640,
      height: 640,
      description: "Bed For A Perfect Night's Sleep",
    },
  },
  {
    id: 4,
    priority: 5,
    title: "poster",
    description: "Shop art posters with modern and stylish designs",
    link: "/product/category/poster",
    media: {
      title: "poster",
      path: "/images/categories/poster.jpg",
      link: "#",
      width: 640,
      height: 640,
      description: "Shop art posters with modern and stylish designs",
    },
  },
  {
    id: 5,
    priority: 6,
    title: "pot",
    description:
      " buy plant stands and pots for both outdoor and house plants.",
    link: "/product/category/pot",
    media: {
      title: "pot",
      path: "/images/categories/pot.jpg",
      link: "#",
      width: 640,
      height: 640,
      description:
        " buy plant stands and pots for both outdoor and house plants.",
    },
  },
]; 

const SiteLayout = ({ children }: { children: any }) => {
  return (
    <>
      <Header categoryList={categories} />
      <main>{children}</main>
      <Footer />
    </>
  );
};

export default SiteLayout;
