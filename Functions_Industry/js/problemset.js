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
	//else not empty
	}else{
		//push the file path(s) to our array
		addedFiles.push(filePath);
	}
	//ask the user if they want to continue adding files
	if(continuePrompt('Do you have more files to commit?')){
		//if so, start the file path prompt over
		getFilePathPrompt(promptText);
	}
}

//prompt user if they want to continue
function continuePrompt(promptText, errorText){
	//fallback for no error text
	errorText = (typeof errorText == 'undefined') ? '' : errorText;
	//create an array of possible answers
	var possibleAnswers = ['yes','no','true','false'];
	//store user input
	var reply = prompt(errorText+promptText).trim();

	//if empty string
	if(reply == ''){
		//call prompt again with explaination why
		continuePrompt(promptText, 'Please provide some input.  ');
	//else if the input is not a possible answer
	}else if(possibleAnswers.indexOf(reply) == -1){
		//call prompt again with explaintion why
		continuePrompt(promptText, 'Please reply "yes" or "no"');
	//else everything is good
	}else{
		//if yes
		if(reply == 'yes' || reply == 'true'){
			//return true
			return true;
		//else
		}else{
			//return false
			return false;
		}
	}
}

//get the remote's name
function getRemoteName(promptText, errorText){
	//fallback for no error text
	errorText = (typeof errorText == 'undefined') ? '' : errorText;
	//grab the user input after prompt
	var remoteName = prompt(errorText+promptText);

	//if empty string
	if(remoteName == ''){
		//call the prompt again with explaination why
		getRemoteName(promptText, 'Please provide some input.  ');
	//else everything is groovy
	}else{
		//return the remote name for storage
		return remoteName;
	}
}


//get the branch's name
function getBranchName(promptText, errorText){
	//fallback for no error text
	errorText = (typeof errorText == 'undefined') ? '' : errorText;
	//grab the user input from prompt
	var branchName = prompt(errorText+promptText);
	//if empty string
	if(branchName == ''){
		//call again with explaination why
		getBranchName(promptText, 'Please provide some input.  ');
	//else everything is great
	}else{
		//return for storage
		return branchName;
	}
}

//returns a string of file paths added to array
function addedFiles2String(){
	//prep a string for concatination
	var addedFilesString = '';
	//for every item in the array
	for(var i = 0; i < addedFiles.length; i++){
		//trim the file path(s) and add a space at the end to separate
		addedFilesString += addedFiles[i].trim()+' ';
	}
	//return for storage
	return addedFilesString;
}

//run function to pour files into file array
getFilePathPrompt('Please list the files you want to commit.  You can add multiple files by separating with a space, or you can select to add another after you submit this one.  Entering a "." without quotes will add all files to the commit.');
//store the remote name
var remoteName = getRemoteName('Do you want to send your commit to a specific remote?  If you don\'t know, reply "origin" without quotes.');
//store the branch name
var branchName = getBranchName('Do you want to push your commit to a specific branch?  The default branch is "master" without quotes.');
//concatinate command
var command = 'git add '+addedFiles2String()+'; git commit -m "progress checkpoint"; git push '+remoteName.trim()+' '+branchName.trim();
//log in console
console.log('your command is:  '+command);

$(function(){
	$('body').append('<p>Your command is:  '+command+'</p>');
});