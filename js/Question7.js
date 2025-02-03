function getweekDays()
{
  

let weekday=document.getElementById("weekd").value;
 switch (parseInt(weekday)) {
  case 1:
    day = "Sunday";
    alert(day+ " First day of the week");
    break;
  case 2:
    day = "Monday";
     alert(day+ " second day of the week");
    break;
  case 3:
     day = "Tuesday";
      alert(day+ " third day of the week");
    break;
  case 4:
    day = "Wednesday";
    alert(day+ " fourth day of the week");
    break;
  case 5:
    day = "Thursday";
     alert(day+ " fifth day of the week");
    break;
  case 6:
    day = "Friday";
     alert(day+ " six day of the week");
    break;
  case 7:
    day = "Saturday";
      alert(day+ " ending of the week");
    }

}