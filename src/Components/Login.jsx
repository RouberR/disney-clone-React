import React from 'react'
import styled from 'styled-components'
export const Login = () => {
    return (
        <Container>

        <Content>
        <CTA>
        <CTALogoOne src="/images/cta-logo-one.svg" alt="logo one"/>
        <SignUp>Get all there</SignUp>
        <Description>Get Premier Access to Raya and the Last Dragon 
        for an additional fee with a Disney+ subscription. As of 09/23/25,
     the price of Disney+ and The Disney Bundle will increase by $1.</Description>
        <CTALogoTwo src="/images/cta-logo-two.png"/>
        </CTA>


        <BgImage/>
        
        </Content>

        </Container>
    )
}


const Container = styled.section`
overflow: hidden;
display: flex;
flex-direction: column;
text-align: center;
height: 100%;



`

const Content = styled.div`
${'' /* margin-bottom: 10vw; */}
width: 100%;
position: relative;
min-height: 100vh;
box-sizing: border-box;
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
padding: 80px 40px;
height: 100%;
`


const BgImage = styled.div`
height: 100%;
background-position: top;
background-size: cover;
background-repeat: no-repeat;
background-image: url("/images/login-background.jpg");
position: absolute;
top: 0;
right: 0;
left: 0;
z-index: -1;
`

const CTA = styled.div`
margin-bottom: 2vw;
max-width: 650px;
flex-wrap: wrap;
display: flex;
flex-direction: column;
justify-content: center;
margin-top: 0;
align-items: center;
text-align: center;
margin-right: auto;
margin-left: auto;
transition-timing-function: ease-out;
transition: opacity 0.2s;
width: 100%;
`


const CTALogoOne = styled.img`
margin-bottom: 12px;
max-width: 600px;
min-height: 1px;
display: block;
width: 100%;

`

const CTALogoTwo = styled.img`
margin-bottom: 25px;
max-width: 600px;
min-height: 1px;
display: inline-block;
width: 100%;

`

const SignUp = styled.a`
font-weight: bold;
text-transform: uppercase;
color: #f9f9f9;
background-color: #0063e5;
margin-bottom: 12px;
width: 100%;
letter-spacing: 1.5px;
font-size: 18px;
padding: 16px 0;
border: 1px solid transparent;
border-radius: 4px;


&:hover{
    background-color: #0483ee;
}
`


const Description = styled.p`
color: #f9f9f9;
font-size: 12px;
margin: 0 0 24px;
line-height: 1.5;

`