import { FC } from "react";
import { useSpring, animated } from "@react-spring/web";

const NavItem: FC<{ name: string }> = ({ name }) => {
  const style = useSpring({
    from: { x: 0 },
    to: { x: 50 },
  });
  return (
    <animated.div
      style={style}
      className="text-white hover:text-green-300 hover:transition-all"
    >
      <a href="" className="">
        {name}
      </a>
    </animated.div>
  );
};
export const Navbar: FC<{ navItems: string[] }> = ({ navItems }) => {
  return (
    <div className="flex p-6 gap-5 bg-green-600 w-screen">
      {navItems.map((name) => {
        return <NavItem name={name} />;
      })}
    </div>
  );
};
