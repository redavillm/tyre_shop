import styled from "styled-components";
import { DiskCard } from "./DiskCard/DiskCard";

const StyledTyresCatalog = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

export const DiskCatalog = ({ disksList }) => {
  return (
    <StyledTyresCatalog>
      {disksList.map((el) => (
        <DiskCard
          title={el.brand + " " + (el.model !== "-" ? el.model : "")}
          diskParams={el.diametr + " " + el.mount + " " + el.color}
          price={el.price}
          imgSrc="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fskad.ru%2Fupload%2Fresize_cache%2Fiblock%2Fd54%2F468_468_1%2Fd5414e57cdd1a4df21cd1750d59fec33.png&f=1&nofb=1&ipt=bea95df033c23e08859c3a3604fda55610b499ed0855ec721488c5ba1cf529d0&ipo=images"
        />
      ))}
    </StyledTyresCatalog>
  );
};
