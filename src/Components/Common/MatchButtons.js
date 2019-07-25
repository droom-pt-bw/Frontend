import styled from 'styled-components'

const Butt = styled.div`
display: flex;
align-items: center;
justify-content: center;
flex-direction: row;
.Match{
    font-size: 16px;
    background-color: #14B650;
    padding: 0.5rem 1rem;
    border-radius: 5px;
    color: white;
    text-decoration: none;
    margin: 0 1rem;
    box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.25);
  
    &:hover {
      background-color: #30AA95;
    }
}

.Reject {
    font-size: 16px;
    background-color: #FBA11B;
    padding: 0.5rem 1rem;
    border-radius: 5px;
    color: white;
    text-decoration: none;
    margin: 0 1rem;
    box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.25);
  
    &:hover {
      background-color: #FFCC71;
    }
}


`;


export default Butt;


