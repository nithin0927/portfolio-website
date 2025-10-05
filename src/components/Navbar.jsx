import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { styles } from '../styles';
import { navLinks } from '../constants';
import { close, menu, logo, logotext, download } from '../assets'; // ← add download

const Navbar = () => {
  const [active, setActive] = useState('');
  const [toggle, setToggle] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [lastY, setLastY] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      if (y > lastY && y > 80) setHidden(true);
      else setHidden(false);
      setLastY(y);
    };
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, [lastY]);

  return (
    <nav
      className={`${styles.paddingX} w-full flex items-center fixed top-0 z-20
      bg-flashWhite sm:opacity-[0.97] h-[8vh]
      transition-transform duration-300 ${hidden ? '-translate-y-full' : 'translate-y-0'}`}
    >
      <div className="w-full max-w-7xl mx-auto flex items-center justify-between">

        {/* LEFT: logo + name */}
        <Link
          to="/"
          className="flex items-center gap-3"
          onClick={() => {
            setActive('');
            window.scrollTo(0, 0);
          }}
        >
          <img src={logo} alt="logo" className="w-10 h-10 sm:w-12 sm:h-12 object-contain" />
          <img src={logotext} alt="Yegna Nithin Jupudi" className="h-6 sm:h-7 object-contain" />
        </Link>

        {/* RIGHT: desktop links */}
        <ul className="list-none hidden sm:flex flex-row items-center gap-10 mt-1">
          {navLinks.map((nav) => {
            if (nav.id === 'linkedin') {
              return (
                <li
                  key={nav.id}
                  className="text-eerieBlack hover:text-taupe text-[16px] font-medium font-mova uppercase tracking-[3px]"
                >
                  <a
                    href="https://www.linkedin.com/in/yegnanithin/"
                    target="_blank"
                    rel="noreferrer"
                    className="block"
                  >
                    {nav.title}
                  </a>
                </li>
              );
            }

            if (nav.id === 'resume') {
              return (
                <li
                  key={nav.id}
                  className="text-eerieBlack hover:text-taupe text-[16px] font-medium font-mova uppercase tracking-[3px]"
                >
                  <a href="/Resume_YegnaNithin.pdf" download className="flex items-center gap-2">
                    {nav.title}
                    <img src={download} alt="download" className="w-[18px] h-[18px] object-contain" />
                  </a>
                </li>
              );
            }

            return (
              <li
                key={nav.id}
                className={`${active === nav.title ? 'text-french' : 'text-eerieBlack'}
                           hover:text-taupe text-[16px] font-medium font-mova uppercase tracking-[3px] cursor-pointer`}
                onClick={() => setActive(nav.title)}
              >
                <a href={`#${nav.id}`} className="block">
                  {nav.title}
                </a>
              </li>
            );
          })}
        </ul>

        {/* MOBILE */}
        <div className="sm:hidden flex flex-1 w-screen justify-end items-center">
          {toggle ? (
            <div className="p-6 bg-flashWhite opacity-[0.98] absolute top-0 left-0 w-screen h-[100vh] z-10">
              <div className="flex justify-end">
                <img
                  src={close}
                  alt="close"
                  className="w-[22px] h-[22px] object-contain cursor-pointer"
                  onClick={() => setToggle(false)}
                />
              </div>
              <ul className="list-none flex flex-col items-start mt-[10rem] ml-4 gap-6">
                {navLinks.map((nav) => {
                  if (nav.id === 'linkedin') {
                    return (
                      <li
                        key={nav.id}
                        className="text-eerieBlack text-[36px] font-bold font-arenq uppercase tracking-[1px]"
                        onClick={() => setToggle(false)}
                      >
                        <a
                          href="https://www.linkedin.com/in/yegnanithin/"
                          target="_blank"
                          rel="noreferrer"
                        >
                          {nav.title}
                        </a>
                      </li>
                    );
                  }

                  if (nav.id === 'resume') {
                    return (
                      <li
                        key={nav.id}
                        className="text-eerieBlack text-[36px] font-bold font-arenq uppercase tracking-[1px]"
                        onClick={() => setToggle(false)}
                      >
                        <a href="/Resume_YegnaNithin.pdf" download className="flex items-center gap-3">
                          {nav.title}
                          <img src={download} alt="download" className="w-[28px] h-[28px]" />
                        </a>
                      </li>
                    );
                  }

                  return (
                    <li
                      key={nav.id}
                      className={`${active === nav.title ? 'text-french' : 'text-eerieBlack'}
                                  text-[36px] font-bold font-arenq uppercase tracking-[1px]`}
                      onClick={() => {
                        setActive(nav.title);
                        setToggle(false);
                      }}
                    >
                      <a href={`#${nav.id}`}>{nav.title}</a>
                    </li>
                  );
                })}
              </ul>
            </div>
          ) : (
            <img
              src={menu}
              alt="menu"
              className="w-[34px] h-[34px] object-contain cursor-pointer"
              onClick={() => setToggle(true)}
            />
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
