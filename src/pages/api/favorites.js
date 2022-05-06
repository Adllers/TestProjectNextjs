const favorites = [];

export default function Favorites(req, res) {

    if (req.method === "GET") {

        res.status(200).json(favorites);

    }

    if (req.method === "POST") {

        const productFavorite = JSON.parse(req.body);

        const findProductFavorite = favorites.find(item => item.id == productFavorite.id)

        if (!findProductFavorite) {
            favorites.push(productFavorite);
        }
        
        res.status(200).send();
    }
}