import { createApp } from 'vue'
import App from './App.vue'

import './assets/main.css'

import { Amplify, Auth, Hub, PubSub } from 'aws-amplify'
// import { PubSub } from 'aws-amplify'
import { AWSIoTProvider } from '@aws-amplify/pubsub'

createApp(App).mount('#app')
