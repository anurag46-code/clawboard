// Laude Modern Dashboard 🎭

function showToast(message, type = 'success') {
    const toast = document.getElementById('toast');
    toast.textContent = message;
    toast.className = 'show';
    
    // Auto-hide after 3 seconds
    setTimeout(() => {
        toast.className = '';
    }, 3000);
}

function spawnAgent() {
    showToast('🤖 Spawning new agent...');
    
    // Simulate agent spawning
    setTimeout(() => {
        showToast('✅ Agent spawned successfully!');
        
        // Update active agents count
        const countEl = document.getElementById('activeAgents');
        countEl.textContent = parseInt(countEl.textContent) + 1;
    }, 1500);
}

function generateReport() {
    showToast('📄 Generating report...');
    
    // Simulate report generation
    setTimeout(() => {
        showToast('✅ Report generated! Check /workspace/reports/');
        
        // Update completed tasks
        const countEl = document.getElementById('tasksDone');
        countEl.textContent = parseInt(countEl.textContent) + 1;
    }, 2000);
}

function checkHeartbeat() {
    showToast('💓 Running heartbeat check...');
    
    setTimeout(() => {
        showToast('✅ All systems operational!');
    }, 1000);
}

function viewTasks() {
    showToast('📋 Opening tasks...');
    // In real app, navigate to tasks page
}

function showSection(section) {
    // Update active nav button
    document.querySelectorAll('.nav-btn').forEach(btn => {
        btn.classList.remove('active');
    });
    
    event.currentTarget.classList.add('active');
    
    // Show section toast
    const sectionNames = {
        'home': 'Home',
        'agents': 'Agents',
        'tasks': 'Tasks',
        'settings': 'Settings'
    };
    
    showToast(`Switched to ${sectionNames[section]}`);
}

// Auto-refresh stats every 30 seconds
setInterval(() => {
    // In real implementation, fetch live data from API
    console.log('🔄 Auto-refreshing stats...');
}, 30000);

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    console.log('🎭 Laude Modern Dashboard initialized');
    
    // Welcome toast
    setTimeout(() => {
        showToast('Welcome to Laude Dashboard! 🎭');
    }, 500);
});

// Add ripple effect to buttons
document.querySelectorAll('.action-btn, .stat-card').forEach(btn => {
    btn.addEventListener('click', function(e) {
        const rect = this.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        
        const ripple = document.createElement('span');
        ripple.style.cssText = `
            position: absolute;
            background: rgba(255, 255, 255, 0.3);
            border-radius: 50%;
            transform: scale(0);
            animation: ripple 0.6s linear;
            pointer-events: none;
            left: ${x}px;
            top: ${y}px;
            width: 100px;
            height: 100px;
            margin-left: -50px;
            margin-top: -50px;
        `;
        
        this.style.position = 'relative';
        this.style.overflow = 'hidden';
        this.appendChild(ripple);
        
        setTimeout(() => ripple.remove(), 600);
    });
});

// Add ripple animation
const style = document.createElement('style');
style.textContent = `
    @keyframes ripple {
        to {
            transform: scale(4);
            opacity: 0;
        }
    }
`;
document.head.appendChild(style);
