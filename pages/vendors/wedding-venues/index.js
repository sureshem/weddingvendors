import { useState } from "react";
import Breadcrumb from '../../../components/breadcrumb'
const weddigvenues = (props) => {
    //dropdown Json Format
    const breadcrumb=[
        { text: 'Home', link: '/' },
        { text: 'Vendors', link: '/vendors' },
        { text: 'Wedding Venues', isCurrentStep: true }
    ]
        return (
            <>		
					<Breadcrumb title={"Language"} breadcrumb={breadcrumb} />
                    <section className="vendortile">
                        <p>weddigvenues</p>
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

export default weddigvenues;
