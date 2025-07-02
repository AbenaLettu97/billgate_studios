import React from "react";
import { FaTwitter, FaX } from "react-icons/fa6";
import { NavLink } from "react-router";
import { FaYoutube, FaFacebook } from "react-icons/fa";
import { motion } from "motion/react";

const Menu = () => {
  return (
    <motion.div className="flex justify-between pl-4  mt-10 gap-2">
      <section className="flex flex-col w-full ml-5 pb-5 relative overflow-hidden whitespace-nowrap">
        <MenuLink to="/" className="text-7xl">
         home
        </MenuLink>
        <MenuLink to="/projects" className="text-7xl">
          projects
        </MenuLink>
        <MenuLink to="/categories" className="text-7xl">
          categories
        </MenuLink>
        <MenuLink to="/about" className="text-7xl">
          about
        </MenuLink>
        <MenuLink to="/contact" className="text-7xl">
          contact
        </MenuLink>
      </section>
    </motion.div>
  );
};

const DURATION = 0.25;
const STAGGER = 0.025;

const MenuLink = ({ children, href }) => {
  return (
    <motion.a
      initial="initial"
      whileHover="hovered"
      href={href}
      className="relative block overflow-hidden whitespace-nowrap text-4xl font-black sm:text-7xl md:text-8xl lg:text-9xl"
      style={{
        lineHeight: 0.75,
      }}
    >
      <div>
        {children.split("").map((l, i) => (
          <motion.span
            variants={{
              initial: {
                y: 0,
              },
              hovered: {
                y: "-100%",
              },
            }}
            transition={{
              duration: DURATION,
              ease: "easeInOut",
              delay: STAGGER * i,
            }}
            className="inline-block"
            key={i}
          >
            {l}
          </motion.span>
        ))}
      </div>
      <div className="absolute inset-0">
        {children.split("").map((l, i) => (
          <motion.span
            variants={{
              initial: {
                y: "100%",
              },
              hovered: {
                y: 0,
              },
            }}
            transition={{
              duration: DURATION,
              ease: "easeInOut",
              delay: STAGGER * i,
            }}
            className="inline-block"
            key={i}
          >
            {l}
          </motion.span>
        ))}
      </div>
    </motion.a>
  );
};

export default Menu;
