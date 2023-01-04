import { Box } from "@mui/material";
import React from "react";
import { Route, Routes } from "react-router-dom";

import AccountInfo from "./Account/AccountInfo.jsx";
import AffiliateSettings from "./Account/Affiliate.jsx";
import Notification from "./Account/Notification.jsx";
import ProfileSettings from "./Account/ProfileSetting.jsx";
import Rank from "./Account/Rank.jsx";
import Afflietestatis from "./AffliatedStatistices/Afflietestatis.jsx";
import DashBoardDrawer from "./DashBoardDrawer/DashBoardDrawer";
import PersonaleDownLine from "./Information/PersonaleDownLine";
import SalesStatstics from "./Information/SalesStatstics";
import Transction from "./Information/Transction";
import AllTimeIncome from "./LeaderBoard/AllTimeIncome";
import AllTimePersonalesales from "./LeaderBoard/AllTimePersonalesales.jsx";
import Last30DaysIncome from "./LeaderBoard/Last30DaysIncome";
import Last30daysPersonaleSales from "./LeaderBoard/Last30daysPersonaleSales";
import TopPerformerBonus from "./LeaderBoard/TopPerformerBonus";
import ProfitEarning from "./ProfitEarning";
import Profitoverview from "./Profitoverview/Profitoverview";
import Treecomponent from "./Tree/Treecomponent";
import Treetabs from "./Tree/Treetabs.jsx";
const DashboardMain = () => {
  return (
    <div>
      <DashBoardDrawer>
        <Routes>
          <Route path="/" element={<Afflietestatis />} />
          <Route path="/profitearning" element={<ProfitEarning />} />
          <Route path="/profitoverview" element={<Profitoverview />} />
          <Route path="/leaderbord/allincome" element={<AllTimeIncome />} />
          {/* -------------Account information routes------------- */}
          <Route path="/account-information" element={<AccountInfo />} />
          <Route path="/notifications" element={<Notification />} />
          <Route path="/profile-settings" element={<ProfileSettings />} />
          <Route path="/rank" element={<Rank />} />
          <Route path="/affiliate-settings" element={<AffiliateSettings />} />

          <Route path="/maindashboard/:pkg/:userId" element={<Treetabs />} />
          <Route
            path="/leaderbord/last30daysincome"
            element={<Last30DaysIncome />}
          />
          <Route
            path="/leaderbord/last30dayspersonelsales"
            element={<Last30daysPersonaleSales />}
          />
          <Route
            path="/leaderbord/alltimepersonalesales"
            element={<AllTimePersonalesales />}
          />
          <Route
            path="/leaderbord/last30dayspersonalesales"
            element={<Last30daysPersonaleSales />}
          />
          <Route
            path="/leaderbord/topperformerbonus"
            element={<TopPerformerBonus />}
          />
          <Route path="/information/transaction" element={<Transction />} />
          <Route
            path="/information/salesstatsrics"
            element={<SalesStatstics />}
          />
          <Route
            path="/information/personaledownline"
            element={<PersonaleDownLine />}
          />
        </Routes>
      </DashBoardDrawer>
    </div>
  );
};

export default DashboardMain;
