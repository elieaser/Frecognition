import styles from './Title.module.css';
import Button from './Button.jsx';
import Title2 from '../components/Title2.jsx';

const Title = () => {
    return (
        <div>
            <div className={styles.container}>
                <div>
                    <h1> <strong>Face <span>recognition</span> <br></br> <span1>Attendance</span1> <span>Checker</span></strong></h1>
                </div>

                <div className={styles.right}>
                    <Button variant='primary'>Get Started</Button>
                    <center><p>Take Tutorial </p></center>
                </div>
                
            </div>
        </div>
    );
};

export default Title;