import {Badge, Link} from "@chakra-ui/react"

const DetailInfo = ({ url = undefined, children }) => {
    if (url === undefined) {
        return <Badge variant="plain">{children}</Badge>
    }
    return (
        <Badge variant="plain">
            <Link
                href={url}
                display="inline-flex"
                alignItems="center"
                variant="badge-inline"
            >
                {children}
            </Link>
        </Badge>
    )
}

export default DetailInfo