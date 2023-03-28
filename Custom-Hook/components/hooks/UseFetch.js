import React, { useEffect, useState } from "react";

export default function UseFetch(data) {
  const [products, setProducts] = useState(data);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  useEffect(() => {
    fetch(`https://api.storerestapi.com/products`)
      .then((res) => res.json())
      .then((result) => {
        setProducts(result.data);
        setLoading(false);
        setError(null);
      })
      .catch((error) => setError(error));
  }, []);

  return [products, setProducts, loading, error];
}
