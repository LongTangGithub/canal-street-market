export class PanelController {
    constructor() {
        console.log('Panel controller initializing...');

        // Cache DOM elements
        this.panels = document.querySelectorAll('.panel:not(.home)');
        this.homePanel = document.querySelector('.home');
        this.allPanels = document.querySelectorAll('.panel');


        if(!this.validateElements()) {
            console.error('PanelController: Required panel elements not found');
            return;
        }

        this.init();
    }
    init() {
        // Using cached elements instead of new queries
        this.panels.forEach(panel => {
            panel.addEventListener('click', () => {
                // Figure which panel was clicked
                const panelType = this.getPanelType(panel);
                console.log(`${panelType} panel clicked`);

                this.setActivePanel(panel);

            });
        });

        this.homePanel.addEventListener('click', () => {
            this.setActivePanel(this.homePanel);
        })
    }

    setActivePanel(clickedPanel) {
        this.allPanels.forEach(panel => {
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

    validateElements() {
        if( this.panels.length === 0) {
            console.error('PanelController: Side panels not found');
            return false;
        }

        if( !this.homePanel ) {
            console.error('PanelController: Home panel not found');
            return false;
        }

        if (this.allPanels.length === 0) {
            console.error('PanelController: No panels found at all');
            return false;
        }

        return true;
    }
}

export default PanelController;