import React, { useState } from 'react'
import NextflixLogo from '../../asset/images/Nextflix.png'
import {BsSearch} from 'react-icons/bs'
import styled from 'styled-components'
import {useScrollY} from '../hooks'
import { useNavigate } from 'react-router-dom'


export default function Navbar() {
    const [scrollY] = useScrollY()
    const [keywords, setKeywords] = useState('')
    const navigate = useNavigate()

    const handleInput = (e) => {
        setKeywords(e.target.value)
        if(e.target.value.length > 0) 
            navigate(`/search?keywords=${e.target.value.trim()}`)
        else
            navigate('/')
    }

    const goHome = () => {
        navigate('/')
        setKeywords('')
    }

  return (
    <Navigation >
        <div className='navContainer' style={scrollY < 50 ? {backgroundColor: 'transparent'} : {backgroundColor:'var(--color-background'}}>
            <div className='logo' onClick={goHome}>
                <img src={NextflixLogo}></img>
            </div>
            <div className='navSearch'>
                <BsSearch className='iconSearch'/>
                <input 
                    type='text' 
                    placeholder='Input title, genres, people'
                    onChange={handleInput}
                    value={keywords}
                    />
                    
            </div>
        </div>
    </Navigation>
  )
}

const Navigation = styled.div`
    width: 100%;
    height: 80px;
    position: fixed;
    top: 0;
    transition: all 0.1s  ease;
    z-index: 10;

    @media screen and (max-width: 600px){
        height: 100px;
    } 

    .navContainer {
        background-color: var(--color-background);
        display: flex;
        align-items: center;
        justify-content: flex-start;
        height: 100%;
        transition: all 0.3s  ease;

        @media screen and (max-width: 600px){
            flex-direction: column;
        }

        .logo {
            width: 120px;
            cursor: pointer;
            img {
                width: 100%;
            }
        }

        .navSearch {
            color: #bbb;
            display: flex;
            flex-direction: flex-end;
            padding: 20px;

            &:hover .inputSearch{
                color: var( --color-white);
            }

            .iconSearch {
                width: 20px;
                height: 20px;
                cursor: pointer;
                transform: translate(24px, 10px);
            }

            input {
                font-size: 14px;
                border: 1px solid #fff;
                color: var( --color-white);
                outline: none;
                width: 0;
                padding: 10px;
                cursor: pointer;
                opacity: 0;
                background: var(--color-background);
                transition: width 0.5s ease;

                &:focus {
                    padding-left: 26px;
                    width: 300px;
                    cursor: text;
                    opacity: 1;
                    border-radius: 4px;
                }
            }
        }
    }
`