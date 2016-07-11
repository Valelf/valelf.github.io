
var charAnn, charSarah, buttonPlay, buttonPrev, buttonNext, appContainer;

var controlInfo, playAgain = false , controlSetting, OOILayer ,controlMap, loadingTips, playerCharacterArray, instructionsArray, loadingTipsArray, progressBar, controlBars, progressLine, apartmentTitle, controlLayer, controlMap, gameMap, infoText, infoApartmentArray, infoScriptObject, OOIContentArray,  conversationScriptArray;

var rentDetails, currentApartment , gameMode , settingOn = false , controlMode ,soundControl ,gameMusicControl , spinned = false, ringOne ,playerChar, ratingDetails, distanceDetails, ammenitiesDetails, tourButton, instructionHUD, instructionTitle, instructionContent, nextButton, spinButton, characterSelectionWidget, widgetTitle, guideHeader, slotMachine, spinButton, charProfile, charAvtar, charProfileName, charProfileSummary, charDetailsList, charDetailsOne, charDetailsTwo, conversationLayer, conversationBubble, speakerName, conversationtext, chairLouiseZero, currentScene, currentSubScene , characterIDArray, conversationScriptArray, contextCount = 0, dialogueCount = 0, sceneWrapper, gameOverlay, sceneTransition = false, machineBackground, apartmentIcon, instructionCount = 0, apartmentInfo;

infoScriptArray = [
		{
			'infoTitle' : 'info-one',
			'informationText' : 'Click in the info text. Click on something else. I dont care as long as you do something over here.Have a nice Day.',
			'timing' : 4
		},
		{
			'infoTitle' : 'info-one',
			'informationText' : 'Alright Alright Alright! It works apparently!',
			'timing' : 4
		}

];

