import React, {FC} from "react";



export interface IProductProps {

        "id": number,
        "title": string,
        "description":string,
        "category": string,
        "price": number,
        "discountPercentage": number,
        "rating":number,
        "stock": number,
        "tags": string[],

}

export type IProductsTypeProps = IProductProps & {children? :React.ReactNode};
const Product :FC<IProductsTypeProps> = ({
        id,
        title,
    description,
    category,
    price,
    discountPercentage,
    rating,
    stock,
    tags

})=>{
        return(

            <div>
                    <h3>
                            {id} {title} {description}
                    </h3>

                <h4>
                    <p>Category : {category}</p>
                    <p>Price : {price}</p>
                           <p>Discount : {discountPercentage}</p>
                          <p>rating:{rating}</p>
                          Stock:{stock}
                    </h4>

                    <ul>
                            {
                                    tags?.map((tag,index)=> <li key={index}> {tag}</li>)
                                            }

                    </ul>
            </div>
        )
};
export default Product
