

var charAnn, charSarah, buttonPlay, buttonPrev, scoreSvg , buttonNext, appContainer ,

infoApartmentArray = [ {
	'title' : 'Pine Grove Apartments',
	"audioFile" :"common/LateAdulthood_Narration_MapView_19.mp3",
	'name' : 'Pine Grove',
	'rent' : '$ 850 /month ',
	'distance' : " 0.5 mile",
	'ammenities' : "Swimming Pool , Super Market",
	"class" : 'pinegrove',
	"index": 0

}, {
	'title' : 'Lakeview Courts',
	"audioFile" :"common/LateAdulthood_Narration_MapView_20.mp3",
	'name' : 'Lakeview',
	'rent' : '$ 975 /month ',
	'distance' : " 0.25 mile",
	'ammenities' : "Library , Super Market",
	"class" : 'lakeview',
	"index": 1
}, {
	'title' : 'Sunnyvale Apartments',
	"audioFile" :"common/LateAdulthood_Narration_MapView_21.mp3",
	'name' : 'Sunnyvale',
	'rent' : '$ 1000 /month ',
	'distance' : " 0.14 mile",
	'ammenities' : "Super Market",
	"class" : 'sunnyvale',
	"index": 2
}

];



var controlInfo, closeInfoText, audioNarrationActive = true , instructionAudio, apartmentRedirect , OOIEffectAudio , objectDescriptionAudio , defaultPlayerOOITags ,disableClickLayer ,movingCircle , subSceneArray , rightNav , ailmentNotes , ailmentTitle ,  backGroundZeroZero , currentSubSceneIndex = 0 , leftNav , charAge ,spinnerCharInfo , charPoster ,  charEthnicity , charName ,  charGender , taggedOOI , noteDismissButton , infoClose , currentOOIIndex , currentOOI = {} , inSceneOOI = [] ,  playAgain = false , controlSetting, OOILayer ,controlMap, loadingTips, playerCharacterArray, playerOOITags,  instructionsArray, loadingTipsArray, progressBar, controlBars, progressLine, apartmentTitle, controlLayer, controlMap, gameMap, infoText, ailmentArray , infoScriptObject, OOIContentArray, apartmentSelectionScript ,  conversationScriptArray;

var tagScore = 5 , audio ,  audioLocation = "/LifeSPan/assets/sounds/LateAdulthood_Louise_LouiseOffice_11.mp3 " , endGameReview = false , replayControl ,scoreContainer , gameRestart , scoreTitle , engagementScoreArray, gameScoreArray  , controlScore , engagementScoreBox , scoreContent , apartmentPlayerSelected = false , pinegroveObjectsExplored = 0 , activeApartment , inActiveApartmentLeft , inActiveApartmentRight , taggedApartmentOOI , decisionButtonHUD , lakeviewObjectsExplored = 0 , sunnyvaleObjectsExplored = 0 , checkEye = false , checkEar = false ,  checkLeg = false ,  introPage = true , exploredObjectsList , noOfObjectsExplored , ailmentContent , dismissAilmentButton , controlNotes , apartmentScore = 60 , closeObject , userInterface , characterPin , objectTitle , inSceneOOIs , currentOOIDescription= "" , objectDescription , objectEffectContent , objectDescriptionContent , engagementScore = 0 , gameScore = 0 , rentDetails, loadDuration = 30000 , currentApartment , gameMode , settingOn = false , controlMode ,soundControl ,gameMusicControl , spinned = false, ringOne ,playerChar, ratingDetails, distanceDetails, ammenitiesDetails, tourButton, instructionHUD, instructionTitle, instructionContent, nextButton, spinButton, characterSelectionWidget, widgetTitle, guideHeader, slotMachine, spinButton, charProfile, charAvtar, charProfileName, charProfileSummary, charDetailsList, charDetailsOne, charDetailsTwo, conversationLayer, conversationBubble, speakerName, conversationtext, chairLouiseZero, currentScene = infoApartmentArray[0], currentSubScene , characterIDArray, conversationScriptArray, contextCount = 0, dialogueCount = 0, sceneWrapper, sceneTwo , gameOverlay, sceneTransition = false, machineBackground, apartmentIcon, instructionCount = 0, apartmentInfo,forceShowHints;

var apartmentObjectsExplored = [ pinegroveObjectsExplored , lakeviewObjectsExplored , sunnyvaleObjectsExplored ] ;
function initHints(isRestart){
	if(!isRestart){
		forceShowHints = false;
		infoScriptArray = {
				'wheelSpin' :{
					'informationText' : 'Spin the wheel to choose the character you will be playing.',
					'index' : 0
				},
				'officeConversation' :{
					'informationText' : 'Tap to continue.',
					'index' : 0
				},
				'map' :{
					'informationText' : 'Using the map, click to tour each apartment to learn more about it.',
					'index' : 0
				},
				'apartmentVisit' :{
					'informationText' : 'Use your mouse to move around the apartment. Keep an eye out for objects that glow.',
					'index' : 0
				},
				'apartmentRoam' : {
					'informationText' : 'Move around the apartment. Use the arrows on the left and right sides of the screens to go from room to room.',
					'index' : 0
				},
				'apartmentExit' :{
					'informationText' : 'Use map to check out other apartments.',
					'index' : 0
				},
				'apartmentDiamond' :{
					'informationText' : 'Tap on diamond icon to categorize the object.',
					'index' : 0
				},
				'gameScore' :{
					'informationText' : 'Increase your game score by categorizing objects correctly and choosing the best apartment for ',
					'index' : 0
				},
				'engagementScore' :{
					'informationText' : 'Receive engagement points for exploring and categorizing objects.',
					'index' : 0
				}

		};
		//flags set for hints. 0 - firsttime. 1 otherwise
		hintFlags = {"wheelSpin": 0, "officeConversation": 0, "map": 0, "apartmentVisit": 0, "apartmentExit": 0,"apartmentRoam":0, "apartmentDiamond": 0, "gameScore":0, "engagementScore":0, "isHintMsgShowing": false};
		currentHint = "";
		closeHint = ""; //'<div id="infoClose" class="info-close hide">';
	} else {
		infoText.classList.remove("hide-perm");
		controlInfoIcon.classList.remove("hide-perm");
		controlInfo.classList.remove("hide-perm");

		infoText.classList.remove("desc-hint");
		controlInfoIcon.classList.remove("desc-hint");
		controlInfo.classList.remove("desc-hint");

		hideHint();
		hideHintIcon();
		//hintFlags = {"wheelSpin": 0, "officeConversation": 0, "map": 0, "apartmentVisit": 0, "apartmentExit": 0,"apartmentRoam":0, "apartmentDiamond": 0, "gameScore":0, "engagementScore":0, "isHintMsgShowing": true}; 
		currentHint = "Spin the wheel to choose the character you will be playing.";
		forceShowHints = false;
	}
}
initHints(false);

var playerSelected = false;
conversationScriptArray = [
		{
			"character" : "Gladys",
			"conversation" : [
					{
						"speaker" : "Louise",
						"dialogue" : "Hi, Gladys. It's great to see you. How are you doing?",
						"audioFile" :"gladys/LateAdulthood_Louise_LouiseOffice_11.mp3",
						"sceneName" : "scene-zero",
						"sceneNo" : 0,
						"subSceneNo":0,
						"index" : 0,
						"charID" : 1,
						"class" : "louise"
					},
					{
						"speaker" : "Gladys",
						"dialogue" : "I am looking for a place to live, and need some advice. You mentioned you have volunteers who might be able to help out.",
						"audioFile" :"gladys/LateAdulthood_Gladys_LouiseOffice_12.mp3",
						"sceneName" : "scene-zero",
						"sceneNo" : 0,
						"subSceneNo":0,
						"index" : 1,
						"charID" : 2,
						"class" : "gladys"
					},
					{
						"speaker" : "Louise",
						"dialogue" : "Sure, I'll introduce you to Sarah, one of our volunteers.",
						"audioFile" :"gladys/LateAdulthood_Louise_LouiseOffice_13.mp3",
						"sceneName" : "scene-zero",
						"sceneNo" : 0,
						"subSceneNo":0,
						"index" : 2,
						"charID" : 1,
						"class" : "louise"
					},
					{
						"speaker" : "Sarah",
						"actionOnly" : true,
						"dialogue" : "",
						"sceneName" : "scene-zero",
						"sceneNo" : 0,
						"subSceneNo":0,
						"index" : 2,
						"charID" : 0,
						"class" : "sarah"
					},
					{
						"speaker" : "Sarah",
						"dialogue" : "Hi Gladys, I'm Sarah. I can help you find an apartment. How are you today?",
						"audioFile" :"gladys/LateAdulthood_Sarah_LouiseOffice_14.mp3",
						"sceneName" : "scene-one",
						"sceneNo" : 1,
						"subSceneNo":0,
						"index" : 3,
						"charID" : 0,
						"class" : "sarah"
					},
					{
						"speaker" : "Gladys",
						"dialogue" : "Wonderful. I'd like to find a place that is close to the senior center and the library. I love reading but my eyes aren't what they used to be. My doctor tells me I have macular degeneration.",
						"audioFile" :"gladys/LateAdulthood_Gladys_LouiseOffice_15.mp3",
						"sceneName" : "scene-one",
						"sceneNo" : 1,
						"subSceneNo":0,
						"index" : 4,
						"charID" : 2,
						"class" : "gladys"
					},
					{
						"speaker" : "Sarah",
						"dialogue" : "Okay. Louise suggested these three places: Pine Grove Apartments, Lakeview Courts, and Sunnyvale Apartments. Let's take a look.",
						"audioFile" :"gladys/LateAdulthood_Sarah_LouiseOffice_16.mp3",
						"sceneName" : "scene-one",
						"sceneNo" : 1,
						"subSceneNo":0,
						"index" : 5,
						"charID" : 0,
						"class" : "sarah"
					}

			]

		},
		{
			"character" : "Mary",
			"conversation" : [
					{
						"speaker" : "Louise",
						"dialogue" : "Hi, Mary. It's great to see you. How are you doing?",
						"audioFile" :"mary/LateAdulthood_Louise_LouiseOffice_11.mp3",
						"sceneName" : "scene-zero",
						"sceneNo" : 0,
						"subSceneNo":0,
						"index" : 0,
						"charID" : 1,
						"class" : "louise"
					},
					{
						"speaker" : "Mary",
						"dialogue" : "I am looking for a place to live, and need some advice. You mentioned you have volunteers who might be able to help out.",
						"audioFile" :"mary/LateAdulthood_Mary_LouiseOffice_12.mp3",
						"sceneName" : "scene-zero",
						"sceneNo" : 0,
						"subSceneNo":0,
						"index" : 1,
						"charID" : 3,
						"class" : "mary"
					},
					{
						"speaker" : "Louise",
						"dialogue" : "Sure, I'll introduce you to Sarah, one of our volunteers.",
						"audioFile" :"mary/LateAdulthood_Louise_LouiseOffice_13.mp3",
						"sceneName" : "scene-zero",
						"sceneNo" : 0,
						"subSceneNo":0,
						"index" : 2,
						"charID" : 1,
						"class" : "louise"
					},
					{
						"speaker" : "Sarah",
						"actionOnly" : true,
						"dialogue" : "",
						"sceneName" : "scene-zero",
						"sceneNo" : 0,
						"subSceneNo":0,
						"index" : 2,
						"charID" : 0,
						"class" : "sarah"
					},
					{
						"speaker" : "Sarah",
						"dialogue" : "Hi Mary, I'm Sarah. I can help you find an apartment. How are you today?",
						"audioFile" :"mary/LateAdulthood_Sarah_LouiseOffice_14.mp3",
						"sceneName" : "scene-one",
						"sceneNo" : 1,
						"subSceneNo":0,
						"index" : 3,
						"charID" : 0,
						"class" : "sarah"
					},
					{
						"speaker" : "Mary",
						"dialogue" : "I am doing fine. My balance is off these days because I'm recovering from hip surgery.  ",
						"audioFile" :"mary/LateAdulthood_Mary_LouiseOffice_15.mp3",
						"sceneName" : "scene-one",
						"sceneNo" : 1,
						"subSceneNo":0,
						"index" : 4,
						"charID" : 3,
						"class" : "mary"
					},
					{
						"speaker" : "Sarah",
						"dialogue" : "I'm sorry to hear that. Louise suggested these three places: Pine Grove Apartments, Lakeview Courts, and Sunnyvale Apartments. Let's take a look.",
						"audioFile" :"mary/LateAdulthood_Sarah_LouiseOffice_16.mp3",
						"sceneName" : "scene-one",
						"sceneNo" : 1,
						"subSceneNo":0,
						"index" : 5,
						"charID" : 0,
						"class" : "sarah"
					},
					{
						"speaker" : "Mary",
						"dialogue" : "Are these places all very close? I can't walk around for too long.",
						"audioFile" :"mary/LateAdulthood_Mary_LouiseOffice_15.mp3",
						"sceneName" : "scene-one",
						"sceneNo" : 1,
						"subSceneNo":0,
						"index" : 6,
						"charID" : 3,
						"class" : "mary"
					},
					{
						"speaker" : "Sarah",
						"dialogue" : "We'll take plenty of breaks if you need them.",
						"audioFile" :"mary/LateAdulthood_Sarah_LouiseOffice_18.mp3",
						"sceneName" : "scene-one",
						"sceneNo" : 1,
						"subSceneNo":0,
						"index" : 7,
						"charID" : 0,
						"class" : "sarah"
					}

			]

		},
		{
			"character" : "Raymond",
			"conversation" : [
					{
						"speaker" : "Louise",
						"dialogue" : "Hi, Raymond. It's great to see you. How are you doing?",
						"audioFile" :"raymond/LateAdulthood_Louise_LouiseOffice_11.mp3",
						"sceneName" : "scene-zero",
						"sceneNo" : 0,
						"subSceneNo":0,
						"index" : 0,
						"charID" : 1,
						"class" : "louise"
					},
					{
						"speaker" : "Raymond",
						"dialogue" : "I am looking for a place to live, and need some advice. You mentioned you have volunteers who might be able to help out.",
						"audioFile" :"raymond/LateAdulthood_Raymond_LouiseOffice_12.mp3",
						"sceneName" : "scene-zero",
						"sceneNo" : 0,
						"subSceneNo":0,
						"index" : 1,
						"charID" : 4,
						"class" : "raymond"
					},
					{
						"speaker" : "Louise",
						"dialogue" : "Sure, I'll introduce you to Sarah, one of our volunteers.",
						"audioFile" :"raymond/LateAdulthood_Louise_LouiseOffice_13.mp3",
						"sceneName" : "scene-zero",
						"sceneNo" : 0,
						"subSceneNo":0,
						"index" : 2,
						"charID" : 1,
						"class" : "louise"
					},
					{
						"speaker" : "Sarah",
						"actionOnly" : true,
						"dialogue" : "",
						"sceneName" : "scene-zero",
						"sceneNo" : 0,
						"subSceneNo":0,
						"index" : 2,
						"charID" : 0,
						"class" : "sarah"
					},
					{
						"speaker" : "Sarah",
						"dialogue" : "Hi Raymond, I'm Sarah. I can help you find an apartment. How are you today?",
						"audioFile" :"raymond/LateAdulthood_Sarah_LouiseOffice_14.mp3",
						"sceneName" : "scene-one",
						"sceneNo" : 1,
						"subSceneNo":0,
						"index" : 3,
						"charID" : 0,
						"class" : "sarah"
					},
					{
						"speaker" : "Raymond",
						"dialogue" : "Hello...I'm sorry. Did you say your name was Terri?",
						"audioFile" :"raymond/LateAdulthood_Raymond_LouiseOffice_15.mp3",
						"sceneName" : "scene-one",
						"sceneNo" : 1,
						"subSceneNo":0,
						"index" : 4,
						"charID" : 4,
						"class" : "raymond"
					},
					{
						"speaker" : "Sarah",
						"dialogue" : "No, sir. It's Sarah.",
						"audioFile" :"raymond/LateAdulthood_Sarah_LouiseOffice_16.mp3",
						"sceneName" : "scene-one",
						"sceneNo" : 1,
						"subSceneNo":0,
						"index" : 5,
						"charID" : 0,
						"class" : "sarah"
					},
					{
						"speaker" : "Raymond",
						"dialogue" : "Oh, Sarah! I'm sorry. I thought you said Terri. I have a little trouble hearing these days.",
						"audioFile" :"raymond/LateAdulthood_Raymond_LouiseOffice_17.mp3",
						"sceneName" : "scene-one",
						"sceneNo" : 1,
						"subSceneNo":0,
						"index" : 6,
						"charID" : 4,
						"class" : "raymond"
					},
					{
						"speaker" : "Sarah",
						"dialogue" : "No worries, Raymond. I understand.",
						"audioFile" :"raymond/LateAdulthood_Sarah_LouiseOffice_18.mp3",
						"sceneName" : "scene-one",
						"sceneNo" : 1,
						"subSceneNo":0,
						"index" : 7,
						"charID" : 2,
						"charID" : 0,
						"class" : "sarah"
					},
					{
						"speaker" : "Raymond",
						"dialogue" : "Thank you, Sarah. My wife passed away last year, and I just sold our house. It isn't the same without her here. I hope you can help me find an apartment, maybe a little bit closer to the senior center and the grocery store.",
						"audioFile" :"raymond/LateAdulthood_Raymond_LouiseOffice_19.mp3",
						"sceneName" : "scene-one",
						"sceneNo" : 1,
						"subSceneNo":0,
						"index" : 8,
						"charID" : 4,
						"class" : "raymond"
					},
					{
						"speaker" : "Sarah",
						"dialogue" : "I'm sorry to hear that. Louise suggested these three places: Pine Grove Apartments, Lakeview Courts, and Sunnyvale Apartments. Let's take a look.",
						"audioFile" :"raymond/LateAdulthood_Sarah_LouiseOffice_20.mp3",
						"sceneName" : "scene-one",
						"sceneNo" : 1,
						"subSceneNo":0,
						"index" : 9,
						"charID" : 0,
						"class" : "sarah"
					}

			]

		} ];











