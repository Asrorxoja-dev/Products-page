import Link from "next/link";

const getData = async (id: string) => {
  const res = await fetch('https://dummyjson.com/products/' + id);
  const data = await res.json();
  return data;
}

interface Product {
  id: number;
  title: string;
  price: number;
  description:string;
  brand:string;
  category:string;
  rating:number;
  warrantyInformation:string;
}

async function Product({ params: { id } }: { params: { id: string } }) {
  const data: Product = await getData(id);

  return (
    <div>
      <div className="card  mt-20 lg:mx-36">
        <Link className="link link-primary text-xl mb-3" href="/">Back</Link>
       <div className="card-body  border sm:w-[100px] lg:w-[500px] rounded-lg  mb-5 mx-auto">
       <h2 className="font-semibold text-xl">Title: {data.title}</h2>
        <h3>Brand: {data.brand}</h3>
        <h3>Category: {data.category}</h3>
        <h4>Rating: {data.rating}</h4>
        <p>Description: <span className="text-sm">{data.description}</span></p>
        <p>Warranty: {data.warrantyInformation}</p>
        <p>Price: {data.price}$</p>
       </div>
      </div>
    </div>
  );
}

export default Product;
