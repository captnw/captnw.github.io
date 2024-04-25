## Website repo.
This is a repo for my website. Go to https://captnw.github.io/ to check it out.

How website was setup: https://youtu.be/nusgoj74a3Y
Font stylesheet: https://fonts.google.com/specimen/Roboto?sidebar.open=true&selection.family=Roboto:ital,wght@0,400;0,700;1,400;1,700

## HOW TO MAKE CHANGES TO WEBSITE:
(local development)
- run "Gulp" command, and it will convert the changes in .scss into compact .css
- run "npm start" to view changes to website locally

(saving changes + deployment)
-1) git add, commit changes
-2) run the command "npm run deploy"
- (NOTE FOR STEP 2) The specifics on what "deploy" does can be seen in package.json, scripts.
-3) push "git push -u origin master"