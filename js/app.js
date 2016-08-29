
var charAnn, charSarah, buttonPlay, buttonPrev, buttonNext, appContainer;

var controlInfo, rightNav , ailmentNotes , ailmentTitle , backGroundZeroZero , currentSubSceneIndex = 0 , leftNav , charAge ,spinnerCharInfo , charPoster ,  charEthnicity , charName ,  charGender , taggedOOI , noteDismissButton , infoClose , currentOOIIndex , currentOOI = {} , inSceneOOI = [] ,  playAgain = false , controlSetting, OOILayer ,controlMap, loadingTips, playerCharacterArray, playerOOITags,  instructionsArray, loadingTipsArray, progressBar, controlBars, progressLine, apartmentTitle, controlLayer, controlMap, gameMap, infoText, ailmentArray , infoApartmentArray, infoScriptObject, OOIContentArray, conclusionScriptArray ,  conversationScriptArray;

var tagScore = 5 , exploredObjectsList , noOfObjectsExplored , ailmentContent , dismissAilmentButton , controlNotes , apartmentScore = 60 , closeObject , userInterface , characterPin , objectTitle , inSceneOOIs , currentOOIDescription= "" , objectDescription , objectEffectContent , objectDescriptionContent , engagementScore = 0 , gameScore = 0 , rentDetails, loadDuration = 25000 , currentApartment , gameMode , settingOn = false , controlMode ,soundControl ,gameMusicControl , spinned = false, ringOne ,playerChar, ratingDetails, distanceDetails, ammenitiesDetails, tourButton, instructionHUD, instructionTitle, instructionContent, nextButton, spinButton, characterSelectionWidget, widgetTitle, guideHeader, slotMachine, spinButton, charProfile, charAvtar, charProfileName, charProfileSummary, charDetailsList, charDetailsOne, charDetailsTwo, conversationLayer, conversationBubble, speakerName, conversationtext, chairLouiseZero, currentScene, currentSubScene , characterIDArray, conversationScriptArray, contextCount = 0, dialogueCount = 0, sceneWrapper, gameOverlay, sceneTransition = false, machineBackground, apartmentIcon, instructionCount = 0, apartmentInfo;

infoScriptArray = [
		{
			'infoTitle' : 'info-one',
			'informationText' : 'Spin the wheel to choose the character you will be playing.',
			'index' : 0
		},
		{
			'infoTitle' : 'info-two',
			'informationText' : 'Using the map, click to tour each apartment to learn more about it.',
			'timing' : 4
		},
		{
			'infoTitle' : 'info-three',
			'informationText' : 'Use your mouse to move around the apartment. Keep an eye out for objects that glow.',
			'timing' : 4
		}

];

conversationScriptArray = [
		{
			"character" : "Gladys",
			"conversation" : [
					{
						"speaker" : "Louise",
						"dialogue" : "Hi, Gladys. It's great to see you. How are you doing?",
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
						"sceneName" : "scene-one",
						"sceneNo" : 1,
						"subSceneNo":0,
						"index" : 3,
						"charID" : 0,
						"class" : "sarah"
					},
					{
						"speaker" : "Raymond",
						"dialogue" : "Hello…I'm sorry. Did you say your name was Terri?",
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
                	                					"NPCResponse":"It's great that they have all these safety features."
                	                				},
                	                				{
                	                					"character" : "Mary",
                	                					"charID" : 3,
                	                					"charClass" : "mary",
                	                					"OOIImpact" : "plus",
                	                					"NPCName":"Sarah",
                	                					"NPCID":0,
                	                					"NPCClass":"sarah,",
                	                					"NPCResponse":"It's great that they have all these safety features."
                	                				},
                	                				{
                	                					"character" : "Raymond",
                	                					"charID" : 4,
                	                					"charClass" : "raymond",
                	                					"OOIImpact" : "plus",
                	                					"NPCName":"Sarah",
                	                					"NPCID":0,
                	                					"NPCClass":"sarah,",
                	                					"NPCResponse":"It's great that they have all these safety features."
                	                				}

                	                		]

                	                	} ,
                	                	{
                	                		"OOI" : "Steps",
                	                		"OOIName" : "Steps",
                	                		"OOIClass":"steps",
                	                		"OOIID": 3 ,
                	                		"OOIDescription" : "The entrance has steps leading to the living space.",
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
                	                					"NPCResponse":"It's nice this apartment is on the ground floor, but what do you think of those steps?"
                	                				},
                	                				{
                	                					"character" : "Mary",
                	                					"charID" : 3,
                	                					"charClass" : "mary",
                	                					"OOIImpact" : "minus",
                	                					"NPCName":"Sarah",
                	                					"NPCID":0,
                	                					"NPCClass":"sarah,",
                	                					"NPCResponse":"Will getting up and down these steps be a problem?"
                	                				},
                	                				{
                	                					"character" : "Raymond",
                	                					"charID" : 4,
                	                					"charClass" : "raymond",
                	                					"OOIImpact" : "neutral minus",
                	                					"NPCName":"Sarah",
                	                					"NPCID":0,
                	                					"NPCClass":"sarah,",
                	                					"NPCResponse":"It's nice this apartment is on the ground floor, but what do you think of those steps?"
                	                				}

                	                		]

                	                	},
                	                     
{
		"OOI" : "Windows",
		"OOIName" : "Windows",
		"OOIClass":"windows",
		"OOIID": 0 ,
		"OOIDescription" : "This apartment features original wood windows with heavy frames, facing an alley.",
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
					"NPCResponse":"Will these windows provide good lighting?"
				},
				{
					"character" : "Mary",
					"charID" : 3,
					"charClass" : "mary",
					"OOIImpact" : "minus",
					"NPCName":"Sarah",
					"NPCID":0,
					"NPCClass":"sarah,",
					"NPCResponse":"These windows are difficult to open. I think it's because of the old paint."
				},
				{
					"character" : "Raymond",
					"charID" : 4,
					"charClass" : "raymond",
					"OOIImpact" : "neutral",
					"NPCName":"Sarah",
					"NPCID":0,
					"NPCClass":"sarah,",
					"NPCResponse":"These windows provide a terrible view."
				}

		]

	},
	{
		"OOI" : "Lights",
		"OOIName" : "Lights",
		"OOIClass":"lighting",
		"OOIID": 1 ,
		"OOIDescription" : "There are no overhead lighting and switches in most rooms. Lamps with cords are needed.",
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
					"NPCResponse":"It's a bit dark in here. Don't trip over the lamp cord."
				},
				{
					"character" : "Mary",
					"charID" : 3,
					"charClass" : "mary",
					"OOIImpact" : "minus",
					"NPCName":"Sarah",
					"NPCID":0,
					"NPCClass":"sarah,",
					"NPCResponse":"It's a bit dark in here. Don't trip over the lamp cord."
				},
				{
					"character" : "Raymond",
					"charID" : 4,
					"charClass" : "raymond",
					"OOIImpact" : "neutral",
					"NPCName":"Sarah",
					"NPCID":0,
					"NPCClass":"sarah,",
					"NPCResponse":"It's too bad there's no overhead lighting."
				}

		]

	},
	{
		"OOI" : "Flooring",
		"OOIName" : "Flooring",
		"OOIClass":"flooring",
		"OOIID": 2 ,
		"OOIDescription" : "There is thick carpeting in the living space and bedroom.",
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
					"NPCResponse":"Isn't this carpet nice?"
				},
				{
					"character" : "Mary",
					"charID" : 3,
					"charClass" : "mary",
					"OOIImpact" : "neutral minus",
					"NPCName":"Sarah",
					"NPCID":0,
					"NPCClass":"sarah,",
					"NPCResponse":"Can you move around easily with the carpeting?"
				},
				{
					"character" : "Raymond",
					"charID" : 4,
					"charClass" : "raymond",
					"OOIImpact" : "plus",
					"NPCName":"Sarah",
					"NPCID":0,
					"NPCClass":"sarah,",
					"NPCResponse":"Does carpeting help reduce background noise?"
				}

		]

	},
	{
		"OOI" : "Bathtub",
		"OOIName" : "Bathtub",
		"OOIClass":"bathtub",
		"OOIID": 4 ,
		"OOIDescription" : "The bathroom has a standard tub.",
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
					"NPCResponse":"This bathroom is pretty spacious."
				},
				{
					"character" : "Mary",
					"charID" : 3,
					"charClass" : "mary",
					"OOIImpact" : "minus",
					"NPCName":"Sarah",
					"NPCID":0,
					"NPCClass":"sarah,",
					"NPCResponse":"Will you need to renovate the bathroom?"
				},
				{
					"character" : "Raymond",
					"charID" : 4,
					"charClass" : "raymond",
					"OOIImpact" : "neutral",
					"NPCName":"Sarah",
					"NPCID":0,
					"NPCClass":"sarah,",
					"NPCResponse":"This bathroom is pretty spacious."
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
                     	                					"NPCResponse":"Wow. A nice big entrance with lots of character."
                     	                 				},
                     	                 				{
                     	                 					"character" : "Mary",
                     	                 					"charID" : 3,
                     	                 					"charClass" : "mary",
                     	                 					"OOIImpact" : "plus",
                     	                 					"NPCName":"Sarah",
                     	                 					"NPCID":0,
                     	                 					"NPCClass":"sarah,",
                     	                					"NPCResponse":"Do you need help with the doors?"
                     	                 				},
                     	                 				{
                     	                 					"character" : "Raymond",
                     	                 					"charID" : 4,
                     	                 					"charClass" : "raymond",
                     	                 					"OOIImpact" : "plus",
                     	                 					"NPCName":"Sarah",
                     	                 					"NPCID":0,
                     	                 					"NPCClass":"sarah,",
                     	                					"NPCResponse":"Wow. A nice big entrance with lots of character."
                     	                 				}

                     	                 		]

                     	                 	}      ,

                     	                	{
                     	                		"OOI" : "Steps",
                     	                		"OOIName" : "Steps",
                     	               		"OOIClass":"steps",
                     	               		"OOIID": 3 ,
                     	                		"OOIDescription" : "The entrance has porch steps leading up to front door.",
                     	                		"sceneNo":2,
                     	                		"subSceneNo":0,
                     	                		"characterImpact" : [
                     	                				{
                     	                					"character" : "Gladys",
                     	                					"charID" : 2,
                     	                					"charClass" : "gladys",
                     	                					"OOIImpact" : "neutral minus",
                     	                					"NPCName":"Sarah",
                     	                					"NPCID":0,
                     	                					"NPCClass":"sarah,",
                     	               					"NPCResponse":"Be careful getting up and down the porch steps."
                     	                				},
                     	                				{
                     	                					"character" : "Mary",
                     	                					"charID" : 3,
                     	                					"charClass" : "mary",
                     	                					"OOIImpact" : "minus",
                     	                					"NPCName":"Sarah",
                     	                					"NPCID":0,
                     	                					"NPCClass":"sarah,",
                     	               					"NPCResponse":"Be careful getting up and down the porch steps."
                     	                				},
                     	                				{
                     	                					"character" : "Raymond",
                     	                					"charID" : 4,
                     	                					"charClass" : "raymond",
                     	                					"OOIImpact" : "neutral minus",
                     	                					"NPCName":"Sarah",
                     	                					"NPCID":0,
                     	                					"NPCClass":"sarah,",
                     	               					"NPCResponse":"What do you think about having porch steps?"
                     	                				}

                     	                		]

                     	                	},
                     	                     
     {
     		"OOI" : "Windows",
     		"OOIName" : "Windows",
    		"OOIClass":"windows",
    		"OOIID": 0 ,
     		"OOIDescription" : "This apartment features sliding windows and a skylight in the living space.",
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
    					"NPCResponse":"It's so nice and bright in here."
     				},
     				{
     					"character" : "Mary",
     					"charID" : 3,
     					"charClass" : "mary",
     					"OOIImpact" : "minus",
     					"NPCName":"Sarah",
     					"NPCID":0,
     					"NPCClass":"sarah,",
    					"NPCResponse":"You can easily open these windows."
     				},
     				{
     					"character" : "Raymond",
     					"charID" : 4,
     					"charClass" : "raymond",
     					"OOIImpact" : "neutral",
     					"NPCName":"Sarah",
     					"NPCID":0,
     					"NPCClass":"sarah,",
    					"NPCResponse":"It's so nice and bright in here."
     				}

     		]

     	},
     	{
     		"OOI" : "Lights",
     		"OOIName" : "Lights",
    		"OOIClass":"lighting",
    		"OOIID": 1 ,
     		"OOIDescription" : "This apartment has glowing light switches.",
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
    					"NPCResponse":"Glowing switches make them easy to find."
     				},
     				{
     					"character" : "Mary",
     					"charID" : 3,
     					"charClass" : "mary",
     					"OOIImpact" : "minus",
     					"NPCName":"Sarah",
     					"NPCID":0,
     					"NPCClass":"sarah,",
    					"NPCResponse":"Glowing switches make them easy to find."
     				},
     				{
     					"character" : "Raymond",
     					"charID" : 4,
     					"charClass" : "raymond",
     					"OOIImpact" : "neutral",
     					"NPCName":"Sarah",
     					"NPCID":0,
     					"NPCClass":"sarah,",
    					"NPCResponse":"Glowing switches make them easy to find."
     				}

     		]

     	},
     	{
     		"OOI" : "Flooring",
     		"OOIName" : "Flooring",
    		"OOIClass":"flooring",
    		"OOIID": 2 ,
     		"OOIDescription" : "This apartment has an open floor plan with hardwood floors.",
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
    					"NPCResponse":"There's so much room to move around easily."
     				},
     				{
     					"character" : "Mary",
     					"charID" : 3,
     					"charClass" : "mary",
     					"OOIImpact" : "neutral minus",
     					"NPCName":"Sarah",
     					"NPCID":0,
     					"NPCClass":"sarah,",
    					"NPCResponse":"There's so much room to move around easily."
     				},
     				{
     					"character" : "Raymond",
     					"charID" : 4,
     					"charClass" : "raymond",
     					"OOIImpact" : "plus",
     					"NPCName":"Sarah",
     					"NPCID":0,
     					"NPCClass":"sarah,",
    					"NPCResponse":"Does the open space create too much echoing?"
     				}

     		]

     	},
     	{
     		"OOI" : "Bathtub",
     		"OOIName" : "Bathtub",
    		"OOIClass":"bathtub",
    		"OOIID": 4 ,
     		"OOIDescription" : "This apartment features an accessible bathtub with handrails along the walls.",
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
    					"NPCResponse":"This is really nice bathroom with great safety features."
     				},
     				{
     					"character" : "Mary",
     					"charID" : 3,
     					"charClass" : "mary",
     					"OOIImpact" : "minus",
     					"NPCName":"Sarah",
     					"NPCID":0,
     					"NPCClass":"sarah,",
    					"NPCResponse":"This is really nice bathroom with great safety features."
     				},
     				{
     					"character" : "Raymond",
     					"charID" : 4,
     					"charClass" : "raymond",
     					"OOIImpact" : "neutral",
     					"NPCName":"Sarah",
     					"NPCID":0,
     					"NPCClass":"sarah,",
    					"NPCResponse":"This is really nice bathroom with great safety features."
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
                             	                					"NPCResponse":"Lots of cars and foot traffic around here. Will you be able to get around okay?"
                             	                 				},
                             	                 				{
                             	                 					"character" : "Mary",
                             	                 					"charID" : 3,
                             	                 					"charClass" : "mary",
                             	                 					"OOIImpact" : "plus",
                             	                 					"NPCName":"Sarah",
                             	                 					"NPCID":0,
                             	                 					"NPCClass":"sarah,",
                             	                					"NPCResponse":"Lots of cars and foot traffic around here. Will you be able to get around okay?"
                             	                 				},
                             	                 				{
                             	                 					"character" : "Raymond",
                             	                 					"charID" : 4,
                             	                 					"charClass" : "raymond",
                             	                 					"OOIImpact" : "plus",
                             	                 					"NPCName":"Sarah",
                             	                 					"NPCID":0,
                             	                 					"NPCClass":"sarah,",
                             	                					"NPCResponse":"Lots of cars and foot traffic around here. Is this too noisy for you?"
                             	                 				}

                             	                 		]

                             	                 	}      ,
                             	                 	
                             	                	{
                             	                		"OOI" : "Steps",
                             	                		"OOIName" : "Steps",
                             	               		"OOIClass":"steps",
                             	               		"OOIID": 3 ,
                             	                		"OOIDescription" : "The entrance has a ramp to the front door.",
                             	                		"sceneNo":2,
                             	                		"subSceneNo":0,
                             	                		"characterImpact" : [
                             	                				{
                             	                					"character" : "Gladys",
                             	                					"charID" : 2,
                             	                					"charClass" : "gladys",
                             	                					"OOIImpact" : "neutral minus",
                             	                					"NPCName":"Sarah",
                             	                					"NPCID":0,
                             	                					"NPCClass":"sarah,",
                             	               					"NPCResponse":"It's good that there's a ramp instead of stairs."
                             	                				},
                             	                				{
                             	                					"character" : "Mary",
                             	                					"charID" : 3,
                             	                					"charClass" : "mary",
                             	                					"OOIImpact" : "minus",
                             	                					"NPCName":"Sarah",
                             	                					"NPCID":0,
                             	                					"NPCClass":"sarah,",
                             	               					"NPCResponse":"It's good they have a ramp instead of stairs."
                             	                				},
                             	                				{
                             	                					"character" : "Raymond",
                             	                					"charID" : 4,
                             	                					"charClass" : "raymond",
                             	                					"OOIImpact" : "neutral minus",
                             	                					"NPCName":"Sarah",
                             	                					"NPCID":0,
                             	                					"NPCClass":"sarah,",
                             	               					"NPCResponse":"It's good that there's a ramp instead of stairs."
                             	                				}

                             	                		]

                             	                	},
                             	                     
             {
             		"OOI" : "Windows",
             		"OOIName" : "Windows",
            		"OOIClass":"windows",
            		"OOIID": 0 ,
             		"OOIDescription" : "This apartment has narrow, crank-to-open windows.",
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
            					"NPCResponse":"You won't get a lot of sunlight with these windows."
             				},
             				{
             					"character" : "Mary",
             					"charID" : 3,
             					"charClass" : "mary",
             					"OOIImpact" : "minus",
             					"NPCName":"Sarah",
             					"NPCID":0,
             					"NPCClass":"sarah,",
            					"NPCResponse":"These windows open easily."
             				},
             				{
             					"character" : "Raymond",
             					"charID" : 4,
             					"charClass" : "raymond",
             					"OOIImpact" : "neutral",
             					"NPCName":"Sarah",
             					"NPCID":0,
             					"NPCClass":"sarah,",
            					"NPCResponse":"These windows seem to block a lot of outside noise."
             				}

             		]

             	},
             	{
             		"OOI" : "Lights",
             		"OOIName" : "Lights",
            		"OOIClass":"lighting",
            		"OOIID": 1 ,
             		"OOIDescription" : "This apartment features track lighting with motion detectors.",
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
            					"NPCResponse":"It's so cool not to have to use switches to turn on the lights."
             				},
             				{
             					"character" : "Mary",
             					"charID" : 3,
             					"charClass" : "mary",
             					"OOIImpact" : "minus",
             					"NPCName":"Sarah",
             					"NPCID":0,
             					"NPCClass":"sarah,",
            					"NPCResponse":"It's so cool not to have to use switches to turn on the lights."
             				},
             				{
             					"character" : "Raymond",
             					"charID" : 4,
             					"charClass" : "raymond",
             					"OOIImpact" : "neutral",
             					"NPCName":"Sarah",
             					"NPCID":0,
             					"NPCClass":"sarah,",
            					"NPCResponse":"It's so cool not to have to use switches to turn on the lights."
             				}

             		]

             	},
             	{
             		"OOI" : "Flooring",
             		"OOIName" : "Flooring",
            		"OOIClass":"flooring",
            		"OOIID": 2 ,
             		"OOIDescription" : "This apartment has an open floor plan with linoleum flooring.",
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
            					"NPCResponse":"There's so much room to move around easily."
             				},
             				{
             					"character" : "Mary",
             					"charID" : 3,
             					"charClass" : "mary",
             					"OOIImpact" : "neutral minus",
             					"NPCName":"Sarah",
             					"NPCID":0,
             					"NPCClass":"sarah,",
            					"NPCResponse":"There's so much room to move around easily."
             				},
             				{
             					"character" : "Raymond",
             					"charID" : 4,
             					"charClass" : "raymond",
             					"OOIImpact" : "plus",
             					"NPCName":"Sarah",
             					"NPCID":0,
             					"NPCClass":"sarah,",
            					"NPCResponse":"Does the open space create too much echoing?"
             				}

             		]

             	},
             	{
             		"OOI" : "Bathtub",
             		"OOIName" : "Bathtub",
            		"OOIClass":"bathtub",
            		"OOIID": 4 ,
             		"OOIDescription" : "This apartment features an accessible shower with handrails along the walls.",
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
            					"NPCResponse":"This is really nice bathroom with great safety features."
             				},
             				{
             					"character" : "Mary",
             					"charID" : 3,
             					"charClass" : "mary",
             					"OOIImpact" : "minus",
             					"NPCName":"Sarah",
             					"NPCID":0,
             					"NPCClass":"sarah,",
            					"NPCResponse":"This is really nice bathroom with great safety features."
             				},
             				{
             					"character" : "Raymond",
             					"charID" : 4,
             					"charClass" : "raymond",
             					"OOIImpact" : "neutral",
             					"NPCName":"Sarah",
             					"NPCID":0,
             					"NPCClass":"sarah,",
            					"NPCResponse":"This is really nice bathroom with great safety features."
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

conclusionScriptArray : [
                         
                         
                         
                         
                         
                         
                         ]



playerOOITags = [
                 {
                	apartmentClass : "pinegrove",
                	taggedOOIs : 
                	              {
                	            	"windows": "",
                	            	"lighting":"",
                	            	"flooring":"",
                	            	"frontdoor":"",
                	            	"steps":"",
                	            	"bathtub":""
                	              }
                	              
                	
                 },
                 {
                	apartmentClass : "lakeview",
                	taggedOOIs : 
                	              {
                	            	"windows": "",
                	            	"lighting":"",
                	            	"flooring":"",
                	            	"frontdoor":"",
                	            	"steps":"",
                	            	"bathtub":""
                	              }
                	              
                	
                 },
                 {
                	apartmentClass : "sunnyvale",
                	taggedOOIs : 
                	              {
                	            	"windows": "",
                	            	"lighting":"",
                	            	"flooring":"",
                	            	"frontdoor":"",
                	            	"steps":"",
                	            	"bathtub":""
                	              }
                	              
                	
                 }
                 
                 
                 ]


loadingTipsArray = [
		"Help the seniors at Main Street Center choose the apartment that suits them best.",
		"make sure you take time to understand the challenges they face.",
		"Don't forget to investigate the glowing objects in the apartment before making your recommendation." 
		];
instructionsArray = [
		{
			"instructionTitle" : "Good day, Quest Adventurer!",
			"instructionContent" : "<p>Imagine yourself as an older adult, living in Quest City. You have recently sold your home and need to find a new apartment today. </p><p>	Apply knowledge of physical changes in late adulthood to real world scenarios</p>",
		},
		{
			"instructionTitle" : "Continued...",
			"instructionContent" : "<p>Sarah, a senior center volunteer, will go with you to look at three different apartments. Explore each apartment carefully. Pay attention to the clues and make the best choice.  </p><p>What do you want or need in a living space? </p><p>What features will help you live longer and happier?</p>  ",
		},
		{
			"instructionTitle" : "Continued...",
			"instructionContent" : "<p>Each apartment has pros and cons , so take your time in picking the place that will make your life safer and healthier. </p><p>Your happiness depends on it.</p>",

		},
		{
			"instructionTitle" : "Continued...",
			"instructionContent" : "<p>As we get older, we start to notice some physical changes such as wrinkled skin and thinning hair. </p><p>But there are also functional changes that can impact daily living.</p>",
		}

];

ailmentArray = [ {
	'ailment' : 'Visual Impairment',
	'description' : 'People who are older generally need more light in order to see, sometimes have difficulty with depth perception, and may be more sensitive to glare. Activities such as driving can become difficult. ',
	"index": 0,
	"class" : "eye"

}, {
	'ailment' : 'Mobility Impairment',
	'description' : 'People who are older also lose body strength, flexibility and balance, affecting daily activities such as doing chores around the home, and possibly contributing to falls and accidents. ',
	"index": 1,
	"class" : "leg"

}, {
	'ailment' : 'Auditory Impairment',
	'description' : 'People who are older may have hearing impairments. Although hearing aids are an option, they sometimes magnify background noise as well as speech. ',
	"index": 2,
	"class" : "ear"

}

];



infoApartmentArray = [ {
	'title' : 'Pine Grove Apartments',
	'rent' : '$ 850 /month ',
	'distance' : " 0.5 mile",
	'ammenities' : "Swimming Pool , Super Market",
	"class" : 'pinegrove',
	"index": 0

}, {
	'title' : 'Lakeview Courts',
	'rent' : '$ 975 /month ',
	'distance' : " 0.25 mile",
	'ammenities' : "Library , Super Market",
	"class" : 'lakeview',
	"index": 1
}, {
	'title' : 'Sunnyvale Apartments',
	'rent' : '$ 1000 /month ',
	'distance' : " 0.14 mile",
	'ammenities' : "Super Market",
	"class" : 'sunnyvale',
	"index": 2
}

];

characterIDArray = [ 'sarah', 'louise', 'gladys', 'mary', 'raymond' ];

playerCharacterArray = [ {
	'name' : 'Gladys',
	'gender' : 'Female',
	'age' : ' 73 ',
	'ethnicity' : 'African-American ',
	'identity' : 'Woman',
	'avtar' : 'assets/images/gladys-icon.png',
	'index' : 0,
	'charID' : 2,
	'class' : 'gladys',
	"impairment" : "visual impairment"

}, {
	'name' : 'Mary',
	'gender' : 'Female',
	'age' : '83 ',
	'ethnicity' : 'Caucasian  ',
	'identity' : 'Woman',
	'avtar' : 'assets/images/mary-icon.png',
	'index' : 1,
	'charID' : 3,
	'class' : 'mary',
	"impairment" : "mobility impairments"

}, {
	'name' : 'Raymond',
	'gender' : 'Male',
	'age' : '79 ',
	'ethnicity' : 'Hispanic',
	'identity' : 'man',
	'avtar' : 'assets/images/raymond-icon.png',
	'index' : 2,
	'charID' : 4,
	'class' : 'raymond',
	"impairment" : "auditory impairment"

}

];

appContainer = document.getElementById('appContainer');
controlInfo = document.getElementById('controlInfo');
progressLine = document.getElementById('progressLine');
progressBar = document.getElementById('progressBar');
/* controlLayer = document.getElementById('controlLayer') ; */
infoText = document.getElementById('infoText');
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

tagNotes = document.getElementById('tagNotes');
controlNotes = document.getElementById('controlNotes');
dismissAilmentButton  = document.getElementById('dismissAilmentButton');
buttonPrev = document.getElementById('prevButton');
sceneWrapper = document.getElementById('sceneWrapper');
OOILayer = document.getElementById('OOILayer'); 
ailmentNotes = document.getElementById('ailmentNotes'); 
buttonPlay = document.getElementById('playButton');
guideHeader = document.getElementById('guideHeader');
buttonNext = document.getElementById('nextButton');
characterPin = document.getElementById('characterPin');
backGroundZeroZero = document.getElementById('backGroundZeroZero');
gameMusic = document.getElementById('gameMusic');
gameMusicControl = document.getElementById('gameMusicControl');
soundControl = document.getElementById('soundControl');
apartmentTitle = document.getElementById('apartmentTitle');
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

apartmentIcon = document.getElementsByClassName('apartment');
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
	setTimeout(initGame, loadDuration);
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
			gameMusicControl.classList.remove('on');
			soundControl.src = "assets/images/audio-off.png";
			gameMusic.pause();
		} else {
			gameMusicControl.classList.add('on');
			soundControl.src = "assets/images/audio-on.png";
			gameMusic.play();
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
spinButton.addEventListener('click', function() {
	

		if (contextCount == 1) {
			meetCharacter();
		}else{
			if(!spinned){
			spinned = true;
			spinButton.classList.add('hide');
			characterInfoLayer.classList.add('show')
			spinButton.classList.remove('point');
			selectCharacter(playerCharacterArray);	
			}
		}

	

	
});

tourButton.addEventListener('click', function() {
	tourApartment();
});
apartmentIcon[0].addEventListener('click', function() {
	showApartmentInfo(infoApartmentArray, 0);
});
apartmentIcon[1].addEventListener('click', function() {
	showApartmentInfo(infoApartmentArray, 1);
});
apartmentIcon[2].addEventListener('click', function() {
	showApartmentInfo(infoApartmentArray, 2);
});


ailments[0].addEventListener('click', function() {
	showAilmentDescription(0);
});
ailments[1].addEventListener('click', function() {
	showAilmentDescription(1);
});
ailments[2].addEventListener('click', function() {
	showAilmentDescription(2);
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

closeObject.addEventListener('click', function() {
	closeOOIDescription(); 
});

characterPin.addEventListener('click', function() {
	objectEffect.classList.add('active');
	for(var k = 0 ; k < objectEffect.children.length ; k++){
		objectEffect.children[k].classList.remove('hide');
	}
});

noteDismissButton.addEventListener('click', function() {
	closeTagNotes(taggedOOI);	
});
controlNotes.addEventListener('click', function() {
	showAilmentNotes(); //showTagNotes(taggedOOI);
});
dismissAilmentButton.addEventListener('click', function() {
	closeAilmentNotes(); //showTagNotes(taggedOOI);
});
rightNav.addEventListener('click', function() {
navigateApartmentRooms('right');
});
leftNav.addEventListener('click', function() {
navigateApartmentRooms('left');
});

applyButton.addEventListener('click', function() {
	gameMode.classList.remove('hide');
	settingsView.classList.add('hide');
	settingOn = false;
});
controlSetting.addEventListener('click', function() {
	showSettings();
});
gameMusicControl.addEventListener('click', function() {
	toggleGameMusic();
});

controlInfo.addEventListener('click', function() {
	//showRelevantInfo(2);
	showInfo();
});
infoClose.addEventListener('click', function() {
	closeInfo();
});

controlMap.addEventListener('click', function() {
	toggleMap();
});
gameMap.addEventListener('click', function() {
	// hideMap();
});
gameOverlay.addEventListener('click', function() {
	if(!settingOn){
		if (hasClass(conversationLayer, 'active')) {
			/* if(dialogueCount < ) */
			runConversation(conversationScriptArray);
		}else if(hasClass(gameOverlay, 'apartment-controls')){
			
		}
	}


	// hideMap();
});
nextButton.addEventListener('click', function() {
	// hideMap();


		navigateInstructions();

});

function navigateApartmentRooms(info){




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
console.log(currentSubSceneIndex)
    navigateScenes(3,currentSubSceneIndex);

showOOIsControl();


}

function showAilmentDescription(i){
	
	for(var k=0 ; k < ailmentArray.length ;  k++){
		ailmentNotes.classList.remove(ailmentArray[k].class);	
	}
	
	ailmentNotes.classList.add(ailmentArray[i].class);
	ailmentTitle.innerHTML = ailmentArray[i].ailment;
	ailmentContent.innerHTML = ailmentArray[i].description ;
}

function showAilmentNotes(){
	ailmentNotes.classList.remove('hide');
}
function closeAilmentNotes(){
	ailmentNotes.classList.add('hide');
}

function showTagNotes(info){
	tagNotes.classList.remove("hide");
}

function closeTagNotes(info){
	tagNotes.classList.add("hide");
}

function selectCharacter(info) {

	guideHeader.innerText = 'Spinning...';
	
	var randChar = info[Math.floor(Math.random() * info.length)];

	playerChar = randChar;
	var charName = randChar.name;
	//machineBackground.innerText = charName;
	selectPlayerInAllScenes();
	preLoadPlayerImages();
	
	SpinTheMachine(playerChar);
	

	// closeCharWiget();
	console.log(charName);
}
function initApartmentControls(){
	leftNav.classList.remove('hide');
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
	
	userInterface.classList.add(playerChar.class);
	OOILayer.classList.add(playerChar.class);
	
	userInterface.classList.add(currentApartment.class);
	OOILayer.classList.add(currentApartment.class);
	OOILayer.classList.remove("hide");
	rightNav.classList.remove('hide');	
	
	showOOIsControl();
	
}

function showOOIsControl(){

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
function showOOIDescription(info,i){
	conversationLayer.classList.add('hide');
	conversationLayer.classList.remove('tag-response');
	selectOOI(i);
	objectDescription.classList.remove('hide');
	for(var j=0 ; j < OOIContentArray[currentApartment.index].apartmentOOIs.length ; j++){
		if(OOIContentArray[currentApartment.index].apartmentOOIs[j].OOIClass == info){
			currentOOI = OOIContentArray[currentApartment.index].apartmentOOIs[j];
			objectDescriptionContent.innerHTML = OOIContentArray[currentApartment.index].apartmentOOIs[j].OOIDescription ;
			objectTitle.innerHTML = OOIContentArray[currentApartment.index].apartmentOOIs[j].OOIName;
			objectEffectContent.innerHTML = "How might this feature affect a person with " + playerCharacterArray[playerChar.index].impairment + "? Is this a positive, negative, or neutral aspect of the apartment for " +playerCharacterArray[playerChar.index].name +"?"         //OOIContentArray[currentApartment.index].apartmentOOIs[j].characterImpact[playerChar.index]
		}
	}
	showDiamond();
}
function showDiamond(){
	objectEffect.classList.remove('hide');
	characterPin.classList.remove('hide');
}
function closeOOIDescription(){
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
	spinButton.innerText = 'meet ' + info.name + ' >>';
	charName[0].innerText = info.name;
	charGender[0].innerText = info.gender;
	//charEthnicity[0].innerText = info.ethnicity;
	charAge[0].innerText = info.age + 'Years';

	spinnerCharInfo[0].classList.remove('vanish');
	setTimeout(function(){

    spinButton.classList.remove('hide');

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

	if (hasClass(gameMap, 'hide')) {
		gameMap.classList.remove('hide');
	} else {
		gameMap.classList.add('hide');
	}

};
function revealMap(){
	controlMap.classList.remove('hide');
	toggleMap();
}
function showApartmentInfo(info, i) {
	for ( var j = 0; j < 3; j++) {
		apartmentIcon[j].classList.remove('clicked');
	}
	currentApartment = info[i]
	apartmentIcon[i].classList.add('clicked');
	apartmentIcon[i].classList.remove('point');
	apartmentTitle.innerText = info[i].title;
	rentDetails.innerText = "Rent : " + info[i].rent;
	//ratingDetails.innerText = "Locality rating : " + info[i].rating;
	distanceDetails.innerText = "Distance from senior center : "
			+ info[i].distance;
	ammenitiesDetails.innerText = "Close By : " + info[i].ammenities;
	apartmentInfo.classList.remove('hide');
	var apartmentClasses = ['pinegrove','sunnyvale','lakeview','hide'] //'hide' added in array for simplicity
	
	for ( var j = 0; j < apartmentClasses.length ; j++) {
		apartmentInfo.classList.remove(apartmentClasses[j]);
	}
	apartmentInfo.classList.add(info[i].class)
}
function tagOOI(info,i){
	for(var k = 0; k < objectEffectTag.length ; k++){
		objectEffectTag[k].classList.remove('tagged');
	}
	objectEffectTag[i].classList.add('tagged');
	NPCTagResponse();
	var tags = ['plus','neutral','minus'];
	currentTag = tags[i];
	var tagOOIClass = currentOOI.OOIClass ;
	if(tagOOIClass == "frontdoor"){
		playerOOITags[currentApartment.index].taggedOOIs.frontdoor = currentTag ;
	}else if(tagOOIClass == "steps"){
		playerOOITags[currentApartment.index].taggedOOIs.steps = currentTag ;
	}else if(tagOOIClass == "windows"){
		playerOOITags[currentApartment.index].taggedOOIs.windows = currentTag ;
	}else if(tagOOIClass == "lighting"){
		playerOOITags[currentApartment.index].taggedOOIs.lighting = currentTag ;
	}else if(tagOOIClass == "flooring"){
		playerOOITags[currentApartment.index].taggedOOIs.flooring = currentTag ;
	}else if(tagOOIClass == "bathtub"){
		playerOOITags[currentApartment.index].taggedOOIs.bathtub = currentTag ;
	}
	
	
/*	
	var exploredItems = 
	
	noOfObjectsExplored.innerHTML =  + "/6";*/
	
	if(info[currentApartment.index].apartmentOOIs[currentOOIIndex].characterImpact[playerChar.index].OOIImpact.indexOf(currentTag) > -1){
	//	gameScore = gameScore + tagScore ;
		
	}
}
function selectOOI(i){
	currentOOIIndex = i ;
	
}
function NPCTagResponse(){

	objectEffect.classList.remove('active');
	for(var k = 0 ; k < objectEffect.children.length ; k++){
		objectEffect.children[k].classList.add('hide');
	}

	
	
	conversationLayer.classList.remove('hide');
	conversationLayer.classList.add('tag-response');
	speakerName.innerHTML = OOIContentArray[currentApartment.index].apartmentOOIs[currentOOIIndex].characterImpact[playerChar.index].NPCName
	conversationtext.innerHTML = OOIContentArray[currentApartment.index].apartmentOOIs[currentOOIIndex].characterImpact[playerChar.index].NPCResponse;
}


function showSettings() {
	settingOn = true;
	gameMode.classList.add('hide');
	settingsView.classList.remove('hide');

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
		guideHeader.innerText = 'Choose a member';
		characterSelectionWidget.classList.remove('hide');
	}
}
function showInstructions(i) {
	instructionContent.innerHTML = instructionsArray[i].instructionContent;
	instructionTitle.innerText = instructionsArray[i].instructionTitle;
}
function meetCharacter() {
	closeCharWiget();
	console.log('meet');

	instructionHUD.classList.add('hide');
	guideHeader.innerText = '';
	navigateScenes(1,0);

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
	setTimeout(function() {
		loadingTips.innerText = loadingTipsArray[1];
		setTimeout(function() {
			loadingTips.innerText = loadingTipsArray[2];

		}, 7000);
	}, 7000);
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
				conversationtext.innerHTML = info[charNum].conversation[dialogueCount].dialogue + '<div class="tap-to-contn">TAP TO CONTINUE</div>';
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



		for ( var j = 0; j < sceneWrapper.children.length - 1; j++) {
			speakerChar = sceneWrapper.getElementsByClassName('player')[j];
			speakerChar.classList.add('talk');
		}
		setTimeout(function(){
			for ( var j = 0; j < sceneWrapper.children.length - 1; j++) {
				speakerChar = sceneWrapper.getElementsByClassName('player')[j];
				speakerChar.classList.remove('talk');
			}
		
			
		},4500)	;



}

function preLoadNPCImages(){
	
	var NPCChar;
	for ( var j = 0; j < sceneWrapper.getElementsByClassName('character').length; j++) {
		NPCChar = sceneWrapper.getElementsByClassName('character')[j];
		NPCChar.classList.add('talk');
	}
setTimeout(function(){
	for ( var j = 0; j < sceneWrapper.getElementsByClassName('character').length; j++) {
		NPCChar = sceneWrapper.getElementsByClassName('character')[j];
		NPCChar.classList.remove('talk');
	}
	
},5000)

}

function tourApartment() {
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

function navigateScenes(sceneNo,subSceneNo, callBack) {
	gameOverlay.classList.remove('tint');
	gameOverlay.classList.add('darken');
	controlMode.classList.add('hide');
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
			gameOverlay.classList.remove('darken');
			controlMode.classList.remove('hide');
			//callBack;
		}, 3000);

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
