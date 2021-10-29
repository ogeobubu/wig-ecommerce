import styled from "styled-components";
import { useFlutterwave, FlutterWaveButton } from "react-flutterwave";
// import { FlutterWaveButton, closePaymentModal } from "flutterwave-react-v3";

const SummaryButton = styled.button`
  width: 100%;
  padding: 10px;
  background-color: black;
  border: none;
  color: white;
  cursor: pointer;
  font-weight: 600;
`;

// export default function FlutterWave({ cart }) {
//   const config = {
//     public_key: "FLWPUBK_TEST-0a92eb635b3b091c613536a568f89672-X",
//     tx_ref: Date.now(),
//     amount: 100,
//     currency: "NGN",
//     payment_options: "card,mobilemoney,ussd",
//     customer: {
//       email: "user@gmail.com",
//       phonenumber: "123456789",
//       name: "Oge Obubu",
//     },
//     customizations: {
//       title: "My Store",
//       description: "Payment for items in cart",
//       logo: "https://st2.depositphotos.com/4403291/7418/v/450/depositphotos_74189661-stock-illustration-online-shop-log.jpg",
//     },
//   };

//   const fwConfig = {
//     ...config,
//     text: "Pay with Flutterwave!",
//     callback: (response) => {
//       console.log(response);
//       closePaymentModal(); // this will close the modal programmatically
//     },
//     onClose: () => {},
//   };

//   return <FlutterWaveButton {...fwConfig} />;
// }

const FlutterWave = ({ cart }) => {
  const KEY = process.env.REACT_APP_FLUTTERWAVE;

  console.log(KEY);

  const config = {
    public_key: "FLWPUBK_TEST-0a92eb635b3b091c613536a568f89672-X",
    tx_ref: Date.now(),
    amount: cart.total,
    currency: "NGN",
    payment_options: "card",
    customer: {
      email: "user@gmail.com",
      phonenumber: "08102909304",
      name: "yemi desola",
    },
    customizations: {
      title: "My Store",
      description: "Payment for items in cart",
      logo: "https://assets.piedpiper.com/logo.png",
    },
  };

  const handleFlutterPayment = useFlutterwave(config);

  const fwConfig = {
    ...config,
    text: "Pay with Flutterwave!",
    callback: (response) => {
      console.log(response);
    },
    onClose: () => {},
  };

  return (
    <>
      <SummaryButton
        onClick={() => {
          handleFlutterPayment({
            callback: (response) => {
              console.log(response);
            },
            onClose: () => {
              alert("Are you sure you want to close this?");
            },
          });
        }}
      >
        Checkout with Flutterwave
      </SummaryButton>
    </>
  );
};

export default FlutterWave;
