import Vue from 'vue'
import axios from "axios"

axios.defaults.timeout = 5000 //请求超时的时间设定

// Do not add application-level headers to every browser request. The browser
// still supplies transport metadata (for example User-Agent and sec-*), which
// is filtered at the converter before a subscription is fetched.
delete axios.defaults.headers.common.Accept
delete axios.defaults.headers.common["Content-Type"]
delete axios.defaults.headers.common["X-Requested-With"]

Vue.prototype.$axios = axios
