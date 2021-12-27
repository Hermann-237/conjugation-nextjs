 import React from 'react'
import tw from 'twin.macro'
import styled from '@emotion/styled'

const Base = styled.div(()=>[tw`p-10 bg-simplecyto_secondary text-icon-primary`])
const Container = styled.div(()=>[tw`max-w-7xl mx-auto`])
const BigSection = styled.div(()=>[tw`grid grid-cols-1 big:grid-cols-2 gap-2`])
const Section = styled.div(()=>[tw`mb-5`])
const Paragraphe = styled.div(()=>[tw`text-simplecyto_ternairy`])
const HeadBase = styled.div(()=>[tw`text-2xl pb-4`])

const Footer = ():JSX.Element => {
    return (
        <footer>
            <Base>
              <Container>
                  <BigSection>
                  <Section>
                      <HeadBase className='text-2xl pb-4'>Company</HeadBase>
                      <Paragraphe>
                      A123 Lost street <br/>
                      Chindigarh, PB 04159 <br/>
                      Deutchland<br/><br/>
                      <strong>Phone:</strong>+4922846967<br/>
                      <strong>email:</strong>simplecyto@gmail.com<br/>
                      </Paragraphe>
                      
                  </Section>
                  <Section>
                      <h4>Usefull Link</h4>
                      <ul>
                          <li>Home</li>
                          <li>About us</li>
                          <li>Services</li>
                          <li>Terms of services</li>
                          <li>Privacy policy</li>
                      </ul>
                  </Section>
                  <Section>
                      <h4>Our Services</h4>
                      <ul>
                          <li>Web design</li>
                          <li>Web Development</li>
                          <li>Product Management</li>
                          <li>Marketing</li>
                          <li>Graphic design</li>
                      </ul>
                  </Section>
                  <Section>
                      <h4>Join Our Newsletter</h4>
                      <p>Join 25.000+ others and never miss out new tips, tutorials, and more</p>
                      <form>
                          <input type="text" name='' id='' />
                          <button>Subscribe</button>
                      </form>
                  </Section>
                  </BigSection>
              </Container>
            </Base>
        </footer>
    )
}

export default Footer 
