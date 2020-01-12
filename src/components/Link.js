import NextLink from 'next/link'
import { format } from 'url'

const Link = ({ children, ...props }) => {

    const base = (process.env.basePath || '').length > 1 ? process.env.basePath : '';
    const href = `${base}${format(props.href)}`
    const as = !props.as ? href : `${base || ''}${format(props.href)}`

    return (<NextLink {...props}
        href={href}
        as={as}
    >
        {children}
    </NextLink>)
}

export default Link