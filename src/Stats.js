import React, { useState, setState, forceUpdate } from "react";
import { DownOutlined, UserOutlined } from "@ant-design/icons";
import {
  Card,
  Typography,
  Col,
  Row,
  Slider,
  Statistic,
  Checkbox,
  Button,
  InputNumber,
  Select,
  Menu,
  Dropdown,
  Space,
} from "antd";
import { Chart as ChartJS, registerables } from "chart.js/auto";
import { Bar } from "react-chartjs-2";
import { statsData } from "./statsData";
import { wait } from "@testing-library/user-event/dist/utils";
import FinalChart from "./FinalChart";

const { Meta } = Card;
const { Title } = Typography;
const { Option } = Select;
export const Stats = () => {
  const fullPlayersList = [
    "messi",
    "cristiano",
    "neymar",
    "maguire",
    "debruyne",
    "hazard",
    "modric",
    "benzema",
    "ramos",
    "mahrez",
    "salah",
    "mbappe",
    "ederson",
    "mane",
  ];
  const playerNames = {
    messi: "Lionel Messi",
    cristiano: "Cristiano Ronaldo",
    neymar: "Neymar Jr",
    salah: "Mohamed Salah",
    mbappe: "Kylian Mbappe",
    mane: "Sadio Mane",
    maguire: "Harry Maguire",
    ederson: "Ederson",
    debruyne: "Kevin De Bruyne",
    modric: "Luka Modric",
    kane: "Harry Kane",
    sterling: "Raheem Sterling",
    benzema: "Karim Benzema",
    hazard: "Eden Hazard",
    ramos: "Sergio Ramos",
    suarez: "Luis Suarez",
    mahrez: "Riyad Mahrez",
  };
  const [chartType, setChartType] = useState(false);
  const [totalRating, setTotalRating] = useState(0);
  const [goals, SetGoals] = useState(0);
  const [shotsOnTarget, SetShotsOnTarget] = useState(0);
  const [assists, SetAssists] = useState(0);
  const [yellowCards, SetYellowCards] = useState(0);
  const [redCards, SetRedCards] = useState(0);
  const [saves, SetSaves] = useState(0);
  const [shots, SetShots] = useState(0);
  const [tackles, SetTackles] = useState(0);
  const [interceptions, SetInterceptions] = useState(0);
  const [fouls, SetFouls] = useState(0);
  const [minutes, SetMinutes] = useState(0);
  const [height, SetHeight] = useState(0);
  const [weight, SetWeight] = useState(0);
  const [age, SetAge] = useState(0);
  const [yearRange, SetYearRange] = useState([2010, 2022]);
  const [perMinute, SetPerMinute] = useState(false);
  const [appearences, SetAppearences] = useState(0);
  const [lineups, SetLineups] = useState(0);
  const [subOn, SetSubOn] = useState(0);
  const [subOff, SetSubOff] = useState(0);
  const [pentaltiesScored, SetPentaltiesScored] = useState(0);
  const [pentaltiesMissed, SetPentaltiesMissed] = useState(0);
  const [pentaltiesSaved, SetPentaltiesSaved] = useState(0);
  const [penaltiesComitted, SetPenaltiesComitted] = useState(0);
  const [penaltiesWon, SetPenaltiesWon] = useState(0);
  const [goalsConceded, SetGoalsConceded] = useState(0);
  const [passes, SetPasses] = useState(0);
  const [keyPasses, SetKeyPasses] = useState(0);
  const [passesAccuracy, SetPassesAccuracy] = useState(0);
  const [duels, SetDuels] = useState(0);
  const [duelsWon, SetDuelsWon] = useState(0);
  const [dribbles, SetDribbles] = useState(0);
  const [dribblesSuccess, SetDribblesSuccess] = useState(0);

  const mainStats = {};
  const secondStats = {};
  const thirdStats = {};
  const secondaryStats = {};
  const fifthStats = {};
  const sixthStats = {};
  const showMoreStats = {};
  const showMoreStats2 = {};
  const showMoreStats3 = {};
  const showMoreStats4 = {};
  mainStats["goals"] = (e) => SetGoals(e);
  mainStats["assists"] = (e) => SetAssists(e);
  secondStats["saves"] = (e) => SetSaves(e);
  secondStats["totalRating"] = (e) => setTotalRating(e);
  thirdStats["appearences"] = (e) => SetAppearences(e);
  thirdStats["fouls"] = (e) => SetFouls(e);
  // secondary
  secondaryStats["shotsOnTarget"] = (e) => SetShotsOnTarget(e);
  secondaryStats["yellowCards"] = (e) => SetYellowCards(e);
  secondaryStats["redCards"] = (e) => SetRedCards(e);
  fifthStats["keyPasses"] = (e) => SetKeyPasses(e);
  fifthStats["tackles"] = (e) => SetTackles(e);
  fifthStats["interceptions"] = (e) => SetInterceptions(e);
  sixthStats["goalsConceded"] = (e) => SetGoalsConceded(e);
  sixthStats["lineups"] = (e) => SetLineups(e);

  sixthStats["duelsWon"] = (e) => SetDuelsWon(e);

  // showmoreStats
  showMoreStats["passesAccuracy"] = (e) => SetPassesAccuracy(e);
  showMoreStats["minutes"] = (e) => SetMinutes(e);
  showMoreStats["shots"] = (e) => SetShots(e);
  showMoreStats["dribbles"] = (e) => SetDribbles(e);

  showMoreStats2["penaltiesComitted"] = (e) => SetPenaltiesComitted(e);
  showMoreStats2["penaltiesWon"] = (e) => SetPenaltiesWon(e);
  showMoreStats2["pentaltiesSaved"] = (e) => SetPentaltiesSaved(e);
  showMoreStats2["pentaltiesScored"] = (e) => SetPentaltiesScored(e);
  showMoreStats3["pentaltiesMissed"] = (e) => SetPentaltiesMissed(e);
  showMoreStats3["passes"] = (e) => SetPasses(e);
  showMoreStats3["subOn"] = (e) => SetSubOn(e);
  showMoreStats3["subOff"] = (e) => SetSubOff(e);
  showMoreStats4["height"] = (e) => SetHeight(e);
  showMoreStats4["weight"] = (e) => SetWeight(e);
  showMoreStats4["duels"] = (e) => SetDuels(e);
  showMoreStats4["age"] = (e) => SetAge(e);

  const params = {
    goals: goals,
    assists: assists,
    saves: saves,
    totalRating: totalRating,
    appearences: appearences,
    fouls: fouls,
    shotsOnTarget: shotsOnTarget,
    yellowCards: yellowCards,
    redCards: redCards,
    keyPasses: keyPasses,
    tackles: tackles,
    interceptions: interceptions,
    goalsConceded: goalsConceded,
    lineups: lineups,
    duelsWon: duelsWon,
    passesAccuracy: passesAccuracy,
    minutes: minutes,
    shots: shots,
    dribbles: dribbles,
    duels: duels,
    penaltiesComitted: penaltiesComitted,
    penaltiesWon: penaltiesWon,
    pentaltiesSaved: pentaltiesSaved,
    pentaltiesScored: pentaltiesScored,
    pentaltiesMissed: pentaltiesMissed,
    passes: passes,
    subOn: subOn,
    subOff: subOff,
    height: height,
    weight: weight,
    age: age,
  };

  const statsNames = {
    goals: "Goals",
    assists: "Assists",
    saves: "Saves",
    totalRating: "Avg Match Rating",
    appearences: "Appearances",
    fouls: "Fouls",
    shotsOnTarget: "S.O.T",
    yellowCards: "Yellows",
    redCards: "Reds",
    keyPasses: "Key Passes",
    tackles: "Tackles",
    interceptions: "Steals",
    goalsConceded: "G. Conceded",
    lineups: "Starts",
    passesAccuracy: "Pass %",
    minutes: "Minutes",
    shots: "Shots",
    dribbles: "Dribbles",
    duels: "Duels",
    duelsWon: "Duels Won",
    penaltiesComitted: "Pk comt'd",
    penaltiesWon: "Pk Won",
    pentaltiesSaved: "Pk Saved",
    pentaltiesScored: "Pk Scor'd",
    pentaltiesMissed: "Pk Missed",
    passes: "Passes",
    subOn: "Sub On",
    subOff: "Sub Off",
    height: "Height",
    weight: "Weight",
    age: "Age",
  };
  const OriginalColorMap = {
    goals: "rgba(251, 133, 0, 1)", // orange
    assists: "rgba(255, 183, 3, 1)", // yellow/orange
    saves: "rgba(142, 202, 230, 1)", // light blue
    totalRating: "rgba(33, 158, 188, 1)", // turquoise
    appearences: "rgba(255, 162, 19, 0.8)", // light orange
    fouls: "rgba(120, 139, 232, 0.8)", // light purple
    shotsOnTarget: "rgba(251, 133, 0, 1)", // orange
    yellowCards: "rgba(255, 183, 3, 1)", // yellow/orange
    redCards: "rgba(142, 202, 230, 1)", // light blue
    keyPasses: "rgba(33, 158, 188, 1)", // turquoise
    tackles: "rgba(255, 162, 19, 0.8)", // light orange
    interceptions: "rgba(120, 139, 232, 0.8)", // light purple
    goalsConceded: "rgba(251, 133, 0, 1)", // orange
    lineups: "rgba(255, 183, 3, 1)", // yellow/orange
    duelsWon: "rgba(142, 202, 230, 1)", // light blue
    passesAccuracy: "rgba(33, 158, 188, 1)", // turquoise
    minutes: "rgba(255, 162, 19, 0.8)", // light orange
    shots: "rgba(120, 139, 232, 0.8)", // light purple
    dribbles: "rgba(251, 133, 0, 1)", // orange
    duels: "rgba(255, 183, 3, 1)", // yellow/orange
    penaltiesComitted: "rgba(142, 202, 230, 1)", // light blue
    penaltiesWon: "rgba(33, 158, 188, 1)", // turquoise
    pentaltiesSaved: "rgba(255, 162, 19, 0.8)", // light orange
    pentaltiesScored: "rgba(120, 139, 232, 0.8)", // light purple
    pentaltiesMissed: "rgba(251, 133, 0, 1)", // orange
    passes: "rgba(255, 162, 19, 0.8)", // light orange
    subOn: "rgba(120, 139, 232, 0.8)", // light purple
    subOff: "rgba(33, 158, 188, 1)", // turquoise
    height: "rgba(255, 183, 3, 1)", // yellow/orange
    weight: "rgba(251, 133, 0, 1)", // orange
    age: "rgba(142, 202, 230, 1)", // light blue
  };

  const inactiveColorMap = {
    500: "rgba(12, 38, 222, 0.6)", // dark blue
    400: "rgba(9, 63, 134, 0.8)", // navy
    300: "rgba(120, 139, 232, 0.8)", // light purple
    200: "rgba(33, 158, 188, 1)", // turquoise
    100: "rgba(142, 202, 230, 1)", // light blue
    0: "rgba(125, 125, 125, 0.44)", //grey
    [-100]: "rgba(255, 207, 116, 0.8)", // light yellow
    [-200]: "rgba(255, 183, 3, 1)", // yellow/orange
    [-300]: "rgba(255, 162, 19, 0.8)", // light orange
    [-400]: "rgba(251, 133, 0, 1)", // orange
    [-500]: "rgba(232, 72, 0, 0.8)", // red
  };
  const paramsColorMap = {
    goals: "rgba(251, 133, 0, 1)", // orange
    assists: "rgba(255, 183, 3, 1)", // yellow/orange
    saves: "rgba(142, 202, 230, 1)", // light blue
    totalRating: "rgba(33, 158, 188, 1)", // turquoise
    appearences: "rgba(255, 162, 19, 0.8)", // light orange
    fouls: "rgba(120, 139, 232, 0.8)", // light purple
    shotsOnTarget: "rgba(251, 133, 0, 1)", // orange
    yellowCards: "rgba(255, 183, 3, 1)", // yellow/orange
    redCards: "rgba(142, 202, 230, 1)", // light blue
    keyPasses: "rgba(33, 158, 188, 1)", // turquoise
    tackles: "rgba(255, 162, 19, 0.8)", // light orange
    interceptions: "rgba(120, 139, 232, 0.8)", // light purple
    goalsConceded: "rgba(251, 133, 0, 1)", // orange
    lineups: "rgba(255, 183, 3, 1)", // yellow/orange
    duelsWon: "rgba(142, 202, 230, 1)", // light blue
    passesAccuracy: "rgba(33, 158, 188, 1)", // turquoise
    minutes: "rgba(255, 162, 19, 0.8)", // light orange
    shots: "rgba(120, 139, 232, 0.8)", // light purple
    dribbles: "rgba(251, 133, 0, 1)", // orange
    duels: "rgba(255, 183, 3, 1)", // yellow/orange
    penaltiesComitted: "rgba(142, 202, 230, 1)", // light blue
    penaltiesWon: "rgba(33, 158, 188, 1)", // turquoise
    pentaltiesSaved: "rgba(255, 162, 19, 0.8)", // light orange
    pentaltiesScored: "rgba(120, 139, 232, 0.8)", // light purple
    pentaltiesMissed: "rgba(251, 133, 0, 1)", // orange
    passes: "rgba(255, 162, 19, 0.8)", // light orange
    subOn: "rgba(120, 139, 232, 0.8)", // light purple
    subOff: "rgba(33, 158, 188, 1)", // turquoise
    height: "rgba(255, 183, 3, 1)", // yellow/orange
    weight: "rgba(251, 133, 0, 1)", // orange
    age: "rgba(142, 202, 230, 1)", // light blue
  };
  for (let param in params) {
    var number = params[param];
    if (number < 0) {
      paramsColorMap[param] =
        inactiveColorMap[Math.round((number - 1) / 100) * 100];
    } else {
      paramsColorMap[param] =
        inactiveColorMap[Math.round((number + 1) / 100) * 100];
    }
  }

  var chartData = {};
  const colorsList = {
    messi: "rgba(255, 183, 3, 1)",
    cristiano: "rgba(251, 133, 0, 1)",
    neymar: "rgba(232, 72, 0, 0.8)",
    salah: "rgba(12, 38, 222, 0.8)",
    mbappe: "rgba(120, 139, 232, 0.8)",
    mane: "rgba(180, 237, 255, 0.8)",
    maguire: "rgba(47, 175, 246, 0.8)",
    ederson: "rgba(255, 207, 116, 0.8)",
    debruyne: "rgba(9, 63, 134, 0.8)",
    mahrez: "rgba(20, 9, 79, 0.8)",
    ramos: "rgba(72, 67, 100, 0.8)",
    benzema: "rgba(5, 13, 48, 0.8)",
    modric: "rgba(186, 154, 50, 0.8)",
    hazard: "rgba(255, 186, 179, 0.8)",
  };
  var marks = {
    2010: "2010",
    2011: "2011",
    2012: "2012",
    2013: "2013",
    2014: "2014",
    2015: "2015",
    2016: "2016",
    2017: "2017",
    2018: "2018",
    2019: "2019",
    2020: "2020",
    2021: "2021",
    2022: "2022",
  };
  const [includedPlayers, setIncludedPlayers] = useState([
    "messi",
    "cristiano",
    "neymar",
    "salah",
  ]);
  const [currSelectedPlayers, SetCurrSelectedPlayers] = useState({
    messi: true,
    cristiano: true,
    neymar: true,
    salah: true,
    debruyne: true,
    maguire: true,
    mbappe: true,
    mane: false,
    ederson: false,
    mahrez: false,
    ramos: false,
    benzema: false,
    modric: false,
    hazard: false,
  });
  const [messi, SetMessi] = useState(true);
  const [cristiano, SetCristiano] = useState(true);
  const [neymar, SetNeymar] = useState(true);
  const [salah, SetSalah] = useState(true);
  const [debruyne, SetDebruyne] = useState(true);
  const [maguire, SetMaguire] = useState(true);
  const [mbappe, SetMbappe] = useState(true);
  const [mane, SetMane] = useState(false);
  const [ederson, SetEderson] = useState(false);
  const [mahrez, SetMahrez] = useState(false);
  const [ramos, SetRamos] = useState(false);
  const [benzema, SetBenzema] = useState(false);
  const [modric, SetModric] = useState(false);
  const [hazard, SetHazard] = useState(false);
  const allPlayers = {
    messi: messi,
    cristiano: cristiano,
    neymar: neymar,
    salah: salah,
    debruyne: debruyne,
    maguire: maguire,
    mbappe: mbappe,
    mane: mane,
    ederson: ederson,
    mahrez: mahrez,
    ramos: ramos,
    benzema: benzema,
    modric: modric,
    hazard: hazard,
  };
  const colorsWhenActive = {
    false: "white",
    true: "rgba(125, 125, 125, 0.44)",
  };

  const playersDict = {};
  playersDict["messi"] = (e) => SetMessi(e);
  playersDict["cristiano"] = (e) => SetCristiano(e);
  playersDict["neymar"] = (e) => SetNeymar(e);
  playersDict["salah"] = (e) => SetSalah(e);
  playersDict["debruyne"] = (e) => SetDebruyne(e);
  playersDict["maguire"] = (e) => SetMaguire(e);
  playersDict["mbappe"] = (e) => SetMbappe(e);
  playersDict["mane"] = (e) => SetMane(e);
  playersDict["ederson"] = (e) => SetEderson(e);
  playersDict["mahrez"] = (e) => SetMahrez(e);
  playersDict["ramos"] = (e) => SetRamos(e);
  playersDict["benzema"] = (e) => SetBenzema(e);
  playersDict["modric"] = (e) => SetModric(e);
  playersDict["hazard"] = (e) => SetHazard(e);

  console.log(allPlayers);

  var playersList = [];
  var playerTotalScores = {};
  for (let player in allPlayers) {
    if (allPlayers[player]) {
      playerTotalScores[player] = 0;
    }
  }

  for (let player in statsData) {
    var playersData = statsData[player];
    if (allPlayers[player] == true) {
      var seriesData = [];
      for (let year in playersData) {
        if (yearRange[1] >= parseInt(year) && yearRange[0] <= parseInt(year)) {
          var yearStats = playersData[year]?.response[0]?.statistics;
          var playerStats = playersData[year]?.response[0]?.player;
          var score = 0;
          var totalMinutes = 0;
          var leagueNames = [];
          var teams = [];
          var leagueCount = 0.000000001;

          score += ((playerStats?.height.substring(0, 4) ?? 0) * height) / 100;
          score += ((playerStats?.weight.substring(0, 3) ?? 0) * weight) / 100;
          score += ((playerStats?.age ?? 0) * age) / 100;

          for (var i = 0; i < yearStats.length; i++) {
            if (yearStats[i]?.games.rating != null) {
              leagueCount += 1;
            }
          }
          for (var i = 0; i < yearStats.length; i++) {
            var finalStats = yearStats[i];
            totalMinutes += finalStats?.games?.minutes ?? 0;

            var goalStats = finalStats?.goals;
            var cardStats = finalStats?.cards;
            if (!leagueNames.includes(finalStats?.league?.name)) {
              leagueNames.push(finalStats?.league?.name);
            }
            if (!teams.includes(finalStats?.team?.name)) {
              teams.push(finalStats?.team?.name);
            }
            score += ((goalStats?.total ?? 0) * goals) / 100;
            score += ((goalStats?.assists ?? 0) * assists) / 100;
            score += ((goalStats?.saves ?? 0) * saves) / 100;
            score += ((cardStats?.yellow ?? 0) * yellowCards) / 100;
            score += ((cardStats?.red ?? 0) * redCards) / 100;
            score += ((finalStats?.shots?.total ?? 0) * shots) / 100;
            score += ((finalStats?.tackles?.total ?? 0) * tackles) / 100;
            score +=
              ((finalStats?.tackles?.interceptions ?? 0) * interceptions) / 100;
            score +=
              ((finalStats?.penalty?.commited ?? 0) * penaltiesComitted) / 100;
            score += ((finalStats?.penalty?.won ?? 0) * penaltiesWon) / 100;
            score +=
              ((finalStats?.penalty?.scored ?? 0) * pentaltiesScored) / 100;
            score +=
              ((finalStats?.penalty?.missed ?? 0) * pentaltiesMissed) / 100;
            score +=
              ((finalStats?.penalty?.saved ?? 0) * pentaltiesSaved) / 100;
            score += ((finalStats?.dribbles?.attempts ?? 0) * dribbles) / 100;
            score +=
              ((finalStats?.dribbles?.success ?? 0) * dribblesSuccess) / 100;
            score +=
              ((finalStats?.games?.appearences ?? 0) * appearences) / 100;
            score += ((finalStats?.passes?.total ?? 0) * passes) / 100;
            score += ((finalStats?.passes?.key ?? 0) * keyPasses) / 100;
            score +=
              ((finalStats?.passes?.accuracy ?? 0) * passesAccuracy) / 100;
            score += ((finalStats?.duels?.total ?? 0) * duels) / 100;
            score += ((finalStats?.games?.lineups ?? 0) * lineups) / 100;
            score += ((finalStats?.duels?.won ?? 0) * duelsWon) / 100;

            score += ((finalStats?.goals?.conceded ?? 0) * goalsConceded) / 100;
            score += ((finalStats?.fouls?.committed ?? 0) * fouls) / 100;
            score += ((finalStats?.games?.minutes ?? 0) * minutes) / 100;
            score += ((finalStats?.shots?.on ?? 0) * shotsOnTarget) / 100;
            score +=
              ((finalStats?.games?.rating ?? 0) * totalRating) /
              100 /
              leagueCount;
          }
          if (perMinute) {
            if (totalMinutes != 0) {
              score = (score / totalMinutes) * 90;
            }
          }

          seriesData.push({ x: year, y: score });
          playerTotalScores[player] += score;
        }
      }
      playersList.push({
        label: playerNames[player],
        data: seriesData,
        tension: 0.1,
        backgroundColor: colorsList[player],
        borderColor: colorsList[player],
        // borderWidth: 4,
      });
    }
    chartData = {
      options: {
        responsive: true,
        plugins: {
          legend: {
            display: true,
            labels: {
              color: "rgba(255, 191, 43, 0.8)",
            },
          },
        },
      },
      datasets: playersList,
    };
  }
  var count = 0;
  var items = Object.keys(playerTotalScores).map(function (key) {
    return [key, playerTotalScores[key]];
  });

  items.sort(function (first, second) {
    return second[1] - first[1];
  });

  return (
    <>
      <div>
        <Row>
          <Col span={24}>.</Col>
        </Row>
      </div>
      <Row gutter={(4, 4)}>
        <Col span={2} />
        <Col span={2}>
          <Row>
            <Dropdown
              arrow="true"
              placement="bottomLeft"
              style={{
                backgroundColor: "rgba(255, 207, 116, 0.8)",
                border: "none",
                paddingTop: "10px",
              }}
              overlay={
                <Menu>
                  {Object.keys(currSelectedPlayers).map((player) => (
                    <Menu.Item
                      onClick={() => playersDict[player](!allPlayers[player])}
                      style={{
                        backgroundColor: colorsWhenActive[!allPlayers[player]],
                      }}
                    >
                      {playerNames[player]}
                    </Menu.Item>
                  ))}
                </Menu>
              }
            >
              <Button
                style={{
                  border: "none",
                  backgroundColor: "black",
                  color: "white",
                }}
              >
                <Space>Players</Space>
              </Button>
            </Dropdown>
          </Row>
        </Col>

        <Col span={12}>
          <Card
            style={{
              borderColor:
                colorsList[
                  Object.keys(playerTotalScores).reduce((a, b) =>
                    playerTotalScores[a] > playerTotalScores[b] ? a : b
                  )
                ],
              width: "100%",
              height: "90%",
              textAlign: "center",
              fontWeight: "bold",
            }}
          >
            The best football player from {yearRange[0]} to {yearRange[1]},
            according to you is{" "}
            {
              playerNames[
                Object.keys(playerTotalScores).reduce((a, b) =>
                  playerTotalScores[a] > playerTotalScores[b] ? a : b
                )
              ]
            }
          </Card>
        </Col>
      </Row>
      <Row gutter={(16, 16)}>
        <Col span={1}></Col>
        <Col span={16}>
          <FinalChart chartData={chartData} chartType={chartType} />
          <Slider
            range={{ draggableTrack: true }}
            marks={marks}
            step={1}
            max={2022}
            min={2010}
            defaultValue={[2022, 2010]}
            onChange={(e) => SetYearRange(e)}
          />
          <Row gutter={(8, 8)}>
            <Col span={3}>
              <Button
                style={{
                  backgroundColor: "rgba(120, 139, 232, 0.8)",
                  fontWeight: "bold",
                  border: "none",
                }}
                onClick={() => SetPerMinute(!perMinute)}
              >
                Per 90
              </Button>
            </Col>
            <Col span={5}>
              <Button
                style={{
                  backgroundColor: "rgba(255, 183, 3, 1)",
                  fontWeight: "bold",
                  border: "none",
                }}
                onClick={() => setChartType(!chartType)}
              >
                Switch Graph Type
              </Button>
            </Col>
            <Col span={12}>
              <Button
                style={{
                  backgroundColor: "rgba(142, 202, 230, 1)",
                  fontWeight: "bold",
                  border: "none",
                }}
                onClick={() => window.location.reload(false)}
              >
                Reset
              </Button>
            </Col>
          </Row>
          <h1> Total Scores </h1>
          <Row gutter={[8, 8]}>
            {items.map((item) => (
              <Col span={4}>
                <Card
                  extra={items.indexOf(item) + 1}
                  size="small"
                  title={playerNames[item[0]]}
                  style={{
                    backgroundColor: colorsList[item[0]],
                    textAlign: "center",
                  }}
                  headStyle={{
                    textAlign: "center",
                    fontWeight: "bold",
                  }}
                >
                  {item[1].toFixed(2)}
                </Card>
              </Col>
            ))}
          </Row>
        </Col>
        <Col span={7}>
          <Row gutter={[16, 16]}>
            {Object.keys(mainStats).map((param) => (
              <>
                <Col span={12}>
                  <Card
                    hoverable={true}
                    title={statsNames[param]}
                    size="small"
                    bordered={false}
                    headStyle={{
                      backgroundColor: paramsColorMap[param],
                      textAlign: "center",
                    }}
                    style={{
                      backgroundColor: paramsColorMap[param],
                      width: "100%",
                      height: "90%",
                    }}
                  >
                    <Slider
                      marks={{
                        0: {
                          style: {
                            color: "white",
                          },
                          label: <strong>{params[param] + "%"}</strong>,
                        },
                      }}
                      step={50}
                      min={-500}
                      max={500}
                      defaultValue={0}
                      key={param}
                      controls={true}
                      onChange={(e) => mainStats[param](e)}
                      style={{ color: "white" }}
                      trackStyle={{
                        backgroundColor: "white",
                        color: "white",
                      }}
                      handleStyle={{
                        color: "white",
                        borderColor: "white",
                      }}
                    />
                  </Card>
                </Col>
              </>
            ))}
          </Row>
          <Row gutter={[16, 16]}>
            {Object.keys(secondStats).map((param) => (
              <>
                <Col span={12}>
                  <Card
                    hoverable={true}
                    title={statsNames[param]}
                    size="small"
                    bordered={false}
                    headStyle={{
                      backgroundColor: paramsColorMap[param],
                      textAlign: "center",
                    }}
                    style={{
                      backgroundColor: paramsColorMap[param],
                      width: "100%",
                      height: "90%",
                    }}
                  >
                    <Slider
                      marks={{
                        0: {
                          style: {
                            color: "white",
                          },
                          label: <strong>{params[param] + "%"}</strong>,
                        },
                      }}
                      step={50}
                      min={-500}
                      max={500}
                      defaultValue={0}
                      key={param}
                      controls={true}
                      onChange={(e) => secondStats[param](e)}
                      trackStyle={{
                        backgroundColor: "white",
                      }}
                      handleStyle={{
                        color: "white",
                        borderColor: "white",
                      }}
                    />
                  </Card>
                </Col>
              </>
            ))}
          </Row>
          <Row gutter={[16, 16]}>
            {Object.keys(thirdStats).map((param) => (
              <>
                <Col span={12}>
                  <Card
                    hoverable={true}
                    title={statsNames[param]}
                    size="small"
                    bordered={false}
                    headStyle={{
                      backgroundColor: paramsColorMap[param],
                      textAlign: "center",
                    }}
                    style={{
                      backgroundColor: paramsColorMap[param],
                      width: "100%",
                      height: "90%",
                    }}
                  >
                    <Slider
                      marks={{
                        0: {
                          style: {
                            color: "white",
                          },
                          label: <strong>{params[param] + "%"}</strong>,
                        },
                      }}
                      step={50}
                      min={-500}
                      max={500}
                      defaultValue={0}
                      key={param}
                      controls={true}
                      onChange={(e) => thirdStats[param](e)}
                      trackStyle={{
                        backgroundColor: "white",
                      }}
                      handleStyle={{
                        color: "white",
                        borderColor: "white",
                      }}
                    />
                  </Card>
                </Col>
              </>
            ))}
          </Row>
          <Row gutter={[8, 8]}>
            {Object.keys(secondaryStats).map((param) => (
              <>
                <Col span={8}>
                  <Card
                    hoverable={true}
                    title={statsNames[param]}
                    size="small"
                    bordered={false}
                    headStyle={{
                      backgroundColor: paramsColorMap[param],
                      textAlign: "center",
                    }}
                    style={{
                      backgroundColor: paramsColorMap[param],
                      width: "100%",
                      height: "90%",
                    }}
                  >
                    <Slider
                      marks={{
                        0: {
                          style: {
                            color: "white",
                          },
                          label: <strong>{params[param] + "%"}</strong>,
                        },
                      }}
                      step={50}
                      min={-500}
                      max={500}
                      defaultValue={0}
                      key={param}
                      controls={true}
                      onChange={(e) => secondaryStats[param](e)}
                      trackStyle={{
                        backgroundColor: "white",
                      }}
                      handleStyle={{
                        color: "white",
                        borderColor: "white",
                      }}
                    />
                  </Card>
                </Col>
              </>
            ))}
          </Row>
          <Row gutter={[8, 8]}>
            {Object.keys(fifthStats).map((param) => (
              <>
                <Col span={8}>
                  <Card
                    hoverable={true}
                    title={statsNames[param]}
                    size="small"
                    bordered={false}
                    headStyle={{
                      backgroundColor: paramsColorMap[param],
                      textAlign: "center",
                    }}
                    style={{
                      backgroundColor: paramsColorMap[param],
                      width: "100%",
                      height: "90%",
                    }}
                  >
                    <Slider
                      marks={{
                        0: {
                          style: {
                            color: "white",
                          },
                          label: <strong>{params[param] + "%"}</strong>,
                        },
                      }}
                      step={50}
                      min={-500}
                      max={500}
                      defaultValue={0}
                      key={param}
                      controls={true}
                      onChange={(e) => fifthStats[param](e)}
                      trackStyle={{
                        backgroundColor: "white",
                      }}
                      handleStyle={{
                        color: "white",
                        borderColor: "white",
                      }}
                    />
                  </Card>
                </Col>
              </>
            ))}
          </Row>
          <Row gutter={[8, 8]}>
            {Object.keys(sixthStats).map((param) => (
              <>
                <Col span={8}>
                  <Card
                    hoverable={true}
                    title={statsNames[param]}
                    size="small"
                    bordered={false}
                    headStyle={{
                      backgroundColor: paramsColorMap[param],
                      textAlign: "center",
                    }}
                    style={{
                      backgroundColor: paramsColorMap[param],
                      width: "100%",
                      height: "90%",
                    }}
                  >
                    <Slider
                      marks={{
                        0: {
                          style: {
                            color: "white",
                          },
                          label: <strong>{params[param] + "%"}</strong>,
                        },
                      }}
                      step={50}
                      min={-500}
                      max={500}
                      defaultValue={0}
                      key={param}
                      controls={true}
                      onChange={(e) => sixthStats[param](e)}
                      trackStyle={{
                        backgroundColor: "white",
                      }}
                      handleStyle={{
                        color: "white",
                        borderColor: "white",
                      }}
                    />
                  </Card>
                </Col>
              </>
            ))}
          </Row>
          <Row gutter={[48, 48]}>
            <Col span={12}>
              <Space></Space>
            </Col>
          </Row>
          <Row>
            <Col span={12}></Col>
            <Dropdown
              placement="bottomLeft"
              overlay={
                <div className="options">
                  <Row>
                    {Object.keys(showMoreStats).map((param) => (
                      <Col span={6}>
                        <Card
                          hoverable={true}
                          title={statsNames[param]}
                          size="small"
                          bordered={false}
                          headStyle={{
                            backgroundColor: paramsColorMap[param],
                            textAlign: "center",
                          }}
                          style={{
                            backgroundColor: paramsColorMap[param],
                            width: "100%",
                            height: "90%",
                          }}
                        >
                          <Slider
                            marks={{
                              0: {
                                style: {
                                  color: "white",
                                },
                                label: <strong>{params[param] + "%"}</strong>,
                              },
                            }}
                            step={50}
                            min={-500}
                            max={500}
                            defaultValue={0}
                            key={param}
                            controls={true}
                            onChange={(e) => showMoreStats[param](e)}
                          />
                        </Card>
                      </Col>
                    ))}
                  </Row>
                  <Row>
                    {Object.keys(showMoreStats2).map((param) => (
                      <Col span={6}>
                        <Card
                          hoverable={true}
                          title={statsNames[param]}
                          size="small"
                          bordered={false}
                          headStyle={{
                            backgroundColor: paramsColorMap[param],
                            textAlign: "center",
                          }}
                          style={{
                            backgroundColor: paramsColorMap[param],
                            width: "100%",
                            height: "90%",
                          }}
                        >
                          <Slider
                            marks={{
                              0: {
                                style: {
                                  color: "white",
                                },
                                label: <strong>{params[param] + "%"}</strong>,
                              },
                            }}
                            step={50}
                            min={-500}
                            max={500}
                            defaultValue={0}
                            key={statsNames[param]}
                            controls={true}
                            onChange={(e) => showMoreStats2[param](e)}
                          />
                        </Card>
                      </Col>
                    ))}
                  </Row>
                  <Row>
                    {Object.keys(showMoreStats3).map((param) => (
                      <Col span={6}>
                        <Card
                          hoverable={true}
                          title={statsNames[param]}
                          size="small"
                          bordered={false}
                          headStyle={{
                            backgroundColor: paramsColorMap[param],
                            textAlign: "center",
                          }}
                          style={{
                            backgroundColor: paramsColorMap[param],
                            width: "100%",
                            height: "90%",
                          }}
                        >
                          <Meta />
                          <Slider
                            marks={{
                              0: {
                                style: {
                                  color: "white",
                                },
                                label: <strong>{params[param] + "%"}</strong>,
                              },
                            }}
                            step={50}
                            min={-500}
                            max={500}
                            defaultValue={0}
                            key={param}
                            controls={true}
                            onChange={(e) => showMoreStats3[param](e)}
                          />
                        </Card>
                      </Col>
                    ))}
                  </Row>
                  <Row>
                    {Object.keys(showMoreStats4).map((param) => (
                      <Col span={6}>
                        <Card
                          hoverable={true}
                          title={statsNames[param]}
                          size="small"
                          bordered={false}
                          headStyle={{
                            backgroundColor: paramsColorMap[param],
                            textAlign: "center",
                          }}
                          style={{
                            backgroundColor: paramsColorMap[param],
                            width: "100%",
                            height: "90%",
                          }}
                        >
                          <Meta />
                          <Slider
                            marks={{
                              0: {
                                style: {
                                  color: "white",
                                },
                                label: <strong>{params[param] + "%"}</strong>,
                              },
                            }}
                            step={50}
                            min={-500}
                            max={500}
                            defaultValue={0}
                            key={param}
                            controls={true}
                            onChange={(e) => showMoreStats4[param](e)}
                          />
                        </Card>
                      </Col>
                    ))}
                  </Row>
                </div>
              }
            >
              <Button
                style={{
                  backgroundColor: "rgba(255, 207, 116, 0.8)",
                  border: "none",
                }}
              >
                <Space>More Stats</Space>
              </Button>
            </Dropdown>
            <Col span={8}></Col>
          </Row>
        </Col>
      </Row>
    </>
  );
};
