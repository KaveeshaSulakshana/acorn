export const homePageQuery = `
  *[_type == "home"][0] {
    _id,
    slides[] {
      _key,
      image {
        asset-> {
          url,
          _id
        },
        alt
      },
      title,
      description,
      buttonText,
      buttonLink
    },
    services[] {
      _key,
      image {
        asset-> {
          url,
          _id
        },
        alt
      },
      title,
      description,
      link
    },
    offers {
      title,
      description,
      items[] {
        _key,
        title,
        slug {
          current
        },
        image {
          asset-> {
            url,
            _id
          },
          alt
        },
        topRated,
        duration,
        guests,
        price,
        inclusionCard
      }
    },
    testimonials {
      title,
      description,
      items[] {
        _key,
        title,
        description,
        name,
        rate
      }
    }
  }
`;


export const corporateTravelQuery = `*[_type == "corporateTravel"][0] {
  _id,
  hero {
    title,
    description,
    image {
      asset-> {
        _id,
        url
      }
    },
    buttonText[] {
      title,
      link
    }
  },
  corporateTravel {
    title,
    description,
    slides[] {
      url {
        asset-> {
          _id,
          url
        },
        alt
      },
      title
    }
  },
  parallax {
    title,
    description,
    image {
      asset-> {
        _id,
        url
      }
    }
  },
  miceTravel {
    title,
    description,
    slides[] {
      url {
        asset-> {
          _id,
          url
        },
        alt
      },
      title
    }
  }
}`;


export const leisureTravelQuery = `*[_type == "leisureTravel"][0] {
  _id,
  hero {
    title,
    description,
    image {
      asset-> {
        _id,
        url
      }
    },
    buttonText[] {
      title,
      link
    }
  },
  sections[] {
    title,
    description,
    logo {
      asset-> {
        _id,
        url
      },
      alt
    },
    image {
      asset-> {
        _id,
        url
      },
      alt
    },
    buttonText,
    buttonLink,
    sectionLink,
    travelServices[] {
      url {
        asset-> {
          _id,
          url
        },
        alt
      },
      title,
      isBigger
    }
  },
  parallax {
    title,
    description,
    image {
      asset-> {
        _id,
        url
      }
    }
  }
}`;


export const studentTravelQuery = `
  *[_type == "studentTravel"][0] {
    _id,
    hero {
      title,
      description,
      buttonText[] {
        title,
        link
      },
      image {
        asset-> {
          _id,
          url
        }
      }
    },
    featuresSection {
      title,
      description,
      travelServices[] {
        title,
        isBigger,
        url {
          asset-> {
            _id,
            url
          },
          alt
        }
      }
    },
    parallax {
      title,
      description,
      image {
        asset-> {
          _id,
          url
        }
      }
    }
  }
`;


export const visaQuery = `
  *[_type == "visa"][0] {
    _id,
    hero {
      title,
      description,
      buttonText[] {
        title,
        link
      },
      image {
        asset-> {
          _id,
          url
        }
      }
    },
    visaSection {
      title,
      description,
      travelServices[] {
        title,
        isBigger,
        url {
          asset-> {
            _id,
            url
          },
          alt
        }
      }
    },
    parallax {
      title,
      description,
      image {
        asset-> {
          _id,
          url
        }
      }
    }
  }
`;


export const aboutUsQuery = `
  *[_type == "aboutUs"][0] {
    _id,
    hero {
      title,
      description,
      buttonText[] {
        title,
        link
      },
      image {
        asset-> {
          _id,
          url
        }
      }
    },
    aboutContent {
      title,
      description,
      image {
        asset-> {
          _id,
          url
        },
        alt
      }
    },
    brandPromise {
      title,
      description,
      featuresTitle,
      features,
      image {
        asset-> {
          _id,
          url
        },
        alt
      }
    },
    branches[] {
      title,
      address,
      phone,
      emails,
      emergencyPhone
    },
    strengthsSection {
      strengthsTitle,
      strengthsDescription,
      strengths[] {
        title,
        description,
        icon {
          asset-> {
            _id,
            url
          }
        }
      }  
    }
  }
`;

export const flightBookingQuery = `
  *[_type == "flightBooking"][0] {
    name,
    hero {
      title,
      description,
      image {
        asset-> {
          url
        },
        alt
      },
      buttonText[] {
        title,
        link
      }
    },
    offers {
      title,
      description,
      items[] {
        _key,
        title,
        slug {
          current
        },
        image {
          asset-> {
            url,
            _id
          },
          alt
        },
        topRated,
        contactDetails {
          phone,
          emergencyPhone,
          email
        }
      }
    },
    featuresSection {
      title,
      description,
      travelServices[] {
        url {
          asset-> {
            url
          },
          alt
        },
        title,
        isBigger
      }
    },
    parallax {
      title,
      description,
      image {
        asset-> {
          url
        }
      }
    },
    travelAgentSection {
      title,
      description,
      image {
        asset-> {
          url
        },
        alt
      }
    }
  }
`;


export const contactUsQuery = `*[_type == "contactUs"][0] {
  hero {
      title,
      description,
      image {
        asset-> {
          url
        },
        alt
      },
      buttonText[] {
        title,
        link
      }
  },
  intro {
    title,
    description
  },
  branches[] {
    title,
    address,
    phone,
    email,
    emergencyPhone
  },
  emailInquiries {
    generalInquiries {
      label,
      email
    },
    commentsCompliments {
      label,
      email
    }
  },
  mapEmbed
}`;


export const partnersQuery = `*[_type == "partners"][0] {
  _id,
  title,
  images[] {
    url {
      asset-> {
        _id,
        url
      },
      alt
    }
  }
}`;


export const termsQuery = `
    *[_type == "termsAndConditions"][0]{
      title,
      body
    }
  `;

export const privacyQuery = `
    *[_type == "privacyAndPolicy"][0]{
      title,
      body
    }
  `;


export const offerDetailsQuery = `
  *[_type == "offerDetail" && slug.current == $slug][0] {
    title,
    slug,
    hero {
      title,
      description,
      image {
        asset-> {
          _id,
          url
        }
      },
      buttonText[] {
        title,
        link
      }
    },
    packageDescription,
    duration,
    guests,
    price,
    inclusions,
    terms,
    contactDetails {
      phone,
      emergencyPhone,
      email
    },
    topRated,
    seo {
      title,
      description,
      keywords,
      ogTitle,
      ogDescription,
      ogImage {
        asset->{
          _id,
          url
        },
        hotspot,
        crop
      }
    }
  }
`;


export const GET_SEO = `*[_type == "seo" && page == $page][0] {
    title,
    description,
    keywords,
    ogTitle,
    ogDescription,
    ogImage,
    canonicalUrl
  }`
;


export const FOOTER_QUERY = `
  *[_type == "footer"][0] {
    logo {
      asset->{
        _id,
        url
      },
      alt
    },
    description,
    certifications[] {
      asset->{
        _id,
        url
      },
      alt
    },
    quickLinks[] {
      label,
      href
    },
    ourServices[] {
      label,
      href
    },
    contactInfo[] {
      type,
      icon {
        asset->{
          _id,
          url
        },
        alt
      },
      value,
      linkPrefix
    },
    socialLinks[] {
      platform,
      iconSvg,
      url
    },
    copyrightText,
    developedBy,
    bottomLinks[] {
      label,
      href
    },
    favicon {
      asset->{
        _id,
        url
      },
      alt
    },
    headerScripts,
    footerScripts
  }
`;
