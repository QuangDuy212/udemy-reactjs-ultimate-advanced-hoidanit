import { useState } from "react"

const AddNewUser = (props) => {
    const [id, setId] = useState('');
    const [username, setUsername] = useState("");
    const [image, setImage] = useState("");

    const toBase64 = file => new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => resolve(reader.result);
        reader.onerror = error => reject(error);
    });

    const hanldeOnchangeFile = async (event) => {
        if (event.target && event.target.files && event.target.files[0]) {
            let strToReplace = await toBase64(event.target.files[0]);
            let strImage = strToReplace.replace(/^data:image\/[a-z]+;base64,/, "");
            setImage(strImage);
        }
    }

    const handleCreateUser = () => {
        if (!id || !username || !image) {
            alert("Invalid input");
            return;
        }
        props.addNew({
            id: id,
            username: username,
            image: image
        })
    }

    return (
        <div>
            <fieldset>
                <legend>Add new user </legend>

                <div className="input-group">
                    <label>ID:</label>
                    <input
                        type="text"
                        value={id}
                        onChange={(e) => { setId(e.target.value) }}
                    />
                </div>
                <div className="input-group">
                    <label>User name:</label>
                    <input
                        type="text"
                        value={username}
                        onChange={(e) => { setUsername(e.target.value) }}
                    />
                </div>
                <div className="input-group">
                    <label>Image: </label>
                    <input
                        type="file"
                        onChange={(e) => { hanldeOnchangeFile(e) }}
                    />
                </div>
                <button
                    type="button"
                    className="btn btn-warning"
                    onClick={handleCreateUser}
                >Save</button>
            </fieldset>
        </div>
    )
}

export default AddNewUser;