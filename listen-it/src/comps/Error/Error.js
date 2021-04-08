import styles from './Error.module.css';
import Wrapper from '../Wrapper';
import notFoundGif from '../../images/error-404.gif';

const Error = () => {
    const padding = '50px';
    return (
        <Wrapper
        className="flexible" 
        flexDirection="column" 
        alignItems="center" 
        paddingTop={padding} 
        paddingBottom={padding}>
            <img className={styles.gif} src={notFoundGif} alt="Not Found GIF"/>
            <h1 className={styles.message}>
                Error 404: requestuested page not found!
            </h1>
        </Wrapper>
    );
};

export default Error;