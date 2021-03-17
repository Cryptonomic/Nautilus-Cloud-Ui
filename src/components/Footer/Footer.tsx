import React, { useEffect } from "react";
import Typography from "@material-ui/core/Typography";

import {
  FooterContainer,
  FooterTitle,
  FooterLine,
  FooterList,
  FooterLink,
  FooterSocial,
  FooterSocialLink,
  FooterTerms,
  FooterPolicy,
} from "./style";

import CustomImg from "../../components/CustomImg";
import RiotIcon from "../../assets/img/riot.svg";
import TwitterIcon from "../../assets/img/twitter.svg";
import MediumIcon from "../../assets/img/medium.svg";
import GithubIcon from "../../assets/img/sm_github_icon.svg";
import config from "../../config";
const {
  termsOfService,
  privacyPolicy,
  twitter,
  gitHub,
  riot,
  medium,
  conseil,
  conseiljs,
  userTools,
  arronax,
  galleon,
} = config;

export interface FooterProps {
}
const Footer = () => {
  const openUrl = (url: string) => window.open(url, "_blank");
  return (
    <>
      <FooterContainer container justify="center">
        {/* <FooterTitle item>
                    <Typography variant="h3" align="center" component="div">
                        A Note on Decenteralization
                    </Typography>
                    <Typography variant="body1" align="center" component="p">
                        Cryptonomic is committed to decentralization and disintermediation. With our
                        upcoming Nautilus Core project, you will be able to deploy on your own
                        production infrastructure. All back-end components for running our services
                        are open source and thoroughly documented.
                    </Typography>
                </FooterTitle> */}

        <FooterList container alignItems="center">
          <Typography variant="subtitle2">© 2021 Cryptonomic Inc</Typography>
          <FooterSocial container alignItems="center">
            <FooterSocialLink onClick={() => openUrl(medium)}>
              <CustomImg src={MediumIcon} size="1rem" name="medium-icon" />
            </FooterSocialLink>
            <FooterSocialLink onClick={() => openUrl(gitHub)}>
              <CustomImg src={GithubIcon} size="1rem" name="github-icon" />
            </FooterSocialLink>
            <FooterSocialLink onClick={() => openUrl(twitter)}>
              <CustomImg src={TwitterIcon} size="1rem" name="twitter-icon" />
            </FooterSocialLink>
            <FooterSocialLink onClick={() => openUrl(riot)}>
              <CustomImg src={RiotIcon} size="1rem" name="riot-icon" />
            </FooterSocialLink>

          </FooterSocial>
          <FooterTerms variant="subtitle2">
            <FooterLink onClick={() => openUrl(termsOfService)}>
              Terms of Service
            </FooterLink>
          </FooterTerms>
          <FooterPolicy variant="subtitle2">
            <FooterLink onClick={() => openUrl(privacyPolicy)}>
              Privacy Policy
            </FooterLink>
          </FooterPolicy>
        </FooterList>
      </FooterContainer>
    </>
  );
};
export default Footer;
