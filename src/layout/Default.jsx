import {Outlet} from "react-router-dom";

function Default(){

    return(
        <main className='main_wrap'>
            <Outlet/>
        </main>
    )
}

export default Default