export const sitesConfig = [
    {
        name: "amazon",
        pages: [
            {
                name: "home",
                url: "https://www.amazon.com/",
                elementsToScreenshot: [
                    'body'
                ],
                elementsToRemove: [

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
                name: "todays' deals",
                url: "https://www.amazon.com/international-sales-offers/b/?ie=UTF8&node=15529609011&ref_=nav_cs_gb_intl",
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