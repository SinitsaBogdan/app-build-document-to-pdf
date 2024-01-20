import React from "react";
import styled from 'styled-components';
import { useReactToPrint } from 'react-to-print';

// components:
import { Header, Footer } from "./components";
import { Avatar, Range } from '../src/components/UI';
import { Title, Descr } from '../src/components/Layouts';

// icons:
import { ReactComponent as MailIcon } from './assets/icon/mail.svg'
import { ReactComponent as PhoneIcon } from './assets/icon/phone.svg'

const Wrapper = styled.div`
  max-width: 1200px;
  margin: 2rem auto;
  padding: 3rem 2rem;
  background-color: white;
  border: 1px solid #ececec;
  box-shadow: 5px 7px 10px 4px #ececec;
  border-radius: 14px;
`

const Row = styled.section`
  display: flex;
  flex-wrap: wrap;
  align-items: ${(props) => (props.itemsCenter ? 'center' : 'start')};
  margin: 2rem 0;
`

const Content = styled.div`
    flex: 1;
    margin-left: 1rem;
`

const Sidebar = styled.div`
  width: 200px;
  margin-right: 1rem;
`

export default function App() {

    const [skillsCounter, setSkillsCounter] = React.useState(1)
    const [worksCounter, setWorksCounter] = React.useState(1)
  
    const componentRef = React.useRef()
    const handlePrintClick = useReactToPrint({
        content: () => componentRef.current,
    })

    return (
        <div className="ui-wrapper">
            <Header onClick={handlePrintClick} />
            <div className="ui-content-wrapper">
                <Wrapper className="ui-section">
                    <div ref={componentRef} className="ui-container">
                        <Row itemsCenter>
                            <Sidebar>
                                <Avatar/>
                            </Sidebar>
                            <Content>
                                <Title size='1' maxWidth='30'>Hello my Author</Title>
                                <Descr>
                                    Experienced Software & Machine Learning Engineer with a
                                    demonstrated history.
                                </Descr>
                            </Content>
                        </Row>
                        <Row>
                            <Sidebar>
                                <Title isUppercase size='3'>About me:</Title>
                                <Descr>Software Engineer</Descr>
                                <Descr>Washington, DC | tocode.ru</Descr>
                                <Descr isPrimary style={{ marginTop: '2rem' }}>
                                <MailIcon style={{ marginRight: '0.6rem' }} />
                                    nick@gmail.com
                                </Descr>
                                <Descr isPrimary>
                                    <PhoneIcon style={{ marginRight: '0.6rem' }} />
                                    +1 588-6500
                                </Descr>
                            </Sidebar>
                            <Content>
                                
                                <Title isUppercase size='3'>Education:</Title>
                                <Descr>Stanford University - BS Electrical Engineering</Descr>
                                
                                <Title 
                                    isUppercase 
                                    isShowButton 
                                    size='3' 
                                    style={{ marginTop: '2.6rem' }}
                                    onClick={() => setWorksCounter(worksCounter + 1)}
                                >
                                    Work experience:
                                </Title>

                                {
                                    new Array(worksCounter).fill(1).map((_, i) => (
                                        <Descr key={i}>{i + 1}. Solutions Architect, Stripe.</Descr>
                                    ))
                                }

                                <Title 
                                    isUppercase 
                                    isShowButton 
                                    onClick={() => setSkillsCounter(skillsCounter + 1)}
                                    size='3' 
                                    style={{ marginTop: '2.6rem' }}
                                >
                                    Skills:
                                </Title>

                                {
                                    new Array(skillsCounter).fill(1).map((_, i) => (
                                        <Range key={i} />
                                    ))
                                }

                                
                            </Content>
                        </Row>

                        <Descr>Solutions Architect, Stripe.</Descr>

                    </div>
                </Wrapper>
            </div>
            <Footer />
        </div>
    );
}