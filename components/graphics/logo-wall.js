import { Flex, Link, Image } from "@chakra-ui/react"

const CompanyLogo = ({ href, src, alt }) => {
    return (
        <Link href={href}>
            <Image
                mb={2}
                borderRadius="6px"
                src={src}
                maxHeight="100"
                maxWidth="200"
                alt={alt}
            ></Image>
        </Link>
    )
}
const LogoWall = () => {
    return (
        <Flex wrap="wrap" align="center" justify="space-evenly" width="full">
            <CompanyLogo
                href="https://www.renre.com"
                src="/images/CompanyLogos/RenaissanceReLogo.png"
                alt="Company Logo: RenaissanceRe"
            ></CompanyLogo>
            <CompanyLogo
                href="https://www.enveloprisk.com"
                src="/images/CompanyLogos/EnvelopLogo.png"
                alt="Company Logo: Envelop"
            ></CompanyLogo>
            <CompanyLogo
                href="https://paper.co"
                src="/images/CompanyLogos/PaperCoLogo.png"
                alt="Company Logo: PaperCo"
            ></CompanyLogo>
            <CompanyLogo
                href="https://aareas.com"
                src="/images/CompanyLogos/AareasInteractiveLogo.png"
                alt="Company Logo: AareasInteractive"
            ></CompanyLogo>
            <CompanyLogo
                href="https://www.bmo.com/main/personal"
                src="/images/CompanyLogos/BMOLogo.png"
                alt="Company Logo: BMO"
            ></CompanyLogo>
            <CompanyLogo
                href="https://uwaterloo.ca/conrad-school-entrepreneurship-business/"
                src="/images/CompanyLogos/ConradCentreLogo.png"
                maxWidth="200"
            ></CompanyLogo>
        </Flex>
    )
}

export default LogoWall
