import React from 'react';
import p1 from "../assets/python.jpg";
import p2 from "../assets/java-1.webp";
import p3 from "../assets/ai.webp";
import p4 from "../assets/ds.jpg";
const ProductrelatedImage = () => {

    const products = [
        {
          id: 1,
          name: 'Python',
          href: '#',
          imageSrc: p1,
          imageAlt: "Front of men's Basic Tee in black.",
          price: '$35',
          color: 'Black',
        },
        {
            id: 2,
            name: 'Java',
            href: '#',
            imageSrc: p2,
            imageAlt: "Front of men's Basic Tee in black.",
            price: '$35',
            color: 'Black',
          },
          {
            id: 3,
            name: 'Artificial Inteligence',
            href: '#',
            imageSrc: p3,
            imageAlt: "Front of men's Basic Tee in black.",
            price: '$35',
            color: 'Black',
          },
          {
            id: 4,
            name: 'Data Science',
            href: '#',
            imageSrc: p4,
            imageAlt: "Front of men's Basic Tee in black.",
            price: '$35',
            color: 'Black',
          },
        // More products...
      ]
    return (
        <div className="bg-white">
      <div className="mx-auto max-w-2xl px-4  sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <h2 className=" text-center text-3xl font-bold tracking-tight text-gray-900">Customers also purchased</h2>

        <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8 pt-5">
          {products.map((product) => (
            <div key={product.id} className="group relative">
              <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
                <img
                  alt={product.imageAlt}
                  src={product.imageSrc}
                  className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                />
              </div>
              <div className="mt-4 flex justify-between">
                <div>
                  <h3 className="text-sm text-gray-700">
                    <a href={product.href}>
                      <span aria-hidden="true" className="absolute inset-0" />
                      {product.name}
                    </a>
                  </h3>
                  <p className="mt-1 text-sm text-gray-500">{product.color}</p>
                </div>
                <p className="text-sm font-medium text-gray-900">{product.price}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
    );
};

export default ProductrelatedImage;