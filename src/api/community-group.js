import { createSlice } from '@reduxjs/toolkit';

export const CommunityGroupApi = createSlice({
    name: 'communityGroup',
    initialState: {
        group: [
            {
                title: 'Gated Communities',
                seoUrl: 'gated-communities',
                subTitle: 'Naples Bonita Springs Estero',
                description: "Gated Communities offer security and privacy to homeowners and residents.",
                image: "https://nosnow-news-pdfs.s3.us-west-2.amazonaws.com/gatedcommunity.webp",
                url: "https://nosnownaples.com/community/group/naples-bonita-springs-estero-gated-communities",
            },
            {
                title: 'Non Gated Communities',
                seoUrl: 'non-gated-communities',
                subTitle: 'Bonita Springs Estero',
                description: "Non gated communities lend to a more northern lifestyle for homeowners.",
                image: "https://nosnow-news-pdfs.s3.us-west-2.amazonaws.com/nongatedcommunity.webp",
                url: "https://nosnownaples.com/community/group/naples-bonita-springs-estero-non-gated-communities",
            },
            {
                title: 'Golf Communities',
                seoUrl: 'golf-communities',
                subTitle: 'Naples Real Estate',
                description: "Home to golf course in the country",
                image: "https://nosnow-news-pdfs.s3.us-west-2.amazonaws.com/golfcommunity.webp",
                url: "https://nosnownaples.com/community/group/golf-communities-naples-real-estate",
            },
            {
                title: 'Luxury Golf Communities',
                seoUrl: 'luxury-golf-communities',
                subTitle: 'Bonita Springs Estero',
                description: "Florida lifestyle with luxury homes",
                image: "https://nosnow-news-pdfs.s3.us-west-2.amazonaws.com/lgolfcommunity.webp",
                url: "https://nosnownaples.com/community/group/luxury-golf-communities-bonita-springs-estero-naples-real-estate",
            },
            {
                title: 'Gold Membership Included',
                seoUrl: 'gold-membership-included',
                subTitle: "Bundled golf communities in SW FL",
                description: 'Bundled golf communities in Southwest Florida',
                image: "https://nosnow-news-pdfs.s3.us-west-2.amazonaws.com/goldmembership.webp",
                url: "https://nosnownaples.com/community/group/golf-membership-included-bundled-golf-communities-in-southwest-florida",
            },
            {
                title: 'Boating & Gulf Access',
                seoUrl: 'boating-gulf-access',
                subTitle: 'Water, Canal, Beach front homes',
                description: "Water front, Canal front, Beach front homes,",
                image: "https://nosnow-news-pdfs.s3.us-west-2.amazonaws.com/boating.webp",
                url: "https://nosnownaples.com/community/group/boating-gulf-access-waterfront-canal-front-beach-homes-naples",
            },
            {
                title: 'Beach Front Condos',
                seoUrl: 'beach-front-condos',
                subTitle: 'Sunset water views',
                description: "Sunset and water views draw people to the coastline.",
                image: "https://nosnow-news-pdfs.s3.us-west-2.amazonaws.com/beachcondo.webp",
                url: "https://nosnownaples.com/community/group/beach-front-condo-sunset-water-views-naples-real-estate",
            },
            {
                title: 'Beachfront Living',
                seoUrl: 'beach-front-living',
                subTitle: 'Sunset views & Gulf vistas',
                description: "Sunset views and Gulf vistas are breathtaking",
                image: "https://nosnow-news-pdfs.s3.us-west-2.amazonaws.com/beachliving.webp",
                url: "https://nosnownaples.com/community/group/beachfront-living-sunset-views-gulf-vistas-naples-real-estate",
            },
            {
                title: 'Waterfront Locations',
                seoUrl: 'water-front-locations',
                subTitle: 'Within One Mile of the Beach',
                description: "Within One Mile of the Beach",
                image: "https://nosnow-news-pdfs.s3.us-west-2.amazonaws.com/waterfront.webp",
                url: "https://nosnownaples.com/community/group/waterfront-locations-within-one-mile-of-the-beach-naples",
            },
            {
                title: 'Estate Homes',
                seoUrl: 'estate-homes',
                subTitle: 'Estate Homes, If you need more space',
                description: "Estate Homes are for you if you need a little more space",
                image: "https://nosnow-news-pdfs.s3.us-west-2.amazonaws.com/estatehomes.webp",
                url: "https://nosnownaples.com/community/group/estate-homes-are-for-more-space-naples-real-estate",
            }
        ],
        block: [
            {
                title: "Residentials",
                stats: [
                    {
                        title: "Communities", 
                        value: "178"
                    },
                    {
                        title: "Properties", 
                        value: "946"
                    },
                    {
                        title: "New Construction", 
                        value: "42"
                    }
                ]
            },
            {
                title: "Lots and Land",
                stats: [
                    {
                        title: "Communities", 
                        value: "52"
                    },
                    {
                        title: "Properties", 
                        value: "151"
                    }
                ]
            }
        ]
    },
    reducers: {
        setKeyword: (state, action) => {
            return{
                ...state,
                keyword:action.payload
            }
            
        }
    },
})

export const { 
    setKeyword
 } = CommunityGroupApi.actions

export default CommunityGroupApi.reducer