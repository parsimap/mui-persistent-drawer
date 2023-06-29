import * as React from "react";

const useBodyDir = () => {
  const prevDir = React.useRef<DirType>();
  type DirType = "rtl" | "ltr" | string;

  const [dir, setDir] = React.useState<DirType>();

  React.useEffect(() => {
    prevDir.current = dir;
  }, [dir]);

  React.useEffect(() => {
    setDir(document.body.style.direction);
  }, []);

  React.useEffect(() => {
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
