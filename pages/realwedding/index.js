import HeadMeta from '../../core-components/head.meta'
import styles from '../../styles/Home.module.css'
import Select from 'react-select';
import Breadcrumb from '../../components/breadcrumb'
export default function realwedding(props) {
  const pageTitle = "Real Wedding"

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
  //dropdown Json Format
  const breadcrumb=[
    { text: 'Home', link: '/' },
    { text: 'Real Weddings', isCurrentStep: true }
  ]
  const realwedding = [
    {
       "id":2264,
       "title":"Unita & Nikhil",
       "slug":"unita-nikhil-abu-dhabi-wedding-2264",
       "description":"Gorgeous Wedding In The Middle Of A Desert With Only 8 Guests!\n",
       "love_count":6,
       "blog_url":"https://www.wedmegood.com/blog/gorgeous-wedding-in-the-middle-of-a-desert-with-only-8-guests/",
       "culture_master":{
          "id":23,
          "name":"Others",
          "slug":"others"
       },
       "theme_master":{
          "id":11,
          "name":"International",
          "slug":"international-weddings"
       },
       "polygon":{
          "id":2060,
          "name":"Abu Dhabi",
          "slug":"abu-dhabi"
       },
       "old_banner_left_image":null,
       "image":{
          "id":163160,
          "url":"https://image.wedmegood.com/resized/%%X/uploads/images/d495527bf9f5460dab6cf8a0057ad4b1realwedding/Unita_NikhilWeddingCCP_8179.JPG?crop=205,512,1062,597",
          "image_info_id":5264564,
          "section":null,
          "width":1335,
          "height":2000,
          "slug":null
       },
       "isActive":0,
       "real_wedding_status":{
          "id":3,
          "name":"Active"
       },
       "images_count":85,
       "card_left_image":{
          "id":163174,
          "url":"https://image.wedmegood.com/resized/%%X/uploads/images/14e5b6e5b7c9436c8dcd605c3fb16f45realwedding/Unita_NikhilWeddingCCP_8672.JPG",
          "image_info_id":5264576,
          "section":null,
          "width":2000,
          "height":1335,
          "slug":null
       },
       "card_right_image":{
          "id":163157,
          "url":"https://image.wedmegood.com/resized/%%X/uploads/images/b6d79845f256451bbd6af495d2fbbd0frealwedding/Unita_NikhilWeddingCCP_8946.JPG",
          "image_info_id":5264559,
          "section":null,
          "width":2000,
          "height":1335,
          "slug":null
       }
    },
    {
       "id":1340,
       "title":"Sonam & Shrenik",
       "slug":"sonam-shrenik-abu-dhabi-wedding-1340",
       "description":"A Beach Side Wedding With The Bride In A Ravishing Floral Lehenga\n",
       "love_count":11,
       "blog_url":"https://www.wedmegood.com/blog/a-beach-side-wedding-with-the-bride-in-a-ravishing-floral-lehenga/",
       "culture_master":{
          "id":23,
          "name":"Others",
          "slug":"others"
       },
       "theme_master":{
          "id":11,
          "name":"International",
          "slug":"international-weddings"
       },
       "polygon":{
          "id":2060,
          "name":"Abu Dhabi",
          "slug":"abu-dhabi"
       },
       "old_banner_left_image":null,
       "image":{
          "id":106184,
          "url":"https://image.wedmegood.com/resized/%%X/uploads/images/f957f55c81214d94a8a2049ca1a1ad60realwedding/FIHFotografie_Day3-335.jpg?crop=311,840,1631,917",
          "image_info_id":2872679,
          "section":null,
          "width":2670,
          "height":4000,
          "slug":null
       },
       "isActive":0,
       "real_wedding_status":{
          "id":3,
          "name":"Active"
       },
       "images_count":153,
       "card_left_image":{
          "id":105921,
          "url":"https://image.wedmegood.com/resized/%%X/uploads/images/d565761d9f88433dab6c7c19ff1b7df8realwedding/FIHFotografie_Day1-149.jpg",
          "image_info_id":2868613,
          "section":null,
          "width":2670,
          "height":4000,
          "slug":null
       },
       "card_right_image":{
          "id":105802,
          "url":"https://image.wedmegood.com/resized/%%X/uploads/images/afd0be0295604c7198b228e4c40b00d8realwedding/FIHFotografie_Day1-31.jpg",
          "image_info_id":2868461,
          "section":null,
          "width":2670,
          "height":4000,
          "slug":null
       }
    },
    {
       "id":1074,
       "title":"Krupa & Ruchit ",
       "slug":"krupa-ruchit--abu-dhabi-marwari-wedding-1074",
       "description":"A Beautiful Abu Dhabi Wedding With Gorgeous Decor And The Bride In A Stunning Lehenga\n",
       "love_count":9,
       "blog_url":null,
       "culture_master":{
          "id":11,
          "name":"Marwari ",
          "slug":"marwari"
       },
       "theme_master":{
          "id":7,
          "name":"Grand & Luxurious",
          "slug":"grand-luxurious-weddings"
       },
       "polygon":{
          "id":2060,
          "name":"Abu Dhabi",
          "slug":"abu-dhabi"
       },
       "old_banner_left_image":null,
       "image":{
          "id":89805,
          "url":"https://image.wedmegood.com/resized/%%X/uploads/images/d47f2cacce7b40f682f5f27e89dbdfe0realwedding/02_RNF_RUGOTHISKRU_POOLPARTY_WEDDING_ATIFNIGHT-1007-AMEYA.jpg?crop=208,30,1521,855",
          "image_info_id":2397316,
          "section":null,
          "width":1920,
          "height":1280,
          "slug":null
       },
       "isActive":0,
       "real_wedding_status":{
          "id":3,
          "name":"Active"
       },
       "images_count":109,
       "card_left_image":{
          "id":89780,
          "url":"https://image.wedmegood.com/resized/%%X/uploads/images/1d17a9ac59874bb19d20df20af5585f3realwedding/01_RNF_RUGOTHISKRU_MEHENDI_UMRAONIGHT-5769-ADI.jpg",
          "image_info_id":2397244,
          "section":null,
          "width":1280,
          "height":1920,
          "slug":null
       },
       "card_right_image":{
          "id":89802,
          "url":"https://image.wedmegood.com/resized/%%X/uploads/images/7e5ef6925d3b4f4da4baea52c2247267realwedding/RNF_RUKRU_ENGAGEMENT-2732-TEJ.JPG",
          "image_info_id":2397279,
          "section":null,
          "width":1280,
          "height":1920,
          "slug":null
       }
    },
    {
       "id":832,
       "title":"Shreya & Ashish",
       "slug":"shreya-ashish-abu-dhabi",
       "description":"A Dreamy Beach Side Wedding With The Bride & Groom In Gorgeous Pastel Colours",
       "love_count":7,
       "blog_url":"https://www.wedmegood.com/blog/a-dreamy-beach-side-wedding-with-the-bride-groom-in-gorgeous-pastel-colours/",
       "culture_master":{
          "id":2,
          "name":"Punjabi /Sikh ",
          "slug":"punjabi-sikh"
       },
       "theme_master":{
          "id":1,
          "name":"Destination",
          "slug":"destination-weddings"
       },
       "polygon":{
          "id":2060,
          "name":"Abu Dhabi",
          "slug":"abu-dhabi"
       },
       "old_banner_left_image":"https://image.wedmegood.com/resized/%%X/uploads/real_wedding_banner_left/832/1547794784_Wedding_4611.jpg",
       "image":null,
       "isActive":1,
       "real_wedding_status":{
          "id":3,
          "name":"Active"
       },
       "images_count":100,
       "card_left_image":{
          "id":79782,
          "url":"https://image.wedmegood.com/resized/%%X/uploads/images/734c8605f4ca4734be3452e02e066574realwedding/1547794056_A.jpg",
          "image_info_id":1941014,
          "section":null,
          "width":4000,
          "height":5753,
          "slug":null
       },
       "card_right_image":{
          "id":79783,
          "url":"https://image.wedmegood.com/resized/%%X/uploads/images/419cfb30e2ad41fab00d0707c8bd9918realwedding/1547794056_F.jpg",
          "image_info_id":1941015,
          "section":null,
          "width":6240,
          "height":4160,
          "slug":null
       }
    },
    {
       "id":458,
       "title":"Khushdeep & Sabah",
       "slug":"khushdeep-sabah-uae",
       "description":"Glamorous Wedding At The Emirates Palace With A Sweet Brazilian Carnival!",
       "love_count":37,
       "blog_url":"",
       "culture_master":{
          "id":2,
          "name":"Punjabi /Sikh ",
          "slug":"punjabi-sikh"
       },
       "theme_master":{
          "id":1,
          "name":"Destination",
          "slug":"destination-weddings"
       },
       "polygon":{
          "id":2060,
          "name":"Abu Dhabi",
          "slug":"abu-dhabi"
       },
       "old_banner_left_image":"https://image.wedmegood.com/resized/%%X/uploads/real_wedding_banner_left/458/1487062694_Anand_Karaj_16.jpg",
       "image":null,
       "isActive":1,
       "real_wedding_status":{
          "id":3,
          "name":"Active"
       },
       "images_count":51,
       "card_left_image":{
          "id":61739,
          "url":"https://image.wedmegood.com/resized/%%X/uploads/images/14f6c9abdcde4105b13d338a3ae07883realwedding/1487062696_Anand_Karaj_3.jpg",
          "image_info_id":644515,
          "section":null,
          "width":1000,
          "height":668,
          "slug":null
       },
       "card_right_image":{
          "id":61740,
          "url":"https://image.wedmegood.com/resized/%%X/uploads/images/a7312cfff09f48f9ae0058b201708550realwedding/1487062697_Anand_Karaj_6.jpg",
          "image_info_id":644516,
          "section":null,
          "width":1000,
          "height":583,
          "slug":null
       }
    }
 ]
 console.log(props,"real")
  return (
    <>
    <div className={styles.container}>
      <HeadMeta  title={pageTitle} /> 
      <section className="rw">
        <section className="rw__banner">
          <img src="https://images.wedmegood.com/images/rw-banner.png" className="rw__banner__img" />
          <section className="rw__bannerinfo">
            <h2 className="rw__bannerinfo__title">Real Weddings on WedMeGood | Photos & Trending Ideas</h2>
            <h3 className="rw__bannerinfo__subtitle">Browse pictures from real weddings shared by couples on WedMeGood. Know latest wedding trends, outfit ideas, vendors chosen by real brides & grooms in different cities and culture.</h3>
          </section>
        </section>
        <section className="rw__filter">
        <section className="rw__filter__opt">
          <Select className="" options={vendorSearch} /> 
        </section>
        <section className="rw__filter__opt">
          <Select className="" options={vendorSearch} /> 
        </section>
        <section className="rw__filter__opt">
          <Select className="" options={vendorSearch} /> 
        </section>
        <section className="rw__filter__opt">
          <input type="" className="rw__filter__frmctrl" /> 
        </section>
        </section>
        
        <Breadcrumb title={"Language"} breadcrumb={breadcrumb} />

        <section className="rw____list">
          {realwedding.map((rw,index) =>
            <section className="rw____list__itm">
              <img src={rw.card_left_image.url} height={rw.card_right_image.width} />
            {/* <img className="rw____list__itm__bgimg" src="https://image.wedmegood.com/resized/400X/uploads/images/c1e3d4b3a0574ca199a346be80bc500erealwedding/X-150.jpg?crop=109,746,848,477" />
            <section className="rw____list__itm__bimg">
              <img className="rw____list__itm__bimg__l" src="https://image.wedmegood.com/resized/200X/uploads/images/20908528024e4567bb626228fa9bb2ecrealwedding/X-99.jpg" />
              <section className="rw____list__itm__bimg__r">
                <img  className="rw____list__itm__bimg__r__img" src="https://image.wedmegood.com/resized/200X/uploads/images/6fef638f1cc34c75a86f6d5861462cc2realwedding/X-76.jpg" />
                <section className="rw____list__itm__bimg__r__info">
                  <p className="rw____list__itm__bimg__r__info__p">+</p>
                  <p className="rw____list__itm__bimg__r__info__pc">151 Photos</p>
                </section>
              </section>
            </section> */}
            <p className="rw____list__name">{rw.title}</p>
            {/* <p className="rw____list__loc">Dehradun</p> */}
          </section>
          )}
        </section>
        
      </section>

    </div>
    <style jsx>
      {
        `
        .rw{width:100%}
        .rw__banner{margin-top:-30px;position:relative;width:100%}
        .rw__banner:after{content:'';z-index:1;position: absolute; background: rgb(0, 0, 0); opacity: 0.5; inset: 0px;}
        .rw__banner__img{width:100%;}
        .rw__bannerinfo{position:absolute;top:50%;transform:translateY(-50%);left:0;z-index:2;padding:15px;}
        .rw__bannerinfo__title{font-size: 35px; color:#fff; text-align: center; line-height: 35px; font-weight: 400;}
        .rw__bannerinfo__subtitle{font-size: 24px; color:#fff; text-align: center; line-height: 30px; font-weight: 400;    margin-top: 10px;}
        .rw__filter{display: grid; grid-template-columns: repeat(4,1fr); grid-column-gap: 15px; margin: 15px 0; box-shadow: 0 2px 5px 0 rgb(0 0 0 / 20%); padding: 0 15px 15px; }
        .rw__filter__frmctrl{color:#262626; appearance: none;margin:0; outline: none; border: 1px solid #d7d7d7; border-radius: 2px; width: 100%; height: 38px; padding: 0px 15px; box-sizing: border-box; transition: all 0.5s ease 0s; text-align: left; font-size: 16px; line-height: 16px; letter-spacing: 0.7px;}

        .rw____list{display: grid; padding:0 15px; margin:20px 0;grid-template-columns:repeat(4,1fr); grid-gap: 15px; margin-top: 10px;}
        .rw____list__itm{display: flex;text-align: center;box-shadow: rgb(0 0 0 / 16%) 0px 1px 2px 0px; flex-direction: column;}
        .rw____list__itm__bgimg{width: 100%; height: 160px;object-fit: cover;}
        .rw____list__itm__bimg{display: flex; align-items: flex-start; justify-content: center;}
        .rw____list__itm__bimg__l{object-fit: cover; height: 140px; width: 190px;}
        .rw____list__itm__bimg__r{position: relative;}
        .rw____list__itm__bimg__r__img{object-fit: cover; height: 140px; width:190px;}
        .rw____list__itm__bimg__r__info{position: absolute; top: 50%; left: 50%;color: #fff; transform: translate(-50%,-50%);}
        .rw____list__itm__bimg__r__info__p{font-size:16px;line-height:20px;}
        .rw____list__itm__bimg__r__info__pc{font-size:16px;line-height:26px;font-weight:600}
        .rw____list__name{font-size: 22px;font-weight: 600;margin: 20px 0 0;}
        .rw____list__loc{font-size: 16px; font-weight: 400;margin: 20px 0;}        
`
      }
    </style>
    </>
  )
}