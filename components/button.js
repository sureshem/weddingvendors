// import React from 'react'
// const Button = (props) => {
//   return (
//     <>
//         <p className="btn">
//             {Props.children}
//         </p>
//         <style jsx>
//             {
//                 `
//                 .btn{background-color: transparent;transition: 0.5s;border: 1px solid #b76f7a; padding: 15px; border-radius: 3px; font-size: 14px; color: #b76f7a;}
//                 `
//             }
//         </style>
//     </>
//   )
// }
// export default Button

import React from 'react';
const Button = (props) => {
   
    return (
        <>
            <p className="btn">
                {props.children}
            </p>
            <style jsx>
                {
                    `
                    .btn{background-color: transparent;transition: 0.5s;max-width:180px;width: 100%; margin: 0 auto;border: 1px solid #b76f7a; padding: 15px; border-radius: 3px; font-size: 14px; color: #b76f7a;}
                    `
                }
            </style>
        </>
    );
}

export default Button;
