import * as React from 'react';
import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Grid from '@material-ui/core/Grid';
import { Typography } from '@material-ui/core';
import { loadStripe } from '@stripe/stripe-js';

import {
    getStripeConfig,
    createInvoiceSession,
    createSubscription,
    getAllSubscriptions,
} from '../../reducers/app/thunks';

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
} from './style';
import PriceItem from '../../components/PriceItem';
import FAQ from '../../components/FAQ';
import MembershipCard from '../../components/MembershipCard';
import InvoiceTable from '../../components/InvoiceTable';
import { ReactComponent as CautionIcon } from '../../assets/img/caution.svg';

import { displayTimestamp } from '../../utils/renders';

import { setAccountActiveTab, setSubscriptions } from '../../reducers/app/actions';

import { Direction, Plan, AppState } from '../../types';
import { PaymentSubscriptionStatus } from '../../reducers/app/types';

const faq = [
    {
        title: 'Can I set up recurring payments?',
        description:
            'Currently, we don’t offer recurring payments. When your billing period ends, you will need to renew your subscription.',
    },
    {
        title: 'What type of payments are accepted?',
        description:
            'We’ve partnered with Stripe to enable easy and secure payments using a credit or debit card or supported online wallets like Apple Pay and Google Pay.',
    },
    {
        title: 'Can I downgrade my monthly subscription?',
        description:
            'Once you make a payment for the month, there is no way to downgrade your subscription. Your plan will automatically downgrade to the free tier at the end of the billing cycle if you don’t make another payment.',
    },
];

const plansBg = {
    1: '#2F3035',
    2: 'linear-gradient(90deg, rgba(82, 143, 245, 0.4) 0%, rgba(127, 86, 244, 0.4) 155.82%);'
};

