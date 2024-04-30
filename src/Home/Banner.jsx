import React from 'react'
import { useState } from 'react';
import productData from "../products.json"
import SelectedCategory from '../components/SelectedCategory';

const title = (
  <h2> Search Your One From Thousand of Product</h2>
)
const desc = 'we have the largest collection of product'
const bannerList = [
  {
    iconName: "icofont-users-alt-4",
    text: "1.5 Million Customers",
  },
  {
    iconName: "icofont-notification",
    text: "More then 2000 Marchent",
  },
  {
    iconName: "icofont-globe",
    text: "Buy Anything Online",
  },
];
const Banner = () => {
  const [searchInput, setSearchInput] = useState("");
  const [filteredProducts, setFilteredProducts] = useState(productData);

  const handleSearch = (e) => {
    const searchTerm = e.target.value;
    setSearchInput(searchTerm);

    const filtered = productData.filter((product) => product.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    setFilteredProducts(filtered);
  };



  return (

    <div className='banner-section style-4'>
      <div className='container'>
        <div className='banner-content'>
          {title}
          <form >
            <SelectedCategory select={"all"}></SelectedCategory>
            <input type='text' name='search' id='search' placeholder=' Search Your Product' value={searchInput} onChange={handleSearch}></input>
            <button type='submit'>
              <i className='icofont-search'></i>
            </button>
          </form>
          <p>{desc}</p>
          <ul className='lab-ul'>
            {
              searchInput && filteredProducts.map((product, i) => <li key={i}>
                <a href={`/shop/${product.id}`}>{product.name}</a>
              </li>
              )}
          </ul>
        </div>
      </div>

    </div>
  )
}

export default Banner