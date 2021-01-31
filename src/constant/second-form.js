export const fields = {
    "main":{
        "title":"",
        "subtitle":"",
        "description":"",
        "groups": [
            {
                "fields":[
                    {
                        "type":"Radio",
                        "value":"Доставка",
                        "title":"",
                        "id":"type",
                        "placeholder":"",
                        "options": [
                            {
                                title: "Доставка",
                                value: "Доставка"
                            },
                            {
                                title: "Самовывоз",
                                value: "Самовывоз"
                            }
                        ],
                        "validators":[

                        ]
                    },
                ]
            },
            {
                "fields":[
                    {
                        "type":"Select",
                        "value":"Россия",
                        "title":"Страна",
                        "id":"country",
                        "placeholder":"Выберите значение",
                        "options": [
                            {
                                title: "Россия",
                                value: "Россия"
                            },
                            {
                                title: "Белорусия",
                                value: "Белорусия"
                            }
                        ],
                        "validators":[
                            {
                                'type': "required"
                            }
                        ],
                        "visible": {
                            id: "type",
                            regExp: "Доставка"
                        }
                    },
                    {
                        "type":"Text",
                        "value":"",
                        "title":"Страна",
                        "id":"citi",
                        "placeholder":"Москва",
                        "validators":[
                            {
                                "type":"maxLength",
                                "value":255,
                            }, {
                                'type': "required"
                            }
                        ],
                        "visible": {
                            id: "type",
                            regExp: "Доставка"
                        }
                    },
                    {
                        "type":"Text",
                        "value":"",
                        "title":"Индекс",
                        "id":"index",
                        "placeholder":"398000",
                        "validators":[
                            {
                                "type":"mustBeNumber"
                            },
                            {
                                "type":"strictLength",
                                "value":6,
                            }, {
                                'type': "required"
                            }
                        ],
                        "visible": {
                            id: "type",
                            regExp: "Доставка"
                        }
                    }

                ]
            }, {
                "fields":[
                    {
                        "type":"Text",
                        "value":"",
                        "title":"Адрес",
                        "id":"address",
                        "placeholder":"г. Москва, ул. Космонавтов, 14/5",
                        "validators":[
                            {
                                "type":"maxLength",
                                "value":255,
                            }, {
                                'type': "required"
                            }
                        ],
                        "visible": {
                            id: "type",
                            regExp: "Доставка"
                        }
                    },
                ]
            },
            {
                "fields":[
                    {
                        "value":"",
                        "title":"Дата доставки",
                        "id":"deliveryDate",
                        "placeholder":"24/05/2017",
                        "validators":[
                            {
                                "type":"required",
                            },
                            {
                                "type":"includeReg",
                                "value": /^(?=\d{2}([-.,\/])\d{2}\1\d{4}$)(?:0[1-9]|1\d|[2][0-8]|29(?!.02.(?!(?!(?:[02468][1-35-79]|[13579][0-13-57-9])00)\d{2}(?:[02468][048]|[13579][26])))|30(?!.02)|31(?=.(?:0[13578]|10|12))).(?:0[1-9]|1[012]).\d{4}$/,
                                "message":"В поле введен некорректный символ"
                            }
                        ],
                        "type":"Text",
                        "visible": {
                            id: "type",
                            regExp: "Доставка"
                        }
                    }
                ]
            },
            {
                "fields":[
                    {
                        "value":"",
                        "title":"Комментарий к заказу",
                        "id":"comment",
                        "placeholder":"ваш комментарий здесь...",
                        "validators":[

                        ],
                        "type":"TextArea"
                    }
                ]
            }
        ],
    },
}