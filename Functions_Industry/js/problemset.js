/*
Zachary Lincoln
WPF - Assignment: Functions
11/21/13
*/

//git command line creator

//create empty array to store file paths
var addedFiles = [];

//prompts for files to include in commit
function getFilePathPrompt(promptText, errorText){
	//fallback if no error text
	errorText = (typeof errorText == 'undefined') ? '' : errorText;
	//checks to see if files have been added - if so, prep for inclusion in prompt
	addedFilesString = (addedFiles.length > 0) ? '\n\n'+addedFiles.toString() : '';

	//prompt user for file path(s)
	var filePath = prompt(errorText+promptText+addedFilesString);
	//if empty string
	if(filePath == ''){
		//prompt again with explaination
		getFilePathPrompt(promptText, 'Please provide some input.  ');
	}else{
		addedFiles.push(filePath);
	}
	if(continuePrompt('Do you have more files to commit?')){
		getFilePathPrompt(promptText);
	}
}

function continuePrompt(promptText, errorText){
	errorText = (typeof errorText == 'undefined') ? '' : errorText;
	var possibleAnswers = ['yes','no','true','false'];
	var reply = prompt(errorText+promptText).trim();

	if(reply == ''){
		continuePrompt(promptText, 'Please provide some input.  ');
	}else if(possibleAnswers.indexOf(reply) == -1){
		continuePrompt(promptText, 'Please reply "yes" or "no"');
	}else{
		if(reply == 'yes' || reply == 'true'){
			return true;
		}else{
			return false;
		}
	}
}

function getRemoteName(promptText, errorText){
	errorText = (typeof errorText == 'undefined') ? '' : errorText;

	var remoteName = prompt(errorText+promptText);

	if(remoteName == ''){
		getRemoteName(promptText, 'Please provide some input.  ');
	}else{
		return remoteName;
	}
}

function getBranchName(promptText, errorText){
	errorText = (typeof errorText == 'undefined') ? '' : errorText;

	var branchName = prompt(errorText+promptText);

	if(branchName == ''){
		getBranchName(promptText, 'Please provide some input.  ');
	}else{
		return branchName;
	}
}

function addedFiles2String(){
	var addedFilesString = '';
	for(var i = 0; i < addedFiles.length; i++){
		addedFilesString += addedFiles[i].trim()+' ';
	}
	return addedFilesString;
}

getFilePathPrompt('Please list the files you want to commit.  You can add multiple files by separating with a space, or you can select to add another after you submit this one.  Entering a "." without quotes will add all files to the commit.');
var remoteName = getRemoteName('Do you want to send your commit to a specific remote?  If you don\'t know, reply "origin" without quotes.');

var branchName = getBranchName('Do you want to push your commit to a specific branch?  The default branch is "master" without quotes.');

var command = 'git add '+addedFiles2String()+'; git commit -m "progress checkpoint"; git push '+remoteName.trim()+' '+branchName.trim();

console.log('your command is:  '+command);