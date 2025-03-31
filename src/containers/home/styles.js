import styled from "styled-components";

export const Container = styled.div`
display: flex;
flex-direction: column;
align-items: center;
`

export const H1 = styled.h1`
margin-top: 48px;
margin-bottom: 76px;
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

export const Inputs = styled.input`
padding: 19px 139px 18px 15px;
border: none;
border-radius: 14px;
background: rgba(255, 255, 255, 0.25);
margin-bottom: 42px;
color: white;


&::placeholder{
    font-family: Roboto;
    font-size: 18px;
    font-weight: 300;


}

`
export const P = styled.p`
font-size: 18px;
font-weight: 700;
line-height: 22px;
letter-spacing: -0.408px;
margin-left: 20px;

`

export const Button = styled.button`
background: #D93856;
color: #fff;
border: none;
cursor: pointer;
width: 342px;
height: 68px;
padding: 0px 113px;
font-size: 17px;
font-weight: 900;
line-height: 2.5px;
margin-top: 76px;

&:hover{
    background:rgb(255, 0, 47);
}

&:active{
    opacity: 0.8;
}

`



