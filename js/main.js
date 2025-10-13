import { setActive, render } from './dom.js';
import { getPillsForLab, getSectionTitle, getSectionHtml } from './content.js';

document.addEventListener('DOMContentLoaded', () => {
  const output = document.getElementById('output');
  const sidebar = document.querySelector('.sidebar');

  function getActiveLabNumber(){
    const activeTab = document.querySelector('.tab.is-active');
    return activeTab ? activeTab.dataset.lab : undefined;
  }

  function updateSidebarPills(labNumber) {
    sidebar.innerHTML = '';
    const pills = getPillsForLab(labNumber);
    pills.forEach((pill, index) => {
      const pillElement = document.createElement('button');
      pillElement.className = 'pill';
      pillElement.dataset.section = pill.section;
      pillElement.textContent = pill.text;
      if (index === 0) {
        pillElement.classList.add('is-active');
      }
      sidebar.appendChild(pillElement);
    });
  }

  function setupPillListeners(pills) {
    pills.forEach(pill => {
      pill.addEventListener('click', () => {
        setActive(pills, pill);
        const key = pill.dataset.section || '';
        const title = getSectionTitle(key) || pill.textContent.trim();
        const lab = getActiveLabNumber();
        const html = getSectionHtml(key, lab);
        render(output, title, html);
      });
    });
  }

  const tabs = Array.from(document.querySelectorAll('.tab'));
  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      setActive(tabs, tab);
      const labNumber = tab.dataset.lab;
      updateSidebarPills(labNumber);
      const newPills = Array.from(document.querySelectorAll('.pill'));
      setupPillListeners(newPills);
      const firstPill = newPills[0];
      if (firstPill) {
        firstPill.click();
      }
    });
  });

  const initialPills = Array.from(document.querySelectorAll('.pill'));
  setupPillListeners(initialPills);
  const activePill = document.querySelector('.pill.is-active');
  if (activePill) {
    activePill.click();
  }
});


