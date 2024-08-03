import React, { useContext, useEffect } from 'react';
import { GlobalContext } from '../src/context/GlobalStage';

const List = () => {
  const { articles, getArticles } = useContext(GlobalContext)

  useEffect(() => {
    getArticles()
  }, [])

  const article = articles.map((article) => {
    return (
      <div key={article.id}>
        <h2>{article.title}</h2>
        <p>{article.abstract}</p>
        <p>{article.byline}</p>
      </div>
    )
  })
  return <div>{article}</div>
 
  }
 
 
export default List;
