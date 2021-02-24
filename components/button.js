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
    const bgcolor = props.bgcolor || ''
   
    return (
        <>
            <p className={`btn btn--${bgcolor}`}>
                {props.children}
            </p>
            <style jsx>
                {
                    `
                    .btn{background-color: transparent;transition: 0.5s;max-width:180px;cursor:pointer;width: 100%; margin:20px auto 10px;border: 1px solid #b76f7a; padding: 15px; border-radius: 3px; font-size: 14px; color: #b76f7a;line-height:15px;text-align:center;}
                    .btn--bgcolor{background-color: #b76f7a;margin: 20px auto 10px;color: #fff;}
                    `
                }
            </style>
        </>
    );
}

export default Button;
