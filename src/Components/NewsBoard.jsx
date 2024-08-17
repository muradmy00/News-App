import { useEffect, useState } from "react";
import NewsItem from "./NewsItem";

function NewsBoard({category}) {

    const [article,setArticle] = useState([]);


    useEffect(() => {
          
        let url = `https://newsapi.org/v2/top-headlines?sources=bbc-news&apiKey=${import.meta.env.VITE_API_KEY}`;

                                                                                //= category

        fetch(url).then(response=>response.json()).then(data => setArticle(data.articles));

    },[category])

  return (
    
    <div>

     <h2 className="text-center">Latest <span className="badge bg-danger">News</span></h2>

    {article.map((news,index) => {

        return <NewsItem key={index} title={(news.title).slice(0,50)} description={news.description.slice(0,90)} src={news.urlToImage} url={news.url}/>
    })} 

    </div>
  )
}

export default NewsBoard