import { Badge, Link } from "@chakra-ui/react"

const DetailInfo = ({ url = undefined, children, ...props }) => {
    if (props.variant === undefined) {
        props.variant = "info"
    }
    if (url === undefined) {
        return <Badge {...props}>{children}</Badge>
    }
    return (
        <Badge {...props}>
            <Link href={url} display="inline-flex" alignItems="center">
                {children}
            </Link>
        </Badge>
    )
}

export default DetailInfo
