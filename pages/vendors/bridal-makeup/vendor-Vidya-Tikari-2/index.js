import { useState } from "react";
import Breadcrumb from '../../../../components/breadcrumb'
const Makeupinfo = (props) => {
    //dropdown Json Format
    const breadcrumb=[
        { text: 'Home', link: '/' },
        { text: 'Vendors',link:'/vendors' },
        { text: 'Bridal Makeup',link:'/vendors/bridal-makeup' },
        { text: 'Vidya Tikari', isCurrentStep: true }
    ]
        return (
            <>		
					<Breadcrumb title={"Language"} breadcrumb={breadcrumb} />
                    <section className="vendortile">
                        <p>Vidya tikari</p>
                    </section>
		</>
        );
    }

export default Makeupinfo;
