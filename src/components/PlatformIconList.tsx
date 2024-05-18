import {
  FaWindows,
  FaPlaystation,
  FaXbox,
  FaApple,
  FaLinux,
  FaAndroid,
} from "react-icons/fa";
import { MdPhoneIphone } from "react-icons/md";
import { SiNintendo } from "react-icons/si";
import { BsGlobe } from "react-icons/bs";
import { Platform } from "../hooks/useGames";
import { HStack, Icon } from "@chakra-ui/react";
import { IconType } from "react-icons";

interface Props {
  platforms: Platform[];
}

const PlatformIconList = ({ platforms }: Props) => {
  //here giving the object properties (index signature) the general type
  //plus each key is mapped to the value of type IconType from react-icons, this is in react icons library.
  const iconMap: { [key: string]: IconType } = {
    pc: FaWindows,
    playstation: FaPlaystation,
    android: FaAndroid,
    xbox: FaXbox,
    nintendo: SiNintendo,
    mac: FaApple,
    linux: FaLinux,
    ios: MdPhoneIphone,
    web: BsGlobe,
  };

  return (
    <div>
      {/* in chakra margin={1} here, 1 = 4px, other wise we can use margin='4px' */}
      <HStack marginY={1}>
        {platforms.map((platfrom) => (
          // <Text key={platfrom.id}>{platfrom.name}</Text>
          // <Icon as={FaXbox}></Icon>
          <Icon as={iconMap[platfrom.slug]} color="gray.500"></Icon>
        ))}
      </HStack>
    </div>
  );
};

export default PlatformIconList;
