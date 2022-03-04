// CSS
import './style/Trip.css'

// UTILS
import { v4 as uuidv4 } from 'uuid';
import { useState } from 'react';

function Trip(props){
    const {title,url,description,photos,tags} = props;   
    let descriptionSplit = [];
    if(description.includes("\n")){
        descriptionSplit = [...description.split("\n\n")];
    } else {
        descriptionSplit = [description,""];
    }

    return (

        <div className="item">

            <div className="img1"><img src={photos[0]} /></div>

            <div className="textBox">

                <div className='title'>
                    <a href={url} target="_blank">{title}</a>
                </div>

                <div className='preDescription'>
                    {descriptionSplit[0]}
                </div>

                <div className='postDescription'>
                    <div className='text'>
                        {descriptionSplit[1]}
                    </div>
                    <a href={url} target="_blank">อ่านต่อ</a>
                </div>

                <div className='tags'>
                    <b>หมวด :</b>
                    <div className='tagName'>
                        {tags.map((element)=>{
                            return <a key={uuidv4()}>{element}</a>
                        })}
                    </div>
                </div>

                <div className='imgGallary'>
                    <div className="img2"><img src={photos[1]} /></div>
                    <div className="img3"><img src={photos[2]} /></div>
                    <div className="img4"><img src={photos[3]} /></div>
                </div>



            </div>
        </div>

    );
}

export default Trip;