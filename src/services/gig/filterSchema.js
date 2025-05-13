
export const filtersSchema = [
    // 1) Logo & Design Services
    {
        key: 'logoOptions',
        label: 'Logo options',
        groups: [
            {
                key: 'logoStyle',
                label: 'Logo style',
                type: 'checkbox',
                options: [
                    { value: 'minimalist', label: 'Minimalist', count: 0 },
                    { value: 'modern', label: 'Modern', count: 0 },
                    { value: 'other', label: 'Other', count: 0 },
                    { value: 'vintage', label: 'Vintage', count: 0 },
                ]
            },
            {
                key: 'serviceOfferings',
                label: 'Service offerings',
                type: 'checkbox',
                options: [
                    { value: 'subscriptions', label: 'Offers subscriptions', count: 0 },
                ]
            },
            {
                key: 'fileFormat',
                label: 'File format',
                type: 'checkbox',
                options: [
                    { value: 'png', label: 'PNG', count: 0 },
                    { value: 'jpeg', label: 'JPEG', count: 0 },
                    { value: 'pdf', label: 'PDF', count: 0 },
                    { value: 'cdr', label: 'CDR', count: 0 },
                    { value: 'eps', label: 'EPS', count: 0 },
                    { value: 'psd', label: 'PSD', count: 0 },
                    { value: 'svg', label: 'SVG', count: 0 },
                    { value: 'other', label: 'Other', count: 0 },
                    { value: 'ai', label: 'AI', count: 0 },
                ]
            },
            {
                key: 'serviceIncludes',
                label: 'Service includes',
                type: 'checkbox',
                options: [
                    { value: 'transparency', label: 'Logo transparency', count: 0 },
                    { value: 'printableFile', label: 'Printable file', count: 0 },
                    { value: 'vectorFile', label: 'Vector file', count: 0 },
                    { value: 'sourceFile', label: 'Include source file', count: 0 },
                ]
            }
        ]
    },

    // 2) Seller Details
    {
        key: 'sellerDetails',
        label: 'Seller details',
        groups: [
            {
                key: 'sellerLevel',
                label: 'Seller level',
                type: 'checkbox',
                options: [
                    { value: 'topRated', label: 'Top Rated Seller', count: 0 },
                    { value: 'newSeller', label: 'New Seller', count: 0 },
                    { value: 'level1', label: 'Level 1', count: 0 },
                    { value: 'level2', label: 'Level 2', count: 0 },
                ]
            },
            {
                key: 'sellerSpeaks',
                label: 'Seller speaks',
                type: 'checkbox',
                options: [
                    { value: 'english', label: 'English', count: 0 },
                    { value: 'hebrew', label: 'Hebrew', count: 0 },
                    { value: 'spanish', label: 'Spanish', count: 0 },
                    { value: 'french', label: 'French', count: 0 },
                    // add more languages 
                ]
            },
            {
                key: 'sellerLocation',
                label: 'Seller lives in',
                type: 'checkbox',
                options: [
                    { value: 'israel', label: 'Israel', count: 0 },
                    { value: 'unitedKingdom', label: 'United Kingdom', count: 0 },
                    { value: 'usa', label: 'United States', count: 0 },
                    { value: 'canada', label: 'Canada', count: 0 },
                    { value: 'australia', label: 'Australia', count: 0 },
                    // add more countries
                ]
            }
        ]
    },

    // 3) Budget
    {
        key: 'budget',
        label: 'Budget',
        groups: [
            {
                key: 'budgetRange',
                label: 'Budget',
                type: 'radio',
                options: [
                    { value: 'value', label: 'Value (Under ₪225)' },
                    { value: 'midRange', label: 'Mid-range (₪225–₪655)' },
                    { value: 'highEnd', label: 'High-end (₪655 & Above)' },
                    { value: 'custom', label: 'Custom', customInput: true },
                ]
            }
        ]
    },

    // 4) Delivery Time
    {
        key: 'deliveryTime',
        label: 'Delivery time',
        groups: [
            {
                key: 'deliveryOptions',
                label: 'Delivery time',
                type: 'radio',
                options: [
                    { value: '24h', label: 'Express 24H' },
                    { value: '3d', label: 'Up to 3 days' },
                    { value: '7d', label: 'Up to 7 days' },
                    { value: 'anytime', label: 'Anytime' },
                ]
            }
        ]
    }
];
