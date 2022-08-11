import React from "react";
import { data } from "../../services/studata";

export const Students = () => {
  console.log(data);
  return (
    <React.Fragment>
      <h1>Students List</h1>

      <table>
        <tr>
          <th>FullName</th>
          <th>Age</th>
          <th>Gender</th>
        </tr>
        {data.map((item) => (
          <tr>
            <td>
              {item.fname} {item.lname}
            </td>
            <td>{item.age}</td>
            <td>{item.gender}</td>
          </tr>
        ))}
      </table>
    </React.Fragment>
  );
};


// Practice

// import React from "react";
// import {data} from "../../services/studata"

// export const Students =()=> {
//    return(
//     <React.Fragment>
//       <h1>Students Data</h1>
//       <table>
//         <tr>
//           <th>FullName</th>
//           <th>Age</th>
//           <th>Gender</th>
//         </tr>
//         {data.map((item)=>
//         <tr>
//           <td>{item.fname} {item.lname}</td>
//           <td>{item.age}</td>
//           <td>{item.gender}</td>
//         </tr>

//         )}

//       </table>

//     </React.Fragment>
//    )
// }

// Practice again

// import React from "react";
// import { data } from "../../services/studata";

// export const Students = () => {
//   return (
//     <React.Fragment>
//       <h1>Students Data</h1>
//       <table>
//         <tr>
//           <th>Full Name</th>
//           <th>Age</th>
//           <th>Gender</th>
//         </tr>

//         {data.map((item) => (
//           <tr>
//             <td>
//               {item.fname} {item.lname}
//             </td>
//             <td>{item.age}</td>
//             <td>{item.gender}</td>
//           </tr>
//         ))}
//       </table>
//     </React.Fragment>
//   );
// };



