import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import ReactGA from "./analytics";

function Analytics() {
  const location = useLocation();

  useEffect(() => {
    ReactGA.send({
      hitType: "pageview",
      page: location.pathname + location.search,
    });
  }, [location]);

  return null;
}

export default Analytics;