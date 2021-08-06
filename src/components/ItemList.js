import { Grid } from '@material-ui/core';
import Item from './Item';
import LoadingCircle from './LoadingCircle'

const { useEffect, useState } = require("react");

export default function ItemList() {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        new Promise((resolve, reject) => {
            setLoading(true);
            ///
            const data = [
                {
                    id: "1",
                    name: "Product-1",
                    description: "Lorem ipsum dolor sit.",
                    price: "112",
                    stock: 9,
                    image: 'https://upload.wikimedia.org/wikipedia/commons/6/65/No-Image-Placeholder.svg'
                },
                {
                    id: "2",
                    name: "Product-2",
                    description: "Lorem ipsum dolor sit.",
                    price: "15",
                    stock: 1,
                    image: 'https://upload.wikimedia.org/wikipedia/commons/6/65/No-Image-Placeholder.svg',
                },
                {
                    id: "3",
                    name: "Product-3",
                    description: "Lorem ipsum dolor sit.",
                    price: "3",
                    stock: 2,
                    image: 'https://upload.wikimedia.org/wikipedia/commons/6/65/No-Image-Placeholder.svg',
                },
                {
                    id: "4",
                    name: "Product-4",
                    description: "Lorem ipsum dolor sit.",
                    price: "7",
                    stock: 3,
                    image: 'https://upload.wikimedia.org/wikipedia/commons/6/65/No-Image-Placeholder.svg',
                },
                {
                    id: "5",
                    name: "Product-5",
                    description: "Lorem ipsum dolor sit.",
                    price: "44",
                    stock: 1,
                    image: 'https://upload.wikimedia.org/wikipedia/commons/6/65/No-Image-Placeholder.svg',
                },
                {
                    id: "6",
                    name: "Product-6",
                    description: "Lorem ipsum dolor sit.",
                    price: "9",
                    stock: 24,
                    image: 'https://upload.wikimedia.org/wikipedia/commons/6/65/No-Image-Placeholder.svg',
                },
            ];
            setTimeout(() => resolve(data), 2000);
        })
            .then((dataResolve) => {
                setProducts(dataResolve);
                setLoading(false);
            })
            .catch((error) => {
                console.log("err", error);
            });
    }, []);

    if (loading) {
        return (
            <LoadingCircle />
        );
    }

    return (
        <>
            <Grid container spacing={3}>
                {products.map(({ name, description, stock, image, price }) =>
                    (<Item name={name} description={description} stock={stock} img={image} price={price} />)
                )}

            </Grid>
        </>
    );
}

