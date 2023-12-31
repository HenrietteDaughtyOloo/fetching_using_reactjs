import React, { useState } from "react";
import { Link } from "react-router-dom";

import './style.css';

const Form = () => {
  
  const [product, setProduct] = useState('');
  const [price, setPrice] = useState('');
  const [brand, setBrand] = useState('');
  const [description, setDescription] = useState('');
  const [image, setImage] = useState(null);
 
  const handleSubmit = async (d) => {
    d.preventDefault();
    
    
    

    const data = new FormData();
    data.append('product', product);
    data.append('price', price);
    data.append('brand', brand);
    data.append('description', description);
    data.append('image', image);

    try {
      const response = await fetch('https://dummyjson.com/products/add', {
        method: 'POST',
        body: data,
      });

      const result = await response.json();
    } catch (error) {
    }
  };

  const handleImageChange = (d) => {
    const selectedImage = d.target.files[0];
    setImage(selectedImage);
  };

  return (
    <div>
      <form className="form" onSubmit={handleSubmit}>
        <h1>Add</h1>
        <input
          placeholder="Name"
          type="text"
          onChange={(d) => setProduct(d.target.value)}
        />
        <br />
        <br />
        <input
          placeholder="Price"
          type="text"
          onChange={(d) => setPrice(d.target.value)}
        />
        <br />
        <br />
        <input
          placeholder="Brand"
          type="text"
          onChange={(d) => setBrand(d.target.value)}
        />
        <br />
        <br />
        <input
          placeholder="Other information"
          type="text"
          onChange={(d) => setDescription(d.target.value)}
        />
        <br />
        <br />
        <input type="file" onChange={handleImageChange} />
        <br />
        <br />
        <Link to={{ pathname: '/home', state: { image } }}>
          <button className="but" type="submit">Add</button>
        </Link>
      </form>setIsSubmitted(true);
      
    </div>
  );
};

export default Form;