import { useState } from "react";
import { useImmer } from "use-immer";

const Lesson34 = (props) => {
    // const [name, setName] = useState('Hỏi Dân IT');
    const [name, setName] = useImmer('Hỏi Dân IT');

    const [person, setPerson] = useState({
        name: 'Hỏi Dân IT',
        age: 25,
        education: {
            degree: 'engineer',
            detail: {
                university: 'hust',
                location: 'Ha Noi'
            }
        }
    })

    const handleUpdateName = (event) => {
        //do sth
        setName(event.target.value);
    }

    const handleSubmit = () => {
        setPerson(draft => {
            draft.name = name;
        })
        console.log(">>> check person: ", person)
    }

    return (
        <div>
            <div>Lesson34: Write concise update logic with Immer
            </div>
            <div>
                <input
                    type={'text'}
                    value={name}
                    onChange={(event) => handleUpdateName(event)}
                />
                <button onClick={handleSubmit}>Update Name</button>
            </div>
        </div>
    )
}

export default Lesson34;