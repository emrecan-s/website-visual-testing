export const sitesConfig = [
    {
        name: "batchrank",
        pages: [
            {
                name: "home",
                url: "https://batchrank.com/",
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