import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";

interface Props {
  onSelectSortOrder: (value: string) => void;
  selectedOrder: string;
}

const SortSelector = ({ onSelectSortOrder, selectedOrder }: Props) => {
  const sortOrders = [
    { value: "", label: "Relevance" },
    { value: "name", label: "Name" },
    { value: "-added", label: "Date added" }, // Latest to old, Cz, latest value number > Old Value number
    { value: "-released", label: "Release date" },
    { value: "-metacritic", label: "Popularity" }, // go to bad, Cz, Good rating num > Bad rating num
    { value: "-rating", label: "Avarage rating" }, // go to bad
  ];

  const currentSortOrder = sortOrders.find(
    (order) => order.value === selectedOrder
  ); // it's an Obj that's  === to the selected order value

  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronDown></BsChevronDown>}>
        Order by: {currentSortOrder?.label || "Relevance"}
      </MenuButton>
      <MenuList>
        {sortOrders.map((order) => (
          <MenuItem
            onClick={() => onSelectSortOrder(order.value)}
            key={order.value}
            value={order.value}
          >
            {order.label}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};

export default SortSelector;
