import React from "react";
import Grid from "@material-ui/core/Grid";

export interface SubscriptionProps {
  basic: boolean;
  onRenew?: () => void;
  onUpgrade?: () => void;
}
import { Wrapper, Description, ButtonWrapper } from "./style";
const Subscription: React.FC<SubscriptionProps> = ({
  onRenew,
  onUpgrade,
  basic = true,
}) => {
  return (
    <Wrapper>
      <Grid
        item
        container
        justify="space-between"
        direction="row"
        alignItems="center"
      >
        <Grid item>
          <Description>{basic ? "Basic" : "Pro"}</Description>
          <Description style={{ marginTop: "8px" }}>
            {basic
              ? "3,000,000 requests / month"
              : "Unlimited requests / month"}
          </Description>
        </Grid>
        <Grid>
          {basic && <ButtonWrapper onClick={onUpgrade}>Upgrade</ButtonWrapper>}
          {!basic && <ButtonWrapper onClick={onRenew}>Extend</ButtonWrapper>}
        </Grid>
      </Grid>
    </Wrapper>
  );
};
export default Subscription;
