const Note = (props) =>{
    const{_id,title,description,date} = props.note;
    return(
    <div className="col-md-3 my-2">
    <div className="card">
        <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{description}</p>
            <div class="d-flex justify-content-between">
                <i class="fa-solid fa-trash"></i>
                <i class="fa-solid fa-pen-to-square"></i>
            </div>
        </div>
    </div>
    </div>
    )
}

export default Note;