OOIContentArray = [
                   {
                	   "apartmentName" : "Pine Grove Apartments",
                	   "apartmrntClass" : "pinegrove",
                	   "apartmentID":0,
                	   "apartmentOOIs": [
                	                 	{
                	                		"OOI" : "Front Door",
                	                		"OOIName" : "Front Door",
                	                		"OOIClass":"frontdoor",
                	                		"OOIID": 5 ,
                	                		"OOIDescription" : "This apartment features a video intercom, and smoke and carbon monoxide detectors with strobe-vibrator features.",
						                    "audioFile" :"common/LateAdulthood_Narration_Apartment_Tour_PG_LivingRoom_38.mp3",
                	                		"sceneNo":2,
                	                		"subSceneNo":0,
                	                		"characterImpact" : [
                	                				{
                	                					"character" : "Gladys",
                	                					"charID" : 2,
                	                					"charClass" : "gladys",
                	                					"OOIImpact" : "neutral",
                	                					"NPCName":"Sarah",
                	                					"NPCID":0,
                	                					"NPCClass":"sarah,",
                	                					"NPCResponse":"It's great that they have all these safety features.",
                	                					"audioFile" :"gladys/LateAdulthood_Sarah_ApartmentTour_PG_LivingRoom_40.mp3"
                	                				},
                	                				{
                	                					"character" : "Mary",
                	                					"charID" : 3,
                	                					"charClass" : "mary",
                	                					"OOIImpact" : "plus",
                	                					"NPCName":"Sarah",
                	                					"NPCID":0,
                	                					"NPCClass":"sarah,",
                	                					"NPCResponse":"It's great that they have all these safety features.",
                	                					"audioFile" :"mary/LateAdulthood_Sarah_ApartmentTour_PG_LivingRoom_41.mp3"
                	                				},
                	                				{
                	                					"character" : "Raymond",
                	                					"charID" : 4,
                	                					"charClass" : "raymond",
                	                					"OOIImpact" : "plus",
                	                					"NPCName":"Sarah",
                	                					"NPCID":0,
                	                					"NPCClass":"sarah,",
                	                					"NPCResponse":"It's great that they have all these safety features.",
                	                					"audioFile" :"raymond/LateAdulthood_Sarah_ApartmentTour_PG_LivingRoom_43.mp3"
                	                				}

                	                		]

                	                	} ,
                	                	{
                	                		"OOI" : "Steps",
                	                		"OOIName" : "Steps",
                	                		"OOIClass":"steps",
                	                		"OOIID": 3 ,
                	                		"OOIDescription" : "The entrance has steps leading to the living space.",
						                    "audioFile" :"common/LateAdulthood_Narration_Apartment_Tour_PG_LivingRoom_32.mp3",
                	                		"sceneNo":2,
                	                		"subSceneNo":1,
                	                		"characterImpact" : [
                	                				{
                	                					"character" : "Gladys",
                	                					"charID" : 2,
                	                					"charClass" : "gladys",
                	                					"OOIImpact" : "neutral minus",
                	                					"NPCName":"Sarah",
                	                					"NPCID":0,
                	                					"NPCClass":"sarah,",
                	                					"NPCResponse":"It's nice this apartment is on the ground floor, but what do you think of those steps?",
                	                					"audioFile" :"gladys/LateAdulthood_Sarah_ApartmentTour_PG_LivingRoom_34.mp3"
                	                				},
                	                				{
                	                					"character" : "Mary",
                	                					"charID" : 3,
                	                					"charClass" : "mary",
                	                					"OOIImpact" : "minus",
                	                					"NPCName":"Sarah",
                	                					"NPCID":0,
                	                					"NPCClass":"sarah,",
                	                					"NPCResponse":"Will getting up and down these steps be a problem?",
                	                					"audioFile" :"mary/LateAdulthood_Sarah_ApartmentTour_PG_LivingRoom_35.mp3"
                	                				},
                	                				{
                	                					"character" : "Raymond",
                	                					"charID" : 4,
                	                					"charClass" : "raymond",
                	                					"OOIImpact" : "neutral minus",
                	                					"NPCName":"Sarah",
                	                					"NPCID":0,
                	                					"NPCClass":"sarah,",
                	                					"NPCResponse":"It's nice this apartment is on the ground floor, but what do you think of those steps?",
                	                					"audioFile" :"raymond/LateAdulthood_Sarah_ApartmentTour_PG_LivingRoom_37.mp3"
                	                				}

                	                		]

                	                	},

{
		"OOI" : "Windows",
		"OOIName" : "Windows",
		"OOIClass":"windows",
		"OOIID": 0 ,
		"OOIDescription" : "This apartment features original wood windows with heavy frames, facing an alley.",
		"audioFile" :"common/LateAdulthood_Narration_Apartment_Tour_PG_LivingRoom_23.mp3",
		"sceneNo":2,
		"subSceneNo":1,
		"characterImpact" : [
				{
					"character" : "Gladys",
					"charID" : 2,
					"charClass" : "gladys",
					"OOIImpact" : "minus",
					"NPCName":"Sarah",
					"NPCID":0,
					"NPCClass":"sarah,",
					"NPCResponse":"Will these windows provide good lighting?",
                	"audioFile" :"gladys/LateAdulthood_Sarah_ApartmentTour_PG_LivingRoom_25.mp3"
				},
				{
					"character" : "Mary",
					"charID" : 3,
					"charClass" : "mary",
					"OOIImpact" : "minus",
					"NPCName":"Sarah",
					"NPCID":0,
					"NPCClass":"sarah,",
					"NPCResponse":"These windows are difficult to open. I think it's because of the old paint.",
                	"audioFile" :"mary/LateAdulthood_Sarah_ApartmentTour_PG_LivingRoom_26.mp3"
				},
				{
					"character" : "Raymond",
					"charID" : 4,
					"charClass" : "raymond",
					"OOIImpact" : "neutral",
					"NPCName":"Sarah",
					"NPCID":0,
					"NPCClass":"sarah,",
					"NPCResponse":"These windows provide a terrible view.",
                	"audioFile" :"raymond/LateAdulthood_Sarah_ApartmentTour_PG_LivingRoom_28.mp3"
				}

		]

	},
	{
		"OOI" : "Lights",
		"OOIName" : "Lights",
		"OOIClass":"lighting",
		"OOIID": 1 ,
		"OOIDescription" : "There are no overhead lighting and switches in most rooms. Lamps with cords are needed.",
		"audioFile" :"common/LateAdulthood_Narration_Apartment_Tour_PG_LivingRoom_26.mp3",
		"sceneNo":2,
		"subSceneNo":1,
		"characterImpact" : [
				{
					"character" : "Gladys",
					"charID" : 2,
					"charClass" : "gladys",
					"OOIImpact" : "minus",
					"NPCName":"Sarah",
					"NPCID":0,
					"NPCClass":"sarah,",
					"NPCResponse":"It's a bit dark in here. Don't trip over the lamp cord.",
                	"audioFile" :"gladys/LateAdulthood_Sarah_ApartmentTour_PG_LivingRoom_28.mp3"
				},
				{
					"character" : "Mary",
					"charID" : 3,
					"charClass" : "mary",
					"OOIImpact" : "minus",
					"NPCName":"Sarah",
					"NPCID":0,
					"NPCClass":"sarah,",
					"NPCResponse":"It's a bit dark in here. Don't trip over the lamp cord.",
                	"audioFile" :"mary/LateAdulthood_Sarah_ApartmentTour_PG_LivingRoom_29.mp3"
				},
				{
					"character" : "Raymond",
					"charID" : 4,
					"charClass" : "raymond",
					"OOIImpact" : "neutral",
					"NPCName":"Sarah",
					"NPCID":0,
					"NPCClass":"sarah,",
					"NPCResponse":"It's too bad there's no overhead lighting.",
                	"audioFile" :"raymond/LateAdulthood_Sarah_ApartmentTour_PG_LivingRoom_31.mp3"
				}

		]

	},
	{
		"OOI" : "Flooring",
		"OOIName" : "Flooring",
		"OOIClass":"flooring",
		"OOIID": 2 ,
		"OOIDescription" : "There is thick carpeting in the living space and bedroom.",
		"audioFile" :"common/LateAdulthood_Narration_Apartment_Tour_PG_LivingRoom_29.mp3",
		"sceneNo":2,
		"subSceneNo":1,
		"characterImpact" : [
				{
					"character" : "Gladys",
					"charID" : 2,
					"charClass" : "gladys",
					"OOIImpact" : "neutral",
					"NPCName":"Sarah",
					"NPCID":0,
					"NPCClass":"sarah,",
					"NPCResponse":"Isn't this carpet nice?",
                	"audioFile" :"gladys/LateAdulthood_Sarah_ApartmentTour_PG_LivingRoom_31.mp3"
				},
				{
					"character" : "Mary",
					"charID" : 3,
					"charClass" : "mary",
					"OOIImpact" : "neutral minus",
					"NPCName":"Sarah",
					"NPCID":0,
					"NPCClass":"sarah,",
					"NPCResponse":"Can you move around easily with the carpeting?",
                	"audioFile" :"mary/LateAdulthood_Sarah_ApartmentTour_PG_LivingRoom_32.mp3"
				},
				{
					"character" : "Raymond",
					"charID" : 4,
					"charClass" : "raymond",
					"OOIImpact" : "plus",
					"NPCName":"Sarah",
					"NPCID":0,
					"NPCClass":"sarah,",
					"NPCResponse":"Does carpeting help reduce background noise?",
                	"audioFile" :"raymond/LateAdulthood_Sarah_ApartmentTour_PG_LivingRoom_34.mp3"
				}

		]

	},
	{
		"OOI" : "Bathtub",
		"OOIName" : "Bathtub",
		"OOIClass":"bathtub",
		"OOIID": 4 ,
		"OOIDescription" : "The bathroom has a standard tub.",
		"audioFile" :"common/LateAdulthood_Narration_Apartment_Tour_PG_Bathroom_35.mp3",
		"sceneNo":2,
		"subSceneNo":2,
		"characterImpact" : [
				{
					"character" : "Gladys",
					"charID" : 2,
					"charClass" : "gladys",
					"OOIImpact" : "neutral minus",
					"NPCName":"Sarah",
					"NPCID":0,
					"NPCClass":"sarah,",
					"NPCResponse":"This bathroom is pretty spacious.",
                	"audioFile" :"gladys/LateAdulthood_Sarah_ApartmentTour_PG_Bathroom_37.mp3"
				},
				{
					"character" : "Mary",
					"charID" : 3,
					"charClass" : "mary",
					"OOIImpact" : "minus",
					"NPCName":"Sarah",
					"NPCID":0,
					"NPCClass":"sarah,",
					"NPCResponse":"Will you need to renovate the bathroom?",
                	"audioFile" :"mary/LateAdulthood_Sarah_ApartmentTour_PG_Bathroom_38.mp3"
				},
				{
					"character" : "Raymond",
					"charID" : 4,
					"charClass" : "raymond",
					"OOIImpact" : "neutral",
					"NPCName":"Sarah",
					"NPCID":0,
					"NPCClass":"sarah,",
					"NPCResponse":"This bathroom is pretty spacious.",
                	"audioFile" :"raymond/LateAdulthood_Sarah_ApartmentTour_PG_Bathroom_40.mp3"
				}

		]

	}


                	                     ]



                   		},
                   		{
                     	   "apartmentName" : "Lakeview Courts",
                     	   "apartmrntClass" : "lakeview",
                     	   "apartmentID":1,
                     	   "apartmentOOIs": [

                     	                 	{
                     	                 		"OOI" : "Front Door",
                     	                 		"OOIName" : "Front Door",
                     	                		"OOIClass":"frontdoor",
                     	                		"OOIID": 5 ,
                     	                 		"OOIDescription" : "The entrance has wide, garden-facing French doors with window panes.",
		                                        "audioFile" :"common/LateAdulthood_Narration_Apartment_Tour_LV_Porch_56.mp3",
                     	                 		"sceneNo":2,
                     	                 		"subSceneNo":0,
                     	                 		"characterImpact" : [
                     	                 				{
                     	                 					"character" : "Gladys",
                     	                 					"charID" : 2,
                     	                 					"charClass" : "gladys",
                     	                 					"OOIImpact" : "plus",
                     	                 					"NPCName":"Sarah",
                     	                 					"NPCID":0,
                     	                 					"NPCClass":"sarah,",
                     	                					"NPCResponse":"Wow. A nice big entrance with lots of character.",
                	                                        "audioFile" :"gladys/LateAdulthood_Sarah_ApartmentTour_LV_Porch_58.mp3"
                     	                 				},
                     	                 				{
                     	                 					"character" : "Mary",
                     	                 					"charID" : 3,
                     	                 					"charClass" : "mary",
                     	                 					"OOIImpact" : "minus",
                     	                 					"NPCName":"Sarah",
                     	                 					"NPCID":0,
                     	                 					"NPCClass":"sarah,",
                     	                					"NPCResponse":"Do you need help with the doors?",
                	                                        "audioFile" :"mary/LateAdulthood_Sarah_ApartmentTour-LV-Porch_59.mp3"
                     	                 				},
                     	                 				{
                     	                 					"character" : "Raymond",
                     	                 					"charID" : 4,
                     	                 					"charClass" : "raymond",
                     	                 					"OOIImpact" : "neutral",
                     	                 					"NPCName":"Sarah",
                     	                 					"NPCID":0,
                     	                 					"NPCClass":"sarah,",
                     	                					"NPCResponse":"Wow. A nice big entrance with lots of character.",
                	                                        "audioFile" :"raymond/LateAdulthood_Sarah_ApartmentTour_LV_Porch_61.mp3"
                     	                 				}

                     	                 		]

                     	                 	}      ,

                     	                	{
                     	                		"OOI" : "Steps",
                     	                		"OOIName" : "Steps",
                     	               		"OOIClass":"steps",
                     	               		"OOIID": 3 ,
                     	                		"OOIDescription" : "The entrance has porch steps leading up to front door.",
		                                        "audioFile" :"common/LateAdulthood_Narration_Apartment_Tour_LV_Porch_50.mp3",
                     	                		"sceneNo":2,
                     	                		"subSceneNo":0,
                     	                		"characterImpact" : [
                     	                				{
                     	                					"character" : "Gladys",
                     	                					"charID" : 2,
                     	                					"charClass" : "gladys",
                     	                					"OOIImpact" : " minus",
                     	                					"NPCName":"Sarah",
                     	                					"NPCID":0,
                     	                					"NPCClass":"sarah,",
                     	               					"NPCResponse":"Be careful getting up and down the porch steps.",
                	                                        "audioFile" :"gladys/LateAdulthood_Sarah_ApartmentTour_LV_Porch_52.mp3"
                     	                				},
                     	                				{
                     	                					"character" : "Mary",
                     	                					"charID" : 3,
                     	                					"charClass" : "mary",
                     	                					"OOIImpact" : "minus",
                     	                					"NPCName":"Sarah",
                     	                					"NPCID":0,
                     	                					"NPCClass":"sarah,",
                     	               					"NPCResponse":"Be careful getting up and down the porch steps.",
                	                                        "audioFile" :"mary/LateAdulthood_Sarah_ApartmentTour_LV_Porch_53.mp3"
                     	                				},
                     	                				{
                     	                					"character" : "Raymond",
                     	                					"charID" : 4,
                     	                					"charClass" : "raymond",
                     	                					"OOIImpact" : "neutral minus",
                     	                					"NPCName":"Sarah",
                     	                					"NPCID":0,
                     	                					"NPCClass":"sarah,",
                     	               					"NPCResponse":"What do you think about having porch steps?",
                	                                        "audioFile" :"raymond/LateAdulthood_Sarah_ApartmentTour_LV_Porch_55.mp3"
                     	                				}

                     	                		]

                     	                	},

     {
     		"OOI" : "Windows",
     		"OOIName" : "Windows",
    		"OOIClass":"windows",
    		"OOIID": 0 ,
     		"OOIDescription" : "This apartment features sliding windows and a skylight in the living space.",
		    "audioFile" :"common/LateAdulthood_Narration_Apartment_Tour_LV_LivingRoom_41.mp3",
     		"sceneNo":2,
     		"subSceneNo":1,
     		"characterImpact" : [
     				{
     					"character" : "Gladys",
     					"charID" : 2,
     					"charClass" : "gladys",
     					"OOIImpact" : "plus",
     					"NPCName":"Sarah",
     					"NPCID":0,
     					"NPCClass":"sarah,",
    					"NPCResponse":"It's so nice and bright in here.",
                	    "audioFile" :"gladys/LateAdulthood_Sarah_ApartmentTour_LV_LivingRoom_43.mp3"
     				},
     				{
     					"character" : "Mary",
     					"charID" : 3,
     					"charClass" : "mary",
     					"OOIImpact" : "plus neutral",
     					"NPCName":"Sarah",
     					"NPCID":0,
     					"NPCClass":"sarah,",
    					"NPCResponse":"You can easily open these windows.",
                	    "audioFile" :"mary/LateAdulthood_Sarah_ApartmentTour_LV_LivingRoom_44.mp3"
     				},
     				{
     					"character" : "Raymond",
     					"charID" : 4,
     					"charClass" : "raymond",
     					"OOIImpact" : "neutral",
     					"NPCName":"Sarah",
     					"NPCID":0,
     					"NPCClass":"sarah,",
    					"NPCResponse":"It's so nice and bright in here.",
                	    "audioFile" :"raymond/LateAdulthood_Sarah_ApartmentTour_LV_LivingRoom_46.mp3"
     				}

     		]

     	},
     	{
     		"OOI" : "Lights",
     		"OOIName" : "Lights",
    		"OOIClass":"lighting",
    		"OOIID": 1 ,
     		"OOIDescription" : "This apartment has glowing light switches.",
		    "audioFile" :"common/LateAdulthood_Narration_Apartment_Tour_LV_LivingRoom_44.mp3",
     		"sceneNo":2,
     		"subSceneNo":1,
     		"characterImpact" : [
     				{
     					"character" : "Gladys",
     					"charID" : 2,
     					"charClass" : "gladys",
     					"OOIImpact" : "plus",
     					"NPCName":"Sarah",
     					"NPCID":0,
     					"NPCClass":"sarah,",
    					"NPCResponse":"Glowing switches make them easy to find.",
                	    "audioFile" :"mary/LateAdulthood_Sarah_ApartmentTour_LV_LivingRoom_47.mp3"
     				},
     				{
     					"character" : "Mary",
     					"charID" : 3,
     					"charClass" : "mary",
     					"OOIImpact" : "plus neutral",
     					"NPCName":"Sarah",
     					"NPCID":0,
     					"NPCClass":"sarah,",
    					"NPCResponse":"Glowing switches make them easy to find.",
                	    "audioFile" :"raymond/LateAdulthood_Sarah_LouiseOffice_18.mp3"
     				},
     				{
     					"character" : "Raymond",
     					"charID" : 4,
     					"charClass" : "raymond",
     					"OOIImpact" : "plus neutral",
     					"NPCName":"Sarah",
     					"NPCID":0,
     					"NPCClass":"sarah,",
    					"NPCResponse":"Glowing switches make them easy to find.",
                	    "audioFile" :"raymond/LateAdulthood_Sarah_ApartmentTour_LV_LivingRoom_49.mp3"
     				}

     		]

     	},
     	{
     		"OOI" : "Flooring",
     		"OOIName" : "Flooring",
    		"OOIClass":"flooring",
    		"OOIID": 2 ,
     		"OOIDescription" : "This apartment has an open floor plan with hardwood floors.",
		    "audioFile" :"common/LateAdulthood_Narration_Apartment_Tour_LV_LivingRoom_47.mp3",
     		"sceneNo":2,
     		"subSceneNo":1,
     		"characterImpact" : [
     				{
     					"character" : "Gladys",
     					"charID" : 2,
     					"charClass" : "gladys",
     					"OOIImpact" : "plus",
     					"NPCName":"Sarah",
     					"NPCID":0,
     					"NPCClass":"sarah,",
    					"NPCResponse":"There's so much room to move around easily.",
                	    "audioFile" :"gladys/LateAdulthood_Sarah_ApartmentTour_LV_LivingRoom_49.mp3"
     				},
     				{
     					"character" : "Mary",
     					"charID" : 3,
     					"charClass" : "mary",
     					"OOIImpact" : "plus",
     					"NPCName":"Sarah",
     					"NPCID":0,
     					"NPCClass":"sarah,",
    					"NPCResponse":"There's so much room to move around easily.",
                	    "audioFile" :"mary/LateAdulthood_Sarah_LouiseOffice_18.mp3"
     				},
     				{
     					"character" : "Raymond",
     					"charID" : 4,
     					"charClass" : "raymond",
     					"OOIImpact" : "neutral minus",
     					"NPCName":"Sarah",
     					"NPCID":0,
     					"NPCClass":"sarah,",
    					"NPCResponse":"Does the open space create too much echoing?",
                	    "audioFile" :"raymond/LateAdulthood_Sarah_ApartmentTour_LV_LivingRoom_52.mp3"
     				}

     		]

     	},
     	{
     		"OOI" : "Bathtub",
     		"OOIName" : "Bathtub",
    		"OOIClass":"bathtub",
    		"OOIID": 4 ,
     		"OOIDescription" : "This apartment features an accessible bathtub with handrails along the walls.",
		    "audioFile" :"common/LateAdulthood_Narration_Apartment_Tour_LV_Bathroom_53.mp3",
     		"sceneNo":2,
     		"subSceneNo":2,
     		"characterImpact" : [
     				{
     					"character" : "Gladys",
     					"charID" : 2,
     					"charClass" : "gladys",
     					"OOIImpact" : "neutral minus",
     					"NPCName":"Sarah",
     					"NPCID":0,
     					"NPCClass":"sarah,",
    					"NPCResponse":"This is really nice bathroom with great safety features.",
                	    "audioFile" :"gladys/LateAdulthood_Sarah_ApartmentTour_LV_Bathroom_55.mp3"
     				},
     				{
     					"character" : "Mary",
     					"charID" : 3,
     					"charClass" : "mary",
     					"OOIImpact" : "plus",
     					"NPCName":"Sarah",
     					"NPCID":0,
     					"NPCClass":"sarah,",
    					"NPCResponse":"This is really nice bathroom with great safety features.",
                	    "audioFile" :"mary/LateAdulthood_Sarah_ApartmentTour_LV_Bathroom_56.mp3"
     				},
     				{
     					"character" : "Raymond",
     					"charID" : 4,
     					"charClass" : "raymond",
     					"OOIImpact" : "plus neutral",
     					"NPCName":"Sarah",
     					"NPCID":0,
     					"NPCClass":"sarah,",
    					"NPCResponse":"This is really nice bathroom with great safety features.",
                	    "audioFile" :"raymond/LateAdulthood_Sarah_ApartmentTour_LV_Bathroom_58.mp3"
     				}

     		]

     	}

                     	                     ]



                        		},
                        		{
                             	   "apartmentName" : "Sunnyvale Apartments",
                             	   "apartmrntClass" : "sunnyvale",
                             	   "apartmentID":2,
                             	   "apartmentOOIs": [


                             	                 	{
                             	                 		"OOI" : "Front Door",
                             	                 		"OOIName" : "Front Door",
                             	                		"OOIClass":"frontdoor",
                             	                		"OOIID": 5 ,
                             	                 		"OOIDescription" : "The building entrance faces a busy street.",
                	                                    "audioFile" :"common/LateAdulthood_Narration_Apartment_Tour_SV_LivingRoom_74.mp3",
                             	                 		"sceneNo":2,
                             	                 		"subSceneNo":0,
                             	                 		"characterImpact" : [
                             	                 				{
                             	                 					"character" : "Gladys",
                             	                 					"charID" : 2,
                             	                 					"charClass" : "gladys",
                             	                 					"OOIImpact" : "minus",
                             	                 					"NPCName":"Sarah",
                             	                 					"NPCID":0,
                             	                 					"NPCClass":"sarah,",
                             	                					"NPCResponse":"Lots of cars and foot traffic around here. Will you be able to get around okay?",
                	                                                "audioFile" :"gladys/LateAdulthood_Sarah_ApartmentTour_SV_LivingRoom_76.mp3"
                             	                 				},
                             	                 				{
                             	                 					"character" : "Mary",
                             	                 					"charID" : 3,
                             	                 					"charClass" : "mary",
                             	                 					"OOIImpact" : "neutral minus",
                             	                 					"NPCName":"Sarah",
                             	                 					"NPCID":0,
                             	                 					"NPCClass":"sarah,",
                             	                					"NPCResponse":"Lots of cars and foot traffic around here. Will you be able to get around okay?",
                	                                                "audioFile" :"mary/LateAdulthood_Sarah_ApartmentTour_SV_LivingRoom_77.mp3"
                             	                 				},
                             	                 				{
                             	                 					"character" : "Raymond",
                             	                 					"charID" : 4,
                             	                 					"charClass" : "raymond",
                             	                 					"OOIImpact" : "neutral",
                             	                 					"NPCName":"Sarah",
                             	                 					"NPCID":0,
                             	                 					"NPCClass":"sarah,",
                             	                					"NPCResponse":"Lots of cars and foot traffic around here. Is this too noisy for you?",
                	                                                "audioFile" :"raymond/LateAdulthood_Sarah_ApartmentTour_SV_LivingRoom_79.mp3"
                             	                 				}

                             	                 		]

                             	                 	}      ,

                             	                	{
                             	                		"OOI" : "Steps",
                             	                		"OOIName" : "Steps",
                             	               		"OOIClass":"steps",
                             	               		"OOIID": 3 ,
                             	                		"OOIDescription" : "The entrance has a ramp to the front door.",
                	                                    "audioFile" :"common/LateAdulthood_Narration_Apartment_Tour_SV_Porch_68.mp3",
                             	                		"sceneNo":2,
                             	                		"subSceneNo":0,
                             	                		"characterImpact" : [
                             	                				{
                             	                					"character" : "Gladys",
                             	                					"charID" : 2,
                             	                					"charClass" : "gladys",
                             	                					"OOIImpact" : "plus",
                             	                					"NPCName":"Sarah",
                             	                					"NPCID":0,
                             	                					"NPCClass":"sarah,",
                             	               					"NPCResponse":"It's good that there's a ramp instead of stairs.",
                	                                                "audioFile" :"gladys/LateAdulthood_Sarah_ApartmentTour_SV_Porch_70.mp3"
                             	                				},
                             	                				{
                             	                					"character" : "Mary",
                             	                					"charID" : 3,
                             	                					"charClass" : "mary",
                             	                					"OOIImpact" : "plus",
                             	                					"NPCName":"Sarah",
                             	                					"NPCID":0,
                             	                					"NPCClass":"sarah,",
                             	               					"NPCResponse":"It's good they have a ramp instead of stairs.",
                	                                                "audioFile" :"mary/LateAdulthood_Sarah_ApartmentTour_SV_Porch_71.mp3"
                             	                				},
                             	                				{
                             	                					"character" : "Raymond",
                             	                					"charID" : 4,
                             	                					"charClass" : "raymond",
                             	                					"OOIImpact" : "neutral plus",
                             	                					"NPCName":"Sarah",
                             	                					"NPCID":0,
                             	                					"NPCClass":"sarah,",
                             	               					"NPCResponse":"It's good that there's a ramp instead of stairs.",
                	                                                "audioFile" :"raymond/LateAdulthood_Sarah_ApartmentTour_SV_Porch_73.mp3"
                             	                				}

                             	                		]

                             	                	},

             {
             		"OOI" : "Windows",
             		"OOIName" : "Windows",
            		"OOIClass":"windows",
            		"OOIID": 0 ,
             		"OOIDescription" : "This apartment has narrow, crank-to-open windows.",
                	"audioFile" :"common/LateAdulthood_Narration_Apartment_Tour_SV_LivingRoom_59.mp3",
             		"sceneNo":2,
             		"subSceneNo":1,
             		"characterImpact" : [
             				{
             					"character" : "Gladys",
             					"charID" : 2,
             					"charClass" : "gladys",
             					"OOIImpact" : "minus",
             					"NPCName":"Sarah",
             					"NPCID":0,
             					"NPCClass":"sarah,",
            					"NPCResponse":"You won't get a lot of sunlight with these windows.",
                	            "audioFile" :"gladys/LateAdulthood_Sarah_ApartmentTour_SV_LivingRoom_61.mp3"
             				},
             				{
             					"character" : "Mary",
             					"charID" : 3,
             					"charClass" : "mary",
             					"OOIImpact" : "plus",
             					"NPCName":"Sarah",
             					"NPCID":0,
             					"NPCClass":"sarah,",
            					"NPCResponse":"These windows open easily.",
                	            "audioFile" :"mary/LateAdulthood_Sarah_ApartmentTour_SV_LivingRoom_62.mp3"
             				},
             				{
             					"character" : "Raymond",
             					"charID" : 4,
             					"charClass" : "raymond",
             					"OOIImpact" : "plus neutral",
             					"NPCName":"Sarah",
             					"NPCID":0,
             					"NPCClass":"sarah,",
            					"NPCResponse":"These windows seem to block a lot of outside noise.",
                	            "audioFile" :"raymond/LateAdulthood_Sarah_ApartmentTour_SV_LivingRoom_64.mp3"
             				}

             		]

             	},
             	{
             		"OOI" : "Lights",
             		"OOIName" : "Lights",
            		"OOIClass":"lighting",
            		"OOIID": 1 ,
             		"OOIDescription" : "This apartment features track lighting with motion detectors.",
                	"audioFile" :"common/LateAdulthood_Narration_Apartment_Tour_SV_LivingRoom_62.mp3",
             		"sceneNo":2,
             		"subSceneNo":1,
             		"characterImpact" : [
             				{
             					"character" : "Gladys",
             					"charID" : 2,
             					"charClass" : "gladys",
             					"OOIImpact" : "plus neutral",
             					"NPCName":"Sarah",
             					"NPCID":0,
             					"NPCClass":"sarah,",
            					"NPCResponse":"It's so cool not to have to use switches to turn on the lights.",
                	            "audioFile" :"gladys/LateAdulthood_Sarah_ApartmentTour_SV_LivingRoom_64.mp3"
             				},
             				{
             					"character" : "Mary",
             					"charID" : 3,
             					"charClass" : "mary",
             					"OOIImpact" : "plus neutral",
             					"NPCName":"Sarah",
             					"NPCID":0,
             					"NPCClass":"sarah,",
            					"NPCResponse":"It's so cool not to have to use switches to turn on the lights.",
                	            "audioFile" :"mary/LateAdulthood_Sarah_ApartmentTour_SV_LivingRoom_65.mp3"
             				},
             				{
             					"character" : "Raymond",
             					"charID" : 4,
             					"charClass" : "raymond",
             					"OOIImpact" : "plus neutral",
             					"NPCName":"Sarah",
             					"NPCID":0,
             					"NPCClass":"sarah,",
            					"NPCResponse":"It's so cool not to have to use switches to turn on the lights.",
                	            "audioFile" :"raymond/LateAdulthood_Sarah_ApartmentTour_SV_LivingRoom_67.mp3"
             				}

             		]

             	},
             	{
             		"OOI" : "Flooring",
             		"OOIName" : "Flooring",
            		"OOIClass":"flooring",
            		"OOIID": 2 ,
             		"OOIDescription" : "This apartment has an open floor plan with linoleum flooring.",
                	"audioFile" :"common/LateAdulthood_Narration_Apartment_Tour_SV_LivingRoom_65.mp3",
             		"sceneNo":2,
             		"subSceneNo":1,
             		"characterImpact" : [
             				{
             					"character" : "Gladys",
             					"charID" : 2,
             					"charClass" : "gladys",
             					"OOIImpact" : "plus",
             					"NPCName":"Sarah",
             					"NPCID":0,
             					"NPCClass":"sarah,",
            					"NPCResponse":"There's so much room to move around easily.",
                	            "audioFile" :"gladys/LateAdulthood_Sarah_ApartmentTour_SV_LivingRoom_67.mp3"
             				},
             				{
             					"character" : "Mary",
             					"charID" : 3,
             					"charClass" : "mary",
             					"OOIImpact" : "plus",
             					"NPCName":"Sarah",
             					"NPCID":0,
             					"NPCClass":"sarah,",
            					"NPCResponse":"There's so much room to move around easily.",
                	            "audioFile" :"mary/LateAdulthood_Sarah_ApartmentTour_SV_LivingRoom_68.mp3"
             				},
             				{
             					"character" : "Raymond",
             					"charID" : 4,
             					"charClass" : "raymond",
             					"OOIImpact" : "minus",
             					"NPCName":"Sarah",
             					"NPCID":0,
             					"NPCClass":"sarah,",
            					"NPCResponse":"Does the open space create too much echoing?",
                	            "audioFile" :"raymond/LateAdulthood_Sarah_ApartmentTour_SV_LivingRoom_70.mp3"
             				}

             		]

             	},
             	{
             		"OOI" : "Bathtub",
             		"OOIName" : "Bathtub",
            		"OOIClass":"bathtub",
            		"OOIID": 4 ,
             		"OOIDescription" : "This apartment features an accessible shower with handrails along the walls.",
                	"audioFile" :"common/LateAdulthood_Narration_Apartment_Tour_SV_Bathroom_71.mp3",
             		"sceneNo":2,
             		"subSceneNo":2,
             		"characterImpact" : [
             				{
             					"character" : "Gladys",
             					"charID" : 2,
             					"charClass" : "gladys",
             					"OOIImpact" : "neutral plus",
             					"NPCName":"Sarah",
             					"NPCID":0,
             					"NPCClass":"sarah,",
            					"NPCResponse":"This is really nice bathroom with great safety features.",
                	            "audioFile" :"gladys/LateAdulthood_Sarah_ApartmentTour_SV_Bathroom_73.mp3"
             				},
             				{
             					"character" : "Mary",
             					"charID" : 3,
             					"charClass" : "mary",
             					"OOIImpact" : "plus",
             					"NPCName":"Sarah",
             					"NPCID":0,
             					"NPCClass":"sarah,",
            					"NPCResponse":"This is really nice bathroom with great safety features.",
                	            "audioFile" :"mary/LateAdulthood_Sarah_ApartmentTour_SV_Bathroom_74.mp3"
             				},
             				{
             					"character" : "Raymond",
             					"charID" : 4,
             					"charClass" : "raymond",
             					"OOIImpact" : "neutral plus",
             					"NPCName":"Sarah",
             					"NPCID":0,
             					"NPCClass":"sarah,",
            					"NPCResponse":"This is really nice bathroom with great safety features.",
                	            "audioFile" :"raymond/LateAdulthood_Sarah_ApartmentTour_SV_BathRoom_79.mp3"
             				}

             		]

             	}

                             	                     ]



                                		}
                   		];



