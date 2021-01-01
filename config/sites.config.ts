export const sitesConfig = [
    {
        name: "batchrank",
        pages: [
            {
                name: "home",
                url: "http://localhost:8000/",
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
                url: "http://localhost:8000/blog",
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