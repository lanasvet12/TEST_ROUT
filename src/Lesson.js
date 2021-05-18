import React from "react";
import { BrowserRouter, Link, Route, Switch } from "react-router-dom";
import { useParams, useHistory } from "react-router-dom";

const Lesson = () => {
  const history = useHistory();
  const params = useParams();

  const handleBack = () => {
    history.goBack();
  };

     
  return (
    <div>
      <div>Сторінка уроку</div>
      <div> Ви на уроці №- {params.id}</div>
      <div>
        <button onClick={handleBack}>Повернутися</button>
      </div>
     
    </div>
  );
};


export default Lesson;