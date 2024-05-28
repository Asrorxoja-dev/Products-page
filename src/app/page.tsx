import Link from "next/link";

const getData = async () => {
  const res = await fetch('https://dummyjson.com/products');
  const data = await res.json();
  return data;
}

interface Product {
  id: number;
  title: string;
  price: number;
  images:string;
  
}

async function Home() {
  const data = await getData();
  console.log(data);
  
  return (
    <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 mt-10 lg:mx-36">
      {data.products.map((product: Product) => (

<div className="card h-[400px] mb-5 w-80 bg-base-100 shadow-xl">
<figure><img className=":md-h-auto w-full object-cover " width="400px" height="300px" src={product.images[0]} alt="Shoes" /></figure>
<div className="card-body">
  <h2 className="card-title">{product.title}</h2>
  <p>{product.price}$</p>

  <div className="card-actions justify-end">
    <button className="btn btn-primary">
     <Link  href={`/product/${product.id}`}>read more</Link>

    </button>
  </div>
</div>
</div>
      ))}
    </div>
  );
}

export default Home;
