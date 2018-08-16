setTimeout(function(){   
	  window.fcWidget.init({
		token: "30fd20c9-a8a7-4c44-ac5e-d2b97b5b4542",
		host: "https://wchat.freshchat.com"
	  });
	  
	  Appcues.user().then(function(appUser) {	  
		  window.fcWidget.user.setFirstName(appUser.first_name);
		  window.fcWidget.user.setLastName(appUser.last_name);
		  window.fcWidget.user.setEmail(appUser.email);
		  
		  window.fcWidget.user.setProperties({
			userId : appUser.userId,
			account_name : appUser.account_name,
			plan_tier : appUser.plan_tier,
			is_owner : appUser.is_owner,
			is_trial : appUser.is_trial,
			language : appUser.language,
			new_automation_reminder : appUser.new_automation_reminder,
			pipeline_id : appUser.pipeline_id,
			account_version : appUser.account_version,
			created_at : appUser.created_at,
			site_name : '%SITENAME%',
			site_url : '%SITEURL%'
		  });
	  });
	  
	  FreshWidget.init("", {"queryString": "&widgetType=popup", "utf8": "✓", "widgetType": "popup", "buttonType": "text", "buttonText": "Gởi hỗ trợ", "buttonColor": "white", "buttonBg": "#006063", "alignment": "2", "offset": "235px", "formHeight": "500px", "url": "https://automationtransform.freshdesk.com", "requester": appUser.email} );
  }, 3500);
