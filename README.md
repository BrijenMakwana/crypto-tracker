# Crypto Tracker

<img src="https://github.com/BrijenMakwana/crypto-tracker/blob/main/public/logo512.png" width="200" height="200" style="border-radius:50px;">

Access this site at [cryptocurrency-tracking.vercel.app](https://cryptocurrency-tracking.vercel.app)

## Table of Content:

- [About The App](#about-the-app)
- [Screenshots](#screenshots)
- [Technologies](#technologies-and-tools)
- [Setup](#setup)
- [Approach](#approach)

## About The App

Crypto Tracker is an cryptocurrency tracking website created with React. You can find current values of all cryptocurrency out there. You can find details like value of one unit, total volume, market cap and much more. Market cap is one of the most popular metrics in the industry that is used to gauge the value of an asset. You can use this website to track all cryptocurrency.

## Screenshots

![App Screenshot](https://github.com/BrijenMakwana/crypto-tracker/blob/main/public/screenshot_1.png)
![App Screenshot](https://github.com/BrijenMakwana/crypto-tracker/blob/main/public/screenshot_2.png)

## Technologies and Tools

- React
- Javascript
- CSS styling
- Axios

## Setup

1. Download or clone the repository

2. Run below command to install all the dependency
```
npm i
```

3. Run below command to start the project
```
npm start
```

## Approach

I have used [coingecko](https://www.coingecko.com/en/api/documentation) API to get all cryptocurrency data. Axios is used to call the api. All the data stored in a state. I have created a custom component called coin that display all the crypto data in a row. Then I have used javascript map function to display all the data from that state in coin component.

