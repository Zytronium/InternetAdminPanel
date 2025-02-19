document.addEventListener("DOMContentLoaded", () => {
    const buttons = document.querySelectorAll("button");

    buttons.forEach(button => {
        button.addEventListener("click", () => {
            const action = button.textContent.trim();

            switch (action) {
                case "Shut Down the Internet":
                    fakeShutdown();
                    break;
                case "Revoke All SSL Certificates":
                    confirmAction("Revoke all SSL certificates?", revokeSSL);
                    break;
                case "Launch Firewall Purge":
                    fakeFirewallPurge();
                    break;
                case "Rollback to Web 1.0":
                    rollbackWeb1();
                    break;
                case "Enable Global Dark Mode":
                    toggleDarkMode();
                    break;
                case "View Active Connections":
                    showActiveConnections();
                    break;
                case "Modify User Permissions":
                    showUserPermissions();
                    break;
                case "Check Server Uptime":
                    showServerUptime();
                    break;
                default:
                    console.log("No action assigned to this button.");
            }
        });
    });
});

function fakeShutdown() {
    const overlay = document.createElement("div");
    overlay.classList.add("overlay");
    overlay.innerHTML = `<h1>Shutting Down Internet...</h1><p>Processing...</p>`;
    document.body.appendChild(overlay);
    setTimeout(() => {
        overlay.innerHTML = `<h1>Shutdown Failed</h1><p>User Lacks Sufficient Privileges</p>`;
        setTimeout(() => document.body.removeChild(overlay), 2000);
    }, 3000);
}

function revokeSSL() {
    window.location.replace("privacy-error");
}

function confirmAction(message, callback) {
    if (confirm(message)) {
        callback();
    }
}

function fakeFailure() {
    alert("Action Failed: Access Denied.");
}

function fakeFirewallPurge() {
    document.body.classList.add("firewall-warning");
    setTimeout(() => document.body.classList.remove("firewall-warning"), 3000);
}

function rollbackWeb1() {
    // Remove all <link> elements that are stylesheets
    const stylesheets = document.querySelectorAll('link[rel="stylesheet"]');
    stylesheets.forEach(sheet => sheet.parentNode.removeChild(sheet));

    // Remove all <style> elements
    const styleElements = document.querySelectorAll('style');
    styleElements.forEach(style => style.parentNode.removeChild(style));
}

function toggleDarkMode() {
    document.body.classList.toggle("dark-mode");
}

function showActiveConnections() {
    alert("Active Connections:\n192.168.1.1 - Admin Panel\n203.0.113.45 - Server Node\n10.0.0.15 - Proxy Gateway");
}

function showUserPermissions() {
    alert("User Permissions:\nAdmin - Full Access\nUser123 - Read-Only\nGuest - No Access");
}

function showServerUptime() {
    alert("Server Uptime: 537 days, 4 hours, 23 minutes");
}
