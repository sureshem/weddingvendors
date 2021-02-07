import HeadMeta from '../../core-components/head.meta'
import styles from '../../styles/Home.module.css'
import Breadcrumb from '../../components/breadcrumb'
export default function blogs() {
  const pageTitle = "Blogs"
   //dropdown Json Format
   const breadcrumb=[
    { text: 'Home', link: '/' },
    { text: 'Blogs', isCurrentStep: true }
]
  return (
    <>
    <Breadcrumb title={"Language"} breadcrumb={breadcrumb} />
    <div className={styles.container}>
      <HeadMeta  title={pageTitle} /> 
      <p>Blogs</p>
    </div>
    </>
  )
}