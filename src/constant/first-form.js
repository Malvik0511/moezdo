export const fields = {
    "main":{
        "title":"",
        "subtitle":"",
        "description":"",
        "groups": [
            {
                "fields":[
                    {
                        "type":"Text",
                        "value":"",
                        "title":"Имя",
                        "id":"name",
                        "placeholder":"Иван",
                        "validators":[
                            {
                                "type":"maxLength",
                                "value":255,
                            }, {
                                'type': "required"
                            }
                        ]
                    },
                    {
                        "type":"Text",
                        "value":"",
                        "title":"Фамилия",
                        "id":"sourName",
                        "placeholder":"Иванов",
                        "validators":[
                            {
                                "type":"maxLength",
                                "value":255,
                            }, {
                                'type': "required"
                            }
                        ]
                    }
                ]
            }, {
                "fields":[
                    {
                        "type":"Phone",
                        "value":"",
                        "title":"Телефон",
                        "id":"phone",
                        "placeholder":"+79046524783",
                        "validators":[
                            {
                                'type': "required"
                            },
                            {
                                "type": 'includeReg',
                                "value":/^\+?7(\d{10})$/,
                                "message":"введен некорректный номер"
                            }
                        ]
                    },
                ]
            },
            {
                "fields":[
                    {
                        "value":"",
                        "title":"Email",
                        "id":"addressTo",
                        "placeholder":"Example@example.com",
                        "validators":[
                            {
                                "type":"required",
                            },
                            {
                                "type":"includeReg",
                                "value": /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/,
                                "message":"В поле введен некорректный символ"
                            }
                        ],
                        "type":"Email"
                    }
                ]
            }
        ],
    },
}