/*
Zachary Lincoln
WPF - Assignment: Functions
11/21/13
*/

//git command line creator

var addedFiles = [];

function getFilePathPrompt(promptText, errorText){
	errorText = (typeof errorText == 'undefined') ? '' : errorText;
	addedFilesString = (addedFiles.length > 0) ? '\n\n'+addedFiles.toString() : '';

	var filePath = prompt(errorText+promptText+addedFilesString);
	if(filePath == ''){
		getFilePathPrompt(promptText, 'Please provide some input.  ');
	}else{
		addedFiles.push(filePath);
	}
	if(!continuePrompt('Do you have more files to commit?')){
		getFilePathPrompt(promptText);
	}
}

function continuePrompt(promptText, errorText){
	errorText = (typeof errorText == 'undefined') ? '' : errorText;

	var reply = prompt(errorText+promptText).trim();

	if(reply == ''){
		continuePrompt(promptText, 'Please provide some input.  ');
	}else if(indexOf(reply, ['yes','no','true','false']) = -1){
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
}

getFilePathPrompt('Please list the files you want to commit.  You can add multiple files by separating with a space, or you can select to add another after you submit this one.  Entering a "." without quotes will add all files to the commit.');
var remoteName = getRemoteName('Do you want to send your commit to a specific remote?  If you don\'t know, reply "origin" without quotes.');

var branchName = getBranchName('Do you want to push your commit to a specific branch?  The default branch is "master" without quotes.');

var command = 'git add '+addedFiles2String()+' | git commit -m "progress checkpoint"'