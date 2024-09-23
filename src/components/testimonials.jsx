// import React from "react";

// export const Testimonials = (props) => {
//   return (
//     <div id="testimonials">
//       <div className="container">
//         <div className="section-title text-center">
//           <h2>Venue</h2>
//         </div>
//         <div className="row">
//           {props.data
//             ? props.data.map((d, i) => (
//                 <div key={`${d.name}-${i}`} className="col-md-4">
//                   <div className="testimonial">
//                     <div className="testimonial-image">
//                       {" "}
//                       <img src={d.img} alt="" />{" "}
//                     </div>
//                     <div className="testimonial-content">
//                       <p>"{d.text}"</p>
//                       <div className="testimonial-meta"> - {d.name} </div>
//                     </div>
//                   </div>
//                 </div>
//               ))
//             : "loading"}
//         </div>
//       </div>
//     </div>
//   );
// };

import React from "react";

export const Testimonials = (props) => {
  return (
    <div 
      id="testimonials" 
      style={{ 
        backgroundImage: `url('img/ven.jpg')`, // Update the path to your image
        backgroundSize: "cover", // or "contain" depending on your preference
        backgroundPosition: "center",
        padding: "50px 0", // Add padding as needed
        color: "white" // Optional: adjust text color for better visibility
      }}
    >
      <div className="container">
        <div className="section-title text-center">
        <h2 style={{ color: "white" }}>Venue</h2>
        </div>
        <div className="row justify-content-center">
          <div className="testimonial">
            <div className="testimonial-content">
              <h3>{props.data && props.data.name}</h3>
              <div 
                style={{ 
                  textAlign: "center", 
                  fontSize: "2em", // Adjust font size as needed
                  marginTop: "10px" // Optional: add some space above the address
                }}
              >
                <b>
                  {props.data && props.data.address ? props.data.address : "The Lalit Ashok, Bengaluru (Venue is subject to change)"}
                </b>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
