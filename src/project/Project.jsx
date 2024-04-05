import Login from "./Login"
import './Project.scss';
// import 'nprogress/nprogress.css';
import Lesson39 from "./chapter4/lesson39/Lesson39";

const Project = (props) => {
    return (
        <div className="project">
            <Login />
            <Lesson39 />
        </div>
    )
}

export default Project;