export class PanelController {
    constructor() {
        console.log('Panel controller initializing...');
        this.init();
    }
    //  TODO: Remove 'active' class from all panels
    // TODO: Add 'active' class to the clicked panel
    // TODO: Handle the home panel (remove active from it too)
    init() {
        const panels = document.querySelectorAll('.panel:not(.home)');
        const homePanel = document.querySelector('.home');

        panels.forEach(panel => {
            panel.addEventListener('click', () => {
                // Figure which panel was clicked
                const panelType = this.getPanelType(panel);
                console.log(`${panelType} panel clicked`);

                this.setActivePanel(panel);

            });
        });

        homePanel.addEventListener('click', () => {
            this.setActivePanel(homePanel);
        })
    }

    setActivePanel(clickedPanel) {
        const allPanels = document.querySelectorAll('.panel');
        allPanels.forEach(panel => {
            panel.classList.remove('active');
        });

        clickedPanel.classList.add('active');
    }

    
    getPanelType(panel) {
        return panel.classList.contains('food-panel') ? 'Food' :
               panel.classList.contains('retail-panel') ? 'Retail' :
               panel.classList.contains('community-panel') ? 'Community' :
               'Unknown';
    }
}

export default PanelController;