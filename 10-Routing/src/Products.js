import { Link } from "react-router-dom";


const Products = () => {
    return <section>
        <ha>This is Products page</ha>
        <ul>
            <li><Link to="/products/Product1"> Product1 </Link> </li>
            <li><Link to="/products/Product2"> Product2 </Link> </li>
            <li><Link to="/products/Product3"> Product3 </Link> </li>
        </ul>
        </section>
}

export default Products;