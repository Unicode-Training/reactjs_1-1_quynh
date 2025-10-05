// import { useEffect, useState } from "react";
// import { instance } from "../libs/axios";
// import type { AxiosError } from "axios";

import { useFetch } from "../hooks/useFetch";

// import { isProduction } from "../utils/utils";
type Product = {
  id: number;
  title: string;
  thumbnail: string;
  price: number;
};
export default function Products() {
  // const [products, setProducts] = useState<Product[]>([]);
  // const [isLoading, setLoading] = useState<boolean>(true);
  // const [error, setError] = useState<null | string>(null);
  // useEffect(() => {
  //   const getProducts = async () => {
  //     try {
  //       const response = await instance.get(`/products`);
  //       if (response?.data) {
  //         setProducts(response?.data?.products);
  //       }
  //     } catch (error) {
  //       const err = error as AxiosError;
  //       setError(isProduction() ? "Đã có lỗi xảy ra" : err.message);
  //     } finally {
  //       setLoading(false);
  //     }
  //   };
  //   getProducts();
  // }, []);
  const { data, isLoading, error } = useFetch<Product[]>(`/products`);
  const products = (data as unknown as { products: Product[] }).products;

  // const { data: posts } = useFetch(`/posts`);
  // console.log(posts);

  if (error) {
    return <h2>{error}</h2>;
  }
  return (
    <div>
      <h1>Products</h1>
      {isLoading ? (
        <h2>Loading...</h2>
      ) : (
        products.map((product: Product) => (
          <div key={product.id}>
            <img src={product.thumbnail} />
            <h3>{product.title}</h3>
            <h4>{product.price}</h4>
          </div>
        ))
      )}
    </div>
  );
}
/*
- Viết hàm make request API --> Lựa chọn nơi gọi (Side Effect, event handler,...)
- Khi nào API trả về dữ liệu --> setState
- Render State
*/
