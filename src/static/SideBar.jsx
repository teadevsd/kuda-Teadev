import styled from "styled-components"



const Sidebar = () =>{
    return (
        <Container>
            <Link to="/">
                <nav>Personal</nav>
            </Link>

            <Link to= "/business">
                 <nav>Business</nav>
            </Link>
            
            <Link to= "/companies">
                <nav>Companies</nav>
            </Link>
            
        </Container>
    )
}

export default Sidebar

const Container = styled.div`
    min-height: calc(100vh - 70px);
    background-color: purple;
`


const Link = styled.div`
`