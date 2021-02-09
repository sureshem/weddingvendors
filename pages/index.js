import HeadMeta from '../core-components/head.meta'
import styles from '../styles/Home.module.css'
import Banner from '../components/banner/banner'
import Button from '../components/button'
export default function Home() {
  const pageTitle = "Home"
  return (
    <>
    <div className={styles.container}>
      <HeadMeta  title={pageTitle} /> 
      {/* Banner */}
      <Banner />
      
      {/* Categories List*/}
      <section className="wdcl">
        <section className="wdcl__cn">
          <section className="wdcl__cn__li">
            <img src="https://cdn.shaadiwish.com/img/homepage_icons/vendors_icon.png" className="wdcl__cn__li__img" />
            <p className="wdcl__cn__li__ttl">Wedding Vendors</p>
            <p className="wdcl__cn__li__sttl">Find top rated wedding vendors in budget</p>
          </section>
          <section className="wdcl__cn__li">
            <img src="https://cdn.shaadiwish.com/img/homepage_icons/vendors_icon.png" className="wdcl__cn__li__img" />
            <p className="wdcl__cn__li__ttl">Wedding Vendors</p>
            <p className="wdcl__cn__li__sttl">Find top rated wedding vendors in budget</p>
          </section>
          <section className="wdcl__cn__li">
            <img src="https://cdn.shaadiwish.com/img/homepage_icons/vendors_icon.png" className="wdcl__cn__li__img" />
            <p className="wdcl__cn__li__ttl">Wedding Vendors</p>
            <p className="wdcl__cn__li__sttl">Find top rated wedding vendors in budget</p>
          </section>
        </section>
      </section>
      
      {/* Vendors Search */}
      <section className="sv">
        <section className="sv__cn">
          <h2 className="sv__cn__titl">Search The Best Wedding Vendors In All Indian Cities</h2>
          <h3 className="sv__cn__stitl">Build your dream wedding team from the verified list of best wedding photographers, wedding venues, bridal makeup artists , wedding decor and more.
            </h3>
          <section className="sv__cn__info">
            <section className="sv__cn__info_lst">
              <img src="https://cdn.shaadiwish.com/img/cat/photographers.jpg" className="sv__cn__info_lst__img" />
              <p className="sv__cn__info_lst__det">Wedding Photographers</p>
            </section>
            <section className="sv__cn__info_lst">
              <img src="https://cdn.shaadiwish.com/img/cat/makeup.jpg" className="sv__cn__info_lst__img" />
              <p className="sv__cn__info_lst__det">Bridal Makeup</p>
            </section>
            <section className="sv__cn__info_lst">
              <img src="https://cdn.shaadiwish.com/img/cat/decorators.jpg" className="sv__cn__info_lst__img" />
              <p className="sv__cn__info_lst__det">Wedding Decorators</p>
            </section>
            <section className="sv__cn__info_lst">
              <img src="https://cdn.shaadiwish.com/img/cat/venues.jpg" className="sv__cn__info_lst__img" />
              <p className="sv__cn__info_lst__det">Venues</p>
            </section>
          </section>
            <Button><p onClick={() => { window.location.assign('/vendors')}}>View All Categories</p></Button>
        </section>
      </section>

      {/* Wedding service */}
      <section className="sv">
        <section className="sv__cn">
          <h2 className="sv__cn__titl">Exclusive ShaadiWish Wedding Services</h2>
          <h3 className="sv__cn__stitl">Book our exclusive service for your bridal makeup, family makeup and pre-wedding shoots in budget. Purchase ShaadiWish Amantran card to get exclusive discounts on your wedding shopping.</h3>
          <section className="sv__cn__info">
            <section className="sv__cn__info_lst">
              <img src="https://cdn.shaadiwish.com/img/cat/family-makeup.jpg" className="sv__cn__info_lst__img sv__cn__info_lst__img--full" />
              <p className="sv__cn__info_lst__det sv__cn__info_lst__det--noposi">Family Makeup Services</p>
              <p className="sv__cn__info_lst__sdet">Introducing family makeup service in Delhi NCR</p>
            </section>
            <section className="sv__cn__info_lst">
              <img src="https://cdn.shaadiwish.com/img/cat/family-makeup.jpg" className="sv__cn__info_lst__img sv__cn__info_lst__img--full" />
              <p className="sv__cn__info_lst__det sv__cn__info_lst__det--noposi">Family Makeup Services</p>
              <p className="sv__cn__info_lst__sdet">Introducing family makeup service in Delhi NCR</p>
            </section>
            <section className="sv__cn__info_lst">
              <img src="https://cdn.shaadiwish.com/img/cat/family-makeup.jpg" className="sv__cn__info_lst__img sv__cn__info_lst__img--full" />
              <p className="sv__cn__info_lst__det sv__cn__info_lst__det--noposi">Family Makeup Services</p>
              <p className="sv__cn__info_lst__sdet">Introducing family makeup service in Delhi NCR</p>
            </section>
          </section>
        </section>
      </section>

      {/* Wedding planning blogs */}
      <section className="sv">
        <section className="sv__cn">
          <h2 className="sv__cn__titl">The Ultimate Wedding Planning Blog</h2>
          <h3 className="sv__cn__stitl">From latest fashion, wedding inspiration and trending ideas to expert advice and tips, the ShaadiWish fairy has you covered. Making wedding planning easy.</h3>
          <section className="sv__cn__info">
            <section className="sv__cn__info_lst">
              <img src="https://shaadiwish.com/blog/wp-content/uploads/2021/02/buy-shimmer-sarees-1-768x548.jpg" className="sv__cn__info_lst__img sv__cn__info_lst__img--full" />
              <p className="sv__cn__info_lst__det sv__cn__info_lst__det--noposi">Bridal Wear</p>
              <p className="sv__cn__info_lst__sdet">Where To Buy Shimmer Sarees For Your Cocktail</p>
            </section>
            <section className="sv__cn__info_lst">
              <img src="https://shaadiwish.com/blog/wp-content/uploads/2021/02/buy-shimmer-sarees-1-768x548.jpg" className="sv__cn__info_lst__img sv__cn__info_lst__img--full" />
              <p className="sv__cn__info_lst__det sv__cn__info_lst__det--noposi">Bridal Wear</p>
              <p className="sv__cn__info_lst__sdet">Where To Buy Shimmer Sarees For Your Cocktail</p>
            </section>
            <section className="sv__cn__info_lst">
              <img src="https://shaadiwish.com/blog/wp-content/uploads/2021/02/buy-shimmer-sarees-1-768x548.jpg" className="sv__cn__info_lst__img sv__cn__info_lst__img--full" />
              <p className="sv__cn__info_lst__det sv__cn__info_lst__det--noposi">Bridal Wear</p>
              <p className="sv__cn__info_lst__sdet">Where To Buy Shimmer Sarees For Your Cocktail</p>
            </section>
          </section>
          <Button>View All Blogs</Button>
        </section>
      </section>

      {/* Wedding Photo Gallery */}
      <section className="sv" style={{background:'#fbfbfb',marginTop:'30px'}}>
        <section className="sv__cn">
          <h2 className="sv__cn__titl">Wedding Photo Gallery</h2>
          <h3 className="sv__cn__stitl">Explore 1000+ wedding photos and stay up-to-date with the latest wedding fashion and trends- from bridal hairstyles, mehendi designs to bridal lehengas and wedding decoration ideas.</h3>
          <section className="sv__cn__info">
            <section className="sv__cn__info_lst">
              <img src="https://cdn.shaadiwish.com/img/cat/mehendi-designs.jpg" className="sv__cn__info_lst__img sv__cn__info_lst__img--halfimg " />
              <p className="sv__cn__info_lst__sdet">Mehendi Designs</p>
            </section>
            <section className="sv__cn__info_lst">
              <img src="https://cdn.shaadiwish.com/img/cat/mehendi-designs.jpg" className="sv__cn__info_lst__img sv__cn__info_lst__img--halfimg " />
              <p className="sv__cn__info_lst__sdet">Mehendi Designs</p>
            </section>
            <section className="sv__cn__info_lst">
              <img src="https://cdn.shaadiwish.com/img/cat/mehendi-designs.jpg" className="sv__cn__info_lst__img sv__cn__info_lst__img--halfimg " />
              <p className="sv__cn__info_lst__sdet">Mehendi Designs</p>
            </section>
            <section className="sv__cn__info_lst">
              <img src="https://cdn.shaadiwish.com/img/cat/mehendi-designs.jpg" className="sv__cn__info_lst__img sv__cn__info_lst__img--halfimg " />
              <p className="sv__cn__info_lst__sdet">Mehendi Designs</p>
            </section>
            <section className="sv__cn__info_lst">
              <img src="https://cdn.shaadiwish.com/img/cat/mehendi-designs.jpg" className="sv__cn__info_lst__img sv__cn__info_lst__img--halfimg " />
              <p className="sv__cn__info_lst__sdet">Mehendi Designs</p>
            </section>
            
            <section className="sv__cn__info_lst">
              <img src="https://cdn.shaadiwish.com/img/cat/mehendi-designs.jpg" className="sv__cn__info_lst__img sv__cn__info_lst__img--halfimg " />
              <p className="sv__cn__info_lst__sdet">Mehendi Designs</p>
            </section>
          </section>
        </section>
      </section>
    </div>

    <style jsx>
{
  `
  .wdcl{width: 100%; display: flow-root; padding: 45px 50px;border-bottom: 1px dotted #b2b2b2;}
  .wdcl__cn{display: flex; align-items: flex-start; justify-content: space-around;}
  .wdcl__cn__li{padding: 0 15px;text-align:center;}
  .wdcl__cn__li__img{height: 48px; aspect-ratio: auto 48 / 48; width: 48px;}
  .wdcl__cn__li__ttl{color: #b76f7a;font-size: 18px; font-weight: bold; margin-top: 10px; margin-bottom: 10px;}
  .wdcl__cn__li__sttl{font-size: 15px; margin-bottom: 10px;color: #4c4c4c;}

  .sv{padding:45px 0 0;text-align:center;width:100%;}
  .sv__cn{}
  .sv__cn__titl{font-size: 28px; line-height: 39px;font-weight:400; color: #000; margin-bottom: 15px; text-transform: capitalize;}
  .sv__cn__stitl{font-size: 18px; line-height: 25px; color: #4c4c4c; margin: 0 auto 20px; font-weight: 400; width: 50%;}
  .sv__cn__info{display: flex; cursor:pointer;align-items: flex-start;flex-wrap: wrap; justify-content:center;}
  .sv__cn__info_lst{position: relative;padding-left: 10px; padding-right: 10px;margin:0 0 15px; overflow: hidden;}
  .sv__cn__info_lst__img{border-radius: 10px; transition: 0.8s; overflow: hidden;height: 171px; aspect-ratio: auto 270 / 171; width: 270px;}
  .sv__cn__info_lst__img:hover{filter: brightness(0.7);}
  .sv__cn__info_lst__det{font-size: 18px; text-align: center; color: #fff; z-index: 21; position: absolute; left: 50%; top: 50%; transform: translate(-50%, -50%);}
  
  
  .sv__cn__info_lst__img--full{border-radius: 0; transition: 0.8s; overflow: hidden;height: 287px; aspect-ratio: auto 365 / 287; width: 365px;}
  .sv__cn__info_lst__img--full:hover{filter: brightness(1);}
  .sv__cn__info_lst__det--noposi{font-size: 18px; line-height: 28px;font-weight: bold;text-align: center; color: #000;margin-top: 15px; margin-bottom: 5px; position: relative; left: auto; top: auto; transform:inherit;}
  .sv__cn__info_lst__sdet{font-size: 14px; margin-top: 5px; margin-bottom: 20px;color: #4c4c4c; text-transform: capitalize;}
  
  .sv__cn__info_lst__img--halfimg{border-radius: 10px; transition: 0.8s; overflow: hidden;height: 138px; aspect-ratio: auto 172 / 138; width: 172px;}
  .sv__cn__info_lst__img--halfimg:hover{filter: brightness(1);}
  .sv__cn__info_lst__sdet{font-size: 14px; margin-top: 5px; margin-bottom: 20px;color: #4c4c4c; text-transform: capitalize;}
  `
}

    </style>
    </>
  )
}
