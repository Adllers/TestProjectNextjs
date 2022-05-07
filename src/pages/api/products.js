const products = [
    { id: 1, name: 'Camisa', imageURL: '/images/camisa.png', listPrice: 100, salePrice: 70, favorite: false },
    { id: 2, name: 'Mochila', imageURL: '/images/mochila.png', listPrice: 300, salePrice: 210, favorite: false },
    { id: 3, name: 'Tênis', imageURL: '/images/tenis.png', listPrice: 500, salePrice: 350, favorite: false },
];


export default function Products(req, res) {

    if (req.method === "GET") {

        res.status(200).json(products);

    }

    if (req.method === 'POST') {

        const product = JSON.parse(req.body);
        
        produtos.push(product);

        res.status(200).send()
    }

    if (req.method === 'PUT') {

        const product = JSON.parse(req.body);

        const indexProduct = products.findIndex(item => item.id == product.id);
      
        products[indexProduct] = product;

        res.status(200).json(products);
           
    }
}