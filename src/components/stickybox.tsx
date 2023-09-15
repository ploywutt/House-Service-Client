import { useState, useEffect, ReactNode, useRef } from "react";

type Stickybox = {
  children: ReactNode;
  top?: number | undefined;
  replace?: boolean;
};

function stickybox({ children, top = undefined, replace = true }: Stickybox) {
  const [offset, setOffset] = useState(0);
  const [height, setHeight] = useState(0);
  const [offsettop, setOffsettop] = useState(0);
  const [topposition, setTopposition] = useState(0);
  const ElementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (ElementRef.current) {
      const offsetheight = ElementRef.current.offsetHeight;
      setOffsettop(ElementRef.current.offsetTop - offsetheight + 10);
      setHeight(offsetheight);
    }
    const navbar = document.getElementById("navbar");
    const navbarheight = navbar?.offsetHeight || 0;
    setTopposition(top ? top : navbarheight);
    const onScroll = () => setOffset(window.pageYOffset);
    // clean up code
    window.removeEventListener("scroll", onScroll);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <>
      {replace && (
        <div
          className={
            `h-[${height}px]` + (offset > offsettop ? " flex" : "hidden")
          }
        ></div>
      )}
      <div
        ref={ElementRef}
        className={
          offset > offsettop ? `fixed w-full top-[${topposition}px]` : ""
        }
      >
        {children}
      </div>
    </>
  );
}

export default stickybox;
