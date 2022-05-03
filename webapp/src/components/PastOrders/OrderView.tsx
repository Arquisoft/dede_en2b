import Card from "@mui/material/Card";
import {CardActionArea} from "@mui/material";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import {OrderType} from "../../shared/shareddtypes";
import { Link } from "react-router-dom";

type Props = {
    order: OrderType;
}

const OrderView = ({order}: Props) => {
    return (
        <Card sx={{ maxWidth: 600 }}>
            <CardActionArea component={Link} to={"/orders/" + order.id}>

                { (order.orderProducts[0] === undefined) ? <p> The image could not be loaded </p>:
                    <CardMedia
                        component="img"
                        height="140"
                        image={order.orderProducts[0].product.image}
                        alt={"Product contained in the order"}
                    />
                }
                <CardContent>
                    <Typography gutterBottom variant="h6" component="div">
                        {order.status}
                    </Typography>
                    <div>
                        {order.date} <br/>
                        Total: {order.totalPrice.toFixed(2)}€ <br/>
                    </div>
                </CardContent>
            </CardActionArea>
        </Card>
    )
}
export default OrderView;