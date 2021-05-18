import React from 'react';
import { useParams, useHistory } from "react-router-dom";

function HomeButton() {
    let history = useHistory();
  
    function handleClick() {
      history.push("/home");
    }
    return (
        <button type="button" onClick={handleClick}>
          Go home
        </button>
      );
    }

    const Home = (props) => {
        const history = useHistory();
       
          return (
          <>
            <h1>Home Page</h1>
                  <hr />
           
         
      
            
            {/* Button */}
            <p>
              <button onClick={() => history.push('/lesson')}>Урок</button>
            </p>
      
           
          </>
        );
      };
      
      export default Home;

