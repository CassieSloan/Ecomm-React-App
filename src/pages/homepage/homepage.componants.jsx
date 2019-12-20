import React from "react"; //importing react library

import Directory from "../../componants/directory/directory.componant";

import "./homepage.styles.scss"; //importing stylesheet to apply to componant

const HomePage = () => ( //first componant (menu boxes)
    <div className="homepage">
        <Directory/>
    </div>
)

export default HomePage; //export componant