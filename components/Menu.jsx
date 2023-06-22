import React from "react";
import Link from "next/link";
import { BsChevronDown } from "react-icons/bs";

const data = [
  { id: 1, name: "Home", url: "/" },
  { id: 3, name: "Categories", subMenu: true },
  { id: 2, name: "About", url: "/about" },
  { id: 4, name: "Contact", url: "/contact" },
];

const subMenuData = [
  { id: 1, name: "Laptops", doc_count: 13, url: "/laptops" },
  { id: 2, name: "Desktops", doc_count: 12, url: "/desktops" },
  { id: 3, name: "MacBook", doc_count: 5, url: "/macbook" },
  { id: 4, name: "Networking Accessories", doc_count: 5, url: "/networking" },
];

const Menu = ({ showCatMenu, setShowCatMenu }) => {
  return (
    <ul className="hidden md:flex items-center gap-8 font-medium text-black">
      {data.map((item) => {
        return (
          <React.Fragment key={item.id}>
            {!!item?.subMenu ? (
              <li
                className="cursor-pointer flex items-center gap-2 relative"
                onMouseEnter={() => setShowCatMenu(true)}
                onMouseLeave={() => setShowCatMenu(false)}
              >
                {item.name}
                <BsChevronDown size={14} />
                {showCatMenu && (
                  <ul
                    className="bg-white absolute top-6 left-0
                  min-w-[250px] px-1 py-1 text-black shadow-lg"
                  >
                    {subMenuData.map((submenu) => {
                      return (
                        <Link
                          key={submenu.id}
                          href={submenu.url}
                          onClick={() => setShowCatMenu(false)}
                        >
                          <li className="h-12 flex justify-between items-center px-3 hover:bg-black/[0.03] rounded-md">
                            {submenu.name}
                            <span className="opacity-50 text-sm">{submenu.doc_count}</span>
                          </li>
                        </Link>
                      );
                    })}
                  </ul>
                )}
              </li>
            ) : (
              <li className="cursor-pointer">
                <Link href={item.url}>{item.name}</Link>
              </li>
            )}
          </React.Fragment>
        );
      })}
    </ul>
  );
};

export default Menu;
