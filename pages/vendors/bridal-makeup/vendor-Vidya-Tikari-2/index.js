import { useState } from "react";
import Breadcrumb from '../../../../components/breadcrumb'
import Button from '../../../../components/button'
import WdTile from "../../../../components/wd-tile"
const Makeupinfo = (props) => {
    //dropdown Json Format
    const breadcrumb=[
        { text: 'Home', link: '/' },
        { text: 'Vendors',link:'/vendors' },
        { text: 'Bridal Makeup',link:'/vendors/bridal-makeup' },
        { text: 'Vidya Tikari', isCurrentStep: true }
    ]
    const data=[
        {
           "creation_time":0,
           "badgeUrl":null,
           "sub_category":"",
           "city":"Delhi NCR",
           "rating":4,
           "no_of_view":2898,
           "vendor_icon_pic_url":"",
           "starting_price":6000,
           "company_name":" Chandni Singh Studio",
           "vendor_category_name":"Bridal Makeup",
           "badgeTitle":null,
           "rank":2,
           "currency":null,
           "id":273,
           "vendor_pic_url":"https:\/\/s3-us-west-2.amazonaws.com\/shaadiwishnewbucket\/c5f109f4-71e3-4823-9fff-a9ded33c7806.png",
           "region":"South Delhi",
           "desc":"Chandni Singh is a South Delhi Based bridal makeup artist who keeps every service extremely personalized as per the clients needs and demands. She has her salon in New Friends Colony area of Delhi. We love that her makeup is water proof and long lasting and she uses top of the line makeup products like MAC, Lancome, Channel and Bobbi Brown. At her salon every bride gets a drawer for her belongings. She caters to all pre-bridal services and offers air brush services as well. Her bridal makeup is understated and elegant. She even offers full face trials to the bride-to-be and even allows photographers at her salon.",
           "discount_offered":0
        },
        {
           "creation_time":0,
           "badgeUrl":null,
           "sub_category":"",
           "city":"Jalandhar",
           "rating":0,
           "no_of_view":1248,
           "vendor_icon_pic_url":"",
           "starting_price":0,
           "company_name":"Makeup By Prerna Khullar",
           "vendor_category_name":"Bridal Makeup",
           "badgeTitle":null,
           "rank":2,
           "currency":null,
           "id":204,
           "vendor_pic_url":"https:\/\/s3-us-west-2.amazonaws.com\/shaadiwishnewbucket\/b7e4cdbd-e738-4fd0-955d-8c7be84089db.png",
           "region":null,
           "desc":"Beauty is power, and makeup is something that really enhances it. Ever since I was a little girl, makeup and beauty was something I used to get fascinated with. I see makeup as something that creates magic and truly transforms a woman's face and more importantly, her confidence and attitude. I believe that make-up and hair styling is nothing short of the sparkle that creates magic and a big fan of fairytales, I want a happy magical ending for my clients as well!",
           "discount_offered":0
        },
        {
           "creation_time":0,
           "badgeUrl":null,
           "sub_category":"",
           "city":"Delhi NCR",
           "rating":4,
           "no_of_view":2993,
           "vendor_icon_pic_url":"",
           "starting_price":15000,
           "company_name":"Shruti Sharma",
           "vendor_category_name":"Bridal Makeup",
           "badgeTitle":null,
           "rank":2,
           "currency":null,
           "id":86,
           "vendor_pic_url":"https:\/\/s3-us-west-2.amazonaws.com\/shaadiwishnewbucket\/5a36c9b1-b5f0-4e21-a1f8-0ea83a729f99.jpg",
           "region":"South Delhi",
           "desc":"Bespoke Bridal Makeup Services by Shruti Sharma aims to beautify women by making their skin look perfectly stunning and then subtly enhancing their features like eyes or lips. She understands the necessity of the bridal glow that everyone expects and the way she styles, the bride looks naturally gorgeous",
           "discount_offered":0
        }
    ]
        return (
            <>		
					<Breadcrumb title={"Language"} breadcrumb={breadcrumb} />
                    <section className="vendor__det">
                    <section className="vendor__det__tile">
                        <section className="vendor__det__tile__info">
                            <img src="https://s3-us-west-2.amazonaws.com/shaadiwishnewbucket/aeda864e-5362-4c05-a94a-a3153490927b.png" className="vendor__det__tile__info__img" />
                            <p className="vendor__det__tile__info__title">
                                <span className="vendor__det__tile__info__title__info">asdf</span> 
                                <span className="vendor__det__tile__info__rating">4.1 </span>
                            </p>
                            <p className="vendor__det__tile__info__location">
                                <span className="vendor__det__tile__info__locationName">chennai</span>
                                <span className="vendor__det__tile__info__reviewcount">1 reviews</span>
                            </p>
                            <p className="vendor__det__tile__info__vpw">
                                <a href="" className="vendor__det__tile__info__vpw__lst"> <img className="vendor__det__tile__info__vpw__lst__img" src="https://cdn.shaadiwish.com/img/vendor-profile/photos.png" height="26" width="26"></img> Photos (5) </a>
                                <a href="" className="vendor__det__tile__info__vpw__lst"> <img className="vendor__det__tile__info__vpw__lst__img" src="https://cdn.shaadiwish.com/img/vendor-profile/videos.png" height="26" width="26"></img>Videos (0)  </a>
                                <a href="" className="vendor__det__tile__info__vpw__lst"> <img className="vendor__det__tile__info__vpw__lst__img" src="https://cdn.shaadiwish.com/img/vendor-profile/albums.png" height="26" width="26"></img>Albums (0) </a>
                                <a href="" className="vendor__det__tile__info__vpw__lst"> <img className="vendor__det__tile__info__vpw__lst__img" src="https://cdn.shaadiwish.com/img/vendor-profile/review.png" height="26" width="26"></img>Write Review </a>
                            </p>
                        </section>
                        <section className="vendor__det__tile__ptlst">
                            <h3 className="vendor__det__tile__ptlst__title">Photos (5)</h3>
                            <a href="/vendors/bridal-makeup/vendor-Vidya-Tikari-2/portfolio">
                                <img className="vendor__det__tile__ptlst__img" src="https://s3-us-west-2.amazonaws.com/shaadiwishnewbucket/7ce32794-6021-4431-b903-3a0330c6cabd.png" />
                            </a>
                            <a href="/vendors/bridal-makeup/vendor-Vidya-Tikari-2/portfolio">
                                <img className="vendor__det__tile__ptlst__img" src="https://s3-us-west-2.amazonaws.com/shaadiwishnewbucket/3adc02b8-3450-4db7-b3b3-7f7782f4df35.png" />
                            </a>
                            <a href="/vendors/bridal-makeup/vendor-Vidya-Tikari-2/portfolio">
                                <img className="vendor__det__tile__ptlst__img" src="https://s3-us-west-2.amazonaws.com/shaadiwishnewbucket/fca80ec6-1f80-4e0c-a5a4-0f64494d768c.png" />
                            </a>
                            <a href="/vendors/bridal-makeup/vendor-Vidya-Tikari-2/portfolio">
                                <img className="vendor__det__tile__ptlst__img" src="https://s3-us-west-2.amazonaws.com/shaadiwishnewbucket/07b374f3-9dc4-4e2d-bfea-8c03107dd725.png" />
                            </a>
                            <a href="/vendors/bridal-makeup/vendor-Vidya-Tikari-2/portfolio">
                                <img className="vendor__det__tile__ptlst__img" src="https://s3-us-west-2.amazonaws.com/shaadiwishnewbucket/a79a9912-46fe-49ae-a0a1-342842472132.png" />
                            </a>
                            <p className="vendor__det__tile__ptlst__btn"> <Button>View All Photos</Button> </p>
                        </section>
                        <section className="vendor__det__tile__revw">
                            <h3 className="vendor__det__tile__revw__title">Customer Reviews (3) </h3>
                            <section className="vendor__det__tile__revw__info">
                                <p className="vendor__det__tile__revw__info__ud">
                                    <img src="https://cdn.shaadiwish.com/img/default_user.png" className="vendor__det__tile__revw__info__ud__img" />
                                    <span className="vendor__det__tile__revw__info__ud__nm">Elina <span className="vendor__det__tile__revw__info__ud__nm__dt">Jun 07, 2018</span></span>
                                </p>
                                <p className="vendor__det__tile__revw__info__rt">4.0</p>
                                <p className="vendor__det__tile__revw__info__desc"> Thank you again for the GREAT FOOD you prepared for our wedding. Its impossible to describe how awesome his food really is. </p>
                            </section>
                            <section className="vendor__det__tile__revw__info">
                                <p className="vendor__det__tile__revw__info__ud">
                                    <img src="https://cdn.shaadiwish.com/img/default_user.png" className="vendor__det__tile__revw__info__ud__img" />
                                    <span className="vendor__det__tile__revw__info__ud__nm">Elina <span className="vendor__det__tile__revw__info__ud__nm__dt">Jun 07, 2018</span></span>
                                </p>
                                <p className="vendor__det__tile__revw__info__rt">4.0</p>
                                <p className="vendor__det__tile__revw__info__desc"> Thank you again for the GREAT FOOD you prepared for our wedding. Its impossible to describe how awesome his food really is. </p>
                            </section>
                            <p className="vendor__det__tile__ptlst__btn"> <Button bgcolor={`bgcolor`}> Write a Review</Button> </p>
                        </section>
                    </section>
                    <section className="vendor__det__tile__price">
                        <section className="vendor__det__tile__price__inner">
                        <section className="vendor__det__tile__price__inner__head">
                            <h3 className="vendor__det__tile__price__inner__head__lft">Starting Price </h3>
                            <p className="vendor__det__tile__price__inner__head__rt">Pricing Info</p>
                        </section>
                        <section className="vendor__det__tile__price__inner__info">
                            <p className="vendor__det__tile__price__inner__info__tt">Airbrush Makeup <span className="vendor__det__tile__price__inner__info__tt__rs">Rs.45000</span></p>
                            <p className="vendor__det__tile__price__inner__info__tt">Airbrush Makeup <span className="vendor__det__tile__price__inner__info__tt__rs">Rs.45000</span></p>
                            <p className="vendor__det__tile__price__inner__info__tt">Airbrush Makeup <span className="vendor__det__tile__price__inner__info__tt__rs">Rs.45000</span></p>
                            <p className="vendor__det__tile__price__inner__info__tt">Airbrush Makeup <span className="vendor__det__tile__price__inner__info__tt__rs">Rs.45000</span></p>
                        </section>
                        <section className="vendor__det__tile__price__inner__tot">
                            <h5 className="vendor__det__tile__price__inner__tot__tt">45,000 <span className="vendor__det__tile__price__inner__tot__tt__pf">per function</span></h5>
                        </section>
                        </section>
                        <section className="vendor__det__cndet">
                            <Button>Send Message</Button>
                            <Button bgcolor={'bgcolor'}>View Contact</Button>
                        </section>
                    </section>
                    </section>
                    <section className="vendor__det__sm">
                        <h2 className="vendor__det__sm__title"> Similar Vendors </h2>
                        <WdTile data={data} />
                    </section>
                    <style jsx>{
                        `
                        .vendor__det{display: flex;margin: 0 15px;}
                        .vendor__det__tile{display: flex; flex-wrap: wrap; justify-content: center;max-width: 720px; min-width: 720px;}
						.vendor__det__tile__info{border-radius: 2px;width:100%;position: relative;transition:0.5s all;box-shadow: rgba(0,0,0,.05) 0 1px 5px 0, 0 1px 2px rgba(0,0,0,.05);box-sizing: border-box;margin: 0 0 30px 0;}
						.vendor__det__tile__info:hover{box-shadow: 0 5px 20px rgba(0,0,0,.2);}
						.vendor__det__tile__info__img{border-radius: 2px 2px 0px 0px;background: #d7d7d7;width:100%; height: 300; object-fit: cover;}
						.vendor__det__tile__info__vpw{padding:10px;display: flex; align-items: center; justify-content: space-around;}
						.vendor__det__tile__info__vpw__lst{margin: 10px;font-size: 13px; color: #4c4c4c; font-weight: 600;}
						.vendor__det__tile__info__vpw__lst__img{margin:0 auto 5px;display:block;}
						.vendor__det__tile__info__title{display: flex;justify-content: space-between;padding:10px}
						.vendor__det__tile__info__title__info{font-weight: 600;white-space: nowrap; overflow: hidden; text-overflow: ellipsis;padding-right:5px;line-height: 20px;}
						.vendor__det__tile__info__rating{border-radius: 2px; color: #fff;background-color: #5ba829;min-width: 50px; max-width: 50px; height: 25px;    text-align: center; align-items: center; line-height: 23px}
						.vendor__det__tile__info__location{padding:0 10px 10px;white-space: nowrap; overflow: hidden; text-overflow: ellipsis;display: flex; justify-content: space-between;border: none; border-bottom: 1px dashed #bfbebe;} 
						.vendor__det__tile__info__reviewcount{font-size: 14px; font-weight: 400;}
						.vendor__det__tile__price__innerinfo{color: #e72e77;font-weight:700;}

                        .vendor__det__tile__ptlst{display:flex;flex-wrap: wrap;margin: 0 0 30px 0;background:#fbfbfb;padding:15px;}
                        .vendor__det__tile__ptlst__btn{flex:1 100%;}
                        .vendor__det__tile__ptlst__title{font-size: 18px;flex:1 100%; line-height: 28px; font-weight: bold; margin-top: 15px; margin-bottom: 5px; color: #000; text-transform: capitalize;}
                        .vendor__det__tile__ptlst__img{height: 160px; width:186px;margin:0 10px 10px 0; background-color: #b2b2b2; object-fit: cover;}

                        .vendor__det__tile__revw{margin:0 0 30px 15px}
                        .vendor__det__tile__revw__info{display:flex;flex-wrap: wrap; justify-content: space-between; box-shadow: 0 4px 8px 0 rgb(0 0 0 / 20%);margin:10px 0 20px; transition: 0.3s; background-color: white; padding: 15px;}
                        .vendor__det__tile__revw__title{font-size: 18px; line-height: 28px; font-weight: bold; margin-top: 15px; margin-bottom: 5px; color: #000; text-transform: capitalize;}
                        .vendor__det__tile__revw__info__ud{display:flex;align-items: center;}
                        .vendor__det__tile__revw__info__ud__img{border-radius: 50%;width: 40px; aspect-ratio: auto 40 / 40; height: 40px;}
                        .vendor__det__tile__revw__info__ud__nm{display:block;font-size: 16px;font-weight:700; color: #000;margin-left: 5px;}
                        .vendor__det__tile__revw__info__ud__nm__dt{font-size: 12px; color: #b5b5b5; font-weight: lighter;padding-top: 5px; display: block;}
                        .vendor__det__tile__revw__info__rt{background-color: #4CAF50; font-size: 16px; color: #fff; font-weight: 500; border-radius: 3px; margin-right: 0; margin-bottom: 0; padding: 5px;line-height: 16px; display: table;}
                        .vendor__det__tile__revw__info__desc{flex: 1 100%; font-size: 15px; color: #1a1a1a; font-weight: 300; line-height: 23px; margin: 14px 0 0;}

                        .vendor__det__sm{border-top: 1px dotted #b2b2b2;margin:25px 0 0;background-color: #fbfbfb;}
                        .vendor__det__sm__title{font-size: 28px; line-height: 39px;font-weight:400; color: #000; margin:25px 0 15px 0;text-align:center; text-transform: capitalize;}

                        /* Right */
                        .vendor__det__tile__price{width:100%;margin-left:25px;}
                        .vendor__det__tile__price__inner{box-shadow: 0 1px 2px rgb(0 0 0 / 12%);border-radius: 2px;flex: 1 1;}
                        .vendor__det__tile__price__inner__head{display:flex;padding: 15px;justify-content: space-between;align-items: center;}
                        .vendor__det__tile__price__inner__head__lft{font-size: 18px;font-weight:600;}
                        .vendor__det__tile__price__inner__head__rt{color: #e72e77;position:relative;font-size: 16px; font-weight: 400;padding-right: 15px;}
                        .vendor__det__tile__price__inner__head__rt:after{position: absolute; content: ''; right: 0; top: 50%; border: 5px solid transparent; border-top: 6px solid #e72e77; transform: translateY(-50%); margin-top: 5px;}
                        .vendor__det__tile__price__inner__info{border-top: 1px solid #d7d7d7;border-bottom: 1px solid #d7d7d7;background-color: #fbfbfb;padding: 15px;display:grid;    grid-template-columns: repeat(2,1fr); grid-gap: 10px;}
                        .vendor__det__tile__price__inner__info__tt{font-weight: 600;margin:10px 0 5px;}
                        .vendor__det__tile__price__inner__info__tt__rs{color: #909090;display:block;padding-top:5px;font-weight: 400;}
                        .vendor__det__tile__price__inner__tot{padding:15px;}
                        .vendor__det__tile__price__inner__tot__tt{font-size: 20px; font-weight: 600;color: #e72e77;}
                        .vendor__det__tile__price__inner__tot__tt__pf{font-size: 14px; font-weight: 400;}
                        .vendor__det__cndet{display:flex;box-shadow: 0 4px 8px 0 rgb(0 0 0 / 20%); margin: 30px 0 20px; padding: 0 0 10px;}
                        `
                    }</style>
		</>
        );
    }

export default Makeupinfo;
