const timeTable = [
    {
      "title": "Work",
      "timeframes": {
        "daily": {
          "current": 5,
          "previous": 7
        },
        "weekly": {
          "current": 32,
          "previous": 36
        },
        "monthly": {
          "current": 103,
          "previous": 128
        }
      }
    },
    {
      "title": "Play",
      "timeframes": {
        "daily": {
          "current": 1,
          "previous": 2
        },
        "weekly": {
          "current": 10,
          "previous": 8
        },
        "monthly": {
          "current": 23,
          "previous": 29
        }
      }
    },
    {
      "title": "Study",
      "timeframes": {
        "daily": {
          "current": 0,
          "previous": 1
        },
        "weekly": {
          "current": 4,
          "previous": 7
        },
        "monthly": {
          "current": 13,
          "previous": 19
        }
      }
    },
    {
      "title": "Exercise",
      "timeframes": {
        "daily": {
          "current": 1,
          "previous": 1
        },
        "weekly": {
          "current": 4,
          "previous": 5
        },
        "monthly": {
          "current": 11,
          "previous": 18
        }
      }
    },
    {
      "title": "Social",
      "timeframes": {
        "daily": {
          "current": 1,
          "previous": 3
        },
        "weekly": {
          "current": 5,
          "previous": 10
        },
        "monthly": {
          "current": 21,
          "previous": 23
        }
      }
    },
    {
      "title": "Self Care",
      "timeframes": {
        "daily": {
          "current": 0,
          "previous": 1
        },
        "weekly": {
          "current": 2,
          "previous": 2
        },
        "monthly": {
          "current": 7,
          "previous": 11
        }
      }
    }
  ]

const daily = document.getElementById("daily");
const weekly = document.getElementById("weekly");
const monthly = document.getElementById("monthly");


daily.addEventListener("click", () => {
    
    for(let i=0;i<6;i++){
        if(timeTable[i].timeframes.daily.current === 1){
            document.getElementById(`${i}`).querySelector("h4").textContent = timeTable[i].timeframes.daily.current + "hr";
        }
        else{
            document.getElementById(`${i}`).querySelector("h4").textContent = timeTable[i].timeframes.daily.current + "hrs";
        }
        if(timeTable[i].timeframes.daily.previous === 1){
            document.getElementById(`${i}`).querySelector("span").textContent = timeTable[i].timeframes.daily.previous + "hr";
        }
        else{
            document.getElementById(`${i}`).querySelector("span").textContent = timeTable[i].timeframes.daily.previous + "hrs";
        }
        
    }
    daily.style.color = 'white';
    weekly.style.color = "hsl(235, 45%, 61%)";
    monthly.style.color = "hsl(235, 45%, 61%)";

})
weekly.addEventListener("click", () => {
    
    for(let i=0;i<6;i++){
        if(timeTable[i].timeframes.weekly.current === 1){
            document.getElementById(`${i}`).querySelector("h4").textContent = timeTable[i].timeframes.weekly.current + "hr";
        }
        else{
            document.getElementById(`${i}`).querySelector("h4").textContent = timeTable[i].timeframes.weekly.current + "hrs";
        }
        if(timeTable[i].timeframes.weekly.previous === 1){
            document.getElementById(`${i}`).querySelector("span").textContent = timeTable[i].timeframes.weekly.previous + "hr";
        }
        else{
            document.getElementById(`${i}`).querySelector("span").textContent = timeTable[i].timeframes.weekly.previous + "hrs";
        }
        
    }
    daily.style.color = 'hsl(235, 45%, 61%)';
    weekly.style.color = "white";
    monthly.style.color = "hsl(235, 45%, 61%)";

})
monthly.addEventListener("click", () => {
    
    for(let i=0;i<6;i++){
        if(timeTable[i].timeframes.monthly.current === 1){
            document.getElementById(`${i}`).querySelector("h4").textContent = timeTable[i].timeframes.monthly.current + "hr";
        }
        else{
            document.getElementById(`${i}`).querySelector("h4").textContent = timeTable[i].timeframes.monthly.current + "hrs";
        }
        if(timeTable[i].timeframes.monthly.previous === 1){
            document.getElementById(`${i}`).querySelector("span").textContent = timeTable[i].timeframes.monthly.previous + "hr";
        }
        else{
            document.getElementById(`${i}`).querySelector("span").textContent = timeTable[i].timeframes.monthly.previous + "hrs";
        }
        
    }
    daily.style.color = 'hsl(235, 45%, 61%)';
    weekly.style.color = "hsl(235, 45%, 61%)";
    monthly.style.color = "white";

})
