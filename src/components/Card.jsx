import React from 'react'
import { Bookmark } from "lucide-react";
const Card = (props) => {
  return (
    <div className="card">
          <div>
            <div className="top">
              <img src= {props.brandLogo} alt="" />
              <button>
                Save <Bookmark size={12} />
              </button>
            </div>
            <div className="center">
              <h3>
                {props.company} <span>{props.date}</span>
              </h3>
              <h2>{props.position}</h2>
              <div className="tag">
                <h4>{props.JobType}</h4>
                <h4>{props.level}</h4>
              </div>
            </div>
          </div>
          <div className="bottom">
            <div>
              <h3>${props.money}/hr</h3>
              <p>{props.location}</p>
            </div>
            <button>Apply Now</button>
          </div>
        </div>
  )
}

export default Card
