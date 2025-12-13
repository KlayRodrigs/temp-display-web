class EnvironmentMonitor {
    constructor() {
        this.temperatureElement = document.getElementById('temperature-value');
        this.humidityElement = document.getElementById('humidity-value');
        this.lastUpdateElement = document.getElementById('last-update');
        
        this.mockData = {
            temperature: 38,
            humidity: 10,
            timestamp: new Date().toISOString()
        };
        
        this.init();
    }
    
    init() {
        this.updateDisplay(this.mockData);
        setInterval(() => this.fetchData(), 5000);
    }
    
    async fetchData() {
        try {
            const newData = {
                temperature: this.getRandomVariation(this.mockData.temperature, 0.5),
                humidity: this.getRandomVariation(this.mockData.humidity, 1, 0, 100),
                timestamp: new Date().toISOString()
            };
            
            this.updateDisplay(newData);
        } catch (error) {
            console.error('Error fetching data:', error);
            this.lastUpdateElement.textContent = 'Erro ao atualizar dados';
        }
    }
    
    updateDisplay(data) {
        this.animateValueChange(this.temperatureElement, data.temperature.toFixed(1));
        this.animateValueChange(this.humidityElement, data.humidity.toFixed(1));
        
        const updateTime = new Date(data.timestamp);
        const formattedTime = updateTime.toLocaleTimeString('pt-BR', {
            hour: '2-digit',
            minute: '2-digit',
            second: '2-digit'
        });
        const formattedDate = updateTime.toLocaleDateString('pt-BR');
        this.lastUpdateElement.textContent = `Atualizado em ${formattedTime} • ${formattedDate}`;
    }
    
    animateValueChange(element, newValue) {
        if (element.textContent !== newValue) {
            element.classList.add('value-updated');
            
            element.textContent = newValue;
            
            setTimeout(() => {
                element.classList.remove('value-updated');
            }, 500);
        }
    }
    
    getRandomVariation(base, range, min = -Infinity, max = Infinity) {
        const variation = (Math.random() * 2 - 1) * range;
        const newValue = base + variation;
        
        return Math.min(Math.max(newValue, min), max);
    }
}

// Initialize the application when the DOM is fully loaded
document.addEventListener('DOMContentLoaded', () => {
    const monitor = new EnvironmentMonitor();
});

// API Integration Example (uncomment and modify when ready)
/*
async function fetchEnvironmentData() {
    try {
        const response = await fetch('YOUR_API_ENDPOINT');
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return await response.json();
    } catch (error) {
        console.error('Error fetching environment data:', error);
        throw error;
    }
}
*/
