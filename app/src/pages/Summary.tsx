import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

import ShortenUrlSummary from "../components/ShortenUrlSummary";

interface LocationState {
  originalUrl: string;
  shortenedUrl: string;
  counter: number;
  createdAt: string;
  allowed: boolean;
}
const Summary = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const { originalUrl, shortenedUrl, counter, createdAt, allowed } =
    (location.state as LocationState) || {
      originalUrl: "",
      shortenedUrl: "",
      counter: 0,
      createdAt: "",
      allowed: false,
    };

  useEffect(() => {
    if (!allowed) {
      navigate("/");
    }
  }, [allowed, navigate]);

  return (
    allowed && (
      <ShortenUrlSummary
        originalUrl={originalUrl}
        shortenedUrl={shortenedUrl}
        counter={counter}
        createdAt={createdAt}
      />
    )
  );
};

export default Summary;
