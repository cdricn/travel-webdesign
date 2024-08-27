import styles from './Navbar.module.css'

function Navbar(){
  return (
    <>
      <div className={styles.container}>
        <div className={styles.button_container}>
          <div className={styles.button_line}></div>
          <div className={styles.button_line}></div>
          <div className={styles.button_line}></div>
        </div>
      </div>
    </>
  );
}

export default Navbar