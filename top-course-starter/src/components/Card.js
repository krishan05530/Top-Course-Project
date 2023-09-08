import React from "react";
import {FcLike,FcLikePlaceholder} from "react-icons/fc"
import { toast } from "react-toastify";

const Card = (props) => {
    // let course=props.course;
    //  let likedCources=props.likedCources;
    //  let setlikedCource=props.setlikedCource;

     let course = props.course;
     let likedCourses = props.likedCourses;
     let setLikedCourses = props.setLikedCourses;

    function clickHandler()
    {
        
          //logic 
          if(likedCourses.includes(course.id)){
            // pahle se liked he to remove karo liked
            setLikedCourses((prev)=>prev.filter((cid)=> (cid!=course.id)))
              toast.warning("like removed ");
          }

          else{
            // phale se liked nahi he 
            // insert krdo new liked karke

            // if length =0
            if(likedCourses.length===0)
            {
                setLikedCourses([course.id]);
            }

            else{
                // empty nahi he tab add with prev
                setLikedCourses((prev)=>[...prev,course.id]);
            }
            toast.success("liked succesfully");
          }
    }

    return (
        <div className='w-[300px] bg-bgDark bg-opacity-80 rounded-md overflow-hidden'>
            <div  className='relative'>
            <img src={course.image.url}/>

            <div className='w-[40px] h-[40px] bg-white rounded-full absolute right-2 bottom-[-12px]
            grid place-items-center'>
                <button onClick={clickHandler}>
                    {
                      
                         // if course id is included in likedcourses then change liked with fade like
                         likedCourses.includes(course.id) ? 
                         (<FcLike fontSize="1.75rem" />)
                         :(<FcLikePlaceholder fontSize="1.75rem" />)
                    }
                     
                     </button>
              </div>
            </div>

         

            <div  className='p-4'>
                <p className="text-white font-semibold text-lg leading-6">{course.title}</p>
                <p className='mt-2 text-white'>
                    {
                       course.description.length>100 ?
                       (course.description.substr(0,100))+"...":
                       (course.description.substr)
                    }
                      
                    
                
               </p>
            </div>

        </div>
       
    )

}

export default Card;
