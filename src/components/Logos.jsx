import styled from "styled-components"

const Logos = () =>{
    return (
       <Wrapper>
            <Logcont>
                <img src="./te.svg" alt="" />
                <img src="./world.svg" alt="" />
                <img src="./fintech.svg" alt="" />
                <img src="./bbc.svg" alt="" />
                <img src="./cnbc.svg" alt="" />
                <img src="./euromoney.svg" alt="" />
            </Logcont>
       </Wrapper>
    )
}

export default Logos

const Wrapper = styled.div`
    max-width: 1280px;
    margin: 0 auto;
    display: flex;
    border: 1px solid;
`

const Logcont = styled.div`
    width: 95%;
    display: flex;
    justify-content: space-between;
    border: 1px solid red;
    margin: 0 auto;

    img{
        /* padding: 30px; */
        max-width: 300px;
    }
`