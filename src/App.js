import {BrowserRouter, Routes, Route} from "react-router-dom";
import Chart1 from "./components/chart1/chart1";
import Chart2 from "./components/chart2/chart2";
import Chart3 from "./components/chart3/chart3";
import Chart4 from "./components/chart4/chart4";
import Chart5 from "./components/chart5/chart5";
import Chart6 from "./components/chart6/chart6";
import Chart7 from "./components/chart7/chart7";
import Chart8 from "./components/chart8/chart8";
import Chart9 from "./components/chart9/chart9";
import Chart10 from "./components/chart10/chart10";
import Chart11 from "./components/chart11/chart11";
import Chart12 from "./components/chart12/chart12";
import Menu from "./components/menu/menu";
import "./base.scss";
import "./reset.scss";
import "./chart.scss";
import {useEffect, useState} from "react";

function App() {
    const [shownItem, setShownItem] = useState(
        {
            name: "Графік 1",
            link: "/chart1",
            title: "1.\tПротягом наступних десяти років прогнозується зменшення кількості навчальних закладів"
        },
    )
    useEffect(() => {
        const pageURI = window.location.href.split("/");
        const itemToShow = menuList.filter(item => {
            return item.link === `/${pageURI[pageURI.length-1]}`
        });
        setShownItem(itemToShow[0]);
    }, []);


    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const menuList = [
        {
            name: "Графік 1",
            link: "/chart1",
            title: "1.\tПротягом наступних десяти років прогнозується зменшення кількості навчальних закладів"
        },
        {
            name: "Графік 2",
            link: "/chart2",
            title: "2.\tБільшість співробітників отримує зарплату від 10 до 15 тис. гривень"
        },
        {
            name: "Графік 3",
            link: "/chart3",
            title: "3.\tПідвищення ціни на окремі сорти бензину не означає підвищення їх якості"
        },
        {
            name: "Графік 4",
            link: "/chart4",
            title: "4.\tУ вересні рівень плинності кадрів у шести підрозділах був приблизно однаковий"
        },
        {
            name: "Графік 5",
            link: "/chart5",
            title: "5.\tПродавець магазину проводить з клієнтами лише 15% свого робочого часу"
        },
        {
            name: "Графік 6",
            link: "/chart6",
            title: "6.\tРозмір надбавки до зарплати не залежить від трудового стажу"
        },
        {
            name: "Графік 7",
            link: "/chart7",
            title: "7.\tТорік найбільша плинність кадрів спостерігалася у віковій групі від 30 до 35 років"
        },
        {
            name: "Графік 8",
            link: "/chart8",
            title: "8.\tЦентральний регіон займає останнє місце з народжуваності"
        },
        {
            name: "Графік 9",
            link: "/chart9",
            title: "9.\tПрибутковість акцій нашої компанії скорочується"
        },
        {
            name: "Графік 10",
            link: "/chart10",
            title: "10.\tНайбільша частка фондів задіяна у виробництві"
        },
        {
            name: "Графік 11",
            link: "/chart11",
            title: "11.\tСпостерігається зв’язок між доходами і зарплатою"
        },
        {
            name: "Графік 12",
            link: "/chart12",
            title: "12.\tУ серпні два студенти обігнали за успішністю шість інших "
        }
    ];

    const handleChartChange = (value) => {
        setShownItem(value);
        setIsMenuOpen(false)
        console.log(menuList[0].link)
    }

    const onMenuClick = () => {
        console.log("")
        setIsMenuOpen(!isMenuOpen);
    }

    return (
        <div className="app">

            <BrowserRouter>
                <div className={"header"}>
                    <h1>{shownItem.title}</h1>
                    <Menu menuList={menuList}
                          setShownItem={handleChartChange}
                          shownItem={shownItem}
                          isOpen={isMenuOpen}
                          onMenuClick={onMenuClick}
                    />
                </div>


                <Routes>
                    <Route path={menuList[0].link} element={<Chart1/>}></Route>
                    <Route path={menuList[1].link} element={<Chart2/>}></Route>
                    <Route path={menuList[2].link} element={<Chart3/>}></Route>
                    <Route path={menuList[3].link} element={<Chart4/>}></Route>
                    <Route path={menuList[4].link} element={<Chart5/>}></Route>
                    <Route path={menuList[5].link} element={<Chart6/>}></Route>
                    <Route path={menuList[6].link} element={<Chart7/>}></Route>
                    <Route path={menuList[7].link} element={<Chart8/>}></Route>
                    <Route path={menuList[8].link} element={<Chart9/>}></Route>
                    <Route path={menuList[9].link} element={<Chart10/>}></Route>
                    <Route path={menuList[10].link} element={<Chart11/>}></Route>
                    <Route path={menuList[11].link} element={<Chart12/>}></Route>
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
