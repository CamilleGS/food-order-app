import React  from "react";
import  { Container, ContainerItem, ContainerInputs, H1, Button, Img, Order }  from "./styles";
import Coffee from '../../assets/Coffee.png'
import Trash from '../../assets/trash.svg'
import { useState, useEffect} from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";




const App = () =>{
//const orders = []
const [orders, setOrder] = useState([])
const navigate = useNavigate()


//when the page load
useEffect(()=>{
  async function fetchOrder(){
    const {data:newOrders} = await  axios.get('http://localhost:3001/order')
    setOrder(newOrders)
  }

  fetchOrder()
}, [])

async function deleteOrder(orderId){
  await axios.delete(`http://localhost:3001/order/${orderId}` )
  const newOrders = orders.filter(order=>order.id !== orderId)
  setOrder(newOrders)
}

function goBack(){
  navigate("/")
}

return (

  <Container>
    <Img src={Coffee}/>
    <ContainerItem>
      <H1>Pedido</H1>
      <ContainerInputs>
      <ul>
            { orders.map(order => (
              <Order key={order.id}>
                <div>
                  <p>{order.demand}</p>
                  <h4>{order.clientName}</h4>
                </div> 
                <button onClick={()=>deleteOrder(order.id)}><img src={Trash} alt="delete"/></button>
              </Order>
            ))}
          </ul>

          <Button onClick={goBack}>Voltar</Button>
      </ContainerInputs>
    </ContainerItem>

  </Container>

)}

export default App