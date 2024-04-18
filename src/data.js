const chart_1 = [
    {
        label: "2024",
        value: 14000
    },
    {
        label: "2025",
        value: 13000
    },
    {
        label: "2026",
        value: 12500
    },
    {
        label: "2027",
        value: 12000
    },
    {
        label: "2028",
        value: 11200
    },
    {
        label: "2029",
        value: 11000
    },
    {
        label: "2030",
        value: 10800
    },
    {
        label: "2031",
        value: 10600
    },
    {
        label: "2032",
        value: 10500
    },
    {
        label: "2033",
        value: 10300
    },
    {
        label: "2034",
        value: 10000
    },
];

const chart_2 = [
    {
        label: "до 5 тис.",
        value: 10
    },
    {
        label: "5-10 тис.",
        value: 12
    },
    {
        label: "10-15 тис.",
        value: 25
    },
    {
        label: "15-20 тис.",
        value: 15
    },
    {
        label: "понад 20 тис.",
        value: 5
    }
]

const chart_3 = [
    {
        label: "Wog",
        price: 57,
        quality: 91
    },
    {
        label: "Okko",
        price: 57.99,
        quality: 87
    },
    {
        label: "AMIC",
        price: 55,
        quality: 87
    },
    {
        label: "Shell",
        price: 56.92,
        quality: 70
    },
    {
        label: "KLO",
        price: 57,
        quality: 90    }
]

const chart_4 = [
    {
        label: "Маркетинговий підрозділ",
        value: 15
    },
    {
        label: "Безпековий підрозділ",
        value: 17
    },
    {
        label: "Підрозділ розробки",
        value: 14
    },
    {
        label: "Підрозділ найму",
        value: 16
    },
    {
        label: "Технічний підрозділ",
        value: 18
    },
    {
        label: "Підрозділ бізнес аналітики",
        value: 15
    }
]

const chart_5 = [
    {
        label: "Розкладання товару",
        value: 56
    },
    {
        label: "Робота касиром",
        value: 15
    },
    {
        label: "Робота на складі",
        value: 24
    },
    {
        label: "Обідня перерва",
        value: 5
    },
]

const chart_6 = [];
for (let i = 0; i <= 50; i += Math.floor(Math.random() * (5) + 1)){
    chart_6.push(
        {
            work_experience: i,
            premium: Math.floor(Math.random() * (100-5) + 5)
        }
    )
}

const chart_7 = [
    {
        groupAge: "до 18",
        personnelTurnover: 20
    },
    {
        groupAge: "від 18 до 20",
        personnelTurnover: 10
    },
    {
        groupAge: "від 20 до 25",
        personnelTurnover: 17
    },
    {
        groupAge: "від 25 до 30",
        personnelTurnover: 16
    },
    {
        groupAge: "від 30 до 35",
        personnelTurnover: 32
    },
    {
        groupAge: "від 35 до 40",
        personnelTurnover: 25
    },
    {
        groupAge: "від 40 до 45",
        personnelTurnover: 10
    },
    {
        groupAge: "від 45",
        personnelTurnover: 5
    },
];

const chart_8 = [
    {
        region: "Центральний регіон",
        birthRate: -30
    },
    {
        region: "Західний регіон",
        birthRate: 15
    },
    {
        region: "Північний регіон",
        birthRate: 35
    },
    {
        region: "Північно-західний регіон",
        birthRate: 20
    },
    {
        region: "Східний регіон",
        birthRate: 45
    },
    {
        region: "Південний регіон",
        birthRate: 14
    },
    {
        region: "Південно-східний регіон",
        birthRate: -5
    },
    {
        region: "Північно-східний регіон",
        birthRate: -16
    },
    {
        region: "Південно-західний регіон",
        birthRate: 7
    },
]

const chart_9 = [
    {
        year: 2010,
        stockReturns: 40,
        borderColor: 'rgb(0,176,11)'
    },
    {
        year: 2011,
        stockReturns: 45,
        borderColor: 'rgb(0,176,11)'
    },
    {
        year: 2012,
        stockReturns: 70,
        borderColor: 'rgb(0,176,11)'
    },
    {
        year: 2013,
        stockReturns: 65,
        borderColor: 'rgb(176,0,0)'
    },
    {
        year: 2014,
        stockReturns: 90,
        borderColor: 'rgb(0,176,11)'
    },
    {
        year: 2015,
        stockReturns: 78,
        borderColor: 'rgb(176,0,0)'

    },
    {
        year: 2016,
        stockReturns: 120,
        borderColor: 'rgb(0,176,11)'
    },
    {
        year: 2017,
        stockReturns: 110,
        borderColor: 'rgb(176,0,0)'
    },
    {
        year: 2018,
        stockReturns: 118,
        borderColor: 'rgb(0,176,11)'
    },
    {
        year: 2019,
        stockReturns: 70,
        borderColor: 'rgb(176,0,0)'
    },
    {
        year: 2020,
        stockReturns: 68,
        borderColor: 'rgb(176,0,0)'
    },
    {
        year: 2021,
        stockReturns: 60,
        borderColor: 'rgb(176,0,0)'
    },
    {
        year: 2022,
        stockReturns: 40,
        borderColor: 'rgb(176,0,0)'
    },
    {
        year: 2023,
        stockReturns: 35,
        borderColor: 'rgb(176,0,0)'
    },
    {
        year: 2024,
        stockReturns: 20,
        borderColor: 'rgb(176,0,0)'

    }
];

const chart_10 = [
    {
        department: "Виробничий відділ",
        fondPart: 59
    },
    {
        department: "Маркетинговий відділ",
        fondPart: 20
    },
    {
        department: "Відділ кадрів",
        fondPart: 15
    },
    {
        department: "Дизайнерський відділ",
        fondPart: 3
    },
    {
        department: "Аналітичний відділ",
        fondPart: 2
    },
]

const chart_11 = [
    {
        name: "Андрій",
        salary: 3000,
        income: 4000
    },
    {
        name: "Максим",
        salary: 2800,
        income: 3200
    },
    {
        name: "Анна",
        salary: 400,
        income: 600
    },
    {
        name: "Марія",
        salary: 200,
        income: 400
    },
    {
        name: "Валерія",
        salary: 13000,
        income: 25000
    },
    {
        name: "Дмитро",
        salary: 3500,
        income: 4800
    },{
        name: "Оксана",
        salary: 5000,
        income: 10000
    },
]

const chart_12 = [
    {
        name: "Олександр",
        surname: "Коваленко",
        rate: 98.25
    },
    {
        name: "Наталія ",
        surname: "Іванова",
        rate: 96.3
    },
    {
        name: "Андрій",
        surname: "Петренко",
        rate: 88.7
    },
    {
        name: "Олена",
        surname: "Ковальчук",
        rate: 88.62
    },
    {
        name: "Микола",
        surname: "Шевченко",
        rate: 88.49
    },
    {
        name: "Юлія",
        surname: "Ткаченко",
        rate: 88.49
    },
    {
        name: "Павло",
        surname: "Волков",
        rate: 88.21
    },
    {
        name: "Катерина",
        surname: "Єрмакова",
        rate: 88.21
    },

]
export {chart_1, chart_2, chart_3, chart_4, chart_5, chart_6, chart_7, chart_8, chart_9, chart_10, chart_11, chart_12}

