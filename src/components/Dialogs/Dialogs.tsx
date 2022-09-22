import Raect from 'react';
import styles from './Dialogs.module.css';

export const Dialogs: Raect.FC = () => {

    return (
        <div className={styles.dialogs}>
          <div className={styles.dialogsItem}>
              <div className={styles.dialog}>Vasilisa</div>
              <div className={styles.dialog}>Ivan</div>
              <div className={styles.dialog}>Vadim</div>
              <div className={styles.dialog}>Andrey</div>
              <div className={styles.dialog}>Nastya</div>
          </div>
          <div>
              <div className={styles.message}> Hello!!</div>
              <div className={styles.message}>How are  you??? </div>
              <div className={styles.message}>Privett</div>
          </div>
        </div>
    );
};