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
            const data = [
                {
                    id: "1",
                    title: "Product-1",
                    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptas, esse quaerat molestias rem optio deserunt ab, reprehenderit quod in incidunt laudantium. Praesentium vel aspernatur suscipit enim et porro dolor deleniti.',
                    price: "112",
                    stock: 9,
                    pictureUrl: 'no-image.png'
                },
                {
                    id: "2",
                    title: "Product-2",
                    description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptas, esse quaerat molestias rem optio deserunt ab, reprehenderit quod in incidunt laudantium. Praesentium vel aspernatur suscipit enim et porro dolor deleniti.",
                    price: "15",
                    stock: 1,
                    pictureUrl: 'no-image.png',
                },
                {
                    id: "3",
                    title: "Product-3",
                    description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptas, esse quaerat molestias rem optio deserunt ab, reprehenderit quod in incidunt laudantium. Praesentium vel aspernatur suscipit enim et porro dolor deleniti.",
                    price: "3",
                    stock: 2,
                    pictureUrl: 'no-image.png',
                },
                {
                    id: "4",
                    title: "Product-4",
                    description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptas, esse quaerat molestias rem optio deserunt ab, reprehenderit quod in incidunt laudantium. Praesentium vel aspernatur suscipit enim et porro dolor deleniti.",
                    price: "7",
                    stock: 3,
                    pictureUrl: 'no-image.png',
                },
                {
                    id: "5",
                    title: "Product-5",
                    description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptas, esse quaerat molestias rem optio deserunt ab, reprehenderit quod in incidunt laudantium. Praesentium vel aspernatur suscipit enim et porro dolor deleniti.",
                    price: "44",
                    stock: 1,
                    pictureUrl: 'no-image.png',
                },
                {
                    id: "6",
                    title: "Product-6",
                    description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptas, esse quaerat molestias rem optio deserunt ab, reprehenderit quod in incidunt laudantium. Praesentium vel aspernatur suscipit enim et porro dolor deleniti.",
                    price: "9",
                    stock: 24,
                    pictureUrl: 'no-image.png',
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
                {products.map(({ title, description, stock, pictureUrl, price, id }) =>
                    (<Item title={title} description={description} stock={stock} pictureUrl={pictureUrl} price={price} id={id} />)
                )}

            </Grid>
        </>
    );
}

