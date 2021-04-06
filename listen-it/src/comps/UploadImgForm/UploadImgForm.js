import { useState } from "react";


const UploadImgForm = () => {
    const [ file, setFile ] = useState(null);

    const allowedTypes = [ 'image/png', 'image/jpeg' ];

    const changeHandler = (e) => {
        let selected = e.target.files[0];

        if(selected && allowedTypes.includes(selected.type)) {
            setFile(selected);
        }
    };
    //TO DO: Add message div
    return (
        <form>
            <input type="file" onChange={changeHandler} />
        </form>
    );
}

export default UploadImgForm;