/*
 * { 'speaker':'Sarah', 'informationText': 'Click in the info text. Click on
 * something else. I dont care as long as you do something over here.Have a nice
 * Day.', 'index': 1 } , { 'speaker':'Gladys', 'informationText': 'Alright
 * Alright Alright! It works apparently!', 'index': 2 }
 *
 */

gameScoreArray = [
                  {
                  	apartmentClass : "pinegrove",
                  	taggedOOIs :
                  	              [5,5,5,5,5,5/*
                  	            	{"frontdoor": 5},
                  	            	{"steps":5},
                  	            	{"windows":5},
                  	            	{"lighting":5},
                  	            	{"flooring":5},
                  	            	{"bathtub":5}
                  	              */]


                   },
                   {
                  	apartmentClass : "lakeview",
                  	taggedOOIs :
                  	              [5,5,5,5,5,5]


                   },
                   {
                  	apartmentClass : "sunnyvale",
                  	taggedOOIs :
                  	              [5,5,5,5,5,5]


                   }


                   ];




engagementScoreArray = [
                        {
                          	apartmentClass : "pinegrove",
                          	mapIcon : 5 ,
                          	taggedOOIs :[5,5,5,5,5,5] ,
                            clickedOOIs : [5,5,5,5,5,5]
                           },
                           {
                          	apartmentClass : "lakeview",
                          	mapIcon : 5 ,
                          	taggedOOIs :[5,5,5,5,5,5] ,
                            clickedOOIs : [5,5,5,5,5,5]

                           },
                           {
                          	apartmentClass : "sunnyvale",
                          	mapIcon : 5 ,
                          	taggedOOIs :[5,5,5,5,5,5] ,
                            clickedOOIs : [5,5,5,5,5,5]

                           }


                           ]

