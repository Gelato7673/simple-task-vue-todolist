<template>
	<div class="inputBox shadow">
		<input type="text" placeholder="Type what you hve to do" v-model="newTodoItem" v-on:keyup.enter="addTodo">
		<span class="addContainer" v-on:click="addTodo">
			<i aria-hidden="true" class="addBtn fa fa-plus"></i>
		</span>

		<modal v-if="showModal" @close="showModal = false">
			<h3 slot="header">경고</h3>
			<span slot="footer" @click="showModal = false">
				할일을 입력하세요
				<i aria-hidden="true" class="closeModalBtn fa fa-times"></i>
			</span>
		</modal>
	</div>
</template>

<script>
	import Modal from './common/Modal.vue'

	export default{
		data() {
			return {
				newTodoItem:'',
				showModal: false
			}
		},
		methods: {
			addTodo() {

				//빈칸이거나, 앞뒤로 공백이 있으면 제외하고 local storage에 저장하기
				if (this.newTodoItem !=="") {
					var value = this.newTodoItem && this.newTodoItem.trim();
					this.$emit('addTodo', value);
					this.clearInput();
				} else {
					this.showModal = !this.showModal;
				}
			},
			clearInput() {
				this.newTodoItem = '';
			}
		},
		components: {
				'modal': Modal
		}
	}
</script>

<style scoped>
	input:focus {
		outline: none;
	}
	.inputBox {
		background: white;
		height: 50px;
		line-height: 50px;
		border-radius: 5px;
	}
	.inputBox input {
		border-style: none;
		font-size: 0.9rem;
	}
	.addContainer {
		float: right;
		background : linear-gradient(to right, #6478FB, #8763FB);
		display: block;
		width: 3rem;
		border-radius: 0 5px 5px 0;
	}
	.addBtn {
		color: white;
		vertical-align: middle;
	}
</style>