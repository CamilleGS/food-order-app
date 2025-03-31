import React  from "react";
import  { Container, ContainerItem, ContainerInputs, P, H1, Button, Img, Inputs }  from "./styles";
import Card from '../../assets/Card.png'
import { useState, useRef} from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";




const App = () =>{
//const orders = []
const [orders, setOrder] = useState([])
const inputName = useRef()
const inputDemand = useRef()

const navigate = useNavigate()


async function addNewOrder(){
const {data: newOrder} = await axios.post('http://localhost:3001/order', {demand:inputDemand.current.value, clientName:inputName.current.value })

  setOrder([...orders, newOrder]) 
  navigate('/orders')
}


return (

  <Container>
    <Img src={Card}/>
    <ContainerItem>
      <H1>Faça seu pedido!</H1>
      <ContainerInputs>
          <P>Pedido</P>
          
          <Inputs ref={inputDemand} placeholder="01 Vanilla Latte"/>
          <P>Nome do Cliente</P>
          <Inputs ref={inputName} placeholder="Camille Gonsalves"/>

          <Button onClick={addNewOrder}>Novo Pedido</Button>

      </ContainerInputs>
    </ContainerItem>

  </Container>

)}

export default App