defaultPlayerOOITags = [
													 									                 {
													 									                	apartmentClass : "pinegrove",
													 									                	taggedOOIs :
													 									                	              [
													 									                	            	{"frontdoor": "minus"},
													 									                	            	{"steps":"plus"},
													 									                	            	{"windows":"neutral"},
													 									                	            	{"lighting":"minus"},
													 									                	            	{"flooring":"plus"},
													 									                	            	{"bathtub":"neutral"}
													 									                	              ]


													 									                 },
													 									                 {
													 									                	apartmentClass : "lakeview",
													 									                	taggedOOIs :
													 									                	              [
													 									               	            	{"frontdoor": "plus"},
													 									            	            	{"steps":"minus"},
													 									            	            	{"windows":"plus"},
													 									            	            	{"lighting":"plus"},
													 									            	            	{"flooring":"plus"},
													 									            	            	{"bathtub":"neutral"}
													 									            	              ]


													 									                 },
													 									                 {
													 									                	apartmentClass : "sunnyvale",
													 									                	taggedOOIs :
													 									                	              [
													 									               	            	{"frontdoor": "plus"},
													 									            	            	{"steps":"minus"},
													 									            	            	{"windows":"plus"},
													 									            	            	{"lighting":"neutral"},
													 									            	            	{"flooring":"minus"},
													 									            	            	{"bathtub":"neutral"}
													 									            	              ]


													 									                 }


													 									                 ]



playerOOITags = [
                 {
                	apartmentClass : "pinegrove",
                	taggedOOIs :
                	              [
                	            	{"frontdoor": "none"},
                	            	{"steps":"none"},
                	            	{"windows":"none"},
                	            	{"lighting":"none"},
                	            	{"flooring":"none"},
                	            	{"bathtub":"none"}
                	              ]


                 },
                 {
                	apartmentClass : "lakeview",
                	taggedOOIs :
                	              [
               	            	{"frontdoor": "none"},
            	            	{"steps":"none"},
            	            	{"windows":"none"},
            	            	{"lighting":"none"},
            	            	{"flooring":"none"},
            	            	{"bathtub":"none"}
            	              ]


                 },
                 {
                	apartmentClass : "sunnyvale",
                	taggedOOIs :
                	              [
               	            	{"frontdoor": "none"},
            	            	{"steps":"none"},
            	            	{"windows":"none"},
            	            	{"lighting":"none"},
            	            	{"flooring":"none"},
            	            	{"bathtub":"none"}
            	              ]


                 }


                 ]


loadingTipsArray = [
		"Describe how a person's brain and body change in late adulthood"
		];
instructionsArray = [
		{
			"instructionTitle" : "Good day, Quest Adventurer!",
			"instructionContent" : "<p>Imagine yourself as an older adult, living in Quest City. You have recently sold your home and need to find a new apartment today. </p>",
            "audioFile" :"common/LateAdulthood_Narration_GameIntro1_2.mp3"
		},
		{
			"instructionTitle" : "",
			"audioFile" :"common/LateAdulthood_Narration_GameIntro2_NEW.mp3",
			"instructionContent" : "<p>Sarah, a senior center volunteer, will go with you to look at three different apartments. Explore each apartment carefully. Pay attention to the clues and make the best choice.  </p><p>What do you want or need in a living space? </p><p>What features will help you live longer and happier?</p>  ",
		},
		{
			"instructionTitle" : "",
			"audioFile" :"common/LateAdulthood_Narration_GameIntro3_NEW.mp3",
			"instructionContent" : "<p>Each apartment has pros and cons , so take your time in picking the place that will make your life safer and healthier. </p><p>Your happiness depends on it.</p>",

		},
		{
			"instructionTitle" : "",
			"audioFile" :"common/LateAdulthood_Narration_GameIntro-Interactive_3.mp3",
			"instructionContent" : "<p>As we get older, we start to notice some physical changes such as wrinkled skin and thinning hair. </p><p>But there are also functional changes that can impact daily living.</p>",
		}

];

ailmentArray = [ {
	'ailment' : 'Visual Impairment',
	"audioFile" :"common/LateAdulthood_Narration_GameIntro-Interactive_4.mp3",
	'description' : 'People who are older generally need more light in order to see, sometimes have difficulty with depth perception, and may be more sensitive to glare. Activities such as driving can become difficult. ',
	"index": 0,
	"class" : "eye"

}, {
	'ailment' : 'Mobility Impairment',
	"audioFile" :"common/LateAdulthood_Narration_GameIntro-Interactive_6.mp3",
	'description' : 'People who are older also lose body strength, flexibility and balance, affecting daily activities such as doing chores around the home, and possibly contributing to falls and accidents. ',
	"index": 1,
	"class" : "leg"

}, {
	'ailment' : 'Auditory Impairment',
	"audioFile" :"common/LateAdulthood_Narration_GameIntro-Interactive_5.mp3",
	'description' : 'People who are older may have hearing impairments. Although hearing aids are an option, they sometimes magnify background noise as well as speech. ',
	"index": 2,
	"class" : "ear"

}

];




var reviewConversationArray = [
                           {
                        	   "character":"Gladys",
                        	   "selectedApartment":[
                        	                        {
                        	                        	"apartment":"pinegrove",
	                                                    "audioFile" :"gladys/LateAdulthood_Gladys_LouiseOffice_83.mp3",
                        	                        	"playerReview":"It's much too dark, and I get nervous when I move around. I tripped over the coffee table the other day and hurt my ankle. I'm going to have to get the lights replaced with some brighter ones."
                        	                        },
                        	                        {
                        	                        	"apartment":"lakeview",
	                                                    "audioFile" :"gladys/LateAdulthood_Gladys_LouiseOffice_84.mp3",
                        	                        	"playerReview":"It's perfect.The apartment is really bright, and the glowing light switches are great. I can find them easily."
                        	                        },
                        	                        {
                        	                        	"apartment":"sunnyvale",
	                                                    "audioFile" :"gladys/LateAdulthood_Gladys_LouiseOffice_85.mp3",
                        	                        	"playerReview":"The narrow windows let in very little light making it difficult for me to see and move around. I'm going to need better lighting."
                        	                        }


                        	                        ]

                           } ,
                           {
                        	   "character":"Mary",
                        	   "selectedApartment":[
                        	                        {
                        	                        	"apartment":"pinegrove",
	                                                    "audioFile" :"mary/LateAdulthood_Mary_LouiseOffice_84.mp3",
                        	                        	"playerReview":"The apartment is quite nice, but it's difficult to get up and down the steps into the living room with my walker. And I really need an accessible bathroom. The poor lighting also does not help. I get scared about tripping over all the lamp cords. "
                        	                        },
                        	                        {
                        	                        	"apartment":"lakeview",
	                                                    "audioFile" :"mary/LateAdulthood_Mary_LouiseOffice_85.mp3",
                        	                        	"playerReview":"The apartment would probably be fine for someone else, but the bathroom does not work for me. And the steps leading up to the porch is just too much work to get up and down each day. I also can't get those French doors to open without much effort."
                        	                        },
                        	                        {
                        	                        	"apartment":"sunnyvale",
	                                                    "audioFile" :"mary/LateAdulthood_Mary_LouiseOffice_86.mp3",
                        	                        	"playerReview":"I'm not quite as spry as I used to be, and I have some trouble getting around. This apartment has a great floor plan. I can move around easily. And the bathroom's been modified for people with impaired mobility, which is perfect for my condition."
                        	                        }


                        	                        ]

                           } ,
                           {
                        	   "character":"Raymond",
                        	   "selectedApartment":[
                        	                        {
                        	                        	"apartment":"pinegrove",
	                                                    "audioFile" :"raymond/LateAdulthood_Raymond_LouiseOffice_86.mp3",
                        	                        	"playerReview":"I love it. The video intercom and accessible smoke and carbon detectors are just what I needed."
                        	                        },
                        	                        {
                        	                        	"apartment":"lakeview",
	                                                    "audioFile" :"raymond/LateAdulthood_Raymond_LouiseOffice_87.mp3",
                        	                        	"playerReview":"I'm not happy with it. The apartment is nice, and I like the hardwood floors because I can feel vibrations. But Pine Grove would have been better with the video intercom and detectors with strobe lights and vibrations."
                        	                        },
                        	                        {
                        	                        	"apartment":"sunnyvale",
	                                                    "audioFile" :"raymond/LateAdulthood_Raymond_LouiseOffice_88.mp3",
                        	                        	"playerReview":"I don't really like it. The building faces a busy street, and the noise outside is very distracting. I also wish it has a video intercom and the accessible detectors that Pine Grove has."
                        	                        }


                        	                        ]

                           }






                               ]



characterIDArray = [ 'sarah', 'louise', 'gladys', 'mary', 'raymond' ];
characterPlayerIDArray = [ 'gladys', 'mary', 'raymond' ];

subSceneArray = [ 'exterior', 'livingroom', 'bathroom' ];
var subSceneNames = ['Exterior', 'Livingroom', 'Bathroom'];

playerCharacterArray = [ {
	'name' : 'Gladys',
	'gender' : 'Female',
	'age' : ' 73 ',
	"audioFile" :"gladys/LateAdulthood_Narration_SpinWheel_10.mp3",
	'ethnicity' : 'African-American ',
	'identity' : 'Woman',
	'avtar' : 'assets/images/gladys-icon.png',
	'index' : 0,
	'charID' : 2,
	'class' : 'gladys',
	"impairment" : "visual impairment",
	"rightApartment":"lakeview"

}, {
	'name' : 'Mary',
	'gender' : 'Female',
	'age' : '83 ',
	"audioFile" :"mary/LateAdulthood_Narration_SpinWheel_10.mp3",
	'ethnicity' : 'Caucasian  ',
	'identity' : 'Woman',
	'avtar' : 'assets/images/mary-icon.png',
	'index' : 1,
	'charID' : 3,
	'class' : 'mary',
	"impairment" : "mobility impairments",
	"rightApartment":"sunnyvale"

}, {
	'name' : 'Raymond',
	'gender' : 'Male',
	'age' : '79 ',
	"audioFile" :"raymond/LateAdulthood_Narration_SpinWheel_10.mp3",
	'ethnicity' : 'Hispanic',
	'identity' : 'man',
	'avtar' : 'assets/images/raymond-icon.png',
	'index' : 2,
	'charID' : 4,
	'class' : 'raymond',
	"impairment" : "auditory impairment",
	"rightApartment":"pinegrove"

}

];

var apartmentSelected=   {
		"pinegrove"	: 0 ,
		"lakeview" : 1,
		"sunnyvale":2


};



appContainer = document.getElementById('appContainer');
controlInfo = document.getElementById('controlInfo');
closeInfoText = document.getElementById('closeInfoText');
controlInfoIcon = document.getElementById('controlInfoIcon');
hintInterface = document.getElementById('hintInterface');
progressLine = document.getElementById('progressLine');
progressBar = document.getElementById('progressBar');
/* controlLayer = document.getElementById('controlLayer') ; */
infoText = document.getElementById('infoText');
var hintInfoText= document.getElementById('hintInfoText');
objectTitle = document.getElementById('objectTitle');
gameMap = document.getElementById('gameMap');

controlMap = document.getElementById('controlMap');
loadingTips = document.getElementById('loadingTips');
charAnn = document.getElementById('characterAnn');
gameMode = document.getElementById('gameMode');
controlMode = document.getElementById('controlMode');
charSarah = document.getElementById('characterSarah');
chairLouiseZero = document.getElementById('chairLouiseZero');
leftNav = document.getElementById('leftNav');
rightNav = document.getElementById('rightNav');
disableClickLayer = document.getElementById('disableClickLayer');
apartmentRedirect = document.getElementById('apartmentRedirect');

movingCircle = document.querySelectorAll('circle')[0];
scoreSvg = document.getElementById('scoreSvg');

tagNotes = document.getElementById('tagNotes');
replayControl = document.getElementById('replayControl');
controlNotes = document.getElementById('controlNotes');
dismissAilmentButton  = document.getElementById('dismissAilmentButton');
buttonPrev = document.getElementById('prevButton');
sceneWrapper = document.getElementById('sceneWrapper');
OOILayer = document.getElementById('OOILayer');
ailmentNotes = document.getElementById('ailmentNotes');
engagementScoreBox = document.getElementById('engagementScoreBox');
buttonPlay = document.getElementById('playButton');
guideHeader = document.getElementById('guideHeader');
buttonNext = document.getElementById('nextButton');
characterPin = document.getElementById('characterPin');
backGroundZeroZero = document.getElementById('backGroundZeroZero');
gameMusic = document.getElementById('gameMusic');
gameMusicControl = document.getElementById('gameMusicControl');
soundControl = document.getElementById('soundControl');
apartmentTitle = document.getElementById('apartmentTitle');
decisionButtonHUD = document.getElementById('decisionButtonHUD');
rentDetails = document.getElementById('rentDetails');
ailmentTitle = document.getElementById('ailmentTitle');
ratingDetails = document.getElementById('ratingDetails');
charProfile = document.getElementById('charProfile');
charAvtar = document.getElementById('charAvtar');
charProfileName = document.getElementById('charProfileName');
charProfileSummary = document.getElementById('charProfileSummary');
charDetailsList = document.getElementById('charDetailsList');
charDetailsOne = document.getElementById('charDetailsOne');
userInterface = document.getElementById('userInterface');
controlScore = document.getElementById('controlScore');
charDetailsTwo = document.getElementById('charDetailsTwo');
distanceDetails = document.getElementById('distanceDetails');
ammenitiesDetails = document.getElementById('ammenitiesDetails');
tourButton = document.getElementById('tourButton');
apartmentInfo = document.getElementById('apartmentInfo');
exploredObjectsList = document.getElementById('exploredObjectsList');
noOfObjectsExplored = document.getElementById('noOfObjectsExplored');
instructionHUD = document.getElementById('instructionHUD');
instructionTitle = document.getElementById('instructionTitle');
instructionContent = document.getElementById('instructionContent');
nextButton = document.getElementById('nextButton');
spinButton = document.getElementById('spinButton');
infoClose = document.getElementById('infoClose');
ailmentContent = document.getElementById('ailmentContent');
noteDismissButton = document.getElementById('noteDismissButton');
characterSelectionWidget = document.getElementById('characterSelectionWidget');
/* widgetTitle = document.getElementById('widgetTitle') ; */
closeObject = document.getElementById('closeObject');
slotMachine = document.getElementById('slotMachine');
machineBackground = document.getElementById('machineBackground');
gameOverlay = document.getElementById('gameOverlay');
conversationLayer = document.getElementById('conversationLayer');
conversationBubble = document.getElementById('conversationBubble');
ringOne  = document.getElementById('ring-1');
speakerName = document.getElementById('speakerName');
conversationtext = document.getElementById('conversationtext');
controlSetting  = document.getElementById('controlSetting');
controlMap  = document.getElementById('controlMap');
objectDescriptionContent  = document.getElementById('objectDescriptionContent');
objectDescription  = document.getElementById('objectDescription');
objectEffectContent   = document.getElementById('objectEffectContent');
activeApartment   = document.getElementById('activeApartment');
inActiveApartmentLeft   = document.getElementById('inActiveApartmentLeft');
inActiveApartmentRight   = document.getElementById('inActiveApartmentRight');
scoreContainer   = document.getElementById('scoreContainer');
scoreTitle   = document.getElementById('scoreTitle');
scoreContent   = document.getElementById('scoreContent');
gameRestart   = document.getElementById('gameRestart');





apartmentIcon = document.getElementsByClassName('apartment');
taggedApartmentOOI = document.getElementsByClassName('apartment-OOI');
ailments = document.getElementsByClassName('ailments');
controlBars = document.getElementsByClassName('controlBars');
objectEffectTag = document.getElementsByClassName('object-effect-tag');
charAge = document.getElementsByClassName('char-age');
spinnerCharInfo = document.getElementsByClassName('spinner-char-info');
charEthnicity = document.getElementsByClassName('char-ethnicity');
charGender = document.getElementsByClassName('char-gender');
charName = document.getElementsByClassName('char-name');
charPoster = document.getElementsByClassName('poster');
inSceneOOIs  = document.getElementsByClassName('in-scene-OOI');

ailments[0].classList.add('learn');

/** Initializing functions ** */
//document.documentElement.webkitRequestFullscreen();
var windowWidth = window.innerWidth, windowHeight = window.innerHeight, windowWidthNew;
windowWidthNew = (windowHeight * 4) / 3;

appContainer.style.height = windowHeight + 'px';
appContainer.style.width = windowWidthNew + 'px';
var margin = windowWidth - windowWidthNew;
margin = margin / 2;
appContainer.style.margin = '0px ' + margin + 'px';

loadGame();
// initGame();
// showProgress();
// toggleGameMusic();

/** Initializing functions ** */
//appContainer.webkitRequestFullscreen();
function loadGame() {
	setup_posters(ringOne);
	showProgress();
	showGameTitle()
	//toggleGameMusic();
	//setTimeout(initGame, loadDuration - 25000);
}

function initGame() {
	hideProgress();
	hideGameTitle();
	welcomePlayer();
	// showControls();
	// alert();





}
function resetgame(){

	location.reload();

	/*
	navigateScenes(0,0,function(){
		instructionHUD.classList.remove('hide');
		charProfile.classList.add('hide');

		instructionTitle.classList.remove('hide');
		instructionContent.classList.remove('hide');
	});
	controlMap.classList.add('hide');
	gameOverlay.classList.add('tint');
	progressBar.classList.remove('tint');

	navigateInstructions();
*/}
function toggleGameMusic() {
	if (gameMusicControl)
		if (hasClass(gameMusicControl, 'on')) {
		    audioNarrationActive = false;
			gameMusicControl.classList.remove('on');
			soundControl.src = "assets/images/audio-off.png";
			if(audio){
				audio.pause();
			}

			//gameMusic.pause();
		} else {
			audioNarrationActive = true ;
			gameMusicControl.classList.add('on');
			soundControl.src = "assets/images/audio-on.png";
				if(audio){
				//audio.play();
			}
			//gameMusic.play();
		}

}

function hasClass(element, cls) {
	return (' ' + element.className + ' ').indexOf(' ' + cls + ' ') > -1;
}

