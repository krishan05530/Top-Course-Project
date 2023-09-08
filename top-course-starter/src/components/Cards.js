
import React from "react";
import Card from './Card'
import { useState } from 'react';
// receiving the courses data from props

const Cards = (props) => {
    let courses = props.courses;
        let category = props.category;
        const [likedCourses, setLikedCourses] = useState([]);

        function getCourses() {
            if(category === "All") {
            let allCourses = [];
            // puhing all the data int allcourse array
            Object.values(courses).forEach(array => {
                array.forEach(courseData => {
                    allCourses.push(courseData);
                })
            })
               return allCourses;
        }
        // now send all the category data
        else {
            // now send only specific category  array data pass
             return courses[category]; // as these re in array
        }

    }

    return (

        <div className="flex flex-wrap justify-center gap-4 mb-4">
            {
                // here we are doinf map on return value of getCourse
                getCourses().map((course) => (            
                    < Card key={course.id}
                        course={course}
                        likedCourses={likedCourses}
                        setLikedCourses={setLikedCourses}
                         />  ))
            }
        </div>
    )
       



}
export default Cards;

