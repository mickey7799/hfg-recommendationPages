import React, { Component } from 'react';
import styled from 'styled-components';
import Search from './search';



const Wrapper = styled.div`
    display: flex; 
    margin-top: 20px;
    height: auto;
    flex-direction: column;
    align-items: flex-start;
    @media (max-width: 1000px){
        display: flex; 
        margin-top: 20px;
        flex-direction: column;
        align-items: flex-start;
    }
    @media (max-width: 769px){
        height: auto;
    }
`;

const SearchWrapper = styled.div`
    flex-grow: 1.5;
    margin-bottom: auto;
    padding-top: 3%; 
    @media (max-width: 1000px){
        flex-grow: 0.5;
    }
    @media (max-width: 769px){
        flex-grow: 1;
        margin-bottom: auto;
        padding-top: 20%;
        margin: auto;
    }
`;

const LocationTitle = styled.div`
    font-size: 32px;
    line-height: 1.3;
    font-family: Inter, sans-serif;
    color: #5f6368;
    font-weight: 700;
    letter-spacing: -1px;
    margin: 1em 1em 2em 1em;
    @media (max-width: 1000px){
        font-size: 28px;
        line-height: 1.3;
        margin-bottom: 10px;
        margin-top: 0px;
    }
    @media (max-width: 769px){
        font-size: 38px;
        line-height: 1.3;
        margin-bottom: 20px;
        margin-top: 50px;
        text-align: center;
    }
    @media (max-width: 415px){
        font-size: 32px;
        line-height: 1.3;
        margin-bottom: 20px;
        margin-top: 50px;
    }
`;

const Rating = styled.div`
    font-family: 'Inter', sans-serif;
    color: #5f6368;
    margin: 0em 1em 2em 1em;
    font-weight: 300;
    font-size: 1.5em;
    line-height: 1.6em;
    @media (max-width: 769px){
        margin-top: 32px;
        text-align: center;
    }
    @media (max-width: 360px){
        font-size: 0.8em; 
    }
`;


function SearchView(){


    return (
        <Wrapper>
                    <SearchWrapper> 
                        <Search/>
                    </SearchWrapper>
                    
                    <LocationTitle>Discover better restaurants, faster, with Hood Food Guide.</LocationTitle>
                    <Rating>   
                        See where top chefs &amp; restaurant owners  
                        <br/>
                        love to eat in every neighbourhood.
                        <br/>  
                        <br/>
                        <span className="text-span">Download &amp; try Hood Food Guide today.</span>
                    </Rating>
                        
                        
                    
        </Wrapper>

    )
}
export default SearchView;