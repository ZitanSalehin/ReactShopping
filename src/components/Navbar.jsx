import { Badge } from "@material-ui/core";
import { Search, ShoppingCartOutlined } from "@material-ui/icons";
import React from "react";
import styled from "styled-components";
import { mobile } from "../responsive";
import logo from './logo.svg';

const Container = styled.div`
  height: 60px;
  background-color:#fffcc9;
  ${mobile({ height: "50px" })}
`;

const Wrapper = styled.div`
  padding: 10px 5px;
  width:90vw;
  display: flex;
  align-items: center;
  justify-content: space-around;
  ${mobile({ padding: "10px 0px" })}
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
`;

// const Language = styled.span`
//   font-size: 14px;
//   cursor: pointer;
//   ${mobile({ display: "none" })}
// `;

const SearchContainer = styled.div`
  border: 0.5px solid lightgray;
  display: flex;
  align-items: center;
  margin-left: 5px;
  padding: 5px;
  width:30%;
  
`;

const Input = styled.input`
  border: none;
  width:80%;
  background-color:#fffcc9;
  ${mobile({ width: "50px" })}
`;

const Center = styled.div`
  flex: 1;
  disply:flex;
  flex-direction:row;
  text-align: center;
  padding-right:-25px;
`;

const Logo = styled.h1`
  width:40px;
  height:40px;
  
  ${mobile({ fontSize: "12px" })}
  &:hover {
    color: #ff5e5e;
    cursor: pointer;
    
  }
`;
const Right = styled.div`
  width:40%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  ${mobile({ flex: 2, justifyContent: "center" })}
  
`;

const MenuItem = styled.div`
  font-size: 14px;
  color:#5c5c5c;
  cursor: pointer;
  margin-left: 25px;
  ${mobile({ fontSize: "12px", marginLeft: "10px" })}
  &:hover {
    color: #ff5e5e;
    cursor: pointer;
    
  }
`;

const Navbar = () => {
  return (
    <Container>
      <Wrapper>
        <Left>
          
          <SearchContainer>
            <Input placeholder="Search" />
            <Search style={{ color: "gray", fontSize: 16 }} />
          </SearchContainer>
        </Left>
        <Center style={{display:"flex",flexDirection: "row"}}>
          <Logo><img src={logo}/></Logo>
          <Logo>HealthOS</Logo>
          
        </Center>
        <Right>
          <div style={{display:"flex",flexDirection: "column"}}>
          <MenuItem>REGISTER</MenuItem>
          <MenuItem>SIGN IN</MenuItem>
          </div>
          <MenuItem>
            <Badge badgeContent={5} color="primary">
              <ShoppingCartOutlined style={{display:"flex",flexDirection: "column"}} />
            </Badge>
          </MenuItem>
        </Right>
      </Wrapper>
    </Container>
  );
};

export default Navbar;
