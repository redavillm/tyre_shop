import { useDispatch } from "react-redux";
import { RESET_CART } from "../store/actions";

const apiUrl = process.env.REACT_APP_API_URL;

export const useSendOrder = () => {
  const dispatch = useDispatch();

  const sendOrder = async (data) => {
    try {
      const response = await fetch(`${apiUrl}/send-email`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error("Failed to send email. Please try again later.");
      }

      //   const contentType = response.headers.get("Content-Type");

      //   let result;
      //   if (contentType && contentType.includes("application/json")) {
      //     result = await response.json();
      //   } else {
      //     result = await response.text();
      //   }
      dispatch(RESET_CART);
    } catch (error) {
      console.error("Error sending email:", error.message);
    }
  };

  return sendOrder;
};
