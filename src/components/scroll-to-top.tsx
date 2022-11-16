import React from "react";
import { Fab, Tooltip } from "@mui/material";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronUp } from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState } from "react";

export function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const onListen = () => {
      if (window.scrollY > 100) {
        setIsVisible(true);
        return;
      }

      setIsVisible(false);
    };

    window.addEventListener("scroll", onListen);

    return () => {
      window.removeEventListener("scroll", onListen);
    };
  }, []);

  if (!isVisible) {
    return null;
  }

  return (
    <Tooltip title="Scroll to Top" arrow>
      <Fab
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        size="small"
        sx={{ position: "fixed", bottom: "25px", right: "15px" }}
        color="secondary"
      >
        <FontAwesomeIcon icon={faChevronUp} size="lg" />
      </Fab>
    </Tooltip>
  );
}
