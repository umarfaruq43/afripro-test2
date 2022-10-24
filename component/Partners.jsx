import { Box, Flex, Image, SimpleGrid, Text } from "@chakra-ui/react";
import React from "react";
import ScreenWidth from "../Layout/ScreenWidth";

const Partners = () => {
    return (
        <Box
            py="24"
            bgImage="images/partnersIllustion.svg"
            bgRepeat="no-repeat"
            bgPosition="bottom left"
        >
            <ScreenWidth>
                <Box maxW="760" textAlign="center" mx="auto">
                    <Text
                        fontWeight="500"
                        fontSize={["sm", "md", "lg"]}
                        color="brand.orange"
                    >
                        Our Partners
                    </Text>
                    <Text
                        mt="2"
                        fontWeight="700"
                        fontSize={["2xl", null, "4xl"]}
                    >
                        Trusted by leading organizations
                    </Text>
                    <Text
                        mt="2"
                        fontWeight="400"
                        fontSize={["md", null, "lg"]}
                        color="brand.light"
                    >
                        {/* Afri-Pro Services Cyber holds, operates to, and delivers
                        its cybersecurity services in accordance with the
                        following certifications and accreditations */}
                        Our diverse client portfolio ranges from SMEs to
                        multinationals across various industries, government to
                        non-Governmental across different geographical locations
                        demonstrate our footprints, and trust our clients have
                        in us to help with improving their security maturity. We
                        are known for the values we deliver for our client, and
                        that’s why our clients trust us with the protection of
                        their business. Some of our clients include: Vodacom,
                        Finca, Exim Bank, NBC, NAPSA, Stanbic, Cloudware
                        Technologies, TCRA, KoloPay
                    </Text>
                </Box>
                <SimpleGrid
                    minChildWidth={["70px", null, "200px"]}
                    p="10"
                    mt={["5", "10"]}
                    gap={["32px", null, "75px"]}
                >
                    {logos.map((logo, i) => {
                        return (
                            <Image
                                key={i}
                                src={logo.images}
                                alt=""
                                w="100%"
                                h={["42px", "80px"]}
                            />
                        );
                    })}
                </SimpleGrid>
            </ScreenWidth>
        </Box>
    );
};

export default Partners;

const logos = [
    { href: "#", images: "/images/partners/vodafone.svg" },
    { href: "#", images: "/images/partners/finca.svg" },
    { href: "#", images: "/images/partners/exim.svg" },
    { href: "#", images: "/images/partners/nmb.svg" },
    { href: "#", images: "/images/partners/pension.svg" },
    { href: "#", images: "/images/partners/stambicBank.svg" },
    { href: "#", images: "/images/partners/cwt.svg" },
    { href: "#", images: "/images/partners/tcra.svg" },
];
