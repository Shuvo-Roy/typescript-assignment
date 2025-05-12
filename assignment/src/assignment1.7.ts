{
    enum Day {
        Monday,
        Tuesday,
        Wednesday,
        Thursday,
        Friday,
        Saturday,
        Sunday
      }
      
      function getDayType(day: Day): string{
        if(day===Day.Friday || day ===Day.Sunday){
            return "Weekend";
        }else{
            return "Weekday";
        }
      }

      console.log(getDayType(Day.Friday)); // Output: "Weekend"
      console.log(getDayType(Day.Monday)); // Output: "Weekday"
      console.log(getDayType(Day.Sunday)); // Output: "Weekend"
}