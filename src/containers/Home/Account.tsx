import React, { useState } from "react";
import Grid from "@material-ui/core/Grid";
import { Typography } from "@material-ui/core";

import { Direction, Plan, InvoiceTableItem } from "../../types";
import {
  Main,
  TitleText,
  Title,
  TabContainer,
  TabsWrapper,
  TabWrapper,
  TabContent,
  PriceTable,
  Hint,
  BillingInfoWrapper,
  SubTitle,
  SmallText,
} from "./style";
import PriceItem from "../../components/PriceItem";
import FAQ from "../../components/FAQ";
import MembershipCard from "../../components/MembershipCard";
import InvoiceTable from "../../components/InvoiceTable";
import { ReactComponent as CautionIcon } from "../../assets/img/caution.svg";

const faq = [
  {
    title: "Can I set up recurring payments?",
    description:
      "Currently, we don’t offer recurring payments. When your billing period ends, you will need to renew your subscription.",
  },
  {
    title: "What type of payments are accepted?",
    description:
      "We’ve partnered with Stripe to enable easy and secure payments using a credit or debit card or supported online wallets like Apple Pay and Google Pay.",
  },
  {
    title: "Can I downgrade my monthly subscription?",
    description:
      "Once you make a payment for the month, there is no way to downgrade your subscription. Your plan will automatically downgrade to the free tier at the end of the billing cycle if you don’t make another payment.",
  },
];
const rows: InvoiceTableItem[] = [
  {
    date: "Jan 12, 2021",
    description: "Pro Monthly Plan",
    period: "Jan 12, 2021 to Feb 12, 2021",
    amount: "$50.00",
    status: "Paid",
  },
  {
    date: "Jan 12, 2021",
    description: "Pro Monthly Plan",
    period: "Jan 12, 2021 to Feb 12, 2021",
    amount: "$50.00",
    status: "Paid",
  },
  {
    date: "Jan 12, 2021",
    description: "Pro Monthly Plan",
    period: "Jan 12, 2021 to Feb 12, 2021",
    amount: "$50.00",
    status: "Paid",
  },
];
const expiration = "March 12, 2021";

export interface AccountProps {
  subscribed?: boolean;
  plan?: Plan;
}
const Account = ({ plan = Plan.Basic, subscribed = false }) => {
  const [tabID, setTabID] = useState<number>(0);
  const onTabIDChanged = (event, newValue) => {
    setTabID(newValue);
  };

  return (
    <>
      <Main container justify="center" direction="column">
        <Title item>
          <TitleText>Account</TitleText>
        </Title>
        <TabContainer>
          <TabsWrapper
            value={tabID}
            onChange={onTabIDChanged}
            aria-label="account tabs"
          >
            <TabWrapper
              label="Billing"
              id="account-tab-0"
              aria-controls="account-tabpanel-0"
            />
            <TabWrapper
              label="Subscription Plan"
              id="account-tab-1"
              aria-controls="account-tabpanel-1"
            />
          </TabsWrapper>
        </TabContainer>
        <TabContent
          role="tabpanel"
          hidden={tabID !== 0}
          id="account-tabpanel-0"
          aria-labelledby="account-tab-0"
        >
          <BillingInfoWrapper container direction="row">
            <Grid container className="info">
              <Grid className="wrapper left">
                <SubTitle>Current Billing Period Ends</SubTitle>
                <Typography variant="h5">
                  {plan == Plan.Basic
                    ? "Not Currently Subscribed"
                    : "February 12th, 2021"}
                </Typography>
              </Grid>
              <Grid className="wrapper right">
                <SubTitle>Plan Overview</SubTitle>
                {plan !== Plan.Basic && (
                  <SmallText className="small">
                    Pro Tier: Unlimited Requests <br></br>& Monthly Renewal
                  </SmallText>
                )}
                {plan == Plan.Basic && (
                  <SmallText className="small">
                    Basic Tier: 3,000,000 Requests
                  </SmallText>
                )}
              </Grid>
              <Grid className="wrapper">
                <SubTitle>Invoices Sent to</SubTitle>
                <SmallText className="small">
                  vishakh@cryptonomic.tech
                </SmallText>
              </Grid>
            </Grid>
            <InvoiceTable items={rows}></InvoiceTable>
          </BillingInfoWrapper>
        </TabContent>
        <TabContent
          role="tabpanel"
          hidden={tabID !== 1}
          id="account-tabpanel-1"
          aria-labelledby="account-tab-1"
        >
          <Grid container justify="center">
            <Grid style={{ width: "37rem" }}>
              <PriceTable>
                <PriceItem
                  plan={Plan.Basic}
                  label="Free"
                  items={[
                    "3,000,000 Requests per Month",
                    "Tezos Mainnet and Testnet Nodes",
                  ]}
                  buttonLabel="Your plan"
                  selected={true}
                  background="#2F3035"
                  style={{ marginTop: "2rem" }}
                  direction={Direction.Row}
                ></PriceItem>
                <PriceItem
                  plan={Plan.Pro}
                  opacity={0.4}
                  label={
                    <div>
                      $50<span className={"month"}>/month</span>
                    </div>
                  }
                  items={[
                    "Unlimited Requests per Month",
                    "Tezos Mainnet and Testnet Nodes",
                  ]}
                  buttonLabel="Upgrade"
                  selected={false}
                  direction={Direction.Row}
                  style={{ marginTop: "2rem" }}
                  background="linear-gradient(90deg, rgba(82, 143, 245, 0.4) 0%, rgba(127, 86, 244, 0.4) 155.82%);"
                ></PriceItem>
              </PriceTable>
              <FAQ items={faq} />
            </Grid>
            <Grid style={{ width: "27.5rem", marginLeft: "8.75rem" }}>
              <MembershipCard plan={Plan.Pro} fee={50} />
              {
                <Grid>
                  <Hint style={{ marginTop: "1rem" }}>
                    Your current billing subscription will{" "}
                    <span>end on {expiration}</span>. Make a payment before your
                    subscription ends to avoid any disruption to your service.
                  </Hint>
                </Grid>
              }
              {
                <Grid
                  item
                  container
                  alignItems="center"
                  direction="row"
                  style={{ flexWrap: "nowrap", marginTop: "1rem" }}
                >
                  <Grid
                    item
                    container
                    alignItems="center"
                    style={{ flex: "1 1 2rem", marginRight: "0.1rem" }}
                  >
                    <CautionIcon />
                  </Grid>
                  <Grid item>
                    <Hint className="caution">
                      Your payment was declined. To update your subscription,
                      please verify your payment details and try again.
                    </Hint>
                  </Grid>
                </Grid>
              }
            </Grid>
          </Grid>
        </TabContent>
      </Main>
    </>
  );
};

export default Account;
