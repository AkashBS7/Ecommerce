import React from 'react'
import { Product, FooterBanner, HeroBanner } from '../components'

const Home = () => {
  return (
    <>
      <HeroBanner />
      <div className='products-heading'>
        <h2>Best Selling Products</h2>
        <p>Speakers of many variations</p>
      </div>
      <div className='products-container'>
          {['Produtc1','product2','product3','product4','product5'].map((el) => el)}
      </div>
      <FooterBanner />
    </>
  )
}

export default Home