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

const SecurityAdvisory = () => {
    return (
        <Box id="detect">
            <ScreenWidth>
                <CyberSecurity />
                <SecurityStandards mt="80px" />
                <SecureDesign mt="56px" />
                <StaffAugmentation mt="56px" />
            </ScreenWidth>
        </Box>
    );
};

export default SecurityAdvisory;

const CyberSecurity = () => {
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
                        Cyber Security Review
                    </Text>

                    <Box fontSize="18px">
                        <Text color="brand.orange">
                            Our team of experienced consultant delivers a
                            comprehensive review of an organization’s security
                            posture against the requirements of international
                            best practice security standards and frameworks such
                            as NIST CSF, ISO27001, CIS Top 18.
                        </Text>
                        <Text mt="24px">
                            We deliver the review of your organization’s
                            security controls from the perspective of people,
                            processes, and technologies, to get visibility of
                            your organization’s security maturity and posture
                            and identify areas of improvements to help your
                            organization improve management. From the output of
                            the security review, we can help your organization
                            with the development of comprehensive cyber security
                            management program, strategies, and roadmaps to help
                            with the efficient management of the organization’s
                            security program.
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

const SecurityStandards = ({ ...props }) => {
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
                            Our Security Standards Implementation and
                            Certification services focuses on helping our
                            clients with developing a comprehensive
                            enterprise-wide security program and aligning the
                            security programs with best practice standards. Our
                            service looks at helping our clients comply and
                            align with best practice frameworks and standards
                            such as NIST, CIS, ISO27001, IS022301, GDPR, and PCI
                            DSS. We offer services such as gap assessment
                            against the identified standard and frameworks, we
                            help organization with the implementation of the
                            standards and frameworks recommended security
                            controls and helping organizations getting certified
                            against the above listed standards.
                        </Text>
                    </Box>
                </Box>
            </Box>
        </Flex>
    );
};

const SecureDesign = ({ ...props }) => {
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
                        Secure By Design
                    </Text>

                    <Box fontSize="18px">
                        <Text mt="24px">
                            Our Secure by Design services focuses on helping
                            organization’s build security resilience into their
                            IT infrastructure from enterprise software
                            applications to cloud, and on-premises network
                            infrastructure. With this service, we help our
                            {"client's "}incorporate security into the fabric of
                            any enterprise solutions, cloud, and network being
                            developed or configured either inhouse or third
                            party acquired.
                        </Text>
                        <Text mt="10px">
                            We develop and design secure end-to-end enterprise
                            software solutions and networks, from concept and
                            strategy, to design, implementation, and support,
                            helping clients achieve their business goals. For
                            every project, we bring a combination of industry
                            knowledge, technical expertise, and competence to
                            ensure projects are delivered with high level of
                            professionalism, and customer satisfaction.
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

const StaffAugmentation = ({ ...props }) => {
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
                        Staff Augmentation Service
                    </Text>

                    <Box fontSize="18px">
                        <Text mt="24px">
                            With our in-depth experience in IT and Cyber
                            Security service delivery, we offer staff
                            augmentation as a service by outsourcing some of our
                            experienced consultants to our client’s
                            organizations to provide a full range of technical
                            expertise in areas such as project management,
                            Security Engineering, Security Analysis, CISO as a
                            Service, etc. Our staff augmentation services
                            approach reduces risk and allows us to deliver our
                            clients projects in a consistent and improved
                            manner, no matter what stage of the project
                            lifecycle we are appointed in. We put our client
                            interests first, ensuring we help deliver the
                            outcomes that matter to you. {"It's"} the formula
                            that has helped us successfully deliver some of the
                            {"industry's"} most complex projects the world over.
                        </Text>
                        <Text mt="8px">
                            As a boutique sized company, we can be far more
                            competitive, providing tailored services compared
                            with many of our competitors to the benefits of our
                            clients. Most importantly our project management
                            team will provide the individual hands-on care plus
                            our complete attention to ensure assigned tasks and
                            project deliverables run smoothly. We have the
                            experience to anticipate and react to any potential
                            problems before they arise to result in a seamless
                            project delivery that fits with the needs of every
                            client’s business.
                        </Text>
                    </Box>
                </Box>
            </Box>
        </Flex>
    );
};
