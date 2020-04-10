import Link from 'next/link'

export default () => (<div>
    <Link href="/" prefetch={false}><a>Home</a></Link> | 
    <Link href="/alma" prefetch={false}><a>Alma</a></Link> |
    <Link href="/korte" prefetch={false}><a>Körte</a></Link>
</div>)