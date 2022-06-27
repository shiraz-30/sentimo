import React from "react";
import { ProfileCard } from "./../../elements";
import { Sidebar } from "./../../components";
import { data } from './aboutUsdata.js';

import "./AboutUs.css";

import dakshImg from '../../assets/avatars/daksh_avatar.png'
import ishwarImg from '../../assets/avatars/ishwar_avatar.png'
import shirazImg from '../../assets/avatars/shiraz_avatar.png'

export default function AboutUs() {
  return (
    //make about us card in components and make 3 of them here
    <div className="aboutUsBody">
      <Sidebar />
      <div className="profileCardParent">
        <div className="profileCard">
          <ProfileCard
            name={data?.daksh?.name}
            whatWork={data?.daksh?.whatWork}
            whoAreYou={data?.daksh?.whoAreYou}
            content={data?.daksh?.content}
            socialLinks={data?.daksh?.socialLink}
            profileImg={dakshImg}
          />
        </div>

        <div className="profileCard" style={{ backgroundColor: "#DFF6FF" }}>
        <ProfileCard
            name={data?.ishwar?.name}
            whatWork={data?.ishwar?.whatWork}
            whoAreYou={data?.ishwar?.whoAreYou}
            content={data?.ishwar?.content}
            socialLinks={data?.ishwar?.socialLink}
            profileImg={ishwarImg}
          />
        </div>

        <div className="profileCard">
        <ProfileCard
            name={data?.shiraz?.name}
            whatWork={data?.daksh?.whatWork}
            whoAreYou={data?.shiraz?.whoAreYou}
            content={data?.shiraz?.content}
            socialLinks={data?.shiraz?.socialLink}
            profileImg={shirazImg}
          />
        </div>
      </div>
    </div>
  );
}
