import { useEffect } from "react";

const AppMetadata = () => {
  useEffect(() => {
    const metaViewport = document.createElement("meta");
    metaViewport.name = "viewport";
    metaViewport.content = "width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no";
    document.head.appendChild(metaViewport);

    const style = document.createElement("style");
    style.innerHTML = `
      body, html {
        overflow: hidden;
        touch-action: none;
      }
    `;
    document.head.appendChild(style);

    return () => {
      document.head.removeChild(metaViewport);
      document.head.removeChild(style);
    };
  }, []);

  return null;
};

export default AppMetadata;