conversationScriptArray = [
		{
			"character" : "Gladys",
			"conversation" : [
					{
						"speaker" : "Louise",
						"dialogue" : "Hi, Gladys. Its great to see you. How are you doing? ",
						"sceneName" : "scene-zero",
						"sceneNo" : 0,
						"subSceneNo":0,
						"index" : 0,
						"charID" : 1,
						"class" : "louise"
					},
					{
						"speaker" : "Gladys",
						"dialogue" : "I am looking for a place to live, and need some advice. You mentioned you have volunteers who might be able to assist. ",
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
						"dialogue" : " Hi Gladys, I'm Sarah. I understand you'd like help in finding an apartment. How are you today?",
						"sceneName" : "scene-one",
						"sceneNo" : 1,
						"subSceneNo":0,
						"index" : 3,
						"charID" : 0,
						"class" : "sarah"
					},
					{
						"speaker" : "Gladys",
						"dialogue" : "Wonderful. Thank you for helping me. I'd like to find a place that is close to the senior center and the library. I love reading but my eyes are not working as well these days. My doctor tells me I have macular degeneration.",
						"sceneName" : "scene-one",
						"sceneNo" : 1,
						"subSceneNo":0,
						"index" : 4,
						"charID" : 2,
						"class" : "gladys"
					},
					{
						"speaker" : "Sarah",
						"dialogue" : "I am happy to help. Louise suggested these three places: the Pine Grove Apartments, Lakeview Courts, and the Sunnyvale Apartments. Let's meet tomorrow and take a look.",
						"sceneName" : "scene-one",
						"sceneNo" : 1,
						"subSceneNo":0,
						"index" : 5,
						"charID" : 0,
						"class" : "sarah"
					},
					{
						"speaker" : "Gladys",
						"dialogue" : "Let me put on my glasses. I can't read the papers without them, and even then, the words on the page can be difficult to make out sometimes. ",
						"sceneName" : "scene-one",
						"sceneNo" : 1,
						"subSceneNo":0,
						"index" : 6,
						"charID" : 2,
						"class" : "gladys"
					}

			]

		},
		{
			"character" : "Mary",
			"conversation" : [
					{
						"speaker" : "Louise",
						"dialogue" : "Hi, Mary. Its great to see you. How are you doing? ",
						"sceneName" : "scene-zero",
						"sceneNo" : 0,
						"subSceneNo":0,
						"index" : 0,
						"charID" : 1,
						"class" : "louise"
					},
					{
						"speaker" : "Mary",
						"dialogue" : "I am looking for a place to live, and need some advice. You mentioned you have volunteers who might be able to assist. ",
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
						"dialogue" : "Hi Mary, I'm Sarah. I understand you'd like help in finding an apartment. How are you today?",
						"sceneName" : "scene-one",
						"sceneNo" : 1,
						"subSceneNo":0,
						"index" : 3,
						"charID" : 0,
						"class" : "sarah"
					},
					{
						"speaker" : "Mary",
						"dialogue" : "I am doing fine. My balance is off these days so I use my walker.  ",
						"sceneName" : "scene-one",
						"sceneNo" : 1,
						"subSceneNo":0,
						"index" : 4,
						"charID" : 3,
						"class" : "mary"
					},
					{
						"speaker" : "Sarah",
						"dialogue" : "I'm glad to be of assistance. Louise suggested these three places: the Pine Grove Apartments, Lakeview Courts, and the Sunnyvale Apartments. Let's meet tomorrow and take a look.",
						"sceneName" : "scene-one",
						"sceneNo" : 1,
						"subSceneNo":0,
						"index" : 5,
						"charID" : 0,
						"class" : "sarah"
					},
					{
						"speaker" : "Mary",
						"dialogue" : "Are these places all very close? I can't walk around for too long. I'm recovering from hip surgery so I need a place that won't require a lot of walking. ",
						"sceneName" : "scene-one",
						"sceneNo" : 1,
						"subSceneNo":0,
						"index" : 6,
						"charID" : 3,
						"class" : "mary"
					},
					{
						"speaker" : "Sarah",
						"dialogue" : "Yes, that sounds good. We'll take plenty of breaks if you need them.",
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
						"dialogue" : "Hi, Raymond. Its great to see you. How are you doing? ",
						"sceneName" : "scene-zero",
						"sceneNo" : 0,
						"subSceneNo":0,
						"index" : 0,
						"charID" : 1,
						"class" : "louise"
					},
					{
						"speaker" : "Raymond",
						"dialogue" : "I am looking for a place to live, and need some advice. You mentioned you have volunteers who might be able to assist. ",
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
						"dialogue" : "Hi Raymond, I'm Sarah. I understand you'd like help in finding an apartment. How are you today?",
						"sceneName" : "scene-one",
						"sceneNo" : 1,
						"subSceneNo":0,
						"index" : 3,
						"charID" : 0,
						"class" : "sarah"
					},
					{
						"speaker" : "Raymond",
						"dialogue" : "Hello...I'm sorry. Did you say your name was Mary?",
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
						"dialogue" : "Oh, Sarah! I'm sorry. I thought you said Mary. I have a little trouble hearing these days.",
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
						"dialogue" : "Sure, I am happy to help. Louise suggested these three places: the Pine Grove Apartments, Lakeview Courts, and the Sunnyvale Apartments. Let's meet tomorrow and take a look.",
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
		"OOI" : "Windows",
		"OOIName" : "Windows",
		"OOIDescription" : "Older, painted, heavy wood, and small windows facing back of neighboring building",
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
					"NPCClass":"sarah,"
				},
				{
					"character" : "Mary",
					"charID" : 3,
					"charClass" : "mary",
					"OOIImpact" : "minus",
					"NPCName":"Sarah",
					"NPCID":0,
					"NPCClass":"sarah,"
				},
				{
					"character" : "Raymond",
					"charID" : 4,
					"charClass" : "raymond",
					"OOIImpact" : "neutral",
					"NPCName":"Sarah",
					"NPCID":0,
					"NPCClass":"sarah,"
				}

		]

	},
	{
		"OOI" : "Lights",
		"OOIName" : "Lights",
		"OOIDescription" : "No overhead lighting and switches in most rooms; table lamps with cords require.",
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
					"NPCClass":"sarah,"
				},
				{
					"character" : "Mary",
					"charID" : 3,
					"charClass" : "mary",
					"OOIImpact" : "minus",
					"NPCName":"Sarah",
					"NPCID":0,
					"NPCClass":"sarah,"
				},
				{
					"character" : "Raymond",
					"charID" : 4,
					"charClass" : "raymond",
					"OOIImpact" : "neutral",
					"NPCName":"Sarah",
					"NPCID":0,
					"NPCClass":"sarah,"
				}

		]

	},
	{
		"OOI" : "Flooring",
		"OOIName" : "Flooring",
		"OOIDescription" : "Thick carpet",
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
					"NPCClass":"sarah,"
				},
				{
					"character" : "Mary",
					"charID" : 3,
					"charClass" : "mary",
					"OOIImpact" : "neutral minus",
					"NPCName":"Sarah",
					"NPCID":0,
					"NPCClass":"sarah,"
				},
				{
					"character" : "Raymond",
					"charID" : 4,
					"charClass" : "raymond",
					"OOIImpact" : "plus",
					"NPCName":"Sarah",
					"NPCID":0,
					"NPCClass":"sarah,"
				}

		]

	},
	{
		"OOI" : "Steps",
		"OOIName" : "Steps",
		"OOIDescription" : "Sunken living room",
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
					"NPCClass":"sarah,"
				},
				{
					"character" : "Mary",
					"charID" : 3,
					"charClass" : "mary",
					"OOIImpact" : "minus",
					"NPCName":"Sarah",
					"NPCID":0,
					"NPCClass":"sarah,"
				},
				{
					"character" : "Raymond",
					"charID" : 4,
					"charClass" : "raymond",
					"OOIImpact" : "neutral minus",
					"NPCName":"Sarah",
					"NPCID":0,
					"NPCClass":"sarah,"
				}

		]

	},
	{
		"OOI" : "Bathtub",
		"OOIName" : "Bathtub",
		"OOIDescription" : "Standard tub",
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
					"NPCClass":"sarah,"
				},
				{
					"character" : "Mary",
					"charID" : 3,
					"charClass" : "mary",
					"OOIImpact" : "minus",
					"NPCName":"Sarah",
					"NPCID":0,
					"NPCClass":"sarah,"
				},
				{
					"character" : "Raymond",
					"charID" : 4,
					"charClass" : "raymond",
					"OOIImpact" : "neutral",
					"NPCName":"Sarah",
					"NPCID":0,
					"NPCClass":"sarah,"
				}

		]

	},
	{
		"OOI" : "Front Door",
		"OOIName" : "Front Door",
		"OOIDescription" : "Entrance from a garden with video intercom; smoke and carbon monoxide detectors with strobe-vibrator features",
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
					"NPCClass":"sarah,"
				},
				{
					"character" : "Mary",
					"charID" : 3,
					"charClass" : "mary",
					"OOIImpact" : "plus",
					"NPCName":"Sarah",
					"NPCID":0,
					"NPCClass":"sarah,"
				},
				{
					"character" : "Raymond",
					"charID" : 4,
					"charClass" : "raymond",
					"OOIImpact" : "plus",
					"NPCName":"Sarah",
					"NPCID":0,
					"NPCClass":"sarah,"
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
     		"OOI" : "Windows",
     		"OOIName" : "Windows",
     		"OOIDescription" : "Older, painted, heavy wood, and small windows facing back of neighboring building",
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
     					"NPCClass":"sarah,"
     				},
     				{
     					"character" : "Mary",
     					"charID" : 3,
     					"charClass" : "mary",
     					"OOIImpact" : "minus",
     					"NPCName":"Sarah",
     					"NPCID":0,
     					"NPCClass":"sarah,"
     				},
     				{
     					"character" : "Raymond",
     					"charID" : 4,
     					"charClass" : "raymond",
     					"OOIImpact" : "neutral",
     					"NPCName":"Sarah",
     					"NPCID":0,
     					"NPCClass":"sarah,"
     				}

     		]

     	},
     	{
     		"OOI" : "Lights",
     		"OOIName" : "Lights",
     		"OOIDescription" : "No overhead lighting and switches in most rooms; table lamps with cords require.",
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
     					"NPCClass":"sarah,"
     				},
     				{
     					"character" : "Mary",
     					"charID" : 3,
     					"charClass" : "mary",
     					"OOIImpact" : "minus",
     					"NPCName":"Sarah",
     					"NPCID":0,
     					"NPCClass":"sarah,"
     				},
     				{
     					"character" : "Raymond",
     					"charID" : 4,
     					"charClass" : "raymond",
     					"OOIImpact" : "neutral",
     					"NPCName":"Sarah",
     					"NPCID":0,
     					"NPCClass":"sarah,"
     				}

     		]

     	},
     	{
     		"OOI" : "Flooring",
     		"OOIName" : "Flooring",
     		"OOIDescription" : "Thick carpet",
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
     					"NPCClass":"sarah,"
     				},
     				{
     					"character" : "Mary",
     					"charID" : 3,
     					"charClass" : "mary",
     					"OOIImpact" : "neutral minus",
     					"NPCName":"Sarah",
     					"NPCID":0,
     					"NPCClass":"sarah,"
     				},
     				{
     					"character" : "Raymond",
     					"charID" : 4,
     					"charClass" : "raymond",
     					"OOIImpact" : "plus",
     					"NPCName":"Sarah",
     					"NPCID":0,
     					"NPCClass":"sarah,"
     				}

     		]

     	},
     	{
     		"OOI" : "Steps",
     		"OOIName" : "Steps",
     		"OOIDescription" : "Sunken living room",
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
     					"NPCClass":"sarah,"
     				},
     				{
     					"character" : "Mary",
     					"charID" : 3,
     					"charClass" : "mary",
     					"OOIImpact" : "minus",
     					"NPCName":"Sarah",
     					"NPCID":0,
     					"NPCClass":"sarah,"
     				},
     				{
     					"character" : "Raymond",
     					"charID" : 4,
     					"charClass" : "raymond",
     					"OOIImpact" : "neutral minus",
     					"NPCName":"Sarah",
     					"NPCID":0,
     					"NPCClass":"sarah,"
     				}

     		]

     	},
     	{
     		"OOI" : "Bathtub",
     		"OOIName" : "Bathtub",
     		"OOIDescription" : "Standard tub",
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
     					"NPCClass":"sarah,"
     				},
     				{
     					"character" : "Mary",
     					"charID" : 3,
     					"charClass" : "mary",
     					"OOIImpact" : "minus",
     					"NPCName":"Sarah",
     					"NPCID":0,
     					"NPCClass":"sarah,"
     				},
     				{
     					"character" : "Raymond",
     					"charID" : 4,
     					"charClass" : "raymond",
     					"OOIImpact" : "neutral",
     					"NPCName":"Sarah",
     					"NPCID":0,
     					"NPCClass":"sarah,"
     				}

     		]

     	},
     	{
     		"OOI" : "Front Door",
     		"OOIName" : "Front Door",
     		"OOIDescription" : "Entrance from a garden with video intercom; smoke and carbon monoxide detectors with strobe-vibrator features",
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
     					"NPCClass":"sarah,"
     				},
     				{
     					"character" : "Mary",
     					"charID" : 3,
     					"charClass" : "mary",
     					"OOIImpact" : "plus",
     					"NPCName":"Sarah",
     					"NPCID":0,
     					"NPCClass":"sarah,"
     				},
     				{
     					"character" : "Raymond",
     					"charID" : 4,
     					"charClass" : "raymond",
     					"OOIImpact" : "plus",
     					"NPCName":"Sarah",
     					"NPCID":0,
     					"NPCClass":"sarah,"
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
             		"OOI" : "Windows",
             		"OOIName" : "Windows",
             		"OOIDescription" : "Older, painted, heavy wood, and small windows facing back of neighboring building",
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
             					"NPCClass":"sarah,"
             				},
             				{
             					"character" : "Mary",
             					"charID" : 3,
             					"charClass" : "mary",
             					"OOIImpact" : "minus",
             					"NPCName":"Sarah",
             					"NPCID":0,
             					"NPCClass":"sarah,"
             				},
             				{
             					"character" : "Raymond",
             					"charID" : 4,
             					"charClass" : "raymond",
             					"OOIImpact" : "neutral",
             					"NPCName":"Sarah",
             					"NPCID":0,
             					"NPCClass":"sarah,"
             				}

             		]

             	},
             	{
             		"OOI" : "Lights",
             		"OOIName" : "Lights",
             		"OOIDescription" : "No overhead lighting and switches in most rooms; table lamps with cords require.",
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
             					"NPCClass":"sarah,"
             				},
             				{
             					"character" : "Mary",
             					"charID" : 3,
             					"charClass" : "mary",
             					"OOIImpact" : "minus",
             					"NPCName":"Sarah",
             					"NPCID":0,
             					"NPCClass":"sarah,"
             				},
             				{
             					"character" : "Raymond",
             					"charID" : 4,
             					"charClass" : "raymond",
             					"OOIImpact" : "neutral",
             					"NPCName":"Sarah",
             					"NPCID":0,
             					"NPCClass":"sarah,"
             				}

             		]

             	},
             	{
             		"OOI" : "Flooring",
             		"OOIName" : "Flooring",
             		"OOIDescription" : "Thick carpet",
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
             					"NPCClass":"sarah,"
             				},
             				{
             					"character" : "Mary",
             					"charID" : 3,
             					"charClass" : "mary",
             					"OOIImpact" : "neutral minus",
             					"NPCName":"Sarah",
             					"NPCID":0,
             					"NPCClass":"sarah,"
             				},
             				{
             					"character" : "Raymond",
             					"charID" : 4,
             					"charClass" : "raymond",
             					"OOIImpact" : "plus",
             					"NPCName":"Sarah",
             					"NPCID":0,
             					"NPCClass":"sarah,"
             				}

             		]

             	},
             	{
             		"OOI" : "Steps",
             		"OOIName" : "Steps",
             		"OOIDescription" : "Sunken living room",
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
             					"NPCClass":"sarah,"
             				},
             				{
             					"character" : "Mary",
             					"charID" : 3,
             					"charClass" : "mary",
             					"OOIImpact" : "minus",
             					"NPCName":"Sarah",
             					"NPCID":0,
             					"NPCClass":"sarah,"
             				},
             				{
             					"character" : "Raymond",
             					"charID" : 4,
             					"charClass" : "raymond",
             					"OOIImpact" : "neutral minus",
             					"NPCName":"Sarah",
             					"NPCID":0,
             					"NPCClass":"sarah,"
             				}

             		]

             	},
             	{
             		"OOI" : "Bathtub",
             		"OOIName" : "Bathtub",
             		"OOIDescription" : "Standard tub",
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
             					"NPCClass":"sarah,"
             				},
             				{
             					"character" : "Mary",
             					"charID" : 3,
             					"charClass" : "mary",
             					"OOIImpact" : "minus",
             					"NPCName":"Sarah",
             					"NPCID":0,
             					"NPCClass":"sarah,"
             				},
             				{
             					"character" : "Raymond",
             					"charID" : 4,
             					"charClass" : "raymond",
             					"OOIImpact" : "neutral",
             					"NPCName":"Sarah",
             					"NPCID":0,
             					"NPCClass":"sarah,"
             				}

             		]

             	},
             	{
             		"OOI" : "Front Door",
             		"OOIName" : "Front Door",
             		"OOIDescription" : "Entrance from a garden with video intercom; smoke and carbon monoxide detectors with strobe-vibrator features",
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
             					"NPCClass":"sarah,"
             				},
             				{
             					"character" : "Mary",
             					"charID" : 3,
             					"charClass" : "mary",
             					"OOIImpact" : "plus",
             					"NPCName":"Sarah",
             					"NPCID":0,
             					"NPCClass":"sarah,"
             				},
             				{
             					"character" : "Raymond",
             					"charID" : 4,
             					"charClass" : "raymond",
             					"OOIImpact" : "plus",
             					"NPCName":"Sarah",
             					"NPCID":0,
             					"NPCClass":"sarah,"
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

loadingTipsArray = [
		"Help the seniors at Main Street Center choose the apartment that suits them best.",
		"make sure you take time to understand the challenges they face.",
		"Don't forget to investigate the glowing objects in the apartment before making your recommendation." ];
instructionsArray = [
		{
			"instructionTitle" : "Welcome Player One!",
			"instructionContent" : "<p>Let's get started. In this module, you will: </p><p>	Apply knowledge of physical changes in late adulthood to real world scenarios</p><p>	Analyze dangers, challenges, and positive features of the environment </p><p>	Determine which apartment is best for a senior member after assessing the person's physical condition and the various environments</p>",
		},
		{
			"instructionTitle" : "Overview",
			"instructionContent" : "<p>As we get older, we start to notice some physical changes such as wrinkled skin and thinning hair. But there are also functional changes that occur in the body that can impact daily living that you may not be as familiar with. </p><p>For example, people who are older generally need more light in order to see as well as younger people, sometimes have difficulty with depth perception, and are more sensitive to glare. Activities such as reading and sewing can become difficult.</p>",
		},
		{
			"instructionTitle" : "Continued...",
			"instructionContent" : "<p>Hearing impairments can also occur. Although hearing aids are an option, they sometimes magnify background noise as well as speech.  </p><p>People also lose body strength, flexibility and endurance with age, affecting daily activities such as doing chores around the home, and possibly contributing to falls and accidents. </p>",

		},
		{
			"instructionTitle" : "Continued...",
			"instructionContent" : "<p>Many older adults want to remain independent; however, it is important they find a home that accommodates their physical needs.  </p><p>In this scenario, you will be playing an older person who's a member at a senior center and is looking for assistance in an apartment search and making a recommendation based on the member's physical needs.</p>",
		}

];

infoApartmentArray = [ {
	'title' : 'Pine Grove Apartments',
	'rent' : '$ 500 /month ',
	'rating' : '* * * *',
	'distance' : " 1 mile",
	'ammenities' : "Swimming Pool , Grocery Store",
	"class" : 'pinegrove'

}, {
	'title' : 'Lakeview Courts',
	'rent' : '$ 300 /month ',
	'rating' : '* * * *',
	'distance' : " 0.5 mile",
	'ammenities' : "Library , Grocery Store",
	"class" : 'lakeview'
}, {
	'title' : 'Sunnyvale Apartments',
	'rent' : '$ 600 /month ',
	'rating' : '* * * *',
	'distance' : " 1.5 mile",
	'ammenities' : "City park , Grocery Store",
	"class" : 'sunnyvale'
}

];

characterIDArray = [ 'sarah', 'louise', 'gladys', 'mary', 'raymond' ];

playerCharacterArray = [ {
	'name' : 'Gladys',
	'gender' : 'Female',
	'age' : ' 73 ',
	'race' : 'African-American ',
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
	'race' : 'Caucasian  ',
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
	'race' : 'Hispanic',
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
gameMap = document.getElementById('gameMap');

controlMap = document.getElementById('controlMap');
loadingTips = document.getElementById('loadingTips');
charAnn = document.getElementById('characterAnn');
gameMode = document.getElementById('gameMode');
controlMode = document.getElementById('controlMode');
charSarah = document.getElementById('characterSarah');
chairLouiseZero = document.getElementById('chairLouiseZero');

buttonPrev = document.getElementById('prevButton');
sceneWrapper = document.getElementById('sceneWrapper');
OOILayer = document.getElementById('OOILayer'); 
buttonPlay = document.getElementById('playButton');
guideHeader = document.getElementById('guideHeader');
buttonNext = document.getElementById('nextButton');
gameMusic = document.getElementById('gameMusic');
gameMusicControl = document.getElementById('gameMusicControl');
soundControl = document.getElementById('soundControl');
apartmentTitle = document.getElementById('apartmentTitle');
rentDetails = document.getElementById('rentDetails');
ratingDetails = document.getElementById('ratingDetails');
charProfile = document.getElementById('charProfile');
charAvtar = document.getElementById('charAvtar');
charProfileName = document.getElementById('charProfileName');
charProfileSummary = document.getElementById('charProfileSummary');
charDetailsList = document.getElementById('charDetailsList');
charDetailsOne = document.getElementById('charDetailsOne');
charDetailsTwo = document.getElementById('charDetailsTwo');
distanceDetails = document.getElementById('distanceDetails');
ammenitiesDetails = document.getElementById('ammenitiesDetails');
tourButton = document.getElementById('tourButton');
apartmentInfo = document.getElementById('apartmentInfo');
instructionHUD = document.getElementById('instructionHUD');
instructionTitle = document.getElementById('instructionTitle');
instructionContent = document.getElementById('instructionContent');
nextButton = document.getElementById('nextButton');
spinButton = document.getElementById('spinButton');
characterSelectionWidget = document.getElementById('characterSelectionWidget');
/* widgetTitle = document.getElementById('widgetTitle') ; */
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


apartmentIcon = document.getElementsByClassName('apartment');
controlBars = document.getElementsByClassName('controlBars');

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
	setTimeout(initGame, 25000);
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
	
	if(!spinned){
		spinned = true;
		spinButton.classList.remove('point');
		selectCharacter(playerCharacterArray);
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
	showRelevantInfo();
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
			runConversation();
		}else if(hasClass(gameOverlay, 'apartment-controls')){
			
		}
	}


	// hideMap();
});
nextButton.addEventListener('click', function() {
	// hideMap();

	if (contextCount == 1) {
		meetCharacter();
	} else {
		navigateInstructions();
	}

});

