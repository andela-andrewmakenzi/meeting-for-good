const formatTime = timeNum => {
  let hours = String(timeNum).split('.')[0];
  let minutes = String(timeNum).split('.')[1];
  let suffix = 'AM';

  switch (minutes) {
    case '25':
      minutes = '15';
      break;
    case '5':
      minutes = '30';
      break;
    case '75':
      minutes = '45';
      break;
    default:
      minutes = '00';
      break;
  }

  if (hours === '24') {
    hours = 23;
    minutes = 59;
  }

  if (Number(hours) >= 12) {
    hours = String(Number(hours) - 12);
    suffix = 'PM';
  }

  return `${hours}:${minutes} ${suffix}`;
};

const getHours = timeString => {
  const suffix = timeString.split(':')[1].split(' ')[1];
  if (suffix === 'AM') return Number(timeString.split(':')[0]);

  return Number(timeString.split(':')[0]) + 12;
};

const getMinutes = timeString => Number(timeString.split(':')[1].split(' ')[0]);

export { formatTime, getHours, getMinutes };
