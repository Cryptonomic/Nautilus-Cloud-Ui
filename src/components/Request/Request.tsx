import React from "react";
import Grid from "@material-ui/core/Grid";

export interface RequestProps {
  basic: boolean;
  requests: number;
  description: string;
  limit?: number;
}

import { Wrapper, Description, LinearProgressWrapper } from "./style";
import { Typography } from "@material-ui/core";
const Request: React.FC<RequestProps> = ({
  requests,
  description,
  basic = true,
  limit = 3000000,
}) => {
  return (
    <Wrapper>
      <Description>{description}</Description>
      <Grid
        item
        container
        justify="space-between"
        style={{ marginTop: "32px" }}
      >
        {basic && (
          <>
            <Description>Requests Made</Description>
            <Description style={{ marginBottom: "8px" }}>
              {requests.toLocaleString() + " of " + limit.toLocaleString()}
            </Description>
            <LinearProgressWrapper
              variant="determinate"
              value={(requests / limit) * 100}
            ></LinearProgressWrapper>
          </>
        )}
        {!basic && (
          <Typography
            style={{color: "#fff", fontSize: "24px"}}
          >
            <span style={{color: "#61A9E9"}}>{requests.toLocaleString()}</span> Requests
          </Typography>
        )}
      </Grid>
    </Wrapper>
  );
};
export default Request;
