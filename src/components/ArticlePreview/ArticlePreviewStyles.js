import styled from 'styled-components';
import Avatar from '../Avatar/Avatar';

export const StyledArticle = styled.div`
display:flex;
justify-content: flex-start;
align-items:center;
position:relative;
@media(max-width:1024px) {
    flex-direction:column;
    /* justify-content:flex-end; */
    /* width:100%; */
    align-items:flex-start;
}
`;
export const StyledArticleTexts = styled.div`
display:flex;
flex-direction: column;
align-items:flex-start;
justify-content: flex-start;
padding-left: 50px;
text-align:left;
@media(min-width:1024px) {
    text-align:center;
    height:110%;
}
@media(max-width:1024px) {
    padding-left: 20px;
    /* margin-left: 20px; */
}
`;
export const StyledParagraph = styled.p`
font-size:2rem;
font-weight:700;
align-self:flex-start;
@media(max-width:1024px) {
    /* align-self:center; */
    font-size:1.6rem;
}
`;
export const StyledHeading = styled.h2`
font-size: 3.5rem;
font-weight:700;
text-align:left;
margin-top: -10px;
@media(max-width:1024px) {
    /* text-align:center; */
    align-self: left;
    font-size:2.2rem;
}
`;
export const StyledImg = styled.img`
position:relative;
left:20px;
width:30%;
height:100%;
@media(max-width:1024px) {
    width:100%;
    height:60%;
}
`;
export const StyledAvatar = styled(Avatar)`
@media(max-width:1024px){
    justify-self:left;
    align-self:left;
}
`;