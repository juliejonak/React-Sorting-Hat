'use strict';

import React, {Component} from 'react';
import SmokeVideo from './video/Thick_Smoke.mp4';

class Video extends Component {
    constructor (props) {
        super(props);

        this.state = {
            videoURL: 'http://www.sample-videos.com/video/mp4/720/big_buck_bunny_720p_1mb.mp4'
        }
    }

    render () {
        return (
            <video id="background-video" loop autoPlay>
                <source src={SmokeVideo} type="video/mp4" />
                <source src={SmokeVideo} type="video/ogg" />
                Your browser does not support the video tag.
            </video>
        )
    }
};

export default Video;