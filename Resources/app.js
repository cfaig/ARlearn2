// this sets the background color of the master UIView (when there are no windows/tab groups on it)

Ti.include(
	'/arlearn/arlearn.js'
	);

ar.db.initAllTables();
// ar.db.myGames.fusionUpdate();
ar.app.mainWindow = ar.ui.createApplicationWindow();
ar.app.mainWindow.open();


