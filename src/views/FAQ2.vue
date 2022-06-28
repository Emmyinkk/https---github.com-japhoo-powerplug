<template>
<Navbar />
    <div class="faq_wrapper">
        <h1>Frequently asked questions.</h1>
        <h3>TOKEN SERVICES FAQs</h3>
        <div class="faq_field_wrap">
            <div class="faq_field" v-for="(faq, i) in faqBase" 
            :key="i">
                <div class="open_faq" @click="cloaseAllFaq(faq)">
                    <h4>
                        {{ faq.q }}
                        <i class="ri-add-line" :class="faq.open ? 'rotate' :
                        ''"></i>
                    </h4>
                    <p class="invisible" :class="faq.open ? 'visible' :''">
                        {{ faq.a }}
                    </p>
                </div>
            </div>
        </div>
        <h3>Meter FAQs</h3>
        <div class="faq_field_wrap">
            <div class="faq_field" v-for="(faq, i) in faqBase2" 
            :key="i">
                <div class="open_faq" @click="cloaseAllFaq2(faq)">
                    <h4>
                        {{ faq.q2 }}
                        <i class="ri-add-line" :class="faq.open2 ? 'rotate' :
                        ''"></i>
                    </h4>
                    <p class="invisible" :class="faq.open2 ? 'visible' :''">
                        {{ faq.a2 }}
                    </p>
                </div>
            </div>
        </div>
    </div>
<Footer />
</template>

<script>
import {ref} from 'vue'
import Navbar from '@/components/Navbar.vue';
import Footer from '@/components/Footer.vue';

