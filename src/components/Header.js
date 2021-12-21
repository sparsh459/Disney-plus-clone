import React from 'react'
import styled from 'styled-components'

function Header() {
    return (
    <Nav>
        <Logo src='./images/logo.svg' />
        <NavMenu>
            <a>
                <img src="/images/home-icon.svg" alt="HOME" />
                <span>HOME</span>
            </a>
            <a>
                <img src="/images/search-icon.svg" alt="SEARCH" />
                <span>SEARCH</span>
            </a>
            <a>
                <img src="/images/watchlist-icon.svg" alt="WATCHLIST" />
                <span>WATCHLIST</span>
            </a>
            <a>
                <img src="/images/original-icon.svg" alt="ORIGINALS" />
                <span>ORIGINALS</span>
            </a>
            <a>
                <img src="/images/movie-icon.svg" alt="MOVIES" />
                <span>MOVIES</span>
            </a>
            <a>
                <img src="/images/series-icon.svg" alt="SERIES" />
                <span>SERIES</span>
            </a>
        </NavMenu>
        <Userimage src='/images/my-photo.jpeg' />
    </Nav>
    )
}

export default Header

const Nav = styled.nav`
    height: 70px;
    background: #090b13;
    display: flex;
    align-items: center;
    padding: 0 36px;
    overflow-x: hidden;
`

const Logo = styled.img`
    width: 80px;
`

const NavMenu = styled.div`
    display: flex;
    flex: 1;
    margin-left: 25px;
    align-items: center;

    a {
        display: flex;
        align-items: center;
        padding: 0 12px;
        cursor: pointer;

        img {
            height: 20px;
        }
        span {
            font-size: 13px;
            letter-spacing: 1.42px;
            position: relative;

            &:before {
                background-color: rgb(249, 249, 249);
                border-radius: 0px 0px 4px 4px;
                bottom: -6px;
                content: "";
                height: 2px;
                left: 0px;
                opacity: 0;
                position: absolute;
                right: 0px;
                transform: scaleX(0);
                transform-origin: left center;
                transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
                visibility: hidden;
                width: auto;
            }
        }
        &:hover {
            span:before {
              transform: scaleX(1);
              visibility: visible;
              opacity: 1 !important;
            }
        }
    }
`

const Userimage = styled.img`
    width: 48px;
    height: 48px;
    border-radius: 50%;
    cursor: pointer;
`