import { useState, useRef, useEffect, useCallback } from "react";
import { Outlet, Link, NavLink } from "react-router-dom";

export default function RootLayout() {
  const [isScrollingHeader, setIsScrollingHeader] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const headerRef = useRef(null);
  const lastPos = useRef(0);

  const navLinkClassName =
    "mr-4 mt-4 block text-base font-medium text-slate-700 hover:text-teal-600 md:mt-0 md:inline-block";

  function toggleMenu(event) {
    event.preventDefault();
    setIsMenuOpen(!isMenuOpen);
  }

  const handHeaderScroll = useCallback(() => {
    const header = headerRef?.current;
    const currPos = document.documentElement.scrollTop;
    if (header) {
      if (currPos > +lastPos.current) {
        if (currPos > header.offsetHeight) {
          setIsScrollingHeader(true);
        }
      } else {
        setIsScrollingHeader(false);
      }
    }

    lastPos.current = currPos;
  }, [headerRef, lastPos, setIsScrollingHeader]);

  useEffect(() => {
    window.addEventListener("scroll", handHeaderScroll, false);

    return () => {
      window.removeEventListener("scroll", handHeaderScroll, false);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
          <nav
            className={` ${
              !isMenuOpen ? "hidden" : ""
            }`}>
            <NavLink to="/calendario" className={({ isActive }) => `${navLinkClassName} ${isActive ? "text-teal-600" : ""}`} end>
              Calendário
            </NavLink>
            <NavLink
              to="/tarefas-pendentes"
              className={({ isActive }) => `${navLinkClassName} ${isActive ? "text-teal-600" : ""}`}>
              Tarefas pendentes
            </NavLink>
            <NavLink
              to="/notas"
              className={({ isActive }) => `${navLinkClassName} ${isActive ? "text-teal-600" : ""}`}>
              Notas
            </NavLink>
            <NavLink
              to="/bloco-de-notas"
              className={({ isActive }) => `${navLinkClassName} ${isActive ? "text-teal-600" : ""}`}>
              Bloco de notas
            </NavLink>
          </nav>
      <main className="mx-7 mt-28 flex-grow lg:mx-6">
        <div className="mx-auto max-w-5xl">
          <Outlet />
        </div>
      </main>
    </>
  );
}
