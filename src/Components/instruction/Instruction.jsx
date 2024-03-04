import React from "react";
import "../../Components/instruction/instruction.css";
import history from "../../image/history.jpeg";

const Instruction = () => {
  return (
    <div>
      <div>
        <label className="Labelll">History Quiz</label><br/>
        <label className="label">Read the following instructions</label>
      </div>
      <div>
        <div class="row g-0 text-center">
          <div class="col-sm-6 col-md-8">
            <img src={history} className="history" alt="" />
          </div>
          <div class="col ">
            <label className="L1"> Date:  </label> <label className="L2">28/07/2021</label><br/>
            <label className="L1"> Time Limit: </label> <label className="L2"> 30 Mins</label><br/>
            <label className="L1"> Attempts: </label> <label className="L2"> Once</label><br/>
            <label className="L1"> Points: </label> <label className="L2"> 200 Points </label>
          </div>
        </div>
      </div>
      <div className="paragraph">
        <label className="labell">Instructions</label><br/>
        <br/>
        <label className="label">
          This quiz consists of 5 multiple-choice questions. To be successful
          with the quizzes, it’s important to conversant with the topics. Keep
          the following in mind:
        </label> <br/>

        <br/>
        <label className="label">
        Timing - You need to complete each of your attempts in one sitting, as you are allotted 30 minutes to each attempt.
         Answers - You may review your answer-choices and compare them to the correct answers after your final attempt. 
      </label><br/>
      <br/>
      
        <label className="label">
        To start, click the "Start" button. When finished, click the "Submit " button.
        </label>
        </div>
      <button className="bStart">Start</button>
    </div>
  );
};

export default Instruction;
