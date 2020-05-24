import React from "react";

import {library} from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { fab } from '@fortawesome/free-brands-svg-icons';
library.add(fab);

const Connect = (props) => (
    <div className="container-fluid padding" id="connect">
    <div className="row text-center welcome padding">
        <div className="col-12">
            <h2>Connect</h2>
        </div>
        <hr />
        <div className="col-12 social padding">
            <a href="https://www.facebook.com/EduBridge-IAS-113619610265624/" target="_blank" rel="noopener"><FontAwesomeIcon icon={["fab", "facebook"]}/></a>
            <a href="http://www.instagram.com/edubridgeias" target="_blank" rel="noopener"><FontAwesomeIcon icon={["fab", "instagram"]} /></a>
            <a href="https://www.youtube.com/channel/UCvD_8dgBDmjvhfdSp8VZbQw" target="_blank" rel="noopener"><FontAwesomeIcon icon={["fab", "youtube"]} /></a>
            <a href="https://chat.whatsapp.com/CphObgpnnpa9vcNapcD7yG" target="_blank" rel="noopener"><FontAwesomeIcon icon={["fab", "whatsapp"]} /></a>
            <a href="https://t.me/edubridgeias" target="_blank" rel="noopener"><FontAwesomeIcon icon={["fab", "telegram"]} /></a>
            <a href="https://www.quora.com/profile/Edubridge-Ias?ch=10&share=143c555b&srid=uoTMb3" target="_blank" rel="noopener"><FontAwesomeIcon icon={["fab", "quora"]} /></a>
        </div>
    </div>
</div>
)

export default Connect;