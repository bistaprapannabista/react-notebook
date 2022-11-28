import Note from './Note';

const notes = 
[
{
_id:
"637f3f69927c6d56119630c61",
user:
"637f322333b2d3631d333b2a",
title:
"Pragati Biddhyashram1",
description:
"This is in putalisadak.",
date:
"2022-11-24T09:54:49.677+00:00"
},
{
    _id:
    "637f3f69927c6d56119630c62",
    user:
    "637f322333b2d3631d333b2a",
    title:
    "Pragati Biddhyashram2",
    description:
    "This is in putalisadak.",
    date:
    "2022-11-24T09:54:49.677+00:00"
    },
    {
        _id:
        "637f3f69927c6d56119630c63",
        user:
        "637f322333b2d3631d333b2a",
        title:
        "Pragati Biddhyashram3",
        description:
        "This is in putalisadak.",
        date:
        "2022-11-24T09:54:49.677+00:00"
        },
        {
            _id:
            "637f3f69927c6d56119630c64",
            user:
            "637f322333b2d3631d333b2a",
            title:
            "Pragati Biddhyashram4",
            description:
            "This is in putalisadak.",
            date:
            "2022-11-24T09:54:49.677+00:00"
            },
            {
                _id:
                "637f3f69927c6d56119630c65",
                user:
                "637f322333b2d3631d333b2a",
                title:
                "Pragati Biddhyashram5",
                description:
                "This is in putalisadak.",
                date:
                "2022-11-24T09:54:49.677+00:00"
                }
]
const Home = () =>{
    return(
<>
        <div className="mb-3">
        <label htmlFor="title" className="form-label">Title</label>
        <input type="title" className="form-control" id="title" placeholder="Enter title here."/>
        </div>
        <div className="mb-3">
        <label htmlFor="descritpion" className="form-label">Description</label>
        <textarea className="form-control" id="description" rows="3" placeholder="Enter description here."></textarea>
        </div>   
        <button type="submit" className="btn btn-primary">Add</button>
        <div className='row'>
        {notes.map((note)=><Note note={note} key={note._id}/>)}
        </div>
    </>
    )
}

export default Home;