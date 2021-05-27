import { useParams } from "react-router";


const ProductDetails = () => {

    const param = useParams();

    console.log("param is " + param.productName);

     return (
         <section>
             <h1>Product Details of {param.productName}</h1>
         </section>
     );
}

export default ProductDetails;