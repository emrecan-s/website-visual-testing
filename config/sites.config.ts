export const sitesConfig = [
    {
        name: "bbc",
        pages: [
            {
                name: "bbc home",
                url: "https://www.bbc.com/",
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
                name: "bbc news ",
                url: "https://www.bbc.com/news",
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