# Start the JSON server with custom routes.
# IMPORTANT: Make sure to run this command in the directory where your db.json and routes.json files are located.
# If you are using Windows, you may need to adjust the command accordingly, write that command in a .bat file or use a terminal that supports Unix-like commands.
json-server --watch db.json --routes routes.json
