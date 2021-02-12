import HeadMeta from '../../core-components/head.meta'
import styles from '../../styles/Home.module.css'
import Button from '../../components/button'
export default function signin(props) {
  const pageTitle = "Signin"
  return (
    <>
    <div className={styles.container}>
      <HeadMeta  title={pageTitle} /> 
      <section className="sv">
      <img src="https://cdn.shaadiwish.com/img/weddingbanner_home.jpg" />
        <section className="sv__cn">
          <h2 className="sv__cn__titl">Shaadiwish - User Sign In</h2>
          <h3 className="sv__cn__stitl">Don't have an account?  <a className="sv__cn__stitl__link" href="/signup"> Sign up here</a></h3>
          <section className="sv__cn__info">
            <h2 className="sv__cn__info__titl">Shaadiwish - User Sign In</h2>
            <section className="sv__cn__info__type">
                <input type="text" placeholder="Enter email / mobile no" className="sv__cn__info__type__input" />
                <input type="password" placeholder="Enter password" className="sv__cn__info__type__input" />
                <Button bgcolor={'bgcolor'}>Sign In</Button>
                <a className="sv__cn__stitl__link" href="/forgot-password">Forgot your password?</a>
                {/* <section className="sv__cn__info__type__vendor">
                    <h2 className="sv__cn__info__titl">Are You A Vendor?</h2>
                    <a className="sv__cn__stitl__link" href="/">Business Sign In</a>
                </section> */}
            </section>
          </section>
        </section>
      </section>
    </div>
    <style jsx>
      {
          `
            .sv{padding:0;margin-top:-30px;text-align:center;width:100%;}
            .sv__cn{background: #fff; width:60%;padding: 15px; box-sizing: content-box; margin: -150px auto 0; display: inline-block; border-radius: 5px;}
            .sv__cn__titl{font-size: 28px; line-height: 39px;font-weight:400; color: #000; margin-bottom: 15px; text-transform: capitalize;}
            .sv__cn__stitl{font-size: 18px;display:flex;align-items:center;justify-content:center; padding:0 15px; line-height: 25px; color: #4c4c4c; margin: 0 auto 20px; font-weight: 400;}
            .sv__cn__stitl__link{color: #b76f7a;}
            .sv__cn__info{padding:40px 15px;border-top: 1px dotted #b2b2b2;width:600px;margin:0 auto}
            .sv__cn__info__titl{font-size:16px; line-height: 19px;font-weight:600; color: #000;padding:0 0 15px;}
            .sv__cn__info__type{width:60%;margin:0 auto;}
            .sv__cn__info__type__input{color:#262626; appearance: none;margin:5px 0; outline: none; border: 1px solid #262626; border-radius: 2px; width: 100%; height: 50px; padding: 0px 15px; box-sizing:6border-box; transition: all 0.5s ease 0s; text-align: left; font-size: 16px; line-height: 16px; letter-spacing: 0.7px;}
            .sv__cn__info__type__vendor{background-color: #fbfbfb;padding: 22px; margin-top: 30px;}
          `
      }
    </style>
    </>
  )
}