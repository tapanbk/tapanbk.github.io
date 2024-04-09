(function () {
    data = [
        {
            'unit_system': 'bigha_system',
            'conversion': {
                'bigha': 400,
                'khatta': 20,
                'sq_m_calculation': {
                    'bigha': 6772.63,
                    'khatta': 338.623,
                    'dhur': 16.93
                },
                'sq_ft_calculation': {
                    'bigha': 72900,
                    'khatta': 3645,
                    'dhur': 182.25
                }
            },
        },
        {
            'unit_system': 'ropani_system',
            'conversion': {
                'ropani': 256,
                'aana': 16,
                'paisa': 4,
                'sq_m_calculation': {
                    'ropani': 508.74,
                    'aana': 31.79,
                    'paisa': 7.95,
                    'dham': 1.99,
                },
                'sq_ft_calculation': {
                    'ropani': 5476,
                    'aana': 342.25,
                    'paisa': 85.56,
                    'dham': 21.39,
                }
            },
        }
    ]


    let unit = 'khatta';
    let value = 20;
    let bigha = 0;
    if(unit === 'khatta'){
        bigha = 0;
    }


})();
