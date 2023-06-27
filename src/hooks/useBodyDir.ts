import { useEffect, useRef, useState } from "react";

const useBodyDir = () => {
  const prevDir = useRef<DirType>();
  type DirType = "rtl" | "ltr" | string;

  const [dir, setDir] = useState<DirType>();

  useEffect(() => {
    prevDir.current = dir;
  }, [dir]);

  useEffect(() => {
    setDir(document.body.style.direction);
  }, []);

  useEffect(() => {
    function handleStyleChanged(mutations: MutationRecord[]) {
      const newDir = (mutations[0].target as HTMLBodyElement).style.direction;

      if (newDir !== prevDir.current) {
        setDir(document.body.style.direction);
      }
    }

    const observer = new MutationObserver(handleStyleChanged);
    observer.observe(document.body, {
      attributeFilter: ["style"],
    });

    return () => {
      observer.disconnect();
    };
  }, []);

  return dir;
};

export default useBodyDir;