const Account = () => {
    const dispatch = useDispatch();
    const plans = useSelector((state: AppState) => state.payment.plans);
    const activePlan = useSelector((state: AppState) => state.payment.activePlan);
    const invoices = useSelector((state: AppState) => state.payment.invoices);
    const subscriptionsMap = useSelector((state: AppState) => state.payment.subscriptionsMap);
    const subscriptionPro = useSelector((state: AppState) => state.payment.subscriptionPro);
    const accountActiveTab = useSelector((state: AppState) => state.payment.accountActiveTab);
    const userInfo = useSelector((state: AppState) => state.user.userInfo);
    const [stripe, setStripe] = useState<any>(null);
    const proPlanFee = plans.filter((p) => p.id === Plan.Pro)[0]?.price;

    const onTabIDChanged = (event, newValue) => dispatch(setAccountActiveTab(newValue));

    const onMakePayment = async () => {
        if (!stripe) {
            return;
        }

        if (!subscriptionPro) {
            return;
        }

        const { sessionId } = await createInvoiceSession(subscriptionPro.subscriptionId);

        //TODO: Display error message
        const { error } = await stripe.redirectToCheckout({
            sessionId,
        });
    };

    const onUpgrade = async () => {
        if (subscriptionPro && subscriptionPro.status === PaymentSubscriptionStatus.ACTIVE) {
            //TODO: add logic if needed
            return;
        }

        if (subscriptionPro && subscriptionPro.status === PaymentSubscriptionStatus.CREATED) {
            //TODO: add logic if needed
            return;
        }

        await createSubscription();
        const [subs, subsMap, subPro] = await getAllSubscriptions();
        dispatch(setSubscriptions(subs, subsMap, subPro));
    };

    useEffect(() => {
        const initStripe = async () => {
            const { publicKey } = await getStripeConfig();
            const newStripe = await loadStripe(publicKey);
            setStripe(newStripe);
        };
        initStripe();
    }, []);

    return (
        <>
            {activePlan && (
                <Main container justify="center" direction="column">
                    <Title item>
                        <TitleText>Account</TitleText>
                    </Title>
                    <TabContainer>
                        <TabsWrapper
                            value={accountActiveTab}
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
                        hidden={accountActiveTab !== 0}
                        id="account-tabpanel-0"
                        aria-labelledby="account-tab-0"
                    >
                        <BillingInfoWrapper container direction="row">
                            <Grid container className="info">
                                <Grid className="wrapper left">
                                    {activePlan.planId === Plan.Pro && <SubTitle>Current Billing Period Ends</SubTitle>}
                                    <Typography variant="h5">
                                        {activePlan.planId === Plan.Basic
                                            ? 'Not Currently Subscribed'
                                            : displayTimestamp(activePlan.ends)}
                                    </Typography>
                                </Grid>
                                <Grid className="wrapper right">
                                    <SubTitle>Plan Overview</SubTitle>
                                    {activePlan.planId !== Plan.Basic && (
                                        <SmallText className="small">
                                            {`${plans[1].name}: Unlimited Requests`} <br></br>& Monthly Renewal
                                        </SmallText>
                                    )}
                                    {activePlan.planId == Plan.Basic && (
                                        <SmallText className="small">
                                            {`${plans[0].name}: 3,000,000 Requests`}
                                        </SmallText>
                                    )}
                                </Grid>
                                <Grid className="wrapper">
                                    <SubTitle>Invoices Sent to</SubTitle>
                                    <SmallText className="small">{userInfo.email}</SmallText>
                                </Grid>
                            </Grid>
                            <InvoiceTable invoices={invoices} />
                        </BillingInfoWrapper>
                    </TabContent>
                    <TabContent
                        role="tabpanel"
                        hidden={accountActiveTab !== 1}
                        id="account-tabpanel-1"
                        aria-labelledby="account-tab-1"
                    >
                        <Grid container justify="flex-start">
                            <Grid style={{ width: '37rem' }}>
                                <PriceTable>
                                    {plans.map((plan, index) => (
                                        <PriceItem
                                            key={plan.id}
                                            plan={plan.name}
                                            label={
                                                !(plan.price > 0) ? (
                                                    'Free'
                                                ) : (
                                                    <div>
                                                        ${plan.price}
                                                        <span className={'month'}>/month</span>
                                                    </div>
                                                )
                                            }
                                            items={plan.publicDescription.split('|')}
                                            buttonLabel={
                                                activePlan
                                                    ? activePlan.planId === plan.id
                                                        ? 'Your plan'
                                                        : plan.id === 2
                                                        ? !!subscriptionPro ? 'Awaiting payment' : 'Upgrade'
                                                        : ''
                                                    : plan.id === 1
                                                    ? 'Your plan'
                                                    : !!subscriptionPro ? 'Awaiting payment' : 'Upgrade'
                                            }
                                            subscriptionCreated={!!subscriptionPro}
                                            selected={
                                                activePlan
                                                    ? activePlan.planId === plan.id
                                                    : plan.id === 1
                                            }
                                            background={plansBg[plan.id]}
                                            style={{
                                                marginTop: '2rem',
                                            }}
                                            direction={Direction.Row}
                                            onUpgrade={onUpgrade}
                                        />
                                    ))}
                                </PriceTable>
                                <FAQ items={faq} />
                            </Grid>
                            <Grid style={{ width: '27.5rem', marginLeft: '8.75rem' }}>
                                {proPlanFee && (
                                    <MembershipCard
                                        plan={Plan.Pro}
                                        fee={proPlanFee}
                                        disabled={!subscriptionPro}
                                        label={
                                            !subscriptionPro ||
                                            subscriptionPro.status ===
                                                PaymentSubscriptionStatus.CREATED
                                                ? 'Make Payment'
                                                : 'Extend plan'
                                        }
                                        onClick={onMakePayment}
                                    />
                                )}
                                {activePlan.planId === Plan.Pro &&
                                    <Grid>
                                        <Hint style={{ marginTop: '1rem' }}>
                                            Your current billing subscription will{' '}
                                            <span>end on {displayTimestamp(activePlan.ends)}</span>.
                                            Make a payment before your subscription ends to avoid
                                            any disruption to your service.
                                        </Hint>
                                    </Grid>
                                }
                            </Grid>
                        </Grid>
                    </TabContent>
                </Main>
            )}
        </>
    );
};

export default Account;
