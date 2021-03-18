import React, { useState } from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { Direction, Plan, FAQItem } from "../../types";
import { ReactComponent as PlusIcon } from "../../assets/img/accordion-plus.svg";
import { ReactComponent as MinusIcon } from "../../assets/img/accordion-minus.svg";
export interface FAQProps {
  items: FAQItem[];
}

import {
  Wrapper,
  AccordionDetailsWrapper,
  AccordionWrapper,
  AccordionSummaryWrapper,
} from "./style";

const FAQ: React.FC<FAQProps> = ({ items }) => {
  const [expanded, setExpanded] = useState<string | boolean>(false);
  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };
  return (
    <Wrapper>
      {items.map((item: FAQItem, index: number) => (
        <AccordionWrapper
          expanded={expanded === `panel-${index}`}
          onChange={handleChange(`panel-${index}`)}
          key={`accordion-${index}`}
        >
          <AccordionSummaryWrapper
            expandIcon={
              expanded !== `panel-${index}` ? <PlusIcon /> : <MinusIcon />
            }
            aria-controls={`panel-${index}-content`}
            id={`panel-${index}-header`}
          >
            <Typography>{item.title}</Typography>
          </AccordionSummaryWrapper>
          <AccordionDetailsWrapper>
            <Typography>{item.description}</Typography>
          </AccordionDetailsWrapper>
        </AccordionWrapper>
      ))}
    </Wrapper>
  );
};

export default FAQ;
