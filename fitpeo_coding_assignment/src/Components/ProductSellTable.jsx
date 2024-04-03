import React from "react";
import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  Text,
  Heading,
  Input,
} from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";

export default function ProductSellTable() {
  const tableData = [
    {
      image:
        "https://static2.bigstockphoto.com/8/6/3/large1500/368871724.jpg",
        title:'Abstract 3D',
        discription:'Ipsum has been the industrys standard dummy',
        stock:'21 stock',
        price:'$ 33.09',
        total_sale:'20'
    },
    {
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQOOm41ZUaXMfJJqhMzmleb8OeXoOVWIltGfFOidhNtSQ&s",
        title:'Abstract 3D',
        discription:'Ipsum has been the industrys standard dummy',
        stock:'21 stock',
        price:'$ 33.09',
        total_sale:'20'
    },
    {
      image:
        "https://wallpapers.com/images/featured/3d-abstract-qi0b0ijfayv4d8ru.jpg",
        title:'Abstract 3D',
        discription:'Ipsum has been the industrys standard dummy',
        stock:'21 stock',
        price:'$ 33.09',
        total_sale:'20'
    },
    {
      image:
        "https://t3.ftcdn.net/jpg/02/60/33/54/360_F_260335426_HDv85LLqhTWofR8sFC7ZKVYtplNJrfBy.jpg",
        title:'Abstract 3D',
        discription:'Ipsum has been the industrys standard dummy',
        stock:'21 stock',
        price:'$ 33.09',
        total_sale:'20'
    },
  ];
  return (
    <div className="ProductSellTable">
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <Heading fontSize="20px">Product Sell</Heading>
        <div style={{ display: "flex" }}>
          <Input
            variant="outline"
            placeholder={`Search`}
            backgroundColor={"#fff"}
            width={"200px"}
            border="1px solid #edeff2"
            height={"36px"}
            marginRight="60px"
          />
          <div style={{ display: "flex", alignItems: "center" }}>
            <Text marginRight="10px" fontSize='14px' color="#6c7da6">Last 30 days</Text>
            <FontAwesomeIcon icon={faChevronDown} color="#6c7da6" />
          </div>
        </div>
      </div>
      <Table variant="simple" marginTop="20px">
        <Thead>
          <Tr>
            <Th width="650px" color="#c3c5cb">
              Product Name
            </Th>
            <Th color="#c3c5cb">Stock</Th>
            <Th color="#c3c5cb">Price</Th>
            <Th color="#c3c5cb">Total sales</Th>
          </Tr>
        </Thead>
        <Tbody>
            {tableData.map((e)=>{
                return <Tr>
                <Td>
                    <div style={{display:'flex', justifyContent:'space-beetween'}}>
                        <img src={e.image} alt="image" width='70px' style={{borderRadius:'10px', marginRight:'10px'}}/>
                        <div>
                        <Text fontSize={'16px'} fontWeight='700'>{e.title}</Text>
                        <Text fontSize={'14px'} color={'gray'}>{e.discription}</Text>
                        </div>
                    </div>
                </Td>
                <Td>{e.stock}</Td>
                <Td fontWeight={700}>{e.price}</Td>
                <Td>{e.total_sale}</Td>
              </Tr>
            })}
        </Tbody>
      </Table>
    </div>
  );
}
