import React from 'react'
function Footer(){
    return(
        <>
            <p className="footer">© 2020 Wishful Thinking Agency LLC.</p>
            <style jsx>
                {
                    `
                    .footer{padding:15px 0;color:#000;font-size:18px;text-align:center;background:#ddd;}
                    `
                }
            </style>
        </>
    )
}
export default Footer