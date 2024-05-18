import {
  Card,
  CardBody,
  Skeleton,
  SkeletonCircle,
  SkeletonText,
} from "@chakra-ui/react";
import React from "react";

const GameCardSkeleton = () => {
  return (
    <Card width="300px" borderRadius={10} overflow="hidden">
      {/* <Skeleton> is a placeholder for image with arbitrary/random height*/}
      <Skeleton height="200px"></Skeleton>
      <CardBody>
        <SkeletonText></SkeletonText>
        <SkeletonCircle></SkeletonCircle>
      </CardBody>
    </Card>
  );
};

export default GameCardSkeleton;
