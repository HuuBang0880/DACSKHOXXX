import React from "react";
import images from "../../../access/Images";

const pages = [
  {
    name: "Trang chủ",
    path: "/",
  },
  {
    name: "Lịch sử & Thành tích",
    path: "/about",
  },
  {
    name: "Tin tức",
    path: "/news",
  },
  {
    name: "Các phòng - khoa",
    path: "/collections",
  },
];

export default function Nav() {
  const NAVIGATION_ANIMATION =
    "after:transition-all after:transform after:duration-700 before:transition-all before:transform before:duration-700";

  const NAVIGATION_BEFORE =
    "before:absolute before:h-[2px] before:w-[35%] before:bg-green-200  before:top-0 before:left-0 before:opacity-0 hover:before:opacity-100 hover:before:left-[65%]";
  const NAVIGATION_AFTER =
    "after:absolute after:h-[2px] after:w-[35%] after:bg-green-200  after:right-0 after:bottom-0 after:opacity-0 hover:after:opacity-100 hover:after:right-[65%]";

  return (
    <div className="container px-4 mx-auto flex flex-wrap items-center justify-end">
      <nav className="fixed top-0 left-0 w-full h-[72px] bg-white shadow-lg z-40">
        <div className="relative flex flex-wrap bg-primary items-center h-full px-2">
          <div className="container mx-auto flex flex-wrap items-center px-16 ">
            <div>
              <img src={images.logo} alt="" className=" h-[60px]" />
            </div>
            <div className="items-center lg:flex " id="example-navbar-danger">
              <ul className="hidden list-none lg:ml-auto lg:flex-row xl:flex">
                {pages.map((page, index) => (
                  <li
                    className={`nav-item relative mx-2 inline-block  ${NAVIGATION_BEFORE} ${NAVIGATION_AFTER} ${NAVIGATION_ANIMATION}`}
                    key={index}
                  >
                    <a
                      className="flex transform items-center p-2 text-xs font-semibold uppercase text-white   hover:text-green-300 hover:opacity-100"
                      href={page.path}
                    >
                      <span className="font text-lg">{page.name}</span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}
