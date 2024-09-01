import styles from './Navbar.module.css'

function Navbar(){

  

  return (
    <>
      <div className={styles.container}>
        <div className={styles.button_container} onClick={() => console.log('test')}>
          <div className={styles.line}>
          </div>
          <div className={styles.line}>
          </div>
          <div className={styles.line}>
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar