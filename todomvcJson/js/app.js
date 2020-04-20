var app = new Vue({
    el: '#app',
    data: {
        title: "toDoList",
        todoData: [],
        input_val: '',
        ched: false,
    },
	//页面渲染(展示)之前运行
    mounted: function () {
    	//var that =this;
		this.getall();
    },
    methods: {
    	getall(){
			axios.get('http://localhost:3002/data1')
				.then((backdata)=> {
					var data = backdata.data;
					console.log(data);
					//that.todoData =data;
					this.todoData =data;
				});
		},
        addToDoList: function () {
            if (this.input_val == '') {
                alert('内容不能为空');
                return false;
            }
            if (this.todoData.length == 0) {
                var ids = 1;
            } else {
                var ids = parseInt(this.todoData[this.todoData.length - 1].id) + 1;
            }
            var ob = {
                id: ids,
				title: this.input_val,
                status: false,
            };
			axios({
				method:'post',
				url:'http://localhost:3002/data1',
				data:ob,
			}).then((backdata)=>{
				var data = backdata.data;
				if( backdata.status==201){
					this.todoData.push(ob);
					this.input_val = '';
				}
			});

        },
        selectAll: function () {
            var c = !this.ched;
            for (var i = 0; i < this.todoData.length; i++) {
            	this.todoData[i].status =c;
				axios({
					method:'put',
					url:'http://localhost:3002/data1/'+this.todoData[i].id,
					data:this.todoData[i],
				}).then((backdata)=>{
					if( backdata.status==200){
						//this.todoData[i].status = c;
					}
				});

            }
        },

        del: function (key) {
			axios({
				method:'delete',
				url:'http://localhost:3002/data1/'+this.todoData[key].id,
			}).then((backdata)=>{
				if( backdata.status==200){
					this.todoData.splice(key, 1);
				}
			});
        },
        clearAll: function () {
        	var l=this.todoData.length
			for (var i = 0; i < l; i++) {
				if (this.todoData[i].status == true) {
					axios({
						method: 'delete',
						url: 'http://localhost:3002/data1/' + this.todoData[i].id,
					}).then((backdata) => {
						if (backdata.status == 200) {
							//this.todoData[i].status = c;
							this.getall();
						}
					});
				}
			}
        },
    },
});
