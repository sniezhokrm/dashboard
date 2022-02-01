
import categoryPercent from './components/grafics/category-percent';
import categoryAmount from './components/grafics/category-amount';
import day from './components/grafics/day';

window.addEventListener('DOMContentLoaded', () => {
  categoryPercent('.category-percent');
  categoryAmount('.category-amount');
  day('.day-grafics');
});
