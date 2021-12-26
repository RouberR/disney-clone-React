import React from 'react'
import { Link } from 'react-router-dom'
import styled from "styled-components"

export const Recomends = () => {
    return (
        <Contaiten>
            <h1>Recommended for You</h1>
            <Contant>
                <Wrap>
                    <Link to="/">
                        <img src="https://lumiere-a.akamaihd.net/v1/images/p_disneyplusoriginals_underthehelmetthelegacyofbobafett_411a8d39.jpeg" alt=""/>
                    </Link>
                </Wrap>
                <Wrap>
                    <Link to="/">
                        <img src="https://lumiere-a.akamaihd.net/v1/images/p_rayaandthelastdragon_21294_83346778.jpeg" alt=""/>
                    </Link>
                </Wrap>
                <Wrap>
                    <Link to="/">
                        <img src="https://lumiere-a.akamaihd.net/v1/images/p_soul_disneyplus_v2_20907_764da65d.jpeg" alt=""/>
                    </Link>
                </Wrap>
                <Wrap>
                    <Link to="/">
                        <img src="https://lumiere-a.akamaihd.net/v1/images/p_starwarstheriseofskywalker_19732_b0052d5f.jpeg" alt=""/>
                    </Link>
                </Wrap>
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