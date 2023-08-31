import {tabs} from "./tabs"

const pageload = (() =>
{
    const taskbtn = document.querySelector(".taskbtn");
    
    const initializeWebsite = () =>
    {
        tabs.setTabListeners();
    }

    return {initializeWebsite}
})();

export {pageload}