function toggleAnnAnimation() {
	if (hasClass(charAnn, 'shake-anim')) {
		charAnn.classList.remove('shake-anim');
	} else {
		charAnn.classList.add('shake-anim');
	}

}

function toggleSarahAnimation() {
	if (hasClass(charSarah, 'shake-anim')) {
		charSarah.classList.remove('shake-anim');
	} else {
		charSarah.classList.add('shake-anim');
	}

}

function toggleSarahSitAnimation() {

	if (hasClass(charSarah, 'sit-anim')) {
		charSarah.classList.remove('sit-anim');
		charSarah.classList.remove('sit');
		charSarah.classList.add('stand-anim');
	} else {
		charSarah.classList.add('sit-anim');
		charSarah.classList.add('sit');
		charSarah.classList.remove('stand-anim');
	}

}

/** ****** UI Events ****** */

/*
 * buttonPlay.addEventListener('click',function(){ toggleAnnAnimation();
 * toggleSarahAnimation(); });
 *
 * buttonPrev.addEventListener('click',function(){ toggleSarahSitAnimation();
 * });
 */
spinButton.addEventListener('click', function(e) {

	//e.stopPropagation();
		if (contextCount == 1) {
			meetCharacter();
		}else{
			if(!spinned){
			playerSelected = true;
			spinned = true;
			spinButton.classList.add('hide');
			characterInfoLayer.classList.add('show')
			spinButton.classList.remove('point');
			selectCharacter(playerCharacterArray);
			if(audio){
			audio.pause();
			}

			}
		}




});
gameRestart.addEventListener('click', function(e) {

	//window.location.reload();

	//restartTheGame();
	restartGame();
});



function restartGame(){


currentOOIDescription = "";

currentOOI = {};
engagementScoreArray = [
												{
														apartmentClass : "pinegrove",
														mapIcon : 5 ,
														taggedOOIs :[5,5,5,5,5,5] ,
														clickedOOIs : [5,5,5,5,5,5]
													 },
													 {
														apartmentClass : "lakeview",
														mapIcon : 5 ,
														taggedOOIs :[5,5,5,5,5,5] ,
														clickedOOIs : [5,5,5,5,5,5]

													 },
													 {
														apartmentClass : "sunnyvale",
														mapIcon : 5 ,
														taggedOOIs :[5,5,5,5,5,5] ,
														clickedOOIs : [5,5,5,5,5,5]

													 }


													 ]
playerOOITags   = [
									{
									apartmentClass : "pinegrove",
									taggedOOIs :
																[
																{"frontdoor": "none"},
																{"steps":"none"},
																{"windows":"none"},
																{"lighting":"none"},
																{"flooring":"none"},
																{"bathtub":"none"}
																]


									},
									{
									apartmentClass : "lakeview",
									taggedOOIs :
																[
																{"frontdoor": "none"},
														{"steps":"none"},
														{"windows":"none"},
														{"lighting":"none"},
														{"flooring":"none"},
														{"bathtub":"none"}
														]


									},
									{
									apartmentClass : "sunnyvale",
									taggedOOIs :
																[
																{"frontdoor": "none"},
														{"steps":"none"},
														{"windows":"none"},
														{"lighting":"none"},
														{"flooring":"none"},
														{"bathtub":"none"}
														]


									}


									]
pinegroveObjectsExplored = 0;
lakeviewObjectsExplored = 0;
sunnyvaleObjectsExplored = 0;
apartmentObjectsExplored = [ 0 , 0 , 0 ] ;
engagementScore = 0;
currentEngagementScore = engagementScore;
	noOfObjectsExplored.innerHTML = "0 / 6 ";
	engagementScoreBox.innerHTML = "0"
guideHeader.innerText = '';
//characterSelectionWidget.classList.remove('hide');

dismissAilmentButton.innerHTML = "Dismiss";
  controlMap.classList.add('hide');
  //gameOverlay.classList.add('tint');
  progressBar.classList.remove('tint');



			playerSelected = false;
			replayControl.classList.add('inactive');

dialogueCount = 0;
introPage = true;
checkLeg = true;
checkEar = true;
contextCount = 0;
endGameReview = false;
spinned = false;
document.getElementById("ring-1").classList.remove("mary")
document.getElementById("ring-1").classList.remove("gladys")
document.getElementById("ring-1").classList.remove("mary")
spinnerCharInfo[0].classList.add("vanish")
console.log("characterPlayerIDArray characterPlayerIDArray");
console.log(characterPlayerIDArray);
for ( var j = 0; j < characterPlayerIDArray.length ; j++) {
	ringOne.classList.remove(characterPlayerIDArray[j]);


	console.log(characterPlayerIDArray[j]);
	var charElements = sceneWrapper.getElementsByClassName(characterPlayerIDArray[j])
	console.log(charElements);
	console.log(charElements.length);
	//resetting scenewrapper by removing player classes if exists
	if(charElements){
		sceneWrapper.classList.remove(characterPlayerIDArray[j]);
		for ( var k = 0; k < sceneWrapper.getElementsByClassName('player').length ; k++) {
			sceneWrapper.getElementsByClassName('player')[k].classList.remove(characterPlayerIDArray[j]);

		}
	}
}


//add .point to spin button
spinButton.classList.add("point");
spinButton.innerHTML = "Go >>";
// remove selected from poster
var removePoster = document.getElementsByClassName("poster");
for ( var j = 0; j < removePoster.length ; j++) {
		removePoster[j].classList.remove("selected");
}
//remove show from characterInfoLayer
document.getElementById("characterInfoLayer").classList.remove("show");

for ( var i = 0; i < sceneWrapper.children.length; i++) {
	sceneWrapper.children[i].classList.add('hide');

	for ( var j = 0; j < sceneWrapper.children[i].children.length; j++) {
		sceneWrapper.children[i].children[j].classList.add('hide');
	};


};

for ( var j = 0; j < sceneWrapper.getElementsByClassName('character').length; j++) {
	NPCChar = sceneWrapper.getElementsByClassName('character')[j];
	NPCChar.classList.remove('talk');
}


//hide everything and reset all variables
settingsView.classList.add('hide');
scoreContainer.classList.add('hide');
controlScore.classList.add('hide');
rightNav.classList.add('hide');
leftNav.classList.add('hide');
decisionButtonHUD.classList.add("hide");
controlNotes.classList.add('hide');
OOILayer.classList.remove('active');
exploredObjectsList.classList.add('hide');
conversationLayer.classList.add('hide');
conversationLayer.classList.remove('active');
conversationLayer.classList.remove('vanish');
conversationLayer.classList.remove('louise-review');
conversationLayer.classList.remove('player-review');
conversationLayer.classList.remove('louise-review-started');
conversationLayer.classList.remove('sarah-review');
conversationLayer.classList.remove('sarah-review-started');
tagNotes.classList.add("hide");
gameMode.classList.remove('hide');

hideDiamond();


objectDescription.classList.add('hide');
gameMap.classList.add('hide');
closeAilmentNotes();


		for ( var j = 0; j < 3; j++) {
		apartmentIcon[j].classList.remove('location');
	}

	settingOn = false;

for(var j=0;j<characterPlayerIDArray.length;j++){
	userInterface.classList.remove(characterPlayerIDArray[j]);
}
for(var j=0;j<infoApartmentArray.length;j++){
	userInterface.classList.remove(infoApartmentArray[j].class);
}
for(var j=0;j<subSceneArray.length;j++){
	userInterface.classList.remove(subSceneArray[j]);
}

initHints(true);

activeApartment.classList.remove('active');
characterSelectionWidget.classList.add('hide');

navigateScenes(0,0,characterSelectionWidget);
gameOverlay.classList.add('tint');
//navigateInstructions();
//selectCharacter(playerCharacterArray);

}




document.getElementById("musicControl").addEventListener('click' , function(){
	if(playerSelected){
	//	restartGame();
	}
})


tourButton.addEventListener('click', function() {







	tourApartment();
	controlMap.classList.remove('hide');
	objectsExplored();
});
apartmentIcon[0].addEventListener('click', function() {

	var currentEngagementScore = engagementScore ;
	engagementScore = engagementScore + engagementScoreArray[0].mapIcon ;

	if(!engagementScoreArray[0].mapIcon == 0 ){

		animateValue(engagementScoreBox.id, currentEngagementScore, engagementScore, 500);

		animateEngagementScore(engagementScore);
	}

	engagementScoreArray[0].mapIcon = 0 ;

	controlScore.classList.remove('hide');
	if(hasClass(this,'clicked'))
	{
		apartmentInfo.classList.add('hide');
		apartmentOne.classList.remove('clicked');
		currentHint = infoScriptArray.map.informationText + closeHint;
		hintInfoText.innerHTML = currentHint;
		if(hintFlags.map==0){
			forceShowHints = true;
			showHint();
			hintFlags.map=1;
		}
	}
	else {
		showApartmentInfo(infoApartmentArray, 0);
		apartmentInfo.classList.remove('hide');
		if(hintFlags.engagementScore==0){
			currentHint = infoScriptArray.engagementScore.informationText + closeHint;
			hintInfoText.innerHTML = currentHint;
			showHint();
			hintFlags.engagementScore=1;
		}
	}

});
apartmentIcon[1].addEventListener('click', function() {

	var currentEngagementScore = engagementScore ;
	engagementScore = engagementScore + engagementScoreArray[1].mapIcon ;

	if(!engagementScoreArray[1].mapIcon == 0 ){

		animateValue(engagementScoreBox.id, currentEngagementScore, engagementScore, 500);

		animateEngagementScore(engagementScore);
	}

	engagementScoreArray[1].mapIcon = 0 ;

	controlScore.classList.remove('hide');
	if(hasClass(this,'clicked'))
	{
		apartmentInfo.classList.add('hide');
		apartmentTwo.classList.remove('clicked');
		currentHint = infoScriptArray.map.informationText + closeHint;
		hintInfoText.innerHTML = currentHint;
		if(hintFlags.map==0){
			forceShowHints = true;
			showHint();
			hintFlags.map=1;
		}
	}
	else {
		showApartmentInfo(infoApartmentArray, 1);
		apartmentInfo.classList.remove('hide');
		if(hintFlags.engagementScore==0){
			forceShowHints = true;
			currentHint = infoScriptArray.engagementScore.informationText + closeHint;
			hintInfoText.innerHTML = currentHint;
			showHint();
			hintFlags.engagementScore=1;
		}
	}

});
apartmentIcon[2].addEventListener('click', function() {

	var currentEngagementScore = engagementScore ;
	engagementScore = engagementScore + engagementScoreArray[2].mapIcon ;

	if(!engagementScoreArray[2].mapIcon == 0 ){

		animateValue(engagementScoreBox.id, currentEngagementScore, engagementScore, 500);

		animateEngagementScore(engagementScore);
	}

	engagementScoreArray[2].mapIcon = 0 ;

	controlScore.classList.remove('hide');
	if(hasClass(this,'clicked'))
	{
		apartmentInfo.classList.add('hide');
		apartmentThree.classList.remove('clicked');
		currentHint = infoScriptArray.map.informationText + closeHint;
		hintInfoText.innerHTML = currentHint;
		if(hintFlags.map==0){
			forceShowHints = true;
			showHint();
			hintFlags.map=1;
		}
	}
	else {
		showApartmentInfo(infoApartmentArray, 2);
		apartmentInfo.classList.remove('hide');
		if(hintFlags.engagementScore==0){
			forceShowHints = true;
			currentHint = infoScriptArray.engagementScore.informationText + closeHint;
			hintInfoText.innerHTML = currentHint;
			showHint();
			hintFlags.engagementScore=1;
		}
	}

});


ailments[0].addEventListener('click', function() {
	ailments[1].classList.remove('cursor');
	ailments[2].classList.remove('cursor');
	ailments[0].classList.add('cursor');

	showAilmentDescription(0);

});
ailments[1].addEventListener('click', function() {
	ailments[0].classList.remove('cursor');
	ailments[2].classList.remove('cursor');
	ailments[1].classList.add('cursor');
	showAilmentDescription(1);

});
ailments[2].addEventListener('click', function() {
	ailments[0].classList.remove('cursor');
	ailments[1].classList.remove('cursor');
	ailments[2].classList.add('cursor');
	showAilmentDescription(2);

});

decisionScreenButton.addEventListener('click', function(e) {
	e.stopPropagation();
	showTagNotes(playerOOITags);
});
objectEffectTag[0].addEventListener('click', function() {
	tagOOI(OOIContentArray, 0); // tagOOI(info,i)
});

objectEffectTag[1].addEventListener('click', function() {
	tagOOI(OOIContentArray, 1); // tagOOI(info,i)
});
objectEffectTag[2].addEventListener('click', function() {
	tagOOI(OOIContentArray, 2); // tagOOI(info,i)
});

inSceneOOIs[0].addEventListener('click', function() {
	showOOIDescription('frontdoor',0);
});

inSceneOOIs[1].addEventListener('click', function() {
	showOOIDescription('steps',1);
});

inSceneOOIs[2].addEventListener('click', function() {
	showOOIDescription('windows',2);
});

inSceneOOIs[3].addEventListener('click', function() {
	showOOIDescription('lighting',3);
});

inSceneOOIs[4].addEventListener('click', function() {
	showOOIDescription('flooring',4);
});

inSceneOOIs[5].addEventListener('click', function() {
	showOOIDescription('bathtub',5);
});

replayControl.addEventListener('click', function(e) {
	e.stopPropagation();
	if(playerSelected){
		restartGame();
	}
});

disableClickLayer.addEventListener('click', function(e) {
e.stopPropagation();
});

closeObject.addEventListener('click', function() {
	closeOOIDescription();
	hideDiamond();
	conversationLayer.classList.add('hide');
});

characterPin.addEventListener('click', function() {
	//closeOOIDescription();
	objectEffect.classList.add('active');
	objectEffect.classList.remove('hide');
	for(var k = 0 ; k < objectEffect.children.length ; k++){
		objectEffect.children[k].classList.remove('hide');
	}

	currentHint = infoScriptArray.gameScore.informationText + playerChar.name + "." + closeHint;
	hintInfoText.innerHTML = currentHint;
	if(hintFlags.gameScore==0){
		forceShowHints = true;
		showHint();
		hintFlags.gameScore=1;
	}

	OOIEffectAudio  = playerChar.class+"/LateAdulthood_Narration_OOI_Effect.mp3";
	playAudio(OOIEffectAudio);



});

noteDismissButton.addEventListener('click', function() {

	var currentEngagementScore = engagementScore ;
	engagementScore = engagementScore + 5 ;

	animateValue(engagementScoreBox.id, currentEngagementScore, engagementScore, 500);

	guideHeader.classList.add("hide");

	animateEngagementScore(engagementScore);

	endGameReview = true;
	evaluateApartmentScore();
	closeTagNotes();
	navigateScenes(1,0);
	//reviewByLouise();
});
controlNotes.addEventListener('click', function() {
	showAilmentNotes(); //showTagNotes(taggedOOI);
	controlNotes.classList.add('hide');
	if(!hasClass(OOILayer,'hide')){
	controlMap.classList.add('hide');
	toggleNavButton();}
});
dismissAilmentButton.addEventListener('click', function() {

	closeAilmentNotes(); //showTagNotes(taggedOOI);
	if(hasClass(OOILayer,'active')){
	   controlNotes.classList.remove('hide');
	   }
	 if(!hasClass(OOILayer,'hide')){
	controlMap.classList.remove('hide');
	toggleNavButton();
	}
});
rightNav.addEventListener('click', function() {
	closeOOIDescription(true);
navigateApartmentRooms('right');

	hideDiamond();
	conversationLayer.classList.add('hide');
	objectsExplored();
});
leftNav.addEventListener('click', function() {

	closeOOIDescription(true);
	navigateApartmentRooms('left');

	hideDiamond();
	conversationLayer.classList.add('hide');
	objectsExplored();
});

applyButton.addEventListener('click', function(e) {

	e.stopPropagation();
	console.log("asdfsdfdf asdfasdf asdfadsf  == 18");
	console.log(apartmentObjectsExplored[0] + apartmentObjectsExplored[1] + apartmentObjectsExplored[2]);

	gameMode.classList.remove('hide');
	settingsView.classList.add('hide');
	settingOn = false;
	console.log(currentScene);
	if ((hasClass(currentScene,"scene-zero") || hasClass(currentScene,"scene-one") ) && apartmentObjectsExplored[0] + apartmentObjectsExplored[1] + apartmentObjectsExplored[2] != 18) {
		if(!((playerChar.index==0 && dialogueCount==7) || (playerChar.index==1 && dialogueCount==9) || (playerChar.index==2 && dialogueCount==11))){
			conversationLayer.classList.add("active");
		}
	}





});
controlSetting.addEventListener('click', function() {
	showSettings();
});


//sagar's auto finish game code integrated below by dixit
apartmentRedirect.addEventListener('click', function() {
	apartmentRedirect.classList.add('hide');
	currentApartment = infoApartmentArray[0];
	closeCharWiget();
	guideHeader.classList.add('hide');
	instructionHUD.classList.add('hide');
	guideHeader.innerText = '';
	setTimeout(function(){
			infoText.classList.add("hide-perm");
			controlInfoIcon.classList.add("hide-perm");
			controlInfo.classList.add("hide-perm");
      pinegroveObjectsExplored = 6;
      lakeviewObjectsExplored = 6;
      sunnyvaleObjectsExplored = 6;
      apartmentObjectsExplored = [ 6 , 6 , 6 ] ;
      engagementScore = 195;
      gameScore = 95 ;
      allotTagsfast();
			navigateScenes(2,0);
			conversationLayer.classList.add('hide');

			rightNav.classList.add('hide');
			OOILayer.classList.add('hide');
			exploredObjectsList.classList.add('hide');
			leftNav.classList.add('hide');
			controlMap.classList.add('hide');
			gameMap.classList.add('hide');
			setTimeout(function(){
			// add talk animation to sarah also

				for ( var i = 0; i < infoApartmentArray.length; i++) {
					userInterface.classList.remove(infoApartmentArray[i].class);
				};



			//	conversationLayer.classList.remove('hide');
				conversationLayer.classList.remove('active');
				conversationLayer.classList.remove('vanish');
				conversationLayer.classList.remove('louise-review');
				conversationLayer.classList.remove('player-review');
				conversationBubble.classList.remove('hide');
				conversationBubble.classList.remove('scene-zero');
				conversationBubble.classList.remove('louise');
				conversationBubble.classList.remove(playerChar.class);
				conversationBubble.classList.add('sarah');
				conversationBubble.classList.add('scene-one');
				conversationLayer.classList.remove('tag-response');
				conversationBubble.classList.remove('OOI-tagging');
			/*	speakerName.innerHTML = "Sarah"
				conversationtext.innerHTML = "I'm glad to join you today. Which apartment will you choose?";
				conversationLayer.classList.add('sarah-review-started');
				decisionButtonHUD.classList.remove('hide');*/
                 conversationLayer.classList.add('sarah-review');



			},2500);
		},1000);

});




