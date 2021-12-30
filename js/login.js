
	function sub()
	{
		var name=document.getElementById('username').value;
		var pass=document.getElementById('password').value;
		var cpass="2020@usx";
		if(name=="")
		{
			alert("用户名不能为空");
			return;
		}		
		if(pass=="")
		{
			alert("密码不能为空");
			return;
		}

		if( pass==cpass)
		{
		alert("登录成功!");
			//window.location.href="#";
			// window.location.href="index.html"+ $("#username").val()+"";
			window.location.href = "index.html?"+document.getElementById("username").value;
		}
		else
		{
			if(flag==false)
			{
				alert("验证失败!");
				return;
			}
			alert("用户名或密码错误!");
		}
	}
