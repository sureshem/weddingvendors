import { useState } from "react";
import Breadcrumb from '../../components/breadcrumb'
const allvendors = (props) => {
    //dropdown Json Format
    const breadcrumb=[
        { text: 'Home', link: '/' },
        { text: 'Vendors', isCurrentStep: true }
    ]
        return (
            <>		
					<Breadcrumb title={"Language"} breadcrumb={breadcrumb} />
                    <section className="vendortile">
                        <p>Vendors</p>
                    </section>
			
			<style>
				{
					`
						
					`
				}
			</style>
		</>
        );
    }

export default allvendors;
