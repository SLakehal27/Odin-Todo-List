const tabs = (() =>{
    const tabs = document.querySelector(".options ul");
    const section = document.querySelector(".tasks h1");
    
    const clearTabs = () =>{
        for(let i = 0; i < tabs.children.length;i++){
            tabs.children[i].style.fontWeight = "";
            tabs.children[i].style.background = "";
        }
    }
    
    const setTabLogic = (tab) =>
    {
        clearTabs();
        section.textContent = tab.textContent;
        tab.style.fontWeight = "bold";
        tab.style.background = "#d4d4d8";
    }

    const setTabListeners = () =>{
        
        for(let i = 0; i < tabs.children.length-1; i++){
            if(tabs.children[i].tagName == "H1") {
                continue;
            }
            tabs.children[i].addEventListener('click',() =>{
                setTabLogic(tabs.children[i]);
            })
        }
    }
    return {section, setTabListeners}
})();


export {tabs}