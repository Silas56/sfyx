$(function(){
			// 城市
			$('#topCity').on('mouseover',function(){
				$('#allcity').show();
				$('#allcity').on('mouseover',function(){
					$('#allcity').show();
				}).on('mouseout',function(){
					$('#allcity').hide();
				})
				$('#topCity').find('i').removeClass().addClass("icon-caret-up")
			}).on('mouseout',function(){
			$('#allcity').hide();
			$('#topCity').find('i').removeClass().addClass("icon-caret-down")
		    })
		    $('#allcity').on('click','a',function(){
		    	var kerword = $(this).text();
		    	$('#city').text(kerword);
		    })
            // 我的优选
		    $('#topChoose').on('mouseover',function(){
		    	$('#mychoose').show();
		    	$('#topChoose').find('i').removeClass().addClass("icon-caret-up")
		    	$('#mychoose').on('mouseover',function(){
		    		$('#mychoose').show();
		    	}).on('mouseout',function(){
		    		$('#mychoose').hide();
		    	})
		    }).on('mouseout',function(){
		    	$('#mychoose').hide();
		    	$('#topChoose').find('i').removeClass().addClass("icon-caret-down")
		    })
		    // 微信二维码
		    $('#weixing').on('mouseover',function(){
		    	$('#erweima').show()
		    }).on('mouseout',function(){
		    	$('#erweima').hide()
		    })
		    // 帮助中心
		    $('#helpcenter').on('mouseover',function(){
		    	$('#help').show();
		    	$('#helpcenter').find('i').removeClass().addClass("icon-caret-up")
		    	$('#help').on('mouseover',function(){
		    		$('#help').show();
		    	}).on('mouseout',function(){
		    		$('#help').hide();
		    	})
		    }).on('mouseout',function(){
		    	$('#help').hide();
		    	$('#helpcenter').find('i').removeClass().addClass("icon-caret-down")
		    })
		    // 移动客户端
		    $('#topClient').on('mouseover',function(){
		    	$('#moveclient').show();
		    	$('#moveclient').on('mouseover',function(){
		    		$('#moveclient').show();
		    	}).on('mouseout',function(){
		    		$('#moveclient').hide();
		    	})
		    }).on('mouseout',function(){
		    	$('#moveclient').hide();
		    })
		    //网站导航
		    $('#topNav').on('mouseover',function(){
		    	$('#webNav').show();
		    	$('#topNav').find('i').removeClass().addClass("icon-caret-up")
		    	$('#webNav').on('mouseover',function(){
		    		$('#webNav').show();
		    	}).on('mouseout',function(){
		    		$('#webNav').hide();
		    	})
		    }).on('mouseout',function(){
		    	$('#webNav').hide();
		    	$('#topNav').find('i').removeClass().addClass("icon-caret-down")
		    })
		    // 购物车弹框
		    $('#shoppingClick').on('mouseover',function(){
				$('#viewshopping').show();
				$('#viewshopping').on('mouseover',function(){
					$('#viewshopping').show();
				}).on('mouseout',function(){
					$('#viewshopping').hide();
				})
			}).on('mouseout',function(){
				$('#viewshopping').hide();
			})
			//广告栏 
			$('#menu').on('mouseover','li',function(){
				var idx = $(this).index();
				$(this).find('a').removeClass().addClass('newActive');
				$(this).css({background:'#fff'}).siblings('li').css({background:'#76ac25'});
				$(this).find('#test').css({
					background:'url(src/img/banner_icon.png)',
				})
				$(this).on('mouseover',function(){
					$('#menu_tan0').show();
					$('#menu_tan0').on('mouseover',function(){
						$('#menu_tan0').show();
					}).on('mouseout',function(){
					$('#menu_tan0').hide();
				})
				}).on('mouseout',function(){
					$('#menu_tan0').hide();
				})
			}).on('mouseout','li',function(){
				$(this).find('a').removeClass('newActive');
				$(this).css({background:'#76ac25'})
			});
			// 轮播图
			var imgList=document.getElementById("imgList");
			var imgLis=imgList.getElementsByTagName("li");
			var navList=document.getElementById("navList");
			var navLis=navList.getElementsByTagName("li");
				imgList.innerHTML += imgList.innerHTML;
			var width=imgLis[0].offsetWidth;
			var height=imgLis[0].offsetHeight;
				imgList.style.width=(imgLis.length*width)+"px";
			var i=0;
			var t=3000;
			var isMoving=false;
			var timer=setTimeout(move,t);
				function move(){
					i++;
					isMoving=true;
					var end=-1*1000*i;
					starMove(imgList,"left",end,stop);
					var index = i;
					if(i>=imgLis.length/2){
						index=0;
					}
					showBtn(navLis,index);
				}
				function stop(){
					if(i>=imgLis.length/2){
						i=0;
						imgList.style.left="0px";
					}
					timer=setTimeout(move,t);
					isMoving=false;
				}
				for(var k=0;k<navLis.length;k++){
					navLis[k].xxx=k;
					navLis[k].onclick=function(){
						clearTimeout(timer);
						i=this.xxx-1;
						move();
					}
				}
		})