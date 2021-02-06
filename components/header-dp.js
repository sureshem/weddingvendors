
import React from 'react';
import Select from 'react-select';
const HeaderDp = (props) => {
    const vendorSearch = [
        { value: 'Chennai', label: 'Chennai' },
        { value: 'Bangalore', label: 'Bangalore' },
        { value: 'Hyderabad', label: 'Hyderabad' },
        { value: 'Karnataka', label: 'Karnataka' },
        { value: 'Pondicherry', label: 'Pondicherry' },
        { value: 'Madurai', label: 'Madurai' },
        { value: 'Salem', label: 'Salem' },
        { value: 'Trichy', label: 'Trichy' },
        { value: 'Coimbatore', label: 'Coimbatore' },
        { value: 'Erode', label: 'Erode' },
        { value: 'Nagerkoil', label: 'Nagerkoil' },
        { value: 'Kerala', label: 'Kerala' },
        { value: 'Munnar', label: 'Munnar' },
      ];
    return(
        <>
            <section className="hdp">
                <section className="hdp__cn">
                    <p className="hdp__cn__title">India's Favourite Wedding Planning Platform</p>
                    <section className="hdp__cn__dpi">
                    <Select className="" options={vendorSearch} /> 
                    </section>
                </section>
            </section>
            <style jsx>
                {
                    `
                    .hdp{background: #b4245d;}
                    .hdp__cn{display: flex; padding: 5px 15px; align-items: center;}
                    .hdp__cn__title{color: #fff; font-size: 18px; margin-right: 15px;}
                    .hdp__cn__dpi{width: 235px; outline: none;}
                    `
                }
            </style>
        </>
    )
}

export default HeaderDp