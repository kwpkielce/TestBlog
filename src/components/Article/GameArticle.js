import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import ArticleTemplate from '../../layouts/Article/ArticleTemplate';

const MobileArticle = () => {
  const data = useStaticQuery(graphql`
    query GameQuery {
        allDatoCmsGamearticle {
          edges {
            node {
              articleContent {
                ... on DatoCmsArticleHeading {
                  heading
                }
                ... on DatoCmsArticlePicture {
                  picture {
                    url
                  }
                }
                ... on DatoCmsArticleParagraph {
                  paragraph
                }
              }
              articleTag
              articleTitle
              mainPhoto {
                  url
              }
            }
          }
        }
      }
    `);
  const dates = data.allDatoCmsGamearticle.edges[0].node;
  return (
    <ArticleTemplate
      title={dates.articleTitle}
      category="GRY"
      mainPhoto={dates.mainPhoto.url}
      name="Imie i nazwisko"
      date="11.12.2020r"
      content={dates.articleContent}
      tags={dates.articleTag}
    />
  );
}

export default MobileArticle;