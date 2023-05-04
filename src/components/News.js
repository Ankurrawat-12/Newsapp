import React, { Component } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner';

export class News extends Component {

  static defaultProps = {
    country: "",
    headline: "top-headlines",
    category: "general",
    query: ""
  }

  // static propTypes = {
  //   country: propTypes.string,
  //   heading: propTypes.string,
  //   category: propType.string,
  //   query: propTypes.string
  // }

  articles = [];

  constructor() {
    super();
    this.state = {
      articles: this.articles,
      loading: false,
      page: 1
    }
  }

  async componentDidMount() {
    this.updateNews();
  }

  async updateNews() {
    let url = "";
    if(this.props.headline === "top-headlines"){
      url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&q=${this.props.query}&category=${this.props.category}&apiKey=08a8e5561a1f4b8d81aefe7634acee9b&page=${this.state.page}&pageSize=16`;
    }
    else if(this.props.headline === "everything"){
      url = `https://newsapi.org/v2/everything?&q=${this.props.query}&apiKey=08a8e5561a1f4b8d81aefe7634acee9b&page=${this.state.page}&language=en&pageSize=16`;
    }
    this.setState({
      loading: true
    })
    let data = await fetch(url);
    let parsedData = await data.json();
    this.setState({
      articles: parsedData.articles,
      totalResults: parsedData.totalResults,
      loading: false
    })
  }

  handlePreviousClick = async () => {
    this.setState({
      page: this.state.page - 1,
    })
    this.updateNews();
  }
  
  handleNextClick = async () => {
    this.setState({
      page: this.state.page + 1,
    })
    this.updateNews();
  }


  render() {
    let {query} = this.props;
    return (
      <div className='container my-3'>
        <h2 className='heading'>{this.props.heading === "top-headlines"?"Top Headlines":"News Related To"} {query?query:""}</h2>
        {this.state.loading && <Spinner text="loading..."/>}
        {!this.state.loading && this.state.totalResults === 0 && <Spinner text="Query Not Found!"/>}
        <div className='row row-cols-1 row-cols-sm-1 row-cols-md-2 row-cols-lg-4 g-4'>
          {/* TODO News URL */}
          {!this.state.loading && this.state.articles && this.state.articles.map((article) => {
            return <div className='col'  key={article.url}>
              <NewsItem title={article.title?article.title.substring(0, 45) + "...":""} description={article.description?article.description.substring(0, 88) + "...":""} imgUrl={article.urlToImage?article.urlToImage:"https://source.unsplash.com/random/?Nature/"} newsUrl={article.url} author={article.author} date ={article.publishedAt} source = {article.source.name}/>
            </div>
          })}
        </div>
        <div className="container d-flex justify-content-between my-4">
          <button disabled={this.state.page <= 1} type="button" onClick={this.handlePreviousClick} className="btn btn-outline-dark">&larr; Previous</button>
          <button disabled={Math.ceil(this.state.totalResults/16) < this.state.page + 1} type="button" onClick={this.handleNextClick} className="btn btn-outline-dark"> Next &rarr;</button>
        </div>
      </div>
    )
  }
}

export default News

