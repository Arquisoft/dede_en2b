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

    const [step, setStep] = React.useState(0);
    const steps = ["Order information", "Payment", "Order completed"];

    const moveToNextStep = () => {
        setStep((previousStep) => previousStep + 1);
    };

    const moveToPreviousStep = () => {
        setStep((prevActiveStep) => prevActiveStep - 1);
    };


    const getStepContainer = (currentStep: number) => {
        switch (currentStep) {
            case 0:
                return (<Order/>);
            case 1:
                return (<h1>Payment processing</h1>);
            case 2:
                return (<CompleteOrder/>);
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
                            disabled={step === 0}
                            hidden={step === steps.length}
                            onClick={moveToPreviousStep}
                            variant="outlined"
                            > Back
                        </Button>

                        <Button
                            hidden={step === steps.length-1}
                            variant="contained"
                            onClick={moveToNextStep}
                            > {step === steps.length - 1 ? "Finish" : "Next"}
                        </Button>
                    </div>
                </Stack>
            </div>
        </div>
    );
}
