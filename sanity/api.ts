import {sanityClient} from "./sanity";
import {
    aboutUsQuery, contactUsQuery,
    corporateTravelQuery, flightBookingQuery,
    homePageQuery,
    leisureTravelQuery, offerDetailsQuery, partnersQuery,
    studentTravelQuery, termsQuery,
    visaQuery
} from "./queries";

export async function getHomePageData() {
    return await sanityClient.fetch(homePageQuery);
}

export async function getCorporatePageData() {
    return sanityClient.fetch(corporateTravelQuery);
}

export async function getLeisurePageData() {
    return sanityClient.fetch(leisureTravelQuery);
}

export async function getStudentPageData() {
    return sanityClient.fetch(studentTravelQuery);
}

export async function getVisaPageData() {
    return sanityClient.fetch(visaQuery);
}

export async function getAboutUsPageData() {
    return sanityClient.fetch(aboutUsQuery);
}

export async function getFlightBookingPageData() {
    return sanityClient.fetch(flightBookingQuery);
}

export async function getContactUsPageData() {
    return sanityClient.fetch(contactUsQuery);
}

export async function getPartnerData() {
    return sanityClient.fetch(partnersQuery);
}

export async function getTermsData() {
    return sanityClient.fetch(termsQuery);
}

export async function getOfferDetailsData(slug: string) {
    return await sanityClient.fetch(offerDetailsQuery, {slug});
}

