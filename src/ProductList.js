import React from 'react'

export default function ProductList({ product }) {
    return (
        <div>
            {product.map(p => (
                <div key={p}>{p}</div>
            ))}
        </div>
    )
}