import styles from './Start.module.css';
import Navbar from './Navbar.jsx';
import Button from './Button.jsx';

const Start = () =>{
    return(
        <div>
            <div>
                <Navbar />
            </div>
            <div className={styles.container}>
                <div className={styles.con}>
                    <ul>
                        <li className={styles.con1}>
                            <h3>Attendance</h3>
                        </li>
                    </ul>
                    <ul>
                        <li className={styles.con2}>
                            <h3>Attend</h3>
                        </li>
                    </ul>
                    <Button variant='primary'>Save</Button>
                </div>
            </div>
        </div>
    )
}

export default Start;