gameMusicControl.addEventListener('click', function() {
	toggleGameMusic();
});

// controlInfo.addEventListener('click', function() {
// 	//showRelevantInfo(2);
// 	showInfo();
// });
closeInfoText.addEventListener('click', function(e) {
	e.stopPropagation();
	hideHint();
});

controlMap.addEventListener('click', function() {
	if(hasClass(conversationLayer, 'tag-response')){
		conversationLayer.classList.add('hide')	;
	}
	apartmentInfo.classList.add('hide');



	closeOOIDescription();
	hideDiamond();
	conversationLayer.classList.add('hide');
	toggleMap();
	guideHeader.classList.add('hide');
});
gameMap.addEventListener('click', function() {
	// hideMap();
});

var activateApartment = false;

inActiveApartmentLeft.addEventListener('click', function() {
	var newClass = activeApartment.classList[0];
	activeApartment.classList = "";
	if(inActiveApartmentLeft.classList[0] == "pinegrove"){
		currentApartment = infoApartmentArray[0];
	}else if(inActiveApartmentLeft.classList[0] == "lakeview"){
		currentApartment = infoApartmentArray[1];
	}else if(inActiveApartmentLeft.classList[0] == "sunnyvale"){
		currentApartment = infoApartmentArray[2];
	}
	allotTags(currentApartment);
	this.classList="";
	this.classList.add(newClass);
	activeApartment.classList.add(currentApartment.class);
	activeApartment.classList.add("active");
	noteDismissButton.innerHTML = "Choose "+currentApartment.name ;


	if(activateApartment){


		guideHeader.innerText = "You choose " + infoApartmentArray[currentApartment.index].title +" . Let's see how " +playerChar.name+ " is doing." ; 
			var playerSelectedApartmentAudioFile = playerChar.class + "/LateAdulthood_Narration_DecisionScreen_"+(79 + currentApartment.index )+".mp3" ;
		playAudio(playerSelectedApartmentAudioFile);
		

	}

});
inActiveApartmentRight.addEventListener('click', function() {
	var newClass = activeApartment.classList[0];
	activeApartment.classList = "";
	if(inActiveApartmentRight.classList[0] == "pinegrove"){
		currentApartment = infoApartmentArray[0];
	}else if(inActiveApartmentRight.classList[0] == "lakeview"){
		currentApartment = infoApartmentArray[1];
	}else if(inActiveApartmentRight.classList[0] == "sunnyvale"){
		currentApartment = infoApartmentArray[2];
	}
	allotTags(currentApartment);
	this.classList="";
	this.classList.add(newClass);
	activeApartment.classList.add(currentApartment.class);
	activeApartment.classList.add("active");
	noteDismissButton.innerHTML = "Choose "+currentApartment.name ;


	if(activateApartment){

		guideHeader.innerText = "You choose " + infoApartmentArray[currentApartment.index].title +" . Let's see how " +playerChar.name+ " is doing."

					var playerSelectedApartmentAudioFile = playerChar.class + "/LateAdulthood_Narration_DecisionScreen_"+(79 + currentApartment.index )+".mp3" ;
		playAudio(playerSelectedApartmentAudioFile);

	}


});



activeApartment.addEventListener('click', function() {
	activateApartment =true;


	guideHeader.innerText = "You choose " + infoApartmentArray[currentApartment.index].title +" . Let's see how " +playerChar.name+ " is doing."

				var playerSelectedApartmentAudioFile = playerChar.class + "/LateAdulthood_Narration_DecisionScreen_"+(79 + currentApartment.index )+".mp3" ;
		playAudio(playerSelectedApartmentAudioFile);
	

	this.classList.add('active');
	for(var i=0 ; i < taggedApartmentOOI.length ;i++ ){
		taggedApartmentOOI[i].classList.remove('hide');
	}

	if(!apartmentPlayerSelected){
		if(activeApartment.classList[0] == "pinegrove"){
			currentApartment = infoApartmentArray[0];
		}else if(activeApartment.classList[0] == "lakeview"){
			currentApartment = infoApartmentArray[1];
		}else if(activeApartment.classList[0] == "sunnyvale"){
			currentApartment = infoApartmentArray[2];
		}

		allotTags(currentApartment);
		apartmentPlayerSelected = true;
		noteDismissButton.classList.remove('hide');
		noteDismissButton.innerHTML = "Choose "+currentApartment.name ;
	}
});
var countcheck=0;
gameOverlay.addEventListener('click', function() {



	if(!settingOn){
		if (hasClass(conversationLayer, 'active')) {
			/* if(dialogueCount < ) */
			countcheck++;
			if(countcheck>1)
			{
				conversationBubble.classList.remove('hide');
			}
			runConversation(conversationScriptArray);

		} else if(hasClass(conversationLayer,"sarah-review")){
			conversationLayer.classList.remove('hide');
			conversationLayer.classList.remove('sarah-review');
			conversationLayer.classList.add('sarah-review-started');
			speakerName.innerHTML = "Sarah";
			conversationtext.innerHTML = "I'm glad to join you today. Which apartment will you choose?";
			var sarahReviewAudioFile = playerChar.class+"/LateAdulthood_Sarah_LouiseOffice_77.mp3"
			playAudio(sarahReviewAudioFile);



		var sarahInScene = currentScene.getElementsByClassName('sarah');

		sarahInScene[0].classList.add('talk');

			decisionButtonHUD.classList.remove('hide');
		} else if(hasClass(conversationLayer,"sarah-review-started")){
			conversationLayer.classList.add('hide');
var sarahInScene = currentScene.getElementsByClassName('sarah');
		sarahInScene[0].classList.remove('talk');


			conversationLayer.classList.remove('sarah-review-started');
		} else if(hasClass(conversationLayer, 'louise-review')){
			
			
			conversationLayer.classList.remove('hide');
			conversationtext.innerHTML = "Hi, "+ playerChar.name +". Good to see you again. How do you like your new apartment?"; // + " <div class='tap-to-contn'>TAP TO CONTINUE</div>";
			var louiseReviewAudioFile = playerChar.class+"/LateAdulthood_Louise_LouiseOffice_83.mp3"
			playAudio(louiseReviewAudioFile);
			conversationLayer.classList.remove('louise-review');
			conversationLayer.classList.add("louise-review-started");

	var louiseInScene = currentScene.getElementsByClassName('louise');
	

		louiseInScene[0].classList.add('talk');
	

/*

	var louiseInScene = currentScene.getElementsByClassName('character'),
	playerInScene = currentScene.getElementsByClassName('player')

		louiseInScene.classList.remove('talk');
		playerInScene.classList.add('talk');*/

		
			
		} else if(hasClass(conversationLayer, 'louise-review-started')){
			conversationLayer.classList.remove('louise-review-started');
			conversationLayer.classList.add('player-review');
			conversationBubble.classList.remove('louise');
			conversationBubble.classList.add(playerChar.class); 
			conversationBubble.classList.remove('scene-one'); 
			conversationBubble.classList.add('scene-zero'); 
			speakerName.innerHTML = playerChar.name;
			conversationtext.innerHTML = reviewConversationArray[playerChar.index].selectedApartment[currentApartment.index].playerReview ; //+ '<div class="tap-to-contn">TAP TO CONTINUE</div>';

	var louiseInScene = currentScene.getElementsByClassName('louise'),
	playerInScene = currentScene.getElementsByClassName('player')

		louiseInScene[0].classList.remove('talk');
		playerInScene[0].classList.add('talk');




			var playerReviewAudioFile = reviewConversationArray[playerChar.index].selectedApartment[currentApartment.index].audioFile ;
			playAudio(playerReviewAudioFile);
		} else if(hasClass(conversationLayer, 'player-review')){

			conversationLayer.classList.remove('player-review');
			conversationLayer.classList.add('hide');
			displayScore();
			navigateScenes(0,0,scoreContainer);

/*	var playerInScene = currentScene.getElementsByClassName('player')


		playerInScene.classList.add('talk');

*/


		}
	}
	if(!forceShowHints){
	  hideHint();
	} else {
		forceShowHints = false;
	}
	// hideMap();
});

controlMode.addEventListener("click", function(){
	if(!forceShowHints){
	  hideHint();
	} else {
		forceShowHints = false;
	}
});

OOILayer.addEventListener('click', function() {
	conversationLayer.classList.add('hide');

});
nextButton.addEventListener('click', function() {
	// hideMap();

		navigateInstructions();

});


/**************  main functions              *****************/


function animateValue(id, start, end, duration) {
    var range = end - start;
    var current = start;
    var increment = end > start? 1 : -1;
    var stepTime = Math.abs(Math.floor(duration / range));
    var obj = document.getElementById(id);
    var timer = setInterval(function() {
        current += increment;
        obj.innerHTML = current;
        if (current == end) {
            clearInterval(timer);
        }
    }, stepTime);
}

Object.prototype.getKeyByValue = function( value ) {
    for( var prop in this ) {
        if( this.hasOwnProperty( prop ) ) {
             if( this[ prop ] === value )
                 return prop;
        }
    }
}

function evaluateApartmentScore(){
	if(currentApartment.class === playerChar.rightApartment){
		gameScore = gameScore + 10 ;
	}
}




/******* Play Audio******/


function playAudio(audioFile,duration){

if(audioNarrationActive){

if(audio){

	audio.pause();
}

if(window.location.href.indexOf("restrictClick") > -1){
	 disableClickLayer.classList.remove('hide');
}



	var audioLocation = "/assets/sounds/"+audioFile ; // /LifeSpan/

audio = new Audio(audioLocation);

setTimeout(function(){
	audio.play();
	},150);


audio.addEventListener('ended',function(){


	console.log('audio-complete');
    if(window.location.href.indexOf("restrictClick") > -1){
disableClickLayer.classList.add('hide');
}



    });

/*	setTimeout(function(){




	}, duration*1000);


*/
}

}











/******* Play Audio******/







function cleanArray(actual) {
	  var newArray = new Array();
	  for (var i = 0; i < actual.length; i++) {
	    if (actual[i]) {
	      newArray.push(actual[i]);
	    }
	  }
	  return newArray;
	}

function animateEngagementScore(eScore){

	console.log("animateEngagementScore");
	console.log(eScore);
	 /*outerCircle = document.querySelectorAll('path')[0],					 The colored circle outside the white progress line
		progressCircle = document.querySelectorAll('path')[1],	*/				/* The white circle that stays static */

		movingCircle.style.strokeDashoffset = 113 -  (113/200)*eScore;

      //  scoreSvg.setAttribute('viewBox','0 0 50 50');

}

function restartTheGame(){


navigateScenes(0,0);

  console.log("gameRestartgameRestart gameRestart gameRestart gameRestart gameRestart");
  console.log(playerOOITags);
  scoreContainer.classList.add('hide');
  navigateScenes(0,0);
  currentOOIDescription = "";
  currentOOI = {};

  engagementScoreArray = [
                          {
                            	apartmentClass : "pinegrove",
                            	mapIcon : 5 ,
                            	taggedOOIs :[5,5,5,5,5,5] ,
                              clickedOOIs : [5,5,5,5,5,5]
                             },
                             {
                            	apartmentClass : "lakeview",
                            	mapIcon : 5 ,
                            	taggedOOIs :[5,5,5,5,5,5] ,
                              clickedOOIs : [5,5,5,5,5,5]

                             },
                             {
                            	apartmentClass : "sunnyvale",
                            	mapIcon : 5 ,
                            	taggedOOIs :[5,5,5,5,5,5] ,
                              clickedOOIs : [5,5,5,5,5,5]

                             }


                             ]
playerOOITags   = [
                    {
                   	apartmentClass : "pinegrove",
                   	taggedOOIs :
                   	              [
                   	            	{"frontdoor": "none"},
                   	            	{"steps":"none"},
                   	            	{"windows":"none"},
                   	            	{"lighting":"none"},
                   	            	{"flooring":"none"},
                   	            	{"bathtub":"none"}
                   	              ]


                    },
                    {
                   	apartmentClass : "lakeview",
                   	taggedOOIs :
                   	              [
                  	            	{"frontdoor": "none"},
               	            	{"steps":"none"},
               	            	{"windows":"none"},
               	            	{"lighting":"none"},
               	            	{"flooring":"none"},
               	            	{"bathtub":"none"}
               	              ]


                    },
                    {
                   	apartmentClass : "sunnyvale",
                   	taggedOOIs :
                   	              [
                  	            	{"frontdoor": "none"},
               	            	{"steps":"none"},
               	            	{"windows":"none"},
               	            	{"lighting":"none"},
               	            	{"flooring":"none"},
               	            	{"bathtub":"none"}
               	              ]


                    }


                    ]
  pinegroveObjectsExplored = 0;
  lakeviewObjectsExplored = 0;
  sunnyvaleObjectsExplored = 0;
  apartmentObjectsExplored = [ 0 , 0 , 0 ] ;
  engagementScore = 0;
  currentEngagementScore = engagementScore;
  	noOfObjectsExplored.innerHTML = "0 / 6 ";
    engagementScoreBox.innerHTML = "0"
  guideHeader.innerText = '';
  //characterSelectionWidget.classList.remove('hide');
  dismissAilmentButton.innerHTML = "Dismiss";
  controlMap.classList.add('hide');
  gameOverlay.classList.add('tint');
  progressBar.classList.remove('tint');
  introPage = true;
  checkLeg = true;
  checkEar = true;
  contextCount = 0;
  spinned = false;
  document.getElementById("ring-1").classList.remove("mary")
  document.getElementById("ring-1").classList.remove("gladys")
  document.getElementById("ring-1").classList.remove("mary")
  spinnerCharInfo[0].classList.add("vanish");

	movingCircle.style.strokeDashoffset = 113;   //resetting score progress display


  for ( var j = 0; j < characterIDArray.length ; j++) {
    ringOne.classList.remove(characterIDArray[j]);
  }

	for (var i = 0; i < sceneWrapper.children.length; i++) {
		sceneWrapper.children[i]
	}

  //add .point to spin button
  spinButton.classList.add("point");
  spinButton.innerHTML = "Go >>";
  // remove selected from poster
  var removePoster = document.getElementsByClassName("poster");
  for ( var j = 0; j < removePoster.length ; j++) {
      removePoster[j].classList.remove("selected");
  }
  //remove show from characterInfoLayer
  document.getElementById("characterInfoLayer").classList.remove("show");
  closeAilmentNotes();
  //navigateInstructions();
  //selectCharacter(playerCharacterArray);

	gameMode.classList.remove('hide');
	settingsView.classList.add('hide');
	settingOn = false;

}

function navigateApartmentRooms(info){

if(audio){
				audio.pause();
			}

if (info == 'left'){
    rightNav.classList.remove('hide');
	if(currentSubSceneIndex == 1 ){
    leftNav.classList.add('hide');
	}else{
	leftNav.classList.remove('hide');
	}
	currentSubSceneIndex = currentSubSceneIndex-1

}else if (info == 'right'){
	leftNav.classList.remove('hide');
		if(currentSubSceneIndex == 1 ){
    rightNav.classList.add('hide');
	}else{
	rightNav.classList.remove('hide');
	}
	currentSubSceneIndex = currentSubSceneIndex+1
}
//console.log(currentSubSceneIndex)



for ( var i = 0; i < subSceneArray.length; i++) {
	userInterface.classList.remove(subSceneArray[i]);
};



userInterface.classList.add(subSceneArray[currentSubSceneIndex]);
    navigateScenes(3,currentSubSceneIndex);

showOOIsControl();


}

function displayScore(){




	if(engagementScore == 200 && gameScore == 100){
		scoreTitle.innerHTML = "Good Work!";
	}else{
		scoreTitle.innerHTML = "Try Again!";
	}

	scoreContent.innerHTML = '<p class="score-value" >'+gameScore+'</p><p class="score-description" >Your Score</p><p class="score-value" >'+engagementScore+'</p><p class="score-description" >Your Engagement Score</p>'
}


function reviewByLouise(){




	endGameReview = false;

	guideHeader.innerText = "";

		var charactersInScene = currentScene.getElementsByClassName('character');
	for ( var i = 0; i < charactersInScene.length; i++) {
		charactersInScene[i].classList.remove('talk');
	};




	// /navigateScenes(1,0);
	
	conversationLayer.classList.add('louise-review');
	conversationBubble.classList.remove('scene-one');
	conversationBubble.classList.remove('sarah');
	conversationBubble.classList.add('louise');
	conversationBubble.classList.add('scene-zero');
	document.getElementById('characterSarahZero').classList.remove('talk');
	speakerName.innerHTML = "Louise";
/*
	var louiseInScene = currentScene.getElementsByClassName('character');

		louiseInScene.classList.add('talk');

*/

	//reviewConversationArray
}


function showAilmentDescription(i){
	if(i == 0){
		 checkEye = true ;
	}else if(i == 1){
		 checkLeg = true ;
	}else if(i == 2){
		 checkEar = true ;
	}
	if(hasClass(ailments[i],'learn')){
		for(k=0;k<ailments.length;k++)
		{
			ailments[k].classList.remove('cursor');
		}
		ailments[i].classList.add('cursor');
		ailments[i].classList.remove('learn');
		if(i+1<3)
		{
		ailments[i+1].classList.add('learn');
		}

	}
	for(var k=0 ; k < ailmentArray.length ;  k++){
		ailmentNotes.classList.remove(ailmentArray[k].class);

	}
	ailmentNotes.classList.add(ailmentArray[i].class);

	ailmentTitle.innerHTML = ailmentArray[i].ailment;
	ailmentContent.innerHTML = ailmentArray[i].description ;
	var ailmentAudio = ailmentArray[i].audioFile;
	playAudio(ailmentAudio);

}



