import {sanityClient} from "./sanity";
import {
    aboutUsQuery, contactUsQuery,
    corporateTravelQuery, flightBookingQuery, FOOTER_QUERY, GET_SEO,
    homePageQuery,
    leisureTravelQuery, offerDetailsQuery, partnersQuery, privacyQuery,
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

export async function getPrivacyData() {
    return sanityClient.fetch(privacyQuery);
}

export async function getMetadata(page: string) {
    return sanityClient.fetch(GET_SEO, {page});
}

export async function getOfferDetailsData(slug: string) {
    return await sanityClient.fetch(offerDetailsQuery, {slug});
}

export async function getFooterData() {
    return sanityClient.fetch(FOOTER_QUERY);
}

