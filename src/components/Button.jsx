import styled from 'styled-components';

export const ButtonContainer = styled.button`
text-transform: capitalize;
font-size: 1.4rem;
background: transparent;
border: 0.05rem solid var(--lightBLue);
border-color: ${props => props.cart? "var(--mainYellow)":"var(--lightBLue)"};
color:${props => props.cart? "var(--mainYellow)":"var(--lightBLue)"};
border-radius: 0.5rem;
padding: 0.2rem .5rem;
cursor: pointer;
margin: .2rem .5rem;
transition: all .5s ease-in-out;
&:hover{
    background: ${props => props.cart? "var(--mainYellow)":"var(--lightBLue)"};
    color: var(--mainBlue);
}
&:focus {
    outline: none;
}
`
