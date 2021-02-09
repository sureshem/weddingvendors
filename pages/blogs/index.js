import HeadMeta from '../../core-components/head.meta'
import styles from '../../styles/Home.module.css'
import Breadcrumb from '../../components/breadcrumb'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
export default function blogs() {
  const pageTitle = "Blogs"
   //dropdown Json Format
   const breadcrumb=[
        { text: 'Home', link: '/' },
        { text: 'Blogs', isCurrentStep: true }
    ]
    var settings = {
      dots: true,
      infinite: true,
      speed: 3500,
      slidesToShow: 3,
      slidesToScroll:1,
      autoplay: true,
      autoplaySpeed: 2000,
    };
  return (
    <>
    <Breadcrumb title={"Language"} breadcrumb={breadcrumb} />
    <div className={styles.container}>
      <HeadMeta  title={pageTitle} /> 
      <section className="slider">
      <Slider {...settings}>
      <div>
        <img src="https://shaadiwish.com/blog/wp-content/uploads/2021/01/Genda-Phool-Decor-770x515.jpg" />
      </div>
      <div>
        <img src="https://shaadiwish.com/blog/wp-content/uploads/2021/01/Genda-Phool-Decor-770x515.jpg" />
      </div>
      <div>
        <img src="https://shaadiwish.com/blog/wp-content/uploads/2021/01/Genda-Phool-Decor-770x515.jpg" />
      </div>
      <div>
        <img src="https://shaadiwish.com/blog/wp-content/uploads/2021/01/Genda-Phool-Decor-770x515.jpg" />
      </div>
      <div>
        <img src="https://shaadiwish.com/blog/wp-content/uploads/2021/01/Genda-Phool-Decor-770x515.jpg" />
      </div>
      <div>
        <img src="https://shaadiwish.com/blog/wp-content/uploads/2021/01/Genda-Phool-Decor-770x515.jpg" />
      </div>
    </Slider>
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
            <section className="sv__cn__info_lst">
              <img src="https://shaadiwish.com/blog/wp-content/uploads/2021/02/buy-shimmer-sarees-1-768x548.jpg" className="sv__cn__info_lst__img sv__cn__info_lst__img--full" />
              <p className="sv__cn__info_lst__det sv__cn__info_lst__det--noposi">Bridal Wear</p>
              <p className="sv__cn__info_lst__sdet">Where To Buy Shimmer Sarees For Your Cocktail</p>
            </section>
          </section>
        </section>
      </section>
    </div>
    <style jsx>
      {
        `
        .slider{width:96%;margin:0 auto}
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
        `
      }
    </style>
    </>
  )
}