export default {
    components: {
            Navbar,
            Footer
        },
    setup() {
        const faqBase = ref([
            {
                q: 'Is PowerPlug Available In All States?',
                a: 'We currently operate in Ondo, Ekiti. Edo and Delta States at the moment. However, plans are underway to expand our service base to other states in Nigeria.',
                open: false
            },
            {
                q: 'Can I Buy/Pay For Electricity At Any Hour Of The Day?',
                a: 'Absolutely! The powerplug.ng platform is open 24 hours. You can buy and pay for your electricity units anytime, anywhere.',
                open: false
            },
            {
                q: 'How do I get my Token?',
                a: 'Your token Will be sent via SMS, usually within 5mins  - 15 mins (depending on Network provider). The token is also sent via email if provided.Other details of the transaction are also sent to your email. N.B. you might not receive the SMS if your DND (Do Not Disturb) is active',
                open: false
            },
            {
                q: 'I do not Receive SMS and Email',
                a: 'Chat with us using the chat button on the Web Page or App. Kindly contact our support team on 0806-142-9345 or send us an email at support@powerplug.ng. ',
                open: false
            },
            {
                q: 'Why Did My Transaction Fail?',
                a: 'A transaction can fail for several reasons: As a result of bank network issues. Your Bank (Issuer) was inoperative at the point of payment. Kindly contact our 24-hour support team on 0806-142-9345 or send us an email at support@powerplug.ng.',
                open: false
            },
            {
                q: 'What’s The NGN 100 Service Charge For?',
                a: 'The service charge is required to make online transactions possible. It will be deducted from your total payment (if you pay 5000 for Token, your meter will be credited with #4,900).',
                open: false
            },
            {
                q: 'I Was Debited For A Failed Transaction What Can I Do?',
                a: 'Usually, you will receive a reversal from your bank within 24 hours. Contact our 24-hour support team on 0806-142-9345 or send us an email at support@powerplug.ng if you don’t get a reversal.',
                open: false
            },
        ])
        const faqBase2 = ref ([
            {
                q2: 'I Cannot Load My Token?',
                a2: 'Here is a standard process you can follow: Ensure there is power supply in your area; Confirm the phase you are on has power supply; Put off generators and inverters and change over to power supply; Key in the numbers you received as a token and Click on the “Enter” button.',
                open2: false
            },
            {
                q2: 'My Meter Rejected The Token, What Can I Do?',
                a2: 'This could happen as a result of the following reasons: The purchase was for the wrong meter number. Kindly confirm you are loading the token on the right meter. The meter has not yet been activated- An activation code will be required from the distribution company. There has been a change in your tariff index. Kindly contact our 24-hour support team on 0806-142-9345 or send us an email at support@powerplug.ng.',
                open2: false
            },
            {
                q2: 'I Loaded The Token But Electricity Wasn’t Restored',
                a2: 'Ensure That You Input The Token Correctly. Ensure there is power supply in your area; confirm the phase you are on has power supply. A token can only be utilized by a specific meter number. If your keypad displays used after you’ve entered the token, it simply means the token has already been loaded on the meter. Put off generators and inverters and do a change over to confirm power supply. This could also be as a result of technical Fault or loss of phase and Meter entering tamper mode. Kindly contact our 24-hour support team on 0806-142-9345 or send us an email at support@powerplug.ng.',
                open2: false
            },
            {
                q2: 'Can I Load The Token I Purchased On Another Meter?',
                a2: 'A token is generated and encrypted using the unique ID of the meter, token generated can only be used by the specific meter.',
                open2: false
            },
            {
                q2: 'I Bought Token For The Wrong Meter',
                a2: 'A token is generated and encrypted using the unique ID of the prepaid meter number. This is to ensure that the token generated can only be used by the specific meter number it was vended on. You can only load the token digits for the meter number you purchased for. Hence, please confirm your meter number before going ahead to confirm your payment. Kindly contact our 24-hour support team on 0806-142-9345 or send us an email at support@powerplug.ng.',
                open2: false
            },
            {
                q2: 'The Number Of Unit I Got Was Lesser To The Amount Purchased',
                a2: 'It could be as a result of the following: There is a possibility a debt has been recorded on your meter, kindly check your token details for any debt deductions. If the previous payment was inclusive of free units. Kindly check your token details. It could also mean your tariff plan has been changed, check with you distribution company Did you account for the transaction fee while making payment to recharge.',
                open2: false
            },
            {
                q2: 'Why Do I have Debt On My Meter?',
                a2: 'Debt on a meter can occur for several reasons: The cost for the units on a newly installed meter is paid by the customer (as debt) on their first recharge of the meter. Migration of Previous Debt: If the property used an analog meter before the installation of a Prepaid meter, or using the estimated billing (Post Paid) and there was a debt before the installation of the prepaid meter, the debt on the estimated (Postpaid) billing account is migrated to the Prepaid meter account. Penalties: If there was a bypass or illegal connection discovered in the house, the penalty charge is added as debt to the prepaid meter account. Kindly visit the nearest electricity distribution company office to discuss your debt profile. As all meters are domiciled with them.',
                open2: false
            },
            {
                q2: 'I Bought The Same Amount For Two Different Meters But Got Different Units',
                a2: 'It could be as a result of the following: Prepaid meters are charged at different tariff rates (residential R1, commercial meter, industrial etc. are all charged differently. If free units were included on the previous token purchase. The tariff plan index has been changed.',
                open2: false
            },
            {
                q2: 'Can I Cancel A purchase On Power Plug And Get A Refund?',
                a2: 'A generate token can’t be cancelled or retreat, because it’s unique to your meter. Kindly confirm your meter details before purchasing the token, it’s a final sale. Kindly contact our 24-hour support team on 0806-142-9345 or send us an email at support@powerplug.ng.',
                open2: false
            },
            {
                q2: 'What’s The Validity Date Of My Token?',
                a2: 'Validity period for a token is 3 months. However, Meters with series 021, 01011 have to load the first token generated before loading another token.',
                open2: false
            },
            {
                q2: 'How Can I Be A PowerPlug Merchant?',
                a2: 'To be a merchant, kindly send us an email to support@powerplug.ng. We’d have our representative contact you.',
                open2: false
            },
        ])
        const cloaseAllFaq = (item) => {
            if(!item.open) {
                faqBase.value.forEach(el => el.open = false)
            }
            item.open = !item.open
        }
        const cloaseAllFaq2 = (item) => {
            if(!item.open2) {
                faqBase2.value.forEach(el => el.open2 = false)
            }
            item.open2 = !item.open2
        }

        return {faqBase, faqBase2, cloaseAllFaq, cloaseAllFaq2}
    }
}
</script>

<style scoped>
    .faq_wrapper {
        text-align: left;
        width: 85%;
        max-width: 700px; 
        margin: 0 auto;
    }

    .faq_field {
        margin: 10px 0;
    }
    .faq_field_wrapper {
        margin-top: 20px;
    }
    .invisible {
        visibility: hidden;
        opacity: 0;
        height: 0;
        transition: opacity .3s, height .3s, padding 0.3s, visibility .3s;
    }
    .visible {
        visibility: visible;
        height: 70px;
        opacity: 1;
        padding: 5px 0px 100px 0px;
    }
    h1 {
        margin-top: 3em;
        text-align: center;
        color: #D91821;
    }
    h3 {
        font-weight: 700;
        line-height: 202.5%;
        margin-top: 2em; 
    }
    h4 {
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 18px 0px;
        color: #D91821;
    }
    .open_faq {
        cursor: pointer;
    }
    .rotate {
        transform: rotate(45deg);
    }
    .ri-add-line {
        transition: transform 0.3s
    }
    @media only screen and (min-width: 280px) {
        .visible {
            visibility: visible;
            height: 70px;
            opacity: 1;
            padding: 0px 0px 120px 0px;
            font-size: 12px;
        }
    }
        @media only screen and (min-width: 768px) {
        .visible {
            visibility: visible;
            height: 70px;
            opacity: 1;
            padding: 0px 0px 70px 0px;
            font-size: 14px;
        }
    }
</style>
