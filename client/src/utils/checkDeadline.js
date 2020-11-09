function hasDeadlineMissed(date) {
  const now = new Date();
  if (now.getTime() > date.getTime()) return true;
  return false;
}
export default hasDeadlineMissed;
