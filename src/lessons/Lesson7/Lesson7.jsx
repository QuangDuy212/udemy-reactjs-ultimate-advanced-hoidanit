const Lesson7 = (props) => {
    function MyFunction() {
        console.log(">>> tranditional function")
    }

    MyFunction();

    ( function () { 
        console.log(">>>> anonymous function.")
    })()
    return (
        <div style={{ padding: "50px" }}>
            <h3>Lesson 7 Anonymous Function:</h3>
        </div>
    )
}

export default Lesson7;