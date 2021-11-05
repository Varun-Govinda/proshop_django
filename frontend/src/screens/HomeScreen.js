import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Row, Col } from 'react-bootstrap'
import Product from '../components/Product'
import Loader from '../components/Loader'
import Message from '../components/Message'
import Paginate from '../components/Paginate'
import { listProducts } from '../actions/productActions'

const products = [
    {
      '_id': '1',
      'name': 'Monstera Deliciosa',
      'image': '/images/1.png',
      'description':'',
      'price': 8.99,
    },
    {
      '_id': '2',
      'name': 'Bird of Paradise',
      'image': '/images/2.png',
      'description':'',
      'price': 5.99,
    },
    {
      '_id': '3',
      'name': 'Fiddle Leaf Fig',
      'image': '/images/3.png',
      'description':
        'Characterized by versatile imaging specs, the Canon EOS 80D further clarifies itself using a pair of robust focusing systems and an intuitive design',
      'price': 9.99,
    },
    {
      '_id': '4',
      'name': 'ZZ Plant',
      'image': '/images/4.png',
      'description':
        'Characterized by versatile imaging specs, the Canon EOS 80D further clarifies itself using a pair of robust focusing systems and an intuitive design',
      'price': 9.99,
    }
  ]
function HomeScreen({ history }) {
    // const dispatch = useDispatch()
    // const productList = useSelector(state => state.productList)
    // const { error, loading, page, pages } = productList

    // let keyword = history.location.search

    // useEffect(() => {
    //     dispatch(listProducts(keyword))

    // }, [dispatch, keyword])

    return (
        <div>
            <h1>Products</h1>
            {
                    <div>
                        <Row>
                            {products.map(product => (
                                <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
                                    <Product product={product} />
                                </Col>
                            ))}
                        </Row>
                    </div>
            }
        </div>
    )
}

export default HomeScreen
