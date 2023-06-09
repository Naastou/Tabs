const btnTabs = document.querySelectorAll('.btn');
const tabContents= document.querySelectorAll('.text');

btnTabs.forEach(tab => {
  tab.addEventListener('click', (e) => {
   
    const activeTabId = e.currentTarget.dataset.id;
  
    tabContents.forEach(tabContent => {
      tabContent.classList.remove('active')
    })
    btnTabs.forEach(tab => {
      tab.classList.remove('active')
    })
    const element = document.getElementById(activeTabId);
    element.classList.add('active');
  });
})

