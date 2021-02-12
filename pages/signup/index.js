import HeadMeta from '../../core-components/head.meta'
import styles from '../../styles/Home.module.css'
import Button from '../../components/button'
export default function signup(props) {
  const pageTitle = "SignUp"
  return (
    <>
    <div className={styles.container}>
      <HeadMeta  title={pageTitle} /> 
      <section className="sv">
      <img src="https://cdn.shaadiwish.com/img/weddingbanner_home.jpg" />
        <section className="sv__cn">
          <h2 className="sv__cn__titl">Sign Up To Start Planning Your Dream Wedding</h2>
          <h3 className="sv__cn__stitl">Do you have an account?  <a className="sv__cn__stitl__link" href="/signin"> Sign In here</a></h3>
          <section className="sv__cn__info">
            <h2 className="sv__cn__info__titl">Or Use Your Email Account</h2>
            <section className="sv__cn__info__type">
                <input type="text" placeholder="Name" className="sv__cn__info__type__input" />
                <input type="text" placeholder="Email Id" className="sv__cn__info__type__input" />
                <input type="password" placeholder="Password" className="sv__cn__info__type__input" />
                <input type="password" placeholder="Confirm password" className="sv__cn__info__type__input" />
                <Button bgcolor={'bgcolor'}>Register</Button>
            </section>
          </section>
            <h3 className="sv__cn__stitl"> By clicking on "REGISTER" I am accepting the  <a className="sv__cn__stitl__link" href="https://shaadiwish.com/privacy-policy.php">Privacy Policy</a>& <a className="sv__cn__stitl__link" href="https://shaadiwish.com/terms.php">Terms of Services</a>from abc.com</h3>
            {/* <section className="sv__cn__info__type__vendor">
                <h2 className="sv__cn__info__titl">Are You A Vendor?</h2>
                <a className="sv__cn__stitl__link" href="/">Business Sign In</a>
            </section> */}
        </section>
      </section>
    </div>
    <style jsx>
      {
          `
            .sv{padding:0;margin-top:-30px;text-align:center;width:100%;}
            .sv__cn{background: #fff; width: 60%;padding: 15px; box-sizing: content-box;margin: -150px auto 0; display: inline-block; border-radius: 5px;}
            .sv__cn__titl{font-size: 28px; line-height: 39px;font-weight:400; color: #000; margin-bottom: 15px; text-transform: capitalize;}
            .sv__cn__stitl{font-size: 18px;display:flex;align-items:center;justify-content:center; padding:0 15px; line-height: 25px; color: #4c4c4c; margin: 0 auto 20px; font-weight: 400;}
            .sv__cn__stitl__link{color: #b76f7a;}
            .sv__cn__info{padding:40px 15px 0;border-top: 1px dotted #b2b2b2;width:600px;margin:0 auto}
            .sv__cn__info__titl{font-size:16px; line-height: 19px;font-weight:600; color: #000;padding:0 0 15px;}
            .sv__cn__info__type{width:60%;margin:0 auto;}
            .sv__cn__info__type__input{color:#262626; appearance: none;margin:5px 0; outline: none; border: 1px solid #262626; border-radius: 2px; width: 100%; height: 50px; padding: 0px 15px; box-sizing: border-box; transition: all 0.5s ease 0s; text-align: left; font-size: 16px; line-height: 16px; letter-spacing: 0.7px;}
            .sv__cn__info__type__vendor{background-color: #fbfbfb;width:40%;padding: 22px;margin:0 auto 30px;}
          `
      }
    </style>
    </>
  )
}