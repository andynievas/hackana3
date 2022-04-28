import { useEffect } from "react";

function Scroll({ action, interval }) {
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    console.log("Dentro del useEffect");
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleScroll = () => {
    console.log("HANDLE SCROLL");
    if (
      document.body.clientHeight <
      window.scrollY + window.innerHeight + 300
    ) {
      window.removeEventListener("scroll", handleScroll);
      setTimeout(() => {
        window.addEventListener("scroll", handleScroll);
      }, interval);
      action();
    }
  };

  return <></>;
}

export default Scroll;
