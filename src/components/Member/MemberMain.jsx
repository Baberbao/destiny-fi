import React from "react";
import { Route, Routes } from "react-router-dom";

import MemberDrawer from "./DashBoardDrawer/MemberDrawer";
import Eductaion from "./MemberEducation/MemberEduction";
import LiveSessions from "./LiveSession/LiveSessions";
import DefifireFX from "./Tools/Defifire";
import TokenInformation from "./Tokens/InformationPage";
import Notification from "../Dashboard/Account/Notification";
import ProfileSetting from "../Dashboard/Account/ProfileSetting";
import TokenTransction from "./Tokens/TokenTransction";
import TokenStatistics from "./Tokens/TokenStatistics";
import RoadMap from "./RoadMap/RoadMap";
import CourseFoundation from "./CourseFoundation/CourseFoundation";
import LectureView from "./LectureView/LectureView";

const MemberMain = () => {
  return (
    <div>
      <MemberDrawer>
        <Routes>
          <Route path="/" element={<Eductaion />} />
          <Route path="/academy/foundations" element={<CourseFoundation />} />
          <Route path="/academy/foundations/:index" element={<LectureView />} />
          <Route path="/live-lessons" element={<LiveSessions />} />
          <Route path="/product/defifire-fx" element={<DefifireFX />} />
          <Route path="/token/information" element={<TokenInformation />} />
          <Route path="/token/transactions" element={<TokenTransction />} />
          <Route
            path="/token/reward-statistics"
            element={<TokenStatistics />}
          />
          <Route path="/roadmap" element={<RoadMap />} />

          <Route path="/notifications" element={<Notification />} />
          <Route path="/profile-settings" element={<ProfileSetting />} />
        </Routes>
      </MemberDrawer>
    </div>
  );
};

export default MemberMain;
