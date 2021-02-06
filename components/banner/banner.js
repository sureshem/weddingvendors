import React from 'react';
const banner = (props) => {
   
    return (
        <>
            <section className="wdmatchbannerHeight">
                <h1 className="wdmatchbanner__title">
                Say Hello To India’s Top Wedding Planners 
                </h1>
            </section>
            <style jsx>
                {
                    `
                    
                    .wdmatchbannerHeight{height: 600px;display: flex; align-items: center; justify-content: center; width:100%; background: url(/yearonebanner.jpg); position: relative;top:-30px;  background-repeat: no-repeat; background-position: center; background-size: cover;}
                    .wdmatchbanner__title{text-shadow: 2px 5px #000;font-size: 37px; line-height: 60px ; font-weight: bold; color: white; text-align: center;text-transform:uppercase}
                    
                    `
                }
            </style>
        </>
    );
}

export default banner;
