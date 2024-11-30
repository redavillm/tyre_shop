import { useEffect, useState } from "react";
import styled from "styled-components";

const StyledToast = styled.div`
  font-size: 16px;
  position: fixed;
  bottom: 20px;
  right: 20px;
  background-color: #333;
  color: #fff;
  padding: 10px 20px;
  border-radius: 5px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  opacity: ${(props) => (props.visible ? 1 : 0)};
  transform: translateY(${(props) => (props.visible ? "0" : "20px")});
  transition: all 0.3s ease-in-out;
  z-index: 1000;
`;

export const Toast = ({ message, duration = 3000, onClose }) => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setVisible(true);

    const timer = setTimeout(() => {
      setVisible(false);
      if (onClose) onClose();
    }, duration);

    return () => clearTimeout(timer);
  }, [onClose, duration]);
  return <StyledToast visible={visible}>{message}</StyledToast>;
};
