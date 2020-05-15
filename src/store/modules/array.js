import axios    from 'axios'
import resource from 'resource-axios' // Применение 'resource-axios'
const DB = resource(process.env.VUE_APP_RESOURCE, axios) // Применение 'resource-axios'
const PROTOTYPE = 'prototype'

export default {
    actions: {
        async fetchJSArray(ctx) {
            await DB.get("javascript/array.html").then(response => {
                const html = new DOMParser().parseFromString(response.data.trim(), "text/html");
                let listNodes = html.getElementsByClassName("quick-links")[0].getElementsByTagName("ol")[0].children;
                let listProps = listNodes[2].getElementsByTagName('li');
                let listMethods = listNodes[3].getElementsByTagName('li');
                const designationProps = 'props'
                const designationMethods = 'methods'
                const jsArrayProps = getArray(listProps, designationProps);
                const jsArrayMethods = getArray(listMethods, designationMethods);

                function getArray(collection, designation) {
                    const tempArray = [];
                    collection.forEach((currentValue, currentIndex) => {
                        const temp = {};
                        const expulsion = [];
                        temp.designation = [];
                        temp.id = ++currentIndex
                        let name = currentValue.getElementsByTagName("a")[0].textContent
                        temp.name = ((/(?!Array$)\.\S+/g).test(name) ? name.match(/(?!Array$)\.\S+/g)[0] : name).replace(/(.prototype)/, '')
                        temp.description = currentValue.getElementsByTagName("a")[0].title
                        temp.link = currentValue.getElementsByTagName("a")[0].pathname
                        currentValue.getElementsByClassName("icon-warning-sign")[0] ? expulsion.push("no_standardized") : ''
                        currentValue.getElementsByClassName("icon-trash")[0] ? expulsion.push('destroyed') : ''
                        currentValue.getElementsByClassName("icon-thumbs-down-alt")[0] ? expulsion.push('deprecated') : ''
                        currentValue.getElementsByClassName("icon-beaker")[0] ? expulsion.push('experimental') : ''
                        temp.isExpulsion = expulsion.some(value => value !== null)
                        temp.expulsion = expulsion
                        temp.designation.push(designation)
                        if((/prototype/g).test(name)){
                            temp.designation.push(PROTOTYPE)
                        }
                        temp.isTranslate = !currentValue.getElementsByTagName("a")[1]
                        tempArray.push(temp)
                    });
                    return tempArray
                }

                ctx.commit('updateJSArrayProps', jsArrayProps)
                ctx.commit('updateJSArrayMethods', jsArrayMethods)
            })
        }
    },
    mutations: {
        updateJSArrayProps(state, jsArrayProps) {
            state.jsArrayProps = jsArrayProps
        },
        updateJSArrayMethods(state, jsArrayMethods) {
            state.jsArrayMethods = jsArrayMethods
        }
    },
    state: {
        jsArrayProps: [],
        jsArrayMethods: []
    },
    getters: {
        allJSArray(state) {
            return state.jsArrayProps.concat(state.jsArrayMethods)
        },
        allJSArrayProps(state) {
            return state.jsArrayProps
        },
        allJSArrayMethods(state) {
            return state.jsArrayMethods
        }
    }
}
