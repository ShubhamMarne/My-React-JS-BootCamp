const NewItem = (props) => {
    var obj = {
        name : "test",
        address : "address"
    };


    // part of child-parent communication
    props.ondataAccesser(obj);
    return (
        <div>
            <h1> This is retrun values </h1>
            <h1> {obj.name} </h1>
            <h1> {obj.address} </h1>
        </div>
    );
}

export default NewItem;