function showAilmentNotes(){
	ailmentNotes.classList.remove('hide');
}


function closeAilmentNotes(){

	if(introPage){

		if(!checkLeg){
			showAilmentDescription(1);
		}else{
		if(!checkEar){
			showAilmentDescription(2);

		}else{
			introPage = false;
			ailmentNotes.classList.add('hide');
			guideHeader.innerText = '';
			guideHeader.classList.remove('hide');
			characterSelectionWidget.classList.remove('hide');
			dismissAilmentButton.innerHTML = "Dismiss";
						if(audio){
			audio.pause();
			}
			//at this point of the game hints become useful.
			//seting the initial hint(we are at spinning wheel)
			currentHint = infoScriptArray.wheelSpin.informationText + closeHint;
			hintInfoText.innerHTML = currentHint;
			//displaying the icons.
			showHintIcon();
			//show the hint
			if(hintFlags.wheelSpin==0){
				forceShowHints = true;
				showHint();
				hintFlags.wheelSpin=1;
			}
		}

		}

	}else{
		ailmentNotes.classList.add('hide');
	}
}
hintInterface.addEventListener("click",function(){
	toggleHint();
});


//most of the times these work together
function showHintIcon(){
	controlInfo.classList.remove("hide");
	controlInfoIcon.classList.remove("hide");
	hintInterface.classList.remove("hide");
}

function hideHintIcon(){
	//should we take care of hiding hint message here as well
	//hideHint();
	controlInfo.classList.add("hide");
	controlInfoIcon.classList.add("hide");
	hintInterface.classList.add("hide");
}

function showHint(){
	hintFlags.isHintMsgShowing = true;
	hintInfoText.innerHTML = currentHint;
	//controlInfo.classList.add("hide");
		infoText.classList.remove("hide");
}

function hideHint(){
	hintFlags.isHintMsgShowing = false;
	//controlInfo.classList.remove("hide");
	infoText.classList.add("hide");
}

function toggleHint(){
	if(hintFlags.isHintMsgShowing){
		hideHint();
	} else {
		forceShowHints=true;
		showHint();
	}
}

function showTagNotes(info){
	conversationLayer.classList.add('hide');
	tagNotes.classList.remove("hide");
	decisionButtonHUD.classList.add('hide');
	allotTags(currentApartment);
	controlNotes.classList.add('hide');

	guideHeader.classList.remove("hide");
	guideHeader.classList.add("decision");

	guideHeader.innerText = 'Click on the apartments to recall the pros and cons, and choose the apartment you think will work best for ' +playerChar.name+ '.';

	var playerTagsAudioFile = playerChar.class + "/LateAdulthood_Narration_DecisionScreen_78.mp3" ;
		playAudio(playerTagsAudioFile);
	

}

function allotTags(info){



	var negativeTags = [] , positiveTags = [] , neutralTags = [] ;

	for(var i=0 ; i< playerOOITags[info.index].taggedOOIs.length ; i++){
		negativeTags.push(playerOOITags[info.index].taggedOOIs[i].getKeyByValue("minus"));
		positiveTags.push(playerOOITags[info.index].taggedOOIs[i].getKeyByValue("plus"));
		neutralTags.push(playerOOITags[info.index].taggedOOIs[i].getKeyByValue("neutral"));
	}

	negativeTags = cleanArray(negativeTags);
	positiveTags = cleanArray(positiveTags);
	neutralTags = cleanArray(neutralTags);

	var taggedOOISet = [],  taggedOOIValues = [];

	for(var i=0 ; i < negativeTags.length ;i++ ){
		taggedOOIValues.push('negative');
	}

	for(var i=0 ; i < positiveTags.length ;i++ ){
		taggedOOIValues.push('positive');
	}

	for(var i=0 ; i < neutralTags.length ;i++ ){
		taggedOOIValues.push('neutral');
	}




	taggedOOISet = negativeTags.concat(positiveTags , neutralTags);

	for(var i=0 ; i < taggedApartmentOOI.length ;i++ ){
		for(var j=0 ; j < taggedOOISet.length ;j++ ){
			taggedApartmentOOI[i].classList.remove(taggedOOISet[j]);
		}
		for(var j=0 ; j < taggedOOIValues.length ;j++ ){
			taggedApartmentOOI[i].children[0].classList.remove(taggedOOIValues[j]);
		}


	}

	for(var i=0 ; i < taggedOOISet.length ;i++ ){
		taggedApartmentOOI[i].classList.add(taggedOOISet[i]);
		taggedApartmentOOI[i].children[0].classList.add(taggedOOIValues[i]);
	}

}


//function done by sagar integrated by dixit
function allotTagsfast(info){

console.log(defaultPlayerOOITags);
playerOOITags = defaultPlayerOOITags;
console.log(playerOOITags);

}


function closeTagNotes(info){
	tagNotes.classList.add("hide");
	if(audio){
				audio.pause();
			}
}

function selectCharacter(info) {

	guideHeader.innerText = 'Spinning...';

	var randChar = info[Math.floor(Math.random() * info.length)];

	playerChar = randChar;

	sceneWrapper.classList.add(playerChar.class);

	var charName = randChar.name;
	//machineBackground.innerText = charName;
	selectPlayerInAllScenes();
	preLoadPlayerImages();

	SpinTheMachine(playerChar);


	// closeCharWiget();
	console.log(charName);
}

function initApartmentHint(){
	if(currentApartment && currentApartment.index >= 0){

	    if(apartmentObjectsExplored[currentApartment.index]==6){
	        currentHint = infoScriptArray.apartmentExit.informationText + closeHint;
	        hintInfoText.innerHTML = currentHint;
	    } else if(apartmentObjectsExplored[currentApartment.index]>0){
	        currentHint = infoScriptArray.apartmentRoam.informationText + closeHint;
	        hintInfoText.innerHTML = currentHint;
	    } else {
			currentHint = infoScriptArray.apartmentVisit.informationText + closeHint;
			hintInfoText.innerHTML = currentHint;
		}
		if(hintFlags.apartmentVisit==0){
			forceShowHints = true;
			// to prevent premature hint showup.. navigate scenes will look at this and show the hint
			hintFlags.isHintMsgShowing=true;
			hintFlags.apartmentVisit=1;
		}
	}
}

function initApartmentControls(){
	leftNav.classList.add('hide');



	rightNav.classList.remove('hide');

	OOILayer.classList.add("active");
	for ( var i = 0; i < infoApartmentArray.length; i++) {
		OOILayer.classList.remove(infoApartmentArray[i].class);
		userInterface.classList.remove(infoApartmentArray[i].class);
	};

	for ( var i = 0; i < playerCharacterArray.length; i++) {
		OOILayer.classList.remove(playerCharacterArray[i].class);
		userInterface.classList.remove(playerCharacterArray[i].class);
	};

	for ( var i = 0; i < subSceneArray.length; i++) {
		OOILayer.classList.remove(subSceneArray[i]);
		userInterface.classList.remove(subSceneArray[i]);
	};

	initApartmentHint();


	controlInfo.classList.remove('bring-it-up');
	infoText.classList.remove('bring-it-up');
	controlInfoIcon.classList.remove('bring-it-up');



	userInterface.classList.add(playerChar.class);
	OOILayer.classList.add(playerChar.class);

	userInterface.classList.add(subSceneArray[currentSubSceneIndex]);
	OOILayer.classList.add(subSceneArray[currentSubSceneIndex]);

	userInterface.classList.add(currentApartment.class);
	OOILayer.classList.add(currentApartment.class);

	//OOILayer.classList.remove("hide");
	rightNav.classList.remove('hide');

	showOOIsControl();





}

function showOOIsControl(){


	/****   need to be changed into a new function    **/
	controlNotes.classList.remove('hide');
	exploredObjectsList.classList.remove('hide');
	/****   need to be changed into a new function    **/



	var allApartmentGlows = document.getElementsByClassName('glowing-object');
	for ( var i = 0; i < allApartmentGlows.length; i++) {
		allApartmentGlows[i].classList.add('hide');
	};

	var apartmentGlows = document.getElementsByClassName(currentApartment.class + '-glow');
	for ( var i = 0; i < apartmentGlows.length; i++) {
		apartmentGlows[i].classList.remove('hide');
	};

	for(var j=0 ; j < OOILayer.children.length ; j++){
		OOILayer.children[j].classList.add('hide');
	}

	for(var j=0 ; j < OOIContentArray[currentApartment.index].apartmentOOIs.length ; j++){
		if(OOIContentArray[currentApartment.index].apartmentOOIs[j].subSceneNo == currentSubSceneIndex ){
			for(var k=0 ; k < OOILayer.children.length ; k++){
				if(hasClass(OOILayer.children[k], OOIContentArray[currentApartment.index].apartmentOOIs[j].OOIClass)){
					OOILayer.children[k].classList.remove('hide');
				}

			}


		}
	}


}

function moveHintsUp(){
	infoText.classList.add("desc-hint");
	controlInfo.classList.add("desc-hint");
	controlInfoIcon.classList.add("desc-hint");
	hintInterface.classList.add("desc-hint");
}

function moveHintsDown(){
	infoText.classList.remove("desc-hint");
	controlInfo.classList.remove("desc-hint");
	controlInfoIcon.classList.remove("desc-hint");
	hintInterface.classList.remove("desc-hint");
}

function showOOIDescription(info,i){




	exploredObjectsList.classList.add('slide');
	controlNotes.classList.add('hide');

	objectEffect.classList.add('hide');
	objectEffect.classList.remove('active');

	conversationLayer.classList.add('hide');
	conversationLayer.classList.remove('tag-response');
	selectOOI(i);
	// if(hintFlags.isHintMsgShowing){
	// 	infoText.classList.add("hide");
	// }
	// hideHintIcon();
	moveHintsUp();
	currentHint = infoScriptArray.apartmentDiamond.informationText + closeHint;
	hintInfoText.innerHTML = currentHint;
	if(hintFlags.apartmentDiamond==0){
			forceShowHints = true;
		showHint();
		hintFlags.apartmentDiamond=1;
	}
	objectDescription.classList.remove('hide');
	for(var j=0 ; j < OOIContentArray[currentApartment.index].apartmentOOIs.length ; j++){
		if(OOIContentArray[currentApartment.index].apartmentOOIs[j].OOIClass == info){
			currentOOI = OOIContentArray[currentApartment.index].apartmentOOIs[j];
			objectDescriptionContent.innerHTML = OOIContentArray[currentApartment.index].apartmentOOIs[j].OOIDescription ;
		    objectDescriptionAudio = OOIContentArray[currentApartment.index].apartmentOOIs[j].audioFile;
			objectTitle.innerHTML = OOIContentArray[currentApartment.index].apartmentOOIs[j].OOIName;
			objectEffectContent.innerHTML = "How might this feature affect a person with " + playerCharacterArray[playerChar.index].impairment + "? Is this a positive, negative, or neutral aspect of the apartment for " +playerCharacterArray[playerChar.index].name +"?"         //OOIContentArray[currentApartment.index].apartmentOOIs[j].characterImpact[playerChar.index]

            OOIEffectAudio  = playerChar.class+"/LateAdulthood_Narration_OOI_Effect.mp3";

		    playAudio(objectDescriptionAudio);


		}
	}
	showDiamond();

	var currentEngagementScore = engagementScore ;
	engagementScore = engagementScore + engagementScoreArray[currentApartment.index].clickedOOIs[currentOOIIndex] ;

	if(!engagementScoreArray[currentApartment.index].clickedOOIs[currentOOIIndex] == 0 ){

		animateValue(engagementScoreBox.id, currentEngagementScore, engagementScore, 500);

		animateEngagementScore(engagementScore);
	}

	engagementScoreArray[currentApartment.index].clickedOOIs[currentOOIIndex] = 0 ;

/*	//added these 2 lines for easier dev , need to be removed in prod */
	// document.getElementById("characterPin").click();
	// document.getElementById("objectEffectPostive").click();



}
function showDiamond(){
//	objectEffect.classList.remove('hide');
	characterPin.classList.remove('hide');

}
function hideDiamond(){
	objectEffect.classList.remove('active');
	objectEffect.classList.add('hide');
	characterPin.classList.add('hide');
}
function objectsExplored(){
	exploredObjectsList.classList.add('slide');
	setTimeout(function() {
  exploredObjectsList.classList.remove('slide');
}, 1700);

}
function closeOOIDescription(a){


if(audio){
				audio.pause();
			}

	
	objectEffect.classList.remove('active');
	objectEffect.classList.add('hide');

	exploredObjectsList.classList.remove('slide');
	controlNotes.classList.remove('hide');

	moveHintsDown();
	initApartmentHint();

	objectDescription.classList.add('hide');
}

function selectPlayerInAllScenes() {
	var speakerChar;
	for ( var j = 0; j < sceneWrapper.getElementsByClassName('player').length ; j++) {
		speakerChar = sceneWrapper.getElementsByClassName('player')[j];
		speakerChar.classList.add(playerChar.class);
	}

}
function SpinTheMachine(info){
	for ( var j = 0; j < characterIDArray.length ; j++) {
		ringOne.classList.remove(characterIDArray[j]);
	}
	ringOne.classList.add(info.class);
	setTimeout(CharWigetAnim, 5000);
}
function disableCoversation() {
	conversationLayer.classList.add('vanish');
}
function enableConversation() {
	conversationLayer.classList.remove('vanish');
}
function closeCharWiget() {
	characterSelectionWidget.classList.add('hide');
	spinButton.classList.remove('point');

	;
}
function CharWigetAnim() {
	for ( var j = 0; j < charPoster.length ; j++) {
		charPoster[j].classList.add('selected');
	}

	showCharProfile(playerChar);
}

function showCharProfile(info) {
	contextCount = 1;


	guideHeader.innerText = 'Great. You got ' + info.name + '!';
	spinButton.classList.add('meet');
spinButton.innerHTML= 'Meet  '+ info.name +'<img src="assets/images/next-icon.png" id="meetnextArrow" class="meet-next-arrow"> ';
	charName[0].innerText = info.name;
	charGender[0].innerText = info.gender;

	var charAudioFile = info.class+"/LateAdulthood_Narration_SpinWheel_10.mp3"
	//charEthnicity[0].innerText = info.ethnicity;
	charAge[0].innerText = info.age + 'Years';
	playAudio(charAudioFile);

	spinnerCharInfo[0].classList.remove('vanish');
	setTimeout(function(){

    spinButton.classList.remove('hide');
	replayControl.classList.remove('inactive');


		//sagar's code for auto-finish integrated by dixit
		if(window.location.href.indexOf("fast") > -1){
console.log('fast present');
apartmentRedirect.classList.remove('hide');
}else{
	console.log('fast NOT present');
}


	},2000);

	/*charDetailsOne.innerText = info.ethnicity + ' ' + info.identity;
	charDetailsTwo.innerText = info.age + 'year old ' + info.identity;
	charAvtar.style.backgroundImage = 'url(' + info.avtar + ')';
	charAvtar.style.backgroundColor = '#bfa590'*/

}
function showRelevantInfo(info) {
	infoText.innerHTML = '<p>'+infoScriptArray[info].informationText+'<p><div id="infoClose" class="info-close">';
}
function closeInfo(){
	infoText.classList.remove('activate');

};
function showInfo(){
	infoText.classList.add('activate');
	}
function toggleMap() {


   if(audio){
				audio.pause();
			}


	if (hasClass(gameMap, 'hide')) {
		gameMap.classList.remove('hide');
		toggleNavButton();
		controlNotes.classList.add('hide');
		controlMap.classList.add('hide');        //removes controlmap icon

		currentHint = infoScriptArray.map.informationText + closeHint;
		hintInfoText.innerHTML = currentHint;
		if(hintFlags.map==0){
			forceShowHints = true;
			showHint();
			hintFlags.map=1;
		}

		controlInfo.classList.add('bring-it-up');
		infoText.classList.add('bring-it-up');
		controlInfoIcon.classList.add('bring-it-up');


	} else {
		gameMap.classList.add('hide');
		toggleNavButton();
		controlNotes.classList.remove('hide');
		controlMap.classList.remove('hide');      //shows controlmap icon
	}
}
function toggleNavButton(){
	if(hasClass(OOILayer,'active')){
	if(hasClass(rightNav,'hide')){
		if(currentSubSceneIndex<2){
			rightNav.classList.remove('hide');
		}
	}
	else{
		rightNav.classList.add('hide');
	}
	if(hasClass(leftNav,'hide')){
		if(currentSubSceneIndex > 0){
			leftNav.classList.remove('hide');
		}
	}
	else{
		leftNav.classList.add('hide');
	}
}}
function revealMap(){
	controlMap.classList.add('hide');
		
	toggleMap();
}
function showApartmentInfo(info, i) {
	for ( var j = 0; j < 3; j++) {
		apartmentIcon[j].classList.remove('clicked');
	}
	currentApartment = info[i]
	noOfObjectsExplored.innerHTML = apartmentObjectsExplored[currentApartment.index] + " / 6 ";
	apartmentIcon[i].classList.add('clicked');
	apartmentIcon[i].classList.remove('point');
	apartmentTitle.innerText = info[i].title;
	rentDetails.innerText = "Rent : " + info[i].rent;
	playAudio(info[i].audioFile);
	//ratingDetails.innerText = "Locality rating : " + info[i].rating;
	distanceDetails.innerText = "Distance from senior center : "
			+ info[i].distance;
	ammenitiesDetails.innerText = "Near By : " + info[i].ammenities;
	apartmentInfo.classList.remove('hide');
	var apartmentClasses = ['pinegrove','sunnyvale','lakeview','hide'] //'hide' added in array for simplicity

	for ( var j = 0; j < apartmentClasses.length ; j++) {
		apartmentInfo.classList.remove(apartmentClasses[j]);
	}
	apartmentInfo.classList.add(info[i].class);

/*	controlNotes.classList.remove('hide');
	exploredObjectsList.classList.remove('hide');*/
}




