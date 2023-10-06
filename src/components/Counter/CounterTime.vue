<template>
	<div class="">
		<span class="px-3 py-2 bg-counter-red rounded-sm  text-white">{{Hours}}</span>
		<span class="mx-2">:</span>
		<span class="px-3 py-2 bg-counter-red rounded-sm text-white">{{Minute}}</span> 
		<span class="mx-2">:</span>
		<span class="px-3 py-2 bg-counter-red rounded-sm text-white">{{Second}}</span></div>
</template>
<script>
export default {
	name:  'CounterTime',
	data(){
		return{
			countDownToTime : new Date("Dec 26, 2023 00:00:00").getTime(),
    // timerOutput: null 
		Hours: null,
		Minute: null,
		Second : null
		}
	},
  methods: {
    startTimer: function() {
      const timeNow = new Date().getTime();
      const timeDifference = this.countDownToTime - timeNow;
      const millisecondsInOneSecond = 1000;
      const millisecondsInOneMinute = millisecondsInOneSecond * 60;
      const millisecondsInOneHour = millisecondsInOneMinute * 60;
      const millisecondsInOneDay = millisecondsInOneHour * 24;
      // const differenceInDays = timeDifference / millisecondsInOneDay;
      const remainderDifferenceInHours = (timeDifference % millisecondsInOneDay) / millisecondsInOneHour;
      const remainderDifferenceInMinutes = (timeDifference % millisecondsInOneHour) / millisecondsInOneMinute;
      const remainderDifferenceInSeconds = (timeDifference % millisecondsInOneMinute) / millisecondsInOneSecond;
      // const remainingDays = Math.floor(differenceInDays);
      const remainingHours = Math.floor(remainderDifferenceInHours);
      const remainingMinutes = Math.floor(remainderDifferenceInMinutes);
      const remainingSeconds =Math.floor(remainderDifferenceInSeconds);
      // this.timerOutput = remainingHours + ":" + remainingMinutes + ": " + remainingSeconds;
			this.Hours = remainingHours;
			this.Minute = remainingMinutes;
			this.Second = remainingSeconds;
    }
  },
  mounted() {
       setInterval(() => { this.startTimer() }, 1000);
    }
}
</script>