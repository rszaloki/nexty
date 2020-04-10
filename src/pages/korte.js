import Navigation from '@components/Navigation.js'
export default ({fromServer}) => (
    <>
        <Navigation></Navigation>
        <div>
            <h1>Körte</h1>
            <p>körte - {fromServer}</p>
        </div>
    </>
)

