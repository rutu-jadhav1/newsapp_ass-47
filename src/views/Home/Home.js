import { useEffect, useState } from "react"
import axios from "axios"
import "./Home.css"

function Home() {
    const [news, setNews] = useState([])

    const loadNews = async () => {
        const response = await axios.get("https://newsapi.org/v2/everything?q=tesla&from=2024-06-13&sortBy=publishedAt&apiKey=05160faa47374fd698ffdbc06b43d80a");
        setNews(response.data.articles)
    }

    useEffect(()=>{
        loadNews()
    }, [])
    
    return (
    <div>
        <h1>All articles about Tesla</h1>
        {
            news.map((newsArticle, index)=>{
                const {author, title, description, url, urlToImage, publishedAt, content} = newsArticle
                return(
                    <>
                        <div className="news-article-card">
                            <img src={urlToImage} alt="" className="news-article-img"/>
                            <h2>{title}</h2>
                        </div>
                    </>
                   
                )
            })
        }
    </div>
  )
}

export default Home