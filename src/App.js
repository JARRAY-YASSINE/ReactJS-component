import './assets/style.css';
import React from "react";
//import MyFirstComponent from "./component/MyFfirstComponent";
import Address from "./component/Profile/Address";
import FullName from './component/Profile/FullName';
import ProfilePhoto from './component/Profile/ProfilePhoto';


function App () {
    return (

    <div className='App'>
          {/* <MyFirstComponent /> */}
    <div className='YassCard'>

        <Address/>
        <FullName/>
        <ProfilePhoto/>

    </div>
    </div>
)
}
export default App;
