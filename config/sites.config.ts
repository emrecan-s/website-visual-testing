// import { SiteConfig } from "../src/config/siteconfig.interface";

export const sitesConfig = [
    {
        name: "batchrank",
        pages: [
            {
                name: "home",
                url: "https://batchrank.com/",
                elementsToScreenshot: [
                    'body',
                    '.elementor-element-57b04e36',
                    'section.elementor-element-1ad9c154'
                ],
                elementsToRemove: [
                    '.elementor-widget-google_maps',
                    'section.elementor-element-d8bc538'
                ],
                customTestsConfig: [
                    {
                        path: "loads-in-less-than",
                        expectedValue: 2.0,
                        args: {
                            loadEvent: "load"
                        }
                    }
                ]
            },
            {
                name: "FAQ",
                url: "https://batchrank.com/faq",
                elementsToScreenshot: ['body'],
                elementsToRemove: [],
                customTestsConfig: [
                    {
                        path: "has-only-one-h1"
                    },
                    {
                        path: "loads-in-less-than",
                        expectedValue: 2.0,
                        args: {
                            loadEvent: "load"
                        }
                    }
                ]
            }
            
        ]
    }
];