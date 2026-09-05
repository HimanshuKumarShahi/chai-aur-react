import React, { useState, useEffect } from 'react';

export default function PremiumProductGallery() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch(
          'https://api.freeapi.app/api/v1/public/randomproducts?page=1&limit=10&inc=category%2Cprice%2Cthumbnail%2Cimages%2Ctitle%2Cid&query=mens-watches'
        );
        if (!response.ok) throw new Error('Failed to fetch products');
        const result = await response.json();
        
        
        const fetchedProducts = result?.data?.data || [];
        setProducts(fetchedProducts);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  if (error) {
    return (
      <div className="flex justify-center items-center min-h-[400px]">
        <div className="bg-red-50 text-red-500 px-6 py-4 rounded-2xl border border-red-100 font-medium">
          {error}
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-50 p-4 sm:p-8 font-sans">
      <div className="max-w-7xl mx-auto">
        
        <div className="mb-10 text-center sm:text-left">
          <h1 className="text-4xl font-extrabold text-slate-900 tracking-tight mb-2">
            Curated Collection
          </h1>
          <p className="text-slate-500 text-lg">
            Discover premium men's timepieces.
          </p>
        </div>

        <div className="columns-1 sm:columns-2 md:columns-3 lg:columns-4 gap-6">
          
          {loading ? (
        
            [...Array(8)].map((_, i) => (
              <div key={i} className="break-inside-avoid mb-6 bg-white rounded-3xl p-2 shadow-sm border border-slate-100 animate-pulse">
                <div className={`bg-slate-200 rounded-2xl w-full ${i % 2 === 0 ? 'h-64' : 'h-80'} mb-4`}></div>
                <div className="px-3 pb-3 space-y-3">
                  <div className="h-5 bg-slate-200 rounded-md w-3/4"></div>
                  <div className="h-4 bg-slate-200 rounded-md w-1/2"></div>
                </div>
              </div>
            ))
          ) : (
            
            products.map((product) => (
              <div 
                key={product.id} 
                className="break-inside-avoid mb-6 bg-white rounded-3xl shadow-sm hover:shadow-2xl hover:shadow-slate-200/50 transition-all duration-500 group cursor-pointer border border-slate-100 overflow-hidden"
              >
            
                <div className="relative overflow-hidden bg-slate-100">
                  <img
                    src={product.images?.[0] || product.thumbnail}
                    alt={product.title}
                    className="w-full h-auto object-cover transform group-hover:scale-105 transition-transform duration-700 ease-out"
                    loading="lazy"
                  />
                  
                  <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-4 py-1.5 rounded-full text-sm font-black text-slate-900 tracking-wide shadow-sm">
                    ${product.price}
                  </div>

                 
                  <div className="absolute inset-0 bg-slate-900/0 group-hover:bg-slate-900/10 transition-colors duration-500 flex items-end justify-center pb-6 opacity-0 group-hover:opacity-100">
                    <button className="bg-slate-900 text-white font-semibold px-6 py-2.5 rounded-full shadow-lg transform translate-y-4 group-hover:translate-y-0 transition-all duration-500 active:scale-95">
                      View Details
                    </button>
                  </div>
                </div>

                
                <div className="p-5">
                  <h3 className="font-bold text-slate-900 text-lg leading-tight mb-1 line-clamp-2">
                    {product.title}
                  </h3>
                  <p className="text-slate-500 text-sm font-medium capitalize">
                    {product.category?.replace('-', ' ')}
                  </p>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
}