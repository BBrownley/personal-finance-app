import React, { useState } from "react";

import { Container } from "./sidebar.elements";

import logoLg from "../../assets/images/logo-large.svg";
import logoSm from "../../assets/images/logo-small.svg";

import navOverview from "../../assets/images/icon-nav-overview.svg";
import navTransactions from "../../assets/images/icon-nav-transactions.svg";
import navBudgets from "../../assets/images/icon-nav-budgets.svg";
import navPots from "../../assets/images/icon-nav-pots.svg";
import navBills from "../../assets/images/icon-nav-recurring-bills.svg";

import minimizeMenu from "../../assets/images/icon-minimize-menu.svg";

export default function Sidebar() {
  const [minimized, setMinimized] = useState(false);

  const toggleMenu = () => {
    setMinimized((prevState) => !prevState);
  };

  return (
    <Container className={minimized && "minimized"}>
      <div className="logo">
        <img src={logoLg} alt="finance" className="logo--lg" />
        <img src={logoSm} alt="finance" className="logo--sm" />
      </div>
      <div className="navigation">
        <div className="navigation-item">
          <img src={navOverview} alt="overview" />
          <span>Overview</span>
        </div>
        <div className="navigation-item">
          <img src={navTransactions} alt="transactions" />
          <span>Transactions</span>
        </div>
        <div className="navigation-item">
          <img src={navBudgets} alt="budgets" />
          <span>Budgets</span>
        </div>
        <div className="navigation-item">
          <img src={navPots} alt="pots" />
          <span>Pots</span>
        </div>
        <div className="navigation-item">
          <img src={navBills} alt="recurring bills" />
          <span>Recurring bills</span>
        </div>
      </div>
      <div className="minimize">
        <div className="minimize-btn" onClick={toggleMenu}>
          <div>
            <img src={minimizeMenu} alt="minimize menu" />
            <span>Minimize menu</span>
          </div>
        </div>
      </div>
    </Container>
  );
}
