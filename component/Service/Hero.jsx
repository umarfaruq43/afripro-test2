import React from "react";
import { Box, Flex, Text } from "@chakra-ui/react";
import ScreenWidth from "../../Layout/ScreenWidth";

const Hero = () => {
    return (
        <Box>
            <Flex
                bgImage="/images/service/herobg.png"
                bgPosition="center"
                bgSize="cover"
                h={["428px", null, "512px"]}
                align="center"
                justify="center"
                color="brand.white"
                pt="20px"
            >
                <ScreenWidth>
                    <Box align="center">
                        <Text
                            fontWeight="700"
                            fontSize={["32px", null, "56px"]}
                            maxW={["100%", null, "700px"]}
                            textAlign="center"
                            textTransform="uppercase"
                        >
                            SOLUTIONS TAILORED TO YOUR INDUSTRY
                        </Text>
                    </Box>
                </ScreenWidth>
            </Flex>
        </Box>
    );
};

export default Hero;
