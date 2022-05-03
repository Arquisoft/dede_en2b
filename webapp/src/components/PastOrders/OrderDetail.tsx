import React, {useState, useEffect} from "react";
import {useParams} from "react-router-dom";
import {OrderType} from "../../shared/shareddtypes";
import CardMedia from "@mui/material/CardMedia";
import Card from "@mui/material/Card";
import Box from '@mui/material/Box';
import {getOrderById} from "../../api/api";
import Divider from "@mui/material/Divider";
import logoReceipt from "../../img/receipticon.png";
import OrderDetailProduct from "./OrderDetailProduct";
import { styled } from '@mui/material/styles';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import SettingsIcon from '@mui/icons-material/Settings';
import StepConnector, { stepConnectorClasses } from '@mui/material/StepConnector';
import { StepIconProps } from '@mui/material/StepIcon'
import "./OrderDetail.css";
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import HomeIcon from '@mui/icons-material/Home';

const ColorlibConnector = styled(StepConnector)(({ theme }) => ({
    [`&.${stepConnectorClasses.alternativeLabel}`]: {
        top: 22,
    },
    [`&.${stepConnectorClasses.active}`]: {
        [`& .${stepConnectorClasses.line}`]: {
            backgroundImage:
                'linear-gradient( 95deg,rgb(198,230,33) 0%,rgb(198,230,87) 50%,rgb(198,230,135) 100%)',
        },
    },
    [`&.${stepConnectorClasses.completed}`]: {
        [`& .${stepConnectorClasses.line}`]: {
            backgroundImage:
                'linear-gradient( 95deg,rgb(198,230,33) 0%,rgb(198,230,87) 50%,rgb(198,230,135) 100%)',
        },
    },
    [`& .${stepConnectorClasses.line}`]: {
        height: 3,
        border: 0,
        backgroundColor:
            theme.palette.mode === 'dark' ? theme.palette.grey[800] : '#eaeaf0',
        borderRadius: 1,
    },
}));

const ColorlibStepIconRoot = styled('div')<{
    ownerState: { completed?: boolean; active?: boolean };
}>(({ theme, ownerState }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? theme.palette.grey[700] : '#ccc',
    zIndex: 1,
    color: '#fff',
    width: 50,
    height: 50,
    display: 'flex',
    borderRadius: '50%',
    justifyContent: 'center',
    alignItems: 'center',
    ...(ownerState.active && {
        backgroundImage:
            'linear-gradient( 136deg, rgb(198,230,137) 0%, rgb(198,230,137) 50%, rgb(198,230,137) 100%)',
        boxShadow: '0 4px 10px 0 rgba(0,0,0,.25)',
    }),
    ...(ownerState.completed && {
        backgroundImage:
            'linear-gradient( 136deg, rgb(198,230,137) 0%, rgb(198,230,137) 50%, rgb(198,230,137) 100%)',
    }),
}));

function ColorlibStepIcon(props: StepIconProps) {
    const { active, completed, className } = props;

    const icons: { [index: string]: React.ReactElement } = {
        1: <SettingsIcon />,
        2: <LocalShippingIcon />,
        3: <HomeIcon />,
    };

    return (
        <ColorlibStepIconRoot ownerState={{ completed, active }} className={className}>
            {icons[String(props.icon)]}
        </ColorlibStepIconRoot>
    );
}

const steps = ['PROCESSING', 'SHIPPED', 'RECEIVED'];

const OrderDetail = () => {

    const {orderId} = useParams();
    const [order, setOrder] = useState<OrderType>();

    const getOrder = async () => {
        await setOrder(await getOrderById(orderId!));
    };

    useEffect(() => {
        getOrder();
    }, []);

    if (order) {
        let currentStep:number;

        if (order.status === steps[0]) {
            currentStep = 0;
        } else if (order.status === steps[1]) {
            currentStep = 1;
        } else {
            currentStep = 2;
        }

        return (
            <div className="orderDetailContainer">
                <div className="orderDetailContent">
                    <Stepper alternativeLabel activeStep={currentStep} connector={<ColorlibConnector/>}>
                        {steps.map((label) => (
                            <Step key={label}>
                                <StepLabel StepIconComponent={ColorlibStepIcon}>{label}</StepLabel>
                            </Step>
                        ))}
                    </Stepper>
                    <div>
                        <div>
                            <Divider textAlign="right">PRICES</Divider>
                                {order.orderProducts.map(item => (
                                    <OrderDetailProduct
                                        key={item.id}
                                        item={item}/>
                                ))}
                        </div>

                        <div className="data">
                            <Card variant="outlined" sx={{display: 'flex', maxWidth: 950}}>

                                <Box sx={{display: 'flex', flex: 1}}>
                                    <Box sx={{
                                        display: 'flex',
                                        flexDirection: 'column',
                                        justifyContent: 'center',
                                        flex: 3.5
                                    }}>
                                        <div className="item-detail">
                                            <div className="detail-info">
                                                <div className="item-name">
                                                    Shipping address: {order.address} | Postal Code: {order.postalCode}
                                                </div>
                                            </div>
                                        </div>
                                    </Box>
                                </Box>
                            </Card>
                        </div>

                        <div className="subTotal">
                            <Card variant="outlined" sx={{display: 'flex', maxWidth: 950}}>

                                <CardMedia
                                    component="img"
                                    sx={{width: 150, height: 50}}
                                    image={logoReceipt}
                                    alt="subTotal"/>

                                <Box sx={{display: 'flex', flex: 1}}>
                                    <Box sx={{
                                        display: 'flex',
                                        flexDirection: 'column',
                                        justifyContent: 'center',
                                        flex: 3.5
                                    }}>
                                        <div className="item-detail">
                                            <div className="detail-info">
                                                <div className="item-name">
                                                    Subtotal
                                                </div>
                                            </div>
                                        </div>
                                    </Box>

                                    <Divider orientation="vertical" flexItem/>

                                    <Box sx={{
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        pl: 1,
                                        pb: 1,
                                        flex: 1
                                    }}>
                                        <span>{order.totalPrice.toFixed(2)}€</span>
                                    </Box>

                                </Box>
                            </Card>
                        </div>
                    </div>
                </div>
            </div>
        );
    } else {
        return <p> </p>;
    }
};

export default OrderDetail;
