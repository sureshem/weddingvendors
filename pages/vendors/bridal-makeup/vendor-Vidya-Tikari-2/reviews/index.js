import HeadMeta from '../../../../../core-components/head.meta'
import styles from '../../../../../styles/Home.module.css'
import Breadcrumb from '../../../../../components/breadcrumb'
import Button from '../../../../../components/button'
export default function review() {
  const pageTitle = "Review"
  //dropdown Json Format
  const breadcrumb=[
    { text: 'Home', link: '/' },
    { text: 'Vendors',link:'/vendors' },
    { text: 'Bridal Makeup',link:'/vendors/bridal-makeup' },
    { text: 'Vidya Tikari',link:'/vendors/bridal-makeup/vendor-Vidya-Tikari-2' },
    { text: 'review', isCurrentStep: true }
]
  return (
    <>
    <Breadcrumb title={"Language"} breadcrumb={breadcrumb} />
    <div className={styles.container}>
      <HeadMeta  title={pageTitle} /> 
                    <section className="vendor__det">
                        <div>
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
                        </section>
                    </section>
                    <section className="rwi">
                    <p className="rwi__title">Write a Review</p>
                    <ul className="rwi__lst">
                        <li className="rwi__lst__icon rwi__lst__icon--active"><img src="/star.svg" /></li>
                        <li className="rwi__lst__icon rwi__lst__icon--active"><img src="/star.svg" /></li>
                        <li className="rwi__lst__icon rwi__lst__icon--active"><img src="/star.svg" /></li>
                        <li className="rwi__lst__icon rwi__lst__icon--active"><img src="/star.svg" /></li>
                        <li className="rwi__lst__icon "><img src="/star.svg" /></li>
                    </ul>
                    <textarea className="form-control"></textarea>
                    <Button bgcolor={'bgcolor'}>Submit Review</Button>
                    </section>
                    </div>
                    <section className="vendor__det__tile__price">
                    <section className="vendor__det__tile__revw">
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
                        </section>
                    </section>
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
						.vendor__det__tile__info__location{padding:0 10px 10px;white-space: nowrap; overflow: hidden; text-overflow: ellipsis;display: flex; justify-content: space-between;border: none;} 
						.vendor__det__tile__info__reviewcount{font-size: 14px; font-weight: 400;}
						.vendor__det__tile__price__innerinfo{color: #e72e77;font-weight:700;}

                        .vendor__det__tile__revw{margin:0 0 30px 15px}
                        .vendor__det__tile__revw__info{display:flex;flex-wrap: wrap; justify-content: space-between; box-shadow: 0 4px 8px 0 rgb(0 0 0 / 20%);margin:10px 0 20px; transition: 0.3s; background-color: white; padding: 15px;}
                        .vendor__det__tile__revw__title{font-size: 18px; line-height: 28px; font-weight: bold; margin-top: 15px; margin-bottom: 5px; color: #000; text-transform: capitalize;}
                        .vendor__det__tile__revw__info__ud{display:flex;align-items: center;}
                        .vendor__det__tile__revw__info__ud__img{border-radius: 50%;width: 40px; aspect-ratio: auto 40 / 40; height: 40px;}
                        .vendor__det__tile__revw__info__ud__nm{display:block;font-size: 16px;font-weight:700; color: #000;margin-left: 5px;}
                        .vendor__det__tile__revw__info__ud__nm__dt{font-size: 12px; color: #b5b5b5; font-weight: lighter;padding-top: 5px; display: block;}
                        .vendor__det__tile__revw__info__rt{background-color: #4CAF50; font-size: 16px; color: #fff; font-weight: 500; border-radius: 3px; margin-right: 0; margin-bottom: 0; padding: 5px;line-height: 16px; display: table;}
                        .vendor__det__tile__revw__info__desc{flex: 1 100%; font-size: 15px; color: #1a1a1a; font-weight: 300; line-height: 23px; margin: 14px 0 0;}

                        .rwi{margin:0 0 20px;}
                        .rwi__lst{display:flex;}
                        .rwi__title{font-size: 17px; color: #1a1a1a; line-height: 26px; font-weight: 500;text-transform: capitalize;}
                        .rwi__lst__icon--active{background: #b76f7a !important;}
                        .rwi__lst__icon{background: #A7A9AC; color: #ffffff; display: inline-block; vertical-align: top;border-radius: 3px;    margin: 10px 10px 10px 0; padding: 3px 5px; width: 25px;}
                        .form-control { display: block; width: 100%; height:90px; padding: 6px 12px; font-size: 14px; line-height: 1.42857143; color: #555; background-color: #fff; background-image: none; border: 1px solid #ccc; border-radius: 4px; box-shadow: inset 0 1px 1px rgb(0 0 0 / 8%); transition: border-color ease-in-out .15s,box-shadow ease-in-out .15s; }
                        `
                    }</style>
    </div>
    </>
  )
}