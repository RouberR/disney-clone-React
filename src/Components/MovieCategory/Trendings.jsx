import React from 'react'
import { Link } from 'react-router-dom'
import styled from "styled-components"
import { useSelector } from 'react-redux'
import { selectTrending } from '../../store/movie/movieSlice'

export const Trendings = () => {
    const Trendings = useSelector(selectTrending)
    return (
        <Contaiten>
            <h1>Trendings</h1>
            <Contant>
            {Trendings && Trendings.map(item => 
                <Wrap key={item.id}>
                    <Link to="/">
                        <img src={item.cardImg} alt={item.title}/>
                    </Link>
                </Wrap>
           )}    
            </Contant>
        </Contaiten>
    )
}
const Contaiten = styled.div`
padding: 0 0 26px;
text-align: center;
`

const Contant = styled.div`
@media(max-width: 768px){
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-evenly;
}
display: flex;
height: 100%;
width: 100%;
align-items: center;
justify-content: space-evenly;

`

const Wrap = styled.div`
@media(max-width: 768px){
    margin-bottom:10px;
    width: 40%;
    height: 30%;
}
border-radius: 10px;
box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px,
      rgb(0 0 0 / 73%) 0px 16px 10px -10px;
cursor: pointer;
overflow: hidden;
position: relative;
width: 20%;
height: 30%;
border: 3px solid #222535;
transition: all 250ms cubic-bezier(0.25, 0.45, 0.45, 0.9) 0s;
    img{
        inset:0px;
        display: block;
        opacity: 1;
        object-fit: cover;
        
        top: 0;
        inset: 0px;
        z-index:1;
        width: 100%;
        height: 100%;
       
    }

&:hover{
    border: 3px solid white;
    transform: scale(1.05);

}
`