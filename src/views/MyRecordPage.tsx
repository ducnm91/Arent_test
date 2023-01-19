import React, {useRef} from "react";
import { Helmet, HelmetProvider } from "react-helmet-async";
import NavToDiv from "components/record/NavToDiv";
import BodyRecord from "components/record/BodyRecord/intex";
import MyExercise from "components/record/MyExercise";
import MyDiary from "components/record/MyDiary";

function MyRecordPage() {
  const myExercise = useRef<HTMLDivElement>(null);
  const bodyRecordRef = useRef<HTMLDivElement>(null);
  const mydiaryRef = useRef<HTMLDivElement>(null);
  const executeScroll = (ref: React.RefObject<HTMLDivElement>) => {
    if(ref.current) {
      ref.current.scrollIntoView();
    }
  } 

  return (
    <>
      <HelmetProvider>
        <Helmet>
          <title>My record</title>
        </Helmet>
      </HelmetProvider>
      <div className="my-record-page">
        <NavToDiv executeScroll={executeScroll} bodyRecordRef={bodyRecordRef} myExercise={myExercise} mydiaryRef={mydiaryRef} />
        <div className="wrapper-mydiary" ref={bodyRecordRef}>
          <BodyRecord />
        </div>
        <div className="wrapper-mydiary" ref={myExercise}>
          <MyExercise />
        </div>
        <div className="wrapper-mydiary" ref={mydiaryRef}>
          <MyDiary />
        </div>
      </div>
    </>
  );
}

export default MyRecordPage;
