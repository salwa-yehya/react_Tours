import "./App.css";
import Tours from "./Tours";
import Loading from "./Loading";
import React, { useEffect, useState } from "react";
import Wishlist from "./Wishlist";

function App() {
  const url = "https://course-api.com/react-tours-project";
  const [loading, setLoading] = useState(false);
  const [tours, setTours] = useState([]); //store all Tours from api in " tours "



  //fetch function
  //async
  const FetchTours = async () => {
    setLoading(true);
    try {
      //await
      const response = await fetch(url); // use fetch function to fetch data fron api url
      const tours = await response.json(); //convert it to json format
      setLoading(false); //stop loading after success fetching
      setTours(tours);
    } catch (error) {
      setLoading(false); //no need to loading while error
      console.log(error);
    }
  };
  //to call fetch function (FetchTours)
  useEffect(() => {
    FetchTours();
  }, []); //to make it run one time

  if (loading) {
    return (
      <main>
        <Loading />
      </main>
    );
  }
  return (
    <main>
      <Tours tours={tours}  />
    </main>
  );
}

export default App;
