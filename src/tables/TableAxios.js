import React from "react"
import { useState, useEffect } from "react";
import MUIDataTable from "mui-datatables";
import axios from "axios";

export const TableAxios = () => {
    //1 - conf hooks
    const [products, setProducts] = useState([])

    //2 - funct para mostrar os dadsos
    const endpoint = 'https://fakestoreapi.com/products';

    const getData = async () => {
        await axios.get(endpoint).then((response) =>{
            const data = response.data
            console.log(data);
            setProducts(data);
        })
    }

    useEffect( () =>{
        getData()
    }, [])

    //3 - definindo as collunas
    const columns = [
        {
            name: "id",
            label: "ID"
        },
        {
            name: "title",
            label: "Title"
        },
        {
            name: "price",
            label: "Price"
        },
        {
            name: "category",
            label: "Category"
        }
    ]
    //4- render datable
    return(
        <MUIDataTable
        title={"Show data with Axios"}
        data={products}
        columns={columns}
        />
    )
}