import Navigation from '@components/Navigation.js'
export default ({fromServer}) => (
    <>
        <Navigation></Navigation>
        <div>
            <h1>Alma</h1>
            <p>alma - {fromServer}</p>
        </div>
    </>
)

export function getServerSideProps(ctx) {
    console.log('server side props');
    ctx.res.redirect('/korte');
    return { props: {}};
}