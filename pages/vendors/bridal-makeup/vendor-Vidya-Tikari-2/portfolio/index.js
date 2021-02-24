import HeadMeta from '../../../../../core-components/head.meta'
import styles from '../../../../../styles/Home.module.css'
import Breadcrumb from '../../../../../components/breadcrumb'
export default function portfolio() {
  const pageTitle = "Portfolios"
  //dropdown Json Format
  const breadcrumb=[
    { text: 'Home', link: '/' },
    { text: 'Vendors',link:'/vendors' },
    { text: 'Bridal Makeup',link:'/vendors/bridal-makeup' },
    { text: 'Vidya Tikari',link:'/vendors/bridal-makeup/vendor-Vidya-Tikari-2' },
    { text: 'portfolio', isCurrentStep: true }
]
  return (
    <>
    <Breadcrumb title={"Language"} breadcrumb={breadcrumb} />
    <div className={styles.container}>
      <HeadMeta  title={pageTitle} /> 
      <section className="wdp">
            <h2 className="wdp__titl">Vidya Tikari - Portfolio</h2>
            <section className="wdp__cn">
                <img className="wdp__cn__img" src="https://s3-us-west-2.amazonaws.com/shaadiwishnewbucket/7ce32794-6021-4431-b903-3a0330c6cabd.png" />
                <img className="wdp__cn__img" src="https://s3-us-west-2.amazonaws.com/shaadiwishnewbucket/3adc02b8-3450-4db7-b3b3-7f7782f4df35.png" />
                <img className="wdp__cn__img" src="https://s3-us-west-2.amazonaws.com/shaadiwishnewbucket/fca80ec6-1f80-4e0c-a5a4-0f64494d768c.png" />
                <img className="wdp__cn__img" src="https://s3-us-west-2.amazonaws.com/shaadiwishnewbucket/07b374f3-9dc4-4e2d-bfea-8c03107dd725.png" />
                <img className="wdp__cn__img" src="https://s3-us-west-2.amazonaws.com/shaadiwishnewbucket/a79a9912-46fe-49ae-a0a1-342842472132.png" />
            </section>
      </section>
    </div>
    <style jsx>{
        `
            .wdp{padding:20px 15px;}
            .wdp__titl{font-size: 28px; line-height: 39px;font-weight:400; text-align:center;color: #000; margin-bottom: 15px; text-transform: capitalize;}
            .wdp__cn{display:flex;flex-wrap: wrap; justify-content: center;}
            .wdp__cn__img{width:378px;height:205px;object-fit: cover; object-position: top; margin: 10px;}
        `
    }</style>
    </>
  )
}