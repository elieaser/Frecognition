import styles from './Navbar.module.css';
import Button from './Button';

const Navbar = () => {
    return (
        <div className={styles.container}>
            <div>
                <ul>
                    <a href = "/"><Button variant='secondary'> <img src = '/big logo.png'></img></Button></a>
                    <a href = "/Start"><Button variant='secondary'>Start</Button></a>
                    <a href = "/Newa"><Button variant='secondary'>Contact Us</Button></a>
                    <a href = "/Aboutus"><Button variant='secondary'>About Us</Button></a>
                    <div>
                        <input type="Text" placeholder="Search"></input>
                    </div>
                    <a href = "/"><Button variant='secondary'>Sign Up</Button></a>
                    <a href = "/Login"><Button variant='secondary'>Log in</Button> </a>
                </ul>
            </div>
        </div>
    );
};

export default Navbar;