import React from "react";
import NewsItem from "./NewsItem";
import styled from 'styled-components';
import axios from '../../node_modules/axios/index';
import usePromise from '../lib/usePromise';

const NewsListBlock = styled.div`
box-sizing: border-box;
padding-bottom: 3rem;
width: 768px;
margin: 0 auto;
margin-top: 2rem;
@media screen and (max-width: 768px) {
  width: 100%;
  padding-left: 1rem;
  padding-right: 1rem;
}
`;

const NewsList = ({category}) => {

    const [loading, response, error] = usePromise(()=>{
        const query = category === 'all' ? '' : `&category=${category}`;
        return axios.get(`https://newsapi.org/v2/top-headlines?country=kr${query}&apiKey=373c498f1c0046f4928af10e11c1e81c`);
    }, [category])

    if(loading){
        return <NewsListBlock>대기 중...</NewsListBlock>
    }
    //아직 response 값이 설정되지 않았을때
    if(!response){
        return null;
    }
    if(error){
        return null;
    }
    //response 값이 유효할때 
    const {articles} = response.data;
    return (
        <NewsListBlock>
            {articles.map(article =>(
                <NewsItem key={article.url} article={article} />
            ))}
        </NewsListBlock>
    );
};

export default NewsList;