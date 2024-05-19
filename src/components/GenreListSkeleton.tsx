import {
  HStack,
  List,
  ListItem,
  Skeleton,
  SkeletonCircle,
  SkeletonText,
  Text,
} from "@chakra-ui/react";

const GenreListSkeleton = () => {
  return (
    <List>
      <ListItem marginY="5px">
        {/* <Skeleton height="32px"></Skeleton> */}
        {/* <SkeletonCircle></SkeletonCircle> */}
        <SkeletonText
          skeletonHeight={6}
          noOfLines={1}
          marginBottom={3}
        ></SkeletonText>
      </ListItem>
    </List>
  );
};

export default GenreListSkeleton;
