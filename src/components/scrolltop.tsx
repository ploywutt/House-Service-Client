import { useEffect, useState } from "react";
import { Button } from "./ui/button";
import { ChevronUp } from "lucide-react";
import "@/assets/css/scrolltopanimation.css";

function scrollTop() {
  const [offset, setOffset] = useState(0);
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  useEffect(() => {
    const onScroll = () => setOffset(window.pageYOffset);
    window.removeEventListener("scroll", onScroll);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <Button
      className={
        "scrolltop rounded-full fixed bottom-4 right-4 p-2 " +
        (offset > 100 ? "show" : "hide")
      }
      onClick={scrollToTop}
    >
      <ChevronUp />
    </Button>
  );
}

export default scrollTop;
