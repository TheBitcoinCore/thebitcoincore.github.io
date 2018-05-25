<!-- REVOLUTION SLIDER FUNCTION FOR HOME PAGE STYLE 5  ===== -->

			var tpj=jQuery;
			
			var revapi149;
			tpj(document).ready(function() {
				if(tpj("#rev_slider_149_1").revolution == undefined){
					revslider_showDoubleJqueryError("#rev_slider_149_1");
				}else{
					revapi149 = tpj("#rev_slider_149_1").show().revolution({
						sliderType:"standard",
						jsFileLocation:"revolution/js/",
						sliderLayout:"fullscreen",
						dottedOverlay:"none",
						delay:9000,
						snow: {
							startSlide: "first",
							endSlide: "last",
							maxNum: "400",
							minSize: "0.2",
							maxSize: "6",
							minOpacity: "0.3",
							maxOpacity: "1",
							minSpeed: "30",
							maxSpeed: "100",
							minSinus: "1",
							maxSinus: "100",
						},
						navigation: {
							keyboardNavigation:"off",
							keyboard_direction: "vertical",
							mouseScrollNavigation:"off",
 							mouseScrollReverse:"default",
							onHoverStop:"off",
							touch:{
								touchenabled:"on",
								swipe_threshold: 75,
								swipe_min_touches: 1,
								swipe_direction: "horizontal",
								drag_block_vertical: false
							}
							,
							arrows: {
								style:"uranus",
								enable:true,
								hide_onmobile:false,
								hide_onleave:false,
								tmp:'',
								left: {
									h_align:"left",
									v_align:"center",
									h_offset:10,
									v_offset:0
								},
								right: {
									h_align:"right",
									v_align:"center",
									h_offset:10,
									v_offset:0
								}
							}
						},
						responsiveLevels:[1240,1024,778,480],
						visibilityLevels:[1240,1024,778,480],
						gridwidth:[1240,1024,778,480],
						gridheight:[868,768,960,720],
						lazyType:"none",
						scrolleffect: {
							blur:"on",
							maxblur:"20",
							on_slidebg:"on",
							direction:"top",
							multiplicator:"2",
							multiplicator_layers:"2",
							tilt:"10",
							disable_on_mobile:"off",
						},
						parallax: {
							type:"scroll",
							origo:"slidercenter",
							speed:400,
							levels:[5,10,15,20,25,30,35,40,45,46,47,48,49,50,51,55],
						},
						shadow:0,
						spinner:"spinner3",
						stopLoop:"off",
						stopAfterLoops:-1,
						stopAtSlide:-1,
						shuffle:"off",
						autoHeight:"off",
						fullScreenAutoWidth:"off",
						fullScreenAlignForce:"off",
						fullScreenOffsetContainer: ".site-header",
						fullScreenOffset: "0px",
						hideThumbsOnMobile:"off",
						hideSliderAtLimit:0,
						hideCaptionAtLimit:0,
						hideAllCaptionAtLilmit:0,
						debugMode:false,
						fallbacks: {
							simplifyAll:"off",
							nextSlideOnWindowFocus:"off",
							disableFocusListener:false,
						}
					});
				}

                RsSnowAddOn(tpj, revapi149);					
			});	/*ready*/
		
                    
<!-- REVOLUTION SLIDER FUNCTION FOR HOME PAGE STYLE 3 END  ===== -->