import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import'./style.css'

const ProductDetails = () => {
  const { productId } = useParams();
  const  [product, setProduct] = useState(null);
  useEffect(() => {
    const details = async () => {
      try {
        const response = await fetch(`https://dummyjson.com/products/${productId}`);
        const info = await response.json();
        setProduct(info);
      }
      catch (error) {
      }
    };
    details();
  }, [productId]);
  if (!product) {
    return <p>Loading....</p>;
  }

  return (
    <div>
      <h1 className='header'>Product Details</h1>
      <div className='singleProduct'>
        <img src={product.thumbnail} alt={product.title} />
        <h3>{product.title}</h3>
        <p>{product.description}</p>
        <p>Brand: {product.brand}</p>
        <p> Price: {product.price}</p>
        <p> Ratings: {product.rating}</p>
        <p>Discount: {product.discountPercentage}</p>
        {/* <Link to={`/form`} ><button  className="button-add">Add Product</button></Link>   */}

      </div>
    </div>
  );
};
export default ProductDetails;






