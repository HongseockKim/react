import ApiRequest from "../api/apiRequest";
import {useSelector, useStore} from "react-redux";
import {actions} from "../action/action";
import {jwtDecode} from "jwt-decode";
import WrapperStyled from "../style/Wrapper";
import ComunityList from "./ComunityList";

function Main(){
    const store = useStore();
    const userInfo = useSelector(state=> state.authInfo);

    const handleLoginRequest = () => {
        ApiRequest.loginRequest().then(res=>{
            const userInfo = {
                token:res.data.access_token,
                userInfo: jwtDecode(res.data.access_token)
            }
            store.dispatch(actions.setAction({data: userInfo, name: 'USER_INFO_ADDED'}));
            console.log('@@@@@@@@@@');
            console.log('@@@@@@@@@@');
            console.log(res);
            console.log('@@@@@@@@@@');
            console.log('@@@@@@@@@@');
            console.log(userInfo)
        });
    }

    return(
        <WrapperStyled >
            <div className='login_wrap' >
                <button className='login_btn' type='button' onClick={handleLoginRequest} >로그인</button >
            </div >
            <ComunityList/>
        </WrapperStyled >
    )
}

export default Main;