export default function geKoreanNumber(number: number) {
  const koreanUnits = ['조', '억', '만', ''];
  const unit = 10000;
  let answer = '';

  while (number > 0) {
    const mod = number % unit;
    const modToString = mod.toString().replace(/(\d)(\d{3})/, '$1,$2');
    number = Math.floor(number / unit);
    answer = `${
      modToString !== '0' ? modToString : ''
    }${koreanUnits.pop()} ${answer}`;
  }
  return answer;
}
