import styled from "styled-components";

export const Container = styled.div`
display: flex;
flex-direction: column;
align-items: center;
`

export const H1 = styled.h1`
margin-top: 48px;
margin-bottom: 25px;
`

export const Img = styled.img`

`

export const ContainerItem = styled.div`
display: flex;
flex-direction: column;
align-items: center;
`

export const ContainerInputs = styled.div`
display: flex;
flex-direction: column;

`


export const Button = styled.button`
background: rgba(255, 255, 255, 0.14);
color: #fff;
border: none;
cursor: pointer;
width: 342px;
height: 68px;
padding: 0px 113px;
font-size: 17px;
font-weight: 900;
line-height: 2.5px;
margin-top: 20px;

&:hover{
    background:rgb(54, 54, 54);
}

&:active{
    opacity: 0.8;
}

`

export const Order = styled.li`

background: rgba(255, 255, 255, 0.25);

display: flex;
align-items: center;
justify-content: space-between;
border-radius: 14px;
background: rgba(255, 255, 255, 0.25);
margin: 20px 0 18px 0;
padding: 17px 15px 13px 27px;

button {
    background: transparent;
    border: none;
    cursor: pointer;
}


p{
    font-size: 18px;
    font-weight: 300;
}
h4{
    font-size: 18px;
    font-weight: 700;
 }

 div{
    display: flex;
    flex-direction: column;
    gap: 29px;
}
 
`

