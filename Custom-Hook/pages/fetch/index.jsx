import UseFetch from "@/components/hooks/UseFetch";
import React from "react";

export default function Index() {
  const [products, setProducts, loading, error] = UseFetch(null);

  return (
    <div>
      {loading && !error ? (
        <h3>loading . . . </h3>
      ) : (
        <div>
          {products.map((item) => (
            <p key={item.id}>{item.title}</p>
          ))}
        </div>
      )}
    </div>
  );
}
