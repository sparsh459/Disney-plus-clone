import React from 'react'
import styled from 'styled-components'

function Details() {
    return (
        <Container>
            <Background>
                <img src='/images/slider-badging.jpg' />
            </Background>
            <ImageTitle>
                <img src='/images/viewers-disney.png' />
            </ImageTitle>
            <Controls>
                <PlayButton>
                    <img src="/images/play-icon-black.png" alt="" />
                    <span>Play</span>
                </PlayButton>
                <TrailerButton>
                    <img src="/images/play-icon-white.png" alt="" />
                    <span>Trailer</span>
                </TrailerButton>
                <Addlist>
                    <span /><span />
                </Addlist>
                <GroupWatch>
                    <div>
                        <img src="/images/group-icon.png" alt="" />
                    </div>
                </GroupWatch>
            </Controls>
            <SubTitle>ReactJS Tutorial for Beginners - Full Course in 20 Hours [2022]</SubTitle>
            <Description>
                Disney clone all finished. Another great tutorial. I feel like you missed a few things though like the animation that plays when you hover over the franchises and making it all responsive but overall good stuff.
            </Description>
        </Container>
    )
}

export default Details

const Container = styled.div`
    min-height: calc(100vh-70px);
    padding: 0 calc(3.5vw + 5px);
    position: relative;
`

const Background = styled.div`
    left: 0px;
    opacity: 0.8;
    position: fixed;
    right: 0px;
    top: 0px;
    z-index: -1;
    img {
        width: 100vw;
        height: 100vh;
        object-fit: cover;
        @media (max-width: 768px) {
          width: initial;
        }
    }
`

const ImageTitle = styled.div`
align-items: flex-end;
display: flex;
-webkit-box-pack: start;
justify-content: flex-start;
margin: 0px auto;
height: 30vw;
min-height: 170px;
padding-bottom: 24px;
width: 100%;
    img {
        max-width: 600px;
        min-width: 200px;
        width: 35vw;
    }
`

const Controls = styled.div`
align-items: center;
display: flex;
flex-flow: row nowrap;
margin: 24px 0px;
min-height: 56px;
`

const PlayButton = styled.button`
  font-size: 15px;
  margin: 0px 22px 0px 0px;
  padding: 0px 24px;
  height: 56px;
  border-radius: 4px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  letter-spacing: 1.8px;
  text-align: center;
  text-transform: uppercase;
  background: rgb (249, 249, 249);
  border: none;
  color: rgb(0, 0, 0);
  img {
    width: 32px;
  }
  &:hover {
    background: rgb(198, 198, 198);
  }
  @media (max-width: 768px) {
    height: 45px;
    padding: 0px 12px;
    font-size: 12px;
    margin: 0px 10px 0px 0px;
    img {
      width: 25px;
    }
  }
`

const TrailerButton = styled(PlayButton)`
  background: rgba(0, 0, 0, 0.3);
  border: 1px solid rgb(249, 249, 249);
  color: rgb(249, 249, 249);
  &:hover {
    color: black;
  }
`

const Addlist = styled.div`
  margin-right: 16px;
  height: 44px;
  width: 44px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.6);
  border-radius: 50%;
  border: 2px solid white;
  cursor: pointer;
  span {
    background-color: rgb(249, 249, 249);
    display: inline-block;
    &:first-child {
      height: 2px;
      transform: translate(1px, 0px) rotate(0deg);
      width: 16px;
    }
    &:nth-child(2) {
      height: 16px;
      transform: translateX(-8px) rotate(0deg);
      width: 2px;
    }
  }
`

const GroupWatch = styled.div`
  height: 44px;
  width: 44px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  background: white;
  div {
    height: 40px;
    width: 40px;
    background: rgb(0, 0, 0);
    border-radius: 50%;
    img {
      width: 100%;
    }
  }
`

const SubTitle = styled.div`
  color: rgb(249, 249, 249);
  font-size: 15px;
  min-height: 20px;
  @media (max-width: 768px) {
    font-size: 12px;
  }
`

const Description = styled.div`
  line-height: 1.4;
  font-size: 20px;
  padding: 16px 0px;
  color: rgb(249, 249, 249);
  @media (max-width: 768px) {
    font-size: 14px;
  }
`