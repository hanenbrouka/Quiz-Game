import React, {useState,useEffect} from "react";
import "../../Components/selectTopic/Select.css";
import history from "../../image/history.jpeg";
import technology from "../../image/technology.jpeg";
import medecin from "../../image/medecin.jpeg";
import agricol from "../../image/agricol.jpeg";
import axios from "axios";

const Select = () => {
  const [quizzes, setQuizzes] = useState([]);
  const fetchTriviaQuizzes = async () => {
    try {
      const response = await axios.get('https://opentdb.com/api.php?amount=5');
      setQuizzes(response.data.results);
    } catch (error) {
      console.error('Error fetching trivia questions:', error);
      if (error.response && error.response.status === 429) {
        // Retry after a certain time (e.g., 5 seconds)
        setTimeout(() => {
          fetchTriviaQuizzes();
        }, 5000);
      }
    }
  };
  
  useEffect(() => {
    fetchTriviaQuizzes();
  }, []);
  const categoryList = quizzes.map(e=>e.category);

  useEffect(() => {
    console.log("categoryList", categoryList)
  })

  const gridContainerStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)', // Adjust the number of categories per row as needed
    gap: '20px',
  };
  return (
    <div className="container" id="con">
   
    <label className="col">Select Topic</label><br/>
    <label className="col">Featured Category</label>
    
    <div className="grid-container">
      {categoryList.map((category, index) => (
        <div className="grid-item" key={index}>
          {category}
        </div>
      ))}
    </div>
    {/* <div className="row" id="row">
      <div className="col" ><img src={history} id="aa" /></div>
      <div className="col"><img src={technology} id="aa" /></div>
      <div className="col"><img src={medecin} id="aa" /></div>
      <div className="col"><img src={agricol} id="bb" /></div>
    </div>
    <div className="row" id="row">
      <div className="col" ><img src={history} id="aa" /></div>
      <div className="col"><img src={technology} id="aa" /></div>
      <div className="col"><img src={medecin} id="aa" /></div>
      <div className="col"><img src={agricol} id="bb" /></div>
    </div> */}
    </div>
    
  );
};

export default Select;
