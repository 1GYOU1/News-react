import React from 'react';
import styled from 'styled-components';
import { useLocation, useNavigate } from 'react-router-dom';

const categories = [
  {
    name: 'all',
    text: '전체보기',
  },
  {
    name: 'business',
    text: '비즈니스',
  },
  {
    name: 'entertainment',
    text: '엔터테인먼트',
  },
  {
    name: 'health',
    text: '건강',
  },
  {
    name: 'science',
    text: '과학',
  },
  {
    name: 'sports',
    text: '스포츠',
  },
  {
    name: 'technology',
    text: '기술',
  },
];

const CategoriesBlock = styled.div`
  padding: 1.5rem 0 1rem 0;
  background:#fff;
  position:fixed;
  top:0;
  left:0;
  width:100%;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
  .inner{
    display: flex;
    width: 768px;
    margin: 0 auto;
    justify-content: space-between;
  }
  @media screen and (max-width: 768px) {
    width: 100%;
    overflow-x: auto;
  }
`

const Category = styled.div`
  font-size:1.05rem;
  cursor: pointer;
  white-space: pre;
  text-decoration: none;
  color:#7b7b7b;
  padding:0.5rem 1.5rem;
  background:#e1e0e0;
  border-radius:2rem;
  transition:all ease 0.5s;

  &:hover {
    color: #fff;
    background:#495057;
  }

  &.active {
    font-weight: 600;
    color: #fff;
    background:#495057;
  }
`;

const Categories = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const goCategory = (categoryName) => {
    navigate(categoryName === 'all' ? '/' : `/${categoryName}`);
  }

  return (
    <CategoriesBlock>
      <div className='inner'>
        {categories.map(c => (
          <Category
            key={c.name}
            className={(location.pathname === '/' && c.name === 'all') || location.pathname.includes(c.name) ? 'active' : ''}
            onClick={() => goCategory(c.name)}
          >
            {c.text}
          </Category>
        ))}
      </div>
    </CategoriesBlock>
  );
};

export default Categories;
