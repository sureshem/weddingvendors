import HeadMeta from '../../core-components/head.meta'
import styles from '../../styles/Home.module.css'
export default function Photos() {
  const pageTitle = "Photos"
  return (
    <div className={styles.container}>
      <HeadMeta  title={pageTitle} /> 
      <p>Photos</p>
    </div>
  )
}