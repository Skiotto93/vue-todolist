"use strict";

const { createApp } = Vue

createApp({
    data() {
        return {
            newTodo: '',
            todoList: [
                {
                text: "Comprare pane",
                done: true
                },
                {
                text: "Comprare latte",
                done: true
                },
                {
                text: "Andare a giocare a calcetto",
                done: false
                },
                {
                text: "Leggere un libro",
                done: false
                }
            ],
            
        }
    },
    
    methods: {
        removeTodo(i) {
            this.todoList.splice(i, 1);
        },
        addTodo() {
            if( this.newTodo !== ' ' ) {
                const newTodo = {
                    text: this.newTodo,
                    done: false,
                };
                this.todoList.push(newTodo);
                this.newTodo = '';
            }
        }
    }
}).mount('#app');