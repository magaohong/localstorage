
		//源生封装创建本地存储，localStorage;


		//检查是否存在指定的key,不存在创建，存在获取值(数组)
		//str为需要创建的key名(字符串)，可在任何环境调用
		function local(str){
			var loc=localStorage,arr;
			if(!loc.getItem(str)){
				loc.setItem(str,[]);
				arr=[];
			}else{
				arr=Array(loc.getItem(str));
			}
			return arr;	
		}

		//str为key名(字符串)，arr为值，可在任何事件中调用
		function addloc(str,arr){
			var loc=localStorage;
				loc.setItem(str,arr);
		}