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
}

async function Home() {
  const data = await getData();
  console.log(data);
  
  return (
    <div className="grid lg:grid-cols-2 sm:grid-cols-1 mt-10 lg:mx-36">
      {data.products.map((product: Product) => (
        <div className="card  border sm:w-[100px] lg:w-[500px] rounded-lg  mb-5" key={product.id}>
         <div className="card-body">
         <h2 className="text-xl"> Title: <span>{product.title}</span></h2>
          <p className="text-xl"> Price: <span> {product.price}$</span></p>
         </div>
         <div className="card-actions">
         <Link className="link link-hover font-medium pb-4 ml-8" href={`/product/${product.id}`}>read more</Link>

         </div>
        </div>
      ))}
    </div>
  );
}

export default Home;
