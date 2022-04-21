import * as React from 'react';
import {styled} from '@mui/material/styles';
import Stack from '@mui/material/Stack';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Button from "@mui/material/Button";
import StepConnector, {stepConnectorClasses} from '@mui/material/StepConnector';
import {StepIconProps} from '@mui/material/StepIcon';
import PaymentIcon from '@mui/icons-material/Payment';
import CelebrationIcon from '@mui/icons-material/Celebration';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import "./Checkout.css";
import Order from "../Order/Order";
import CompleteOrder from "./CompleteOrder";
import PaypalButton from './PaypalCheckoutButton';
import {GetAddress, GetDeliveryCost, GetPostalCode} from "../../helper/calculateDeliveryCost";

const ColorlibConnector = styled(StepConnector)(({theme}) => ({
    [`&.${stepConnectorClasses.alternativeLabel}`]: {
        top: 22,
    },
    [`&.${stepConnectorClasses.active}`]: {
        [`& .${stepConnectorClasses.line}`]: {
            backgroundImage:
                'linear-gradient( 95deg,rgb(242,113,33) 0%,rgb(233,64,87) 50%,rgb(138,35,135) 100%)',
        },
    },
    [`&.${stepConnectorClasses.completed}`]: {
        [`& .${stepConnectorClasses.line}`]: {
            backgroundImage:
                'linear-gradient( 95deg,rgb(242,113,33) 0%,rgb(233,64,87) 50%,rgb(138,35,135) 100%)',
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
}>(({theme, ownerState}) => ({
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
            'linear-gradient( 136deg, rgb(242,113,33) 0%, rgb(233,64,87) 50%, rgb(138,35,135) 100%)',
        boxShadow: '0 4px 10px 0 rgba(0,0,0,.25)',
    }),
    ...(ownerState.completed && {
        backgroundImage:
            'linear-gradient( 136deg, rgb(242,113,33) 0%, rgb(233,64,87) 50%, rgb(138,35,135) 100%)',
    }),
}));

function ColorlibStepIcon(props: StepIconProps) {
    const {active, completed, className} = props;

    const icons: { [index: string]: React.ReactElement } = {
        1: <ShoppingCartIcon/>,
        2: <PaymentIcon/>,
        3: <CelebrationIcon/>,
    };

    return (
        <ColorlibStepIconRoot ownerState={{completed, active}} className={className}>
            {icons[String(props.icon)]}
        </ColorlibStepIconRoot>
    );
}

export default function Checkout() {

    const [address, setAddress] = React.useState("");
    const [postalCode, setPostalCode] = React.useState(0);

    const getPodAddress = async () => setAddress(await GetAddress());
    const getPodPostalCode = async () => setPostalCode(await GetPostalCode());

    getPodAddress();
    getPodPostalCode();

    const [step, setStep] = React.useState(0);
    const steps = ["Order information", "Payment", "Order completed"];
    const paymentStep = 1;

    const moveToNextStep = () => {
        setStep(step + 1);
    };

    const moveToPreviousStep = () => {
        setStep(step - 1);
    };

    // when payed, it automaticly moves to next Step. It is called here because button is disabled if in step 1
    const handlePayed = () => {
        moveToNextStep();
    }
    
    const getStepContainer = (currentStep: number) => {
        switch (currentStep) {
            case 0:
                return (<Order/>);
            case paymentStep:
                return (
                    <PaypalButton 
                        payed={handlePayed}
                    />);
            case 2:
                return (<CompleteOrder
                    address={address}
                    postalCode={postalCode}/>);
        }
    };

    return (
        <div className="checkoutContainer">
            <div className="checkoutContent">
                <Stack sx={{width: '100%'}} spacing={4}>
                    <Stepper alternativeLabel activeStep={step} connector={<ColorlibConnector/>}>
                        {steps.map((label) => (
                            <Step key={label}>
                                <StepLabel StepIconComponent={ColorlibStepIcon}>{label}</StepLabel>
                            </Step>
                        ))}
                    </Stepper>

                    {getStepContainer(step)}

                    <div className="checkoutButtons">
                        <Button
                            disabled={step===0 || step===steps.length-1}
                            onClick={moveToPreviousStep}
                            variant="outlined"
                            > Back
                        </Button>

                        <Button
                            //if in last step or in paymentStep, next button is disabled 
                            disabled={step === steps.length-1 || step === paymentStep}
                            variant="contained"
                            onClick={moveToNextStep}
                            > {step === steps.length - 1 ? "Finished" : "Next"}
                        </Button>
                    </div>
                </Stack>
            </div>
        </div>
    );
}
