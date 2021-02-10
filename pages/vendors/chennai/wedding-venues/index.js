import HeadMeta from '../../../../core-components/head.meta'
import styles from '../../../../styles/Home.module.css'
import Breadcrumb from '../../../../components/breadcrumb'
export default function realwedding() {
  const pageTitle = "Wedding Venues"
  //dropdown Json Format
  const breadcrumb=[
    { text: 'Home', link: '/' }, 
    { text: 'Vendors', link: '/vendors' },
    { text: 'Wedding Venues', link: '/wedding-venues' },
    { text: 'Chennai', isCurrentStep: true }
]
  return (
    <>
    <Breadcrumb title={"Language"} breadcrumb={breadcrumb} />
    <div className={styles.container}>
      <HeadMeta  title={pageTitle} /> 
      <p>Wedding Venus</p>
    </div>
    </>
  )
}