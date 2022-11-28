const Note = (props) =>{
    const{_id,title,description,date} = props.note;
    return(
    <div className="col-md-3 my-2">
    <div className="card">
        <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{description}</p>
        </div>
    </div>
    </div>
    )
}

export default Note;