import Sidebar from "./Layouts/Sidebar/Sidebar";
import Header from "./Layouts/Header/Header";
import Overview from "./Pages/Overview/Overview";
import Newsbar from "./Layouts/Newsbar/Newsbar";
import Footer from "./Layouts/Footer/Footer";
import { Routes, Route } from "react-router";
import Profile from "./Pages/Profile/Profile";
import Board from "./Pages/Board&Managment/Board";
import Chart from "./Pages/Chart/Chart";
import InvestorCalculator from "./Pages/Investor Calculator/InvestorCalculator";
import MajorShareholders from "./Pages/MajorShareholders/MajorShareholders";
import NegotiatedDeals from "./Pages/Negotiated Deals/NegotiatedDeals";
import FinancialStatments from "./Pages/FinancialStatments/FinancialStatments";
function App() {
  return (
    <div className="App">
      <div className="container-fluid">
        <Header />
        <div className="d-flex">
          <div className="col-lg-3 sidebar-container">
            <Sidebar />
          </div>
          <div className="col-lg-9 col-md-12 col-sm-12 col-12">
            <div className="p-3 min-height">
              <Routes>
                <Route path="/" element={<Overview />} />
                <Route path="/profile" element={<Profile />} />
                <Route path="/board&managment" element={<Board />} />
                <Route path="/chart" element={<Chart />} />
                <Route
                  path="/investorcalculator"
                  element={<InvestorCalculator />}
                />
                <Route
                  path="/majorshareholders"
                  element={<MajorShareholders />}
                />
                <Route path="/negotiated-deals" element={<NegotiatedDeals />} />
                <Route
                  path="/financial-statments"
                  element={<FinancialStatments />}
                />
              </Routes>
            </div>
          </div>
        </div>
        <Footer />

        <Newsbar />
      </div>
    </div>
  );
}

export default App;
