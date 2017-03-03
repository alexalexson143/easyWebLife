/* Ninite Selector for Chrome version 1.00 */
/* Type || Copy in console for automated selection */

// Check if appList variable already declared
if(typeof appList === 'undefined') {
    // Get all apps in ninite website, store in array
    var appList = document.getElementsByName('apps')
}

// Check if desirables variable already declared
if(typeof desirables === 'undefined') {
    // List all desired apps in ninite, modify accordingly
    var desirables = ["chrome", "firefox", "vlc", "spotify", "paint.net", "sumatrapdf", "malwarebytes", "qbittorrent", "googledrive", "teamviewer12", "revo", "launchy", "windirstat", "7zip", "notepadplusplus", "putty", "vscode"]
}

// Check all items as listed in desirables
for (let index = 0, length = appList.length; index < length; index++) {
    let app = appList[index];
    if(desirables.indexOf(app.value) !== -1) {
        app.checked = true
    } else {
        
        // Strict mode: ON
        app.checked = false
    }
}
