/* eslint-disable no-nested-ternary */
function formatDeadline(date) {
  const month = date.getMonth() + 1;
  const day = date.getDate();
  const hour = date.getHours();
  const minute = date.getMinutes();
  const rn = new Date();
  const d =
    day === rn.getDate() && month === rn.getMonth() + 1
      ? 'Today'
      : day + 1 === rn.getDate() && month === rn.getMonth() + 1
      ? 'Yesterday'
      : day - 1 === rn.getDate() && month === rn.getMonth() + 1
      ? 'Tomorrow'
      : `${month.toString().padStart(2, '0')}/${day.toString().padStart(2, '0')}`;
  const t = `${hour.toString().padStart(2, '0')}:${minute.toString().padStart(2, '0')}`;
  const formatted = `${d} ${t}`;
  return formatted;
}
export default formatDeadline;