function selectCharacter(info) {

	guideHeader.innerText = 'Spinning...';
	
	
	var randChar = info[Math.floor(Math.random() * info.length)];

	playerChar = randChar;
	var charName = randChar.name;
	machineBackground.innerText = charName;
	selectPlayerInAllScenes();
	preLoadPlayerImages();
	
	SpinTheMachine(playerChar)
	
	setTimeout(closeCharWiget, 5000);
	// closeCharWiget()
	console.log(charName);
}
function initApartmentControls(){
	OOILayer.classList.add("active");
	OOILayer.classList.remove("hide");
}
function selectPlayerInAllScenes() {
	var speakerChar;
	for ( var j = 0; j < sceneWrapper.children.length - 1; j++) {
		speakerChar = sceneWrapper.getElementsByClassName('player')[j];
		speakerChar.classList.add(playerChar.class);
	}

}
function SpinTheMachine(info){
	for ( var j = 0; j < characterIDArray.length ; j++) {
		ringOne.classList.remove(characterIDArray[j]);
	}
	ringOne.classList.add(info.class);
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

	showCharProfile(playerChar);
}
function showCharProfile(info) {
	contextCount = 1;
	instructionHUD.classList.remove('hide');
	charProfile.classList.remove('hide');
	instructionTitle.classList.add('hide');
	instructionContent.classList.add('hide');

	guideHeader.innerText = 'Great. You got ' + info.name + '!';
	nextButton.innerText = 'meet ' + info.name + ' >>';
	charProfileName.innerText = info.name;
	charProfileSummary.innerText = info.gender + ',' + info.age;
	charDetailsOne.innerText = info.race + ' ' + info.identity;
	charDetailsTwo.innerText = info.age + 'year old ' + info.identity;
	charAvtar.style.backgroundImage = 'url(' + info.avtar + ')';
	charAvtar.style.backgroundColor = '#bfa590'

}
function showRelevantInfo() {
	infoText.innerText = infoScriptArray[1].informationText;

	if (hasClass(infoText, 'activate')) {
		infoText.classList.remove('activate');
	} else {
		infoText.classList.add('activate');
	}

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
	ratingDetails.innerText = "Locality rating : " + info[i].rating;
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
	console.log('meet');

	instructionHUD.classList.add('hide');
	guideHeader.innerText = '';
	navigateScenes(1,0, runConversation);

	// runConversation(conversationScriptArray);
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
	}

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
function runConversation() {
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
	if (dialogueCount < conversationScriptArray[charNum].conversation.length) {
		if (hasClass(
				currentScene,
				conversationScriptArray[charNum].conversation[dialogueCount].sceneName)) {

			if (!conversationScriptArray[charNum].conversation[dialogueCount].actionOnly) {

				enableConversation();

				for ( var j = 0; j < charPositionArray.length; j++) {
					conversationBubble.classList.remove(charPositionArray[j]);
				}

				conversationBubble.classList
						.add(conversationScriptArray[charNum].conversation[dialogueCount].class);
				conversationBubble.classList
						.add(conversationScriptArray[charNum].conversation[dialogueCount].sceneName);

				speakerName.innerText = conversationScriptArray[charNum].conversation[dialogueCount].speaker;
				conversationtext.innerText = conversationScriptArray[charNum].conversation[dialogueCount].dialogue;
				charAnimation(conversationScriptArray[charNum].conversation[dialogueCount]);
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
			navigateScenes(
					conversationScriptArray[charNum].conversation[dialogueCount].sceneNo + 1,0,
					runConversation)

			// debugger;
		}

	} else {
		conversationLayer.classList.add('hide');
		conversationLayer.classList.remove('active');
		revealMap(); //only here to open map.
	}

}
function welcomePlayer() {
    gameOverlay.classList.add('tint');
    controlSetting.classList.remove('hide');
	instructionHUD.classList.remove('hide');
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
	for ( var i = 0; i < 3; i++) {
		apartmentIcon[i].classList.remove('clicked');
	}
	apartmentInfo.classList.add('hide');
	toggleMap();
	
	//navigateScenes(currentApartment);
	resetgame();
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
			callBack();
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
