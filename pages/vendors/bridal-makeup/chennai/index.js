import { useState } from "react";
import Breadcrumb from '../../../../components/breadcrumb'
const allvendors = (props) => {
    //dropdown Json Format
    const breadcrumb=[
        { text: 'Home', link: '/' },
        { text: 'Vendors',link:'/vendors' },
        { text: 'Bridal Makeup',link:'/vendors/bridal-makeup' },
        { text: 'chennai', isCurrentStep: true }
    ]
        return (
            <>		
					<Breadcrumb title={"Language"} breadcrumb={breadcrumb} />
                    <section className="vendortile">
                        <section className="vendortile__info" >
                            <img src="https://image.wedmegood.com/resized/400X/uploads/vendor_cover_pic/32328/a7918014-0451-4f33-a44e-de26aea68ef8.jpg" className="vendortile__info__img" />
                            <p className="vendortile__info__title">
                                <span className="vendortile__info__title__info">asdf </span> 
                                <span className="vendortile__info__rating">asdf </span>
                            </p>
                            <p className="vendortile__info__location">
                                <span className="vendortile__info__locationName">sadf</span>
                                <span className="vendortile__info__reviewcount">1 reviews</span>
                            </p>
                            <p className="vendortile__info__price"><span className="vendortile__priceinfo">120</span></p>
                        </section>
                        <section className="vendortile__info" >
                            <img src="https://image.wedmegood.com/resized/400X/uploads/vendor_cover_pic/32328/a7918014-0451-4f33-a44e-de26aea68ef8.jpg" className="vendortile__info__img" />
                            <p className="vendortile__info__title">
                                <span className="vendortile__info__title__info">asdf </span> 
                                <span className="vendortile__info__rating">asdf </span>
                            </p>
                            <p className="vendortile__info__location">
                                <span className="vendortile__info__locationName">sadf</span>
                                <span className="vendortile__info__reviewcount">1 reviews</span>
                            </p>
                            <p className="vendortile__info__price"><span className="vendortile__priceinfo">120</span></p>
                        </section>
                        <section className="vendortile__info" >
                            <img src="https://image.wedmegood.com/resized/400X/uploads/vendor_cover_pic/32328/a7918014-0451-4f33-a44e-de26aea68ef8.jpg" className="vendortile__info__img" />
                            <p className="vendortile__info__title">
                                <span className="vendortile__info__title__info">asdf </span> 
                                <span className="vendortile__info__rating">asdf </span>
                            </p>
                            <p className="vendortile__info__location">
                                <span className="vendortile__info__locationName">sadf</span>
                                <span className="vendortile__info__reviewcount">1 reviews</span>
                            </p>
                            <p className="vendortile__info__price"><span className="vendortile__priceinfo">120</span></p>
                        </section>
                        <section className="vendortile__info" >
                            <img src="https://image.wedmegood.com/resized/400X/uploads/vendor_cover_pic/32328/a7918014-0451-4f33-a44e-de26aea68ef8.jpg" className="vendortile__info__img" />
                            <p className="vendortile__info__title">
                                <span className="vendortile__info__title__info">asdf </span> 
                                <span className="vendortile__info__rating">asdf </span>
                            </p>
                            <p className="vendortile__info__location">
                                <span className="vendortile__info__locationName">sadf</span>
                                <span className="vendortile__info__reviewcount">1 reviews</span>
                            </p>
                            <p className="vendortile__info__price"><span className="vendortile__priceinfo">120</span></p>
                        </section>
                        <section className="vendortile__info" >
                            <img src="https://image.wedmegood.com/resized/400X/uploads/vendor_cover_pic/32328/a7918014-0451-4f33-a44e-de26aea68ef8.jpg" className="vendortile__info__img" />
                            <p className="vendortile__info__title">
                                <span className="vendortile__info__title__info">asdf </span> 
                                <span className="vendortile__info__rating">asdf </span>
                            </p>
                            <p className="vendortile__info__location">
                                <span className="vendortile__info__locationName">sadf</span>
                                <span className="vendortile__info__reviewcount">1 reviews</span>
                            </p>
                            <p className="vendortile__info__price"><span className="vendortile__priceinfo">120</span></p>
                        </section>
                        
                        <section className="vendortile__info" >
                            <img src="https://image.wedmegood.com/resized/400X/uploads/vendor_cover_pic/32328/a7918014-0451-4f33-a44e-de26aea68ef8.jpg" className="vendortile__info__img" />
                            <p className="vendortile__info__title">
                                <span className="vendortile__info__title__info">asdf </span> 
                                <span className="vendortile__info__rating">asdf </span>
                            </p>
                            <p className="vendortile__info__location">
                                <span className="vendortile__info__locationName">sadf</span>
                                <span className="vendortile__info__reviewcount">1 reviews</span>
                            </p>
                            <p className="vendortile__info__price"><span className="vendortile__priceinfo">120</span></p>
                        </section>
                        
                        <section className="vendortile__info" >
                            <img src="https://image.wedmegood.com/resized/400X/uploads/vendor_cover_pic/32328/a7918014-0451-4f33-a44e-de26aea68ef8.jpg" className="vendortile__info__img" />
                            <p className="vendortile__info__title">
                                <span className="vendortile__info__title__info">asdf </span> 
                                <span className="vendortile__info__rating">asdf </span>
                            </p>
                            <p className="vendortile__info__location">
                                <span className="vendortile__info__locationName">sadf</span>
                                <span className="vendortile__info__reviewcount">1 reviews</span>
                            </p>
                            <p className="vendortile__info__price"><span className="vendortile__priceinfo">120</span></p>
                        </section>
                        
                        <section className="vendortile__info" >
                            <img src="https://image.wedmegood.com/resized/400X/uploads/vendor_cover_pic/32328/a7918014-0451-4f33-a44e-de26aea68ef8.jpg" className="vendortile__info__img" />
                            <p className="vendortile__info__title">
                                <span className="vendortile__info__title__info">asdf </span> 
                                <span className="vendortile__info__rating">asdf </span>
                            </p>
                            <p className="vendortile__info__location">
                                <span className="vendortile__info__locationName">sadf</span>
                                <span className="vendortile__info__reviewcount">1 reviews</span>
                            </p>
                            <p className="vendortile__info__price"><span className="vendortile__priceinfo">120</span></p>
                        </section>
                        
                        <section className="vendortile__info" >
                            <img src="https://image.wedmegood.com/resized/400X/uploads/vendor_cover_pic/32328/a7918014-0451-4f33-a44e-de26aea68ef8.jpg" className="vendortile__info__img" />
                            <p className="vendortile__info__title">
                                <span className="vendortile__info__title__info">asdf </span> 
                                <span className="vendortile__info__rating">asdf </span>
                            </p>
                            <p className="vendortile__info__location">
                                <span className="vendortile__info__locationName">sadf</span>
                                <span className="vendortile__info__reviewcount">1 reviews</span>
                            </p>
                            <p className="vendortile__info__price"><span className="vendortile__priceinfo">120</span></p>
                        </section>
                    </section>
			
			<style>
				{
					`
						.vendortile{display: flex; flex-wrap: wrap; justify-content: center;}
						.vendortile__info{border-radius: 2px;position: relative;transition:0.5s all;box-shadow: rgba(0,0,0,.05) 0 1px 5px 0, 0 1px 2px rgba(0,0,0,.05);box-sizing: border-box;margin: 0 15px 30px;}
						.vendortile__info:hover{box-shadow: 0 5px 20px rgba(0,0,0,.2);cursor:pointer;}
						.vendortile__info__img{border-radius: 2px 2px 0px 0px;background: #d7d7d7; }
						.vendortile__info__price{padding:10px;}
						.vendortile__info__title{display: flex;justify-content: space-between;padding:10px}
						.vendortile__info__title__info{font-weight: 600;white-space: nowrap; overflow: hidden; text-overflow: ellipsis;padding-right:5px;line-height: 20px;}
						.vendortile__info__rating{border-radius: 2px; color: #fff;background-color: #5ba829;min-width: 50px; max-width: 50px; height: 25px;    text-align: center; align-items: center; line-height: 23px}
						.vendortile__info__location{padding:0 10px 10px;white-space: nowrap; overflow: hidden; text-overflow: ellipsis;display: flex; justify-content: space-between;border: none; border-bottom: 1px dashed #bfbebe;} 
						.vendortile__info__reviewcount{font-size: 14px; font-weight: 400;}
						.vendortile__priceinfo{color: #e72e77;font-weight:700;}
					`
				}
			</style>
		</>
        );
    }

export default allvendors;
