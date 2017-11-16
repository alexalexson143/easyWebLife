/* Ninite Selector for Chrome version 1.01 */
/* November 16, 2017
/* Type || Copy in console for automated selection */

APPID = "apps"

function get_applist() {
    // console.log(document.getElementByName(APPID))
    return document.getElementsByName(APPID)
}

function select_ninite() {
    appList = get_applist()
    
    /* Array of all apps
    ** 2017-11-16 ["chrome", "operaChromium", "firefox", "skype", "pidgin", "thunderbird", "trillian", "itunes", "vlc", "aimp", "foobar", "winamp", "musicbee", "audacity", "klitecodecs", "gom", "spotify", "cccp", "mediamonkey", "handbrake", "java8", ".net4.7", "silverlight", "air", "shockwave", "krita", "blender", "paint.net", "gimp", "irfanview", "xnview", "inkscape", "faststone", "greenshot", "sharex", "foxit", "libreoffice", "sumatrapdf", "cutepdf", "pdfcreator", "openoffice", "essentials", "avast", "avg", "malwarebytes", "spybot2", "avira", "super", "qbittorrent", "dropbox", "googlebackupandsync", "mozy", "onedrive", "sugarsync", "evernote", "googleearth", "steam", "keepass2", "everything", "nvda", "teamviewer12", "imgburn", "realvnc", "teracopy", "cdburnerxp", "revo", "launchy", "windirstat", "glary", "infrarecorder", "classicstart", "7zip", "peazip", "winrar", "python", "filezilla", "notepadplusplus", "jdk8", "jdkx8", "winscp", "putty", "winmerge", "eclipse", "vscode"]
    ** 2017-11-11 ["chrome", "operaChromium", "firefox", "skype", "pidgin", "thunderbird", "trillian", "itunes", "vlc", "aimp", "foobar", "winamp", "musicbee", "audacity", "klitecodecs", "gom", "spotify", "cccp", "mediamonkey", "handbrake", "java8", ".net4.7", "silverlight", "air", "shockwave", "krita", "blender", "paint.net", "gimp", "irfanview", "xnview", "inkscape", "faststone", "greenshot", "sharex", "foxit", "libreoffice", "sumatrapdf", "cutepdf", "pdfcreator", "openoffice", "essentials", "avast", "avg", "malwarebytes", "spybot2", "avira", "super", "qbittorrent", "dropbox", "googlebackupandsync", "mozy", "onedrive", "sugarsync", "evernote", "googleearth", "steam", "keepass2", "everything", "nvda", "teamviewer12", "imgburn", "realvnc", "teracopy", "cdburnerxp", "revo", "launchy", "windirstat", "glary", "infrarecorder", "classicstart", "7zip", "peazip", "winrar", "python", "filezilla", "notepadplusplus", "jdk8", "jdkx8", "winscp", "putty", "winmerge", "eclipse", "vscode"] 
    ** 20171008 ["chrome","operaChromium","firefox","skype","pidgin","thunderbird","trillian","itunes","vlc","aimp","foobar","winamp","musicbee","audacity","klitecodecs","gom","spotify","cccp","mediamonkey","handbrake","java8",".net4.7","silverlight","air","shockwave","krita","blender","paint.net","gimp","irfanview","xnview","inkscape","faststone","greenshot","sharex","foxit","libreoffice","sumatrapdf","cutepdf","pdfcreator","openoffice","essentials","avast","avg","malwarebytes","spybot2","avira","super","qbittorrent","dropbox","googlebackupandsync","mozy","onedrive","sugarsync","evernote","googleearth","steam","keepass2","everything","nvda","teamviewer12","imgburn","realvnc","teracopy","cdburnerxp","revo","launchy","windirstat","glary","infrarecorder","classicstart","7zip","peazip","winrar","python","filezilla","notepadplusplus","jdk8","jdkx8","winscp","putty","winmerge","eclipse","vscode"]
    ** OLD -> ["chrome","operaChromium","firefox","skype","pidgin","thunderbird","trillian","aim","itunes","vlc","aimp","foobar","winamp","musicbee","audacity","klitecodecs","gom","spotify","cccp","mediamonkey","handbrake","java8",".net4.6.2","silverlight","air","shockwave","paint.net","gimp","irfanview","xnview","inkscape","faststone","greenshot","sharex","foxit","libreoffice","sumatrapdf","cutepdf","pdfcreator","openoffice","essentials","avast","avg","malwarebytes","adaware","spybot2","avira","super","qbittorrent","emule","dropbox","googledrive","mozy","onedrive","sugarsync","evernote","googleearth","steam","keepass2","everything","nvda","teamviewer12","imgburn","realvnc","teracopy","cdburnerxp","revo","launchy","windirstat","glary","infrarecorder","classicstart","7zip","peazip","winrar","python","filezilla","notepadplusplus","jdk8","jdkx8","winscp","putty","winmerge","eclipse","vscode"]
    */
    
    /*KAO*/
    // 24 apps
    let desirables = ["skype", "firefox", "chrome", "silverlight", "7zip", "putty", "notepadplusplus", "sumatrapdf", "revo", "teamviewer12", "qbittorrent", "vlc", "vscode", "googlebackupandsync", "spotify", "dropbox", "libreoffice", "malwarebytes", "thunderbird", "java8", "steam", "windirstat", "python", "keepass2"]
    
    var event = new MouseEvent('click', {
        'view': window,
        'bubbles': true,
        'cancelable': true
    });

    installedApps = 0
    for (let index = 0, length = appList.length; index < length; index++) {
        let app = appList[index];
        if (desirables.indexOf(app.value) !== -1) {
            app.dispatchEvent(event)
            app.checked = true
            ++installedApps
        } else {
            
            // Strict mode: ON
            app.checked = false
        }
    }
    alert(installedApps)
}
    
select_ninite()
