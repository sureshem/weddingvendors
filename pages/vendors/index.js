import { useState } from "react";
import Breadcrumb from '../../components/breadcrumb'
const allvendors = (props) => {
    //dropdown Json Format
    const breadcrumb=[
        { text: 'Home', link: '/' },
        { text: 'Vendors', isCurrentStep: true }
    ]
    /* Vendors list */
    const vendors=[
        {
            img:'https://s3-us-west-2.amazonaws.com/shaadiwishnewbucket/c5c65d95-c162-4a3a-8742-e21dc090cf2ebig.jpg',
            text:'Bridal Makeup',
            slug:"/vendors/bridal-makeup"
        },
        {
            img:'https://s3-us-west-2.amazonaws.com/shaadiwishnewbucket/2a70e8be-f700-47fa-bd2b-6ae0d8e6014fbig.jpg',
            text:'Bridal Wear',
            slug:"/vendors/all/bridal-wear"
        },
        {
            img:'https://s3-us-west-2.amazonaws.com/shaadiwishnewbucket/a0a78d29-0a8a-4b3d-929f-933a9c516c61big.jpg',
            text:'Groom Wear',
            slug:"/vendors/all/groom-wear"
        },
        {
            img:'https://s3-us-west-2.amazonaws.com/shaadiwishnewbucket/d24d5f4c-06d5-426c-9719-f723b8afdc2cbig.jpg',
            text:'Mehendi ArtistsBridal Makeup',
            slug:"/vendors/all/mehendi-artists"
        },
        {
            img:'https://s3-us-west-2.amazonaws.com/shaadiwishnewbucket/058984d3-dbb3-48c8-8494-6fece9e5367bbig.jpg',
            text:'Other Wedding Services',
            slug:"/vendors/all/other-wedding-services"
        },{
            img:'https://s3-us-west-2.amazonaws.com/shaadiwishnewbucket/a0a78d29-0a8a-4b3d-929f-933a9c516c61big.jpg',
            text:'Groom Wear',
            slug:"/vendors/all/groom-wear"
        },
        {
            img:'https://s3-us-west-2.amazonaws.com/shaadiwishnewbucket/d24d5f4c-06d5-426c-9719-f723b8afdc2cbig.jpg',
            text:'Mehendi ArtistsBridal Makeup',
            slug:"/vendors/all/mehendi-artists"
        },
        {
            img:'https://s3-us-west-2.amazonaws.com/shaadiwishnewbucket/058984d3-dbb3-48c8-8494-6fece9e5367bbig.jpg',
            text:'Other Wedding Services',
            slug:"/vendors/all/other-wedding-services"
        }
    ]
    console.log(props,'asdf')
        return (
            <>		
					<Breadcrumb title={"Language"} breadcrumb={breadcrumb} />
                    <section className="vendortile">
                        <h2 className="vendortile__title"> Wedding Vendors </h2>
                        <h3 className="vendortile__subtitle">Select from our curated list of service providers in your city</h3>
                        <section className="vendortile__list">
                            {vendors.map((vl,index) =>
                                <section className="vendortile__list__item" onClick={() => { window.location.assign(vl.slug)}}>
                                    <img className="vendortile__list__item__img" src={vl.img} />
                                    <p className="vendortile__list__item__info">{vl.text}</p>
                                </section>
                            )}
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
                        .vendortile__list__item__info{position: absolute;width:100%; left: 50%; top: 50%;z-index:2;font-size: 18px; color: #fff; text-align: center; text-transform: capitalize; line-height: 20px; transform: translate(-50%,-50%);}
					`
				}
			</style>
		</>
        );
    }

export default allvendors;
