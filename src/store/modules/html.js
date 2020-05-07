import axios    from 'axios'
import resource from 'resource-axios' // Применение 'resource-axios'
const DB = resource(process.env.VUE_APP_RESOURCE, axios) // Применение 'resource-axios'
export default {
    actions: {
        async fetchHtmlElements(ctx) {
            DB.get("html.html").then(response => {
                const html = new DOMParser().parseFromString(response.data.trim(), "text/html");
                let listNodes = html.getElementsByClassName("toggle")[2].getElementsByTagName("ol")[0].getElementsByTagName("li");
                const htmlElements = [];
                listNodes.forEach((currentValue, currentIndex) => {
                    const temp = {};
                    const expulsion = [];
                    temp.id = ++currentIndex
                    temp.name = currentValue.getElementsByTagName("a")[0].textContent
                    temp.description = currentValue.getElementsByTagName("a")[0].title
                    temp.link = currentValue.getElementsByTagName("a")[0].pathname
                    currentValue.getElementsByClassName("icon-warning-sign")[0] ? expulsion.push("no_standardized") : ''
                    currentValue.getElementsByClassName("icon-trash")[0] ? expulsion.push('destroyed') : ''
                    currentValue.getElementsByClassName("icon-thumbs-down-alt")[0] ? expulsion.push('deprecated') : ''
                    currentValue.getElementsByClassName("icon-beaker")[0] ? expulsion.push('experimental') : ''
                    temp.isExpulsion = expulsion.some(value => value !== null)
                    temp.expulsion = expulsion
                    temp.isTranslate = !currentValue.getElementsByTagName("a")[1]
                    htmlElements.push(temp)
                });
                ctx.commit('updateHtmlElements', htmlElements)
            })
        }
    },
    mutations: {
        updateHtmlElements(state, htmlElements) {
            state.htmlElements = htmlElements
        }
    },
    state: {
        htmlElements: []
    },
    getters: {
        allHtmlElements(state) {
            return state.htmlElements
        }
    }
}

// const temp = {
//     id: '',
//     name: '',
//     expulsion: {
//         not_standardized: '',
//         destroyed: '',
//         deprecated: '',
//         experimental: '',
//         translate: '',
//     },
//     isExpulsion:'',
//     isTranslate:'',
//     description: '',
//     link: '',
// }
