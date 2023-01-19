import React from "react";
import { Helmet, HelmetProvider } from "react-helmet-async";
import AchievementRate from "components/home/AchievementRate";
import BodyFatPercentageGraph from "components/home/BodyFatPercentageGraph";
import MealType from "components/home/MealType";
import MealHistory from "components/home/MealHistory";

function HomePage() {
  return (
    <>
      <HelmetProvider>
        <Helmet>
          <title>Home page</title>
        </Helmet>
      </HelmetProvider>
      <div className="home-page">
        <div className="d-flex">
          <AchievementRate />
          <BodyFatPercentageGraph/>
        </div>
        <MealType />
        <MealHistory />
      </div>
    </>
  );
}

export default HomePage;
