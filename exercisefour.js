var text;
var timeDay = prompt("What time of day is it? Morning, Noon, or Evening");
switch (timeDay) {
  case "Morning":
    text = "Since its morning, you should be eating breakfast.  We suggest eggs and toast";
    break;
    case "Noon":
      text = "Since its noon, you should be eating lunch. We suggest a salad";
      break;
      case "Evening":
        text = "Since its evening, you should be eating dinner. We suggest eating chicken and rice";
        break;
        default:
        text = "Ive never heard of that time of day!";
        break;
        
}
