import { useState } from "react";
import Breadcrumb from '../../../components/breadcrumb'
import PrizeInfo from '../../../core-components/page-component'
const allvendors = (props) => {
    //dropdown Json Format
    const breadcrumb=[
        { text: 'Home', link: '/' },
        { text: 'Vendors',link:'/vendors' },
        { text: 'Bridal Makeup',isCurrentStep: true }
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
           },
           {
              "creation_time":0,
              "badgeUrl":null,
              "sub_category":"",
              "city":"Delhi NCR",
              "rating":3,
              "no_of_view":2727,
              "vendor_icon_pic_url":"",
              "starting_price":15000,
              "company_name":"Jasmeet Kapany",
              "vendor_category_name":"Bridal Makeup",
              "badgeTitle":null,
              "rank":2,
              "currency":null,
              "id":87,
              "vendor_pic_url":"https:\/\/s3-us-west-2.amazonaws.com\/shaadiwishnewbucket\/127c4e0a-ce8f-49f4-ae30-7827837395ae.jpg",
              "region":"Gurgaon",
              "desc":"A professional makeup artist based in Delhi, Jasmeet Kapany's forte is to enhance the pretty features of the bride and make them look more beautiful at the wedding. She is known for her airbrush makeup. The style of her makeup is very minimalistic and simple. She offers customised bridal packages as per the requirement of the client",
              "discount_offered":0
           },
           {
              "creation_time":0,
              "badgeUrl":null,
              "sub_category":"",
              "city":"Delhi NCR",
              "rating":5,
              "no_of_view":12784,
              "vendor_icon_pic_url":"",
              "starting_price":40000,
              "company_name":"Vidya Tikari",
              "vendor_category_name":"Bridal Makeup",
              "badgeTitle":null,
              "rank":2,
              "currency":null,
              "id":2,
              "vendor_pic_url":"https:\/\/s3-us-west-2.amazonaws.com\/shaadiwishnewbucket\/a49afd0c-57df-4a12-9cb7-38eb45a80034.png",
              "region":"South Delhi",
              "desc":"From a humble beginning in 1991, Vidya has grown to become a professional name to be reckoned with in the fields of Hair and Makeup. From catering to events like the \"Commonwealth Games in 2010 where the hair and makeup was done for over 9,000 performers\" which also landed her name in the \"Limca book of records 2011\" to the first ever \"Formula 1 Grand Prix\", Vidya and her team have been servicing thousands of clients every year from around the globe. Since then, Vidya has shaped stunning and exquisite looks for Bollywood celebrities like Madhuri Dixit, Sushmita Sen, Aishwarya Rai, Deepika Padukone, Bipasha Basu, Malaika Arora Khan, Priyanka Chopra, Mallika Sherawat, Gul Panag, Yana, Anoushka Shankar, Abhay Deol and has given a new name to the concept \"male grooming\" with Vikas Khanna, Virat Kohli, Vijender Singh, Nagesh Kukunoor, Rajeev Khandelwal, Chetan Bhagat to name a few. As individuals, a wedding is a new chapter in one's life keeping that in mind the makeup is created to match the moment which will last forever. From subtle to dramatic to bold or just natural, they do it all. From morning, evening to late night weddings, they create looks that match the special day and time for both the Bride and the Groom.  The Service begins with an assistant who will lead you to a room that will secure the material you possess and help set the mood for the next few hours to come.  What follows next are the 3 hours of pure bliss in which the bridal hair, make up, draping and nails will complete the service for the next leg in the story waiting to be unveiled.",
              "discount_offered":0
           },
           {
              "creation_time":0,
              "badgeUrl":null,
              "sub_category":"",
              "city":"Amritsar",
              "rating":5,
              "no_of_view":3027,
              "vendor_icon_pic_url":"",
              "starting_price":25000,
              "company_name":"Suman Suruchi Chandni Celebrity Makeup Artist",
              "vendor_category_name":"Bridal Makeup",
              "badgeTitle":null,
              "rank":2,
              "currency":null,
              "id":609,
              "vendor_pic_url":"https:\/\/s3-us-west-2.amazonaws.com\/shaadiwishnewbucket\/fba13e02-aa32-4c3f-a22b-4d93b50a997a.png",
              "region":null,
              "desc":"Greetings! From Suman Suruchi Chandni Makeup Team . Planning to get hitched and looking for an experienced makeup artist ? Well that you are surely at a right place . We as a collaborated team of makeup artist have a 15yr experience ,done over 3500+ international and domestic destination weddings. We have done makeup of famous celebrities including Manushi Chillar , Mahima Chaudhary ..... and the list is unending . We have an expertise in bridal makeup and accredited as the best makeup team in north asia specifically , as a makeup artist professional team we strive hard to give every bride a magical experience afterall its your big day and your smile is all we care about . And for all the chachi's , maami's  and bua's out there don't get dissapointed we do have makeup packages specially for the family as well the Suman Suruchi Chandni Makeup Team take care of you and your family . Your Family is Our Family. Give us a chance , We  promise you won't leaave dissapointed . Till then MEET YOU AT THE WEDDING !",
              "discount_offered":0
           },
           {
              "creation_time":0,
              "badgeUrl":null,
              "sub_category":"",
              "city":"Delhi NCR",
              "rating":0,
              "no_of_view":2192,
              "vendor_icon_pic_url":"",
              "starting_price":15000,
              "company_name":"Makeup by Deeksha",
              "vendor_category_name":"Bridal Makeup",
              "badgeTitle":null,
              "rank":2,
              "currency":null,
              "id":630,
              "vendor_pic_url":"https:\/\/s3-us-west-2.amazonaws.com\/shaadiwishnewbucket\/e1b65210-bcd1-4d38-ab8c-2d1791ef91b3.png",
              "region":null,
              "desc":"Makeup by Deeksha is famous for all kinds of beauty services including lazer treatment, beauty treatment. You can book an appointment for pre bridal, bridal makeup, party makeup. The professional makeup artists are great at styling south Indian brides, Christian brides and Indian Brides. ",
              "discount_offered":0
           },
           {
              "creation_time":0,
              "badgeUrl":null,
              "sub_category":"",
              "city":"Delhi NCR",
              "rating":4,
              "no_of_view":1441,
              "vendor_icon_pic_url":"",
              "starting_price":50000,
              "company_name":"Swati Verma Makeovers",
              "vendor_category_name":"Bridal Makeup",
              "badgeTitle":null,
              "rank":2,
              "currency":null,
              "id":269,
              "vendor_pic_url":"https:\/\/s3-us-west-2.amazonaws.com\/shaadiwishnewbucket\/b0c87fe1-62b8-4181-b0b6-a1c684e35ce8.png",
              "region":"Central Delhi",
              "desc":"Internationally trained Pro Makeup Artist, Swati is your go-to Makeup Artist for all your beauty needs. Makeup is her passion and having graduated from the best makeup institutes of the world, she can assure that her talent has been shaped by the best in the industry. She is a balance between the talent, passion, knowledge, experience and hard work! She has been in the industry for over a long time, making clients look and feel HEAVENLY! Renowned for her signature eye makeup makes her brides and party goers look absolutely stunning. Swati can give you either the ultimate in glamour factor or a sophisticated natural look for a flawless complexion. Whatever look you desire, she is guaranteed to make you look like a STAR! ",
              "discount_offered":0
           },
           {
              "creation_time":0,
              "badgeUrl":null,
              "sub_category":"",
              "city":"Delhi NCR",
              "rating":5,
              "no_of_view":5921,
              "vendor_icon_pic_url":"",
              "starting_price":10000,
              "company_name":"Niti Luthra ",
              "vendor_category_name":"Bridal Makeup",
              "badgeTitle":null,
              "rank":1,
              "currency":null,
              "id":283,
              "vendor_pic_url":"https:\/\/s3-us-west-2.amazonaws.com\/shaadiwishnewbucket\/11eeedad-c324-489d-856f-6f017593606c.png",
              "region":"Noida",
              "desc":"Niti Luthra is a new generation bridal makeup artist. She started her career as a French language trainer in a school, but her passion was always in fashion industry and therefore she started doing makeup. She is also awarded as the Best Centre Head at NIFD. She has even worked and assisted some of the renowned makeup artists. And, then she decided to launch her own label called Niti Luthra",
              "discount_offered":0
           },
           {
              "creation_time":0,
              "badgeUrl":null,
              "sub_category":"",
              "city":"Delhi NCR",
              "rating":4,
              "no_of_view":2547,
              "vendor_icon_pic_url":"",
              "starting_price":45000,
              "company_name":"Anubha Dawar",
              "vendor_category_name":"Bridal Makeup",
              "badgeTitle":null,
              "rank":1,
              "currency":null,
              "id":594,
              "vendor_pic_url":"https:\/\/s3-us-west-2.amazonaws.com\/shaadiwishnewbucket\/26f6eaf1-309b-4aa8-b347-69eb30fa9369.png",
              "region":"Gurgaon",
              "desc":"The former Head of Trainings at Make-up Studio India,Anubha has honed her skills with the\r\nrenowned make-up artists in USA, UK & Dubai. With having conducted more than 100 seminars on\r\na Pan-India level, she is reaching out and educating a large number of students and make-up\r\nartists about the latest makeup trends.\r\nSpecialising in bridal makeup, she has been in demand for bridal makeups throughout country,\r\nwith a clientele that includes various celebrities as well.\r\nAlong with training and Education, Anubha has extensively worked for shows and projects for\r\nMake-up Studio. Projects like collaborations with Anthony Cole for a Wella shoot, Fashion Show\r\nfor Kimaya, Khushali Kumar, FDCI, NIFT, Clarions Diva, North Miss India are to name a few. She\r\nhas done shoots for Asiana Bridal UK, various top designers and magazines as well.",
              "discount_offered":0
           },
           {
              "creation_time":0,
              "badgeUrl":null,
              "sub_category":"",
              "city":"Delhi NCR",
              "rating":5,
              "no_of_view":4323,
              "vendor_icon_pic_url":"",
              "starting_price":15000,
              "company_name":"Makeup By Shagun",
              "vendor_category_name":"Bridal Makeup",
              "badgeTitle":null,
              "rank":1,
              "currency":null,
              "id":30,
              "vendor_pic_url":"https:\/\/s3-us-west-2.amazonaws.com\/shaadiwishnewbucket\/fd48a1b2-19e3-422e-b8bb-5fd681fb0ffd.jpg",
              "region":"South Delhi",
              "desc":"Professional make-up artist based in New Delhi, India - traveling all over the world for assignments. Get in touch for party, bridal, shoot requirements!",
              "discount_offered":0
           },
           {
              "creation_time":0,
              "badgeUrl":null,
              "sub_category":"",
              "city":"Amritsar",
              "rating":0,
              "no_of_view":2681,
              "vendor_icon_pic_url":"",
              "starting_price":0,
              "company_name":"Heera Anthony",
              "vendor_category_name":"Bridal Makeup",
              "badgeTitle":null,
              "rank":1,
              "currency":null,
              "id":381,
              "vendor_pic_url":"https:\/\/s3-us-west-2.amazonaws.com\/shaadiwishnewbucket\/1b6b28ee-adda-42f5-86ec-e937fe6e30fb.png",
              "region":null,
              "desc":"\"Heera Anthony is your go-to makeup artist for all your beauty needs. Makeup is his passion and having worked in the industry for quite a long time now, you can be assured that you will look like a daydream on your D-day.\r\n\r\nHaving worked with several renowned bollywood celebrities like\r\n\r\nDeepika Padukone, Malaika Arora Khan, Shraddha Kapoor, Ileana D'Cruz, Pooja Bhatt, Mandana Karimi,Satinder Satti, Gurdas Maan amongst others, he is a balance between talent, hard work, experience and creativity.\r\n\r\nHe has also teamed up with several media houses and dolled up models for advertising campaigns. He travles globally and has worked in several fashion shows including Lakme Fashion Week, Awaaz Punjab Di.\"",
              "discount_offered":0
           }
        ]
        return (
            <>		
               <PrizeInfo />
					<Breadcrumb title={"Language"} breadcrumb={breadcrumb} />
                    <section className="vendortile">
                        {data.map((bm,index)=>
                        <section className="vendortile__info" onClick={() => { window.location.assign('/vendors/bridal-makeup/vendor-Vidya-Tikari-2')}} >
                            <img src={bm.vendor_pic_url} className="vendortile__info__img" />
                            <p className="vendortile__info__title">
                                <span className="vendortile__info__title__info">{bm.vendor_category_name}</span> 
                                <span className="vendortile__info__rating">{bm.rank} </span>
                            </p>
                            <p className="vendortile__info__location">
                                <span className="vendortile__info__locationName">{bm.city}</span>
                                <span className="vendortile__info__reviewcount">{bm.no_of_view} reviews</span>
                            </p>
                            <p className="vendortile__info__price"><span className="vendortile__priceinfo">{bm.starting_price}</span></p>
                        </section>
                        )}
                        
                    </section>
			
			<style>
				{
					`
						.vendortile{display: flex; flex-wrap: wrap; justify-content: center;margin-left:-15px;}
						.vendortile__info{border-radius: 2px;width:300px;position: relative;transition:0.5s all;box-shadow: rgba(0,0,0,.05) 0 1px 5px 0, 0 1px 2px rgba(0,0,0,.05);box-sizing: border-box;margin: 0 15px 30px;}
						.vendortile__info:hover{box-shadow: 0 5px 20px rgba(0,0,0,.2);cursor:pointer;}
						.vendortile__info__img{border-radius: 2px 2px 0px 0px;background: #d7d7d7;width: 418px; height: 227px; object-fit: cover;}
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
