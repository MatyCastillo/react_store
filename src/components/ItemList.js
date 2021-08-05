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
                    description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit.Quod laudantium exercitationem assumenda iste veniam reiciendis consequatur suscipit",
                    stock: 9
                },
                {
                    id: "2",
                    name: "Product-2",
                    description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit.Quod laudantium exercitationem assumenda iste veniam reiciendis consequatur suscipit",
                    stock: 1
                },
                {
                    id: "3",
                    name: "Product-3",
                    description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit.Quod laudantium exercitationem assumenda iste veniam reiciendis consequatur suscipit",
                    stock: 2
                },
                {
                    id: "4",
                    name: "Product-4",
                    description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit.Quod laudantium exercitationem assumenda iste veniam reiciendis consequatur suscipit",
                    stock: 3
                },
                {
                    id: "5",
                    name: "Product-5",
                    description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit.Quod laudantium exercitationem assumenda iste veniam reiciendis consequatur suscipit",
                    stock: 1
                },
                {
                    id: "6",
                    name: "Product-6",
                    description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit.Quod laudantium exercitationem assumenda iste veniam reiciendis consequatur suscipit",
                    stock: 24
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
                {products.map(({ name, description, stock }) =>
                    (<Item name={name} description={description} stock={stock} />)
                )}

            </Grid>
        </>
    );
}

