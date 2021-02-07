import HeadMeta from '../../core-components/head.meta'
import styles from '../../styles/Home.module.css'
import Breadcrumb from '../../components/breadcrumb'
export default function Photos() {
  const pageTitle = "Photos"
   //dropdown Json Format
   const breadcrumb=[
    { text: 'Home', link: '/' },
    { text: 'All Photos', isCurrentStep: true }
]
  return (
    <>
    <Breadcrumb title={"Language"} breadcrumb={breadcrumb} />
    <div className={styles.container}>
      <HeadMeta  title={pageTitle} /> 
      <p>Photos</p>
    </div>
    </>
  )
}