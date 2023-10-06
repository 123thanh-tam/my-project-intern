<template>
	<div class="flex bg-counterGlobalBg justify-around px-3 py-2 rounded-md">
			<div>
				<span class="w-12 h-12 leading-44px inline-block text-center text-3xl font-bold rounded-md text-white bg-counterGlobal opacity-80 mr-3">{{Day}}</span>
				<p class="ml-2 text-white text">Ngày</p>
			</div>
			<div>
				<span class="w-12 h-12 leading-44px inline-block font-bold text-3xl text-center rounded-md text-white bg-counterGlobal opacity-80 mr-3">{{Hours}}</span>
				<p class="ml-2 text-white text">Giờ</p>
			</div>
			<div>
				<span class="w-12 h-12 leading-44px inline-block font-bold text-3xl text-center rounded-md text-white bg-counterGlobal opacity-80 mr-3">{{Minute}}</span> 
				<p class="ml-2 text-white text">Phút</p>
			</div>
			<div>
				<span class="w-12 h-12 leading-44px inline-block font-bold text-3xl text-center rounded-md text-white bg-counterGlobal opacity-80">{{Second}}</span>
				<p class="ml-2 text-white text">Giây</p>
			</div>
		</div>
</template>
<script>
export default {
	name:  'CounterTime',
	data(){
		return{
			countDownToTime : new Date("Dec 26, 2023 00:00:00").getTime(),
    timerOutput: null ,
		Hours: null,
		Minute: null,
		Second : null,
		Day : null
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
      const differenceInDays = timeDifference / millisecondsInOneDay;
      const remainderDifferenceInHours = (timeDifference % millisecondsInOneDay) / millisecondsInOneHour;
      const remainderDifferenceInMinutes = (timeDifference % millisecondsInOneHour) / millisecondsInOneMinute;
      const remainderDifferenceInSeconds = (timeDifference % millisecondsInOneMinute) / millisecondsInOneSecond;
      const remainingDays = Math.floor(differenceInDays);
      const remainingHours = Math.floor(remainderDifferenceInHours);
      const remainingMinutes = Math.floor(remainderDifferenceInMinutes);
      const remainingSeconds =Math.floor(remainderDifferenceInSeconds);
      this.timerOutput = remainingHours + ":" + remainingMinutes + ": " + remainingSeconds;
			this.Day= remainingDays;
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