import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import {Button, CardActionArea, CardActions} from '@mui/material';

import {ProductType} from '../shared/shareddtypes';
import { useNavigate } from "react-router-dom";

type Props = {
    product: ProductType;
    handleAddToCart: (product:ProductType) => void;
}

const Product  = ({product, handleAddToCart}: Props) => {

    const navigate = useNavigate();

    return (
        <Card>
            <CardActionArea onClick={()=>navigate("/products/"+product.id)}>
                <CardMedia
                    component="img"
                    height="140"
                    image={product.image}
                    alt={product.name}
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        {product.name}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        {product.price}€
                    </Typography>
                </CardContent>
            </CardActionArea>
            <CardActions>
                <Button size="small" color="primary" onClick={() => handleAddToCart(product)}>
                    Add to cart
                </Button>
            </CardActions>
        </Card>
    )
}

export default Product;