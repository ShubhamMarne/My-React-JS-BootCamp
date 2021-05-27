import { Route } from "react-router";

const Welcome = () => {
    return <section>
        <ha>This is Welcome page</ha>
        <Route path="/welcome/newuser">
            <p>THis is new user adding page</p>
        </Route>
    </section>
}

export default Welcome;