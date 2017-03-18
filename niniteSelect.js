/* Ninite Selector for Chrome version 1.00 */
/* Type || Copy in console for automated selection */

// Check if appList variable already declared
if(typeof appList === 'undefined') {
    // Get all apps in ninite website, store in array
    var appList = document.getElementsByName('apps')
}

/* Array of all apps
** ["chrome","operaChromium","firefox","skype","pidgin","thunderbird","trillian","aim","itunes","vlc","aimp","foobar","winamp","musicbee","audacity","klitecodecs","gom","spotify","cccp","mediamonkey","handbrake","java8",".net4.6.2","silverlight","air","shockwave","paint.net","gimp","irfanview","xnview","inkscape","faststone","greenshot","sharex","foxit","libreoffice","sumatrapdf","cutepdf","pdfcreator","openoffice","essentials","avast","avg","malwarebytes","adaware","spybot2","avira","super","qbittorrent","emule","dropbox","googledrive","mozy","onedrive","sugarsync","evernote","googleearth","steam","keepass2","everything","nvda","teamviewer12","imgburn","realvnc","teracopy","cdburnerxp","revo","launchy","windirstat","glary","infrarecorder","classicstart","7zip","peazip","winrar","python","filezilla","notepadplusplus","jdk8","jdkx8","winscp","putty","winmerge","eclipse","vscode"]"
*/ 
// Check if desirables variable already declared
if(typeof desirables === 'undefined') {
    // List all desired apps in ninite, modify accordingly
    
    /*ACC*/
    // var desirables = ["chrome", "firefox", "vlc", "spotify", "paint.net", "sumatrapdf", "malwarebytes", "qbittorrent", "googledrive", "teamviewer12", "revo", "launchy", "windirstat", "7zip", "notepadplusplus", "putty", "vscode"]
    
    /*KAO*/
    var desirables = ["firefox", "chrome", "silverlight", "7zip", "putty", "notepadplusplus", "sumatrapdf", "revo", "teamviewer12", "qbittorrent", "vlc", "vscode", "googledrive", "spotify", "gimp", "dropbox", "libreoffice", "malwarebytes", "thunderbird"]
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
