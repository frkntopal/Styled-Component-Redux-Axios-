import styled from "styled-components";

export const ProjectsContainer = styled.div`
    margin-top: 30px;
    margin-bottom: 60px;
    display: flex;
    flex-wrap: wrap;
    gap: 2rem;
    justify-content: center;

    
    @media (max-width: 768px) { 
      justify-content: center; 
    }
`

export const ProjectCard = styled.a`
    display: flex;
    align-items: center;
    width: calc(33.33% - 1rem); 
    margin-right: 1rem;
    box-shadow: 0px 2px 4px rgba(123, 234, 100, 0.5); 
    padding: 1rem;
    color: white;
    
    @media (max-width: 768px) { 
      width: calc(50% - 0.5rem); 
      margin-right: 0.5rem;
      margin-bottom: 1rem;
    }
`

export const Avatar = styled.img`
    width: 50px;
    height: 50px;
    border-radius: 50%;
    margin-right: 1rem; 
    
    @media (max-width: 768px) { 
      margin-right: 0.5rem; 
    }
`
export const ProjectInfo = styled.div`
    flex: 1;
`

export const ProjectName = styled.div`
    font-weight: bold;
    margin-bottom: 0.5rem; 
`

export const Language = styled.div`
font-weight: bold;
margin-bottom: 0.5rem; 
`


