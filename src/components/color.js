



export const MyColor = (props) => {

    return <div>
        <button type="button" onClick={() => props.myCol("blue")}>
            Blue
        </button>
        <button type="button" onClick={() => props.myCol("red")}>
            Red
        </button>
        <button type="button" onClick={() => props.myCol("pink")}>
            Pink
        </button>
        <button type="button" onClick={() => props.myCol("green")}>
            Green
        </button></div>
}