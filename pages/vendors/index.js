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
                        <h2 className="vendortile__title"> Wedding Vendors </h2>
                        <h3 className="vendortile__subtitle">Select from our curated list of service providers in your city</h3>
                        <section className="vendortile__list">
                            <section className="vendortile__list__item" onClick={() => { window.location.assign('/vendors/bridal-makeup')}}>
                                <img className="vendortile__list__item__img" src="https://s3-us-west-2.amazonaws.com/shaadiwishnewbucket/c5c65d95-c162-4a3a-8742-e21dc090cf2ebig.jpg" />
                                <p className="vendortile__list__item__info">Bridal Makeup</p>
                            </section>
                            <section className="vendortile__list__item">
                                <img className="vendortile__list__item__img" src="https://s3-us-west-2.amazonaws.com/shaadiwishnewbucket/c5c65d95-c162-4a3a-8742-e21dc090cf2ebig.jpg" />
                                <p className="vendortile__list__item__info">Bridal Makeup</p>
                            </section>
                            <section className="vendortile__list__item">
                                <img className="vendortile__list__item__img" src="https://s3-us-west-2.amazonaws.com/shaadiwishnewbucket/c5c65d95-c162-4a3a-8742-e21dc090cf2ebig.jpg" />
                                <p className="vendortile__list__item__info">Bridal Makeup</p>
                            </section>
                            <section className="vendortile__list__item">
                                <img className="vendortile__list__item__img" src="https://s3-us-west-2.amazonaws.com/shaadiwishnewbucket/c5c65d95-c162-4a3a-8742-e21dc090cf2ebig.jpg" />
                                <p className="vendortile__list__item__info">Bridal Makeup</p>
                            </section>
                            <section className="vendortile__list__item">
                                <img className="vendortile__list__item__img" src="https://s3-us-west-2.amazonaws.com/shaadiwishnewbucket/c5c65d95-c162-4a3a-8742-e21dc090cf2ebig.jpg" />
                                <p className="vendortile__list__item__info">Bridal Makeup</p>
                            </section>
                        </section>
                    </section>
			
			<style>
				{
					`
						.vendortile{padding:0 24px 25px;text-align:center}
                        .vendortile__title{font-size: 26px; line-height: 39px; color: #000; margin-top: 15px; margin-bottom: 15px; text-transform: capitalize;}
                        .vendortile__subtitle{font-size: 16px; color: #000; line-height: 25px; font-weight: 100; margin-bottom: 15px;}
                        .vendortile__list{display:flex;align-items:flex-start;flex-wrap:wrap;justify-content: center;}
                        .vendortile__list__item{cursor:pointer;margin: 4px;position:relative}
                        .vendortile__list__item:after{transition:0.5s all;content:'';width: 100%;opacity: 0.5; z-index: 1; top: 0; left: 0; right: 0; bottom: 0; height: 100%; position: absolute; background-color: #000; opacity: 0.5;}
                        .vendortile__list__item:hover:after{opacity:0.8}
                        .vendortile__list__item__img{width: 295px; height: 220px;}
                        .vendortile__list__item__info{position: absolute; left: 50%; top: 50%;z-index:2;font-size: 18px; color: #fff; text-align: center; text-transform: capitalize; line-height: 20px; transform: translate(-50%,-50%);}
					`
				}
			</style>
		</>
        );
    }

export default allvendors;
