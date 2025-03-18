import {FC, useEffect, useState} from "react";
import Product, {IProductProps} from "./Product";


const Products:FC = () => {

const [products, setProducts] = useState <IProductProps[]>([]);
useEffect(() => {
    fetch('https://dummyjson.com/products')
        .then(res => res.json())
        .then(({products}) => {
        setProducts(products);
    });
},[]);

return(
<div>{
    products.map((value:IProductProps)=>(
        <Product key = {value.id}
                 id = {value.id}
                 title = {value.title}
                 description = {value.description}
                 category = {value.category}
                 price = {value.price}
                 discountPercentage = {value.discountPercentage}
                 rating = {value.rating}
                 stock = {value.stock}
                 tags = {value.tags}


        />))


}
</div>
);

};


export default Products;