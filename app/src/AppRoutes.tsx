import { Suspense, lazy } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

const HomePage = lazy(() => import("./pages/Home"));
const SummaryPage = lazy(() => import("./pages/Summary"));

const AppRoutes = () => (
  <Router>
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/summary" element={<SummaryPage />} />
      </Routes>
    </Suspense>
  </Router>
);

export default AppRoutes;
