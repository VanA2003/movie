import React from 'react'
import {MdTheaterComedy} from 'react-icons/md'
import {SiNetflix} from 'react-icons/si'
import {FaHome, FaHotjar, FaStar} from 'react-icons/fa'
import {
    GiNinjaHeroicStance,
    GiRomanToga,
    GiGhost,
    GiBandageRoll,
} from 'react-icons/gi'
import styled from 'styled-components'
import MenuItem from './MenuItem'

export default function Menu() {
  return (
    <MenusPane>
        <MenuItem name="Netflix" Icon={SiNetflix} to="nextflix"/>
        <MenuItem name="Trending" Icon={FaHotjar} to="trending"/>
        <MenuItem name="Top rated" Icon={FaStar} to="toprated"/>
        <MenuItem name="Action Movies" Icon={GiNinjaHeroicStance} to="action"/>
        <MenuItem name="Comedy Movies" Icon={MdTheaterComedy} to="comedy"/>
        <MenuItem name="Horror Movies" Icon={GiGhost} to="horror"/>
        <MenuItem name="Romance Movies" Icon={GiRomanToga} to="romance"/>
        <MenuItem name="Documentaries" Icon={GiBandageRoll} to="documentaries"/>
    </MenusPane>
  )
}

const MenusPane = styled.div`
    position: fixed;
    left: 0;
    top: 20%;
    width: 46px;
    padding: 4px 0;
    background: rgba(0, 220, 220, 0.3);
    z-index: 100;
    display: flex;
    flex-direction: column;
    transform-origin: left center;
    transition: all 0.3s linear;
    overflow: hidden;
    &:hover {
        width: 180px;
        background: rgba(0, 0, 0, 0.5);
    }

    .subMenu {
        display: flex;
        align-items: center;
        width: max-content;
        margin-left: 2px;
        padding: 4px 6px;
        cursor: pointer;

        .icon {
            font-size: 30px;
            margin-right: 8px;
        }

        span {
            font-size: 16px;
            font-weight: 400px;
            color: rgba(255, 255, 255, 0.6);
            &:hover {
                color: #fff;
            }
        }
    }

`