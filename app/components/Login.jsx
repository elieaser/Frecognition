import styles from './Login.module.css';
import Button from './Button.jsx';

const Login = () => {
    return (
        <div className={styles.container}>
            <div>
                <h1>Log in</h1>
                <div>
                    <input type="Name" placeholder="Email or Username"></input>
                </div>
                <div>
                    <input type="Pass" placeholder="Password"></input>
                </div>
                <Button variant='primary'>Log in</Button>
            </div>
            <div>
                <img src='login.png'/>
            </div>
        </div>
    );
};

export default Login;
