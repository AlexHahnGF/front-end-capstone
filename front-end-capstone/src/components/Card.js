import React from "react";
import { Heading, HStack, Image, Text, VStack } from "@chakra-ui/react";
import { FaBicycle } from "react-icons/fa6";

export default function Card( {title, description, imageSrc, price} ) {
    return (
        <VStack
            overflow="hidden"
            backgroundColor="#EDEFEE"
            borderTopLeftRadius="16"
            borderTopRightRadius="16"
            justifyContent="space-around"
            alignContent="stretch"
            >
            <Image src={imageSrc} alt="meal_image"/>
            <VStack backgroundColor="#EDEFEE"
                spacing={4}
                gap={45}
                paddingTop={0}
                paddingLeft={16}
                paddingRight={16}
                color="black"
                alignItems="left"
                >
                <HStack justifyContent="space-between">
                    <Heading textAlign="left"
                    fontSize={16}
                    backgroundColor="#EDEFEE"
                    >
                        {title}
                    </Heading>
                    <Heading textAlign="right"
                    alignItems="right"
                    fontSize={16}
                    color="#EE9972"
                    backgroundColor="#EDEFEE"
                    >
                        {price}
                    </Heading>
                </HStack>
                <Text backgroundColor="#EDEFEE" fontSize="14">{description}</Text>
                <HStack backgroundColor="#EDEFEE" paddingBottom={24} >
                    <Text textAlign="left" as="b">Order a delivery</Text>
                    <FaBicycle
                        style={{
                            cursor: "pointer"
                        }}/>
                </HStack>
            </VStack>
        </VStack>
    );
}