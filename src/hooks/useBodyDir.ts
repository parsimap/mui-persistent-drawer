import * as React from "react";

const getBodyDirection = (body: HTMLElement) =>
  body.dir || body.style.direction;

export default function useBodyDir() {
  const prevDir = React.useRef<DirType>();
  type DirType = "rtl" | "ltr" | string;

  const [dir, setDir] = React.useState<DirType>();

  React.useEffect(() => {
    const newDir = getBodyDirection(document.body);
    prevDir.current = newDir;
    setDir(newDir);
  }, []);

  React.useEffect(() => {
    function handleStyleChanged(mutations: MutationRecord[]) {
      const body = mutations[0].target as HTMLBodyElement;
      const newDir = getBodyDirection(body);

      if (newDir !== prevDir.current) {
        setDir(newDir);
        prevDir.current = newDir;
      }
    }

    const observer = new MutationObserver(handleStyleChanged);
    observer.observe(document.body, {
      attributeFilter: ["style", "dir"]
    });

    return () => {
      observer.disconnect();
    };
  }, []);

  return dir;
}


