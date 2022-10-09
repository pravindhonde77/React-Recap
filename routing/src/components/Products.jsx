import React,{useState,useEffect} from 'react'
import { Link } from 'react-router-dom';


const Products = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      fetch("http://localhost:8080/products")
        .then((r) => r.json())
        .then((d) => {
          setProducts(d)
        })

    }
    fetchProducts()


  }, []);



  return (
    <div>
      Products:{""}
      <div>
      {products.map((p)=>{
       return <div key={p.id}>
        <Link to={`/products/${p.id}`}> {p.name} </Link>
       
        </div>
      })}
      </div>
      </div>
  )
}

export default Products