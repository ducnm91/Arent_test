import React from "react";
import { Helmet, HelmetProvider } from "react-helmet-async";
import NavToDiv from "components/record/NavToDiv";
import MyExercise from "components/record/MyExercise";
import MyDiary from "components/record/MyDiary";

function MyRecordPage() {
  return (
    <>
      <HelmetProvider>
        <Helmet>
          <title>My record</title>
        </Helmet>
      </HelmetProvider>
      <div className="my-record-page">
        <NavToDiv />
        <MyExercise />
        <MyDiary />
      </div>
    </>
  );
}

export default MyRecordPage;
