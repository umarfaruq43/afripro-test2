import {
    Box,
    Flex,
    Button,
    Icon,
    Text,
    Image,
    Link,
    SimpleGrid,
} from "@chakra-ui/react";
import React, { useState } from "react";
import {
    BsArrowRight,
    BsFillArrowDownSquareFill,
    BsFillArrowRightSquareFill,
} from "react-icons/bs";
import { FaArrowRight } from "react-icons/fa";
import ScreenWidth from "../Layout/ScreenWidth";

const Service = () => {
    const [active, setActive] = useState(1);
    const [activeContent, setActiveContent] = useState(serviceDetails_1);
    const handleActive = (activeNumber) => {
        setActive(activeNumber);
    };
    return (
        <Box
            pt="24"
            mb=""
            bgImage="/images/serviceIlustration.svg"
            bgSize={["100px", null, "200px"]}
            bgRepeat="no-repeat"
            style={{ backgroundPosition: "top Right" }}
        >
            <ScreenWidth>
                <Box>
                    <Text
                        fontSize={["sm", null, "xl"]}
                        color="brand.orange"
                        textAlign="center"
                    >
                        Our services
                    </Text>
                    <Text
                        mt="1"
                        fontWeight="700"
                        fontSize={["24px", null, "4xl"]}
                        textAlign="center"
                    >
                        Providing best Cybersecurity{" "}
                        <Text
                            as="span"
                            color="brand.orange"
                            fontSize={["24px", null, "4xl"]}
                        >
                            {" "}
                            solutions
                        </Text>
                    </Text>
                </Box>
                <Box pt="10">
                    <ServiceNav active={active} handleActive={handleActive} />
                    <ServiceContent
                        active={active}
                        activeContent={activeContent}
                        setActiveContent={setActiveContent}
                    />
                </Box>
            </ScreenWidth>
        </Box>
    );
};

export default Service;

// ******** Service Content Begins******************

const ServiceNav = ({ active, handleActive }) => {
    return (
        <Box>
            <SimpleGrid minChildWidth={["300px"]}>
                <Button
                    // minW="350px"
                    mb="-3px"
                    w="100%"
                    h="54px"
                    py="16px"
                    px={["20px", null, "36px"]}
                    textTransform="uppercase"
                    bgColor="transparent"
                    _hover={{ bgColor: "none" }}
                    _focus={{ bgColor: "transparent" }}
                    borderBottom={active == 1 ? "2px" : "1px"}
                    borderColor={"brand.orange"}
                    fontWeight="500"
                    borderRadius="0"
                    onClick={() => handleActive(1)}
                >
                    {active == 1 ? (
                        <Icon
                            as={BsFillArrowDownSquareFill}
                            width="22px"
                            height="22px"
                            mr="8px"
                            color="brand.orange"
                        />
                    ) : null}
                    <Text
                        color={
                            active == 1 ? "brand.orange" : "brand.verylightGray"
                        }
                    >
                        Offensive Security Services
                    </Text>
                </Button>

                <Button
                    // minW="350px"
                    mb="-3px"
                    w="100%"
                    h="54px"
                    py="16px"
                    px={["20px", null, "36px"]}
                    textTransform="uppercase"
                    bgColor="transparent"
                    _hover={{ bgColor: "none" }}
                    _focus={{ bgColor: "transparent" }}
                    borderBottom={active == 2 ? "2px" : "1px"}
                    borderColor={"brand.orange"}
                    fontWeight="500"
                    borderRadius="0"
                    onClick={() => handleActive(2)}
                >
                    {active == 2 ? (
                        <Icon
                            as={BsFillArrowDownSquareFill}
                            width="22px"
                            height="22px"
                            mr="8px"
                            color="brand.orange"
                        />
                    ) : null}
                    <Text
                        color={
                            active == 2 ? "brand.orange" : "brand.verylightGray"
                        }
                    >
                        Security Detection & Response
                    </Text>
                </Button>

                <Button
                    // minW="350px"
                    mb="-3px"
                    w="100%"
                    h="54px"
                    py="16px"
                    px={["20px", null, "36px"]}
                    textTransform="uppercase"
                    bgColor="transparent"
                    _hover={{ bgColor: "none" }}
                    _focus={{ bgColor: "transparent" }}
                    borderBottom={active == 3 ? "2px" : "1px"}
                    borderColor={"brand.orange"}
                    fontWeight="500"
                    borderRadius="0"
                    onClick={() => handleActive(3)}
                >
                    {active == 3 ? (
                        <Icon
                            as={BsFillArrowDownSquareFill}
                            width="22px"
                            height="22px"
                            mr="8px"
                            color="brand.orange"
                        />
                    ) : null}
                    <Text
                        color={
                            active == 3 ? "brand.orange" : "brand.verylightGray"
                        }
                    >
                        Security Compliance and Advisory
                    </Text>
                </Button>
            </SimpleGrid>
        </Box>
    );
};

// Service content code begins

const ServiceContent = ({ active, activeContent, setActiveContent }) => {
    active == 1 ? setActiveContent(serviceDetails_1) : null;
    active == 2 ? setActiveContent(serviceDetails_2) : null;
    active == 3 ? setActiveContent(serviceDetails_3) : null;
    return (
        <Box mt="10">
            <SimpleGrid minChildWidth={["320px", null, "300px"]} gap="32px">
                {activeContent.map(({ i, title, href, details, image }) => {
                    return (
                        // <Box >
                        <ServiceCard
                            title={title}
                            href={href}
                            key={i}
                            details={details}
                            image={image}
                        />
                        // </Box>
                    );
                })}
            </SimpleGrid>
        </Box>
    );
};

