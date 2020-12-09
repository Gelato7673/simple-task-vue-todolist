var example1 = new Vue({
	el: '#example-1',
	data: {
		counter: 0
	}
})

var example2 = new Vue({
	el: '#example-2',
	data: {
		name: 'Vue.js'
	},
	// 메소드는 'methods' 객체 안에 정의합니다.
	methods: {
		greet: function(event) {
			// 메소드 안에서 사용하는 this는 Vue 인스턴스를 가리킵니다.
			alert('Hello' + this.name + '!')
			// event는 네이티브 Dom 이벤트 입니다.
			if(event){
				alert(event.target.tagName)
			}
		}
	}
})

var example3 = new Vue({
	el: '#example-3',
	methods: {
		say: function(message) {
			alert(message)
		},
		warn: function(message, event) {
			//native evnet에 엑세스 할 수 있습니다.
			if (event) event.preventDefault()
				alert(message)
		}
	}
})