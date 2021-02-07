import HeadMeta from '../../core-components/head.meta'
import styles from '../../styles/Home.module.css'
import Breadcrumb from '../../components/breadcrumb'
export default function realwedding() {
  const pageTitle = "Real Wedding"
  //dropdown Json Format
  const breadcrumb=[
    { text: 'Home', link: '/' },
    { text: 'Real Weddings', isCurrentStep: true }
]
  return (
    <>
    <Breadcrumb title={"Language"} breadcrumb={breadcrumb} />
    <div className={styles.container}>
      <HeadMeta  title={pageTitle} /> 
      <p>realwedding</p>
    </div>
    </>
  )
}