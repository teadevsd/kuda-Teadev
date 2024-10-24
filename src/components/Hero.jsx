import styled from "styled-components";


const Hero = () => {
  return (
    <Wrapper>
        <HeroContainer>
            <HeroDetails>
                <h2>The money app for Africans.</h2>
                <p>
                    Make free transfers, enjoy cashless payment options and earn interest
                    on your savings with Kuda.
                </p>

                <Button>
                    <AndBtn>
                    <img src="/applee.png" alt="" /> 
                    </AndBtn>


                    <GooBtn>
                    <img src="/google.png" alt="" /> 
                    </GooBtn>
                </Button>

                    <img src="./FBN.png" alt="" />

            </HeroDetails>

                <Imagecont>
                    <img src="/spin.svg" className="spin" alt="Hero Image" />
                
                    <img src="/kmoney.svg" className="imagetop" alt="Hero Image" />
                    
                </Imagecont>

            </HeroContainer>
        </Wrapper>
  );
};

export default Hero;

const Wrapper = styled.div`
    max-width: 1280px;
    min-height: calc(100vh-70px);
    border: 1px solid orange;
    margin: 80px auto;
    display: flex;
    align-items: center;
    justify-content: center;

    @media (max-width: 1200px) {
        padding: 10px;
}

    @media (max-width: 480px) {
        padding: 5px;
}
`;

const HeroContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  flex-wrap: wrap;
  align-items: center;
  width: 85%;
  border: 1px solid;

@media (max-width: 1200px) {
    flex-direction: column;
    align-items: center;
}`
;

const HeroDetails = styled.div`
  max-width: 400px;
  display: flex;
  flex-direction: column;
  justify-content: center;

  h2 {
      font-size: 36px;
      line-height: normal;
      color: #40196d;
      font-weight: 800;
    }
  p {
    margin: 30px 0;
    font-weight: 600;
  }  

@media (max-width: 1200px) {
    max-width: 100%;
    align-items: center;
    text-align: center;

    h2 {
      font-size: 32px;
      max-width: 400px;
    }

    p {
      font-size: 15px;
      max-width: 300px;
      font-weight: 600;
    }
  }

  @media (max-width: 480px) {
    h2 {
      font-size: 28px;
    }

    p {
      font-size: 16px;
    }
  }
`;

const Button = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  margin: 30px 0;

  @media (max-width: 1024px) {
    justify-content: center;
  }

  @media (max-width: 480px) {
    flex-direction: column;
    align-items: center;
  }
`;

const AndBtn = styled.div`
  img{
    width: 120px;
  }
`;

const GooBtn = styled.div`
     img{
    width: 140px;
  }
`;

const Imagecont = styled.div`
    position: relative;
    width: 550px;
    height: 550px;
    overflow: hidden;
   

    .imagetop {
        width: 100%;
        position: absolute;
        top: 0;
        left: 0;
        object-fit: cover;
    }

    .spin {
        width: 100%;
        position: absolute;
        animation: spin 6s linear infinite;
        transform-origin: center;
        

        @keyframes spin {
        from {
            transform: rotate(0deg);
        }
        to {
            transform: rotate(360deg);
        }
        }
    }

    @media (max-width: 1024px) {
        width: 400px;
        height: 400px;

        margin-top: 30px;
  }

  @media (max-width: 480px) {
        width: 300px;
        height: 300px;
  }
`