function tagOOI(info,i){
	for(var k = 0; k < objectEffectTag.length ; k++){
		objectEffectTag[k].classList.remove('tagged');
	}
	objectEffectTag[i].classList.add('tagged');

	var tags = ['plus','neutral','minus'];
	currentTag = tags[i];
	var tagOOIClass = currentOOI.OOIClass ;
	if(tagOOIClass == "frontdoor"){
		playerOOITags[currentApartment.index].taggedOOIs[0].frontdoor = currentTag ;
	}else if(tagOOIClass == "steps"){
		playerOOITags[currentApartment.index].taggedOOIs[1].steps = currentTag ;
	}else if(tagOOIClass == "windows"){
		playerOOITags[currentApartment.index].taggedOOIs[2].windows = currentTag ;
	}else if(tagOOIClass == "lighting"){
		playerOOITags[currentApartment.index].taggedOOIs[3].lighting = currentTag ;
	}else if(tagOOIClass == "flooring"){
		playerOOITags[currentApartment.index].taggedOOIs[4].flooring = currentTag ;
	}else if(tagOOIClass == "bathtub"){
		playerOOITags[currentApartment.index].taggedOOIs[5].bathtub = currentTag ;
	}

	var nonTags = [];

	for(var i=0 ; i< playerOOITags[currentApartment.index].taggedOOIs.length ; i++){
		nonTags.push(playerOOITags[currentApartment.index].taggedOOIs[i].getKeyByValue("none"));
	}
	nonTags = cleanArray(nonTags);
	//console.log(6 - nonTags.length);


	apartmentObjectsExplored[currentApartment.index] = 6 - nonTags.length ;



	//apartmentObjectsExplored[currentApartment.index] = apartmentObjectsExplored[currentApartment.index] + 1 ;


	noOfObjectsExplored.innerHTML = apartmentObjectsExplored[currentApartment.index] + " / 6 ";

	NPCTagResponse();


/*
	var exploredItems =

	noOfObjectsExplored.innerHTML =  + "/6";*/

	var currentEngagementScore = engagementScore ;

	engagementScore = engagementScore + engagementScoreArray[currentApartment.index].taggedOOIs[currentOOIIndex] ;

	if(!engagementScoreArray[currentApartment.index].taggedOOIs[currentOOIIndex] == 0 ){

		animateValue(engagementScoreBox.id, currentEngagementScore, engagementScore, 500);

		animateEngagementScore(engagementScore);
	}

	engagementScoreArray[currentApartment.index].taggedOOIs[currentOOIIndex] = 0 ;


	if(info[currentApartment.index].apartmentOOIs[currentOOIIndex].characterImpact[playerChar.index].OOIImpact.indexOf(currentTag) > -1){
		gameScore = gameScore + gameScoreArray[currentApartment.index].taggedOOIs[currentOOIIndex] ;
		gameScoreArray[currentApartment.index].taggedOOIs[currentOOIIndex] = 0 ;



	}else{
		if(gameScoreArray[currentApartment.index].taggedOOIs[currentOOIIndex] == 0){
			gameScore = gameScore - 5 ;
			gameScoreArray[currentApartment.index].taggedOOIs[currentOOIIndex] = 5 ;
		}
	}
	console.log(gameScore);
}
function selectOOI(i){
	currentOOIIndex = i ;

}
function NPCTagResponse(){


	characterPin.classList.add('hide');
	closeOOIDescription();






	conversationLayer.classList.remove('hide');
	conversationLayer.classList.add('tag-response');
	conversationBubble.classList.add('OOI-tagging'); //to fix chat bubble on top of sarah
	speakerName.innerHTML = OOIContentArray[currentApartment.index].apartmentOOIs[currentOOIIndex].characterImpact[playerChar.index].NPCName
	conversationtext.innerHTML = OOIContentArray[currentApartment.index].apartmentOOIs[currentOOIIndex].characterImpact[playerChar.index].NPCResponse;
	playAudio(OOIContentArray[currentApartment.index].apartmentOOIs[currentOOIIndex].characterImpact[playerChar.index].audioFile);





	if(apartmentObjectsExplored[0] + apartmentObjectsExplored[1] + apartmentObjectsExplored[2] == 18){
		setTimeout(function(){
			infoText.classList.add("hide-perm");
			controlInfoIcon.classList.add("hide-perm");
			controlInfo.classList.add("hide-perm");

			apartmentRedirect.classList.add("hide");

			navigateScenes(2,0);
			conversationLayer.classList.add('hide');

			rightNav.classList.add('hide');
			OOILayer.classList.add('hide');
			exploredObjectsList.classList.add('hide');
			leftNav.classList.add('hide');
			controlMap.classList.add('hide');
			setTimeout(function(){
			// add talk animation to sarah also

				for ( var i = 0; i < infoApartmentArray.length; i++) {
					userInterface.classList.remove(infoApartmentArray[i].class);
				};

				
						
				
				
				conversationLayer.classList.remove('tag-response');
				conversationBubble.classList.remove('OOI-tagging'); 


				conversationLayer.classList.add("sarah-review");




			},4000);


		},1000);
	} else if(apartmentObjectsExplored[0] + apartmentObjectsExplored[1] + apartmentObjectsExplored[2] != 18 && apartmentObjectsExplored[currentApartment.index]==6){
		currentHint = infoScriptArray.apartmentExit.informationText + closeHint;
		hintInfoText.innerHTML = currentHint;
		if(hintFlags.apartmentExit==0){
			forceShowHints = true;
			showHint();
			hintFlags.apartmentExit=1;
		}
	} else if(apartmentObjectsExplored[currentApartment.index]==1){
		currentHint = infoScriptArray.apartmentRoam.informationText + closeHint;
		hintInfoText.innerHTML = currentHint;
		if(hintFlags.apartmentRoam==0){
			forceShowHints = true;
			showHint();
			hintFlags.apartmentRoam=1;
		}
	}
}


function showSettings() {
	settingOn = true;
	gameMode.classList.add('hide');
	settingsView.classList.remove('hide');
	conversationLayer.classList.remove('active');

}
function showControls() {

	for ( var i = 0; i < 3; i++) {
		controlBars[i].classList.remove('hide');
	}
}
function hideControls() {

	for ( var i = 0; i < 3; i++) {
		controlBars[i].classList.add('hide');
	}
}

function navigateInstructions() {
	if (instructionCount < 4) {
	//	guideHeader.innerText = '';
		showInstructions(instructionCount);
		instructionCount = instructionCount + 1;

	} else {
		instructionCount = 0;
		instructionHUD.classList.add('hide');
		showInstructions(instructionCount);
		showAilmentDescription(0);
		showAilmentNotes();
/*		guideHeader.innerText = 'Choose a member';
		characterSelectionWidget.classList.remove('hide');*/
	}
}
function showInstructions(i) {
	instructionContent.innerHTML = instructionsArray[i].instructionContent;
	instructionAudio = instructionsArray[i].audioFile;
	instructionTitle.innerText = instructionsArray[i].instructionTitle;
	playAudio(instructionAudio);
}
function meetCharacter() {
	closeCharWiget();
	console.log('meet');
	guideHeader.classList.add('hide');
	instructionHUD.classList.add('hide');
	guideHeader.innerText = '';
	navigateScenes(1,0);

	currentHint = infoScriptArray.officeConversation.informationText + closeHint;
	hintInfoText.innerHTML = currentHint;
	if(hintFlags.officeConversation==0){
		forceShowHints = true;
		hintFlags.isHintMsgShowing = true;
		hintFlags.officeConversation=1;
	}
	 runConversation(conversationScriptArray);
}
function showProgress() {
	progressBar.classList.remove('hide');
	loadTips();
	if(playAgain){
		progressLine.style.transitionDuration = "2s"
		progressLine.style.width = "53.5%";
	}else{
		// progressLine.style.transform = "scaleX("+progressCurrent+")";

		progressLine.style.width = "53.5%";
		preLoadNPCImages(); //preload
		playAgain = true;
	}


}
function loadTips() {
	loadingTips.innerText = loadingTipsArray[0];

}
function charAnimation(info) {
	// console.log(currentScene.getElementsByClassName(info.class));

	var speakerChar = currentScene.getElementsByClassName(info.class)[0];

	idleCharacters(info, function() {
		speakerChar.classList.add('talk');
		console.log('working');
	})
}

function idleCharacters(info, callback) {
	var charactersInScene = currentScene.getElementsByClassName('character');
	for ( var i = 0; i < charactersInScene.length; i++) {
		charactersInScene[i].classList.remove('talk');
	};

	callback();
}

function hideGameTitle() {
	gameTitle.classList.add('hide');
}
function showGameTitle() {
	gameTitle.classList.remove('hide');

}
function hideProgress() {
	progressBar.classList.add('hide');
	// progressLine.style.transform = "scaleX("+progressCurrent+")";
	progressLine.style.width = "6%";

}
function runConversation(info) {
	// alert();
	// conversationScriptArray[1].conversation[0]
	if (hasClass(conversationLayer, 'hide')) {
		conversationLayer.classList.remove('hide');

	}
	if (!hasClass(conversationLayer, 'active')) {
		conversationLayer.classList.add('active');

	}
	console.log(dialogueCount);

	var charNum = playerChar.index;
	var charPositionArray = [ 'sarah', 'louise', 'gladys', 'raymond', 'mary',
			'scene-zero', 'scene-one' ];
	if (dialogueCount < info[charNum].conversation.length) {
		if (hasClass(
				currentScene,
				info[charNum].conversation[dialogueCount].sceneName)) {

			if (!info[charNum].conversation[dialogueCount].actionOnly) {

				enableConversation();

				for ( var j = 0; j < charPositionArray.length; j++) {
					conversationBubble.classList.remove(charPositionArray[j]);
				}

				conversationBubble.classList
						.add(info[charNum].conversation[dialogueCount].class);
				conversationBubble.classList
						.add(info[charNum].conversation[dialogueCount].sceneName);

				speakerName.innerText = info[charNum].conversation[dialogueCount].speaker;
				conversationtext.innerHTML = info[charNum].conversation[dialogueCount].dialogue ; //+ '<div class="tap-to-contn">TAP TO CONTINUE</div>';

                playAudio(info[charNum].conversation[dialogueCount].audioFile);


				charAnimation(info[charNum].conversation[dialogueCount]);
				dialogueCount = dialogueCount + 1;

			} else {
				for ( var j = 0; j < charPositionArray.length; j++) {
					conversationBubble.classList.remove(charPositionArray[j]);
				}

				conversationBubble.classList
						.add(conversationScriptArray[charNum].conversation[dialogueCount].class);
				conversationBubble.classList
						.add(conversationScriptArray[charNum].conversation[dialogueCount].sceneName);
				charAnimation(conversationScriptArray[charNum].conversation[dialogueCount]);
				dialogueCount = dialogueCount + 1;
				disableCoversation();
				// debugger;
				// conversationScriptArray[charNum].conversation[dialogueCount].sceneNo
			}

		} else {
			disableCoversation();
			navigateScenes(conversationScriptArray[charNum].conversation[dialogueCount].sceneNo + 1,0);

			// debugger;
		}

	} else {
		conversationLayer.classList.add('hide');
		conversationLayer.classList.remove('active');
		revealMap(); //only here to open map.
	}

}
function welcomePlayer() {
	backGroundZeroZero.classList.remove('splash');
	backGroundZeroZero.classList.add('view-one');
	backGroundZeroZero.classList.add('ken-burn');
    gameOverlay.classList.add('tint');
    controlSetting.classList.remove('hide');
	instructionHUD.classList.remove('hide');
	instructionHUD.classList.remove('char-profile-on');
	charProfile.classList.add('hide');
	instructionTitle.classList.remove('hide');
	instructionContent.classList.remove('hide');

	navigateInstructions();
}
function preLoadPlayerImages(){

	var speakerChar;

/*


		for ( var j = 0; j < sceneWrapper.children.length - 1; j++) {
			speakerChar = sceneWrapper.getElementsByClassName('player')[j];
			speakerChar.classList.add('talk');
		}
		setTimeout(function(){
			for ( var j = 0; j < sceneWrapper.children.length - 1; j++) {
				speakerChar = sceneWrapper.getElementsByClassName('player')[j];
				speakerChar.classList.remove('talk');
			}


		},10000)	;

*/


}

function preLoadNPCImages(){

	var NPCChar;
  var louiseImages = images;
  console.log(louiseImages[1]);
  var totalCountWidth = 53.5;
/*  var louiseImages = ['/LifeSpan/assets/images/character-animations/scene-0/talk/louise/Louise_00920.png',
  '/LifeSpan/assets/images/character-animations/scene-0/talk/louise/Louise_00921.png',
  '/LifeSpan/assets/images/character-animations/scene-0/talk/louise/Louise_00922.png',
  '/LifeSpan/assets/images/character-animations/scene-0/talk/louise/Louise_00923.png',
  '/LifeSpan/assets/images/character-animations/scene-0/talk/louise/Louise_00924.png']; */
  var louiseImagesLength = louiseImages.length;
//  console.log("louiseImagesLength");
//  console.log(louiseImagesLength);
  var completedCount = 0;

//    console.log('preLoadNPCImages sceneWrapper length');
//    console.log(sceneWrapper.getElementsByClassName('character').length);

    var loader = new PxLoader({statusInterval: 500});
    for (var i = 0; i < louiseImages.length; i++) {
       loader.add(new PxLoaderImage(louiseImages[i]));
    }
    loader.addProgressListener(function(e) {
    //  console.log(e);
  //    console.log(53.5*completedCount/louiseImagesLength);
      completedCount++;
      progressLine.style.transitionDuration = "0.2s"
      progressLine.style.width = (53.5*completedCount/louiseImagesLength).toString() +"%";
    });
    loader.addCompletionListener(function() {

    //  progressLine.style.transitionDuration = "0s"
      progressLine.style.width = "53.5%";
      setTimeout(initGame , 500);
    });
    loader.start();
	for ( var j = 0; j < sceneWrapper.getElementsByClassName('character').length; j++) {
//    console.log(j);
//    console.log('preLoadNPCImages sceneWrapper at '+ j);
    if(j != 4 && j != 5 && j != 7 && j != 9 && j != 1){
     //var backgroundImg = loader.addImage('assets/images/character-animations/scene-0/talk/louise/Louise_00924.png');
  //    console.log("loaded sample louise Images")
  //    console.log(sceneWrapper.getElementsByClassName('character')[j]);
    }else{

    //  console.log(sceneWrapper.getElementsByClassName('character')[j]);
      NPCChar = sceneWrapper.getElementsByClassName('character')[j];
      NPCChar.classList.add('talk');
    }
	}
  //initGame();
setTimeout(function(){
	for ( var j = 0; j < sceneWrapper.getElementsByClassName('character').length; j++) {
		NPCChar = sceneWrapper.getElementsByClassName('character')[j];
		NPCChar.classList.remove('talk');
	}

},100) }

function tourApartment() {
if(audio){

	audio.pause();
}



		for ( var j = 0; j < 3; j++) {
		apartmentIcon[j].classList.remove('location');
	}
	apartmentIcon[currentApartment.index].classList.add('location');

	dialogueCount = 0 ;
	currentSubSceneIndex = 0 ;
	for ( var i = 0; i < 3; i++) {
		apartmentIcon[i].classList.remove('clicked');
	}
	apartmentInfo.classList.add('hide');
	toggleMap();
	for ( var i = 0; i < infoApartmentArray.length; i++) {
		sceneWrapper.children[3].classList.remove(infoApartmentArray[i].class);
	};


	sceneWrapper.children[3].classList.add(currentApartment.class);
	navigateScenes(3,currentSubSceneIndex);
	initApartmentControls();
	//resetgame();
}


function navigateScenes(sceneNo,subSceneNo,optUnhideElement) {


	gameOverlay.classList.remove('tint');
	gameOverlay.classList.add('darken');
	controlMode.classList.add('hide');
	hideHintIcon();
	if(hintFlags.isHintMsgShowing){
		infoText.classList.add("hide");
	}

	//guideHeader.classList.add("hide");
	//guideHeader.classList.remove("move-guide-back");
	//guideHeader.innerText="";

		OOILayer.classList.add("hide");

	setTimeout(function() {

		for ( var i = 0; i < sceneWrapper.children.length; i++) {
			sceneWrapper.children[i].classList.add('hide');

			for ( var j = 0; j < sceneWrapper.children[i].children.length; j++) {
				sceneWrapper.children[i].children[j].classList.add('hide');
			};


		};

		sceneWrapper.children[sceneNo].classList.remove('hide');
		sceneWrapper.children[sceneNo].children[subSceneNo].classList.remove('hide');
		currentScene = sceneWrapper.children[sceneNo];
		currentSubScene = sceneWrapper.children[sceneNo].children[subSceneNo] ;
		setTimeout(function() {

			var allChars = sceneWrapper.getElementsByClassName('character');
			for ( var j = 0; j < allChars.length; j++) {
				NPCChar = allChars[j];
				NPCChar.classList.remove('talk');
			}

			gameOverlay.classList.remove('darken');
			controlMode.classList.remove('hide');
			showHintIcon();
			if(hintFlags.isHintMsgShowing){
				showHint()
			};
			if(currentScene && hasClass(currentScene,"scene-two")){
				OOILayer.classList.remove("hide");
			};
			 if(endGameReview){

		guideHeader.classList.remove("decision");
		guideHeader.classList.add("hide");


                  reviewByLouise();
			 }

			//if(sceneNo==3){
			/*	guideHeader.classList.remove("hide");
				guideHeader.classList.add("move-guide-back");
				guideHeader.innerText = currentApartment.name + ". "+subSceneNames[subSceneNo];*/
			//}


			if(optUnhideElement){
				optUnhideElement.classList.remove('hide');
			}
			//callBack;
		}, 1000);

	}, 1000);

}

var POSTERS_PER_ROW = 12;
var RING_RADIUS = 200;

function setup_posters (row)
{
  var posterAngle = 360 / POSTERS_PER_ROW;
  for (var i = 0; i < POSTERS_PER_ROW+1; i ++) {
    var poster = document.createElement('div');
    poster.className = 'poster';
    // compute and assign the transform for this poster
    var transform = 'rotateY(' + (posterAngle * i) + 'deg) translateZ(' + RING_RADIUS + 'px)';
    poster.style.webkitTransform = transform;
    // setup the number to show inside the poster
    var content = poster.appendChild(document.createElement('p'));
    content.textContent = i;
    // add the poster to the row
    //row.appendChild(poster);
  }

}


/** ****** button Events ****** */
