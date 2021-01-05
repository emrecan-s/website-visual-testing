export const sitesConfig = [
    {
        name: "Gsearch-converged",
        pages: [
            {
                name: "emrecan sanli google search",
                url: "https://www.google.com/search?q=emrecan+sanli",
                elementsToScreenshot: [
                    'body'
                ],
                elementsToRemove: [
                '.hide-focus-ring'
                ]
            },
            {
                name: "converged blog ",
                url: "https://converged.agency/blog/",
                elementsToScreenshot: ['body'],
                elementsToRemove: []
            }
            
        ]
    }
];