// 导入组件，组件必须声明 name
import CountNumber from './src/countNumber.vue'

// 为组件提供 install 安装方法，供按需引入
CountNumber.install = function (Vue) {
    Vue.component(CountNumber.name, CountNumber)
}

// 默认导出组件
export default CountNumber