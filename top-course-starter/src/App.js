import React, { useEffect } from "react";
import Navbar from "./components/Navbar";
import Cards from "./components/Cards"
import Filter from "./components/Filter";
import { apiUrl, filterData } from "./data";
import { useState } from "react"
import { toast } from "react-toastify";
import Spinner from "./components/Spinner"

const App = () => {
  const [courses, setCourses] = useState(null);

  const [loading, setLoading] = useState(true);

  // for category 
   const[category,setCategory]=useState(filterData[0].title) // this give ALL , intilly its in all category

  async function fetchData() {

    // while data is getting fetch loading will run so =>true
    setLoading(true);
    try {
      // fetching the data from api
      let response = await fetch(apiUrl);
      let output = await response.json();
      // now we the data in output
      setCourses(output.data);
    }
    catch (error) {
      toast.error("Network me koi dikkat hai");
    }
    // once data is fetched loading so, stop =>false
    setLoading(false);
  }

  useEffect(() => {
    fetchData();
  }, [])

  return (
    <div className="min-h-screen flex flex-col bg-bgDark2">

      <div>
        <Navbar />
      </div>

      <div className="bg-bgDark2">
        <div>
          <Filter
           filterData={filterData}
           category={category}
           setCategory={setCategory} 
          />
        </div>


        <div className="w-11/12 max-w-[1200px] 
        mx-auto flex flex-wrap justify-center items-center min-h-[50vh]">
          {  // if loading show spinner otherwise show cards
            loading ? (<Spinner />) : (<Cards courses={courses} category={category}
              />)
          }

        </div>

      </div>



    </div>
  );
};
export default App;
