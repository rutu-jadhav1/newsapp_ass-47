import "./NewsArticle.css"

function NewsArticle({author, title, description, url, urlToImage, publishedAt, content}) {
    return (
        <>
            <div className="news-article-card">
                <img src={urlToImage} alt="" className="news-article-img" />
                <h2>{title}</h2>
            </div>
        </>
    )
}

export default NewsArticle