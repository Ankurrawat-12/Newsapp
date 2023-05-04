import React, { Component } from 'react'

export class NewsItem extends Component {

  render() {
    let { title, description, imgUrl, newsUrl, author, date, source } = this.props;
    return (
      <div className="my-3">
        <div className="card">
          <span class="position-absolute top-0  translate-middle badge rounded-pill bg-danger" style={{left:"89%", zIndex:"1"}}>
              {source}
              <span class="visually-hidden">Source</span>
        </span>
          <img src={imgUrl} className="card-img-top newsImage" alt="No Image Found" />
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{description}</p>
            <p className="card-text"><small className='text-muted'> By {author ? author : "Unknown"} on {new Date(date).toUTCString()}</small></p>
            <a href={newsUrl} className="btn btn-outline-dark btn-sm" rel="noreferrer" target="_blank">Read More</a>
          </div>
        </div>
      </div>
    )
  }
}

export default NewsItem