import styles from './Error.module.css';
import Wrapper from '../Wrapper';
import notFoundGif from '../../images/error-404.gif';

const Error = () => {
    return (
        <Wrapper
        className="flexible" 
        flexDirection="column" 
        alignItems="center" 
        paddingTop="100px" 
        paddingBottom="50px">
            <img className={styles.gif} src={notFoundGif} alt="Not Found GIF"/>
            <h1 className={styles.message}>
                Error 404: Requested page not found!
            </h1>
        </Wrapper>
    );
};

export default Error;