// ******** Service Content Card******************

const ServiceCard = ({ title, href, details, image }) => {
    return (
        <Box
            p="7"
            maxW="320"
            _hover={{
                shadow: "0px 12px 42px -6px rgba(24, 39, 75, 0.16)",
            }}
            shadow={[
                "0px 12px 42px -6px rgba(24, 39, 75, 0.16)",
                "none",
                "none",
            ]}
            mx="auto"
            fontSize="18"
            cursor="pointer"
            w="100%"
        >
            <Image src={image} alt="service Illustration Image" />
            <Text
                mt="40px"
                mb=""
                fontWeight="500"
                fontSize="18"
                color="brand.light"
            >
                {title}
            </Text>
            <Text
                mt="2"
                fontSize="16"
                fontWeight="400"
                color="brand.verylightGray"
                noOfLines={5}
            >
                {details}
            </Text>
            <Box mt="12">
                <Link
                    href={href ?? "#"}
                    display="flex"
                    alignItems="center"
                    textTransform="uppercase"
                    fontSize="16"
                    fontWeight="500"
                    _hover={{ textDecoration: "none" }}
                >
                    Learn more
                    <Icon as={BsArrowRight} color="brand.blue" ml="9px" />
                </Link>
            </Box>
        </Box>
    );
};

const serviceDetails_1 = [
    {
        title: "Vulnerability Assessments",
        details:
            "Our Vulnerability Assessment service is a non-intrusive, automated, and regular test of our clients IT systems to identify security gaps, loopholes in your systems and networks.  ",
        href: "/service#vulnerability",
        image: "images/vulnerability.svg",
    },
    {
        title: "Web and Mobile Application Testing",
        image: "images/WMTesting.svg",
        details:
            "We deliver both authenticated and unauthenticated testing of web and mobile applications to help identify flaws or security gaps that may allow for the security of website or web applications to be compromised, putting sensitive data at risk. ",
        href: "/service#web",
    },
    {
        title: "Network Infrastructure Testing",
        details:
            "Our infrastructure assessment assesses the security posture of internal and external network by assessing whether the perimeter security controls can be compromised, and helping you address and secure any identified vulnerabilities. ",
        href: "/service#network",
        image: "images/networkInfrastructure.svg",
    },
    {
        title: "Our Cloud Configuration",
        details:
            "With the cloud adoption at the forefront of organization’s digital transformation, we are helping our clients with implementing adequate security controls in their cloud journey.",
        href: "/service#cloud",
        image: "images/cloudConfiguration.svg",
    },
    {
        title: "Network Devices Assessment",
        details:
            "We focus on the configuration review of networking devices such as routers, switches, load balancers, firewalls etc, by focusing on the device OS, port security, access control, protocols allowed, device authentication, services running etc.",
        href: "/service#device",
        image: "images/networkDevicesAssessment.svg",
    },
];

const serviceDetails_2 = [
    {
        title: "Web and Mobile Application Testing",
        image: "images/WMTesting.svg",
        details:
            "Lorem ipsum dolor sit amet, adipiscing elit. Enim massa dolor pellentesque pretium, feugiat nec mauris gravida. ",
        href: "/service",
    },
    {
        title: "Network Infrastructure Testing",
        details:
            "Lorem ipsum dolor sit amet, adipiscing elit. Enim massa dolor pellentesque pretium, feugiat nec mauris gravida. ",
        href: "#",
        image: "images/networkInfrastructure.svg",
    },
    {
        title: "Our Cloud Configuration",
        details:
            "Lorem ipsum dolor sit amet, adipiscing elit. Enim massa dolor pellentesque pretium, feugiat nec mauris gravida. ",
        href: "#",
        image: "images/cloudConfiguration.svg",
    },
    {
        title: "Network Devices Assessment",
        details:
            "Lorem ipsum dolor sit amet, adipiscing elit. Enim massa dolor pellentesque pretium, feugiat nec mauris gravida. ",
        href: "#",
        image: "images/networkDevicesAssessment.svg",
    },
    {
        title: "Vulnerability Assessments",
        details:
            "Lorem ipsum dolor sit amet, adipiscing elit. Enim massa dolor pellentesque pretium, feugiat nec mauris gravida. ",
        href: "#",
        image: "images/vulnerability.svg",
    },
];

const serviceDetails_3 = [
    {
        title: "Awareness Training",

        details:
            "Reduce the likelihood of data breaches by training your staff to recognise attacks.",
        href: "#",
        image: "images/networkDevicesAssessment.svg",
    },

    {
        title: "Cyber Essentials & Cyber Essential [Plus]",
        image: "images/WMTesting.svg",
        details:
            "Audit your internal IT security so you can start with a strong cybersecurity foundation.",
        href: "#",
    },

    {
        title: "Threat & Risk Assessment",
        details:
            "Refine your cybersecurity strategy by identifying key assets and the threats they face. ",
        href: "#",
        image: "images/networkInfrastructure.svg",
    },

    {
        title: "Cyber Advice and Guidance",
        details:
            "Get expert advice on how to best fill the gaps in your organisation’s cyber-defence",
        href: "#",
        image: "images/cloudConfiguration.svg",
    },
];
