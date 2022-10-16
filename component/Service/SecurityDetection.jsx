import React from "react";
import {
    Flex,
    Box,
    Text,
    Icon,
    SimpleGrid,
    Image,
    Divider,
} from "@chakra-ui/react";
import ScreenWidth from "../../Layout/ScreenWidth";

const SecurityDetection = () => {
    return (
        <Box id="detect">
            <ScreenWidth>
                <Detection />
                <ManageSecurity mt="80px" />
                <ThreatSecurity mt="56px" />
            </ScreenWidth>
        </Box>
    );
};

export default SecurityDetection;

const Detection = () => {
    return (
        <Flex
            flexDir={["column-reverse", null, "row"]}
            justify="space-between"
            align="center"
            gap="32px"
        >
            <Box w={["100%", null, "50%"]}>
                {" "}
                <Box
                    maxW={["100%", null, "496px"]}
                    fontSize={["16px", null, "18px"]}
                >
                    <Text fontWeight="400" fontSize={["xl2", null, "4l"]}>
                        Security Detection & Response
                    </Text>

                    <Box fontSize="18px">
                        <Text color="brand.orange">
                            With our security monitoring service, we help
                            organizations develop an effective security
                            monitoring processes which incorporates people,
                            processes, and technologies.
                        </Text>
                        <Text mt="24px">
                            At Afri-Pro, we can help your organization with
                            analysing your needs and requirements, choosing the
                            right technology to meet your business needs,
                            deployment, configuration, and integration of the
                            monitoring technologies with your existing IT and
                            security assets to ensure there is comprehensive
                            coverage for your security monitoring and detection
                            process.
                        </Text>
                        <Text mt="8px">
                            In addition, we also offer value added first line
                            support to our clients across different security
                            technologies through our managed Security and SOC
                            services team. As a value-added partner of the
                            leading technologies vendors such as Microsoft,
                            Splunk, IBM, Microfocus, Rapid 7, Sumologic, AT&T,
                            and Fortinet etc, our team of consultants have
                            experience and hands on skills to implement and
                            manage these technologies.
                        </Text>
                    </Box>
                </Box>
            </Box>
            <Box>
                <Image src="images/Team/future.png" alt="Future Image" />
            </Box>
        </Flex>
    );
};

const ManageSecurity = ({ ...props }) => {
    return (
        <Flex
            {...props}
            flexDir={["column", null, "row"]}
            justify="space-between"
            align="center"
            gap="32px"
        >
            <Box>
                <Image src="images/Team/future.png" alt="Future Image" />
            </Box>

            <Box w={["100%", null, "50%"]}>
                <Box
                    maxW={["100%", null, "496px"]}
                    fontSize={["16px", null, "18px"]}
                >
                    <Text fontWeight="400" fontSize={["xl2", null, "4l"]}>
                        Managed Security Services
                    </Text>

                    <Box fontSize="18px">
                        <Text mt="24px">
                            We understand that the overhead cost and investment
                            of comprehensively managing security in-house can be
                            a burden and make security management quite
                            ineffective and daunting for most organizations. In
                            instances where you do not have enough internal
                            resources, time or skillset required for adequate
                            Cyber security management, Afri-Pro services can
                            help with managing your organization’s security from
                            our certified 24/7 SOC to relieve your stretched
                            team of the responsibilities of day-to-day security
                            management and focus on value-add core business
                            operation activities.
                        </Text>
                        <Text mt="8px">
                            Afri-Pro Services provides a range of managed
                            services delivered from our 24/7 Security Operations
                            Centre (SOC).
                        </Text>
                    </Box>
                </Box>
            </Box>
        </Flex>
    );
};

const ThreatSecurity = ({ ...props }) => {
    return (
        <Flex
            {...props}
            flexDir={["column-reverse", null, "row"]}
            justify="space-between"
            align="center"
            gap="32px"
        >
            <Box w={["100%", null, "50%"]}>
                <Box
                    maxW={["100%", null, "496px"]}
                    fontSize={["16px", null, "18px"]}
                >
                    <Text fontWeight="400" fontSize={["xl2", null, "4l"]}>
                        Threat Security Services
                    </Text>

                    <Box fontSize="18px">
                        <Text mt="24px">
                            Our Threat Intelligence service delivers knowledge,
                            actionable information, and data about security
                            threats to our clients to help them understand
                            attack Tactics, Techniques and Procedures (TTPs) and
                            take proactive actions to protect their IT assets.
                            We deploy and implement the leading threat
                            intelligence platforms and integrate both opensource
                            and commercial threat feeds to enrich our client’s
                            intelligence to enable better decision making and
                            improve security technology capabilities to reduce
                            risk and possibilities of being compromised.
                        </Text>
                    </Box>
                </Box>
            </Box>
            <Box>
                <Image src="images/Team/future.png" alt="Future Image" />
            </Box>
        </Flex>
    );
};
